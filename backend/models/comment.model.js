import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    postId: {
        type: Number,
        required: true,
        ref: "Post"
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
