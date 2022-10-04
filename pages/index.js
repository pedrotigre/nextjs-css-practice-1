import Head from 'next/head';
import Image from 'next/image';
import classes from '../styles/Home.module.scss';
import Background from '../components/layout/Background';
import Background2 from '../components/layout/Background2';
import WorldIcon from '../components/icons/home/WorldIcon';
import HeartIcon from '../components/icons/home/HeartIcon';
import CompassIcon from '../components/icons/home/CompassIcon';
import MapIcon from '../components/icons/home/MapIcon';
import WhiteButton from '../components/WhiteButton';
import ButtonCustom from '../components/ButtonCustom';

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
        <section className={classes.features}>
          <Background2
            alt={'Snow mountain and a river'}
            imageSrc={'/images/nat-4.jpg'}
          >
            <div className={classes.row}>
              <div className={classes.colOneOfFour}>
                <div className={classes.featureCard}>
                  <div className={classes.icon}>
                    <WorldIcon />
                  </div>
                  <h3>Explore the world</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam, necessitatibus.
                  </p>
                </div>
              </div>
              <div className={classes.colOneOfFour}>
                <div className={classes.featureCard}>
                  <div className={classes.icon}>
                    <MapIcon />
                  </div>
                  <h3>Find your way</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam, necessitatibus.
                  </p>
                </div>
              </div>
              <div className={classes.colOneOfFour}>
                <div className={classes.featureCard}>
                  <div className={classes.icon}>
                    <CompassIcon />
                  </div>
                  <h3>Meet nature</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam, necessitatibus.
                  </p>
                </div>
              </div>
              <div className={classes.colOneOfFour}>
                <div className={classes.featureCard}>
                  <div className={classes.icon}>
                    <HeartIcon />
                  </div>
                  <h3>Live a healthier life</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam, necessitatibus.
                  </p>
                </div>
              </div>
            </div>
          </Background2>
        </section>
        <section className={classes.sectionPopularTours}>
          <h2 className={classes.sectionTours_Title}>Most popular tours</h2>
          <div className={classes.row}>
            <div className={classes.colOneOfThree}>
              <div className={classes.flipCard}>
                <div
                  className={`${classes.flipCard_Content} ${classes.flipCard_Content_Front} ${classes.flipCard_First}`}
                >
                  <div className={classes.flipCard_Content_Image}>
                    <Image
                      src='/images/nat-5.jpg'
                      alt='Man on top of a rock in the sea'
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                  <h4 className={classes.flipCard_Content_Heading}>
                    <span>The sea explorer</span>
                  </h4>
                  <div className={classes.flipCard_Content_Details}>
                    <ul>
                      <li>3 day tour</li>
                      <li>Up to 30 people</li>
                      <li>2 tour guides</li>
                      <li>Sleep in cozy hostels</li>
                      <li>Difficulty: very easy</li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`${classes.flipCard_Content} ${classes.flipCard_Content_Back} ${classes.flipCard_First}`}
                >
                  <div className={classes.flipCard_Content_Back_Cta}>
                    <p>Only</p>
                    <p className={classes.flipCard_Content_Back_Cta_Price}>
                      $297
                    </p>
                    <WhiteButton href={'#'}>Book now!</WhiteButton>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.colOneOfThree}>
              <div className={classes.flipCard}>
                <div
                  className={`${classes.flipCard_Content} ${classes.flipCard_Content_Front} ${classes.flipCard_Second}`}
                >
                  <div className={classes.flipCard_Content_Image}>
                    <Image
                      src='/images/nat-6.jpg'
                      alt='Forest with mountains in the background'
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                  <h4 className={classes.flipCard_Content_Heading}>
                    <span>The forest hiker</span>
                  </h4>
                  <div className={classes.flipCard_Content_Details}>
                    <ul>
                      <li>7 day tour</li>
                      <li>Up to 40 people</li>
                      <li>6 tour guides</li>
                      <li>Sleep in provided tents</li>
                      <li>Difficulty: medium</li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`${classes.flipCard_Content} ${classes.flipCard_Content_Back} ${classes.flipCard_Second}`}
                >
                  <div className={classes.flipCard_Content_Back_Cta}>
                    <p>Only</p>
                    <p className={classes.flipCard_Content_Back_Cta_Price}>
                      $329
                    </p>
                    <WhiteButton href={'#'}>Book now!</WhiteButton>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.colOneOfThree}>
              <div className={classes.flipCard}>
                <div
                  className={`${classes.flipCard_Content} ${classes.flipCard_Content_Front} ${classes.flipCard_Third}`}
                >
                  <div className={classes.flipCard_Content_Image}>
                    <Image
                      src='/images/nat-7.jpg'
                      alt='Man hiking'
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                  <h4 className={classes.flipCard_Content_Heading}>
                    <span>The snow adventurer</span>
                  </h4>
                  <div className={classes.flipCard_Content_Details}>
                    <ul>
                      <li>5 day tour</li>
                      <li>Up to 15 people</li>
                      <li>3 tour guides</li>
                      <li>Sleep in provided tents</li>
                      <li>Difficulty: hard</li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`${classes.flipCard_Content} ${classes.flipCard_Content_Back} ${classes.flipCard_Third}`}
                >
                  <div className={classes.flipCard_Content_Back_Cta}>
                    <p>Only</p>
                    <p className={classes.flipCard_Content_Back_Cta_Price}>
                      $499
                    </p>
                    <WhiteButton href={'#'}>Book now!</WhiteButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.btnTour}>
            <ButtonCustom href={'#'}>
              <strong>Discover all tours!</strong>
            </ButtonCustom>
          </div>
        </section>
        <section className={classes.sectionStories}>
          <div className={classes.bgVideo}>
            <video className={classes.bgVideo_Content} autoPlay muted loop>
              <source src='images/video.mp4' type='video/mp4' />
              <source src='images/video.webm' type='video/webm' />
              Your browser is not supported!
            </video>
          </div>
          <div className={classes.row}>
            <h2 className={classes.sectionTours_Title}>
              We make people genuinely happy
            </h2>
            <div className={classes.storie}>
              <figure className={classes.imgContainer}>
                <figcaption className={classes.authorName}>Mary</figcaption>
                <Image
                  alt='Girl on a boat'
                  src='/images/nat-8.jpg'
                  layout='fill'
                  objectFit='cover'
                />
              </figure>
              <h3>Testimonial example</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam asperiores, officia, sed dolores fuga deserunt ipsam
                ipsum minima quibusdam tempore voluptatem, molestiae veniam
                sint. Laudantium consequatur accusamus error rem similique!
              </p>
            </div>
            <div className={classes.storie}>
              <figure className={classes.imgContainer}>
                <figcaption className={classes.authorName}>Jackson</figcaption>
                <Image
                  alt='Man on top of a mountain'
                  src='/images/nat-9.jpg'
                  layout='fill'
                  objectFit='cover'
                />
              </figure>
              <h3>Testimonial example</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam asperiores, officia, sed dolores fuga deserunt ipsam
                ipsum minima quibusdam tempore voluptatem, molestiae veniam
                sint. Laudantium consequatur accusamus error rem similique!
              </p>
            </div>
          </div>
          {/* Yes I'm reusing this btn from other section, 
		  	should have created a component for it*/}
          <a href='#' className={classes.sectionTours_btn}>
            Read all stories &rarr;
          </a>
        </section>
        <section className={classes.bookSection}>
          <div className={classes.bookContainer}>
            <div className={classes.row}>
              <Image
                alt='Road in a forest with a river and mountains in the background'
                src='/images/nat-10.jpg'
                layout='fill'
                objectFit='cover'
              />
              <div className={classes.bgGradient} />
              <div className={classes.formContainer}>
                <h2 className={classes.sectionTours_Title}>
                  Start booking now!
                </h2>
                <form action='#'>
                  <div className={classes.formGroup}>
                    <input
                      className={classes.formInput}
                      type='text'
                      id='name'
                      placeholder='Full name'
                      required
                    />
                    <label className={classes.formLabel} htmlFor='name'>
                      Full name
                    </label>
                  </div>
                  <div className={classes.formGroup}>
                    <input
                      className={classes.formInput}
                      type='email'
                      id='email'
                      placeholder='Email address'
                      required
                    />
                    <label className={classes.formLabel} htmlFor='name'>
                      Email address
                    </label>
                  </div>
                </form>
              </div>
            </div>
            {/* <form action='#' className={classes.bookForm}></form> */}
          </div>
        </section>
      </main>
    </div>
  );
}
