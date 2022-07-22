import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'


export default function Home() {
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(count => count + 1);
    };

    const decrease = () => {
        if (counter > 0) {
            setCounter(count => count - 1);
        }
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
        <span className="counter__output">
            {counter}
        </span>
        <div className="btn__container">
            <button className="control__btn" onClick={increase}>+</button>
            <button className="control__btn" onClick={decrease}>-</button>
            <button className="reset" onClick={reset}>Reset</button>
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
