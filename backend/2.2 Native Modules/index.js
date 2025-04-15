const fs = require("fs");

// fs.writeFile("message.txt","hello from nodeJS 123",(err) => {
//     if (err) throw err;
//     console.log('the file have been saved');
//   });

fs.readFile('./message.txt',"utf8", (err,data)=>{
if(err) throw err;
console.log(data);
});