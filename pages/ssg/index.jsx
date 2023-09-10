import React from 'react'

function Ssg( { now } ) {
  return (
    <>
      <div>SSG 방식 테스트 - static (바뀌지 않음)</div>
      <h2>{now}</h2>
    </>
  )
}

export async function getStaticProps() {
  console.log('ssg');

  return {
    props: { now: performance.now() }
  }
}


export default Ssg