import exp from "express";
import cors from "cors";
import { generator, verify } from "./Controllers/Usercontrollers.js";

const app = exp();

app.use(cors());
app.use(exp.json())


app.get('/getcode', generator);

app.post('/verifycode', verify);


app.listen(2000, ()=>{
    console.log("Server is ON")
});