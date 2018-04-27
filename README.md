# Database-Project-WiFi-Hotspots

Two opitions:

1. charts using PHP and MySQL  :innocent:

2. Charts using Node.js ExpressJS and Mondodb :innocent:

You can find reference https://www.fusioncharts.com/dev/using-with-server-side-languages/tutorials/php-mysql-charts

I chose Node.js, expressJs and Mysql which is really dumb :poop:

## Running locally

### Node :heavy_plus_sign: MySQL

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
![1](https://user-images.githubusercontent.com/22507322/39372207-5b30d3fe-4a09-11e8-82c9-239b20e55ef8.PNG)



### React :heavy_plus_sign: Express
1. npm init
2. npm install -g create-react-app
3. npm add express mysql cors    
4. npm start


:heart: I figured out how to pass data from express to react (express as backed and react as front end) :heart:

reference from https://www.youtube.com/watch?v=8bNlffXEcC0


### Create schema- using chartjs
```
npm install react-chartjs-2 chart.js --save
```
:broken_heart:  I do not know how to save the data which got from express to pass to chartjs so the data which show in the graph which is not dynamic  :broken_heart:

## Deploy to Heroku
```
$ heroku login
$ git add .
$ git commit -am "make it better"
$ git push heroku master
```
 link :arrow_right: https://nyc-wifi-database.herokuapp.com :arrow_left:




