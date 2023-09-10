// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// npm i mongoose
import { connectMongoDB } from "@/libs/MongoConnect";
import { Counter } from "@/model/CounterSchema";
import { Post } from "@/model/PostSchema";

export default async function handler(req, res) {
  try {
    const DB = await connectMongoDB();
    // console.log(DB);

    if(req.method === 'GET') {
      const post = await Post.find();
      res.json({ success: true, result: post});
    }

    if(req.method === 'POST') {
      // 클라이언트로부터 전달받은 데이터 정보 임시로 변수에 담음
      const temp = req.body; // { title, content }
      console.log(temp);
      Counter.findOne({name: 'counter'}).exec()
      .then(doc => {
        console.log(doc);

        temp.postNum = doc.postNum; // { title, content, postNum}

        const postModel = new Post(temp);
        postModel.save().then(() => {
          Counter.updateOne({name: 'counter'}, {$inc: { postNum: 1}})
          .then(() => {
            res.json({success: true});
          })
        })
      })
    }
  }catch (err) {
    res.status(400).send({err});

  }

}


// DB에 데이터 저장 작업 순서
// 1. 저장할 데이터의 구조에 맞게 스키마 생성 (스키마: DB에 저장되는 객체의 구조를 강제하는 시스템적인 틀)
// 2. API 라우터에서 스키마가 적용된 모델 객체에 클라이언트로부터 전달된 데이터를 바인딩 후 DB에 저장한 뒤
// 응당 성공 유무를 다시 클라이언트에게 전달
// 2-1. 클라이언트에서 post 요청 받음
// 2-2. 카운터 모델에서 해당 데이터의 고유 번호를 가져온뒤 클라이언트로부터 전달된 데이터와 결합
// (해당 데이터의 고유값을 임의로 생성하기 위함)
// 2-3. 결한된 객체를 post 모델로 저장
// 2-4. DB에 저장이 완료되면 다시 카운터 모델값 증가
