import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";
const month = new Date(Date.now)
const studentSchema = new mongoose.Schema({
    Created_At: { type: Date, default: Date.now },
    Updated_At: { type: Date, default: Date.now },
    Deleted_At: { type: Date, default: null },
    Is_Deleted: { type: Boolean, default: false },
    Fullname: { type: String, required: true },
    Phone_Number: { type: String, required: true },
    age: { type: Number, required: true },
    Birthday: { type: Date, required: true },
    Address: { type: String, required: true },
    Email: { type: String, required: true },
    Payement: { type: Number, required: true }
});
const AutoIncrement = AutoIncrementFactory(mongoose);
studentSchema.plugin(AutoIncrement, { inc_field: "studentId" });
const Student = mongoose.model("Students", studentSchema,"Students");
export default Student;