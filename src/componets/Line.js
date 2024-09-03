function Line() {
  return (
    <div className="md:ml-[40px] xl:ml-[922px] xl:mr-[300px] my-[21px]">
      <svg
        width="620"
        height="12"
        viewBox="0 0 620 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_bd_2267_3353)">
          <rect
            x="4"
            width="612"
            height="4"
            rx="2"
            fill="url(#paint0_linear_2267_3353)"
            fill-opacity="0.1"
            shape-rendering="crispEdges"
          />
          <rect
            x="4"
            width="612"
            height="4"
            rx="2"
            fill="white"
            fill-opacity="0.05"
            shape-rendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_bd_2267_3353"
            x="-5.83732"
            y="-9.83732"
            width="631.675"
            height="23.6746"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.91866" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_2267_3353"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.33 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_backgroundBlur_2267_3353"
              result="effect2_dropShadow_2267_3353"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_2267_3353"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2267_3353"
            x1="310"
            y1="0"
            x2="310"
            y2="4"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#282828" />
            <stop offset="1" stop-color="#F8F8F8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Line;
