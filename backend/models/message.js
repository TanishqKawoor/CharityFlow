import mongoose from "mongoose";
import validator from "validator"

const messageSchema = new mongoose.Schema({
    
    name:{
        type: String,
        required: true,
        minLength: [3, "Name must contain atleast 3 Characters"],
        maxLength: [30, "Name must not exceed 30 Characters"]
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid Email"],
    },
    phone:{
        type: String,
        required: true,
        minLength: [10, "Phone Number must Only Contain 10 digits"],
        maxLength: [10, "Phone Number must Only Contain 10 digits"]
    },
    message:{
        type: String,
        required: true
    },
   
})

export const Message = mongoose.model("Message",messageSchema );