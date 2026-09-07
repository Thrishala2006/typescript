const express=require("express");
const app=express();
function logger(req,res,next){
    console.log("Method:",req.method);
     console.log("URL:",req.url);
     console.log("Time:",new Date().toLocaleTimeString());
    next();
}
app.use(logger);
app.get("/student",(req,res)=>{
    res.send("Student Details");
});
app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});