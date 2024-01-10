import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017',{
    dbName:"Assignment2-Data",
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB Connected")
})

const schema = new mongoose.Schema({
        index : Number,
        code : String,
        status : String
})

const Db = mongoose.model("Codes", schema);

export default Db;