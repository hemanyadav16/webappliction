import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("hello HEMAN!!");
})

app.listen(port,()=>{
    console.log(`server is runing on port ${port}`);
});