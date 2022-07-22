import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {React, useState } from 'react'

export default function Home() {
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(count => count + 1);
    };

    const decrease = () => {
        setCounter(count => count - 1);
    };

    const reset = () => {
        setCounter(0);
    };

  return (
    <div className={styles.container}>
      <Head>
        <title>Knitting PWA App</title>
        <meta name="description" content="Testing PWA App" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          The Knitting App
        </h1>
        <h1 className={styles.title}>
            Counter
        </h1>
        <span className={styles.card}>
            {counter}
        </span>
        <div className={styles.title}>
            <button className={styles.card} onClick={increase}>+</button>
            <button className={styles.card} onClick={decrease}>-</button>
            <button className={styles.card} onClick={reset}>Reset</button>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
