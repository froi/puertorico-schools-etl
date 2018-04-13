const fetch = require('node-fetch')
const { School, StandardTestScores, getSchoolEnrollmentType, Geolocation } = require('./libs/models')
const elasticsearch = require('elasticsearch')
const { verifyIndexExists, createIndex, insertDocument, deleteIndex } = require('./libs/utils')

const client = elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
})

verifyIndexExists('pr_schools', client)
  .then(indexExists => {
    if(indexExists) {
      return deleteIndex('pr_schools', client)
    }
    return createIndex('pr_schools', client)
  })
  .then(() => fetch('https://data.pr.gov/resource/ceib-pqg3.json'))
  .then(response => response.json())
  .then(data => { // Transform data into our models
    const schoolList = []
    for(item of data) {
      let enrollment

      const standardTestScores = new StandardTestScores(item)
      const geolocation  = new Geolocation(item.geolocalizacion || {})

      if(item.hasOwnProperty('nivel_original') && item.nivel_original) {
        enrollment = getSchoolEnrollmentType(item)
      }

      const school = new School(item, geolocation, standardTestScores, enrollment)

      schoolList.push(school)
    }

    return schoolList
  })
  .then(schoolList => {
    schoolList.forEach(school => {
      insertDocument(school, 'pr_schools', 'school', client)
        .then(response => console.log(response))
        .then(() => 'Done!')
        .catch(error => console.error(error))
    })
  })
  .catch(error => console.error('ERROR:', error))
   

    
  