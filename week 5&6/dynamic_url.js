const express=require('express');
const app=express();
const port=5000;
app.get('/user/:id',(req,res)=>
{
    const user_id=req.params.id;
    res.json(
        {
            name:"thrishala",
            id:user_id
        }
    );
});
app.get('/flights/:from/:to',(req,res)=>
{
   const {from,to}=req.params;
   res.send(`<h1>searching for flights departing from ${from} to ${to}<h1>`);
})
app.get('/search',(req,res)=>
{
     const cat=req.query.cat;
     const sort=req.query.sort;
     res.json({
        message:"serching movies",
        cat:cat||"none",
        sort:sort||"none"
     });
});
app.listen(port,()=>{
    console.log(`your server is running at port http://localhost:${port}`);
});
