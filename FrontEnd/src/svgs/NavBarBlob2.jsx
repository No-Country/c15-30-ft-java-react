import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={135}
    height={77}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M134.941 48.093c1.968 21.495-45.756 35.516-86.833 25.731C7.031 64.04-11.813 25.83 7.788 5.47c19.601-20.36 125.185 21.128 127.153 42.624Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={-4}
        x2={135}
        y1={29}
        y2={54.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#372582" />
        <stop offset={1} stopColor="#A040C1" stopOpacity={0.88} />
      </linearGradient>
    </defs>
  </svg>
)
export default SvgComponent
