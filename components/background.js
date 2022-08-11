import Image from 'next/image';
import classes from './background.module.css';
export default function Background() {
  return (
    <div className={classes.clipPath}>
      <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
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
        <p className={classes.bgText}>Some text...</p>
      </div>
    </div>
  );
}
