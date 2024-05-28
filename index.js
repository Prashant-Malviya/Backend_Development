import express from 'express';
import path from 'path'

const app = express();

// app.get("/",(req,res)=>{
//     // res.send("hi");
//     // res.sendStatus(500);
//     // res.sendStatus(404)// these are known as status code

//     // res.json({
//     //     success: true,
//     //     product : [],
//     // })

//     // const pathlocation = path.resolve();

//     res.render()
// })

     app.use(express.static(path.join(path.resolve(),"public")));
     console.log();


app.get("/", (req,res) => {
    // res.render("index.ejs")

    res.render("index.ejs",{name:"Prashant"})
    // res.sendFile('index')
})

app.listen(5000, ()=>{
    console.log('server is working');
})