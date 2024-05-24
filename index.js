// console.log("namaste bharat");
// console.log("jai hind, bande matram");

import http from 'http'

// const http = require("http");

// const name = require('./features');

// import name, {name2,name3} from './features.js'
// import { name2,name3 } from './features.js'; // if not want like this do in one alike above import

// import * as myObj from "./features.js"

import { generateId } from './features.js';


// console.log(generateId());

// console.log(myObj.name2);

// console.log(http);

import fs from 'fs'
//  const home = fs.readFile("./index.html", ()=>{
//   console.log('file read');
// })

// console.log(home);

// to make server we'll do following things


const server = http.createServer((req, res) => {
  // console.log('servered');
  // console.log(req.url); //can see the request which was done through url

  // res.end(<h2>Noice</h2>)

  if (req.url === "/about") {
    res.end(`<h1>You are in top ${generateId()}</h1>`);
  } else if (req.url === "/") {
    fs.readFile("./index.html", (err,home)=>{
      console.log(home);
      res.end(home);
    });
    
  } else {
    res.end("<h1>Page Not Found</h1>");
  }
}); // to create server

server.listen(5000, () => {
  console.log("server is working");
});

// server.listen(5000, () => {
//   console.log("server is working");
// });
