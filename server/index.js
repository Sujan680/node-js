const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res)=> {
    const log = `${Date.now()} : New Req received \n`
    fs.appendFile("log.txt", log, (err,data) => {
       
        switch(req.url) {
            case"/":
            res.end("Home Page");
            break
            case"/about":
            res.end("This is about page.")
            break
            
        }
    })
   
});

myServer.listen(8000, ()=> console.log("Server Started at ${8000} Port "));