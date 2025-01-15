/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
/**
 * This Layout is needed for Starter Kit.
 */
import React from 'react';
import Head from 'next/head';
import {
  Placeholder,
  LayoutServiceData,
  Field,
  HTMLLink,
  ImageField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import Scripts from 'src/Scripts';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = config.publicUrl;

interface LayoutProps {
  layoutData: LayoutServiceData;
  headLinks: HTMLLink[];
}

interface RouteFields {
  [key: string]: unknown;
  Title?: Field;
  OgTitle?: Field;
  OgDescription?: Field;
  OgImage?: ImageField;
}

const Layout = ({ layoutData, headLinks }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const fields = route?.fields as RouteFields;
  const isPageEditing = layoutData.sitecore.context.pageEditing;
  const mainClassPageEditing = isPageEditing ? 'editing-mode' : 'prod-mode';

  return (
    <>
      <Scripts />
      <Head>
        <title>{fields?.Title?.value?.toString() || 'Page'}</title>
        {/* <link rel="icon" href={`${publicUrl}/favicon.ico`} /> */}
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}
        <link rel="canonical" href={publicUrl} />
        <meta property="og:title" content={fields?.OgTitle?.value?.toString()} />
        <meta property="og:description" content={fields?.OgDescription?.value?.toString()} />
        <meta property="og:image" content={fields?.OgImage?.value?.src?.toString()} />
        <meta property="og:type" content={route?.templateName} data-attr="JSS-21.6.0" />

        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="FlyNow HTML5 Template" />
        <link rel="shortcut icon" type="image/x-icon" href="assets/media/favicon.png" />
        <link
          rel="stylesheet"
          href="https://www.sportingkampenhout.be/Sitecore/airline/assets/css/vendor/font-awesome.css"
        />
        <link
          rel="stylesheet"
          href="https://www.sportingkampenhout.be/Sitecore/airline/assets/css/fonts/icomoon/style.css"
        />
        <link
          rel="stylesheet"
          href="https://www.sportingkampenhout.be/Sitecore/airline/assets/css/vendor/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://www.sportingkampenhout.be/Sitecore/airline/assets/css/vendor/slick.css"
        />
        <link
          rel="stylesheet"
          href="https://www.sportingkampenhout.be/Sitecore/airline/assets/css/vendor/slick-theme.css"
        />
        <link
          rel="stylesheet"
          href="https://www.sportingkampenhout.be/Sitecore/airline/assets/css/vendor/datetime.css"
        />
        <link
          rel="stylesheet"
          href="https://www.sportingkampenhout.be/Sitecore/airline/assets/css/vendor/calendar/classic.css"
        />
        <link
          rel="stylesheet"
          href="https://www.sportingkampenhout.be/Sitecore/airline/assets/css/vendor/calendar/classic.date.css"
        />
        <link
          rel="stylesheet"
          href="https://www.sportingkampenhout.be/Sitecore/airline/assets/css/vendor/jquery.timepicker.min.css"
        />
        <link
          rel="stylesheet"
          href="https://www.sportingkampenhout.be/Sitecore/airline/assets/css/vendor/ui-autocomplete.css"
        />
        <link
          rel="stylesheet"
          href="https://www.sportingkampenhout.be/Sitecore/airline/assets/css/vendor/sal.css"
        />
        <link
          rel="stylesheet"
          href="https://www.sportingkampenhout.be/Sitecore/airline/assets/css/app.css"
        />
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className={mainClassPageEditing}>
        <div>Name: {layoutData.sitecore.context.site?.name}</div>
        <header>
          <div id="header">{route && <Placeholder name="headless-header" rendering={route} />}</div>
        </header>
        <main>
          <div id="content">{route && <Placeholder name="headless-main" rendering={route} />}</div>
        </main>
        <footer>
          <div id="footer">{route && <Placeholder name="headless-footer" rendering={route} />}</div>
        </footer>
      </div>

      {/* <!-- Preloader--> */}
      <div id="preloader">
        <div className="loader">
          <div className="plane">
            <img src="https://zupimages.net/up/19/34/4820.gif" className="plane-img" alt="" />
          </div>
          <div className="earth-wrapper">
            <div className="earth"></div>
          </div>
        </div>
      </div>

      {/* <!-- Main Wrapper Start --> */}
      <div id="main-wrapper" className="main-wrapper mr-4">
        {/* <!-- Header Area Start --> */}
        <header>
          <nav className="main-menu">
            <div className="container-fluid">
              <div className="main-menu__block">
                <div className="main-menu__left">
                  <div className="main-menu__logo">
                    <a href="index.html">
                      <img
                        src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/logo.png"
                        alt="FlyNow"
                      />
                    </a>
                  </div>

                  <div className="main-menu__nav">
                    <ul className="main-menu__list">
                      <li>
                        <a href="index.html" className="active">
                          Home
                        </a>
                      </li>
                      <li className="dropdown">
                        <a href="javascript:void(0);">Flight</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="flight-listing.html">Flight Listing</a>
                          </li>
                          <li>
                            <a href="flight-booking.html">Flight Booking</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="javascript:void(0);">Car</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="car-listing.html">Car Listing</a>
                          </li>
                          <li>
                            <a href="car-booking.html">Car Booking</a>
                          </li>
                          <li>
                            <a href="car-detail.html">Car Detail</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="javascript:void(0);">Hotel</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="hotel-listing.html">Hotel Listing</a>
                          </li>
                          <li>
                            <a href="hotel-booking.html">Hotel Booking</a>
                          </li>
                          <li>
                            <a href="hotel-detail.html">Hotel Detail</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="tour-packages.html">Tour Package</a>
                      </li>
                      <li className="dropdown">
                        <a href="javascript:void(0);">Pages</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="about-us.html">About</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                          <li>
                            <a href="privacy-policy.html">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                          <li>
                            <a href="sign-up.html">Signup</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="javascript:void(0);">News</a>
                        <ul>
                          <li>
                            <a href="blog-listing.html">News Listing</a>
                          </li>
                          <li>
                            <a href="blog-detail.html">News Detail</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="main-menu__right">
                  <a href="#" className="main-menu__search search-toggler d-xl-flex d-none">
                    <i className="fal fa-search"></i>
                  </a>
                  <div className="main-menu-signup__login d-xl-flex d-none">
                    <a href="login.html" className="main-menu__login">
                      Login
                    </a>
                    <div className="center_slach d-xl-flex d-none">/</div>
                    <a href="sign-up.html" className="main-menu__login">
                      Signup
                    </a>
                  </div>
                  <a href="#" className="main-menu__toggler mobile-nav__toggler">
                    <i className="fa fa-bars"></i>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {/* <!-- Header Area end --> */}

        {/* <!-- Hero Banner start --> */}
        <section className="hero-banner-1">
          <div className="container-fluid">
            <div className="content">
              <div className="vector-image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1414"
                  height="319"
                  viewBox="0 0 1414 319"
                  fill="none"
                >
                  <path
                    className="path"
                    d="M-0.5 215C62.4302 220.095 287 228 373 143.5C444.974 72.7818 368.5 -3.73136 320.5 1.99997C269.5 8.08952 231.721 43.5 253.5 119C275.279 194.5 367 248.212 541.5 207.325C675.76 175.867 795.5 82.7122 913 76.7122C967.429 73.9328 1072.05 88.6813 1085 207.325C1100 344.712 882 340.212 922.5 207.325C964.415 69.7967 1354 151.5 1479 183.5"
                    stroke="#ECECF2"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-dasharray="round"
                  />
                  <path
                    className="dashed"
                    d="M-0.5 215C62.4302 220.095 287 228 373 143.5C444.974 72.7818 368.5 -3.73136 320.5 1.99997C269.5 8.08952 231.721 43.5 253.5 119C275.279 194.5 367 248.212 541.5 207.325C675.76 175.867 795.5 82.7122 913 76.7122C967.429 73.9328 1072.05 88.6813 1085 207.325C1100 344.712 882 340.212 922.5 207.325C964.415 69.7967 1354 151.5 1479 183.5"
                    stroke="#212627"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-dasharray="22 22"
                  />
                </svg>
                <div className="location-image">
                  <img
                    src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/location-blue.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="row align-items-center row-gap-5">
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-5 col-sm-5">
                  <div className="content-block">
                    <h1 className="lightest-black mb-16">
                      <span className="color-primary">Book</span> Your Dream{' '}
                      <span className="color-primary">Flights</span> Now!
                    </h1>
                    <p className="dark-gray mb-24">
                      Lorem ipsum dolor sit amet consectetur. Felis tristique pretium leo nisi at
                      risus ac enim.
                    </p>
                    <a href="./flight-booking.html" className="cus-btn ">
                      Book Now
                    </a>
                  </div>
                </div>
                <div className="col-xxl-9 col-xl-8 col-lg-8 col-md-7 col-sm-7">
                  <div
                    className="image flynow-tilt"
                    data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 3, "speed": 700, "scale": 1.02 }'
                  >
                    <img
                      src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/banner/plane.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Hero Banner End --> */}

        {/* <!-- Booking Area Start --> */}
        <section className="booking mb-20">
          <div className="container-fluid">
            <div className="content">
              <div className="card">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs" data-bs-tabs="tabs">
                    <li className="nav-item">
                      <a
                        href="#flight"
                        className="cus-btn primary active"
                        aria-current="true"
                        data-bs-toggle="tab"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_502_1331)">
                            <path
                              d="M31.6933 0.544584C30.6572 -0.491824 27.1402 1.34503 26.1041 2.38143L21.9545 6.53127H3.07887C2.63024 6.53127 2.24462 6.85011 2.16055 7.29104C2.07669 7.73189 2.31798 8.16995 2.73524 8.3348L15.2174 13.2677L7.5633 20.9216H0.323909C0.168651 20.9221 0.0346723 21.0323 0.00576263 21.1852C-0.023357 21.3385 0.060152 21.4901 0.20498 21.5471L6.29687 23.9548C6.33201 24.1078 6.38108 24.2574 6.44394 24.4038L6.17745 24.6709C5.79778 25.0503 5.79778 25.6651 6.17745 26.045C6.55664 26.4247 7.17263 26.4247 7.55182 26.045L7.81194 25.785C7.95935 25.8501 8.11132 25.9014 8.26623 25.9382L10.6144 31.9561C10.6709 32.1013 10.8229 32.1851 10.976 32.1568C11.0419 32.145 11.1002 32.1123 11.1451 32.0673C11.2044 32.0087 11.2399 31.9274 11.2399 31.8382V24.7512L19.0155 16.976L23.9019 29.4993C24.0654 29.9177 24.5037 30.1608 24.9452 30.0781C25.136 30.0421 25.3038 29.9498 25.4333 29.8212C25.6038 29.6499 25.7071 29.4151 25.7077 29.1591V10.284L29.8573 6.13423C30.893 5.09789 32.7293 1.58085 31.6933 0.544584Z"
                              fill="#16191A"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_502_1331">
                              <rect width="32" height="32" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        Flights
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#hotel"
                        className="cus-btn primary "
                        aria-current="false"
                        data-bs-toggle="tab"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_502_1334)">
                            <path
                              d="M10.7589 9.00703H12.6339V10.882H10.7589V9.00703Z"
                              fill="#16191A"
                            />
                            <path
                              d="M10.7589 13.3106H12.6339V15.1856H10.7589V13.3106Z"
                              fill="#16191A"
                            />
                            <path
                              d="M19.3661 13.3106H21.2411V15.1856H19.3661V13.3106Z"
                              fill="#16191A"
                            />
                            <path
                              d="M23.6696 13.3106H25.5446V15.1856H23.6696V13.3106Z"
                              fill="#16191A"
                            />
                            <path
                              d="M19.3661 17.6142H21.2411V19.4892H19.3661V17.6142Z"
                              fill="#16191A"
                            />
                            <path
                              d="M23.6696 17.6142H25.5446V19.4892H23.6696V17.6142Z"
                              fill="#16191A"
                            />
                            <path
                              d="M19.3661 21.9178H21.2411V23.7928H19.3661V21.9178Z"
                              fill="#16191A"
                            />
                            <path
                              d="M23.6696 21.9178H25.5446V23.7928H23.6696V21.9178Z"
                              fill="#16191A"
                            />
                            <path
                              d="M19.3661 26.2213H21.2411V28.0963H19.3661V26.2213Z"
                              fill="#16191A"
                            />
                            <path
                              d="M23.6696 26.2213H25.5446V28.0963H23.6696V26.2213Z"
                              fill="#16191A"
                            />
                            <path
                              d="M6.45538 13.3106H8.33037V15.1856H6.45538V13.3106Z"
                              fill="#16191A"
                            />
                            <path
                              d="M10.7589 17.6142H12.6339V19.4892H10.7589V17.6142Z"
                              fill="#16191A"
                            />
                            <path
                              d="M6.45538 17.6142H8.33037V19.4892H6.45538V17.6142Z"
                              fill="#16191A"
                            />
                            <path
                              d="M10.7589 21.9178H12.6339V23.7928H10.7589V21.9178Z"
                              fill="#16191A"
                            />
                            <path
                              d="M6.45538 21.9178H8.33037V23.7928H6.45538V21.9178Z"
                              fill="#16191A"
                            />
                            <path
                              d="M29.8482 30.5249V9.00703H16.9375V4.53428L14.7857 4.8929V0.399902H4.30356V6.63997L2.15181 6.99859V30.5249H0V32.3999H32V30.5249H29.8482ZM27.9732 10.882V30.5249H16.9375V10.882H27.9732ZM6.17856 2.2749H12.9107V5.2054L6.17856 6.32747V2.2749ZM4.02681 8.58696L15.0625 6.74765V30.5249H12.6339V26.2213H6.45538V30.5249H4.02681V8.58696ZM10.7589 30.5249H8.33037V28.0963H10.7589V30.5249Z"
                              fill="#16191A"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_502_1334">
                              <rect width="32" height="32" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        Hotel
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#rental"
                        className="cus-btn primary "
                        aria-current="false"
                        data-bs-toggle="tab"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          className="stroke_svg"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M28.2644 18.7196L28.2966 18.5427C28.3266 18.3779 28.343 18.2088 28.343 18.0363C28.343 16.4794 27.0761 15.2125 25.5192 15.2125C24.4705 15.2125 23.5536 15.7877 23.0664 16.64L23.0232 16.7155H22.9362H12.1135C11.7975 16.7155 11.4996 16.5921 11.2761 16.3687L11.2761 16.3686L10.2133 15.3059C10.0888 15.1814 9.88701 15.1814 9.7626 15.3059L9.76258 15.3059C9.63809 15.4304 9.63812 15.6322 9.76257 15.7566L9.76258 15.7566L10.8253 16.8194C11.1697 17.1637 11.6266 17.353 12.1135 17.353H22.5942H22.774L22.7418 17.5299C22.7118 17.6947 22.6954 17.8637 22.6954 18.0363C22.6954 18.2088 22.7118 18.3779 22.7418 18.5427L22.774 18.7195H22.5942H8.90483H8.72508L8.75725 18.5427C8.78724 18.3779 8.80364 18.2088 8.80364 18.0363C8.80364 16.4793 7.53674 15.2124 5.97982 15.2124C4.47017 15.2124 3.23316 16.4038 3.15957 17.8955L3.14984 18.0929L2.96232 18.0304L1.59728 17.5754C1.113 17.414 0.787502 16.9624 0.787502 16.4519V13.8156V13.6857L0.916062 13.6672L9.49777 12.4279L9.66921 12.4031V12.5763V12.6581C9.66921 13.3107 10.1572 13.8733 10.8032 13.9656C10.8032 13.9656 10.8032 13.9656 10.8032 13.9656L11.5076 14.0662C11.5232 14.0684 11.5385 14.0695 11.5535 14.0695C11.7094 14.0695 11.8457 13.9546 11.8685 13.7958C11.8933 13.6215 11.7722 13.4601 11.598 13.4352L10.8934 13.3346L10.8934 13.3346C10.5586 13.2867 10.3068 12.9965 10.3068 12.6582V12.441V12.3111L10.4353 12.2925L13.424 11.8609C15.7407 11.5263 18.1201 11.7936 20.3049 12.6339L22.5295 13.4896L22.9124 13.6369L22.5248 13.7713C21.9087 13.9849 21.3819 14.2208 21.0063 14.4052C20.6196 14.595 20.1846 14.6619 19.7492 14.5996C19.7492 14.5996 19.7492 14.5996 19.7492 14.5996L13.5402 13.7126L28.2644 18.7196ZM28.2644 18.7196H28.4442H30.5293C30.9062 18.7196 31.2126 18.4132 31.2126 18.0363V17.002V16.852H31.0626H30.0284C29.8523 16.852 29.7096 16.7093 29.7096 16.5333C29.7096 16.3572 29.8523 16.2145 30.0284 16.2145H30.6604H31.0998L30.7521 15.9458L30.7458 15.9408C30.7428 15.9384 30.7382 15.9347 30.7328 15.9308M28.2644 18.7196L30.7328 15.9308M30.7328 15.9308C29.6872 15.1615 27.5995 13.8459 25.5193 13.8459C23.837 13.8459 22.1412 14.5581 21.2874 14.9774C20.7862 15.2234 20.2234 15.3112 19.6591 15.2307C19.6591 15.2307 19.659 15.2307 19.659 15.2307L13.4499 14.3437L30.7328 15.9308ZM13.1795 13.9831C13.1546 14.1574 13.2757 14.3188 13.4499 14.3437L13.1795 13.9831ZM13.1795 13.9831C13.2043 13.809 13.3655 13.6879 13.5401 13.7126L13.1795 13.9831ZM5.4002 18.6159L5.40018 18.6159C5.27573 18.4915 5.27571 18.2896 5.4002 18.1651L6.1087 17.4566C6.2332 17.3321 6.43502 17.3322 6.55943 17.4566L6.55947 17.4567C6.68392 17.5811 6.68394 17.7829 6.55945 17.9074L5.85095 18.6159L5.85091 18.6159C5.7887 18.6782 5.70738 18.7093 5.62557 18.7093C5.54382 18.7093 5.46246 18.6781 5.4002 18.6159ZM24.9396 17.4566L24.9396 17.4566C25.064 17.3322 25.2658 17.3321 25.3903 17.4566L26.0988 18.1651L26.0988 18.1652C26.2233 18.2896 26.2233 18.4914 26.0988 18.6159L26.0988 18.6159C26.0366 18.6782 25.9552 18.7093 25.8734 18.7093C25.7917 18.7093 25.7103 18.6781 25.6481 18.6159L24.9396 17.9074L24.9395 17.9074C24.8151 17.783 24.8151 17.5811 24.9396 17.4566ZM23.949 13.3531L23.9892 13.3686L24.0314 13.3604C24.5154 13.2665 25.0175 13.2084 25.5192 13.2084C27.763 13.2084 29.9777 14.5839 31.1105 15.4173C31.5733 15.7577 31.8501 16.306 31.85 16.8836V18.0363C31.85 18.7644 31.2574 19.357 30.5292 19.357H28.1022H28.0152L27.972 19.4326C27.4848 20.2848 26.5679 20.86 25.5192 20.86C24.4705 20.86 23.5536 20.2848 23.0664 19.4326L23.0232 19.357H22.9362H8.56283H8.4758L8.43261 19.4326C7.94541 20.2848 7.02852 20.86 5.97982 20.86C4.71522 20.86 3.6414 20.0241 3.28321 18.8751L3.26034 18.8018L3.18744 18.7775L1.39569 18.1802C0.650496 17.9318 0.15 17.2374 0.15 16.4519V13.4098C0.15 13.2513 0.266359 13.1169 0.42319 13.0943C0.423191 13.0943 0.423193 13.0943 0.423195 13.0943L13.3328 11.23L13.3114 11.0816L13.3328 11.23C15.7572 10.8798 18.2474 11.1596 20.5337 12.039L23.949 13.3531ZM3.79351 18.0363C3.79351 19.2419 4.77417 20.2226 5.97982 20.2226C7.18555 20.2226 8.16614 19.2419 8.16614 18.0363C8.16614 16.8306 7.18548 15.8499 5.97982 15.8499C4.77417 15.8499 3.79351 16.8306 3.79351 18.0363ZM23.3329 18.0363C23.3329 19.2419 24.3136 20.2226 25.5192 20.2226C26.7248 20.2226 27.7056 19.2419 27.7056 18.0363C27.7056 16.8306 26.7249 15.8499 25.5192 15.8499C24.3136 15.8499 23.3329 16.8306 23.3329 18.0363Z"
                            fill="#16191A"
                            stroke="#16191A"
                            stroke-width="0.3"
                          />
                        </svg>
                        Car Rentals
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body tab-content">
                  <div className="tab-pane active" id="flight">
                    <div className="card">
                      <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs " data-bs-tabs="tabs">
                          <li className="nav-item">
                            <a
                              href="#stopover"
                              className="cus-btn primary-light primary active"
                              aria-current="true"
                              data-bs-toggle="tab"
                            >
                              Stopover
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#manage"
                              className="cus-btn primary-light primary "
                              aria-current="false"
                              data-bs-toggle="tab"
                            >
                              Manage Booking / Check in
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#status"
                              className="cus-btn primary-light primary "
                              aria-current="false"
                              data-bs-toggle="tab"
                            >
                              Flight Status
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body tab-content">
                        {/* <!-- StopOver tab Start --> */}
                        <div className="tab-pane active" id="stopover">
                          <form action="flight-listing.html" method="post">
                            <div className="custom-control mb-32">
                              <div className=" radio-button">
                                <input
                                  type="radio"
                                  name="way"
                                  className="custom-control-input"
                                  id="way"
                                />
                                <label className="custom-control-label" htmlFor="way">
                                  One way
                                </label>
                              </div>
                              <div className=" radio-button">
                                <input
                                  type="radio"
                                  name="way"
                                  className="custom-control-input"
                                  id="trip"
                                />
                                <label className="custom-control-label" htmlFor="trip">
                                  Round-trip
                                </label>
                              </div>
                              <div className="radio-button">
                                <input
                                  type="radio"
                                  name="way"
                                  className="custom-control-input"
                                  id="city"
                                />
                                <label className="custom-control-label" htmlFor="city">
                                  Multi-City
                                </label>
                              </div>
                            </div>
                            <div className="booking-info mb-32">
                              <div className="d-xl-flex align-items-center gap-24 d-lg-block d-flex">
                                <div className="custom-sel-input-block">
                                  <label htmlFor="flightFrom" className="h6 color-medium-gray">
                                    From
                                  </label>
                                  <input
                                    type="text"
                                    className="sel-input auto-input"
                                    id="flightFrom"
                                    placeholder="From"
                                  />
                                  <div className="slector-wrapper"></div>
                                </div>
                                <div className="arrows">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <g clip-path="url(#clip0_518_2277)">
                                      <path
                                        d="M23.6804 6.07409L18.2259 0.619583C17.7999 0.193537 17.1092 0.193537 16.6831 0.619583C16.2571 1.04563 16.2571 1.73628 16.6831 2.16233L20.2754 5.75464H1.09096C0.488472 5.75464 3.51626e-05 6.24307 3.51626e-05 6.84556C3.51626e-05 7.44804 0.488472 7.93648 1.09096 7.93648H20.2754L16.6832 11.5287C16.2571 11.9548 16.2571 12.6455 16.6832 13.0715C16.8961 13.2845 17.1753 13.391 17.4545 13.391C17.7337 13.391 18.0129 13.2845 18.2258 13.0714L23.6804 7.61688C24.1064 7.19084 24.1064 6.50013 23.6804 6.07409Z"
                                        fill="#4D73FC"
                                      />
                                      <path
                                        d="M22.9091 16.6637H3.72462L7.31683 13.0714C7.74288 12.6453 7.74288 11.9547 7.31683 11.5286C6.89088 11.1026 6.20013 11.1026 5.77409 11.5286L0.319535 16.9831C-0.106512 17.4092 -0.106512 18.0998 0.319535 18.5259L5.77404 23.9804C5.98713 24.1935 6.26627 24.3 6.54546 24.3C6.82465 24.3 7.10388 24.1935 7.31679 23.9804C7.74283 23.5544 7.74283 22.8637 7.31679 22.4377L3.72457 18.8455H22.9091C23.5116 18.8455 24 18.357 24 17.7546C24 17.1521 23.5116 16.6637 22.9091 16.6637Z"
                                        fill="#4D73FC"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_518_2277">
                                        <rect width="24" height="24" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                                <div className="custom-sel-input-block">
                                  <label htmlFor="flightTo" className="h6 color-medium-gray">
                                    To
                                  </label>
                                  <input
                                    type="text"
                                    className="sel-input auto-input"
                                    id="flightTo"
                                    placeholder="To"
                                  />
                                  <div className="slector-wrapper"></div>
                                </div>
                                <div className="vertical-line d-xl-block d-none"></div>
                              </div>
                              <div className="d-xl-flex align-items-center gap-24 d-lg-block ">
                                <div className="input-date-picker">
                                  <label htmlFor="flightDep" className="h6 color-medium-gray">
                                    Departing
                                  </label>
                                  <input
                                    type="text"
                                    className="sel-input date_from"
                                    id="flightDep"
                                    placeholder="Aug 18, 2023"
                                  />
                                </div>
                                <div className="input-date-picker">
                                  <label htmlFor="flightTime" className="h6 color-medium-gray">
                                    Returning
                                  </label>
                                  <input
                                    type="text"
                                    className="sel-input date_to"
                                    id="flightTime"
                                    placeholder="Aug 20, 2023"
                                  />
                                </div>
                                <div className="custom-sel-input-block ">
                                  <div className="h6 color-medium-gray mb-2">
                                    Passengers and Class
                                  </div>
                                  <div className="seat-booking color-black">
                                    {' '}
                                    <span className="total-pasenger">2</span> Passengers /{' '}
                                    <span className="pasenger-class">Business</span>
                                  </div>

                                  <div className="passenger-area pessenger-box bg-white light-shadow br-5 p-24">
                                    <h4 className="color-black mb-32">Passenger</h4>
                                    <div className="passenger-box mb-24">
                                      <div className="row">
                                        <div className="col-md-7 col-sm-6 col-6">
                                          <div className="content-box">
                                            <h5 className="lightest-black">Adult</h5>
                                            <p className="color-medium-gray light">
                                              {' '}
                                              Above 12 years.
                                            </p>
                                          </div>
                                        </div>
                                        <div className="col-md-5 col-sm-6 col-6">
                                          <div className="quantity quantity-wrap">
                                            <input className="decrement" type="button" value="-" />
                                            <input
                                              type="text"
                                              name="quantity"
                                              value="0"
                                              maxLength={2}
                                              size={1}
                                              id="adult"
                                              className="number"
                                            />
                                            <input className="increment" type="button" value="+" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="passenger-box mb-24">
                                      <div className="row">
                                        <div className="col-md-7 col-sm-6 col-6">
                                          <div className="content-box">
                                            <h5 className="lightest-black">Child</h5>
                                            <p className="color-medium-gray light">
                                              {' '}
                                              2-11 years on travel date.
                                            </p>
                                          </div>
                                        </div>
                                        <div className="col-md-5 col-sm-6 col-6">
                                          <div className="quantity quantity-wrap">
                                            <input className="decrement" type="button" value="-" />
                                            <input
                                              type="text"
                                              name="quantity"
                                              value="0"
                                              maxLength={2}
                                              size={1}
                                              id="child"
                                              className="number"
                                            />
                                            <input className="increment" type="button" value="+" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="passenger-box mb-32">
                                      <div className="row">
                                        <div className="col-md-7 col-sm-6 col-6">
                                          <div className="content-box">
                                            <h5 className="lightest-black">Infant</h5>
                                            <p className="color-medium-gray light">
                                              {' '}
                                              Below 2 years.
                                            </p>
                                          </div>
                                        </div>
                                        <div className="col-md-5 col-sm-6 col-6">
                                          <div className="quantity quantity-wrap">
                                            <input className="decrement" type="button" value="-" />
                                            <input
                                              type="text"
                                              name="quantity"
                                              value="0"
                                              maxLength={2}
                                              size={1}
                                              id="infant"
                                              className="number"
                                            />
                                            <input className="increment" type="button" value="+" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <p className="color-medium-gray light mb-32">
                                      Please note: You can book for a maximum of nine passengers.
                                    </p>
                                    <h4 className="color-black mb-32">Travel Class</h4>
                                    <div className="radio-tile-group">
                                      <div className="input-container">
                                        <input
                                          id="economy"
                                          className="radio-button"
                                          type="radio"
                                          name="radio"
                                          value="Economy"
                                        />
                                        <div className="radio-tile">
                                          <label htmlFor="economy" className="radio-tile-label">
                                            Economy
                                          </label>
                                        </div>
                                      </div>
                                      <div className="input-container">
                                        <input
                                          id="business"
                                          className="radio-button"
                                          type="radio"
                                          name="radio"
                                          value="Business"
                                        />
                                        <div className="radio-tile">
                                          <label htmlFor="business" className="radio-tile-label">
                                            Business
                                          </label>
                                        </div>
                                      </div>
                                      <div className="input-container">
                                        <input
                                          id="firstClass"
                                          className="radio-button"
                                          type="radio"
                                          name="radio"
                                          value="First Class"
                                        />
                                        <div className="radio-tile">
                                          <label htmlFor="firstClass" className="radio-tile-label">
                                            First Class
                                          </label>
                                        </div>
                                      </div>
                                      <div className="input-container">
                                        <input
                                          id="pre-eco"
                                          className="radio-button"
                                          type="radio"
                                          name="radio"
                                          value="Premium Economy"
                                        />
                                        <div className="radio-tile">
                                          <label htmlFor="pre-eco" className="radio-tile-label">
                                            Premium Economy
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row align-items-center">
                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-xl-0 mb-24">
                                <h5 className="color-medium-gray mb-24">
                                  When would you like stop in dubai during your journey?
                                </h5>
                                <div className="custom-control ">
                                  <div className=" radio-button">
                                    <input
                                      type="radio"
                                      name="flight"
                                      className="custom-control-input"
                                      id="departure"
                                    />
                                    <label className="custom-control-label" htmlFor="departure">
                                      Departure
                                    </label>
                                  </div>
                                  <div className=" radio-button">
                                    <input
                                      type="radio"
                                      name="flight"
                                      className="custom-control-input"
                                      id="return"
                                    />
                                    <label className="custom-control-label" htmlFor="return">
                                      Return
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-xl-0 mb-24">
                                <h5 className="color-medium-gray mb-24">
                                  How many days would you like to stay in Dubai?
                                </h5>
                                <div className="quantity quantity-wrap">
                                  <input className="decrement" type="button" value="-" />
                                  <input
                                    type="text"
                                    name="quantity"
                                    value="0"
                                    maxLength={2}
                                    size={1}
                                    id="adultQunatity"
                                    className="number"
                                  />
                                  <input className="increment" type="button" value="+" />
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-9">
                                <div className="row align-items-center">
                                  <div className="col-sm-6">
                                    <div className="booking-info promo-code mb-sm-0 mb-16">
                                      <div className="custom-sel-input-block m-0">
                                        <input
                                          type="text"
                                          className="sel-input p-0"
                                          id="promoCode"
                                          placeholder="Enter Promo Code"
                                        />
                                        <div className="slector-wrapper"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <button type="submit" className="cus-btn">
                                      Show Flight
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                      >
                                        <g clip-path="url(#clip0_502_1331)">
                                          <path
                                            d="M31.6933 0.544584C30.6572 -0.491824 27.1402 1.34503 26.1041 2.38143L21.9545 6.53127H3.07887C2.63024 6.53127 2.24462 6.85011 2.16055 7.29104C2.07669 7.73189 2.31798 8.16995 2.73524 8.3348L15.2174 13.2677L7.5633 20.9216H0.323909C0.168651 20.9221 0.0346723 21.0323 0.00576263 21.1852C-0.023357 21.3385 0.060152 21.4901 0.20498 21.5471L6.29687 23.9548C6.33201 24.1078 6.38108 24.2574 6.44394 24.4038L6.17745 24.6709C5.79778 25.0503 5.79778 25.6651 6.17745 26.045C6.55664 26.4247 7.17263 26.4247 7.55182 26.045L7.81194 25.785C7.95935 25.8501 8.11132 25.9014 8.26623 25.9382L10.6144 31.9561C10.6709 32.1013 10.8229 32.1851 10.976 32.1568C11.0419 32.145 11.1002 32.1123 11.1451 32.0673C11.2044 32.0087 11.2399 31.9274 11.2399 31.8382V24.7512L19.0155 16.976L23.9019 29.4993C24.0654 29.9177 24.5037 30.1608 24.9452 30.0781C25.136 30.0421 25.3038 29.9498 25.4333 29.8212C25.6038 29.6499 25.7071 29.4151 25.7077 29.1591V10.284L29.8573 6.13423C30.893 5.09789 32.7293 1.58085 31.6933 0.544584Z"
                                            fill="white"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_502_1351">
                                            <rect width="32" height="32" fill="black" />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        {/* <!-- StopOver tab End --> */}

                        {/* <!-- Manage tab Start --> */}
                        <div className="tab-pane" id="manage">
                          <div className="booking-bar">
                            <ul className="nav nav-tabs " data-bs-tabs="tabs">
                              <li className="nav-item">
                                <a
                                  href="#manageBooking"
                                  className="nav-link active"
                                  aria-current="true"
                                  data-bs-toggle="tab"
                                >
                                  Manage Booking
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="#checkIn"
                                  className="nav-link "
                                  aria-current="false"
                                  data-bs-toggle="tab"
                                >
                                  Check in
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="card-body tab-content">
                            <div className="tab-pane active" id="manageBooking">
                              <form action="flight-booking.html" method="post">
                                <div className="row align-items-center">
                                  <div className="col-xl-10 col-lg-10 col-md-10">
                                    <div className="booking-info d-block">
                                      <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                          <div className="custom-sel-input-block v-2">
                                            <input
                                              type="text"
                                              className="sel-input"
                                              name="reference"
                                              id="ref-name"
                                              placeholder="Booking Reference"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                          <div className="custom-sel-input-block m-0">
                                            <input
                                              type="text"
                                              className="sel-input"
                                              name="name"
                                              id="last-name"
                                              placeholder="Last Name"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-2 col-lg-2 col-md-2 mt-md-0 mt-32">
                                    <button type="submit" className="cus-btn">
                                      Check Booking
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="tab-pane " id="checkIn">
                              <form action="flight-booking.html" method="post">
                                <div className="row align-items-center">
                                  <div className="col-xl-10 col-lg-10 col-md-10">
                                    <div className="booking-info d-block">
                                      <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                          <div className="custom-sel-input-block v-2 m-0">
                                            <input
                                              type="text"
                                              className="sel-input"
                                              name="reference"
                                              id="refNname"
                                              placeholder="Booking Reference"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                          <div className="custom-sel-input-block m-0">
                                            <input
                                              type="text"
                                              className="sel-input"
                                              name="name"
                                              id="lasName"
                                              placeholder="Last Name"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-2 col-lg-2 col-md-2 mt-md-0 mt-32">
                                    <button type="submit" className="cus-btn">
                                      Check Booking
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Manage tab End --> */}

                        {/* <!-- Flight Status tab Start --> */}
                        <div className="tab-pane" id="status">
                          <div className="booking-bar">
                            <ul className="nav nav-tabs " data-bs-tabs="tabs">
                              <li className="nav-item">
                                <a
                                  href="#byRoute"
                                  className="nav-link active"
                                  aria-current="true"
                                  data-bs-toggle="tab"
                                >
                                  By Route
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="#flightNo"
                                  className="nav-link "
                                  aria-current="false"
                                  data-bs-toggle="tab"
                                >
                                  By flight Number
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="card-body tab-content">
                            <div className="tab-pane active" id="byRoute">
                              <form action="flight-listing.html" method="post">
                                <div className="row align-items-center">
                                  <div className="col-xl-10 col-lg-10">
                                    <div className="booking-info v-2 d-md-flex d-inline-block justify-content-between">
                                      <div className="custom-sel-input-block m-0">
                                        <input
                                          type="text"
                                          className="sel-input auto-input"
                                          id="flightDepart"
                                          placeholder="From"
                                        />
                                        <div className="slector-wrapper"></div>
                                      </div>
                                      <div className="custom-sel-input-block m-0 d-flex flex-row align-items-center">
                                        <div className="vertical-line d-md-flex d-none"></div>
                                        <input
                                          type="text"
                                          className="sel-input auto-input"
                                          id="flightArrive"
                                          placeholder="To"
                                        />
                                        <div className="slector-wrapper"></div>
                                      </div>
                                      <div>
                                        <div className="input-date-picker date-time m-0">
                                          <input
                                            type="text"
                                            className="sel-input date_from"
                                            id="flightTimeDate"
                                            placeholder="Aug 20, 2023"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-2 col-lg-2 d-flex align-items-center mt-lg-0 mt-32">
                                    <button type="submit" className="cus-btn">
                                      Show Flight
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                      >
                                        <g clip-path="url(#clip0_502_1331)">
                                          <path
                                            d="M31.6933 0.544584C30.6572 -0.491824 27.1402 1.34503 26.1041 2.38143L21.9545 6.53127H3.07887C2.63024 6.53127 2.24462 6.85011 2.16055 7.29104C2.07669 7.73189 2.31798 8.16995 2.73524 8.3348L15.2174 13.2677L7.5633 20.9216H0.323909C0.168651 20.9221 0.0346723 21.0323 0.00576263 21.1852C-0.023357 21.3385 0.060152 21.4901 0.20498 21.5471L6.29687 23.9548C6.33201 24.1078 6.38108 24.2574 6.44394 24.4038L6.17745 24.6709C5.79778 25.0503 5.79778 25.6651 6.17745 26.045C6.55664 26.4247 7.17263 26.4247 7.55182 26.045L7.81194 25.785C7.95935 25.8501 8.11132 25.9014 8.26623 25.9382L10.6144 31.9561C10.6709 32.1013 10.8229 32.1851 10.976 32.1568C11.0419 32.145 11.1002 32.1123 11.1451 32.0673C11.2044 32.0087 11.2399 31.9274 11.2399 31.8382V24.7512L19.0155 16.976L23.9019 29.4993C24.0654 29.9177 24.5037 30.1608 24.9452 30.0781C25.136 30.0421 25.3038 29.9498 25.4333 29.8212C25.6038 29.6499 25.7071 29.4151 25.7077 29.1591V10.284L29.8573 6.13423C30.893 5.09789 32.7293 1.58085 31.6933 0.544584Z"
                                            fill="white"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_502_1391">
                                            <rect width="32" height="32" fill="black" />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="tab-pane" id="flightNo">
                              <form action="flight-listing.html" method="post">
                                <div className="row align-items-center">
                                  <div className="col-xl-10 col-lg-10">
                                    <div className="booking-info v-2 d-md-flex d-inline-block justify-content-between">
                                      <div className="custom-sel-input-block m-0">
                                        <input
                                          type="text"
                                          className="sel-input auto-input"
                                          id="flightDepat"
                                          placeholder="From"
                                        />
                                        <div className="slector-wrapper"></div>
                                      </div>
                                      <div className="custom-sel-input-block m-0 d-flex flex-row align-items-center">
                                        <div className="vertical-line d-md-flex d-none"></div>
                                        <input
                                          type="text"
                                          className="sel-input auto-input"
                                          id="flightArive"
                                          placeholder="To"
                                        />
                                        <div className="slector-wrapper"></div>
                                      </div>
                                      <div>
                                        <div className="input-date-picker date-time m-0">
                                          <input
                                            type="text"
                                            className="sel-input date_from"
                                            id="flightTieDate"
                                            placeholder="Aug 20, 2023"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-2 col-lg-2 d-flex align-items-center mt-lg-0 mt-32">
                                    <button type="submit" className="cus-btn">
                                      Show Flight
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                      >
                                        <g clip-path="url(#clip0_502_1331)">
                                          <path
                                            d="M31.6933 0.544584C30.6572 -0.491824 27.1402 1.34503 26.1041 2.38143L21.9545 6.53127H3.07887C2.63024 6.53127 2.24462 6.85011 2.16055 7.29104C2.07669 7.73189 2.31798 8.16995 2.73524 8.3348L15.2174 13.2677L7.5633 20.9216H0.323909C0.168651 20.9221 0.0346723 21.0323 0.00576263 21.1852C-0.023357 21.3385 0.060152 21.4901 0.20498 21.5471L6.29687 23.9548C6.33201 24.1078 6.38108 24.2574 6.44394 24.4038L6.17745 24.6709C5.79778 25.0503 5.79778 25.6651 6.17745 26.045C6.55664 26.4247 7.17263 26.4247 7.55182 26.045L7.81194 25.785C7.95935 25.8501 8.11132 25.9014 8.26623 25.9382L10.6144 31.9561C10.6709 32.1013 10.8229 32.1851 10.976 32.1568C11.0419 32.145 11.1002 32.1123 11.1451 32.0673C11.2044 32.0087 11.2399 31.9274 11.2399 31.8382V24.7512L19.0155 16.976L23.9019 29.4993C24.0654 29.9177 24.5037 30.1608 24.9452 30.0781C25.136 30.0421 25.3038 29.9498 25.4333 29.8212C25.6038 29.6499 25.7071 29.4151 25.7077 29.1591V10.284L29.8573 6.13423C30.893 5.09789 32.7293 1.58085 31.6933 0.544584Z"
                                            fill="white"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_502_1321">
                                            <rect width="32" height="32" fill="black" />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Flight Status tab End --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- Hotel tab Start --> */}
                  <div className="tab-pane" id="hotel">
                    <form action="hotel-listing.html" method="post">
                      <div className="row align-items-center">
                        <div className="col-xxl-10 col-xl-12">
                          <div className="booking-info">
                            <div>
                              <div className="custom-sel-input-block">
                                <input
                                  type="text"
                                  className="sel-input auto-input-hotel"
                                  id="flight_Destination"
                                  placeholder="Destination"
                                />
                              </div>
                            </div>
                            <div className="vertical-line d-xl-flex d-none"></div>
                            <div className="d-md-flex justify-content-between d-sm-block">
                              <div className="input-date-picker">
                                <label htmlFor="checkIn_19" className="h6 color-medium-gray">
                                  Check In
                                </label>
                                <input
                                  type="text"
                                  className="sel-input date_from"
                                  id="checkIn_19"
                                  placeholder="Aug 18, 2023"
                                />
                              </div>
                              <div className="vertical-line d-xl-flex d-none"></div>
                              <div className="input-date-picker">
                                <label htmlFor="checkOut_20" className="h6 color-medium-gray">
                                  Check Out
                                </label>
                                <input
                                  type="text"
                                  className="sel-input date_to"
                                  id="checkOut_20"
                                  placeholder="Aug 20, 2023"
                                />
                              </div>
                            </div>
                            <div className="vertical-line d-xl-flex d-none"></div>
                            <div>
                              <div className="custom-sel-input-block">
                                <div className="h6 color-medium-gray">Guests and Room</div>
                                <div className="room-booking color-black">
                                  {' '}
                                  <span className="total-guest">2</span> Guests /{' '}
                                  <span className="guest-class">Room</span>
                                </div>
                                <div className="passenger-area room-box bg-white light-shadow br-5 p-24">
                                  <h4 className="color-black mb-32">Room</h4>
                                  <div className="passenger-box mb-24">
                                    <div className="row">
                                      <div className="col-md-7 col-sm-6">
                                        <div className="content-box">
                                          <h5 className="lightest-black">Adult</h5>
                                          <p className="color-medium-gray light">Above 12 years.</p>
                                        </div>
                                      </div>
                                      <div className="col-md-5 col-sm-6">
                                        <div className="quantity quantity-wrap">
                                          <input className="decrement" type="button" value="-" />
                                          <input
                                            type="text"
                                            name="quantity"
                                            value="0"
                                            maxLength={2}
                                            size={1}
                                            id="adult_2"
                                            className="number"
                                          />
                                          <input className="increment" type="button" value="+" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="passenger-box mb-24">
                                    <div className="row">
                                      <div className="col-md-7 col-sm-6">
                                        <div className="content-box">
                                          <h5 className="lightest-black">Child</h5>
                                          <p className="color-medium-gray light">
                                            2-11 years on travel date.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="col-md-5 col-sm-6">
                                        <div className="quantity quantity-wrap">
                                          <input className="decrement" type="button" value="-" />
                                          <input
                                            type="text"
                                            name="quantity"
                                            value="0"
                                            maxLength={2}
                                            size={1}
                                            id="child_2"
                                            className="number"
                                          />
                                          <input className="increment" type="button" value="+" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="passenger-box mb-32">
                                    <div className="row">
                                      <div className="col-md-7 col-sm-6">
                                        <div className="content-box">
                                          <h5 className="lightest-black">Infant</h5>
                                          <p className="color-medium-gray light">Below 2 years.</p>
                                        </div>
                                      </div>
                                      <div className="col-md-5 col-sm-6">
                                        <div className="quantity quantity-wrap">
                                          <input className="decrement" type="button" value="-" />
                                          <input
                                            type="text"
                                            name="quantity"
                                            value="0"
                                            maxLength={2}
                                            size={1}
                                            id="infant_2"
                                            className="number"
                                          />
                                          <input className="increment" type="button" value="+" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="d-flex justify-content-between align-items-center">
                                    <a href="#addroom" className="color-primary">
                                      <i className="fal fa-plus color-primary"></i>&nbsp;Add Rooms
                                    </a>
                                    <a href="#done" className="cus-btn done">
                                      Done
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-2 mt-xxl-0 mt-32">
                          <button type="submit" className="cus-btn extra-width">
                            Search
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* <!-- Hotel tab End --> */}

                  {/* <!-- Car Rental tab Start --> */}
                  <div className="tab-pane" id="rental">
                    <div className="card">
                      <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs " data-bs-tabs="tabs">
                          <li className="nav-item v-2">
                            <a
                              href="#carRental"
                              className="cus-btn primary-light primary active"
                              aria-current="true"
                              data-bs-toggle="tab"
                            >
                              Car Rental
                            </a>
                          </li>
                          <li className="nav-item v-2">
                            <a
                              href="#airPort"
                              className="cus-btn primary-light primary"
                              aria-current="false"
                              data-bs-toggle="tab"
                            >
                              Airport Transfer
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body tab-content">
                        <div className="tab-pane active" id="carRental">
                          <form action="car-listing.html" method="post">
                            <div className="row align-items-center mb-32">
                              <div className="col-xl-10 col-lg-10 col-md-12">
                                <div className="booking-info d-block">
                                  <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                      <div className="custom-sel-input-block location-select">
                                        <label htmlFor="pick_Up" className="h6 color-medium-gray">
                                          Pick-up Location
                                        </label>
                                        <i className="fal fa-map-marker-alt"></i>
                                        <input
                                          type="text"
                                          className="sel-input location-input auto-input-location"
                                          id="pick_Up"
                                          placeholder="Pick-up Location"
                                        />
                                        <div className="slector-wrapper"></div>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 d-flex gap-8">
                                      <div className="vertical-line"></div>
                                      <div className="custom-sel-input-block location-select">
                                        <label htmlFor="drop_Off" className="h6 color-medium-gray">
                                          Drop-off Location
                                        </label>
                                        <i className="fal fa-map-marker-alt"></i>
                                        <input
                                          type="text"
                                          className="sel-input location-input auto-input-location"
                                          id="drop_Off"
                                          placeholder="Drop-off Location"
                                        />
                                        <div className="slector-wrapper"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-2 col-lg-2 mt-lg-0 mt-32">
                                <div className="filter-checkbox">
                                  <input type="checkbox" id="out" />
                                  <label htmlFor="out" className="">
                                    Return to a different location
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="row align-items-center mb-32">
                              <div className="col-xl-5 col-lg-6 mb-lg-0 mb-24">
                                <div className="booking-info d-block">
                                  <div className="row align-items-center">
                                    <div className="col-md-6 col-sm-6 mb-sm-0 mb-16">
                                      <div className="custom-sel-input-block m-0">
                                        <label
                                          htmlFor="pickUpDate"
                                          className="h6 color-medium-gray"
                                        >
                                          Pick-up Date
                                        </label>
                                        <div className="d-flex align-items-center gap-8">
                                          <i className="fal fa-calendar-alt "></i>
                                          <input
                                            type="text"
                                            className="sel-input date_from"
                                            id="pickUpDate"
                                            placeholder="Start Date"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-1 col-sm-1 d-sm-block d-none p-0">
                                      <div className="vertical-line"></div>
                                    </div>
                                    <div className="col-md-5 col-sm-5">
                                      <div className="input-date-picker">
                                        <div className="d-flex align-items-center gap-8">
                                          <i className="fal fa-clock"></i>
                                          <input
                                            type="text"
                                            className="sel-input location-input timepicker p-0"
                                            id="time_Date"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-5 col-lg-6 mb-lg-0 mb-24">
                                <div className="booking-info d-block">
                                  <div className="row align-items-center">
                                    <div className="col-md-6 col-sm-6 mb-sm-0 mb-16">
                                      <div className="custom-sel-input-block m-0">
                                        <label
                                          htmlFor="date_return"
                                          className="h6 color-medium-gray"
                                        >
                                          Return Date
                                        </label>
                                        <div className="d-flex align-items-center gap-8">
                                          <i className="fal fa-calendar-alt "></i>
                                          <input
                                            type="text"
                                            className="sel-input date_to"
                                            id="date_return"
                                            placeholder="End Date"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-1 col-sm-1 d-sm-block d-none p-0">
                                      <div className="vertical-line"></div>
                                    </div>
                                    <div className="col-md-5 col-sm-5">
                                      <div className="input-date-picker">
                                        <div className="d-flex align-items-center gap-8">
                                          <i className="fal fa-clock"></i>
                                          <input
                                            type="text"
                                            className="sel-input location-input timepicker p-0"
                                            id="flightTimePick"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-2 mt-xl-0 mt-16">
                                <button type="submit" className="cus-btn extra-width">
                                  Search
                                </button>
                              </div>
                            </div>
                            <h5 className="dark-gray mb-16">Driver&apos;s age</h5>
                            <div className="custom-control">
                              <div className=" radio-button">
                                <input
                                  type="radio"
                                  name="age"
                                  className="custom-control-input"
                                  id="age-18"
                                />
                                <label className="custom-control-label" htmlFor="age-18">
                                  18-29
                                </label>
                              </div>
                              <div className=" radio-button">
                                <input
                                  type="radio"
                                  name="age"
                                  className="custom-control-input"
                                  id="age-30"
                                />
                                <label className="custom-control-label" htmlFor="age-30">
                                  30-49
                                </label>
                              </div>
                              <div className="radio-button">
                                <input
                                  type="radio"
                                  name="age"
                                  className="custom-control-input"
                                  id="age-50"
                                />
                                <label className="custom-control-label" htmlFor="age-50">
                                  50-70
                                </label>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="tab-pane" id="airPort">
                          <form action="car-listing.html" method="post">
                            <div className="row align-items-center mb-32">
                              <div className="col-xl-12 mb-xl-0 mb-16">
                                <div className="booking-info d-block">
                                  <div className="row align-items-center">
                                    <div className="col-lg-6">
                                      <div className="custom-sel-input-block location-select">
                                        <label
                                          htmlFor="flight_locationInput"
                                          className="h6 color-medium-gray"
                                        >
                                          Pick-up Location
                                        </label>
                                        <i className="fal fa-map-marker-alt"></i>
                                        <input
                                          type="text"
                                          className="sel-input location-input auto-input-location"
                                          id="flight_locationInput"
                                          placeholder="Pick-up Location"
                                        />
                                        <div className="slector-wrapper"></div>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 d-flex gap-8">
                                      <div className="vertical-line d-lg-flex- d-none"></div>
                                      <div className="custom-sel-input-block location-select">
                                        <label
                                          htmlFor="flight_dropOff"
                                          className="h6 color-medium-gray"
                                        >
                                          Drop-off Location
                                        </label>
                                        <i className="fal fa-map-marker-alt"></i>
                                        <input
                                          type="text"
                                          className="sel-input location-input auto-input-location"
                                          id="flight_dropOff"
                                          placeholder="Drop-off Location"
                                        />
                                        <div className="slector-wrapper"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row align-items-center mb-32">
                              <div className="col-xxl-4 col-xl-6 col-lg-6 mb-xxl-0 mb-24">
                                <div className="booking-info d-block">
                                  <div className="row align-items-center">
                                    <div className="col-md-6 col-sm-6 mb-sm-0 mb-16">
                                      <div className="custom-sel-input-block m-0">
                                        <label
                                          htmlFor="flight_ArrivalDate"
                                          className="h6 color-medium-gray"
                                        >
                                          Pick-up Date
                                        </label>
                                        <div className="d-flex align-items-center gap-8">
                                          <i className="fal fa-calendar-alt "></i>
                                          <input
                                            type="text"
                                            className="sel-input date_from"
                                            id="flight_ArrivalDate"
                                            placeholder="Pick-up Date"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-1 col-sm-1 d-sm-block d-none p-0">
                                      <div className="vertical-line"></div>
                                    </div>
                                    <div className="col-md-5 col-sm-5">
                                      <div className="input-date-picker">
                                        <div className="d-flex align-items-center gap-8">
                                          <i className="fal fa-clock"></i>
                                          <input
                                            type="text"
                                            className="sel-input location-input timepicker p-0"
                                            id="time_location"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xxl-4 col-xl-6 col-lg-6 mb-xxl-0 mb-24">
                                <div className="booking-info d-block">
                                  <div className="row align-items-center">
                                    <div className="col-md-6 col-sm-6 mb-sm-0 mb-16">
                                      <div className="custom-sel-input-block m-0">
                                        <label
                                          htmlFor="flight_returnDate"
                                          className="h6 color-medium-gray"
                                        >
                                          Return Date
                                        </label>
                                        <div className="d-flex align-items-center gap-8">
                                          <i className="fal fa-calendar-alt"></i>
                                          <input
                                            type="text"
                                            className="sel-input date_to"
                                            id="flight_returnDate"
                                            placeholder="Return Date"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-1 col-sm-1 d-sm-block d-none p-0">
                                      <div className="vertical-line"></div>
                                    </div>
                                    <div className="col-md-5 col-sm-5">
                                      <div className="input-date-picker">
                                        <div className="d-flex align-items-center gap-8">
                                          <i className="fal fa-clock"></i>
                                          <input
                                            type="text"
                                            className="sel-input location-input timepicker p-0"
                                            id="flight_timeNow"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xxl-4 ">
                                <div className="booking-info">
                                  <div className="custom-sel-input-block location-select">
                                    <label
                                      htmlFor="passenger_Popup"
                                      className="h6 color-medium-gray mb-1"
                                    >
                                      Passenger
                                    </label>
                                    <i className="fal fa-user"></i>
                                    <input
                                      type="text"
                                      className="sel-input location-input"
                                      id="passenger_Popup"
                                      placeholder="Number of Passenger"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="offset-xl-10 col-xl-2 mt-32">
                                <button type="submit" className="cus-btn extra-width">
                                  Search
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Car Rental tab End --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Booking Area End --> */}

        {/* <!-- Benefits Start --> */}
        <section
          className="benefit p-40"
          data-sal="slide-up"
          data-sal-duration="800"
          data-sal-delay="100"
          data-sal-easing="ease-in-out"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6 mb-xl-0 mb-24">
                <div className="benefit-block bg-white">
                  <div className="image-box">
                    <img
                      src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/vector/benefit-1.png"
                      alt=""
                    />
                  </div>
                  <div className="text-box">
                    <h4 className="lightest-black mb-8">We are Now Available</h4>
                    <p className="color-medium-gray">Call +1 555 666 888 contact with us</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 mb-lg-0 mb-24">
                <div className="benefit-block bg-white">
                  <div className="image-box">
                    <img
                      src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/vector/benefit-2.png"
                      alt=""
                    />
                  </div>
                  <div className="text-box">
                    <h4 className="lightest-black mb-8">International Flight</h4>
                    <p className="color-medium-gray">Call +1 555 666 888 contact with us</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 ">
                <div className="benefit-block bg-white">
                  <div className="image-box">
                    <img
                      src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/vector/benefit-3.png"
                      alt=""
                    />
                  </div>
                  <div className="text-box">
                    <h4 className="lightest-black mb-8">Check Refund</h4>
                    <p className="color-medium-gray">Call +1 555 666 888 contact with us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Benefits End --> */}

        {/* <!-- Flight Card Slider Start --> */}
        <section
          className="flight-card p-40 mb-40"
          data-sal="slide-down"
          data-sal-duration="800"
          data-sal-delay="100"
          data-sal-easing="ease-in-out"
        >
          <div className="container-fluid">
            <h3 className="lightest-black h3 bold mb-40">Latest Flight Deals</h3>
            <div className="flight-card-slider">
              <div className="flight-deal-block bg-white p-24">
                <div className="image-box mb-24">
                  <a href="flight-booking.html">
                    <img
                      src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/images/flight-1.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="content-box">
                  <h5 className="color-black mb-8">
                    <a href="flight-booking.html">Dubai to Dhaka</a>
                  </h5>
                  <p className="light-black mb-24">14 Aug, 2023 - 20 Aug 2023</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="price">
                      <h6 className="light-black mb-8 fw-500">Economy Class</h6>
                      <h5 className="lightest-black fw-500">$400</h5>
                    </div>
                    <a href="flight-booking.html" className="cus-btn small-pad">
                      Booking Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="flight-deal-block bg-white p-24">
                <div className="image-box mb-24">
                  <a href="flight-booking.html">
                    <img
                      src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/images/flight-2.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="content-box">
                  <h5 className="color-black mb-8">
                    <a href="flight-booking.html">Dubai to Thailand</a>
                  </h5>
                  <p className="light-black mb-24">14 Aug, 2023 - 20 Aug 2023</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="price">
                      <h6 className="light-black mb-8 fw-500">Premium Class</h6>
                      <h5 className="lightest-black fw-500">$540</h5>
                    </div>
                    <a href="flight-booking.html" className="cus-btn small-pad">
                      Booking Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="flight-deal-block bg-white p-24">
                <div className="image-box mb-24">
                  <a href="flight-booking.html">
                    <img
                      src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/images/flight-3.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="content-box">
                  <h5 className="color-black mb-8">
                    <a href="flight-booking.html">Dubai to Maldives</a>
                  </h5>
                  <p className="light-black mb-24">14 Aug, 2023 - 20 Aug 2023</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="price">
                      <h6 className="light-black mb-8 fw-500">Business Class</h6>
                      <h5 className="lightest-black fw-500">$980</h5>
                    </div>
                    <a href="flight-booking.html" className="cus-btn small-pad">
                      Booking Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="flight-deal-block bg-white p-24">
                <div className="image-box mb-24">
                  <a href="flight-booking.html">
                    <img
                      src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/images/flight-4.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="content-box">
                  <h5 className="color-black mb-8">
                    <a href="flight-booking.html">Dubai to Canada</a>
                  </h5>
                  <p className="light-black mb-24">14 Aug, 2023 - 20 Aug 2023</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="price">
                      <h6 className="light-black mb-8 fw-500">First Class</h6>
                      <h5 className="lightest-black fw-500">$5000</h5>
                    </div>
                    <a href="flight-booking.html" className="cus-btn small-pad">
                      Booking Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="flight-deal-block bg-white p-24">
                <div className="image-box mb-24">
                  <a href="flight-booking.html">
                    <img
                      src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/images/flight-2.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="content-box">
                  <h5 className="color-black mb-8">
                    <a href="flight-booking.html">Dubai to Dhaka</a>
                  </h5>
                  <p className="light-black mb-24">14 Aug, 2023 - 20 Aug 2023</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="price">
                      <h6 className="light-black mb-8 fw-500">Economy Class</h6>
                      <h5 className="lightest-black fw-500">$400</h5>
                    </div>
                    <a href="flight-booking.html" className="cus-btn small-pad">
                      Booking Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Flight Card Slider End --> */}

        {/* <!-- Travel us sec Start --> */}
        <div className="travel-sec mb-40">
          <div className="cloud-vector-block">
            <img
              src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/vector/cloud-vector.png"
              alt=""
              className="cloud-vector"
            />
          </div>
          <img
            src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/vector/vector-line.png"
            alt=""
            className="line-vector"
          />
          <div className="container-fluid">
            <div className="row align-items-center justify-content-center row-gap-sm-5 row-gap-4">
              <div
                className="col-xxl-3 col-lg-4 col-md-8"
                data-sal="slide-right"
                data-sal-duration="800"
                data-sal-delay="100"
                data-sal-easing="ease-in-out"
              >
                <div className="left-content">
                  <img
                    src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/logo.png"
                    alt=""
                    className="mb-40"
                  />
                  <div className="text mb-40">
                    <span className="h1 review-block bg-lightest-gray"> TRAVEL</span>{' '}
                    <span className="h1 review-block bg-lightest-gray">All</span>
                    <span className="h1 bg-lightest-gray"> OVER</span>{' '}
                    <span className="h1 bg-lightest-gray color-primary">The</span>
                    <span className="h1 bg-lightest-gray color-primary"> WORLD</span>
                  </div>
                  <a href="flight-booking.html" className="cus-btn">
                    Booking Now
                  </a>
                </div>
              </div>
              <div className="offset-xxl-1 col-xxl-8 col-lg-8 col-md-10">
                <div
                  className="right-images-block"
                  data-sal="slide-up"
                  data-sal-duration="800"
                  data-sal-delay="100"
                  data-sal-easing="ease-in-out"
                >
                  <img
                    src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/vector/border-line.png"
                    alt=""
                    className="border-image"
                  />
                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-3 col-md-3 col-3">
                      <img
                        src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/images/paris.png"
                        alt=""
                        className="side-image"
                      />
                    </div>
                    <div className="col-lg-5 col-md-5 col-5">
                      <img
                        src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/images/dubai.png"
                        alt=""
                        className="center-image"
                      />
                    </div>
                    <div className="col-lg-3 col-md-3 col-3">
                      <img
                        src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/images/italy.png"
                        alt=""
                        className="side-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Travel us sec End --> */}

        {/* <!-- Global Travel Start --> */}
        <section className="global-travel-hotel p-40">
          <div className="container-fluid">
            <div className="d-flex justify-content-between mb-40 flex-md-nowrap flex-wrap">
              <h3 className="fw-700 lightest-black mb-md-0 mb-3">
                Popular Global Travel Destinations
              </h3>
              <a href="hotel-listing.html" className="cus-btn ">
                Show More
              </a>
            </div>
            <div className="row justify-content-center row-gap-4">
              <div
                className="col-xxl-6 col-lg-5 col-md-7 col-10"
                data-sal="slide-right"
                data-sal-duration="800"
                data-sal-delay="100"
                data-sal-easing="ease-in-out"
              >
                <img
                  src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/images/map.png"
                  alt=""
                />
              </div>
              <div className="col-xxl-6 col-lg-7">
                <div className="row">
                  <div
                    className="col-lg-6 col-md-6 col-sm-6"
                    data-sal="slide-left"
                    data-sal-duration="800"
                    data-sal-delay="100"
                    data-sal-easing="ease-in-out"
                  >
                    <div className="hotel-block bg-white p-24 light-shadow mb-24">
                      <div className="image-box mb-24">
                        <a href="hotel-detail.html">
                          <img
                            src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/cities/image-1.png"
                            alt=""
                          />
                        </a>
                        <div className="price">
                          <h6>
                            form <span className="color-sec">$350</span>
                          </h6>
                        </div>
                      </div>
                      <div className="content-box">
                        <h5 className="black mb-8">
                          <a href="hotel-detail.html">Rome</a>
                        </h5>
                        <div className="d-flex gap-8 mb-24">
                          <div className="icon d-flex align-items-center gap-8">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/location.png"
                              alt=""
                            />
                            <h6 className="color-medium-gray">Italy - </h6>
                          </div>
                          <div className="icon d-flex align-items-center gap-8">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/hotel.png"
                              alt=""
                            />
                            <h6 className="color-medium-gray">Hotels </h6>
                          </div>
                        </div>
                        <a href="hotel-detail.html" className="cus-btn full-width">
                          Discover
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="hotel-block bg-white p-24 light-shadow mb-24">
                      <div className="image-box mb-24">
                        <a href="hotel-detail.html">
                          <img
                            src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/cities/image-2.png"
                            alt=""
                          />
                        </a>
                        <div className="price">
                          <h6>
                            form <span className="color-sec">$260</span>
                          </h6>
                        </div>
                      </div>
                      <div className="content-box">
                        <h5 className="black mb-8">
                          <a href="hotel-detail.html">Tokyo</a>
                        </h5>
                        <div className="d-flex gap-8 mb-24">
                          <div className="icon d-flex align-items-center gap-8">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/location.png"
                              alt=""
                            />
                            <h6 className="color-medium-gray">Japan - </h6>
                          </div>
                          <div className="icon d-flex align-items-center gap-8">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/hotel.png"
                              alt=""
                            />
                            <h6 className="color-medium-gray">Hotels </h6>
                          </div>
                        </div>
                        <a href="hotel-detail.html" className="cus-btn full-width">
                          Discover
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="hotel-block bg-white p-24 light-shadow mb-24">
                      <div className="image-box mb-24">
                        <a href="hotel-detail.html">
                          <img
                            src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/cities/image-3.png"
                            alt=""
                          />
                        </a>
                        <div className="price">
                          <h6>
                            form <span className="color-sec">$290</span>
                          </h6>
                        </div>
                      </div>
                      <div className="content-box">
                        <h5 className="black mb-8">
                          <a href="hotel-detail.html">Sydney</a>
                        </h5>
                        <div className="d-flex gap-8 mb-24">
                          <div className="icon d-flex align-items-center gap-8">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/location.png"
                              alt=""
                            />
                            <h6 className="color-medium-gray">Australia - </h6>
                          </div>
                          <div className="icon d-flex align-items-center gap-8">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/hotel.png"
                              alt=""
                            />
                            <h6 className="color-medium-gray">Hotels </h6>
                          </div>
                        </div>
                        <a href="hotel-detail.html" className="cus-btn full-width">
                          Discover
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="hotel-block bg-white p-24 light-shadow mb-24">
                      <div className="image-box mb-24">
                        <a href="hotel-detail.html">
                          <img
                            src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/cities/image-4.png"
                            alt=""
                          />
                        </a>
                        <div className="price">
                          <h6>
                            form <span className="color-sec">$340</span>
                          </h6>
                        </div>
                      </div>
                      <div className="content-box">
                        <h5 className="black mb-8">
                          <a href="hotel-detail.html">London</a>
                        </h5>
                        <div className="d-flex gap-8 mb-24">
                          <div className="icon d-flex align-items-center gap-8">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/location.png"
                              alt=""
                            />
                            <h6 className="color-medium-gray">United Kingdom (UK) - </h6>
                          </div>
                          <div className="icon d-flex align-items-center gap-8">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/hotel.png"
                              alt=""
                            />
                            <h6 className="color-medium-gray">Hotels </h6>
                          </div>
                        </div>
                        <a href="hotel-detail.html" className="cus-btn full-width">
                          Discover
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Global Travel End --> */}

        {/* <!-- Achievement Section Start --> */}
        <section className="achievement p-40">
          <div className="container-fluid">
            <div className="bg-white light-shadow br-20 achievements-block">
              <div className="row align-items-center">
                <div
                  className="col-xl-6 col-lg-12 mb-xl-0 mb-24"
                  data-sal="slide-up"
                  data-sal-duration="800"
                  data-sal-delay="100"
                  data-sal-easing="ease-in-out"
                >
                  <h5 className="color-primary mb-16">Achievement</h5>
                  <h3 className="h3 bold mb-8">Your Destination Awaits, Book Now</h3>
                  <p className="dark-gray mb-24 w-90">
                    Lorem ipsum dolor sit amet consectetur. Sed leo sit semper sed facilisis
                    ultrices urna eu. In tellus interdum vel ac massa interdum viverra elementum
                    auctor.
                  </p>
                  <div className="counter-section mb-24">
                    <div className="row row-gap-4">
                      <div className="col-sm-6">
                        <div className="counter-count bg-lightest-gray">
                          <div>
                            <span className="count h3 bold color-primary">12870</span>
                            <span className="h3 bold color-primary">+</span>
                            <h5 className="title white">Happy Customers</h5>
                          </div>
                          <img
                            src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/user.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="counter-count bg-lightest-gray">
                          <div>
                            <span className="count h3 bold color-primary">100</span>
                            <span className="h3 bold color-primary">%</span>
                            <h5 className="title white">Client Satisfied</h5>
                          </div>
                          <img
                            src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/user-2.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-md-flex gap-32 align-items-center">
                    <h5 className="lightest-black mb-md-0 mb-16">
                      Let&apos;s Connect Reach Out for More Information
                    </h5>
                    <a href="contact-us.html" className="cus-btn">
                      Contact us
                    </a>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-12"
                  data-sal="slide-down"
                  data-sal-duration="800"
                  data-sal-delay="100"
                  data-sal-easing="ease-in-out"
                >
                  <img
                    src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/images/achievement-image.png"
                    alt=""
                    className="achievement-image light-shadow br-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Achievement Section End --> */}

        {/* <!-- Testimonials Section Start --> */}
        <section className="testimonials p-40">
          <div className="container-fluid">
            <div className="testimonials-box bg-white light-shadow br-20">
              <div className="row align-items-center row-gap-4">
                <div
                  className="col-xl-4"
                  data-sal="slide-left"
                  data-sal-duration="800"
                  data-sal-delay="100"
                  data-sal-easing="ease-in-out"
                >
                  <div className="text-area">
                    <h5 className="color-primary mb-16">Testimonials</h5>
                    <h3 className="h1 bold lightest-black">What our clients think about us?</h3>
                  </div>
                </div>
                <div
                  className="col-xl-7 offset-xl-1"
                  data-sal="slide-right"
                  data-sal-duration="800"
                  data-sal-delay="100"
                  data-sal-easing="ease-in-out"
                >
                  <div className="testimonial-slider">
                    <div className="review-block bg-lightest-gray pad-32 br-10">
                      <div className="user-image d-flex mb-32">
                        <img
                          src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/user/user-1.png"
                          alt=""
                        />
                        <img
                          src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/user/user-2.png"
                          alt=""
                        />
                        <img
                          src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/user/user-3.png"
                          alt=""
                        />
                      </div>
                      <h6 className="light-black mb-32">
                        Lorem ipsum dolor sit amet consectetur. Eget ornare ac eleifend leo mauris
                        suspendisse. Bibendum suspendisse proin aliquet porttitor sed vulputate
                        proin ultrices et. Ut leo integer nunc amet curabitur nulla ipsum. Ultrices
                        proin sit a aliquet lorem. Nisl lobortis amet eu vitae eget hendrerit a.
                        Erat amet facilisi sed nunc consectetur.
                      </h6>
                      <h5 className="light-black mb-2">Mr John Deo</h5>
                      <p className="dark-gray">CEO at FlyNow</p>
                    </div>
                    <div className="review-block bg-lightest-gray pad-32 br-10">
                      <div className="user-image d-flex mb-32">
                        <img
                          src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/user/user-2.png"
                          alt=""
                        />
                        <img
                          src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/user/user-1.png"
                          alt=""
                        />
                        <img
                          src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/user/user-3.png"
                          alt=""
                        />
                      </div>
                      <h6 className="light-black mb-32">
                        Lorem ipsum dolor sit amet consectetur. Eget ornare ac eleifend leo mauris
                        suspendisse. Bibendum suspendisse proin aliquet porttitor sed vulputate
                        proin ultrices et. Ut leo integer nunc amet curabitur nulla ipsum. Ultrices
                        proin sit a aliquet lorem. Nisl lobortis amet eu vitae eget hendrerit a.
                        Erat amet facilisi sed nunc consectetur.{' '}
                      </h6>
                      <h5 className="light-black mb-2">Mr John Deo</h5>
                      <p className="dark-gray">CEO at FlyNow</p>
                    </div>
                    <div className="review-block bg-lightest-gray pad-32 br-10">
                      <div className="user-image d-flex mb-32">
                        <img
                          src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/user/user-3.png"
                          alt=""
                        />
                        <img
                          src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/user/user-1.png"
                          alt=""
                        />
                        <img
                          src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/user/user-2.png"
                          alt=""
                        />
                      </div>
                      <h6 className="light-black mb-32">
                        Lorem ipsum dolor sit amet consectetur. Eget ornare ac eleifend leo mauris
                        suspendisse. Bibendum suspendisse proin aliquet porttitor sed vulputate
                        proin ultrices et. Ut leo integer nunc amet curabitur nulla ipsum. Ultrices
                        proin sit a aliquet lorem. Nisl lobortis amet eu vitae eget hendrerit a.
                        Erat amet facilisi sed nunc consectetur.{' '}
                      </h6>
                      <h5 className="light-black mb-2">Mr John Deo</h5>
                      <p className="dark-gray">CEO at FlyNow</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Testimonials Section End --> */}

        {/* <!-- Blog Area Start --> */}
        <section
          className="news-blog p-40"
          data-sal="slide-up"
          data-sal-duration="800"
          data-sal-delay="100"
          data-sal-easing="ease-in-out"
        >
          <div className="container-fluid">
            <div className="d-flex justify-content-between mb-40">
              <h3 className="h3 bold lightest-black p-0">Our Latest News</h3>
              <a href="blog-listing.html" className="cus-btn">
                Show More
              </a>
            </div>
            <div className="row row-gap-4">
              <div className="col-xxl-6 col-xl-4 col-lg-12 col-md-6 col-sm-6">
                <div className="blog-box bg-white light-shadow p-24 br-20">
                  <div className="row align-items-center row-gap-3">
                    <div className="col-xxl-6 col-xl-12 col-lg-6">
                      <div className="image-box">
                        <a href="blog-detail.html">
                          <img
                            src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/blog/blog-1.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-12 col-lg-6">
                      <div className="content-box">
                        <div className="d-flex gap-16 mb-24">
                          <div className="d-flex align-items-center gap-8">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/user-bk.png"
                              alt=""
                            />
                            <p className="h6 dark-gray">Malisa John</p>
                          </div>
                          <div className="vr-line"></div>
                          <div className="d-flex align-items-center gap-8">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/calender.png"
                              alt=""
                            />
                            <p className="h6 dark-gray">08 Aug, 2023</p>
                          </div>
                        </div>
                        <h5 className="lightest-black mb-8">
                          <a href="blog-detail.html">
                            Roaming with Purpose: Traveling Responsibly and Sustainably
                          </a>
                        </h5>
                        <p className="dark-gray mb-24">
                          Lorem ipsum dolor sit amet consectetur. Feugiat sit eleifend tortor.
                        </p>
                        <a href="blog-detail.html" className="cus-btn small-pad">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-4 col-lg-12 col-md-6 col-sm-6">
                <div className="blog-box bg-white light-shadow p-24 br-20">
                  <div className="row align-items-center row-gap-3">
                    <div className="col-xxl-6 col-xl-12 col-lg-6">
                      <div className="image-box">
                        <a href="blog-detail.html">
                          <img
                            src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/blog/blog-3.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-12 col-lg-6">
                      <div className="content-box">
                        <div className="d-flex gap-16 mb-24">
                          <div className="d-flex align-items-center gap-8">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/user-bk.png"
                              alt=""
                            />
                            <p className="h6 dark-gray">Malisa John</p>
                          </div>
                          <div className="vr-line"></div>
                          <div className="d-flex align-items-center gap-8">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/calender.png"
                              alt=""
                            />
                            <p className="h6 dark-gray">08 Aug, 2023</p>
                          </div>
                        </div>
                        <h5 className="lightest-black mb-8">
                          <a href="blog-detail.html">
                            Navigating Cultures: Cross-Cultural Encounters and Insights
                          </a>
                        </h5>
                        <p className="dark-gray mb-24">
                          Lorem ipsum dolor sit amet consectetur. Feugiat sit eleifend tortor.
                        </p>
                        <a href="blog-detail.html" className="cus-btn small-pad">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-4 col-lg-12 col-md-6 col-sm-6">
                <div className="blog-box bg-white light-shadow p-24 br-20">
                  <div className="row align-items-center row-gap-3">
                    <div className="col-xxl-6 col-xl-12 col-lg-6">
                      <div className="image-box">
                        <a href="blog-detail.html">
                          <img
                            src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/blog/blog-2.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-12 col-lg-6">
                      <div className="content-box">
                        <div className="d-flex gap-16 mb-24">
                          <div className="d-flex align-items-center gap-8">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/user-bk.png"
                              alt=""
                            />
                            <p className="h6 dark-gray">Malisa John</p>
                          </div>
                          <div className="vr-line"></div>
                          <div className="d-flex align-items-center gap-8">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/calender.png"
                              alt=""
                            />
                            <p className="h6 dark-gray">08 Aug, 2023</p>
                          </div>
                        </div>
                        <h5 className="lightest-black mb-8">
                          <a href="blog-detail.html">
                            Urban Explorations: Navigating Cities and Urban Landscapes
                          </a>
                        </h5>
                        <p className="dark-gray mb-24">
                          Lorem ipsum dolor sit amet consectetur. Feugiat sit eleifend tortor.
                        </p>
                        <a href="blog-detail.html" className="cus-btn small-pad">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-6 col-xl-4 col-lg-12 col-md-6 col-sm-6 d-xxl-block d-xl-none">
                <div className="blog-box bg-white light-shadow p-24 br-20">
                  <div className="row align-items-center row-gap-3">
                    <div className="col-xxl-6 col-xl-12 col-lg-6">
                      <div className="image-box">
                        <a href="blog-detail.html">
                          <img
                            src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/blog/blog-4.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-12 col-lg-6">
                      <div className="content-box">
                        <div className="d-flex gap-16 mb-24">
                          <div className="d-flex align-items-center gap-8">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/user-bk.png"
                              alt=""
                            />
                            <p className="h6 dark-gray">Malisa John</p>
                          </div>
                          <div className="vr-line"></div>
                          <div className="d-flex align-items-center gap-8">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/calender.png"
                              alt=""
                            />
                            <p className="h6 dark-gray">08 Aug, 2023</p>
                          </div>
                        </div>
                        <h5 className="lightest-black mb-8">
                          <a href="blog-detail.html">
                            Wings of Adventure: Exploring the World by Air
                          </a>
                        </h5>
                        <p className="dark-gray mb-24">
                          Lorem ipsum dolor sit amet consectetur. Feugiat sit eleifend tortor.
                        </p>
                        <a href="blog-detail.html" className="cus-btn small-pad">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Blog Area End --> */}

        {/* <!-- Footer Start --> */}
        <footer
          className="bg-white p-40"
          data-sal="slide-down"
          data-sal-duration="800"
          data-sal-delay="100"
          data-sal-easing="ease-in-out"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-lg-0 mb-32 ">
                <a href="">
                  <img
                    src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/logo.png"
                    alt=""
                    className="mb-16"
                  />
                </a>
                <p className="dark-gray mb-16">
                  Lorem ipsum dolor sit amet consectetur. Aliquet vulputate augue penatibus in
                  libero et id aliquam. In ridiculus pretium est velit euismod.{' '}
                </p>
                <h6 className="lightest-black mb-8">Subscribe to our special offers</h6>
                <form action="index.html" method="post">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    name="email"
                  />
                  <button type="submit" className="subscribe">
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 col-6 mb-lg-0 mb-32">
                <h4 className="light-black mb-24">Booking</h4>
                <div className="our-links">
                  <ul className="unstyled">
                    <li className="mb-16">
                      <a href="flight-booking.html" className="light-black">
                        Book Flights
                      </a>
                    </li>
                    <li className="mb-16">
                      <a href="tour-packages.html" className="light-black">
                        Travel Services
                      </a>
                    </li>
                    <li className="mb-16">
                      <a href="car-booking.html" className="light-black">
                        Transportation
                      </a>
                    </li>
                    <li className="mb-16">
                      <a href="tour-packages.html" className="light-black">
                        Planning Your Trip
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 col-6 mb-lg-0 mb-32">
                <h4 className="light-black mb-24">Useful Links</h4>
                <div className="our-links">
                  <ul className="unstyled">
                    <li className="mb-16">
                      <a href="index.html" className="light-black">
                        Home
                      </a>
                    </li>
                    <li className="mb-16">
                      <a href="blog-listing.html" className="light-black">
                        Blogs
                      </a>
                    </li>
                    <li className="mb-16">
                      <a href="about-us.html" className="light-black">
                        About{' '}
                      </a>
                    </li>
                    <li className="mb-16">
                      <a href="contact.html" className="light-black">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 col-6 mb-md-0 mb-32">
                <h4 className="light-black mb-24">Manage</h4>
                <div className="our-links">
                  <ul className="unstyled">
                    <li className="mb-16">
                      <a href="flight-booking.html" className="light-black">
                        Check-in
                      </a>
                    </li>
                    <li className="mb-16">
                      <a href="tour-packages.html" className="light-black">
                        Manage Your Booking
                      </a>
                    </li>
                    <li className="mb-16">
                      <a href="car-listing.html" className="light-black">
                        Chaurfeur Drive
                      </a>
                    </li>
                    <li className="mb-16">
                      <a href="flight-listing.html" className="light-black">
                        Flight Status
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <h4 className="light-black mb-16">Contact Us</h4>
                <div className="follow-us">
                  <ul className="unstyled">
                    <li className="mb-8">
                      <img
                        src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/location-bk.png"
                        alt=""
                      />
                      &nbsp;&nbsp;123 Main Street, Anytown, USA.
                    </li>
                    <li className="mb-8 h4 color-primary">
                      <img
                        src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/telephone.png"
                        alt=""
                      />
                      &nbsp;&nbsp;+1 234 567 890
                    </li>
                    <li className="mb-24">
                      <a href="">
                        <img
                          src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/mail.png"
                          alt=""
                        />
                        &nbsp;&nbsp;email@example.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="social-link mb-32">
                  <h6 className="light-black mb-8">Follow Us!</h6>
                  <ul className="unstyled">
                    <li>
                      <a href="" className="active">
                        <img
                          src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/instagram.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/facebook.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/linkedin.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/icons/twitter.png"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <p className="light-black">©2024 FlyNow All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- Footer Area End  --> */}

        {/* <!-- modal-popup area Start  --> */}
        <div className="search-popup">
          <div className="search-popup__overlay search-toggler"></div>
          <div className="search-popup__content">
            <form role="search" method="get" className="search-popup__form" action="index.html">
              <input type="text" id="search" placeholder="Search Here..." />
              <button type="submit">
                <i className="fal fa-search"></i>
              </button>
            </form>
          </div>
        </div>
        {/* <!-- search-popup end--> */}
      </div>

      {/* <!-- Mobile Menu Start --> */}
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler"></span>
          <div className="logo-box">
            <a href="index.html" aria-label="logo image">
              <img
                src="https://www.sportingkampenhout.be/Sitecore/airline/assets/media/logo.png"
                alt=""
                className="invisible"
              />
            </a>
          </div>
          <div className="mobile-nav__container"></div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:example@company.com">example@company.com</a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:+12345678">+123 (4567) -890</a>
            </li>
          </ul>
          {/* <!-- <div className="mobile-nav__social">
        <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
        <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
        <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
      </div> --> */}
        </div>
        <script src="https://www.sportingkampenhout.be/Sitecore/airline/assets/js/vendor/jquery-3.6.3.min.js" />
        <script src="https://www.sportingkampenhout.be/Sitecore/airline/assets/js/vendor/calendar/popper.min.js" />
        <script src="https://www.sportingkampenhout.be/Sitecore/airline/assets/js/vendor/bootstrap.min.js" />
        <script src="https://www.sportingkampenhout.be/Sitecore/airline/assets/js/vendor/slick.min.js" />
        <script src="https://www.sportingkampenhout.be/Sitecore/airline/assets/js/vendor/jquery-appear.js" />
        <script src="https://www.sportingkampenhout.be/Sitecore/airline/assets/js/vendor/jquery-validator.js" />
        <script src="https://www.sportingkampenhout.be/Sitecore/airline/assets/js/vendor/aksVideoPlayer.js" />
        <script src="https://www.sportingkampenhout.be/Sitecore/airline/assets/js/vendor/tilt.jquery.js" />
        <script src="https://www.sportingkampenhout.be/Sitecore/airline/assets/js/vendor/calendar/picker.js" />
        <script src="https://www.sportingkampenhout.be/Sitecore/airline/assets/js/vendor/calendar/picker.date.js" />
        <script src="https://www.sportingkampenhout.be/Sitecore/airline/assets/js/vendor/autoComplete.js" />
        <script src="https://www.sportingkampenhout.be/Sitecore/airline/assets/js/vendor/jquery.timepicker.min.js" />
        <script src="https://www.sportingkampenhout.be/Sitecore/airline/assets/js/vendor/sal.js" />
        <script src="https://www.sportingkampenhout.be/Sitecore/airline/assets/js/date.js" />
        <script src="https://www.sportingkampenhout.be/Sitecore/airline/assets/js/app.js" />
      </div>
      {/* <!-- Mobile Menu End --> */}
    </>
  );
};

export default Layout;
