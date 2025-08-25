const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "allison",
  password: "",
  database: "crudweb",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { name } = req.body;
  const { cost } = req.body;
  const { category } = req.body;

  let SQL = "INSERT INTO games (name, cost, category) VALUES (?,?,?)";

  db.query(SQL, [name, cost, category], (err, result) => {
    console.log(err);
  });
});

app.get("/getCards", (req, res) => {
  let SQL = "SELECT * FROM crudweb.games";

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.listen(3001, () => {
  console.log("server on");
});

// test server
// app.get("/", (req, res) => {
//   let SQL =
//     "INSERT INTO games (name, cost, category) VALUES ('GTA V', '120', 'Ação')";

//   db.query(SQL, (err, result) => {
//     console.log(err);
//   });
// });

// app.get("/", (req, res) => {
//   res.send("olá");
// });
