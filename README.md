# Database-Project-WiFi-Hotspots

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

## React :heavy_plus_sign: Express
1. npm init
2. npm install express --save
3. npm install mysql --save
4. npm install -g create-react-app
5. npm add express mysql cors 
6. npm start

## Create schema- using chartjs
npm install react-chartjs-2 chart.js --save



using FusionTablesLayer

Map with a SearchBox

reference from https://github.com/tomchentw/react-google-maps


