import Image from 'next/image';
import classes from './background.module.css';
export default function Background() {
  return (
    <div>
      <div className={classes.bgGradient}>
        <div className={classes.bgWrap}>
          <Image
            alt="Beautiful river landscape"
            src="/images/hero.jpg"
            layout="fill"
            objectPosition="top"
            objectFit="cover"
            priority="true"
            quality={85}
          />
        </div>
        <p>Some text...</p>
      </div>
    </div>
  );
}
