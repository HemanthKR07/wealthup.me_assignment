import {generateCode, timerOn, updateStatus, i, code} from "../Functions/allFunctions"
import {Db} from "../database/db;"

export const generator = (req,res)=>{
    i++;
        generateCode();
        res.send(code)
        Db.create({
            index:i,
            code:code,
            status:"valid"
        }).then(()=>{
            timerOn(i);
        })
}

export const verify = async(req,res)=>{
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
}