import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

var port = 4000;
var userId = 1;

var con = mysql.createConnection({
  port: 3306,
  host: "localhost",
  database: "Calculator",
  user: "root",
  password: "password"
});

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

con.connect(function(err) {
  if(err) throw err;
  console.log("Connected!");
});

app.get('/', (req, res) => {
  con.query(`SELECT * FROM Memory WHERE idMemory=${userId}`, function (err, result) {
    if (err) throw err;
    console.log('get result', result[0]);
    res.send(result[0]);
  });
})

app.post('/', (req, res) => {
  console.log(req.body)
  con.query(`UPDATE Memory SET value = ${req.body.number} WHERE idMemory = ${req.body.user}`, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record updated");
    res.status(200).send(result);
  });
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})