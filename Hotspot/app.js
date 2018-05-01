
var express= require("express");
const cors=require("cors");

var mysql=require("mysql");
var app= express();
app.use(cors());

var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"0000",
    database:"test"
});

app.get("/",function(req,res) {
    res.send("connected")
});

app.get("/chart",function(req,res){
    // find count of  object ID in DB
      var t= "SELECT" +
        "(SELECT COUNT(*) FROM accounts WHERE Borough_NAME='Brooklyn') AS brooklyn_wifi ,"+
         "(SELECT COUNT(*) FROM accounts WHERE Borough_NAME='Queens' ) AS queens_wifi ,"+
         "(SELECT COUNT(*) FROM accounts WHERE Borough_NAME='Manhattan') AS Manhattan_wifi" +
         "(SELECT COUNT(*) FROM accounts WHERE Borough_NAME='Bronx') AS bronx_wifi"+
        "(SELECT COUNT(*) FROM accounts WHERE Borough_NAME='Staten Island') AS Staten_Island_wifi";

    connection.query(t,function(err, result){
        if (err) throw err;
        else{
            return res.json({
                data:result
            })
        }
    });
    connection.query(q,function(err, result){
        if (err) throw err;
        else{
            return res.json({
                data:result
            })
        }
    });
    connection.query(m,function(err, result){
        if (err) throw err;
        else{
            return res.json({
                data:result
            })
        }
    });
});


app.listen(8080, function(){
    console.log("Server running on 8080!");
})
