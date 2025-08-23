const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "CrudWeb",
});

app.get("/", (req, res) => {
  let SQL =
    "INSERT INTO games (name, cost, category) VALUES ('GTA V', '120', 'Ação')";

  db.query(SQL, (err, result) => {
    console.log(err);
  });
});

// app.get("/", (req, res) => {
//   res.send("olá");
// });

app.listen(3001, () => {
  console.log("server on");
});
