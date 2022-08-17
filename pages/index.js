import Head from 'next/head';
import Image from 'next/image';
import classes from '../styles/Home.module.scss';
import Background from '../components/layout/Background';

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Natours | Amazing Tours</title>
        <meta
          name='description'
          content='Sign up for amazing tours around the world!'
        />
        <link rel='icon' type='image/png' href='/favicon.png' />
      </Head>
      <header className={classes.header}>
        <Background />
      </header>
    </div>
  );
}
