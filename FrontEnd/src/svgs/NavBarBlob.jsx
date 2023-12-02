import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={128}
    height={75}
    fill="none"
    {...props}
  >
    <path
      fill="#2C3C8D"
      fillRule="evenodd"
      d="M107.878 14.823c12.2 8.075 21.654 19.568 19.068 30.158-2.586 10.608-17.21 20.295-34.394 25.236C75.37 75.157 56.375 74 39.875 74c-24-.5-32.479-16.728-38-29.019-5.548-12.29 2.041-29.095 11.98-36.816C23.793.444 44.773-1.01 62.738.568c17.964 1.593 32.912 6.198 45.14 14.255Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
