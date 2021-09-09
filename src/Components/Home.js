import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Home = () => {
  return (
    <div className="all">
      <div className="roof"> SPECIAL NUMBERS</div>
      <div className="decision">
        <div className="pi">
          <h3>Pi</h3>
          <svg width="126" height="148" viewBox="0 0 326 348" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M151.297 0.0468061C151.245 0.103286 140.479 0.216245 127.398 0.329204C102.798 0.526882 89.2491 0.837519 83.8401 1.37407C77.3388 1.99535 68.1331 4.05685 62.386 6.20307C56.9769 8.2081 51.1258 11.6816 48.4993 14.4208C47.8752 15.0704 45.9508 16.9907 44.2345 18.6568C28.2414 34.2452 17.5274 51.6973 8.50363 77.0284C6.65728 82.168 1.5603 98.6036 0.650125 102.359L0 104.986H5.14899H10.298L13.1065 100.1C19.6338 88.7761 24.3407 81.9421 30.8939 74.2327C37.8893 66.0431 44.5985 61.1294 53.3622 57.8536C61.9179 54.6625 70.0574 53.3635 83.0599 53.1093L91.1215 52.9681L91.7456 53.5894C92.3177 54.1824 92.3437 54.3801 92.1877 56.3851C91.6156 64.0099 91.4595 65.9019 91.2255 68.5565C91.0695 70.1944 90.8874 72.6512 90.8354 74.0632C90.7834 75.447 90.6274 77.3108 90.4973 78.158C90.3673 79.0052 90.2633 79.9088 90.2373 80.1348C90.2113 81.6597 89.9512 85.7827 89.7432 88.1831C89.6132 89.7363 89.4832 91.2612 89.4832 91.5719C89.5092 91.8825 89.3791 93.7181 89.2231 95.6666C89.0671 97.6152 88.9631 99.5072 88.9631 99.9026C88.9631 100.298 88.781 102.896 88.547 105.692C88.1049 111.396 87.6108 118.456 87.4808 121.647C87.4288 122.805 87.2467 125.121 87.1167 126.759C86.9607 128.425 86.9087 130.034 86.9607 130.345C87.0127 130.684 86.9607 131.729 86.8306 132.717C86.7006 133.706 86.5186 136.021 86.4406 137.885C86.3626 139.749 86.2325 141.895 86.2065 142.686C86.1545 143.448 86.0245 145.482 85.9465 147.204C85.8425 148.899 85.6604 151.694 85.5304 153.417C85.4004 155.111 85.1663 158.246 85.0103 160.336C84.1521 171.886 83.294 179.087 80.9535 194.365C76.8707 220.741 72.814 235.905 65.9226 250.279C62.1519 258.13 59.2394 263.128 50.9958 275.667C45.9768 283.348 40.2817 292.328 40.2817 292.639C40.2817 292.752 39.9437 293.345 39.5536 293.994C37.0831 297.948 34.7947 304.302 33.8585 309.724C33.2604 313.339 33.2344 320.342 33.8325 323.279C35.4708 331.412 39.4496 337.681 45.8988 342.369C51.3598 346.323 56.9249 348.017 63.6862 347.763C71.2277 347.481 75.7265 345.221 81.8897 338.5C88.0789 331.779 93.2799 322.573 96.7385 312.266C98.0128 308.397 98.4289 306.985 100.067 300.603C105.346 280.157 111.405 245.281 115.956 209.19C118.661 187.813 120.325 172.027 121.287 159.347C122.431 144.154 126.644 81.462 127.997 59.4915C128.205 56.2722 128.439 53.5329 128.543 53.3352C128.673 53.1093 139.257 53.0246 168.798 53.0246H208.872L208.716 54.9167C208.638 55.9898 208.326 58.729 208.014 61.0729C205.101 83.58 201.747 117.976 198.912 154.264C198.47 159.856 197.95 166.577 197.716 169.231C196.962 178.155 197.066 240 197.846 251.465C199.588 276.175 202.423 293.175 207.13 307.182C208.456 311.108 211.759 318.196 213.761 321.443C220.938 333.022 230.482 341.324 241.3 345.306C245.695 346.944 247.906 347.311 253.939 347.481C264.133 347.763 269.698 346.549 277.577 342.341C283.844 338.98 289.956 334.208 295.313 328.419C306.183 316.756 313.048 303.088 318.171 282.953C320.563 273.605 323.892 255.899 324.412 249.884L324.594 247.879H320.329C317.989 247.879 315.649 247.964 315.128 248.048L314.192 248.218L313.334 252.51C311.358 262.479 309.433 267.477 305.377 273.153C300.8 279.592 293.726 284.506 286.549 286.229C276.667 288.629 266.759 287.415 257.449 282.727C247.619 277.757 240.338 267.788 236.541 254.092C234.981 248.557 234.253 244.405 233.941 239.548C233.551 233.053 233.551 192.529 233.967 183.492C235.241 155.563 236.593 137.461 239.506 109.081C240.208 102.218 242.939 78.3274 243.901 70.8156C244.317 67.4833 244.967 62.259 245.357 59.2373C245.747 56.2157 246.163 53.5611 246.293 53.3635C246.501 53.1093 254.589 53.0246 285.119 53.0246C306.313 53.0246 324.022 52.9399 324.464 52.8552L325.27 52.6857L325.426 35.8266C325.504 26.5639 325.608 15.4375 325.686 11.0603C325.816 4.33925 325.764 2.98374 325.426 2.10831C325.166 1.40231 324.854 1.06344 324.516 1.06344C324.256 1.06344 323.918 0.837519 323.762 0.555122C323.528 0.103286 319.107 0.0750458 237.452 0.0185663C190.122 -0.00967343 151.349 -0.00967343 151.297 0.0468061Z" fill="#C0C0C0" />
            <path d="M196.936 186.034C196.936 187.982 196.962 188.773 197.014 187.785C197.066 186.825 197.066 185.243 197.014 184.255C196.962 183.295 196.936 184.085 196.936 186.034Z" fill="#C0C0C0" />
            <path d="M196.624 195.212C196.624 195.664 196.676 195.833 196.754 195.551C196.806 195.297 196.806 194.901 196.754 194.703C196.676 194.534 196.624 194.732 196.624 195.212Z" fill="#C0C0C0" />
          </svg>

          <div className="PIoptions">
            <Link to="/memorizePI">
              <button className="btn btn-outline-info memorizePI">Memorize</button>
            </Link>
            <Link to="/challangePI">
              <button className="btn btn-outline-info">Challange</button>
            </Link>
          </div>

        </div>
        <div className="euler">
          <h3>Euler's Number</h3>
          <svg width="112" height="148" viewBox="0 0 112 127" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.3584 71.8252C24.7249 76.3499 24.4082 80.1055 24.4082 83.0918C24.4082 91.1458 27.2588 98.0234 32.96 103.725C38.6611 109.335 45.584 112.141 53.7285 112.141C60.2441 112.141 66.4883 110.828 72.4609 108.204C78.5241 105.489 87.4831 99.5618 99.3379 90.4219L102.188 94.3584C80.7412 115.625 60.2894 126.258 40.833 126.258C27.6208 126.258 17.6663 122.095 10.9697 113.77C4.27311 105.444 0.924805 96.2588 0.924805 86.2139C0.924805 72.7301 5.08757 58.9297 13.4131 44.8125C21.7386 30.6953 32.1908 19.7454 44.7695 11.9629C57.3483 4.08984 70.2891 0.15332 83.5918 0.15332C93.1842 0.15332 100.288 2.09896 104.903 5.99023C109.519 9.88151 111.826 14.4967 111.826 19.8359C111.826 27.347 108.84 34.5413 102.867 41.4189C94.9941 50.3779 83.4108 57.6175 68.1172 63.1377C57.9818 66.848 43.7288 69.7438 25.3584 71.8252ZM26.3086 65.1738C39.7018 63.6354 50.6064 61.0111 59.0225 57.3008C70.1533 52.3236 78.4788 46.3962 83.999 39.5186C89.6097 32.5505 92.415 25.9443 92.415 19.7002C92.415 15.8994 91.1934 12.8226 88.75 10.4697C86.3971 8.11686 83.0036 6.94043 78.5693 6.94043C69.3389 6.94043 59.5202 11.8724 49.1133 21.7363C38.7969 31.5098 31.1953 45.9889 26.3086 65.1738Z" fill="#C0C0C0"/>
          </svg>

          <div className="EULERoptions">
            <Link to="/memorizeEuler">
              <button className="btn btn-outline-info memorizePI">Memorize</button>
            </Link>
            <Link to="/challangeEuler">
              <button className="btn btn-outline-info">Challange</button>
            </Link>
          </div>

        </div>
        <div className="gold">
          <h3>Golden Ratio</h3>
          <svg width="200" height="148" viewBox="0 0 200 148" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.13074 143.7C4.13074 106.901 16.6571 71.6097 38.9541 45.5889C61.2512 19.5682 91.4925 4.94987 123.025 4.94987" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M196.509 90.7052C196.509 67.9614 188.767 46.1492 174.986 30.0669C161.205 13.9847 142.514 4.94975 123.025 4.94975" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M151.098 143.7C163.142 143.7 174.692 138.117 183.208 128.178C191.724 118.24 196.509 104.76 196.509 90.7053" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M123.025 110.94C123.025 119.628 125.983 127.961 131.248 134.105C136.512 140.248 143.652 143.7 151.098 143.7" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M123.026 110.94C123.026 105.573 124.852 100.427 128.104 96.6319C131.356 92.8372 135.766 90.7054 140.364 90.7054" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M151.098 103.231C151.098 101.586 150.82 99.9575 150.281 98.4377C149.741 96.918 148.951 95.5372 147.954 94.374C146.957 93.2109 145.774 92.2882 144.472 91.6587C143.169 91.0293 141.774 90.7053 140.364 90.7053" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M151.098 103.231C151.098 104.243 150.927 105.246 150.595 106.181C150.263 107.116 149.776 107.966 149.163 108.682C148.55 109.397 147.822 109.965 147.02 110.353C146.219 110.74 145.36 110.939 144.492 110.939" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M140.364 106.122C140.364 106.754 140.471 107.381 140.678 107.965C140.886 108.55 141.19 109.081 141.573 109.528C141.957 109.976 142.412 110.331 142.913 110.573C143.413 110.815 143.95 110.939 144.492 110.939" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M140.364 106.122C140.364 105.355 140.625 104.62 141.09 104.078C141.554 103.536 142.184 103.231 142.841 103.231" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M142.841 106.122V103.231" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M144.492 106.122H140.364" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M142.841 105.158H144.492" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M143.667 105.158V106.122" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M144.492 103.231V110.939" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M140.364 103.231H151.098" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M140.364 110.94V90.7053" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M151.098 110.94H123.025" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M151.098 90.7053V143.7" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M123.025 90.6564H196.551" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M123.025 143.7V4.94975" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M4.13077 143.7V4.82214" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M196.509 143.573V4.82216" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M4.13065 4.82202H196.618" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M4.13065 143.7H196.618" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M144.492 105.158C144.492 104.647 144.318 104.157 144.009 103.796C143.699 103.434 143.279 103.231 142.841 103.231" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M144.492 105.158C144.492 105.285 144.471 105.41 144.43 105.527C144.388 105.644 144.327 105.75 144.251 105.84C144.174 105.929 144.083 106 143.983 106.049C143.883 106.097 143.775 106.122 143.667 106.122" stroke="#C0C0C0" strokeWidth="2.66667" />
            <path d="M142.843 105.157C142.843 105.283 142.864 105.409 142.906 105.525C142.947 105.642 143.008 105.749 143.084 105.838C143.161 105.928 143.252 105.998 143.352 106.047C143.452 106.095 143.56 106.12 143.668 106.12" stroke="#C0C0C0" strokeWidth="2.66667" />
          </svg>


          <div className="GOLDoptions">
            <Link to="/memorizeGOLD">
              <button className="btn btn-outline-info memorizegold">Memorize</button>
            </Link>
            <Link to="/challangeGOLD">
              <button className="btn btn-outline-info">Challange</button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Home