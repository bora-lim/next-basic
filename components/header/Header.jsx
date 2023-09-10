import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Header.module.scss'
import Login from '../Login';

function Header() {
    const url = useRouter().asPath;

  return (
    <header className={styles.header}>
        <h1>LOGO</h1>

        <Login />

        <ul className={styles.gnb}>
            <li>
                <Link href='/about' className={url === '/about' ? styles.on : ''}>About</Link>
            </li>
            <li>
                <Link href='/gallery' className={url === '/gallery' ? styles.on : ''}>Gallery</Link>
            </li>
            <li>
                <Link href='/ssg' className={url === '/ssg' ? styles.on : ''}>SSG</Link>
            </li>
            <li>
                <Link href='/ssr' className={url === '/ssr' ? styles.on : ''}>SSR</Link>
            </li>
            <li>
                <Link href='/isr' className={url === '/isr' ? styles.on : ''}>ISR</Link>
            </li>
            <li>
                <Link href='/csr' className={url === '/csr' ? styles.on : ''}>CSR</Link>
            </li>
            <li>
                <Link href='/post' className={url === '/post' ? styles.on : ''}>POST</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header