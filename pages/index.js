import Image from 'next/image';
import styles from '/styles/Home.module.scss';
import pic1 from '@/public/img/pic1.jpg';
import pic2 from '@/public/img/pic2.jpg';
import pic3 from '@/public/img/pic3.jpg';
import pic4 from '@/public/img/pic4.jpg';
import { HashLoader } from 'react-spinners';
import { useState } from 'react';
import { FaAdn } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FiAirplay } from "react-icons/fi";
import { IconContext } from 'react-icons';

export default function Home() {
	const [loading, setLoading] = useState(true);

	return (
		<>
			<main className={styles.main}>
				<IconContext.Provider value={{ color:'red', size: 50, className: 'abc'}}>
					<FaAdn />
					<FcAbout />
					<FiAirplay />
				</IconContext.Provider>
				
				<div>
					<HashLoader color={'orange'} size={200} loading={loading} cssOverride={{position:'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)', zIndex: 10}}/>
					<Image src={pic1} alt='img1' quality={50} fill priority sizes='(max-width: 768px) 100vw, (max-wdith: 1200px) 50vw, 33vw'/>
				</div>

				<div>
					{/* 기본적으로 이미지 컴포넌트를 lazy-loading 적용되는데
					 priority로 이미지 로딩 우선순위를 지정하면 자동으로 lazy-loading 해제됨
					 보통 화면이 렌더링 되면 보이는 첫번째 이미지에 지정 */}
					<Image src={pic2} alt='img1' fill placeholder='blur'/>
				</div>

				<div>
					{/* placeholder를 blur 지정하면 미리 blue처리된 용량이 작은 이미지를 먼저 화면에 띄우고 최적화된 원본 로딩 완료되면 비꿔치기 */}
					<Image src={pic3} alt='img1' fill placeholder='blur' />
				</div>

				<div>
					<Image src='https://images.unsplash.com/photo-1647891938250-954addeb9c51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80' alt='img1' width='500' height='300' onLoadingComplete={()=>{setLoading(false)}}></Image>
				</div>
			</main>
		</>
	);
}
