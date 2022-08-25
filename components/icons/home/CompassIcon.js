export default function CompassIcon() {
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
      <circle
        fill='none'
        stroke='url(#grad2)'
        strokeWidth={2}
        strokeMiterlimit={10}
        cx={32}
        cy={35}
        r={28.292}
      />
      <path
        fill='none'
        stroke='url(#grad2)'
        strokeWidth={2}
        strokeLinejoin='bevel'
        strokeMiterlimit={10}
        d='m37 40 8-19-19 8-7 18z'
      />
      <path
        fill='none'
        stroke='url(#grad2)'
        strokeWidth={2}
        strokeMiterlimit={10}
        d='m26 29 11 11M36.9 7a5 5 0 1 0-9.8 0M32 7v5M32 58v5M60 35h-5M9 35H4'
      />
    </svg>
  );
}
