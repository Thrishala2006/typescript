const express=require('express');
const app= express();
const port=5000;
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('<h1> in this page you will see get,post,put,delete apis<h1> this page is example of get');
});
let tasks=[{id:1,title:"express js"},{id:2,title:"rest apis"}];

//get method
app.get('/tasks',(req,res)=>{
    res.json(tasks);
});

//post to create a new task
app.post('/tasks',(req,res)=>
{
    const new_task={
        id:req.body.id!=null?req.body.id:tasks.length+1,
        title:req.body.title!=null?req.body.title:"no task send"
    };
    tasks.push(new_task);
    res.status(201).json(new_task);
});

//put to update an existing task
app.put('/tasks/:id',(req,res)=>
{
    const id=parseInt(req.params.id);
    const task=tasks.find(t=>t.id===id);
    if(task){
        task.title=req.body.title;
        res.json({message:"task updated sucessfully"});
    }
    else{
        res.status(404).json({error:"task not found"});
    }
});


//delete
app.delete("/tasks/:id",(req,res)=>
{
    const id=parseInt(req.params.id);
    tasks=tasks.filter(t=>t.id!==id);
    res.json({message:`task with taskid ${id} deleted`,remaining:tasks});

});


app.listen(port,()=>
{
    console.log(`your server is running at port http://localhost:${port}`);
})
