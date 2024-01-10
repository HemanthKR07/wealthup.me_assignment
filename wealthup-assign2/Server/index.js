import exp from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = exp();

app.use(cors());
app.use(exp.json())

mongoose.connect('mongodb://localhost:27017',{
    dbName:"Assignment2-Data"
}).then(()=>{
    console.log("DB Connected")
})

const schema = new mongoose.Schema({
        index : Number,
        code : String,
        status : String
})

export const Db = mongoose.model("Codes", schema);


let i = -1;

let code = "";

function generateCode(){
    code="";
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";

    for (let i=0; i<5; i++){
            if (i>=2 && i<4){
                code += numbers.charAt(Math.floor(Math.random() * numbers.length));
            } else {
                code += letters.charAt(Math.floor(Math.random() * letters.length));
            }
    }
}



async function updateStatus(location,newStatus){
    let codeStatus = await Db.findOneAndUpdate(location, newStatus);
    console.log("DB Updated")
}

async function timerOn(i){
        const location = {index : i};
        const newStatus = {$set : {status : "Exp"}}

        setTimeout(async ()=>{
           await updateStatus(location, newStatus);
        },60000)
}


app.get('/getcode',  async (req,res)=>{
    i++;
    generateCode();
    console.log("Code generated : ", code)
    res.status(200).json({"code":code})
    await Db.create({
        index:i,
        code:code,
        status:"valid"
    }).then(()=>{
        timerOn(i);
        
    })
    }
);

app.post('/verifycode', async(req,res)=>{
    const UserCode = req.body.Ucode;
    console.log("User input : ",UserCode);
    const codeBlk = await Db.findOne({index:i});
    console.log("DB Code : ",codeBlk.code)
    if (codeBlk){
        if (codeBlk.status == "Exp"){
            res.send("Code Expired, Generate new one");
        } else if (codeBlk.code != UserCode){
            res.send("Invalid Code");
        } else if (codeBlk.code == UserCode){
                    if (codeBlk.status == "Used"){
                        res.send("Code already used, generate new one");
                    } else {
                        res.send("Valid Code !");
                        const location = {index : i};
                        const newStatus = {$set : {status : "Used"}}
                        updateStatus(location,newStatus);
                        console.log("DB Updated : Used")
                    }
        }
    } else {
        res.send("Something went wrong :(")
    }
});


app.listen(2000, ()=>{
    console.log("Server is ON")
});