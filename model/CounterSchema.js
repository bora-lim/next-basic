import mongoose from "mongoose";

const counterSchema = new mongoose.Schema({
    name: String,
    postNum: Number
}, {
    collection: 'Counter'
})

const Counter = mongoose.model('Counter', counterSchema);
export { Counter };