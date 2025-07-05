import mongoose, { Schema } from "mongoose";
const payementsSchema=new Schema({
    data : {type:[Number] }

})
const Payement = mongoose.model("Payements",payementsSchema,"Payements")
export default Payement