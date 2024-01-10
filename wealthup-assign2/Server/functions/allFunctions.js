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

export {i,code, generateCode, updateStatus, timerOn};