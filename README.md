# Database-Project-WiFi-Hotspots

Two opitions:

1. charts using PHP and MySQL

2. Charts using Node.js ExpressJS and Mondodb

I chose Node.js, expressJs and Mysql which is really unwisdom :poop:


## Node :heavy_plus_sign: MySQL

step 1. download Node and install the MySQL Node Package

```
npm install mysql
```

step 2. connect database to Node

```
var mysql=require("mysql");
var connection=mysql.createConnection({
    host:"localhost",
    user:"username",
    database:" database_name"
})
```
step 3: run queries
```
connection.query("SELECT CURDATE()",function(error,results, fields){
    if(error) throw error;
    console.log(results);
});

connection.end();
```
reference from https://github.com/mysqljs/mysql

I got the json format data from my localhost


## React :heavy_plus_sign: Express
1. npm init
2. npm install -g create-react-app
3. npm add express mysql cors 
4. npm start


## Create schema- using chartjs
```
npm install react-chartjs-2 chart.js --save
```


using FusionTablesLayer

Map with a SearchBox

reference from https://github.com/tomchentw/react-google-maps


