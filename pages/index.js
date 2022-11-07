import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.title}>
        <h1>Home page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
          deleniti.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
          deleniti.
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja List
        </Link>
      </div>
    </>
  );
}
