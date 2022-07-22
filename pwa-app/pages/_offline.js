import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Offline</title>
                <meta name="description" content="Testing PWA App" />
                <link rel="icon" href="../public/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Offline
                </h1>
            </main>
        </div>
    )
}
