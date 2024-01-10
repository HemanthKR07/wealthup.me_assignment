import exp from "express";
import cors from "cors";
const app = exp();

app.use(cors());


app.get('/form', (req,res)=>{
        res.send("Hello Internship")
})

app.listen(2000, ()=>{
    console.log("Server is ON")
});