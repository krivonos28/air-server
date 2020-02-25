const db = require('../db/index')

db.query('CREATE TABLE airports', [], (res, err) => {
    if (err) {
      return (err)
    }
    console.log('good')
})