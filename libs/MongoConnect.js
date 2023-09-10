import mongoose from "mongoose";

export const connectMongoDB = async() => {
    // 해당 함수 호출시 MongoDB 접속에 성공하면 접속 성공 객체를 promise 형태로 반환
    if(mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise();
    }
    
    // 위에서 성공 promise가 반환되면
    // 동기적으로 mongoDB 접속 후 해당 상태를 리턴
    // 해당 함수를 MongoDB를 사용해야 되는 서버 라우터에서 호출하면 MongoDB 접속 가능
    // 보안이 중요한 접속정보를 환경변수에 등록하여 사용 (NEXT_PUBLIC 접두사로 시작해야함)
    return await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
}