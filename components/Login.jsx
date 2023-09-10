import React, { useContext, useState, useEffect } from 'react'
import firebase from '@/firebase';
import { useGlobalData } from '@/hooks/useGlobalContext';
import Logout from './Logout';

function Login() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, setError] = useState('');

    const { loginInfo, setLoginInfo, isLogin, setIsLogin } = useGlobalData();

	useEffect(() => {
		console.log(loginInfo);

		firebase.auth().onAuthStateChanged(userInfo => {
			console.log(userInfo);

			// firebase의 인증정보 값이 바뀔때마다 해당 값이 없으면 전역 객체의 값을 비워주고
			// 있으면 전달받은 값으로 덮어쓰기
			if(userInfo === null) {
				setLoginInfo({ displayName: '', uid: '' });
                setIsLogin(false);
			}else {
				setLoginInfo(userInfo.multiFactor.user);
                setIsLogin(true);
			}
		})
	}, [])

    const handleLogin = async() => {
        if(!email || !pwd) return alert('모든 항목을 입력하세요');

        try {
            // firebase로 받은 정보값이 있으면 useGlobalData hook으로 전역객체에 해당 값을 담아줌
            await firebase.auth().signInWithEmailAndPassword(email, pwd);
            alert("로그인 되었습니다.");
            setIsLogin(true);
            console.log(loginInfo);

        }catch(err) {
            // firebase로 받은 정보값이 없으면 hook으로 전역 객체에 값을 비워줌
            if(err.code === 'auth/user-not-found') {
                setError('존재하지 않는 이메일입니다.');
            }else if(err.code === 'auth/wrong-password') {
                setError('비밀번호가 일치하지 않습니다.');
            }else {
                setError('로그인에 실패했습니다.');
            }
        }
    }

    return (
        <div>
            {
                !isLogin &&
                <>
                    <input type="email" placeholder='이메일주소' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    <input type="password" placeholder='비밀번호' value={pwd} onChange={(e)=>setPwd(e.target.value)}></input>
                    <button onClick={handleLogin}>로그인</button>
                    {error && <strong>{error}</strong>}
                </>
            }

            {
                isLogin &&
                <>
                    <span>{loginInfo.displayName}님 환영합니다 :)</span>
                    <Logout />
                </>
                
            }

        </div>
    )
}

export default Login