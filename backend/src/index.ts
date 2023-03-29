import express from "express";
import mysql from "mysql";
import cors from "cors";
import { FRONTEND_DOMAIN, PORT, DB_PORT, DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USERNAME, USER_ID } from "./configuration";
require("dotenv").config();

const app = express();

var port = PORT;
var userId = USER_ID;

var con = mysql.createConnection({
  port: Number(DB_PORT),
  host: DB_HOST,
  database: DB_DATABASE,
  user: DB_USERNAME,
  password: DB_PASSWORD
});

app.use(cors({ origin: FRONTEND_DOMAIN, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

con.connect(function(err) {
  if(err) throw err;
  console.log("Connected!");
});

app.get('/', (req, res) => {
  con.query(`SELECT * FROM Memory WHERE idMemory=${userId}`, function (err, result) {
    if (err) throw err;
    res.send(result[0]);
  });
})

app.post('/', (req, res) => {
  con.query(`UPDATE Memory SET value = ${req.body.number} WHERE idMemory = ${req.body.user}`, function (err, result) {
    if (err) throw err;
    res.status(200).send(result);
  });
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})