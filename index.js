import express from 'express';


const server = express();

server.listen(5000, ()=>{
    console.log('server is working');
})