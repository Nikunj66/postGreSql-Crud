const express=require('express');
const route=require('./routes/person.route');

const app=express();
app.use(express.json());
app.use('/person',route);

app.listen(3000,()=>{console.log("Server Running")});