import Head from 'next/head';
import Image from 'next/image';
import classes from '../styles/Home.module.css';
import Background from '../components/background';

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Natours | Amazing Tours</title>
        <meta
          name="description"
          content="Sign up for amazing tours around the world!"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <header>
        <Background />
      </header>
    </div>
  );
}
