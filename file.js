// file handling in node js allows you to perform various file operations, such as reading, writing, deleting, and renaming files.

const fs = require("fs");

// Writing to files

 // synchronous
//  fs.writeFileSync("./text.txt", "Hey Bro, I am Sujan");


 // Async
//  fs.writeFile("./text.txt", "Hello wrold", (err)=> {});

// Reading to file

// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

// Asynchronous reading of file , this doesn't return anything compared to sync
// fs.readFile("./contacts.txt", "utf-8", (err, result)=> {
//     if(err){
//         console.log("Error", err);
//     }else{
//         console.log(result);
//     }
// })

// Appending files

fs.appendFileSync("./contacts.txt", new Date().getDate().toLocaleString())
fs.appendFileSync("./text.txt",  "I am sujan");

// fs.cpSync("./contacts.txt", "./copy.txt"); for copying the files

//  fs.unlinkSync("./copy.txt");  for deleting the file name

// const stat = fs.statSync("./text.txt"); seeing the status of the file name 
// console.log(stat);