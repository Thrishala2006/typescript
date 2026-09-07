const express=require('express');
const app=express();
const PORT=5000;
app.get("/", (req, res) => { res.send("<h1>Welcome to Student Application</h1>"); }); 
 
app.get("/student", (req, res) => { 
    res.send("<h1>Student Name: Rahul, Roll No: 101, Department: CSE</h1>"); 
}); 

app.get("/courses", (req, res) => { 
     res.send("<h1>Courses: JavaScript, Node.js, Database Management</h1>"); 
}); 

app.get("/contact", (req, res) => {
    res.send("<h1>Contact: student@example.com</h1>"); 
}); 

app.listen(PORT, () => { 
     console.log(`Student Application running at http://localhost:${PORT}`); 
});
