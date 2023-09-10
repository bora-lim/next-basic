import mongoose from "mongoose";

// mongoose의 Schema 생성자 함수로 글 저장 객체에 적용될 강제 틀 적용 (스키마)
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    postNum: Number
}, {
    collection: 'Post'
})

const Post = mongoose.model('Post', postSchema);
export { Post };