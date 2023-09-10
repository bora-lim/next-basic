import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';

function Post() {
    const router = useRouter();
    // console.log(router);

    const [list, setList] = useState([]);

    const id = router.query.id;
    const name = router.query.name;
    const age = router.query.age;

    // API 라우팅 (서버 요청 처리를 위해서는 express 같은 서버관련 프레임워크 없이도
    // next 자체적으로 서버 요청에 대한 응답을 클라이언트로 전달 가능)
    // next에서는 api 폴더 안쪽에 서버쪽 요청 및 응답에 대한 라우팅 설정 가능
    // API 폴더 안쪽에 파일명이 자동적으로 라우터 요청명으로 설정됨 (/api/hello)

    const getData = () => {
        axios.get('/api/post')
        .then(json => {
            console.log(json.data.result);
            setList(json.data.result);
        })
    }

    useEffect(() => {
        console.log('app load');
        getData();
    }, [])

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        const item = { title: title, content: content };
        axios.post('/api/post', item)
        .then(json => {
            console.log(json);
            getData();
        })
    }

    return (
        <main>
            <form onSubmit={handleSend}>
                <label htmlFor='title'>title</label>
                <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} /> <br />
                <label htmlFor='content'>content</label>
                <textarea type='text' id='content' cols='30' rows='10' value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <button>save</button>
            </form>


            <section>
                <ul>
                    {
                        list.map((el, _idx) => (
                            <li key={el._id}>
                                <strong>{el.title}</strong>
                                <p>{el.content}</p>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </main>
    )
}

export default Post;