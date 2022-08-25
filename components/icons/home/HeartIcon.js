export default function HeartIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={64}
      height={64}
      xmlSpace='preserve'
    >
      <defs>
        <linearGradient id='grad2' x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop
            offset='0%'
            style={{
              stopColor: '#7ed56f',
              stopOpacity: 1,
            }}
          />
          <stop
            offset='100%'
            style={{
              stopColor: '#28b485',
              stopOpacity: 1,
            }}
          />
        </linearGradient>
      </defs>
      <path
        fill='none'
        stroke='url(#grad2)'
        strokeWidth={2}
        strokeMiterlimit={10}
        d='M1 21c0 20 31 38 31 38s31-18 31-38c0-8.285-6-16-15-16-8.285 0-16 5.715-16 14 0-8.285-7.715-14-16-14C7 5 1 12.715 1 21z'
      />
    </svg>
  );
}
