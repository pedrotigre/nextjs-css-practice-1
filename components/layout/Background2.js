import Image from 'next/image';
import c from './Background2.module.scss';

export default function Background({ imageSrc, alt, children }) {
  return (
    <div className={c.bgContainer}>
      <div className={c.bgImage}>
        <Image
          alt={alt}
          src={imageSrc}
          layout='fill'
          objectPosition='top'
          objectFit='cover'
          priority='true'
          quality={85}
        />
      </div>
      <div className={c.bgGradient} />
      <main className={c.mainContent}>{children}</main>
    </div>
  );
}
