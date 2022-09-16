const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const { encrypt, decrypt } = require("./EncryptionHandler");

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Tatan1234",
  database: "loginsystem",
});

app.post("/registration", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const HashedPassword = encrypt(password);
  const transpassword = req.body.transpassword;
  const TransactionPassword = encrypt(transpassword);
  db.query(
    "INSERT INTO users(username, password, name, HashedPassword, Encryptediv,firstname,lastname,mobileno,address,city,country,postalcode,bankno,ifsc,pan,currentbal, TransactionPassword, TransactionPasswordIv) VALUES (?, ?, ?, ?, ?,?, ?, ?, ?, ?,?, ?, ?, ?, ?,?,?,?)",
    [
      username,
      password,
      name,
      HashedPassword.password,
      HashedPassword.iv,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      TransactionPassword.password,
      TransactionPassword.iv,
    ],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password combination" });
      }
    }
  );
});

app.post("/profileInfo", (req, res) => {
  const username = req.body.username;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const mobileno = req.body.mobileno;
  const address = req.body.address;
  const city = req.body.city;
  const country = req.body.country;
  const postalcode = req.body.postalcode;
  const bankaccountno = req.body.bankaccountno;
  const ifsc = req.body.ifsc;
  const pan = req.body.pan;
  const currentBalance = req.body.currentBalance;
  console.log(username);
  db.query(
    "UPDATE users SET firstname = ? ,lastname = ?, mobileno= ?, address=?, city = ?, country = ?, postalcode = ?, bankno = ?, ifsc = ?, pan = ?, currentbal = ? WHERE username = ?",
    [
      firstname,
      lastname,
      mobileno,
      address,
      city,
      country,
      postalcode,
      bankaccountno,
      ifsc,
      pan,
      currentBalance,
      username,
    ],
    (err, result) => {
      console.log(err);
    }
  );
  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      res.send(result);
    }
  );
});

/*app.get("/profileInfo", (req, res) => {
  const username = localStorage.email;
  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      res.send(result);
    }
  );
});*/

app.post("/updatedBal", (req, res) => {
  const username = req.body.username;
  const updatedBal = req.body.updatedBal;
  console.log(updatedBal);
  db.query(
    "UPDATE users SET currentbal = ? WHERE username = ?",
    [updatedBal, username],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/encryptPassword", (req, res) => {
  const email = req.body.email;
  db.query(
    "SELECT TransactionPassword, TransactionPasswordIv FROM users WHERE username = ?",
    [email],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(decrypt(result[0]));
    }
  );
});

app.post("/getpassword", (req, res) => {
  const username = req.body.username;
  db.query(
    "SELECT password FROM users WHERE username = ?",
    [username],
    (err, result) => {
      if (err) console.log(err);
      res.send(result);
    }
  );
});

app.post("/withdrawnBal", (req, res) => {
  const username = req.body.username;
  const updatedBal = req.body.updatedBal;
  console.log(updatedBal);
  db.query(
    "UPDATE users SET currentbal = ? WHERE username = ?",
    [updatedBal, username],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/sendBal", (req, res) => {
  const username = req.body.username;
  const amount = req.body.amount;
  console.log(amount);
  db.query(
    "UPDATE users SET currentbal = currentbal + ? WHERE username = ?",
    [amount, username],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/sendMessages", (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const amount = req.body.amount;
  const status = req.body.status;
  const date = req.body.date;
  const time = req.body.time;
  db.query(
    "INSERT INTO messages(TransactionUsername,TransactionEmail,Amount,Status,Date, Time) VALUES(?, ?, ?, ?, ?, ?)",
    [username, email, amount, status, date, time],
    (err, result) => {
      console.log(err);
    }
  );
});

app.get("/receiveMessages", (req, res) => {
  db.query("SELECT * FROM messages;", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.post("/getCurrentBalance", (req, res) => {
  const username = req.body.username;
  db.query(
    "SELECT currentbal FROM users WHERE username = ?",
    [username],
    (err, result) => {
      res.send(result);
    }
  );
});

app.post("/changeTransactionPassword", (req, res) => {
  const password = encrypt(req.body.password);
  const username = req.body.username;
  console.log(password.password);
  db.query(
    "UPDATE users SET TransactionPassword = ?,TransactionPasswordIv = ? WHERE username = ?",
    [password.password, password.iv, username]
  );
});

app.listen(3001, () => {
  console.log("running server");
});
