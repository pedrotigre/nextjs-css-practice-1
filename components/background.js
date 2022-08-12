import Image from 'next/image';
import classes from './background.module.css';
import Nav from './nav';

export default function Background() {
  return (
    <div className={classes.clipPath}>
      <Nav />
      <div className={classes.logo}>
        <Image alt='Logo' src='/images/logo-white.png' width={98} height={50} />
      </div>
      <div className={classes.bgGradient}>
        <div className={classes.bgWrap}>
          <Image
            alt='Beautiful river landscape'
            src='/images/hero.jpg'
            layout='fill'
            objectPosition='top'
            objectFit='cover'
            priority='true'
            quality={85}
          />
        </div>
        <h1 className={classes.bgText}>
          <span className={classes.headingPrimaryMain}>Outdoors</span>
          <span className={classes.headingPrimarySub}>
            is where life happens
          </span>
        </h1>
      </div>
    </div>
  );
}
