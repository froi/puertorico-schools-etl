const fetch = require('node-fetch')
const { School, StandardTestScores, getSchoolEnrollmentType, Geolocation } = require('./libs/models')

fetch('https://data.pr.gov/resource/ceib-pqg3.json')
  .then(response => response.json())
  .then(data => {
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

    console.log(schoolList[0])
  });