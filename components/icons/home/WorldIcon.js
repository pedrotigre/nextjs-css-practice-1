export default function WorldIcon() {
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
        d='M32.001.887C49.185.887 63.114 14.816 63.113 32 63.114 49.185 49.184 63.115 32 63.113 14.815 63.114.887 49.185.888 32.001.885 14.816 14.815.887 32.001.887zM32 1v62M63 32H1'
      />
      <path
        fill='none'
        stroke='url(#grad2)'
        strokeWidth={2}
        strokeMiterlimit={10}
        d='M30 1S16 12 16 32s14 31 14 31M34 1s14 11 14 31-14 31-14 31'
      />
      <path
        fill='none'
        stroke='url(#grad2)'
        strokeWidth={2}
        strokeMiterlimit={10}
        d='M8 12s5 10 24 10 24-10 24-10M8 52s5-10 24-10 24 10 24 10'
      />
    </svg>
  );
}
