// 連線 DB 函數
import mysql from "mysql2";
import dotenv from 'dotenv-defaults';

dotenv.config();

var connection = mysql.createConnection({
  host: "containers-us-west-42.railway.app",
  user: "root",
  password: process.env.PASSWORD,
  database: "railway",
  port: 7622,
});

export default connection;
