import React from 'react'

function Ssr( {now} ) {
  return (
    <>
      <div>SSR 방식 테스트 - 계속 바뀜</div>
      <h2>{now}</h2>
    </>
  )
}

export async function getServerSideProps() {
  console.log('ssr');

  return {
    props: { now: performance.now() }
  }
}

export default Ssr