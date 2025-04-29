import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    const today = new Date();
    let day = today.getDay();

    let type="its weekday ";
    let adv="time to work hard "
    if(day===0 ||day===6){
        type="its weekend ";
        adv="time to have some fun ";
    }
    res.render("index.ejs",{
        daytype:type,
        advice:adv,
    });
})

app.listen(port,()=>{
    console.log(`port ${port} listening`);
});
