var mysql= require('mysql2')

var connection=mysql.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"mysql",
    "database":"nodedb"
})
module.exports=connection

