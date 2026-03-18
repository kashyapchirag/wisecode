import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('db connected successfully');
    } catch (err) {
        console.log('db connection failed', err.message);

    }
}

export default dbConnection;