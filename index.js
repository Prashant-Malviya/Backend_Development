import express from 'express';


const app = express();

app.get("/",(req,res)=>{
    // res.send("hi");
    // res.sendStatus(500);
    // res.sendStatus(404)// these are known as status code

    // res.json({
    //     success: true,
    //     product : [],
    // })

    const pathlocation = path.resolve();

    res.render()
})

app.listen(5000, ()=>{
    console.log('server is working');
})