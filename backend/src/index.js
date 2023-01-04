import sql from "./sql.js";
import express from "express";
import cors from "cors";
import { dataInit } from "./upload.js";
import passport from "passport";
import cookieSession from "cookie-session";
import cookieParser from 'cookie-parser';
import router from "./routes/index.js";
import bodyparser from 'body-parser';
import {requireAuth, checkUser } from './middleware/authMiddleWare.js';
import dotenv from 'dotenv-defaults';
import * as path from 'path';
import wakeUpDyno from "./wakeUpDyno.js"

dotenv.config();
sql.connect(function (err) {
  if (err) throw err;
  // console.log("Connected!");
  dataInit(sql);
});

const app = express();
app.set("view engine", "ejs");
app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 3 * 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

// init middleware
app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
}
));
app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json())
// define routes
// app.use("/", test);
// app.get('*', checkUser);
app.get("*", checkUser);
app.use("/", router);

const __dirname = "../frontend"
app.use(express.static(path.join(__dirname, "build")))
app.get("/*", function(req, res){
  res.sendFile('index.html', {root: __dirname + "build"})
})


// define server
const port = process.env.PORT || 4000;
app.listen(port, () => {
   console.log(`Server is up on port ${port}.`);
   const DYNOURL = "http://wp1111-final-21.herokuapp.com/"
   wakeUpDyno(DYNOURL);
});
