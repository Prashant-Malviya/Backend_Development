import express from "express";
import path from "path";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017", { dbName: "Backend" })
  .then(() => console.log("Db Connected"))
  .catch((e) => console.log(e));

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Message = mongoose.model("Message", messageSchema);

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

// app.get("/add", async (req, res) => {

//   await Message.create({name:"Prashant Malviya",email:"p@gmail.com"})

//     res.send("Nice");
// }); // this is dummy data store example

app.post("/contact", async (req, res) => {
  const { name, email } = req.body;

  await Message.create({ name, email });

  res.redirect("/success");
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
