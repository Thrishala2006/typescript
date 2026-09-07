const express=require("express");
const app=express();
app.use(express.json());
app.post("/student",(req,res)=>{
    const student=req.body;
    console.log("Received JSON");
    console.log(student);
    req.json({
        message:"student data Received successfully",
        student:student
    });
});
app.get("/student",(req,res)=>{
    req.json({
        id:101,
        name:"Sireesha",
        course:"CSE(AIML)"
    })
})
app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});