const express=require("express");
const app=express();
app.get("/student",(req,res)=>{
    const id=req.query.id;
    const name=req.query.name;
    res.send(
        `<h1>Student Details</h1>
        <p>ID: ${id}</p>
        <p>Name: ${name}</p>`
    );
});
app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
})