import c from './WhiteButton.module.scss';

export default function WhiteButton({ href, children }) {
  return (
    <a href={href} className={c.btn}>
      {children}
    </a>
  );
}
