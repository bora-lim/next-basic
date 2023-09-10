import { useState } from 'react';
import styles from './About.module.scss';
import firebase from '@/firebase';

function About() {
	const [email, setEmail] = useState('');
	const [pwd, setPwd] = useState('');
	const [name, setName] = useState('');

	const handleSubmit = async(e) => {
		e.preventDefault();

		const createdUser = await firebase.auth().createUserWithEmailAndPassword(email, pwd);
		console.log(createdUser);
		createdUser.user.updateProfile({displayName: name});
		firebase.auth().signOut(); // 회원가입 완료 후 자동로그인 되지 않도록 강제 로그아웃 처리

		setEmail('');
		setPwd('');
		setName('');
		e.target.reset();
	}

	return (
		<>
			<main className={styles.main}>
				<h1>Join Member</h1>
				<form onSubmit={handleSubmit}>
					<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='이메일'></input> <br />
					<input type="password" value={pwd} onChange={(e)=>setPwd(e.target.value)} placeholder='비밀번호'></input> <br />
					<input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='이름'></input> <br />

					<button type="submit">회원가입</button>
				</form>
			</main>
		</>
	);
}

export default About;