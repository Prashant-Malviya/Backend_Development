import express from "express";
import path from "path";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017", { dbName: "Backend" })
  .then(() => console.log("Db Connected"))
  .catch((e) => console.log(e));

const app = express();

const users = [];

// app.get("/",(req,res)=>{
//     // res.s                                                     end("hi");
//     // res.sendStatus(500);
//     // res.sendStatus(404)// these are known as status code

//     // res.json({
//     //     success: true,
//     //     product : [],
//     // })

//     // const pathlocation = path.resolve();

//     res.render()
// })
// using middleware
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // res.render("index.ejs")

  res.render("index.ejs", { name: "Prashant" });
  // res.sendFile('index')
});

app.get("/success", (req, res) => {
  res.render("success.ejs");
});

app.get("/add", (req, res) => {
  res.send("Nice");
});

app.post("/contact", (req, res) => {
  console.log(req.body);

  users.push({ username: req.body.name, email: req.body.email });

  res.render("success.ejs");
  console.log(users);
});

app.get("/users", (req, res) => {
  res.json({
    users,
  });
});

app.listen(5000, () => {
  console.log("server is working");
});
