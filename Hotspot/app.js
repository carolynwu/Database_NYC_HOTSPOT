
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
     var b= "SELECT COUNT(*) AS brooklyn_wifi FROM account WHERE Borough_NAME='Brooklyn'";
     var q= "SELECT COUNT(*) AS queens_wifi FROM account WHERE Borough_NAME='Queens' ";
     var m= "SELECT COUNT(*) AS Manhattan_wifi FROM account WHERE Borough_NAME='Manhattan' ";

    connection.query(b,function(err, result){
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
