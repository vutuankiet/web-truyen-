import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    title: {type: String, require: true, default: "No Title Book"},
    chapter: {type: Number, require: true, default: 0},
    describe: {type: String, require: false, default: ""},
}, {timestamps: true})
export const BookModel = mongoose.model("books", BookSchema);