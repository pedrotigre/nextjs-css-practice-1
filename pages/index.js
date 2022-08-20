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
      <main>
        <section className={classes.sectionTours}>
          <h2 className={classes.sectionTours_Title}>
            Exciting tours for adventorous people
          </h2>
          <div className={classes.row}>
            <div className={classes.colOneOfTwo}>
              <div className={classes.sectionTours_LeftContent}>
                <h3>You are going to fall in love with nature</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam perspiciatis assumenda placeat vitae, excepturi sunt
                  porro et hic dignissimos repudiandae! Deserunt, illum aperiam.
                </p>
                <h3>Live adventures like you never have before</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, voluptate quas nostrum quisquam unde dolores? Aliquam
                  perspiciatis assumenda placeat vitae.
                </p>
                <a href='#' className={classes.sectionTours_btn}>
                  Learn More &rarr;
                </a>
              </div>
            </div>
            <div className={classes.colOneOfTwo}>
              <div className={classes.sectionTours_imgContainer}>
                <div className={classes.imgOne}>
                  <Image
                    src='/images/nat-1-large.jpg'
                    alt='Mountain landscape with a river'
                    width='400'
                    height='267'
                    layout='responsive'
                  />
                </div>
                <div className={classes.imgTwo}>
                  <Image
                    src='/images/nat-2-large.jpg'
                    alt='Cyclist driving a bicycle on a mountain street'
                    width='400'
                    height='267'
                    layout='responsive'
                  />
                </div>
                <div className={classes.imgThree}>
                  <Image
                    src='/images/nat-3-large.jpg'
                    alt='Woman walking on a montain cover with grass '
                    width='400'
                    height='267'
                    layout='responsive'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <section className={classes.floatTest}>
        <div className={classes.row}>
          <div className={classes.colOneOfTwo}>&nbsp;</div>
          <div className={classes.colOneOfTwo}>&nbsp;</div>
        </div>
        <div className={classes.row}>
          <div className={classes.colOneOfThree}>&nbsp;</div>
          <div className={classes.colOneOfThree}>&nbsp;</div>
          <div className={classes.colOneOfThree}>&nbsp;</div>
        </div>
      </section> */}
    </div>
  );
}
