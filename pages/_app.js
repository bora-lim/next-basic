import Layout from '@/components/layout/Layout';
import { GlobalProvider } from '@/hooks/useGlobalContext';
import { useGlobalData } from '@/hooks/useGlobalContext';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
	return (
		<GlobalProvider>
			<Layout>
			<Component {...pageProps} />
			</Layout>
		</GlobalProvider>
	)
}


/*
	---Pre Rendering (Next에서의 데이터 렌더링 흐름)
	Next는 초기에 서버단에서 미리 만들어진 page폴더 안쪽의 정적 컨텐츠를 미리 렌더링한 상태에서 브라우저에서 서버 요청시 바로 호출(SEO좋음)
	이후에 동적인 데이터 연동을 위한 리액트 컴포넌트가 로드완료되면 Static한 페이지에 해당 내용을 결합 (Hydration)

	기존 React의 CSR방식에서는 모든 서브페이지에 해당하는 파일들을 모두 가져온다음 렌더링하기 때문에 초기 로딩속도가 늦음 (SEO안좋음)
	Next는 페이지별로 미리 pre-render된 파일을 가져오고 서브페이지에 해당 하는 파일들을 json형태로만 가지고 있다가 해당 페이지를 호출하는 라우터명의 메뉴에 호버되면 
	미리 pre-fetching 처리해서 페이지별 데이터 로드 속도를 비약적으로 빠르게 처리함과 동시에 로드시켜야 되는 파일의 갯수와 용량을 줄임
	
	pre-fetching
	Next 전용의 Link컴포넌트로 페이지 이동시 해당 메뉴에 호버시 라우터명을 인지해서 출력해야 되는 데이터를 미리 로드처리

	---Next 전용의 Pre Rendering 방식
	SSG (Static Site Generation)
	-Next 프로젝트 빌드시 pre-render
	-장점 : 빌드시에 페이지가 완성되기 때문에 초기 로딩속도가 빠름
	-단점 : 요청전에 미리 프리랜더되기 때문에 정적인 페이지만 적용 가능

	SSR (Server Side Rendering)
	-서버에서 요청이 들어오면 서버단에서 data-fetching후 pre-render
	-장점 : CSR방식에 비해서는 초기 로딩속도가 빠르고 요청시마다 새로운 데이터를 백단에서 갱신가능
	-단점 : 서버 호출시에 pre-render페이지를 만들기 때문에 SSG방식보다는 느림

	ISR (Incremental Static Revalidation)
	- Next 프로젝트 빌드시 pre-render되는 점은 SSG방식과 동일하나 일정주기로 서버단에서 새로운 데이터를 fetching해서 갱신가능
	- 장점 : SSG와 마찬가지로 초기 로딩속도가 빠름
	- 장점 : 일정 시간마다 새롭게 데이터를 정기적으로 revalidation처리 가능
	- 단점 : 동적 데이터가 빈번하게 바뀌는 페이지에는 적용 불가 (CSR처리)
*/