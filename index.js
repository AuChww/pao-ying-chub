const express = require("express");
const app = express();
const mysql = require("mysql");

app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "PaoYingChub",
});