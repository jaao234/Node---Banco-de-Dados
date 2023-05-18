const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password:'',
    port: 3307,
    database : 'joaogabriel'
});

 connection.connect();
console.log("conectado")
 
  
 let query = "update usuario set senha = 891027 where codigo = 6;";
 connection.query(query, function(error, results, fields){
    console.log("Alteraçoes feitas ");

 })
 connection.end();