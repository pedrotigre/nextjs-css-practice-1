import c from './ButtonCustom.module.scss';

export default function ButtonCustom({ href, children }) {
  return (
    <a href={href} className={c.btn}>
      {children}
    </a>
  );
}
