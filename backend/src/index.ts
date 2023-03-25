import express from "express";
import mysql from "mysql";
const app = express();

var port = 4000;
var userId = 1;
var newNumber = 4;

var con = mysql.createConnection({
  port: 3306,
  host: "localhost",
  database: "Calculator",
  user: "root",
  password: "password"
});

con.connect(function(err) {
  if(err) throw err;
  console.log("Connected!");
});

app.get('/', (req, res) => {
  con.query(`SELECT * FROM Memory WHERE idMemory=${userId}`, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
})

app.post('/', (req, res) => {
  con.query(`UPDATE Memory SET value = ${req.query.number} WHERE idMemory = ${req.query.user}`, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record updated");
    res.status(200).send(result);
  });
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})