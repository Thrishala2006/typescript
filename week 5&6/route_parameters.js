const express=require("express");
const app=express();
app.get("/student:id",(req,res)=>{
    const id=req.params.id;
    res.send("<h1>Student ID is: "+id+"</h1>");
});
app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});