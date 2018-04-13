function verifyIndexExists(indexName, esClient) {
  return new Promise((resolve, reject) => {
    esClient.indices.exists({
      index: indexName
    }, (error, response) => {
      if (error) {
        reject(error)
      }

      resolve(response)
    })
  })
}

function createIndex(indexName, esClient) {
  return new Promise((resolve, reject) => {
    esClient.indices.create({
      index: indexName
    }, (error, response) => {
      if (error) {
        reject(error)
      }
      resolve(response)
    })
  })
}

function insertDocument(doc, indexName, docType, esClient) {
  return new Promise((resolve, reject) => {
    esClient.index({
      index: indexName,
      type: docType,
      body: doc
    }, (error, response) => {
      if(error) {
        reject(error)
      }

      resolve(response)
    });
  })
}

function deleteIndex(indexName, esClient) {
  return new Promise((resolve, reject) => {
    esClient.indices.delete({
      index: indexName
    }, (error, response) => {
      if(error) {
        reject(error)
      }

      resolve(response)
    })
  })
}

module.exports = {
  verifyIndexExists,
  createIndex,
  insertDocument,
  deleteIndex
}