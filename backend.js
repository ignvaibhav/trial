import express from "express";
import cors from "cors";
const app = express();

app.use(cors())

const port = 3000;


app.get('/vaibhav', (req,res)=>{
    res.send('I am vaibhav')
})

app.listen(port, ()=>{
    console.log('I am listening nigga');
    
})