import React from 'react'

function Isr( { now } ) {
  return (
    <>
      <div>ISR 방식 테스트 - revalidate에서 지정한 시간 후에 바뀜 (빌드를 다시 하는것이지 화면을 다시 렌더링하는 것이 아니기때문에 새로고침 해줘야함)</div>
      <h2>{now}</h2>
    </>
  )
}
export async function getStaticProps() {
  console.log('isr');

  return {
    props: { now: performance.now() },
    revalidate: 5
  }
}


export default Isr