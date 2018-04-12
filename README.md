# Database-Project-WiFi-Hotspots
Final project for CS 4354 Database Course

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
5. npm start
## Create schema


mock demo  for NYC hotspot visualization
![1](https://user-images.githubusercontent.com/22507322/38677582-50460a36-3e24-11e8-89db-6ce09cff5185.jpg)


Group member:

Xujia Wu  [@carolynwu](https://github.com/carolynwu)

Robin Ronson [@robrons96](https://github.com/robrons96)

Eddie Garcia [@gar37012](https://github.com/gar37012)


#Presentation Slide Link: https://docs.google.com/presentation/d/1mLiMs6jZFwZXFefgL2Vi-HRk8j8RLaBf_s2JMNLRiJA/edit?usp=sharing
