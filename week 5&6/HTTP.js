const express=require("express");
const app=express();
app.use(express.json());
app.get("/student/:id",(req,res)=>{
    res.json({
        message:"Student Details",
        id:req.params.id
    });
});
app.post("/student",(req,res)=>{
    res.json({
        mesaage:"Student added",
        student:req.body
    });
});
app.put("/student/:id",(req,res)=>{
    res.json({
        message:"Stdent updated",
        id:req.params.id,
        updatedData:req.body
    });
});
app.delete("/student/:id",(req,res)=>{
    res.json({
        message:"Student Deleted",
        id:req.params.id
    });
});
app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});