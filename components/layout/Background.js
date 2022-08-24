import Image from 'next/image';
import classes from './Background.module.scss';

export default function Background() {
  return (
    <div>
      <div className={classes.bgImage}>
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
      <div className={classes.bgGradient} />
      <div className={classes.logo}>
        <Image alt='Logo' src='/images/logo-white.png' width={98} height={50} />
      </div>
      <div className={classes.textBox}>
        <h1 className={classes.headingPrimary}>
          <span className={classes.headingPrimaryMain}>Outdoors</span>
          <span className={classes.headingPrimarySub}>
            is where life happens
          </span>
        </h1>
        <a href='#' className={classes.btn}>
          Discover our tours
        </a>
      </div>
    </div>
  );
}
