import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    postCount: {
        type: Number,
        default: 0
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
