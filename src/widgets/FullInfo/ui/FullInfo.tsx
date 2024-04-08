import style from './FullInfo.module.scss';
import CloudyWeather from '../../../shared/assets/cloudy-weather.png';
import SunRise from '../../../shared/assets/sun-rise.png';
import SunSet from '../../../shared/assets/sun-set.png';

// eslint-disable-next-line import/prefer-default-export
export const FullInfo = () => (
  <div className={style.FullInfo}>
    <div className={style.FullInfo__left}>
      <div className={style.FullInfo__temp}>
        24°C
        <div className={style.FullInfo__tempFeels}>
          Feels like:
          <span>22°C</span>
        </div>
      </div>
      <div className={style.FullInfo__sun}>
        <div className={style.FullInfo__sunRise}>
          <div className={style.FullInfo__sunImage}>
            <img src={SunRise} alt="" />
          </div>
          <div>
            <div className={style.FullInfo__sunTitle}>Sunrise</div>
            <div className={style.FullInfo__sunTime}>06:37 AM</div>
          </div>
        </div>
        <div className={style.FullInfo__sunSet}>
          <div className={style.FullInfo__sunImage}>
            <img src={SunSet} alt="" />
          </div>
          <div>
            <div className={style.FullInfo__sunTitle}>Sunset</div>
            <div className={style.FullInfo__sunTime}>20:37 AM</div>
          </div>
        </div>
      </div>
    </div>
    <div className={style.FullInfo__center}>
      <div className={style.FullInfo__weatherImage}>
        <img src={CloudyWeather} alt="" />
      </div>
      <div className={style.FullInfo__weatherTitle}>Sunny</div>
    </div>
    <div className={style.FullInfo__right}>
      <div className={style.FullInfo__humidity}>
        <div className={style.FullInfo__icon}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M15.0066 3.25608C16.8483 2.85737 19.1331 2.8773 22.2423 3.65268C22.7781 3.78629 23.1038 4.32791 22.9699 4.86241C22.836 5.39691 22.2931 5.7219 21.7573 5.58829C18.8666 4.86742 16.9015 4.88747 15.4308 5.20587C13.9555 5.52524 12.895 6.15867 11.7715 6.84363L11.6874 6.89494C10.6044 7.55565 9.40515 8.28729 7.82073 8.55069C6.17734 8.82388 4.23602 8.58235 1.62883 7.54187C1.11607 7.33724 0.866674 6.75667 1.0718 6.24513C1.27692 5.73359 1.85889 5.48479 2.37165 5.68943C4.76435 6.6443 6.32295 6.77699 7.492 6.58265C8.67888 6.38535 9.58373 5.83916 10.7286 5.14119C11.855 4.45445 13.1694 3.6538 15.0066 3.25608Z"
                fill="currentColor"
              />{' '}
              <path
                d="M22.2423 7.64302C19.1331 6.86765 16.8483 6.84772 15.0066 7.24642C13.1694 7.64415 11.855 8.44479 10.7286 9.13153C9.58373 9.8295 8.67888 10.3757 7.492 10.573C6.32295 10.7673 4.76435 10.6346 2.37165 9.67977C1.85889 9.47514 1.27692 9.72393 1.0718 10.2355C0.866674 10.747 1.11607 11.3276 1.62883 11.5322C4.23602 12.5727 6.17734 12.8142 7.82073 12.541C9.40515 12.2776 10.6044 11.546 11.6874 10.8853L11.7715 10.834C12.895 10.149 13.9555 9.51558 15.4308 9.19621C16.9015 8.87781 18.8666 8.85777 21.7573 9.57863C22.2931 9.71224 22.836 9.38726 22.9699 8.85275C23.1038 8.31825 22.7781 7.77663 22.2423 7.64302Z"
                fill="currentColor"
              />{' '}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.9998 10.0266C18.6526 10.0266 18.3633 10.2059 18.1614 10.4772C18.0905 10.573 17.9266 10.7972 17.7089 11.111C17.4193 11.5283 17.0317 12.1082 16.6424 12.7555C16.255 13.3996 15.8553 14.128 15.5495 14.8397C15.2567 15.5213 14.9989 16.2614 14.9999 17.0117C15.0006 17.2223 15.0258 17.4339 15.0604 17.6412C15.1182 17.9872 15.2356 18.4636 15.4804 18.9521C15.7272 19.4446 16.1131 19.9674 16.7107 20.3648C17.3146 20.7664 18.0748 21 18.9998 21C19.9248 21 20.685 20.7664 21.2888 20.3648C21.8864 19.9674 22.2724 19.4446 22.5192 18.9522C22.764 18.4636 22.8815 17.9872 22.9393 17.6413C22.974 17.4337 22.9995 17.2215 22.9998 17.0107C23.0001 16.2604 22.743 15.5214 22.4501 14.8397C22.1444 14.128 21.7447 13.3996 21.3573 12.7555C20.968 12.1082 20.5803 11.5283 20.2907 11.111C20.073 10.7972 19.909 10.573 19.8382 10.4772C19.6363 10.2059 19.3469 10.0266 18.9998 10.0266ZM20.6119 15.6257C20.3552 15.0281 20.0049 14.3848 19.6423 13.782C19.4218 13.4154 19.2007 13.0702 18.9998 12.7674C18.7989 13.0702 18.5778 13.4154 18.3573 13.782C17.9948 14.3848 17.6445 15.0281 17.3878 15.6257L17.3732 15.6595C17.1965 16.0704 16.9877 16.5562 17.0001 17.0101C17.0121 17.3691 17.1088 17.7397 17.2693 18.0599C17.3974 18.3157 17.574 18.5411 17.8201 18.7048C18.06 18.8643 18.4248 19.0048 18.9998 19.0048C19.5748 19.0048 19.9396 18.8643 20.1795 18.7048C20.4256 18.5411 20.6022 18.3156 20.7304 18.0599C20.8909 17.7397 20.9876 17.3691 20.9996 17.01C21.0121 16.5563 20.8032 16.0705 20.6265 15.6597L20.6119 15.6257Z"
                fill="currentColor"
              />{' '}
              <path
                d="M14.1296 11.5308C14.8899 11.2847 15.4728 12.076 15.1153 12.7892C14.952 13.1151 14.7683 13.3924 14.4031 13.5214C13.426 13.8666 12.6166 14.3527 11.7715 14.8679L11.6874 14.9192C10.6044 15.5799 9.40516 16.3115 7.82074 16.5749C6.17735 16.8481 4.23604 16.6066 1.62884 15.5661C1.11608 15.3615 0.866688 14.7809 1.07181 14.2694C1.27694 13.7578 1.8589 13.509 2.37167 13.7137C4.76436 14.6685 6.32297 14.8012 7.49201 14.6069C8.67889 14.4096 9.58374 13.8634 10.7286 13.1654C11.8166 12.5021 12.9363 11.9171 14.1296 11.5308Z"
                fill="currentColor"
              />{' '}
            </g>
          </svg>
        </div>
        <div className={style.FullInfo__value}>41%</div>
        <div className={style.FullInfo__title}>Humidity</div>
      </div>
      <div className={style.FullInfo__wind}>
        <div className={style.FullInfo__icon}>
          <svg
            viewBox="0 -7.5 63 63"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="currentColor"
            transform="matrix(-1, 0, 0, 1, 0, 0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {' '}
              <title>Weather-wind</title> <desc>Created with Sketch.</desc>{' '}
              <defs> </defs>{' '}
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                {' '}
                <g
                  id="Weather-wind"
                  transform="translate(0.000000, 1.000000)"
                  stroke="#6B6C6E"
                  strokeWidth="2"
                >
                  {' '}
                  <path
                    d="M34.8,8.5 C34.8,3.8 38.7,0 43.4,0 C48.2,0 52,3.8 52,8.5 C52,13.2 48.1,17 43.4,17 L4,17"
                    id="Shape"
                  >
                    {' '}
                  </path>{' '}
                  <path
                    d="M47,30.5 C47,34.6 50.3,38 54.5,38 C58.6,38 62,34.6 62,30.5 C62,26.4 58.7,23 54.5,23 L20,23"
                    id="Shape"
                  >
                    {' '}
                  </path>{' '}
                  <path
                    d="M27,38.5 C27,42.6 30.3,46 34.4,46 C38.5,46 41.8,42.7 41.8,38.5 C41.8,34.4 38.5,31 34.4,31 L0,31"
                    id="Shape"
                  >
                    {' '}
                  </path>{' '}
                </g>{' '}
              </g>{' '}
            </g>
          </svg>
        </div>
        <div className={style.FullInfo__value}>2km/h</div>
        <div className={style.FullInfo__title}>Wind Speed</div>
      </div>
      <div className={style.FullInfo__pressure}>
        <div className={style.FullInfo__icon}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M12 9C11.4477 9 11 9.44771 11 10V15.2676C10.4022 15.6134 10 16.2597 10 17C10 18.1046 10.8954 19 12 19C13.1046 19 14 18.1046 14 17C14 16.2597 13.5978 15.6134 13 15.2676V10C13 9.44771 12.5523 9 12 9Z"
                fill="currentColor"
              />{' '}
              <path
                d="M11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6Z"
                fill="currentColor"
              />{' '}
              <path
                d="M16 7C15.4477 7 15 7.44772 15 8C15 8.55229 15.4477 9 16 9C16.5523 9 17 8.55229 17 8C17 7.44772 16.5523 7 16 7Z"
                fill="currentColor"
              />{' '}
              <path
                d="M6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13Z"
                fill="currentColor"
              />{' '}
              <path
                d="M7 8C7 8.55229 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8Z"
                fill="currentColor"
              />{' '}
              <path
                d="M18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13Z"
                fill="currentColor"
              />{' '}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z"
                fill="currentColor"
              />{' '}
            </g>
          </svg>
        </div>
        <div className={style.FullInfo__value}>997hPa</div>
        <div className={style.FullInfo__title}>Pressure</div>
      </div>
      <div className={style.FullInfo__uv}>
        <div className={style.FullInfo__icon}>
          <svg
            fill="none"
            viewBox="0 0 32 32"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {' '}
              <defs />{' '}
              <path
                d="M13,30H9a2.0027,2.0027,0,0,1-2-2V20H9v8h4V20h2v8A2.0027,2.0027,0,0,1,13,30Z"
                transform="translate(0 0)"
                fill="currentColor"
              />{' '}
              <polygon
                points="25 20 23.25 20 21 29.031 18.792 20 17 20 19.5 30 22.5 30 25 20"
                fill="currentColor"
              />{' '}
              <rect x="15" y="2" width="2" height="5" />{' '}
              <rect
                x="21.6675"
                y="6.8536"
                width="4.958"
                height="1.9998"
                transform="translate(1.5191 19.3744) rotate(-45)"
                fill="currentColor"
              />{' '}
              <rect x="25" y="15" width="5" height="2" />{' '}
              <rect x="2" y="15" width="5" height="2" />{' '}
              <rect
                x="6.8536"
                y="5.3745"
                width="1.9998"
                height="4.958"
                transform="translate(-3.253 7.8535) rotate(-45)"
                fill="currentColor"
              />{' '}
              <path
                d="M22,17H20V16a4,4,0,0,0-8,0v1H10V16a6,6,0,0,1,12,0Z"
                transform="translate(0 0)"
                fill="currentColor"
              />{' '}
              <rect
                id="_Transparent_Rectangle_"
                data-name="<Transparent Rectangle>"
                width="32"
                height="32"
              />{' '}
            </g>
          </svg>
        </div>
        <div className={style.FullInfo__value}>8</div>
        <div className={style.FullInfo__title}>UV</div>
      </div>
    </div>
  </div>
);