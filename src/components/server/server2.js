const express =require('express');
app=express();
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/testdb').then(()=>{
    console.log("MongoDB Connected Sucessfully");
})

app.use(express.json());

const routes=require('../../routes/routes');
app.use('/api',routes);

app.listen(5000,()=>console.log(`Server is listening at Port No: ${5000}`));