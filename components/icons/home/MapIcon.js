export default function MapIcon() {
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
        d='m1 59 21-8 20 8 21-8V5l-21 8-20-8-21 8zM22 5v46M42 13v46'
      />
    </svg>
  );
}
