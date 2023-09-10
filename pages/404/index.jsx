import React from 'react'
import styles from './error.module.scss'

function Error() {
  return (
    <>
        <main className={styles.error}>
            <p>존재하지 않는 페이지입니다.</p>
        </main>
    </>
  )
}

export default Error