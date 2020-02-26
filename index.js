const db = require('./db/index')

db.query("insert into test_table (column1) values(2)", null, (err, data)=>{
    if(err){
        console.error('err---', err)
    }console.log("sended")
})

console.log('this is workssadf');
