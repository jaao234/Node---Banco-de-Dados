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
 
  
 let query = "insert into usuario (login, senha) values('julio123', 123456)";
 connection.query(query, function(error, results, fields){
    console.log(results);
    console.table(results);
 })
 connection.end();