import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "charityflow"
    }).then(() => {
        console.log("DB Connected")
    }).catch(error => {
        console.log("Error DB Not Connected", error)
    })
}