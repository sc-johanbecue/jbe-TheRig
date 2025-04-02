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
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}
        <link rel="canonical" href={publicUrl} />
        <meta property="og:title" content={fields?.OgTitle?.value?.toString()} />
        <meta property="og:description" content={fields?.OgDescription?.value?.toString()} />
        <meta property="og:image" content={fields?.OgImage?.value?.src?.toString()} />
        <meta property="og:type" content={route?.templateName} data-attr="JSS-21.6.0" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Sodexo Group – Food Services &amp; Facilities Management</title>
        <meta content="Sodexo integrates catering, facilities management, and employee benefits services to create an improved quality of life for the people we serve, our clients, employees, customers and the community. " />
        <meta content="en" property="og:locale" />
        <meta
          content="Sodexo Group – Food Services &amp; Facilities Management"
          property="og:title"
        />
        <meta
          content="Sodexo integrates catering, facilities management, and employee benefits services to create an improved quality of life for the people we serve, our clients, employees, customers and the community. "
          name="description"
          property="og:description"
        />
        <meta content="" property="og:type" />
        <meta
          content="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Logos/Sodexo_Logotype_Blue.png?h=42&amp;iar=0&amp;w=131"
          property="og:image"
        />
        <meta content="Sodexo Global" property="og:site_name" />
        <meta content="https://www.sodexo.com/" property="og:url" />
        <meta content="index, follow" name="robots" />
        <meta content="" name="twitter:card" />
        <meta content="summary" name="twitter:site" />
        <meta
          content="Sodexo Group – Food Services &amp; Facilities Management"
          name="twitter:title"
        />
        <meta
          content="Sodexo integrates catering, facilities management, and employee benefits services to create an improved quality of life for the people we serve, our clients, employees, customers and the community. "
          name="twitter:description"
        />
        <meta
          content="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Logos/Sodexo_Logotype_Blue.png?h=42&amp;iar=0&amp;w=131"
          name="twitter:image"
        />
        <link href="https://www.sodexo.com/" hrefLang="fr" rel="alternate" />
        <link href="https://www.sodexo.com/" hrefLang="en" rel="alternate" />
        <link href="https://www.sodexo.com/" rel="canonical" />
        <link
          href="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/shared/Images/Favicon/FAVICON_SDX_ICO.ico?iar=0"
          rel="icon"
          type="image/x-icon"
        />
        <link
          rel="preload"
          href="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/BannerCard-503x503/Modern-Recipe-Banner-Card.jpg?h=608&amp;iar=0&amp;w=608"
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/BannerCard-503x503/Kitchen-Works-Banner-Card.jpg?h=608&amp;iar=0&amp;w=608"
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/BannerCard-503x503/The-good-eating-company-Banner-Card.jpg?h=608&amp;iar=0&amp;w=608"
          as="image"
          fetchPriority="high"
        />
        <meta name="next-head-count" content="24" />
        <link data-next-font="" rel="preconnect" href="/" crossOrigin="anonymous" />
        <link rel="preload" href="/_next/static/css/82c79a564f3ac4be.css" as="style" />
        <link rel="stylesheet" href="/_next/static/css/82c79a564f3ac4be.css" data-n-g="" />
        <link rel="preload" href="/_next/static/css/7258364f27e782a5.css" as="style" />
        <link rel="stylesheet" href="/_next/static/css/7258364f27e782a5.css" data-n-p="" />
        <link rel="preload" href="/_next/static/css/d1c4779c33d3f3bd.css" as="style" />
        <link rel="stylesheet" href="/_next/static/css/d1c4779c33d3f3bd.css" data-n-p="" />
        <noscript data-n-css=""></noscript>
        <script defer noModule src="/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js"></script>
        <script src="/_next/static/chunks/webpack-298d49d36da548df.js" defer></script>
        <script src="/_next/static/chunks/framework-9620da855a94eb57.js" defer></script>
        <script src="/_next/static/chunks/main-2facddc7a75f0c44.js" defer></script>
        <script src="/_next/static/chunks/pages/_app-341dbd0e54409f54.js" defer></script>
        <script src="/_next/static/chunks/4333364f-94584e990f9d6ab0.js" defer></script>
        <script src="/_next/static/chunks/975-6f5469cf380f081c.js" defer></script>
        <script src="/_next/static/chunks/840-93f0fed481957f6f.js" defer></script>
        <script src="/_next/static/chunks/285-ed29a8c86bcb6bd9.js" defer></script>
        <script
          src="/_next/static/chunks/pages/%5B%5B...path%5D%5D-149ec4c58b8ca9df.js"
          defer
        ></script>
        <script src="/_next/static/fjQkXPGL6oDwYVwaJbw8e/_buildManifest.js" defer></script>
        <script src="/_next/static/fjQkXPGL6oDwYVwaJbw8e/_ssgManifest.js" defer></script>
        <style id="__jsx-264729537">
          :root
          {`--font-family-base: 'Theme Base', 'Open Sans', sans-serif;
         --font-family-heading: 'Theme Heading', 'Sansa Pro', sans-serif;`}
        </style>
        <style id="__jsx-1640501015">#id_main_skip_to_content.jsx-1640501015{}</style>
        <style id="__jsx-1675192690">
          #id_main_skip_to_content.jsx-1675192690
          {`
         color: var(--color-font-base);`}
        </style>
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

      <main
        id="id_main_skip_to_content"
        role="main"
        className="jsx-1675192690 jsx-1640501015 Layout_container__6EhJX"
      >
        <div className="jsx-1675192690 jsx-1640501015 Layout_main__4tP_M">
          <section className="HeroLatestNews_hero-latest-news__a0Yow">
            <section className="OpacityOverlayBannerLayout-module_container__-umdD color-neutral HeroEditorial-module_editorial__1oU40 color-white">
              <div className="OpacityOverlayBannerLayout-module_background__6YRNF OpacityOverlayBannerLayout-module_opacity25__I8iCN OpacityOverlayBannerLayout-module_withOverlay__9E6Pf">
                <img
                  alt="Superbowl 25"
                  loading="eager"
                  decoding="async"
                  data-nimg="fill"
                  className="HeroEditorial-module_image__CkIvM"
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: '0',
                    top: '0',
                    right: '0',
                    bottom: '0',
                    objectFit: 'cover',
                    color: 'transparent',
                  }}
                  src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Banner-1240x698/blog/2025/superbowl-25-banner-2.jpg?h=698&amp;iar=0&amp;w=1240"
                />
              </div>
              <div className="HeroEditorial-module_content__rjYwE">
                <p className="HeroEditorial-module_metadata__L37Uu font-body font-bold"></p>
                <a
                  className=""
                  title="Opens page (same window)"
                  id="{070EA548-849E-452A-82D4-4CED8EA19DC0}"
                  href="/blog/our-everyday-stories/business-stories/2025/superbowl-25"
                >
                  <h1 className="HeroEditorial-module_title__ppi-b font-hero-title">
                    Experience exceptional moments at the world&#x27;s largest sporting events
                  </h1>
                </a>
                <p className="HeroEditorial-module_description__VNc38 font-body"> </p>
                <a
                  title="Opens page (same window)"
                  target="_self"
                  className="Button_btn__Xvq6a Button_btn--red-waves__OSCcE Button_btn--link__JI8fR Button_btn--without-border__wYHqY"
                  href="/blog/our-everyday-stories/business-stories/2025/superbowl-25"
                >
                  Learn more
                  <span
                    className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                    style={{ height: '24px', width: '24px' }}
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24">
                      <use xlinkHref="#icons_arrow"></use>
                    </svg>
                  </span>
                </a>
              </div>
            </section>
            <div className="HeroLatestNews_hero-latest-news__slider__wZ9xe">
              <div className="Surface_surface__Y0_rx LatestNews_latest-news__9Eyrq">
                <div className="LatestNews_latest-news__introduction__Ne3xZ">
                  <section className="LatestNewsIntro_latest-news-intro__jva9R">
                    <h2 className="LatestNewsIntro_latest-news-intro__title__hBsQZ LatestNewsIntro_font-h2__HtlRu">
                      Read our latest news
                    </h2>
                    <p className="LatestNewsIntro_latest-news-intro__presentation__GFsQ_">
                      Sodexo is the global leader in sustainable food and valued experiences at
                      every moment in life.
                    </p>
                    <a
                      target="_self"
                      className="Button_btn__Xvq6a Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--outline-blue__W1LG6"
                      href="/news/newsroom"
                    >
                      See our latest news
                      <span
                        className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                        style={{ height: '24px', width: '24px' }}
                      >
                        <svg aria-hidden="true" viewBox="0 0 24 24">
                          <use xlinkHref="#icons_arrow"></use>
                        </svg>
                      </span>
                    </a>
                  </section>
                </div>
                <section
                  className="splide splide Slider_slider__CJilF LatestNews_latest-news__slider__ptqhR"
                  aria-labelledby=""
                  aria-roledescription="carousel"
                  data-grid-layout="global"
                  role="region"
                >
                  <div className="splide__track" aria-atomic="false" aria-live="polite">
                    <ul className="splide__list">
                      <li className="splide__slide" role="group">
                        <article className="LatestNewsSlide_latest-news-slide__WLk__">
                          <div className="LatestNewsSlide_latest-news-slide__image__ZWzY7">
                            <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                              <img
                                alt=""
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                className="PushImage_push-image--rounded-bottom-left__3k2A8"
                                style={{
                                  position: 'absolute',
                                  height: '100%',
                                  width: '100%',
                                  left: '0',
                                  top: '0',
                                  right: '0',
                                  bottom: '0',
                                  objectFit: 'cover',
                                  color: 'transparent',
                                }}
                                src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Banner-1240x698/news/2025/Prix-DSIN.jpg?h=698&amp;iar=0&amp;w=1240"
                              />
                            </div>
                          </div>
                          <div className="LatestNewsSlide_latest-news-slide__content__fT26E">
                            <h3 className="LatestNewsSlide_latest-news-slide__content__title__0TF1Y LatestNewsSlide_font-h3__9qeWo">
                              Alice Guéhennec, Chief Tech, Data, Digital, and Innovation Officer at
                              Sodexo, awarded “Best CDIO” in the “Data &amp; AI” category, by the
                              2024 DSIN
                            </h3>
                            <div className="LatestNewsSlide_latest-news-slide__content__text__oVqab">
                              Alice Guéhennec, Chief Tech, Data, Digital, and Innovation Officer at
                              Sodexo, has been awarded “Best CDIO” in the “Data and Artificial
                              Intelligence” category, by the 2024 DSIN Trophies jury. Learn more.
                            </div>
                            <div className="LatestNewsSlide_latest-news-slide__content__buttons__5sWAm">
                              <a
                                target="_self"
                                className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__content__buttons--link__W_tAU Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                href="/news/newsroom/2025/alice-guehennec-awarded-best-cdio-data-ai-dsin"
                              >
                                Learn more
                                <span
                                  className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                  style={{ height: '24px', width: '24px' }}
                                >
                                  <svg aria-hidden="true" viewBox="0 0 24 24">
                                    <use xlinkHref="#icons_arrow"></use>
                                  </svg>
                                </span>
                              </a>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="splide__slide" role="group">
                        <article className="LatestNewsSlide_latest-news-slide__WLk__">
                          <div className="LatestNewsSlide_latest-news-slide__image__ZWzY7">
                            <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                              <img
                                alt=""
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                className="PushImage_push-image--rounded-bottom-left__3k2A8"
                                style={{
                                  position: 'absolute',
                                  height: '100%',
                                  width: '100%',
                                  left: '0',
                                  top: '0',
                                  right: '0',
                                  bottom: '0',
                                  objectFit: 'cover',
                                  color: 'transparent',
                                }}
                                src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Banner-1240x698/news/2025/Equileap-2025-banner.jpg?h=698&amp;iar=0&amp;w=1240"
                              />
                            </div>
                          </div>
                          <div className="LatestNewsSlide_latest-news-slide__content__fT26E">
                            <h3 className="LatestNewsSlide_latest-news-slide__content__title__0TF1Y LatestNewsSlide_font-h3__9qeWo">
                              Sodexo makes significant progress in Equileap’s global ranking,
                              reaching 4th place in France
                            </h3>
                            <div className="LatestNewsSlide_latest-news-slide__content__text__oVqab">
                              Sodexo is pleased to announce its significant progress in the 2025
                              Equileap ranking, which recognizes the top-performing companies in
                              terms of workplace equality.
                            </div>
                            <div className="LatestNewsSlide_latest-news-slide__content__buttons__5sWAm">
                              <a
                                target="_self"
                                className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__content__buttons--link__W_tAU Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                href="/news/newsroom/2025/equileap-2025"
                              >
                                Learn more
                                <span
                                  className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                  style={{ height: '24px', width: '24px' }}
                                >
                                  <svg aria-hidden="true" viewBox="0 0 24 24">
                                    <use xlinkHref="#icons_arrow"></use>
                                  </svg>
                                </span>
                              </a>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="splide__slide" role="group">
                        <article className="LatestNewsSlide_latest-news-slide__WLk__">
                          <div className="LatestNewsSlide_latest-news-slide__image__ZWzY7">
                            <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                              <img
                                alt="Sodexo Team"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                className="PushImage_push-image--rounded-bottom-left__3k2A8"
                                style={{
                                  position: 'absolute',
                                  height: '100%',
                                  width: '100%',
                                  left: '0',
                                  top: '0',
                                  right: '0',
                                  bottom: '0',
                                  objectFit: 'cover',
                                  color: 'transparent',
                                }}
                                src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Banner-1240x698/news/2025/Ethisphere-march-2025-banner.jpg?h=440&amp;iar=0&amp;w=990"
                              />
                            </div>
                          </div>
                          <div className="LatestNewsSlide_latest-news-slide__content__fT26E">
                            <h3 className="LatestNewsSlide_latest-news-slide__content__title__0TF1Y LatestNewsSlide_font-h3__9qeWo">
                              Sodexo named one of the World’s Most Ethical Companies® by Ethisphere
                              for the second year in a row
                            </h3>
                            <div className="LatestNewsSlide_latest-news-slide__content__text__oVqab">
                              Sodexo is proud to announce its recognition as one of the World’s Most
                              Ethical Compagnies® for the second consecutive year. Issued by
                              Ethisphere, a global leader in defining and advancing the standards of
                              ethical business, this annual recognition honors Sodexo’s continuous
                              commitment to business integrity through best-in-class policies and
                              practices. Learn more.
                            </div>
                            <div className="LatestNewsSlide_latest-news-slide__content__buttons__5sWAm">
                              <a
                                target="_self"
                                className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__content__buttons--link__W_tAU Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                href="/news/newsroom/2025/sodexo-named-one-of-the-world-most-ethical-companies-by-ethisphere-for-the-second-year-in-a-row"
                              >
                                Learn more
                                <span
                                  className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                  style={{ height: '24px', width: '24px' }}
                                >
                                  <svg aria-hidden="true" viewBox="0 0 24 24">
                                    <use xlinkHref="#icons_arrow"></use>
                                  </svg>
                                </span>
                              </a>
                              <a
                                href="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Documents/press-releases/2025/PR-Sodexo-Worlds-Most-Ethical-Companies-Ethisphere-2025.pdf"
                                aria-label="Download"
                                className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__file-button__9IU2p Button_btn--unshaped__MfqLg"
                              >
                                <span
                                  className="Icon_icon__qNAb6 Icon_icon--bg-red__sbGiT"
                                  style={{ height: '24px', width: '24px' }}
                                >
                                  <svg aria-hidden="true" viewBox="0 0 24 24">
                                    <use xlinkHref="#icons_download"></use>
                                  </svg>
                                </span>
                              </a>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="splide__slide" role="group">
                        <article className="LatestNewsSlide_latest-news-slide__WLk__">
                          <div className="LatestNewsSlide_latest-news-slide__image__ZWzY7">
                            <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                              <img
                                alt="Facilities Maintenance"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                className="PushImage_push-image--rounded-bottom-left__3k2A8"
                                style={{
                                  position: 'absolute',
                                  height: '100%',
                                  width: '100%',
                                  left: '0',
                                  top: '0',
                                  right: '0',
                                  bottom: '0',
                                  objectFit: 'cover',
                                  color: 'transparent',
                                }}
                                src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Banner-1240x698/news/2025/Facilities-Maintenance.jpg?h=698&amp;iar=0&amp;w=1240"
                              />
                            </div>
                          </div>
                          <div className="LatestNewsSlide_latest-news-slide__content__fT26E">
                            <h3 className="LatestNewsSlide_latest-news-slide__content__title__0TF1Y LatestNewsSlide_font-h3__9qeWo">
                              Sodexo awarded a significant contract with Santos, cementing its
                              market-leading position in Australia’s energy and resources sector
                            </h3>
                            <div className="LatestNewsSlide_latest-news-slide__content__text__oVqab">
                              Sodexo in Australia has been awarded a large five-year contract with
                              Santos, the largest supplier of natural gas in Australia. Discover
                              more.
                            </div>
                            <div className="LatestNewsSlide_latest-news-slide__content__buttons__5sWAm">
                              <a
                                target="_self"
                                className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__content__buttons--link__W_tAU Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                href="/news/newsroom/2025/significant-contract-with-santos-australia"
                              >
                                Learn more
                                <span
                                  className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                  style={{ height: '24px', width: '24px' }}
                                >
                                  <svg aria-hidden="true" viewBox="0 0 24 24">
                                    <use xlinkHref="#icons_arrow"></use>
                                  </svg>
                                </span>
                              </a>
                              <a
                                href="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Documents/press-releases/2025/PR-Sodexo-in-Australia-x-Santos.pdf"
                                aria-label="Download"
                                className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__file-button__9IU2p Button_btn--unshaped__MfqLg"
                              >
                                <span
                                  className="Icon_icon__qNAb6 Icon_icon--bg-red__sbGiT"
                                  style={{ height: '24px', width: '24px' }}
                                >
                                  <svg aria-hidden="true" viewBox="0 0 24 24">
                                    <use xlinkHref="#icons_download"></use>
                                  </svg>
                                </span>
                              </a>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="splide__slide" role="group">
                        <article className="LatestNewsSlide_latest-news-slide__WLk__">
                          <div className="LatestNewsSlide_latest-news-slide__image__ZWzY7">
                            <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                              <img
                                alt=""
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                className="PushImage_push-image--rounded-bottom-left__3k2A8"
                                style={{
                                  position: 'absolute',
                                  height: '100%',
                                  width: '100%',
                                  left: '0',
                                  top: '0',
                                  right: '0',
                                  bottom: '0',
                                  objectFit: 'cover',
                                  color: 'transparent',
                                }}
                                src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Banner-1240x698/news/2025/Contract-Mucem-2025.jpg?h=698&amp;iar=0&amp;w=1240"
                              />
                            </div>
                          </div>
                          <div className="LatestNewsSlide_latest-news-slide__content__fT26E">
                            <h3 className="LatestNewsSlide_latest-news-slide__content__title__0TF1Y LatestNewsSlide_font-h3__9qeWo">
                              In Marseille, the Mucem selects Michelin Star chef Alexandre Mazzia
                              and Sodexo Live! to redefine its J4 culinary experience
                            </h3>
                            <div className="LatestNewsSlide_latest-news-slide__content__text__oVqab">
                              Following a call for proposals initiated by the Mucem in late 2024,
                              the project signed by Alexandre Mazzia and Sodexo Live! has been
                              selected to oversee and manage the dining spaces of the J4 building
                              until 2036. Learn more.
                            </div>
                            <div className="LatestNewsSlide_latest-news-slide__content__buttons__5sWAm">
                              <a
                                target="_self"
                                className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__content__buttons--link__W_tAU Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                href="/news/newsroom/2025/mucem-selects-michelin-star-chef-alexandre-mazzia-and-sodexo-live"
                              >
                                Learn more
                                <span
                                  className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                  style={{ height: '24px', width: '24px' }}
                                >
                                  <svg aria-hidden="true" viewBox="0 0 24 24">
                                    <use xlinkHref="#icons_arrow"></use>
                                  </svg>
                                </span>
                              </a>
                            </div>
                          </div>
                        </article>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="SliderControls_slider-controls__t9rMj LatestNews_latest-news__slider__controls__qETs7"
                    data-testid="slider-controls"
                  >
                    <ul className="splide__arrows SliderArrows_slider-arrows__n89FR SliderControls_slider-controls__arrows__wFqwO SliderControls_slider-controls__arrows--hidden__apV18">
                      <li className="splide__arrow--prev SliderArrows_slider-arrows__arrow__d8O_p">
                        <button
                          aria-label="Previous slide"
                          className="Button_btn__Xvq6a SliderArrows_slider-arrows__arrow--rotated__VJ_fE Button_btn--unshaped__MfqLg"
                        >
                          <span className="Icon_icon__qNAb6 SliderArrows_slider-arrows__arrow-icon__qHj5H SliderArrows_slider-arrows__arrow-icon_big__N13YL Icon_icon--white__ymQDN Icon_icon--bg-red__sbGiT">
                            <svg aria-hidden="false">
                              <use xlinkHref="#icons_chevron"></use>
                            </svg>
                          </span>
                        </button>
                      </li>
                      <li className="splide__arrow--next SliderArrows_slider-arrows__arrow__d8O_p">
                        <button
                          aria-label="Next slide"
                          className="Button_btn__Xvq6a Button_btn--unshaped__MfqLg"
                        >
                          <span className="Icon_icon__qNAb6 SliderArrows_slider-arrows__arrow-icon__qHj5H SliderArrows_slider-arrows__arrow-icon_big__N13YL Icon_icon--white__ymQDN Icon_icon--bg-red__sbGiT">
                            <svg aria-hidden="false">
                              <use xlinkHref="#icons_chevron"></use>
                            </svg>
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </section>
          <section
            className="ContentBlock_content-block__PkQ1i"
            data-grid-layout="global"
            id="bcb4e2cb-b76d-43b3-a382-c358013e1e1e"
          >
            <div className="RichText_rich-text__Xj3Dc" data-testid="rich-text">
              <h2 className="rte-align-center">Food brands that meet your needs</h2>
            </div>
          </section>
          <section
            className="CardsSlider_cards-slider__fSELa"
            id="bf831cab-1a1c-45ea-b9c3-ac49ac2815a2"
          >
            <section
              className="splide splide Slider_slider__CJilF cards-slider__slider"
              aria-labelledby=""
              aria-roledescription="carousel"
              data-grid-layout="global"
              role="region"
            >
              <div
                className="splide__track CardsSlider_cards-slider__slides__8FwQ9"
                aria-atomic="false"
                aria-live="polite"
              >
                <ul className="splide__list">
                  <li className="splide__slide CardsSlider_cards-slider__item__ZGzEh" role="group">
                    <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                      <div className="Card_card-container__picture__q2urq">
                        <img
                          alt="Modern-Recipe-Banner-Card"
                          fetchPriority="high"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            objectFit: 'cover',
                            color: 'transparent',
                          }}
                          src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/BannerCard-503x503/Modern-Recipe-Banner-Card.jpg?h=608&amp;iar=0&amp;w=608"
                        />
                      </div>
                      <section className="Card_card-container__presentation__Q_aCH">
                        <p className="Card_card-container__presentation-typo__1ENx9 Card_font-body__qRScb Card_font-bold__8gf2G">
                          All day food for modern living
                        </p>
                        <div className="Card_font-h4__Idw5p Card_font-base__PyGMI">
                          Modern Recipe is designed to meet expectations of today&quot;s
                          talents, bringing together the ingredients that matter the most
                          for top-notch corporate dining experiences. 
                        </div>
                        <div className="Card_card-container__presentation-buttons__rDbZU">
                          <a
                            title="Opens page (same window)"
                            target="_self"
                            className="Button_btn__Xvq6a card-container__presentation-buttons-link Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                            href="/brands-services/food/brands/modern-recipe"
                          >
                            Learn more
                            <span
                              className="Icon_icon__qNAb6 Icon_icon--red__KxdQl Icon_icon--arrow-rtl__xN7T5"
                              style={{ height: '24px', width: '24px' }}
                            >
                              <svg aria-hidden="true" viewBox="0 0 24 24">
                                <use xlinkHref="#icons_arrow"></use>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </section>
                    </article>
                  </li>
                  <li className="splide__slide CardsSlider_cards-slider__item__ZGzEh" role="group">
                    <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                      <div className="Card_card-container__picture__q2urq">
                        <img
                          alt="Kitchen-Works-Banner-Card"
                          fetchPriority="high"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            objectFit: 'cover',
                            color: 'transparent',
                          }}
                          src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/BannerCard-503x503/Kitchen-Works-Banner-Card.jpg?h=608&amp;iar=0&amp;w=608"
                        />
                      </div>
                      <section className="Card_card-container__presentation__Q_aCH">
                        <p className="Card_card-container__presentation-typo__1ENx9 Card_font-body__qRScb Card_font-bold__8gf2G">
                          Making eating well, easy
                        </p>
                        <div className="Card_font-h4__Idw5p Card_font-base__PyGMI">
                          Delicious, honest food, in great company and in an environment where you
                          can truly disconnect from work. A no-compromise approach to convenience,
                          value, taste, nutrition and freshness.{' '}
                        </div>
                        <div className="Card_card-container__presentation-buttons__rDbZU">
                          <a
                            title="Opens page (same window)"
                            target="_self"
                            className="Button_btn__Xvq6a card-container__presentation-buttons-link Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                            href="/brands-services/food/brands/kitchen-works"
                          >
                            Learn more
                            <span
                              className="Icon_icon__qNAb6 Icon_icon--red__KxdQl Icon_icon--arrow-rtl__xN7T5"
                              style={{ height: '24px', width: '24px' }}
                            >
                              <svg aria-hidden="true" viewBox="0 0 24 24">
                                <use xlinkHref="#icons_arrow"></use>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </section>
                    </article>
                  </li>
                  <li className="splide__slide CardsSlider_cards-slider__item__ZGzEh" role="group">
                    <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                      <div className="Card_card-container__picture__q2urq">
                        <img
                          alt="The-good-eating-company-Banner-Card"
                          fetchPriority="high"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            objectFit: 'cover',
                            color: 'transparent',
                          }}
                          src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/BannerCard-503x503/The-good-eating-company-Banner-Card.jpg?h=608&amp;iar=0&amp;w=608"
                        />
                      </div>
                      <section className="Card_card-container__presentation__Q_aCH">
                        <p className="Card_card-container__presentation-typo__1ENx9 Card_font-body__qRScb Card_font-bold__8gf2G">
                          Discover new depths of delicious
                        </p>
                        <div className="Card_font-h4__Idw5p Card_font-base__PyGMI">
                          At The Good Eating Company, we are passionate about simple cuisine, made
                          exceptionally well. We curate food experiences that put a twist on the
                          ordinary, inviting guests to discover new depths of delicious each day.{' '}
                        </div>
                        <div className="Card_card-container__presentation-buttons__rDbZU">
                          <a
                            title="Opens page (same window)"
                            target="_self"
                            className="Button_btn__Xvq6a card-container__presentation-buttons-link Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                            href="/brands-services/food/brands/the-good-eating-company"
                          >
                            Learn more
                            <span
                              className="Icon_icon__qNAb6 Icon_icon--red__KxdQl Icon_icon--arrow-rtl__xN7T5"
                              style={{ height: '24px', width: '24px' }}
                            >
                              <svg aria-hidden="true" viewBox="0 0 24 24">
                                <use xlinkHref="#icons_arrow"></use>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </section>
                    </article>
                  </li>
                </ul>
              </div>
              <button className="Button_btn__Xvq6a CardsSlider_cards-slider__link__89T9S Button_btn--blue__16_CO Button_btn--reverse__NQ5qh Button_btn--underlined__broDi Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"></button>
              <div
                className="SliderControls_slider-controls__t9rMj CardsSlider_cards-slider__navigation__quABb"
                data-testid="slider-controls"
              >
                <ul className="splide__arrows SliderArrows_slider-arrows__n89FR SliderControls_slider-controls__arrows__wFqwO SliderControls_slider-controls__arrows--hidden__apV18">
                  <li className="splide__arrow--prev SliderArrows_slider-arrows__arrow__d8O_p">
                    <button
                      aria-label="Previous slide"
                      className="Button_btn__Xvq6a SliderArrows_slider-arrows__arrow--rotated__VJ_fE Button_btn--unshaped__MfqLg"
                    >
                      <span className="Icon_icon__qNAb6 SliderArrows_slider-arrows__arrow-icon__qHj5H Icon_icon--white__ymQDN Icon_icon--bg-red__sbGiT">
                        <svg aria-hidden="false">
                          <use xlinkHref="#icons_chevron"></use>
                        </svg>
                      </span>
                    </button>
                  </li>
                  <li className="splide__arrow--next SliderArrows_slider-arrows__arrow__d8O_p">
                    <button
                      aria-label="Next slide"
                      className="Button_btn__Xvq6a Button_btn--unshaped__MfqLg"
                    >
                      <span className="Icon_icon__qNAb6 SliderArrows_slider-arrows__arrow-icon__qHj5H Icon_icon--white__ymQDN Icon_icon--bg-red__sbGiT">
                        <svg aria-hidden="false">
                          <use xlinkHref="#icons_chevron"></use>
                        </svg>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </section>
          </section>
          <section
            data-full-width="false"
            data-grid-layout="global"
            id="50feeb9c-a6c2-48a1-ac65-330f74b929bc"
            className="Surface_surface__Y0_rx banner-card"
          >
            <div className="BannerCard_banner-card__container__FHLDK" data-grid-layout="global">
              <div
                className="BannerCard_banner-card__image-wrapper__T8qZB"
                data-grid-layout="global"
              >
                <div className="Media_media__NhvS6" id="">
                  <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd ImageBannerCard_image-banner-card__image-container__dd7MU">
                    <img
                      alt=""
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className=""
                      style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        left: '0',
                        top: '0',
                        right: '0',
                        bottom: '0',
                        objectFit: 'cover',
                        color: 'transparent',
                      }}
                      src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/BannerCard-503x503/Sodexo-2024-Report-EN.jpg?h=503&amp;iar=0&amp;w=503"
                    />
                  </div>
                </div>
              </div>
              <div className="BannerCard_banner-card__content__JcBKs" data-grid-layout="global">
                <div className="opacity-in AnimateIn_opacity-in__animation--part1__2X1EP AnimateIn_opacity-in__animation__7ET9C">
                  <h2 className="BannerCard_banner-card__title__z7y_B">
                    Integrated Report Fiscal 2024
                  </h2>
                </div>
                <div className="opacity-in AnimateIn_opacity-in__animation--part2__rqjWC AnimateIn_opacity-in__animation__7ET9C">
                  <div className="BannerCard_banner-card__text__XOb09">
                    <p>
                      Discover or rediscover Sodexo, our fundamentals, unique business model,
                      strategy and performance in our Integrated Report Fiscal 2024.
                    </p>
                  </div>
                </div>
                <a
                  title="Opens page (same window)"
                  target="_self"
                  className="Button_btn__Xvq6a BannerCard_banner-card__button__xbgXJ Button_btn--link__JI8fR Button_btn--outline-blue__W1LG6"
                  href="/investors/financial-results-and-publications/integrated-report"
                >
                  Read more
                  <span
                    className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                    style={{ height: '24px', width: '24px' }}
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24">
                      <use xlinkHref="#icons_arrow"></use>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </section>
          <section
            data-full-width="false"
            data-grid-layout="global"
            id="b01ab0c8-85c7-4a3a-aba9-7c54826d1202"
            className="Surface_surface__Y0_rx banner-card"
          >
            <div className="BannerCard_banner-card__container__FHLDK" data-grid-layout="global">
              <div
                className="BannerCard_banner-card__image-wrapper__T8qZB BannerCard_banner-card__image-wrapper--reversed__haj15"
                data-grid-layout="global"
              >
                <div className="Media_media__NhvS6" id="">
                  <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd ImageBannerCard_image-banner-card__image-container__dd7MU">
                    <img
                      alt="HP-Employees3"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className=""
                      style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        left: '0',
                        top: '0',
                        right: '0',
                        bottom: '0',
                        objectFit: 'cover',
                        color: 'transparent',
                      }}
                      src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Banner-card-608x342/HP-Employees3.jpg?h=342&amp;iar=0&amp;w=608"
                    />
                  </div>
                </div>
              </div>
              <div
                className="BannerCard_banner-card__content__JcBKs BannerCard_banner-card__content--reversed__mMBDq"
                data-grid-layout="global"
              >
                <div className="opacity-in AnimateIn_opacity-in__animation--part1__2X1EP AnimateIn_opacity-in__animation__7ET9C">
                  <h2 className="BannerCard_banner-card__title__z7y_B BannerCard_banner-card__title--half-bolded__nYE1S">
                    Working at Sodexo is more than a job
                  </h2>
                </div>
                <div className="opacity-in AnimateIn_opacity-in__animation--part2__rqjWC AnimateIn_opacity-in__animation__7ET9C">
                  <div className="BannerCard_banner-card__text__XOb09">
                    <p>
                      Joining Sodexo means being part of a company where your work goes beyond the
                      ordinary—it’s about making a real difference every day. You belong in a
                      company that allows you to act with purpose and thrive in your own way,
                      supported by an environment that empowers you to grow on your own terms and
                      contribute to something greater.
                    </p>
                  </div>
                </div>
                <a
                  title="Opens web page (same window)"
                  target="_self"
                  className="Button_btn__Xvq6a BannerCard_banner-card__button__xbgXJ Button_btn--link__JI8fR Button_btn--outline-blue__W1LG6"
                  href="/working-at-sodexo/more-than-a-job"
                >
                  Be part of something greater
                  <span
                    className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                    style={{ height: '24px', width: '24px' }}
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24">
                      <use xlinkHref="#icons_arrow"></use>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </section>
          <section
            className="FullBanner_full-banner__h_pyn color-white"
            data-full-width="true"
            data-grid-layout="global"
          >
            <figure className="FullBanner_full-banner__background__container__0tAvX FullBanner_full-banner__background__container_with-overlay__JVOLi full-banner-figure-.25">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="FullBanner_full-banner__background__image__y2_xF"
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  left: '0',
                  top: '0',
                  right: '0',
                  bottom: '0',
                  color: 'transparent',
                }}
                src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/HeroLatestNews-1440x690/making-sustainable-food-convenient-homepage-banner.jpg?h=690&amp;iar=0&amp;w=1440"
              />
            </figure>
            <div className="FullBanner_full-banner__content__17VqO" data-grid-layout="global">
              <h1 className="font-h1">Get started with Sodexo</h1>
              <p className="FullBanner_full-banner__content__testimony__jTsBb FullBanner_font-h3__AmFi9">
                Explore our solutions: sustainable Food, Facilities Management and Hospitality
                Services that are right for you.
              </p>
              <div className="FullBanner_full-banner__content__cta___kqUy">
                <a
                  title="Opens page (same window)"
                  target="_self"
                  className="Button_btn__Xvq6a Button_btn--red-waves__OSCcE Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--without-border__wYHqY"
                  href="/contact-us"
                >
                  Contact us
                  <span
                    className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                    style={{ height: '24px', width: '24px' }}
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24">
                      <use xlinkHref="#icons_arrow"></use>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </section>
          <div
            className="RedirectionSelector_redirection-selector__os68_"
            data-full-width="true"
            data-testid="redirection-selector-id"
          >
            <h2 className="RedirectionSelector_font-h2__h04DB">
              How about a more detailed discussion?
            </h2>
            <div className="RedirectionSelector_redirection-selector__form__MUC_l">
              <div
                className="Select_select__HfouC Select_select-list__MQoIx RedirectionSelector_redirection-selector__select__FG8qD"
                data-grid-layout="global"
              >
                <fieldset className="Select_select__group__68bXi Select_select__group--select__Z5S3I">
                  <label className="Select_select__label__pfk9T Select_select__label--select__yRmDp">
                    Select a location
                  </label>
                  <input
                    aria-autocomplete="list"
                    aria-controls="select-listbox"
                    aria-expanded="false"
                    autoComplete="off"
                    className="Select_select__input__0JQC3 Select_select__input--select__YjZZq"
                    readOnly
                    role="combobox"
                    type="text"
                  />
                  <button
                    aria-controls="select-listbox"
                    aria-expanded="false"
                    aria-label="Select a location"
                    className="Select_select__button__GGpIl Select_select__icon-closed__9EUYl"
                    tabIndex={-1}
                    type="button"
                  >
                    <span
                      className="Icon_icon__qNAb6 Icon_icon--blue___O2uj"
                      style={{ height: '24px', width: '24px' }}
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24">
                        <use xlinkHref="#icons_chevron"></use>
                      </svg>
                    </span>
                  </button>
                </fieldset>
                <div id="listbox-wrapper-Select a location">
                  <ul aria-label="Select a location" id="select-listbox" role="listbox">
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://br.sodexo.com"
                      id="https://br.sodexo.com"
                      role="option"
                    >
                      Brazil
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://au.sodexo.com/"
                      id="https://au.sodexo.com/"
                      role="option"
                    >
                      Australia
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://at.sodexo.com/"
                      id="https://at.sodexo.com/"
                      role="option"
                    >
                      Austria
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://be.sodexo.com/"
                      id="https://be.sodexo.com/"
                      role="option"
                    >
                      Belgium
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://cz.sodexo.com/"
                      id="https://cz.sodexo.com/"
                      role="option"
                    >
                      Czech Republic
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://www.sodexo.com/our-locations/denmark"
                      id="https://www.sodexo.com/our-locations/denmark"
                      role="option"
                    >
                      Denmark
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://fi.sodexo.com/"
                      id="https://fi.sodexo.com/"
                      role="option"
                    >
                      Finland
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://fr.sodexo.com/"
                      id="https://fr.sodexo.com/"
                      role="option"
                    >
                      France
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://de.sodexo.com/"
                      id="https://de.sodexo.com/"
                      role="option"
                    >
                      Germany
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://hu.sodexo.com/"
                      id="https://hu.sodexo.com/"
                      role="option"
                    >
                      Hungary
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://ie.sodexo.com/"
                      id="https://ie.sodexo.com/"
                      role="option"
                    >
                      Ireland
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://middleeast.sodexo.com/home/about-us/overview.html"
                      id="https://middleeast.sodexo.com/home/about-us/overview.html"
                      role="option"
                    >
                      Algeria
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="http://il.sodexo.com/"
                      id="http://il.sodexo.com/"
                      role="option"
                    >
                      Israel
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://it.sodexo.com/"
                      id="https://it.sodexo.com/"
                      role="option"
                    >
                      Italy
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://lu.sodexo.com/"
                      id="https://lu.sodexo.com/"
                      role="option"
                    >
                      Luxembourg
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://middleeast.sodexo.com/home.html"
                      id="https://middleeast.sodexo.com/home.html"
                      role="option"
                    >
                      Middle East
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://nl.sodexo.com/"
                      id="https://nl.sodexo.com/"
                      role="option"
                    >
                      Netherlands
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://no.sodexo.com/"
                      id="https://no.sodexo.com/"
                      role="option"
                    >
                      Norway
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://middleeast.sodexo.com/home/about-us/overview.html"
                      id="https://middleeast.sodexo.com/home/about-us/overview.html"
                      role="option"
                    >
                      Oman
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://pl.sodexo.com/"
                      id="https://pl.sodexo.com/"
                      role="option"
                    >
                      Poland
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://middleeast.sodexo.com/home/about-us/overview.html"
                      id="https://middleeast.sodexo.com/home/about-us/overview.html"
                      role="option"
                    >
                      Qatar
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://ro.sodexo.com/"
                      id="https://ro.sodexo.com/"
                      role="option"
                    >
                      Romania
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://za.sodexo.com/"
                      id="https://za.sodexo.com/"
                      role="option"
                    >
                      South Africa
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://es.sodexo.com/"
                      id="https://es.sodexo.com/"
                      role="option"
                    >
                      Spain
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://se.sodexo.com/"
                      id="https://se.sodexo.com/"
                      role="option"
                    >
                      Sweden
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://ch.sodexo.com/"
                      id="https://ch.sodexo.com/"
                      role="option"
                    >
                      Switzerland
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://tr.sodexo.com/"
                      id="https://tr.sodexo.com/"
                      role="option"
                    >
                      Turkey
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://middleeast.sodexo.com/home/about-us/overview.html"
                      id="https://middleeast.sodexo.com/home/about-us/overview.html"
                      role="option"
                    >
                      United Arab Emirates
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://uk.sodexo.com/"
                      id="https://uk.sodexo.com/"
                      role="option"
                    >
                      United Kingdom
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://www.sodexo.com/"
                      id="https://www.sodexo.com/"
                      role="option"
                    >
                      Worldwide
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://ca.sodexo.com/"
                      id="https://ca.sodexo.com/"
                      role="option"
                    >
                      Canada
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://cl.sodexo.com"
                      id="https://cl.sodexo.com"
                      role="option"
                    >
                      Chile
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://co.sodexo.com/"
                      id="https://co.sodexo.com/"
                      role="option"
                    >
                      Colombia
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://cr.sodexo.com/"
                      id="https://cr.sodexo.com/"
                      role="option"
                    >
                      Costa Rica
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://cn.sodexo.com/"
                      id="https://cn.sodexo.com/"
                      role="option"
                    >
                      Greater China
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://cn.sodexo.com/en/about-us/sodexo-profile/sodexo-hong-kong-china.html"
                      id="https://cn.sodexo.com/en/about-us/sodexo-profile/sodexo-hong-kong-china.html"
                      role="option"
                    >
                      Hong Kong China
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://in.sodexo.com/"
                      id="https://in.sodexo.com/"
                      role="option"
                    >
                      India
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://id.sodexo.com/"
                      id="https://id.sodexo.com/"
                      role="option"
                    >
                      Indonesia
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://www.globeshipsodexo.com/"
                      id="https://www.globeshipsodexo.com/"
                      role="option"
                    >
                      Japón
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://sg.sodexo.com/about-us/sodexo-in-malaysia.html"
                      id="https://sg.sodexo.com/about-us/sodexo-in-malaysia.html"
                      role="option"
                    >
                      Malasia
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://mx.sodexo.com/"
                      id="https://mx.sodexo.com/"
                      role="option"
                    >
                      Mexico
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://www.sodexo.pa/"
                      id="https://www.sodexo.pa/"
                      role="option"
                    >
                      Panama
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://pe.sodexo.com/"
                      id="https://pe.sodexo.com/"
                      role="option"
                    >
                      Peru
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://ph.sodexo.com/"
                      id="https://ph.sodexo.com/"
                      role="option"
                    >
                      Philippines
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://sg.sodexo.com/"
                      id="https://sg.sodexo.com/"
                      role="option"
                    >
                      Singapore
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://sg.sodexo.com/about-us/sodexo-in-asia-pacific.html"
                      id="https://sg.sodexo.com/about-us/sodexo-in-asia-pacific.html"
                      role="option"
                    >
                      South Korea
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://th.sodexo.com/"
                      id="https://th.sodexo.com/"
                      role="option"
                    >
                      Thailand
                    </li>
                    <li
                      aria-selected="false"
                      className="Select_select__list-item__0PLYq"
                      data-value="https://us.sodexo.com/"
                      id="https://us.sodexo.com/"
                      role="option"
                    >
                      United States
                    </li>
                  </ul>
                </div>
              </div>
              <a
                target="_self"
                className="Button_btn__Xvq6a RedirectionSelector_redirection-selector__button__rYXbK RedirectionSelector_redirection-selector__button--disabled__dGyPX Button_btn--red-waves__OSCcE Button_btn--link__JI8fR"
                href="/"
              >
                Reach out to our local teams
                <span
                  className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                  style={{ height: '24px', width: '24px' }}
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <use xlinkHref="#icons_arrow"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="Surface_surface__Y0_rx Footer_footer__TvKAw color-white">
        <div className="Footer_footer__container__9eH4G">
          <div className="Footer_footer__head__mIP7D Footer_footer__head--with-share-price__jtoxJ">
            <div className="Footer_footer__head__logo__OaDzG">
              <a href="/">
                <img
                  alt="Sodoxo Logo"
                  width="134"
                  height="45"
                  src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Logos/Sodexo_Logotype_White.png?h=45&amp;iar=0&amp;w=134"
                />
              </a>
            </div>
            <div className="Footer_footer__head__socials__msT4u Footer_footer__head__socials--with-share-price__D93x_">
              <ul className="Footer_footer__head__socials__list__QTegF">
                <li>
                  <a href="https://twitter.com/sodexogroup" target="_blank">
                    <span className="Icon_icon__qNAb6" style={{ height: '48px', width: '48px' }}>
                      <svg aria-hidden="true" viewBox="0 0 48 48">
                        <use xlinkHref="#icons_twitter"></use>
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/sodexo/" target="_blank">
                    <span className="Icon_icon__qNAb6" style={{ height: '48px', width: '48px' }}>
                      <svg aria-hidden="true" viewBox="0 0 48 48">
                        <use xlinkHref="#icons_linkedin"></use>
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/sodexogroup/" target="_blank">
                    <span className="Icon_icon__qNAb6" style={{ height: '48px', width: '48px' }}>
                      <svg aria-hidden="true" viewBox="0 0 48 48">
                        <use xlinkHref="#icons_instagram"></use>
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/user/SodexoGroup" target="_blank">
                    <span className="Icon_icon__qNAb6" style={{ height: '48px', width: '48px' }}>
                      <svg aria-hidden="true" viewBox="0 0 48 48">
                        <use xlinkHref="#icons_youtube"></use>
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="Footer_footer__internal__uzXh9">
            <nav
              aria-label=""
              aria-labelledby="footer-links-1-title-desktop"
              className="FooterNavigationDesktop_root__7QEtS"
            >
              <p
                className="FooterNavigationDesktop_navTitle___Glwe"
                id="footer-links-1-title-desktop"
              >
                Who we are ?
              </p>
              <ul>
                <li className="FooterNavigation_navItem__v16e9">
                  <a
                    target=""
                    className="FooterLink_footer-link__V8b7V"
                    href="/about-us/sodexo-in-brief"
                  >
                    Sodexo in Brief
                  </a>
                </li>
                <li className="FooterNavigation_navItem__v16e9">
                  <a
                    title="Opens web page (same window)"
                    target=""
                    className="FooterLink_footer-link__V8b7V"
                    href="/about-us/our-history"
                  >
                    Our History
                  </a>
                </li>
                <li className="FooterNavigation_navItem__v16e9">
                  <a
                    title="Opens web page (same window)"
                    target=""
                    className="FooterLink_footer-link__V8b7V"
                    href="/working-at-sodexo/more-than-a-job"
                  >
                    Working at Sodexo
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              aria-label=""
              aria-labelledby="footer-links-1-title-mobile"
              className="FooterNavigationMobile_root__g6X6B"
            >
              <div className="Accordion_accordion__p5_s4 Accordion_accordion--no-border-bottom__rbmqT Accordion_accordion__container--footer__rGnvi">
                <h4 className="Accordion_font-h4__CUD41 FooterNavigationMobile_accordionTrigger__C5eCl">
                  <button
                    aria-controls="accordion-content-Who we are ?"
                    aria-expanded="false"
                    className="Accordion_accordion__trigger__T_PXV"
                    id="footer-links-1-title-mobile"
                    type="button"
                  >
                    <span className="Accordion_accordion__trigger-text__UHIcW">Who we are ?</span>
                    <span
                      className="Icon_icon__qNAb6 Icon_icon--rotate-90___Kml5"
                      style={{ height: '24px', width: '24px' }}
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24">
                        <use xlinkHref="#icons_chevron"></use>
                      </svg>
                    </span>
                  </button>
                </h4>
                <div
                  aria-labelledby="footer-links-1-title-mobile"
                  className="Accordion_accordion__panel__Ud_8G"
                  role="region"
                >
                  <div
                    aria-hidden="true"
                    className="Accordion_accordion__panel__content__JtKyH"
                    //inert="true"
                  >
                    <ul>
                      <li className="FooterNavigation_navItem__v16e9">
                        <a
                          target=""
                          className="FooterLink_footer-link__V8b7V"
                          href="/about-us/sodexo-in-brief"
                        >
                          Sodexo in Brief
                        </a>
                      </li>
                      <li className="FooterNavigation_navItem__v16e9">
                        <a
                          title="Opens web page (same window)"
                          target=""
                          className="FooterLink_footer-link__V8b7V"
                          href="/about-us/our-history"
                        >
                          Our History
                        </a>
                      </li>
                      <li className="FooterNavigation_navItem__v16e9">
                        <a
                          title="Opens web page (same window)"
                          target=""
                          className="FooterLink_footer-link__V8b7V"
                          href="/working-at-sodexo/more-than-a-job"
                        >
                          Working at Sodexo
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
            <nav
              aria-label=""
              aria-labelledby="footer-links-2-title-desktop"
              className="FooterNavigationDesktop_root__7QEtS"
            >
              <p
                className="FooterNavigationDesktop_navTitle___Glwe"
                id="footer-links-2-title-desktop"
              >
                What we love
              </p>
              <ul>
                <li className="FooterNavigation_navItem__v16e9">
                  <a
                    title="Opens web page (same window)"
                    target=""
                    className="FooterLink_footer-link__V8b7V"
                    href="/brands-services/food/services"
                  >
                    Food
                  </a>
                </li>
                <li className="FooterNavigation_navItem__v16e9">
                  <a
                    title="Opens web page (same window)"
                    target=""
                    className="FooterLink_footer-link__V8b7V"
                    href="/corporate-responsibility/impact-on-communities/responsible-sourcing"
                  >
                    Responsible Sourcing
                  </a>
                </li>
                <li className="FooterNavigation_navItem__v16e9">
                  <a
                    title="Opens web page (same window)"
                    target=""
                    className="FooterLink_footer-link__V8b7V"
                    href="/corporate-responsibility/impact-on-environment/saving-resources-reducing-waste"
                  >
                    Reducing Food Waste
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              aria-label=""
              aria-labelledby="footer-links-2-title-mobile"
              className="FooterNavigationMobile_root__g6X6B"
            >
              <div className="Accordion_accordion__p5_s4 Accordion_accordion--no-border-bottom__rbmqT Accordion_accordion__container--footer__rGnvi">
                <h4 className="Accordion_font-h4__CUD41 FooterNavigationMobile_accordionTrigger__C5eCl">
                  <button
                    aria-controls="accordion-content-What we love"
                    aria-expanded="false"
                    className="Accordion_accordion__trigger__T_PXV"
                    id="footer-links-2-title-mobile"
                    type="button"
                  >
                    <span className="Accordion_accordion__trigger-text__UHIcW">What we love</span>
                    <span
                      className="Icon_icon__qNAb6 Icon_icon--rotate-90___Kml5"
                      style={{ height: '24px', width: '24px' }}
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24">
                        <use xlinkHref="#icons_chevron"></use>
                      </svg>
                    </span>
                  </button>
                </h4>
                <div
                  aria-labelledby="footer-links-2-title-mobile"
                  className="Accordion_accordion__panel__Ud_8G"
                  role="region"
                >
                  <div
                    aria-hidden="true"
                    className="Accordion_accordion__panel__content__JtKyH"
                    //inert="true"
                  >
                    <ul>
                      <li className="FooterNavigation_navItem__v16e9">
                        <a
                          title="Opens web page (same window)"
                          target=""
                          className="FooterLink_footer-link__V8b7V"
                          href="/brands-services/food/services"
                        >
                          Food
                        </a>
                      </li>
                      <li className="FooterNavigation_navItem__v16e9">
                        <a
                          title="Opens web page (same window)"
                          target=""
                          className="FooterLink_footer-link__V8b7V"
                          href="/corporate-responsibility/impact-on-communities/responsible-sourcing"
                        >
                          Responsible Sourcing
                        </a>
                      </li>
                      <li className="FooterNavigation_navItem__v16e9">
                        <a
                          title="Opens web page (same window)"
                          target=""
                          className="FooterLink_footer-link__V8b7V"
                          href="/corporate-responsibility/impact-on-environment/saving-resources-reducing-waste"
                        >
                          Reducing Food Waste
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
            <nav
              aria-label=""
              aria-labelledby="footer-links-3-title-desktop"
              className="FooterNavigationDesktop_root__7QEtS"
            >
              <p
                className="FooterNavigationDesktop_navTitle___Glwe"
                id="footer-links-3-title-desktop"
              >
                Your space
              </p>
              <ul>
                <li className="FooterNavigation_navItem__v16e9">
                  <a
                    title="Opens web page (same window)"
                    target=""
                    className="FooterLink_footer-link__V8b7V"
                    href="/investors/shareholders/benefits-registered-shareholder"
                  >
                    Investors
                  </a>
                </li>
                <li className="FooterNavigation_navItem__v16e9">
                  <a
                    title="Opens web page (same window)"
                    target=""
                    className="FooterLink_footer-link__V8b7V"
                    href="/working-at-sodexo/more-than-a-job"
                  >
                    Career Seekers
                  </a>
                </li>
                <li className="FooterNavigation_navItem__v16e9">
                  <a
                    title="Opens web page (same window)"
                    target=""
                    className="FooterLink_footer-link__V8b7V"
                    href="/news/newsroom"
                  >
                    Newsroom
                  </a>
                </li>
                <li className="FooterNavigation_navItem__v16e9">
                  <a
                    title="Opens web page (same window)"
                    target=""
                    className="FooterLink_footer-link__V8b7V"
                    href="/contact-us"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              aria-label=""
              aria-labelledby="footer-links-3-title-mobile"
              className="FooterNavigationMobile_root__g6X6B"
            >
              <div className="Accordion_accordion__p5_s4 Accordion_accordion--no-border-bottom__rbmqT Accordion_accordion__container--footer__rGnvi">
                <h4 className="Accordion_font-h4__CUD41 FooterNavigationMobile_accordionTrigger__C5eCl">
                  <button
                    aria-controls="accordion-content-Your space"
                    aria-expanded="false"
                    className="Accordion_accordion__trigger__T_PXV"
                    id="footer-links-3-title-mobile"
                    type="button"
                  >
                    <span className="Accordion_accordion__trigger-text__UHIcW">Your space</span>
                    <span
                      className="Icon_icon__qNAb6 Icon_icon--rotate-90___Kml5"
                      style={{ height: '24px', width: '24px' }}
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24">
                        <use xlinkHref="#icons_chevron"></use>
                      </svg>
                    </span>
                  </button>
                </h4>
                <div
                  aria-labelledby="footer-links-3-title-mobile"
                  className="Accordion_accordion__panel__Ud_8G"
                  role="region"
                >
                  <div
                    aria-hidden="true"
                    className="Accordion_accordion__panel__content__JtKyH"
                    ////inert="true"
                  >
                    <ul>
                      <li className="FooterNavigation_navItem__v16e9">
                        <a
                          title="Opens web page (same window)"
                          target=""
                          className="FooterLink_footer-link__V8b7V"
                          href="/investors/shareholders/benefits-registered-shareholder"
                        >
                          Investors
                        </a>
                      </li>
                      <li className="FooterNavigation_navItem__v16e9">
                        <a
                          title="Opens web page (same window)"
                          target=""
                          className="FooterLink_footer-link__V8b7V"
                          href="/working-at-sodexo/more-than-a-job"
                        >
                          Career Seekers
                        </a>
                      </li>
                      <li className="FooterNavigation_navItem__v16e9">
                        <a
                          title="Opens web page (same window)"
                          target=""
                          className="FooterLink_footer-link__V8b7V"
                          href="/news/newsroom"
                        >
                          Newsroom
                        </a>
                      </li>
                      <li className="FooterNavigation_navItem__v16e9">
                        <a
                          title="Opens web page (same window)"
                          target=""
                          className="FooterLink_footer-link__V8b7V"
                          href="/contact-us"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
            <nav
              aria-label=""
              aria-labelledby="footer-links-4-title-desktop"
              className="FooterNavigationDesktop_root__7QEtS"
            >
              <p
                className="FooterNavigationDesktop_navTitle___Glwe"
                id="footer-links-4-title-desktop"
              >
                Contact Us
              </p>
              <ul>
                <li className="FooterNavigation_navItem__v16e9">
                  <a
                    title="Opens web page (same window)"
                    target=""
                    className="FooterLink_footer-link__V8b7V"
                    href="/contact-us"
                  >
                    Frequently Asked Questions
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              aria-label=""
              aria-labelledby="footer-links-4-title-mobile"
              className="FooterNavigationMobile_root__g6X6B"
            >
              <div className="Accordion_accordion__p5_s4 Accordion_accordion--no-border-bottom__rbmqT Accordion_accordion__container--footer__rGnvi">
                <h4 className="Accordion_font-h4__CUD41 FooterNavigationMobile_accordionTrigger__C5eCl">
                  <button
                    aria-controls="accordion-content-Contact Us"
                    aria-expanded="false"
                    className="Accordion_accordion__trigger__T_PXV"
                    id="footer-links-4-title-mobile"
                    type="button"
                  >
                    <span className="Accordion_accordion__trigger-text__UHIcW">Contact Us</span>
                    <span
                      className="Icon_icon__qNAb6 Icon_icon--rotate-90___Kml5"
                      style={{ height: '24px', width: '24px' }}
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24">
                        <use xlinkHref="#icons_chevron"></use>
                      </svg>
                    </span>
                  </button>
                </h4>
                <div
                  aria-labelledby="footer-links-4-title-mobile"
                  className="Accordion_accordion__panel__Ud_8G"
                  role="region"
                >
                  <div
                    aria-hidden="true"
                    className="Accordion_accordion__panel__content__JtKyH"
                    //inert="true"
                  >
                    <ul>
                      <li className="FooterNavigation_navItem__v16e9">
                        <a
                          title="Opens web page (same window)"
                          target=""
                          className="FooterLink_footer-link__V8b7V"
                          href="/contact-us"
                        >
                          Frequently Asked Questions
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <ul className="Footer_footer__legal__kX_g7">
            <li className="Footer_footer__legal__copyright__J2jTQ">
              <p>© 2025 Sodexo. All rights reserved</p>
            </li>
            <li className="Footer_footer-placeholder__item__Ygn2f Footer_footer__legal__item__XHCzb">
              <a
                title="Opens page (same window)"
                target=""
                className="FooterLink_footer-link__V8b7V"
                href="/legal/legal-privacy"
              >
                Terms &amp; Conditions
              </a>
            </li>
            <li className="Footer_footer-placeholder__item__Ygn2f Footer_footer__legal__item__XHCzb">
              <a
                title="Opens page (new window)"
                target=""
                className="FooterLink_footer-link__V8b7V"
                href="/legal/cookie-policy"
              >
                Cookie Policy
              </a>
            </li>
            <li className="Footer_footer-placeholder__item__Ygn2f Footer_footer__legal__item__XHCzb">
              <a
                href="javascript:;return false;"
                className="FooterLink_footer-link__V8b7V ot-sdk-show-settings"
              >
                Cookie Preferences
              </a>
            </li>
            <li className="Footer_footer-placeholder__item__Ygn2f Footer_footer__legal__item__XHCzb">
              <a
                title="Opens page (same window)"
                target=""
                className="FooterLink_footer-link__V8b7V"
                href="/legal/online-data-protection-policy"
              >
                Online Privacy Policy
              </a>
            </li>
            <li className="Footer_footer-placeholder__item__Ygn2f Footer_footer__legal__item__XHCzb">
              <a
                title="Opens page (new window)"
                target=""
                className="FooterLink_footer-link__V8b7V"
                href="/legal/global-data-protection-policy"
              >
                Data Protection Policy
              </a>
            </li>
            <li className="Footer_footer-placeholder__item__Ygn2f Footer_footer__legal__item__XHCzb">
              <a
                href="https://vdp.sodexo.com"
                className="FooterLink_footer-link__V8b7V"
                title="Opens website (new window)"
                target=""
              >
                Vulnerability Disclosure Policy{' '}
              </a>
            </li>
          </ul>
        </div>
        <div
          data-testid="footer-bottom-container"
          className="Surface_surface__Y0_rx Footer_footer__external__3urWR"
        >
          <ul
            className="Footer_footer__external__container__6nINM"
            data-testid="footer-external-id"
          >
            <li className="Footer_footer__external-item_mobile__YAk_l">
              <div className="Accordion_accordion__p5_s4 Accordion_accordion--no-border-bottom__rbmqT Accordion_accordion__container--footer__rGnvi">
                <h4 className="Accordion_font-h4__CUD41 Footer_footer__external--active__wrgzG">
                  <button
                    aria-controls="accordion-content-Sodexo other websites"
                    aria-expanded="false"
                    className="Accordion_accordion__trigger__T_PXV Accordion_accordion__trigger--no-padding__mai45"
                    id="accordion-button-Sodexo other websites"
                    type="button"
                  >
                    <span className="Accordion_accordion__trigger-text__UHIcW">
                      Sodexo other websites
                    </span>
                    <span
                      className="Icon_icon__qNAb6 Icon_icon--rotate-90___Kml5"
                      style={{ height: '24px', width: '24px' }}
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24">
                        <use xlinkHref="#icons_chevron"></use>
                      </svg>
                    </span>
                  </button>
                </h4>
                <div
                  aria-labelledby="accordion-button-Sodexo other websites"
                  className="Accordion_accordion__panel__Ud_8G"
                  role="region"
                >
                  <div
                    aria-hidden="true"
                    className="Accordion_accordion__panel__content__JtKyH"
                    //inert="true"
                  >
                    <ul>
                      <li className="Footer_footer-placeholder__item__Ygn2f Footer_footer__external__placeholder__oLAAZ">
                        <a href="undefined" className="FooterLink_footer-link__V8b7V"></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="Footer_footer__external__heading__cWKQf Footer_footer__external-item_desktop__2n0NP">
              <p>Sodexo other websites</p>
            </li>
            <li className="Footer_footer-placeholder__item__Ygn2f Footer_footer__external__item__qc_so Footer_footer__external-item_desktop__2n0NP">
              <a href="undefined" className="FooterLink_footer-link__V8b7V"></a>
            </li>
          </ul>
        </div>
      </footer>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-N3W8DT6"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
};

export default Layout;
