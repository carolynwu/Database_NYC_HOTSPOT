var mysql=require("mysql");

var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"0000",
    database:"test"
});

var q="SELECT * FROM account";
connection.query(q,function(error,results, fields){
    if(error) throw error;
    console.log(results);
});

connection.end();
