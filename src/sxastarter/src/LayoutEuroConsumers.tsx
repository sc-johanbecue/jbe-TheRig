/* eslint-disable @next/next/no-sync-scripts */
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
import Script from 'next/script';
import Link from 'next/link';

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
      <Script id="data-layer-script" strategy="afterInteractive">
        {`
          dataLayer = [{
            "websiteType": "consumers-content",
            "userStatus": "Anonymous",
            "isLogin": "false",
            "commercialStatus": "Prospect",
            "commercialIdentity": "Anonymous User",
            "pageType": "aline-home",
            "contentType": "homepage",
            "culture": "nl-BE",
            "isFake": "false",
            "isTechnical": "false",
            "isInternalHuman": "false",
            "user_status": "not_connected",
            "URLPage": "https://www.test-aankoop.be/",
            "ItemID": "e32cf6f9-2306-4cfd-a661-d03c85b81f12",
            "pageLanguage": "nl"
          }];
        `}
      </Script>

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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        <script type="text/javascript">var EC = EC || {};</script>

        <title>Testaankoop: Consumentenvereniging</title>

        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta http-equiv="content-language" />

        <meta
          name="description"
          content="Testaankoop is een vereniging die de consumenten in Belgi&#235; informeert, verdedigt en vertegenwoordigt. Wij werken in volledige onafhankelijkheid, zowel op financieel, politiek als ideologisch vlak."
        />
        <meta name="keywords" content="" />
        <meta
          name="antiForgeryToken"
          content="c5rb93Vs3IgG-BAn0lYuwrYeLjWAhRhQRim5n45K-3aPYh3tkdfKqocTCtNKIlJ6w5KV8SrzI9vpK-HGjs5gTwDDG9Q1"
        />
        <meta name="canonical" content="https://www.test-aankoop.be/" />
        <meta name="filterType" content="Andere" />
        <meta name="isHub" content="False" />
        <meta name="machine" content="CO-ASCBE-PRWW06" />
        <meta name="routingPrefix" content="" />
        <meta name="scID" content="e32cf6f9-2306-4cfd-a661-d03c85b81f12" />
        <meta name="scLayoutID" content="b6e20cfb-111e-4b89-991f-8bf2ada79468" />
        <meta name="title" content="Testaankoop: Consumentenvereniging" />
        <meta name="virtualFolder" content="/" />
        <meta property="og:locale" content="nl_BE" />
        <meta property="og:site_name" content="Testaankoop" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.test-aankoop.be/" />
        <link rel="alternate" href="https://www.test-achats.be/" hrefLang="fr" />
        <link rel="alternate" href="https://www.test-aankoop.be/" hrefLang="nl" />
        <link rel="alternate" href="https://www.test-aankoop.be/" hrefLang="x-default" />
        <link rel="manifest" title="https://www.test-aankoop.be/manifest-nl-be.json" />
        <link rel="canonical" href="https://www.test-aankoop.be/" />

        <link rel="preconnect" href="https://p.ec-cloud.org" />
        <link rel="dns-prefetch" href="https://p.ec-cloud.org" />
        <link rel="preconnect" href="https://cdn.cookielaw.org" />
        <link rel="dns-prefetch" href="https://cdn.cookielaw.org" />
        <script
          type="text/javascript"
          src="https://try.abtasty.com/2a179a1822ac1f21c70239518213254a.js"
        ></script>

        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_192.png?rev=f972c496-f4de-401b-ac26-77b43f74319f&amp;mw=192mh%3d192&amp;hash=F8BF18CAC9D2D6D82ABD723FA69B9EF0"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="114x114"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_114.png?rev=a796470c-a9a0-41fd-9ac8-dc20afa0976e&amp;mw=114mh%3d114&amp;hash=FAE54D08F688B7123E7156437D359E7E"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="120x120"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_120.png?rev=fae977ec-751e-436a-999b-457bdf00a329&amp;mw=120mh%3d120&amp;hash=677B0B20DE9C0EAAF55397618E635FF1"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="144x144"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_144.png?rev=10cdaf36-7990-4307-81a7-e831eacff8a4&amp;mw=144mh%3d144&amp;hash=C781175E7DACCF17D051245539F9C39B"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="152x152"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_152.png?rev=d812a832-5d19-4cd7-907f-5fe1f9704f71&amp;mw=152mh%3d152&amp;hash=2345AD46391D126031C4BB7BFF1CBD45"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="180x180"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_180.png?rev=f3c745d7-aca0-49f3-b737-27a8cebe5327&amp;mw=180mh%3d180&amp;hash=727BBA65B918CA56495D6727930D18CF"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="57x57"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_57.png?rev=088452d5-2ad8-41c2-a30f-d8d04a28250a&amp;mw=57mh%3d57&amp;hash=23E389368AC837CAF3AC8E61BF0DAE17"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="60x60"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_60.png?rev=4f0cb72e-7936-484b-946e-7a4c489458b0&amp;mw=60mh%3d60&amp;hash=9E641048E0841581AD6D66E8C56A0CD2"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="72x72"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_72.png?rev=9ee4ba53-26e8-4e45-b01f-1c19f666cd66&amp;mw=72mh%3d72&amp;hash=FA0709A9149695324B6477C29C5E39FE"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="76x76"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_76.png?rev=b2433839-cbb3-4502-b167-00abaaa36de0&amp;mw=76mh%3d76&amp;hash=1FDFE80D05551E2F735A6C642A9E8310"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_16.png?rev=c809f44b-4733-490c-a8b7-9e827fbb2727&amp;mw=16mh%3d16&amp;hash=9E0C09CD7CC60054EC66D1776BA97D7D"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_32.png?rev=6c1185f2-15f5-472c-b02a-120868e60447&amp;mw=32mh%3d32&amp;hash=006311977B41FB97C548A558A5C06829"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="https://www.test-aankoop.be/-/media/ta/favicons2022/ta_96.png?rev=f198fb2f-2fe7-4e0b-928b-9c239aca609a&amp;mw=96mh%3d96&amp;hash=E38BA6FA0E03C57291CA7294606B58B7"
        />
        <link
          rel="preload"
          href="https://p.ec-cloud.org/aline/fonts/nl-be/garet-regular.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://p.ec-cloud.org/aline/fonts/nl-be/garet-bold.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://p.ec-cloud.org/vendor/jquery-ui/1.13.2-ec.1/jquery-ui.min.css"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://p.ec-cloud.org/vendor/jquery-ui/1.13.2-ec.1/jquery-ui.min.css"
          />
        </noscript>
        <link
          href="https://p.ec-cloud.org/aline/components/layout/0.86.0/layout_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/layout/0.84.0/carousel_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/layout/0.84.0/buttons_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/layout/0.84.0/icons_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/interface/interface.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/logos/logos.min.css"
          rel="stylesheet"
        />
        <link href="https://p.ec-cloud.org/common/icons/0.4.0/misc/misc.min.css" rel="stylesheet" />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/product-selectors/product-selectors.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/theme-appliances/theme-appliances.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/theme-family/theme-family.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/theme-food/theme-food.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/theme-health/theme-health.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/theme-home/theme-home.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/theme-mobility/theme-mobility.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/theme-money/theme-money.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/theme-technology/theme-technology.min.css"
          rel="stylesheet"
        />
        <link href="https://p.ec-cloud.org/common/icons/0.4.0/caas/caas.min.css" rel="stylesheet" />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/community/community.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/fline/fline.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/common/icons/0.4.0/decomais/decomais.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/algolia-search/0.74.0/algolia-search_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/feom-header/0.40.0/feom-header_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/welcome-banner/0.10.0/welcome-banner_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/welcome-banner-media/0.14.0/welcome-banner-media_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/welcome-banner-media-item/0.12.0/welcome-banner-media-item_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/welcome-banner-content/0.9.0/welcome-banner-content_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/welcome-banner-content-item/0.8.0/welcome-banner-content-item_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/welcome-banner-links/0.18.0/welcome-banner-links_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="https://p.ec-cloud.org/aline/components/save-and-share/0.59.0/save-and-share_nl-be.min.css"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://p.ec-cloud.org/aline/components/save-and-share/0.59.0/save-and-share_nl-be.min.css"
          />
        </noscript>
        <link
          href="https://p.ec-cloud.org/aline/components/spotlight-panel/0.32.0/spotlight-panel_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/spotlight-card/0.32.0/spotlight-card_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/tools-panel/0.41.0/tools-panel_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/magazines-panel/0.14.0/magazines-panel_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/magazines-panel-card-item/0.11.0/magazines-panel-card-item_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="https://p.ec-cloud.org/aline/components/special-campaign/0.27.0/special-campaign_nl-be.min.css"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://p.ec-cloud.org/aline/components/special-campaign/0.27.0/special-campaign_nl-be.min.css"
          />
        </noscript>
        <link
          rel="preload"
          href="https://p.ec-cloud.org/aline/components/recommended/0.26.0/recommended_nl-be.min.css"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://p.ec-cloud.org/aline/components/recommended/0.26.0/recommended_nl-be.min.css"
          />
        </noscript>
        <link
          rel="preload"
          href="https://p.ec-cloud.org/conversion/aline/components/offer-cards/0.11.0/offer-cards_nl-be.min.css"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://p.ec-cloud.org/conversion/aline/components/offer-cards/0.11.0/offer-cards_nl-be.min.css"
          />
        </noscript>
        <link
          href="https://p.ec-cloud.org/aline/components/our-services/0.23.0/our-services_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="https://p.ec-cloud.org/aline/components/overlay/0.29.0/overlay_nl-be.min.css"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://p.ec-cloud.org/aline/components/overlay/0.29.0/overlay_nl-be.min.css"
          />
        </noscript>
        <link
          rel="preload"
          href="https://p.ec-cloud.org/aline/components/footer-2/0.34.0/footer_nl-be.min.css"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://p.ec-cloud.org/aline/components/footer-2/0.34.0/footer_nl-be.min.css"
          />
        </noscript>
        <link
          href="https://p.ec-cloud.org/conversion/aline/components/sticky-banner-footer/0.5.0/sticky-banner-footer_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/authentication-callout/0.39.0/authentication-callout_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          href="https://p.ec-cloud.org/aline/components/authentication/0.24.0/authentication_nl-be.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://p.ec-cloud.org/aline/components/layout/0.84.0/forms_nl-be.min.css"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://p.ec-cloud.org/aline/components/layout/0.84.0/forms_nl-be.min.css"
          />
        </noscript>
        <script
          async
          type="text/plain"
          src="//tglyr.co/latest.js?n=o"
          className="optanon-category-C0003"
        ></script>
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className={mainClassPageEditing}>
        <div>Name: {layoutData.sitecore.context.site?.name}</div>
        <header className="FEOMHeader">
          {route && <Placeholder name="headless-header" rendering={route} />}
        </header>
        <main>
          <div id="content">{route && <Placeholder name="headless-main" rendering={route} />}</div>
        </main>
        <footer>
          <div id="footer">{route && <Placeholder name="headless-footer" rendering={route} />}</div>
        </footer>
      </div>

      <main role="main" id="main">
        {/* welcomeBanner start */}
        <section className="section welcome-banner">
          <div className="constrained">
            <div className="flex__row flex__row--md-reversed">
              <div className="flex__col-9 flex__col-md-9 flex__col-sm-12 flex__col-xs-12">
                <div className="flex__row">
                  <div className="welcome-banner__column flex__col-7 flex__col-md-7 flex__col-sm-12 flex__col-xs-12">
                    {/* welcomeBannerMedia start */}
                    <section className="section welcome-banner-media">
                      <div className="welcome-banner-media__container">
                        <div
                          className="welcome-banner-media__container__cards-container"
                          data-plugin="flickityCarousel"
                          data-plugin-settings="#welcomeBannerSliderCarousel"
                        >
                          {/* welcomeBannerMediaItem start */}
                          <section className="section welcome-banner-media-item">
                            <div
                              className="welcome-banner-media-item__card"
                              data-selector="welcome-banner-carousel-card"
                            >
                              <div className="welcome-banner-media-item__card__background-image">
                                <picture>
                                  <img
                                    src="https://www.test-aankoop.be/-/media/ta/images/homepage-responsive/new home page ta/welcome-banner/2025/wintersolden-473x473px-nl.jpg?rev=234ff0d5-7875-4629-addd-cf10a39dcb91"
                                    fetchPriority="high"
                                    alt=""
                                  />
                                </picture>
                              </div>
                              <Link
                                href="/familie-prive/solden/nieuws/beste-deal?int_source=test-a&int_medium=wel_media&int_term=anonymous"
                                className="welcome-banner-media-item__card__clickable-zone"
                              >
                                {' '}
                                <div className="welcome-banner-media-item__card__clickable-zone__card-content">
                                  <h4
                                    className="welcome-banner-media-item__card__title"
                                    data-plugin="textLinesLimiter"
                                  >
                                    Solden: ontdek de beste aanbiedingen
                                  </h4>
                                  <p
                                    className="welcome-banner-media-item__card__description"
                                    data-selector="welcome-banner-media-item-description"
                                    data-plugin="textLinesLimiter"
                                    data-plugin-settings="#welcomeBannerMediaItemDescriptionSettings"
                                  >
                                    Op basis van onze prijsanalyses hebben onze experts een selectie
                                    gemaakt van producten die de moeite waard kunnen zijn.
                                  </p>
                                  <div className="chevron-link--after welcome-banner-media-item__card__link">
                                    <span className="welcome-banner-media-item__card__link__text">
                                      Meer weten
                                    </span>
                                    <i className="icon icon-decomais-arrow-right" />
                                  </div>
                                </div>
                              </Link>{' '}
                            </div>
                          </section>
                          {/* welcomeBannerMediaItem end */}
                        </div>
                      </div>
                    </section>
                    {/* welcomeBannerMedia end */}
                  </div>
                  <div className="welcome-banner__column flex__col-5 flex__col-md-5 flex__col-sm-12 flex__col-xs-12">
                    {/* welcomeBannerContent start */}
                    {/* welcomeBannerContent start */}
                    <section className="section welcome-banner-content">
                      <div className="welcome-banner-content__container tabs">
                        <ul className="welcome-banner-content__container__tabs-nav">
                          <li
                            className="welcome-banner-content__container__tabs-nav__tab-link active"
                            data-selector="welcome-banner-tab-link"
                            data-tab="tab-1"
                          >
                            Trending
                          </li>
                        </ul>
                        <div
                          id="tab-1"
                          className="welcome-banner-content__container__tab active"
                          data-selector="welcome-banner-tab-content"
                        >
                          {/* welcomeBannerContentItem start */}
                          <section className="section welcome-banner-content-item">
                            <div className="welcome-banner-content-item__card">
                              <Link
                                href="/mobiliteit/fietsen/nieuws/de-beste-elektrische-fietsen-onder-2-500-euro?int_source=test-a&int_medium=wel_content_trend&int_content=news&int_term=anonymous"
                                className="welcome-banner-content-item__card__clickable-zone"
                              >
                                {' '}
                                <div className="welcome-banner-content-item__card__header">
                                  <span className="welcome-banner-content-item__card__header__item-category label uppercase">
                                    Nieuws
                                  </span>
                                  <span className="welcome-banner-content-item__card__header__date label">
                                    17 januari 2025
                                  </span>
                                </div>
                                <div className="welcome-banner-content-item__card__content">
                                  <h3
                                    className="welcome-banner-content-item__card__content__title margin--bottom-xsmall stronger"
                                    data-plugin="textLinesLimiter"
                                    data-plugin-settings="#welcomeBannerContentItemSettings"
                                  >
                                    De beste elektrische fietsen onder € 2 500: ons oordeel en
                                    advies
                                  </h3>
                                </div>
                              </Link>{' '}
                            </div>
                          </section>
                          {/* welcomeBannerContentItem end */}
                          {/* welcomeBannerContentItem start */}
                          <section className="section welcome-banner-content-item">
                            <div className="welcome-banner-content-item__card">
                              <Link
                                href="/woning-energie/gas-elektriciteit-mazout-pellets/nieuws/nieuwe-vaste-contracten-is-dit-het-moment-om-te-switchen?int_source=test-a&int_medium=wel_content_trend&int_content=news&int_term=anonymous"
                                className="welcome-banner-content-item__card__clickable-zone"
                              >
                                {' '}
                                <div className="welcome-banner-content-item__card__header">
                                  <span className="welcome-banner-content-item__card__header__item-category label uppercase">
                                    Nieuws
                                  </span>
                                  <span className="welcome-banner-content-item__card__header__date label">
                                    15 januari 2025
                                  </span>
                                </div>
                                <div className="welcome-banner-content-item__card__content">
                                  <h3
                                    className="welcome-banner-content-item__card__content__title margin--bottom-xsmall stronger"
                                    data-plugin="textLinesLimiter"
                                    data-plugin-settings="#welcomeBannerContentItemSettings"
                                  >
                                    Welke vaste energiecontracten zijn deze maand het meest
                                    voordelig?
                                  </h3>
                                </div>
                              </Link>{' '}
                            </div>
                          </section>
                          {/* welcomeBannerContentItem end */}
                          {/* welcomeBannerContentItem start */}
                          <section className="section welcome-banner-content-item">
                            <div className="welcome-banner-content-item__card">
                              <Link
                                href="/huishoudelektro/stoomreinigers/nieuws/is-een-stoomreiniger-beter-dan-emmer-en-dweil?int_source=test-a&int_medium=wel_content_trend&int_content=news&int_term=anonymous"
                                className="welcome-banner-content-item__card__clickable-zone"
                              >
                                {' '}
                                <div className="welcome-banner-content-item__card__header">
                                  <span className="welcome-banner-content-item__card__header__item-category label uppercase">
                                    Nieuws
                                  </span>
                                  <span className="welcome-banner-content-item__card__header__date label">
                                    02 januari 2025
                                  </span>
                                </div>
                                <div className="welcome-banner-content-item__card__content">
                                  <h3
                                    className="welcome-banner-content-item__card__content__title margin--bottom-xsmall stronger"
                                    data-plugin="textLinesLimiter"
                                    data-plugin-settings="#welcomeBannerContentItemSettings"
                                  >
                                    Is een stoomreiniger beter dan emmer en dweil?
                                  </h3>
                                </div>
                              </Link>{' '}
                            </div>
                          </section>
                          {/* welcomeBannerContentItem end */}
                        </div>
                      </div>
                    </section>
                    {/* welcomeBannerContent end */}
                  </div>
                </div>
              </div>
              <div className="welcome-banner__column flex__col-3 flex__col-md-3 flex__col-sm-12 flex__col-xs-12">
                {/* welcomeBannerLinks start */}
                {/* #region SCRIPTS */}
                {/* #endregion */}
                {/* #region LINK-COLORS */}
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n        .welcome-banner-links__content__menus__link {\n            background-color: #EDEDED !important;\n        }\n    ',
                  }}
                />
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n        .welcome-banner-links__content__menus__link:hover {\n            background-color: #b60a73 !important;\n        }\n    ',
                  }}
                />
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n        .welcome-banner-links__content__menus__link:hover {\n            color: #FFFFFF !important;\n        }\n    ',
                  }}
                />
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n        .welcome-banner-links__content {\n            background-color: #F9F8F7 !important;\n        }\n    ',
                  }}
                />
                {/* #endregion */}
                {/* #region CTA-COLORS */}
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n            .welcome-banner-links__content__cta .btn--primary.welcome-banner-links__content__cta__button {\n                background-color: #F47E30 !important;\n            }\n        ',
                  }}
                />
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n            .welcome-banner-links__content__cta .btn--primary.welcome-banner-links__content__cta__button:hover {\n            background-color: #DB5E0C!important;\n        }\n        ',
                  }}
                />
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n            .welcome-banner-links__content__cta.btn--primary.welcome-banner-links__content__cta__button {\n            color: #FFFFFF!important;\n            }\n        ',
                  }}
                />
                {/* #endregion */}
                <section className="section welcome-banner-links">
                  <div className="welcome-banner-links__content">
                    <div className="welcome-banner-links__content__header">
                      <h1 className="welcome-banner-links__content__header__title strong anonymous">
                        <span
                          className=""
                          data-plugin="textLinesLimiter"
                          data-plugin-settings="#welcomeBannerLinksTitleSettings"
                        >
                          Vereenvoudig je leven{' '}
                        </span>
                      </h1>
                    </div>
                    <div className="welcome-banner-links__content__menus">
                      <div className="welcome-banner-links__content__menus__links">
                        <Link
                          href="/energyguide?int_source=test-a&int_medium=wel_links&int_term=anonymous"
                          className="welcome-banner-links__content__menus__link btn--tertiary"
                          target="_blank"
                        >
                          {' '}
                          <span
                            data-plugin="textLinesLimiter"
                            data-plugin-settings="#welcomeBannerLinksLinkSettings"
                          >
                            Energiefactuur
                          </span>
                        </Link>
                        <Link
                          href="/acties/ratemydeal?int_source=test-a&int_medium=wel_links&int_term=anonymous"
                          className="welcome-banner-links__content__menus__link btn--tertiary"
                          target="_blank"
                        >
                          {' '}
                          <span
                            data-plugin="textLinesLimiter"
                            data-plugin-settings="#welcomeBannerLinksLinkSettings"
                          >
                            Vind een goede deal
                          </span>
                        </Link>
                        <Link
                          href="https://www.test-aankoop.be/gezond/voeding/gezonde-voeding?int_source=test-a&int_medium=wel_links&int_term=anonymous"
                          className="welcome-banner-links__content__menus__link btn--tertiary"
                          target="|Custom"
                        >
                          {' '}
                          <span
                            data-plugin="textLinesLimiter"
                            data-plugin-settings="#welcomeBannerLinksLinkSettings"
                          >
                            Gezonde voeding
                          </span>
                        </Link>
                        <Link
                          href="/contact/contacteer-ons/juridisch-advies?int_source=test-a&int_medium=wel_links&int_term=anonymous"
                          className="welcome-banner-links__content__menus__link btn--tertiary"
                          target="|Custom"
                        >
                          {' '}
                          <span
                            data-plugin="textLinesLimiter"
                            data-plugin-settings="#welcomeBannerLinksLinkSettings"
                          >
                            Juridische bijstand
                          </span>
                        </Link>
                        <Link
                          href="https://www.test-aankoop.be/invest/beleggen?int_source=test-a&int_medium=wel_links&int_term=anonymous"
                          className="welcome-banner-links__content__menus__link btn--tertiary"
                          target="_blank"
                        >
                          {' '}
                          <span
                            data-plugin="textLinesLimiter"
                            data-plugin-settings="#welcomeBannerLinksLinkSettings"
                          >
                            Beleggen
                          </span>
                        </Link>{' '}
                      </div>
                      <div className="welcome-banner-links__content__cta">
                        <Link
                          href="https://ontdek.test-aankoop.be/2023/newmarketplace?prm_id_c=HOMEPAG1N&par_id_c=CTAbutton&cop_id_c=Homepagepanel"
                          className="btn btn--primary welcome-banner-links__content__cta__button"
                          title=""
                          role="btn"
                        >
                          {' '}
                          <span
                            data-plugin="textLinesLimiter"
                            data-plugin-settings="#welcomeBannerLinksCTAButtonSettings"
                          >
                            Word nu lid
                          </span>
                        </Link>{' '}
                      </div>
                    </div>
                  </div>
                </section>
                {/* welcomeBannerLinks end */}
              </div>
            </div>
          </div>
        </section>
        {/* welcomeBanner end */}
        <style
          dangerouslySetInnerHTML={{
            __html: '\n    .spotlight-panel {\n        background-color: #ffffff;\n    }\n',
          }}
        />
        <section className="spotlight-panel" data-selector="spotlight-panel">
          <div className="constrained">
            <div className="align-central">
              <h2 className="stronger">Onze nieuwste inhoud</h2>
              <p> </p>
            </div>
            <div className="spotlight-panel--content padding--top-large">
              <div
                className="flex__row margin--top-medium margin--bottom-small spotlight-panel--regular"
                data-carousel-type="spotlight-panel"
                data-plugin="flickityCarousel"
                data-plugin-settings="#spotlight-panel-settings-22a950cf4ede419eb824dee8bdaf2369"
              >
                <div className="flex__col-10 flex__col-lg-4">
                  <div className="spotlight-card">
                    <img
                      data-src="https://www.test-aankoop.be/-/media/ta/images/home/home appliances/washing machines/news/2023/silent machines/washing-machine-silent-1185955360-800x450.jpg?rev=af32c8fb-6052-4b5f-89dc-daa0d639ca6c&mh=400&la=nl-BE&h=400&w=711&hash=DA9FFAB1C856FEFE1AB769191D888D8F"
                      className="spotlight-card--image"
                      alt="Stille wasmachine"
                      data-plugin="imageComponent"
                      src="https://www.test-aankoop.be/-/media/ta/ta-logos-2022/placeholder_ta_615.jpg?rev=5c232392-5ab1-4501-86a8-ecc03960779a&mh=400&h=400&hash=D90974E3C51246B664C3FB15EC5E4D06"
                    />{' '}
                    <div className="spotlight-card--content">
                      <div className="flex__row flex__row--no-gutter-xs">
                        <div className="flex__col">
                          <span className="spotlight-card--label margin--bottom-xsmall uppercase">
                            Nieuws
                          </span>
                        </div>
                      </div>
                      <strong className="spotlight-card--title margin--bottom-xsmall">
                        <Link
                          className="link-underline-never"
                          href="/huishoudelektro/wasmachines/nieuws/stille-wasmachines"
                          title="Wat is de stilste wasmachine?"
                        >
                          Wat is de stilste wasmachine?
                        </Link>
                      </strong>
                      <div
                        className="spotlight-card--footer flex__row flex__row--bottom margin--top-xlarge"
                        data-selector="editorial-item-bottom"
                      >
                        <div
                          className="flex__col flex__col-xs-6 flex__col-sm-narrow"
                          data-selector="read-more"
                        >
                          <p className="no-margin spotlight-card--read-more">
                            <Link
                              href="/huishoudelektro/wasmachines/nieuws/stille-wasmachines"
                              title="Wat is de stilste wasmachine?"
                            >
                              <span>
                                Lees meer <i className="icon icon--small icon-chevron-right" />
                              </span>
                            </Link>
                          </p>
                        </div>
                        <div className="flex__col align-right">
                          <div data-selector="save-share" className="save-share save-share--bar">
                            <div
                              data-type="ALineBookmarkWidgetController"
                              data-rendering="BookmarkWidgetV2"
                              className=""
                            >
                              <div className="relative" data-selector="bookmark">
                                <Link
                                  href="javascript:void(0)"
                                  title="Naar bewaarde artikelen"
                                  data-plugin="tooltip"
                                  data-plugin-settings="#authentication-callout-settings-bookmark"
                                  className="anonymous icon icon-bookmark-outlined"
                                />
                              </div>
                            </div>
                            <div
                              data-type="ALineShareLinksController"
                              data-rendering="ShareLinksV3"
                              className=""
                            >
                              <div data-selector="share-links" className="share-links ">
                                <Link
                                  href="https://www.facebook.com/sharer/sharer.php?u=https%3a%2f%2fwww.test-aankoop.be%2f?skipbean=true"
                                  className="icon icon-facebook social__section--facebook "
                                  title="Deel op Facebook"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open(
                                      e.currentTarget.href,
                                      '',
                                      'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'
                                    );
                                  }}
                                >
                                  Deel op Facebook
                                </Link>
                                <Link
                                  href="https://twitter.com/intent/tweet?url=https%3a%2f%2fwww.test-aankoop.be%2f?skipbean=true&via=Testaankoop&text=Wat+is+de+stilste+wasmachine%3f"
                                  className="icon icon-twitter social__section--twitter "
                                  title="Deel op Twitter"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open(
                                      e.currentTarget.href,
                                      '',
                                      'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'
                                    );
                                  }}
                                >
                                  Deel op Twitter
                                </Link>
                                <Link
                                  href="whatsapp://send?text=Wat+is+de+stilste+wasmachine%3f%20https%3a%2f%2fwww.test-aankoop.be%2f?skipbean=true%3Futm_source%3Dwhatsapp%26utm_campaign%3Dweblink%26utm_medium%3Dsocial"
                                  className="icon icon-whatsapp social__section--whatsapp mobile-only"
                                  title="Deel via WhatsApp"
                                >
                                  Deel via WhatsApp
                                </Link>
                                <Link
                                  href="#email-modal"
                                  data-selector="email-popup-trigger"
                                  data-url-publication-link="sec://realm/euroconsumers.pro.sitecorecd.nl-be/vMfOckHRTJqL6BdJg_bN0t8nMt-8xFeQYlQFj8oXns4GAsknCq5NtPJCbpOrI9PV3SX-4Z8PZEJvZwry02DKYYuhkn3U7J5VcMZjg1c2-hH1rGJO0"
                                  title=""
                                  className="icon icon-mail"
                                >
                                  Send by Email
                                </Link>
                              </div>
                              <Link
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  // EC.SaveAndShare.ToggleShare();
                                }}
                                className="icon icon-share"
                              >
                                Share..
                              </Link>
                              <div
                                id="form-send-email"
                                data-plugin="form"
                                data-plugin-settings="#send-mail-settings"
                              >
                                <input
                                  name="send-mail-trigger"
                                  className="send-mail-trigger"
                                  type="checkbox"
                                  hidden
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/huishoudelektro/wasmachines/nieuws/stille-wasmachines"
                      className="spotlight-card__clickable-zone"
                    />
                  </div>
                </div>
                <div className="flex__col-10 flex__col-lg-4">
                  <div className="spotlight-card">
                    <img
                      data-src="https://www.test-aankoop.be/-/media/ta-hline/images/home/food and nutrition/food safety and additives/news/2025/istock-492777948.jpg?rev=1f05fd77-3ca3-49ab-a693-cc5ba30a71c7&mh=400&la=nl-BE&h=400&w=600&hash=744DCC439BBAB5A3B51F51A8C620853C"
                      className="spotlight-card--image"
                      alt=""
                      data-plugin="imageComponent"
                      src="https://www.test-aankoop.be/-/media/ta/ta-logos-2022/placeholder_ta_615.jpg?rev=5c232392-5ab1-4501-86a8-ecc03960779a&mh=400&h=400&hash=D90974E3C51246B664C3FB15EC5E4D06"
                    />{' '}
                    <div className="spotlight-card--content">
                      <div className="flex__row flex__row--no-gutter-xs">
                        <div className="flex__col">
                          <span className="spotlight-card--label margin--bottom-xsmall uppercase">
                            Nieuws
                          </span>
                        </div>
                      </div>
                      <strong className="spotlight-card--title margin--bottom-xsmall">
                        <Link
                          className="link-underline-never"
                          href="https://www.test-aankoop.be/gezond/voeding/voedselveiligheid-en-additieven/nieuws/albert-heijn-blauwe-bessen"
                          title="Albert Heijn diepvries blauwe bessen: wat moet je doen als er een terugroepactie is?"
                        >
                          Albert Heijn diepvries blauwe bessen: wat moet je doen als er een
                          terugroepactie is?
                        </Link>
                      </strong>
                      <div
                        className="spotlight-card--footer flex__row flex__row--bottom margin--top-xlarge"
                        data-selector="editorial-item-bottom"
                      >
                        <div
                          className="flex__col flex__col-xs-6 flex__col-sm-narrow"
                          data-selector="read-more"
                        >
                          <p className="no-margin spotlight-card--read-more">
                            <Link
                              href="https://www.test-aankoop.be/gezond/voeding/voedselveiligheid-en-additieven/nieuws/albert-heijn-blauwe-bessen"
                              title="Albert Heijn diepvries blauwe bessen: wat moet je doen als er een terugroepactie is?"
                            >
                              <span>
                                Lees meer <i className="icon icon--small icon-chevron-right" />
                              </span>
                            </Link>
                          </p>
                        </div>
                        <div className="flex__col align-right">
                          <div data-selector="save-share" className="save-share save-share--bar">
                            <div
                              data-type="ALineBookmarkWidgetController"
                              data-rendering="BookmarkWidgetV2"
                              className=""
                            >
                              <div className="relative" data-selector="bookmark">
                                <Link
                                  href="javascript:void(0)"
                                  title="Naar bewaarde artikelen"
                                  data-plugin="tooltip"
                                  data-plugin-settings="#authentication-callout-settings-bookmark"
                                  className="anonymous icon icon-bookmark-outlined"
                                />
                              </div>
                            </div>
                            <div
                              data-type="ALineShareLinksController"
                              data-rendering="ShareLinksV3"
                              className=""
                            >
                              <div data-selector="share-links" className="share-links ">
                                <Link
                                  href="https://www.facebook.com/sharer/sharer.php?u=https%3a%2f%2fwww.test-aankoop.be%2f?skipbean=true"
                                  className="icon icon-facebook social__section--facebook "
                                  title="Deel op Facebook"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open(
                                      e.currentTarget.href,
                                      '',
                                      'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'
                                    );
                                  }}
                                >
                                  Deel op Facebook
                                </Link>
                                <Link
                                  href="https://twitter.com/intent/tweet?url=https%3a%2f%2fwww.test-aankoop.be%2f?skipbean=true&via=Testaankoop&text=Albert+Heijn+diepvries+blauwe+bessen%3a+wat+moet+je+doen+als+er+een+terugroepactie+is%3f"
                                  className="icon icon-twitter social__section--twitter "
                                  title="Deel op Twitter"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open(
                                      e.currentTarget.href,
                                      '',
                                      'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'
                                    );
                                  }}
                                >
                                  Deel op Twitter
                                </Link>
                                <Link
                                  href="whatsapp://send?text=Albert+Heijn+diepvries+blauwe+bessen%3a+wat+moet+je+doen+als+er+een+terugroepactie+is%3f%20https%3a%2f%2fwww.test-aankoop.be%2f?skipbean=true%3Futm_source%3Dwhatsapp%26utm_campaign%3Dweblink%26utm_medium%3Dsocial"
                                  className="icon icon-whatsapp social__section--whatsapp mobile-only"
                                  title="Deel via WhatsApp"
                                >
                                  Deel via WhatsApp
                                </Link>
                                <Link
                                  href="#email-modal"
                                  data-selector="email-popup-trigger"
                                  data-url-publication-link="sec://realm/euroconsumers.pro.sitecorecd.nl-be/VRbBjrRNLsp4gnx9sdBRMbTAPli4t5ZQwZUw-jJnHGjq9HDLFwPI1W2wdy9izhJQ2h0m1j9ezXQXzFOo2qQqgaudwlqayAwRbZ0Bqaj19Ftn47_c0"
                                  title=""
                                  className="icon icon-mail"
                                >
                                  Send by Email
                                </Link>
                              </div>
                              <Link
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  // EC.SaveAndShare.ToggleShare();
                                }}
                                className="icon icon-share"
                              >
                                Share..
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="https://www.test-aankoop.be/gezond/voeding/voedselveiligheid-en-additieven/nieuws/albert-heijn-blauwe-bessen"
                      className="spotlight-card__clickable-zone"
                    />
                  </div>
                </div>
                <div className="flex__col-10 flex__col-lg-4">
                  <div className="spotlight-card">
                    <img
                      data-src="https://www.test-aankoop.be/-/media/ta/images/home/living energy/diswashing-liquid/news/2024/istock-1217832294-modified-9b438b18-1d8d-47be-ba57-0369b7ca35b0.jpg?rev=a3968246-86e8-4c24-afe1-726102856167&mh=400&la=nl-BE&h=400&w=711&hash=928E051B81724E258911C335DA96D90B"
                      className="spotlight-card--image"
                      alt="Afwasmiddel voor handafwas"
                      data-plugin="imageComponent"
                      src="https://www.test-aankoop.be/-/media/ta/ta-logos-2022/placeholder_ta_615.jpg?rev=5c232392-5ab1-4501-86a8-ecc03960779a&mh=400&h=400&hash=D90974E3C51246B664C3FB15EC5E4D06"
                    />{' '}
                    <div className="spotlight-card--content">
                      <div className="flex__row flex__row--no-gutter-xs">
                        <div className="flex__col">
                          <span className="spotlight-card--label margin--bottom-xsmall uppercase">
                            Nieuws
                          </span>
                        </div>
                      </div>
                      <strong className="spotlight-card--title margin--bottom-xsmall">
                        <Link
                          className="link-underline-never"
                          href="/woning-energie/afwasmiddelen/nieuws/top-5-beste-afwasmiddelen"
                          title="De top 5 beste afwasmiddelen"
                        >
                          De top 5 beste afwasmiddelen
                        </Link>
                      </strong>
                      <div
                        className="spotlight-card--footer flex__row flex__row--bottom margin--top-xlarge"
                        data-selector="editorial-item-bottom"
                      >
                        <div
                          className="flex__col flex__col-xs-6 flex__col-sm-narrow"
                          data-selector="read-more"
                        >
                          <p className="no-margin spotlight-card--read-more">
                            <Link
                              href="/woning-energie/afwasmiddelen/nieuws/top-5-beste-afwasmiddelen"
                              title="De top 5 beste afwasmiddelen"
                            >
                              <span>
                                Lees meer <i className="icon icon--small icon-chevron-right" />
                              </span>
                            </Link>
                          </p>
                        </div>
                        <div className="flex__col align-right">
                          <div data-selector="save-share" className="save-share save-share--bar">
                            <div
                              data-type="ALineBookmarkWidgetController"
                              data-rendering="BookmarkWidgetV2"
                              className=""
                            >
                              <div className="relative" data-selector="bookmark">
                                <Link
                                  href="javascript:void(0)"
                                  title="Naar bewaarde artikelen"
                                  data-plugin="tooltip"
                                  data-plugin-settings="#authentication-callout-settings-bookmark"
                                  className="anonymous icon icon-bookmark-outlined"
                                />
                              </div>
                            </div>
                            <div
                              data-type="ALineShareLinksController"
                              data-rendering="ShareLinksV3"
                              className=""
                            >
                              <div data-selector="share-links" className="share-links ">
                                <Link
                                  href="https://www.facebook.com/sharer/sharer.php?u=https%3a%2f%2fwww.test-aankoop.be%2f?skipbean=true"
                                  className="icon icon-facebook social__section--facebook "
                                  title="Deel op Facebook"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open(
                                      e.currentTarget.href,
                                      '',
                                      'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'
                                    );
                                  }}
                                >
                                  Deel op Facebook
                                </Link>
                                <Link
                                  href="https://twitter.com/intent/tweet?url=https%3a%2f%2fwww.test-aankoop.be%2f?skipbean=true&via=Testaankoop&text=De+5+beste+afwasmiddelen+voor+een+propere+vaat"
                                  className="icon icon-twitter social__section--twitter "
                                  title="Deel op Twitter"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open(
                                      e.currentTarget.href,
                                      '',
                                      'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'
                                    );
                                  }}
                                >
                                  Deel op Twitter
                                </Link>
                                <Link
                                  href="whatsapp://send?text=De+5+beste+afwasmiddelen+voor+een+propere+vaat%20https%3a%2f%2fwww.test-aankoop.be%2f?skipbean=true%3Futm_source%3Dwhatsapp%26utm_campaign%3Dweblink%26utm_medium%3Dsocial"
                                  className="icon icon-whatsapp social__section--whatsapp mobile-only"
                                  title="Deel via WhatsApp"
                                >
                                  Deel via WhatsApp
                                </Link>
                                <Link
                                  href="#email-modal"
                                  data-selector="email-popup-trigger"
                                  data-url-publication-link="sec://realm/euroconsumers.pro.sitecorecd.nl-be/zhok8rWcciwprC8PyybviCxQLfZaZ36ifMl9IVLo_3JO8HNQMMCIhNcdsjYH3jqc6wyPJMrIZeC_TdDoyt2vUZkLcCUM3kqFnok8Q6VLOfwDjb760"
                                  title=""
                                  className="icon icon-mail"
                                >
                                  Send by Email
                                </Link>
                              </div>
                              <Link
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  // EC.SaveAndShare.ToggleShare();
                                }}
                                className="icon icon-share"
                              >
                                Share..
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/woning-energie/afwasmiddelen/nieuws/top-5-beste-afwasmiddelen"
                      className="spotlight-card__clickable-zone"
                    />
                  </div>
                </div>
                <div className="flex__col-10 flex__col-lg-4">
                  <div className="spotlight-card">
                    <img
                      data-src="https://www.test-aankoop.be/-/media/ta/images/mobile/services/energyv2/energy_big.jpg?rev=96b97e01-ec48-401f-8489-3cef575ba5cf&mh=400&la=nl-BE&h=400&w=711&hash=72082B68EE85DC72C12BEF1E2364804A"
                      className="spotlight-card--image"
                      alt="Koopgids energieleverancier gas en elektriciteit"
                      data-plugin="imageComponent"
                      src="https://www.test-aankoop.be/-/media/ta/ta-logos-2022/placeholder_ta_615.jpg?rev=5c232392-5ab1-4501-86a8-ecc03960779a&mh=400&h=400&hash=D90974E3C51246B664C3FB15EC5E4D06"
                    />{' '}
                    <div className="spotlight-card--content">
                      <div className="flex__row flex__row--no-gutter-xs">
                        <div className="flex__col">
                          <span className="spotlight-card--label margin--bottom-xsmall uppercase">
                            Koopgids
                          </span>
                        </div>
                      </div>
                      <strong className="spotlight-card--title margin--bottom-xsmall">
                        <Link
                          className="link-underline-never"
                          href="/woning-energie/gas-elektriciteit-mazout-pellets/hoe-kiezen"
                          title="Waar moet je op letten bij het kiezen van je energieleverancier?"
                        >
                          Waar moet je op letten bij het kiezen van je energieleverancier?
                        </Link>
                      </strong>
                      <div
                        className="spotlight-card--footer flex__row flex__row--bottom margin--top-xlarge"
                        data-selector="editorial-item-bottom"
                      >
                        <div
                          className="flex__col flex__col-xs-6 flex__col-sm-narrow"
                          data-selector="read-more"
                        >
                          <p className="no-margin spotlight-card--read-more">
                            <Link
                              href="/woning-energie/gas-elektriciteit-mazout-pellets/hoe-kiezen"
                              title="Waar moet je op letten bij het kiezen van je energieleverancier?"
                            >
                              <span>
                                Naar de koopgids{' '}
                                <i className="icon icon--small icon-chevron-right" />
                              </span>
                            </Link>
                          </p>
                        </div>
                        <div className="flex__col align-right">
                          <div data-selector="save-share" className="save-share save-share--bar">
                            <div
                              data-type="ALineBookmarkWidgetController"
                              data-rendering="BookmarkWidgetV2"
                              className=""
                            >
                              <div className="relative" data-selector="bookmark">
                                <Link
                                  href="javascript:void(0)"
                                  title="Naar bewaarde artikelen"
                                  data-plugin="tooltip"
                                  data-plugin-settings="#authentication-callout-settings-bookmark"
                                  className="anonymous icon icon-bookmark-outlined"
                                />
                              </div>
                            </div>
                            <div
                              data-type="ALineShareLinksController"
                              data-rendering="ShareLinksV3"
                              className=""
                            >
                              <div data-selector="share-links" className="share-links ">
                                <Link
                                  href="https://www.facebook.com/sharer/sharer.php?u=https%3a%2f%2fwww.test-aankoop.be%2f?skipbean=true"
                                  className="icon icon-facebook social__section--facebook "
                                  title="Deel op Facebook"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open(
                                      e.currentTarget.href,
                                      '',
                                      'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'
                                    );
                                  }}
                                >
                                  Deel op Facebook
                                </Link>
                                <Link
                                  href="https://twitter.com/intent/tweet?url=https%3a%2f%2fwww.test-aankoop.be%2f?skipbean=true&via=Testaankoop&text=Waar+moet+je+op+letten+bij+het+kiezen+van+je+energieleverancier%3f"
                                  className="icon icon-twitter social__section--twitter "
                                  title="Deel op Twitter"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open(
                                      e.currentTarget.href,
                                      '',
                                      'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'
                                    );
                                  }}
                                >
                                  Deel op Twitter
                                </Link>
                                <Link
                                  href="#email-modal"
                                  data-selector="email-popup-trigger"
                                  data-url-publication-link="sec://realm/euroconsumers.pro.sitecorecd.nl-be/-wi6pxBTuGWVvh376mpCCwu2GOKxIUM228yH0hPKMUkgA7EuJ0THax3S3vxr6B2bQ4YmlUmKeE99rqGEJEwFkvelJEEOY4zA9xAxzvFC9ca3gzPE0"
                                  title=""
                                  className="icon icon-mail"
                                >
                                  Send by Email
                                </Link>
                              </div>
                              <Link
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  // EC.SaveAndShare.ToggleShare();
                                }}
                                className="icon icon-share"
                              >
                                Share..
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/woning-energie/gas-elektriciteit-mazout-pellets/hoe-kiezen"
                      className="spotlight-card__clickable-zone"
                    />
                  </div>
                </div>
                <div className="flex__col-10 flex__col-lg-4">
                  <div className="spotlight-card">
                    <img
                      data-src="https://www.test-aankoop.be/-/media/ta/images/home/living energy/diswashing-liquid/news/2024/dreft milieuvriendelijk/_3146-dreft.png?rev=9eafcefe-da5d-4792-a626-e305771c6bb9&mh=400&la=nl-BE&h=400&w=711&hash=A8A739047D2AEE6FE247E2034CE85A25"
                      className="spotlight-card--image"
                      alt="Is Dreft afwasmiddel milieuvriendelijk? "
                      data-plugin="imageComponent"
                      src="https://www.test-aankoop.be/-/media/ta/ta-logos-2022/placeholder_ta_615.jpg?rev=5c232392-5ab1-4501-86a8-ecc03960779a&mh=400&h=400&hash=D90974E3C51246B664C3FB15EC5E4D06"
                    />{' '}
                    <div className="spotlight-card--content">
                      <div className="flex__row flex__row--no-gutter-xs">
                        <div className="flex__col">
                          <span className="spotlight-card--label margin--bottom-xsmall uppercase">
                            Nieuws
                          </span>
                        </div>
                      </div>
                      <strong className="spotlight-card--title margin--bottom-xsmall">
                        <Link
                          className="link-underline-never"
                          href="/woning-energie/afwasmiddelen/nieuws/dreft-milieuvriendelijk"
                          title="Is Dreft afwasmiddel milieuvriendelijk?"
                        >
                          Is Dreft afwasmiddel milieuvriendelijk?
                        </Link>
                      </strong>
                      <div
                        className="spotlight-card--footer flex__row flex__row--bottom margin--top-xlarge"
                        data-selector="editorial-item-bottom"
                      >
                        <div
                          className="flex__col flex__col-xs-6 flex__col-sm-narrow"
                          data-selector="read-more"
                        >
                          <p className="no-margin spotlight-card--read-more">
                            <Link
                              href="/woning-energie/afwasmiddelen/nieuws/dreft-milieuvriendelijk"
                              title="Is Dreft afwasmiddel milieuvriendelijk?"
                            >
                              <span>
                                Lees meer <i className="icon icon--small icon-chevron-right" />
                              </span>
                            </Link>
                          </p>
                        </div>
                        <div className="flex__col align-right">
                          <div data-selector="save-share" className="save-share save-share--bar">
                            <div
                              data-type="ALineBookmarkWidgetController"
                              data-rendering="BookmarkWidgetV2"
                              className=""
                            >
                              <div className="relative" data-selector="bookmark">
                                <Link
                                  href="javascript:void(0)"
                                  title="Naar bewaarde artikelen"
                                  data-plugin="tooltip"
                                  data-plugin-settings="#authentication-callout-settings-bookmark"
                                  className="anonymous icon icon-bookmark-outlined"
                                />
                              </div>
                            </div>
                            <div
                              data-type="ALineShareLinksController"
                              data-rendering="ShareLinksV3"
                              className=""
                            >
                              <div data-selector="share-links" className="share-links ">
                                <Link
                                  href="https://www.facebook.com/sharer/sharer.php?u=https%3a%2f%2fwww.test-aankoop.be%2f?skipbean=true"
                                  className="icon icon-facebook social__section--facebook "
                                  title="Deel op Facebook"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open(
                                      e.currentTarget.href,
                                      '',
                                      'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'
                                    );
                                  }}
                                >
                                  Deel op Facebook
                                </Link>
                                <Link
                                  href="https://twitter.com/intent/tweet?url=https%3a%2f%2fwww.test-aankoop.be%2f?skipbean=true&via=Testaankoop&text=Bespaar+je+echt+energie+met+Dreft+Max+Power+afwasmiddel%3f"
                                  className="icon icon-twitter social__section--twitter "
                                  title="Deel op Twitter"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open(
                                      e.currentTarget.href,
                                      '',
                                      'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'
                                    );
                                  }}
                                >
                                  Deel op Twitter
                                </Link>
                                <Link
                                  href="whatsapp://send?text=Bespaar+je+echt+energie+met+Dreft+Max+Power+afwasmiddel%3f%20https%3a%2f%2fwww.test-aankoop.be%2f?skipbean=true%3Futm_source%3Dwhatsapp%26utm_campaign%3Dweblink%26utm_medium%3Dsocial"
                                  className="icon icon-whatsapp social__section--whatsapp mobile-only"
                                  title="Deel via WhatsApp"
                                >
                                  Deel via WhatsApp
                                </Link>
                                <Link
                                  href="#email-modal"
                                  data-selector="email-popup-trigger"
                                  data-url-publication-link="sec://realm/euroconsumers.pro.sitecorecd.nl-be/iIM_B6h96ee_x-Nic4MZqvXNtI3_n_xtA5l3Yg75OFEY3Z6I_qWW_DlNDIN6ee8JIcl3hStQSgA609jMxcUtVsjUzuSNTX2w2ZOKh3HgO7ezIGRl0"
                                  title=""
                                  className="icon icon-mail"
                                >
                                  Send by Email
                                </Link>
                              </div>
                              <Link
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  // EC.SaveAndShare.ToggleShare();
                                }}
                                className="icon icon-share"
                              >
                                Share..
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/woning-energie/afwasmiddelen/nieuws/dreft-milieuvriendelijk"
                      className="spotlight-card__clickable-zone"
                    />
                  </div>
                </div>
                <div className="flex__col-10 flex__col-lg-4">
                  <div className="spotlight-card">
                    <img
                      data-src="https://www.test-aankoop.be/-/media/ta-hline/images/home/food and nutrition/cereal-bars/news/2024/best-cereals/barres-cereales-teaser_ok.jpg?rev=570a7611-90e9-45a8-9eef-6dcdc63ebc2c&mh=400&la=nl-BE&h=400&w=711&hash=8439F5036BB5E0B0A5C2FAD780F6DACE"
                      className="spotlight-card--image"
                      alt="proteïne repen"
                      data-plugin="imageComponent"
                      src="https://www.test-aankoop.be/-/media/ta/ta-logos-2022/placeholder_ta_615.jpg?rev=5c232392-5ab1-4501-86a8-ecc03960779a&mh=400&h=400&hash=D90974E3C51246B664C3FB15EC5E4D06"
                    />{' '}
                    <div className="spotlight-card--content">
                      <div className="flex__row flex__row--no-gutter-xs">
                        <div className="flex__col">
                          <span className="spotlight-card--label margin--bottom-xsmall uppercase">
                            Nieuws
                          </span>
                        </div>
                      </div>
                      <strong className="spotlight-card--title margin--bottom-xsmall">
                        <Link
                          className="link-underline-never"
                          href="https://www.test-aankoop.be/gezond/voeding/mueslirepen/nieuws/eiwitverrijkte-producten"
                          title="Eiwitverrijkte producten: nutteloos en duur"
                        >
                          Eiwitverrijkte producten: nutteloos en duur
                        </Link>
                      </strong>
                      <div
                        className="spotlight-card--footer flex__row flex__row--bottom margin--top-xlarge"
                        data-selector="editorial-item-bottom"
                      >
                        <div
                          className="flex__col flex__col-xs-6 flex__col-sm-narrow"
                          data-selector="read-more"
                        >
                          <p className="no-margin spotlight-card--read-more">
                            <Link
                              href="https://www.test-aankoop.be/gezond/voeding/mueslirepen/nieuws/eiwitverrijkte-producten"
                              title="Eiwitverrijkte producten: nutteloos en duur"
                            >
                              <span>
                                Lees meer <i className="icon icon--small icon-chevron-right" />
                              </span>
                            </Link>
                          </p>
                        </div>
                        <div className="flex__col align-right">
                          <div data-selector="save-share" className="save-share save-share--bar">
                            <div
                              data-type="ALineBookmarkWidgetController"
                              data-rendering="BookmarkWidgetV2"
                              className=""
                            >
                              <div className="relative" data-selector="bookmark">
                                <Link
                                  href="javascript:void(0)"
                                  title="Naar bewaarde artikelen"
                                  data-plugin="tooltip"
                                  data-plugin-settings="#authentication-callout-settings-bookmark"
                                  className="anonymous icon icon-bookmark-outlined"
                                />
                              </div>
                            </div>
                            <div
                              data-type="ALineShareLinksController"
                              data-rendering="ShareLinksV3"
                              className=""
                            >
                              <div data-selector="share-links" className="share-links ">
                                <Link
                                  href="https://www.facebook.com/sharer/sharer.php?u=https%3a%2f%2fwww.test-aankoop.be%2f?skipbean=true"
                                  className="icon icon-facebook social__section--facebook "
                                  title="Deel op Facebook"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open(
                                      e.currentTarget.href,
                                      '',
                                      'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'
                                    );
                                  }}
                                >
                                  Deel op Facebook
                                </Link>
                                <Link
                                  href="https://twitter.com/intent/tweet?url=https%3a%2f%2fwww.test-aankoop.be%2f?skipbean=true&via=Testaankoop&text=Eiwitverrijkte+producten%3a+nutteloos+en+duur"
                                  className="icon icon-twitter social__section--twitter "
                                  title="Deel op Twitter"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open(
                                      e.currentTarget.href,
                                      '',
                                      'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'
                                    );
                                  }}
                                >
                                  Deel op Twitter
                                </Link>
                                <Link
                                  href="whatsapp://send?text=Eiwitverrijkte+producten%3a+nutteloos+en+duur%20https%3a%2f%2fwww.test-aankoop.be%2f?skipbean=true%3Futm_source%3Dwhatsapp%26utm_campaign%3Dweblink%26utm_medium%3Dsocial"
                                  className="icon icon-whatsapp social__section--whatsapp mobile-only"
                                  title="Deel via WhatsApp"
                                >
                                  Deel via WhatsApp
                                </Link>
                                <Link
                                  href="#email-modal"
                                  data-selector="email-popup-trigger"
                                  data-url-publication-link="sec://realm/euroconsumers.pro.sitecorecd.nl-be/79WYYBJA_RVmk0PGPXbkUNjoY7su4Kiu-vYWYdyEZ4lzDZcysQHyONf8Hw9BMv4vGPEmJu_ZG2oyQwQFlTJOGtsra1TS-WfblNgmrTgohuc2x4Fm0"
                                  title=""
                                  className="icon icon-mail"
                                >
                                  Send by Email
                                </Link>
                              </div>
                              <Link
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  // EC.SaveAndShare.ToggleShare();
                                }}
                                className="icon icon-share"
                              >
                                Share..
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="https://www.test-aankoop.be/gezond/voeding/mueslirepen/nieuws/eiwitverrijkte-producten"
                      className="spotlight-card__clickable-zone"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="spotlight-panel--footer margin--top-large">
              <Link href="/alle-inhoud/nieuws" className="spotlight-panel--button strong">
                Alles bekijken <i className="icon icon-chevron-right" />
              </Link>{' '}
            </div>
          </div>
        </section>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    #id-ea74220b-74e3-4e7e-b5e9-9bbef0932767 {\n        background-color: #f9f8f7;\n    }\n',
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n            #id-ea74220b-74e3-4e7e-b5e9-9bbef0932767 .tools-panel--tool__label[data-label-category=new] {\n                background: #5AA0E6;\n            }\n        ',
          }}
        />
        <section
          className="tools-panel padding--top-xlarge padding--bottom-large"
          data-selector="spotlight-panel"
          id="id-ea74220b-74e3-4e7e-b5e9-9bbef0932767"
        >
          <div className="constrained">
            <div className="align-central">
              <h2 className="stronger class-ea74220b-74e3-4e7e-b5e9-9bbef0932767">
                Vergelijk producten en diensten
              </h2>
              <p className="class-ea74220b-74e3-4e7e-b5e9-9bbef0932767">
                Wil je steeds de beste keuze kunnen maken? Raadpleeg de resultaten van de duizenden
                producten die we elk jaar testen in onze onafhankelijke laboratoria en maak
                simulaties voor diensten die onze experts onder de loupe hebben genomen.
              </p>
            </div>
            <div className="tools-panel--tools flex__row margin--top-small">
              <div
                className="tools-panel--tool flex__col-xs-6 flex__col-sm-4 flex__col-lg-2"
                id="id-85813de4-4cf8-4c9d-99e2-2ba9c6b24422"
              >
                <div className="tools-panel--tool__content">
                  <Link
                    href="https://www.test-aankoop.be/woning-energie/vaatwasmiddelen/vergelijker"
                    title="Vaat-wasmiddelen"
                  >
                    <img
                      className="tools-panel--tool-image"
                      data-culture-depend=""
                      data-plugin="imageComponent"
                      width={335}
                      height={395}
                      data-src="https://www.test-aankoop.be/-/media/global-artwork/home-appliances/dishwasher-detergents/dishwasher-detergents.svg?rev=0acd7249-a3e5-43e4-85bd-8020c05f149c&mw=330&hash=FCED9F539C5B9F5FF1FE0E224CDD2BE0"
                      alt="Vaat-wasmiddelen"
                      src="https://www.test-aankoop.be/-/media/global-artwork/home-appliances/dishwasher-detergents/dishwasher-detergents.svg?rev=0acd7249-a3e5-43e4-85bd-8020c05f149c&mw=330&hash=FCED9F539C5B9F5FF1FE0E224CDD2BE0"
                    />
                    <span
                      className="tools-panel--tool-title"
                      data-plugin="textLinesLimiter"
                      data-plugin-settings="#toolsPanelTextSettings"
                    >
                      Vaat-wasmiddelen
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className="tools-panel--tool flex__col-xs-6 flex__col-sm-4 flex__col-lg-2"
                id="id-53ef0dc8-5ff4-4bc6-9a5b-d021e64283c9"
              >
                <div className="tools-panel--tool__content">
                  <Link
                    href="https://www.test-aankoop.be/hightech/laptops/vergelijker"
                    title="Laptops"
                  >
                    <img
                      className="tools-panel--tool-image"
                      data-culture-depend=""
                      data-plugin="imageComponent"
                      width={335}
                      height={395}
                      data-src="https://www.test-aankoop.be/-/media/global-artwork/hightech/laptop/laptops.svg?rev=022ce088-a4f0-46cd-b95e-b9050c526067&mw=330&hash=8FBC65485C45B85B6D821FDCAF78CE41"
                      alt="Laptops"
                      src="https://www.test-aankoop.be/-/media/global-artwork/hightech/laptop/laptops.svg?rev=022ce088-a4f0-46cd-b95e-b9050c526067&mw=330&hash=8FBC65485C45B85B6D821FDCAF78CE41"
                    />
                    <span
                      className="tools-panel--tool-title"
                      data-plugin="textLinesLimiter"
                      data-plugin-settings="#toolsPanelTextSettings"
                    >
                      Laptops
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className="tools-panel--tool flex__col-xs-6 flex__col-sm-4 flex__col-lg-2"
                id="id-f6451ca2-c07b-4c90-859a-830905eacd53"
              >
                <div className="tools-panel--tool__content">
                  <Link
                    href="https://www.test-aankoop.be/huishoudelektro/droogkasten/vergelijker"
                    title="Droogkasten"
                  >
                    <img
                      className="tools-panel--tool-image"
                      data-culture-depend=""
                      data-plugin="imageComponent"
                      width={335}
                      height={395}
                      data-src="https://www.test-aankoop.be/-/media/global-artwork/home-appliances/tumble-dryers/tumble_dryers.svg?rev=62c54399-a767-4f61-a430-d61c43f99b1e&mw=330&hash=7D6732A01402DF0294E45442AC5420F1"
                      alt="Droogkasten"
                      src="https://www.test-aankoop.be/-/media/global-artwork/home-appliances/tumble-dryers/tumble_dryers.svg?rev=62c54399-a767-4f61-a430-d61c43f99b1e&mw=330&hash=7D6732A01402DF0294E45442AC5420F1"
                    />
                    <span
                      className="tools-panel--tool-title"
                      data-plugin="textLinesLimiter"
                      data-plugin-settings="#toolsPanelTextSettings"
                    >
                      Droogkasten
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className="tools-panel--tool flex__col-xs-6 flex__col-sm-4 flex__col-lg-2"
                id="id-ee3a5c77-5b99-48cf-9f40-abfa91dcd5e0"
              >
                <div className="tools-panel--tool__content">
                  <Link
                    href="https://www.test-aankoop.be/huishoudelektro/espressomachines/vergelijker"
                    title="Koffie-machines"
                  >
                    <img
                      className="tools-panel--tool-image"
                      data-culture-depend=""
                      data-plugin="imageComponent"
                      width={335}
                      height={395}
                      data-src="https://www.test-aankoop.be/-/media/global-artwork/home-appliances/expressomachines/expressomachines.svg?rev=ab7b7639-5b47-40e4-9fd3-010b80fbbb15&mw=330&hash=2B637084F85812ABB5048E842276C91B"
                      alt="Koffie-machines"
                      src="https://www.test-aankoop.be/-/media/global-artwork/home-appliances/expressomachines/expressomachines.svg?rev=ab7b7639-5b47-40e4-9fd3-010b80fbbb15&mw=330&hash=2B637084F85812ABB5048E842276C91B"
                    />
                    <span
                      className="tools-panel--tool-title"
                      data-plugin="textLinesLimiter"
                      data-plugin-settings="#toolsPanelTextSettings"
                    >
                      Koffie-machines
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className="tools-panel--tool flex__col-xs-6 flex__col-sm-4 flex__col-lg-2"
                id="id-90e49705-01e3-4d23-b541-2f764bfacad9"
              >
                <div className="tools-panel--tool__content">
                  <Link
                    href="https://www.test-aankoop.be/hightech/printers/vergelijker"
                    title="Printers"
                  >
                    <img
                      className="tools-panel--tool-image"
                      data-culture-depend=""
                      data-plugin="imageComponent"
                      width={335}
                      height={395}
                      data-src="https://www.test-aankoop.be/-/media/global-artwork/hightech/printers/printers.svg?rev=c8c6c8f8-d316-43cc-8717-f3e67aff0123&mw=330&hash=FFBB08ACA0AF33236B2F5B80F0455201"
                      alt="Printers"
                      src="https://www.test-aankoop.be/-/media/global-artwork/hightech/printers/printers.svg?rev=c8c6c8f8-d316-43cc-8717-f3e67aff0123&mw=330&hash=FFBB08ACA0AF33236B2F5B80F0455201"
                    />
                    <span
                      className="tools-panel--tool-title"
                      data-plugin="textLinesLimiter"
                      data-plugin-settings="#toolsPanelTextSettings"
                    >
                      Printers
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className="tools-panel--tool flex__col-xs-6 flex__col-sm-4 flex__col-lg-2"
                id="id-de2a8ff8-bc83-4475-9a27-0c40f2096390"
              >
                <div className="tools-panel--tool__content">
                  <Link
                    href="https://www.test-aankoop.be/woning-energie/afwasmiddelen/vergelijker"
                    title="Afwasmiddelen"
                  >
                    <img
                      className="tools-panel--tool-image"
                      data-culture-depend=""
                      data-plugin="imageComponent"
                      width={335}
                      height={395}
                      data-src="https://www.test-aankoop.be/-/media/global-artwork/living-energy/dish%20detergents/seg_detergent_dish.svg?rev=6e4088dc-67ae-43c8-8187-5418da0bbfcd&mw=330&hash=81EE6F3BEC3DA195F7905FABD0C93336"
                      alt="Afwasmiddelen"
                      src="https://www.test-aankoop.be/-/media/global-artwork/living-energy/dish%20detergents/seg_detergent_dish.svg?rev=6e4088dc-67ae-43c8-8187-5418da0bbfcd&mw=330&hash=81EE6F3BEC3DA195F7905FABD0C93336"
                    />
                    <span
                      className="tools-panel--tool-title"
                      data-plugin="textLinesLimiter"
                      data-plugin-settings="#toolsPanelTextSettings"
                    >
                      Afwasmiddelen
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="tools-panel--footer">
              <Link
                href="https://www.test-aankoop.be/alle-inhoud/vergelijkers-tools"
                className="tools-panel--link link-primary-color"
              >
                Alles bekijken <i className="icon icon-chevron-right" />
              </Link>{' '}
            </div>
          </div>
        </section>
        <style
          dangerouslySetInnerHTML={{
            __html: '\n    :root {\n        --magazines-panel-card-background: #ffffff;\n    }\n',
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    #magazines-panel-a76a2adb833d422dbc2b9632c285f942-id {\n        background-color: #FFFFFF;\n    }\n    ',
          }}
        />
        <section
          className="section magazines-panel"
          id="magazines-panel-a76a2adb833d422dbc2b9632c285f942-id"
        >
          <div className="constrained">
            <div className="magazines-panel__header">
              <h2 className="stronger magazines-panel__header__title magazines-panel__header-text-color">
                Onze magazines
              </h2>
              <p className="magazines-panel__header__description magazines-panel__header-text-color">
                Hier vind je de nieuwste nummers terug van onze tijdschriften.
              </p>
            </div>
            <div
              className="flex__row magazines-panel__cards js-equal-heights"
              data-plugin="flickityCarousel"
              data-plugin-settings="#magazinesPanelFlickityCards"
              data-selector="magazines-panel-cards"
              style={{ height: 160 }}
            >
              <div
                className="flex__col-xs-10 flex__col-lg-4 box js-equal-heights-parent"
                data-selector="magazines-panel-cards-div"
              >
                <div
                  className="magazines-panel-card-item js-equal-heights-parent"
                  data-selector="magazines-panel-card-item"
                >
                  <Link
                    className="magazines-panel-card-item__clickable-zone"
                    href="/alle-inhoud/magazines?magazine=budget-en-recht"
                  >
                    <img
                      src="https://www.test-aankoop.be/-/media/ta/resources/paper publications/budget recht/2025/298/br_298/br298cover.jpg?rev=580ff9a2-15a0-44f2-85b3-3d21b4a6e60e&la=nl-BE&h=808&w=595&hash=D70C4F037A2F22A9EF1225FFB51F670D"
                      className="magazines-panel-card-item__image"
                      alt=""
                    />
                    <div className="magazines-panel-card-item__infos">
                      <h3 className="magazines-panel-card-item__infos__title stronger">
                        Budget &amp; Recht
                      </h3>
                      <span className="magazines-panel-card-item__infos__date-number">
                        januari 2025 - N° 298
                      </span>
                      <span
                        className="magazines-panel-card-item__infos__description"
                        data-selector="magazines-panel-card-item-description"
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div
                className="flex__col-xs-10 flex__col-lg-4 box js-equal-heights-parent"
                data-selector="magazines-panel-cards-div"
              >
                <div
                  className="magazines-panel-card-item js-equal-heights-parent"
                  data-selector="magazines-panel-card-item"
                >
                  <Link
                    className="magazines-panel-card-item__clickable-zone"
                    href="/alle-inhoud/magazines?magazine=testaankoop"
                  >
                    <img
                      src="https://www.test-aankoop.be/-/media/ta/resources/paper publications/testaankoop/2025/703/aa_703/aa703001001cover.jpg?rev=d1ebbc25-7262-4dc0-976c-b7d181c1d3ad&la=nl-BE&h=808&w=595&hash=6141DEBBE8EBC74507E33934895D3598"
                      className="magazines-panel-card-item__image"
                      alt=""
                    />
                    <div className="magazines-panel-card-item__infos">
                      <h3 className="magazines-panel-card-item__infos__title stronger">
                        Testaankoop
                      </h3>
                      <span className="magazines-panel-card-item__infos__date-number">
                        januari 2025 - N° 703
                      </span>
                      <span
                        className="magazines-panel-card-item__infos__description"
                        data-selector="magazines-panel-card-item-description"
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div
                className="flex__col-xs-10 flex__col-lg-4 box js-equal-heights-parent"
                data-selector="magazines-panel-cards-div"
              >
                <div
                  className="magazines-panel-card-item js-equal-heights-parent"
                  data-selector="magazines-panel-card-item"
                >
                  <Link
                    className="magazines-panel-card-item__clickable-zone"
                    href="/alle-inhoud/magazines?magazine=testaankoop-connect"
                  >
                    <img
                      src="https://www.test-aankoop.be/-/media/ta/resources/paper publications/test connect/2025/56/tcn56/cn56001001cover.jpg?rev=27518fce-5668-45b9-8ee9-39015b8988c4&la=nl-BE&h=901&w=664&hash=5305FB07783A467C4CCCABBF6345DD5C"
                      className="magazines-panel-card-item__image"
                      alt=""
                    />
                    <div className="magazines-panel-card-item__infos">
                      <h3 className="magazines-panel-card-item__infos__title stronger">
                        Testaankoop connect
                      </h3>
                      <span className="magazines-panel-card-item__infos__date-number">
                        januari 2025 - N° 56
                      </span>
                      <span
                        className="magazines-panel-card-item__infos__description"
                        data-selector="magazines-panel-card-item-description"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="magazines-panel__footer">
              <Link href="/alle-inhoud/magazines" className="magazines-panel__footer__link">
                {' '}
                <span>Bekijk alle magazines</span>
                <i className="icon icon-chevron-right" />
              </Link>{' '}
            </div>
          </div>
        </section>
        <div
          data-type="ALineSpecialCampaignsController"
          data-rendering="SpecialCampaignsPanel"
          data-datasource="{9CD5DD3D-E043-4504-B92A-D56CFCD0189B}"
          className="flex__row flex__row--no-gutter flex__row--centered special-campaign__container"
        >
          <section
            className="section relative special-campaign--underlay padding--bottom-xsmall"
            data-selector="special-campaign"
          >
            <div className="constrained special-campaign">
              <div
                data-plugin="flickityCarousel"
                data-plugin-settings="#specialCampaignsCarouselSettings"
                style={{ display: 'inline-block', width: '100%' }}
              >
                <div className="special-campaign__container-item w100">
                  <div className="flex__row flex__row--centered margin--bottom-medium">
                    <div className="flex__col flex__col-xs-11">
                      <h2 className="alpha align-central normal uppercase">Onze acties</h2>
                    </div>
                  </div>
                  <div className="flex__row flex__row--centered flex__row--no-gutter margin--bottom-medium special-campaign__container">
                    <div className="flex__col-xs-11 flex__col-md-4 special-campaign__image-container">
                      <Link style={{ height: '100%' }} href="/mobiliteit/auto-s/nieuws/puretech">
                        <img
                          data-src="https://www.test-aankoop.be/-/media/ta/images/home/mobility/autos/news/2024/teaser moteur.jpg?rev=ad6675cd-15c5-48ed-9833-9f58ecc1ccd4&la=nl-BE&h=197&mw=350&w=350&hash=D1137CB333EB2CC65F7C477D1EA6EF36"
                          height={197}
                          alt="Problemen met PureTech: heeft jouw auto een defecte motor? "
                          data-plugin="imageComponent"
                          width={350}
                        />
                      </Link>
                    </div>
                    <div className="flex__col-xs-11 flex__col-md-7">
                      <div className="padding-xlarge">
                        <p className="label">Mobiliteit </p>
                        <Link
                          href="/mobiliteit/auto-s/nieuws/puretech"
                          className="link-underline-never"
                        >
                          <h3 className="beta strong margin--bottom-xsmall">
                            Problemen met PureTech: heeft jouw auto een defecte motor?
                          </h3>
                        </Link>
                        <p className="margin--bottom-small">
                          PureTech-benzinemotoren in bepaalde modellen van Peugeot, Citroën, Opel en
                          Toyota hebben ernstige technische problemen. We blijven druk uitoefenen op
                          fabrikant Stellantis om een gepaste regeling te treffen.
                        </p>
                        <div className="flex__row flex__row--no-gutter flex__row--sm-middle margin--top-medium">
                          <div className="flex__col flex__col-xs-12 flex__col-sm-6">
                            <p className="no-margin">
                              <Link
                                href="/mobiliteit/auto-s/nieuws/puretech?int_source=consumer&int_medium=hp_actionblock"
                                className="btn btn--primary uppercase"
                                target="_blank"
                                title="Meld het ons"
                              >
                                Meld het ons
                              </Link>
                            </p>
                          </div>
                          <div className="flex__col flex__col-xs-12 flex__col-sm-6 align-right-tablet">
                            <Link
                              href="/overzicht-acties?int_source=consumer&int_medium=hp_actionblock"
                              className="read-more underline margin--top-small margin--bottom-small"
                              title="Al onze acties"
                            >
                              Al onze acties <i className="icon icon-chevron-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="special-campaign__container-item w100">
                  <div className="flex__row flex__row--centered margin--bottom-medium">
                    <div className="flex__col flex__col-xs-11">
                      <h2 className="alpha align-central normal uppercase">Onze acties</h2>
                    </div>
                  </div>
                  <div className="flex__row flex__row--centered flex__row--no-gutter margin--bottom-medium special-campaign__container">
                    <div className="flex__col-xs-11 flex__col-md-4 special-campaign__image-container">
                      <Link
                        style={{ height: '100%' }}
                        href="https://www.test-aankoop.be/energyguide/mijn-energiebesparingen/isolatie?int_source=consumer&int_medium=hp_actionblock"
                      >
                        <img
                          data-src="https://www.test-aankoop.be/-/media/ta/images/homepage-responsive/action panel/2024/isolatie_istock-1212830587-152x111.jpg?rev=225b05ec-84e0-4bf1-9a6f-da1261f210c0&la=nl-BE&h=197&mw=350&w=350&hash=EDB4B4B1C48E2D82B71A441B75A3A26E"
                          height={197}
                          alt="Isoleer je huis met Testaankoop en bespaar geld"
                          data-plugin="imageComponent"
                          width={350}
                        />
                      </Link>
                    </div>
                    <div className="flex__col-xs-11 flex__col-md-7">
                      <div className="padding-xlarge">
                        <p className="label">Actie isolatie</p>
                        <Link
                          href="https://www.test-aankoop.be/energyguide/mijn-energiebesparingen/isolatie?int_source=consumer&int_medium=hp_actionblock"
                          className="link-underline-never"
                        >
                          <h3 className="beta strong margin--bottom-xsmall">
                            Isoleer je huis met Testaankoop en bespaar geld
                          </h3>
                        </Link>
                        <p className="margin--bottom-small">
                          Wij vinden voor jou een vakman voor je isolatiewerken. Vul het formulier
                          in en één van onze partners neemt contact met je op. Ter plaatse wordt er
                          een analyse opgemaakt. Vervolgens ontvang je een vrijblijvende en op maat
                          gemaakte offerte.
                        </p>
                        <div className="flex__row flex__row--no-gutter flex__row--sm-middle margin--top-medium">
                          <div className="flex__col flex__col-xs-12 flex__col-sm-6">
                            <p className="no-margin">
                              <Link
                                href="https://www.test-aankoop.be/energyguide/mijn-energiebesparingen/isolatie?int_source=consumer&int_medium=hp_actionblock"
                                className="btn btn--primary uppercase"
                                target=""
                                title="Meer weten"
                              >
                                Meer weten
                              </Link>
                            </p>
                          </div>
                          <div className="flex__col flex__col-xs-12 flex__col-sm-6 align-right-tablet">
                            <Link
                              href="/overzicht-acties"
                              className="read-more underline margin--top-small margin--bottom-small"
                              title="Al onze acties"
                            >
                              Al onze acties <i className="icon icon-chevron-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="section" data-selector="recommended-taglayer">
          <div className="constrained constrained--desktop-only recommended">
            <div className="flex__row">
              <div className="flex__col">
                <h2 className="align-central alpha normal uppercase">Aanbevolen voor jou</h2>
              </div>
            </div>
            <div
              className="flex__row margin--top-medium"
              data-selector="recommended-taglayer-content"
            >
              <div id="recommended-foryou-tag-layer" />
            </div>
          </div>
        </section>
        <Link className="ot-sdk-show-settings" href="#" hidden />
        <div data-plugin="form" data-plugin-settings="#form-recommended-settings" hidden>
          <Link href="javascript:void(0)" className="refresh-recommended-info" hidden>
            {' '}
            trigger
          </Link>
        </div>
        <section className="section section--grey padding--bottom-small padding--top-small z1">
          <div className="conv_offerCards">
            {/* top */}
            <div className="constrained constrained--large">
              {/* offerPage__header */}
              <div className="flex__row">
                {/* title */}
                <div className="flex__col-12 offerCards__title">
                  Wat krijg je als lid?
                  <div>Ontdek je voordelen</div>
                </div>
                {/* col header */}
                <div className="flex__col align-central">
                  <div className="flex__row centered--flex">
                    <div className="flex__col offerCards__col mainColor selected--left  first-on-mobile">
                      <div className="flex__row">
                        <div className="flex__col-12">
                          <div className="shadowed">
                            <Link
                              href="https://ontdek.test-aankoop.be/2023/newmarketplace?prm_id_c=CARDS1N&cop_id_c=MembershipPanel&par_id_c=Homepage"
                              target=""
                              className="offerCards__header"
                            >
                              <div className="offerCards__header__content">
                                <div className="offerCards__header__content__pack">SUPERIOR</div>
                                <div className="offerCards__header__content__price">
                                  <div>€2/2 maanden</div>
                                  <div className="">
                                    Daarna slechts €11,84/maand voor de rest van het jaar
                                  </div>
                                </div>
                              </div>
                            </Link>
                            <div className="offerCards__header-CTA">
                              <Link
                                href="https://ontdek.test-aankoop.be/2023/newmarketplace?prm_id_c=CARDS1N&cop_id_c=MembershipPanel&par_id_c=Homepage"
                                target=""
                                className="btn btn--pill uppercase"
                              >
                                Word lid
                              </Link>
                              <div className="offerCards__header-CTA__currentPlan">
                                <span>
                                  <i className="icon-tick" />
                                  DIT IS JE HUIDIG PLAN
                                </span>
                              </div>
                            </div>
                            <div className="offerCards__header-spacer" />
                            <div className="offerCards__header-spacer" />
                            <div className="offerCards__header-table">
                              <div className="offerCards__header-table__group">
                                <div className="offerCards__header-table__group__intro">
                                  <div className="genericText">
                                    <strong>Je extra voordelen zijn:</strong>
                                    <div className="genericText__icon">
                                      <i className="icon icon-tick" />
                                    </div>
                                  </div>
                                  <div className="currentPlanText">
                                    Dit is je huidig plan. Hiermee heb je toegang tot:{' '}
                                  </div>
                                </div>
                                <ul>
                                  <li>Testaankoop magazine</li>
                                  <li>Budget &amp; Recht magazine</li>
                                  <li>Testaankoop gezond magazine</li>
                                </ul>{' '}
                              </div>
                              <Link
                                href="https://ontdek.test-aankoop.be/2023/newmarketplace?prm_id_c=CARDS1N&cop_id_c=MembershipPanel&par_id_c=Homepage"
                                target=""
                                className="offerCards__header-table__group"
                              >
                                <div className="offerCards__header-table__group__gift flex__row">
                                  <div className="flex__col-12 margin--bottom-large">
                                    <ul>
                                      <li>Toegang tot 100 advocaten</li>
                                      <li>Magazines aan huis geleverd</li>
                                      <li>
                                        Toegang tot alle content van Testaankoop &amp; Testaankoop
                                        gezond
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="flex__col">
                                    <div className="offerCards__header-table__group__gift__title">
                                      Kies je welkomstcadeau
                                    </div>
                                    <div className="offerCards__header-table__group__gift__text">
                                      uit een van verschillde topmerken
                                    </div>
                                  </div>
                                </div>
                                <div className="offerCards__header-table__group__moreLink">
                                  Meer weten? <i className="icon-chevron-right" />
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{' '}
                  </div>
                </div>
                <div className="flex__col-12 offerCards__bottomLink">
                  <div>
                    Meer info over dit aanbod
                    <br className="mobile-only" />
                    <Link href="/aanbod">Ontdek ons volledig aanbod</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          data-type="ALineOurServicesController"
          data-rendering="OurServicesBase"
          data-datasource="{7FE9F680-4B2E-4187-BB5D-E8F8EC64D9B2}"
          className=""
        >
          <section className="section" data-selector="our-services">
            <div className="constrained our-services">
              <div className="flex__row">
                <div className="flex__col align-central">
                  <h2 className="align-central alpha normal uppercase">Wat wij voor je doen</h2>
                </div>
              </div>
              <div
                data-type="ALineOurServicesController"
                data-rendering="OurServices"
                data-datasource="{3D1BAB4A-88CB-4EF8-AEB8-1B4357FDD700}"
                className="flex__row flex__row--xs-center flex__row--md-middle padding--bottom-xlarge padding--top-xlarge our-services__item"
              >
                <Link
                  href="/overzicht-acties"
                  className="Link-underline-never flex__col-xs-10 flex__col-md-5 "
                >
                  <img
                    data-src="https://www.test-aankoop.be/-/media/ta/images/homepage-responsive/new-a-line/our-services/servico_03.jpg?rev=a6933a9b-b109-462b-90a9-4164b3024866&la=nl-BE&h=254&mw=420&w=420&hash=854CE77AC2BBAA1B23AEB17B0B1B5F82"
                    height={254}
                    alt="Bekijk onze acties"
                    data-plugin="imageComponent"
                    width={420}
                  />
                </Link>
                <div className="align-central flex__col-xs-10 flex__col-md-5">
                  <Link href="/overzicht-acties" className="link-underline-never">
                    {' '}
                    <h3 className="stronger">Groepsacties</h3>{' '}
                  </Link>
                  <p className="margin--bottom-medium">
                    Met onze groepsacties kunnen we collectief onze stempel drukken en de rechten
                    van de consument beschermen.
                  </p>
                  <p className="no-margin">
                    <Link
                      href="/overzicht-acties"
                      className="btn btn--tertiary uppercase"
                      target=""
                      title="Bekijk alle acties"
                    >
                      Bekijk alle acties
                    </Link>
                  </p>
                </div>
              </div>
              <div
                data-type="ALineOurServicesController"
                data-rendering="OurServices"
                data-datasource="{3F5E2E6B-179C-448C-83BE-024486A5B29E}"
                className="flex__row flex__row--xs-center flex__row--md-middle padding--bottom-xlarge padding--top-xlarge our-services__item"
              >
                <Link
                  href="/klagen"
                  className="Link-underline-never flex__col-xs-10 flex__col-md-5 flex__col-last-medium"
                >
                  <img
                    data-src="https://www.test-aankoop.be/-/media/ta/images/homepage-responsive/new-a-line/our-services/complain-power.jpg?rev=741b96a9-e28b-46f8-b6a7-536ef8c733a0&la=nl-BE&h=219&mw=420&w=420&hash=FBC68491D87445BB606DF5DF524CFEB4"
                    height={219}
                    alt="Klachtenmodule"
                    data-plugin="imageComponent"
                    width={420}
                  />
                </Link>
                <div className="align-central flex__col-xs-10 flex__col-md-5">
                  <Link href="/klagen" className="link-underline-never">
                    {' '}
                    <h3 className="stronger">Klachtenbox</h3>{' '}
                  </Link>
                  <p className="margin--bottom-medium">
                    Een geschil met een bedrijf? Stuur hun nu meteen een klacht en haal je gelijk
                    dankzij ons.
                  </p>
                  <p className="no-margin">
                    <Link
                      href="/klagen"
                      className="btn btn--tertiary uppercase"
                      target=""
                      title="Dien een klacht in"
                    >
                      Dien een klacht in
                    </Link>
                  </p>
                </div>
              </div>
              <div
                data-type="ALineOurServicesController"
                data-rendering="OurServices"
                data-datasource="{DAD21F08-630E-413C-ACCB-AE059C4B77CA}"
                className="flex__row flex__row--xs-center flex__row--md-middle padding--bottom-xlarge padding--top-xlarge our-services__item"
              >
                <Link
                  href="https://www.test-aankoop.be/overzichtspagina?type=comparators-and-calculators"
                  className="Link-underline-never flex__col-xs-10 flex__col-md-5 "
                >
                  <img
                    data-src="https://www.test-aankoop.be/-/media/ocu/varia/cabereca_nl_3_16x9.jpg?rev=2bfdbe15-53d9-46a8-b162-9d3f2ea2f423&la=nl-BE&h=236&mw=420&w=420&hash=902118CDA4B4A8E09ADD30DBB2823F93"
                    height={236}
                    alt="Koopwijzers en modules"
                    data-plugin="imageComponent"
                    width={420}
                  />
                </Link>
                <div className="align-central flex__col-xs-10 flex__col-md-5">
                  <Link
                    href="https://www.test-aankoop.be/overzichtspagina?type=comparators-and-calculators"
                    className="link-underline-never"
                  >
                    {' '}
                    <h3 className="stronger">Vergelijkers en modules</h3>{' '}
                  </Link>
                  <p className="margin--bottom-medium">
                    Wij ondersteunen je in al je aankoopbeslissingen met analyses van allerlei
                    producten en diensten: van smartphones en grasmaaiers tot telecomtarieven en
                    energieprijzen.
                  </p>
                  <p className="no-margin">
                    <Link
                      href="https://www.test-aankoop.be/overzichtspagina?type=comparators-and-calculators"
                      className="btn btn--tertiary uppercase"
                      target=""
                      title="Gebruik onze tools"
                    >
                      Gebruik onze tools
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          className="overlay hidden"
          data-selector="overlay"
          data-plugin="form"
          data-plugin-settings="#overlay-settings"
        >
          <input
            type="hidden"
            id="overlaycurrentUrlPage"
            name="overlaycurrentUrlPage"
            className="form__field--submit-form"
            defaultValue=""
          />
        </div>
      </main>
      <footer
        data-type="ALineFooterController"
        data-rendering="Footercontainer"
        className="main-footer padding--bottom-xsmall"
      >
        <div className="main-footer__newsletter padding--top-medium padding--bottom-medium">
          <div className="constrained">
            <div className="flex__row main-footer__newsletter__link">
              <div className="flex__col flex__col-xs-narrow">Ontvang onze nieuwsbrief</div>
              <div className="flex__col flex__col-xs-narrow">
                <span data-plugin="iframeAuthentication">
                  <Link
                    data-plugin="modal"
                    data-popup-type="inline"
                    href="#aline-authentication-modal"
                    className="noclasses"
                    data-register-url="https://login.test-aankoop.be/?wa=registeruser1.0&wtrealm=eur%3a%2f%2feuroconsumers.pro.alinesc.nl-be%2f&wreply=https%3a%2f%2fwww.test-aankoop.be%2fCommonAPI%2fCommonBeanTrigger%2fSendLoginOkMessage%3fReturnUrl%3dsec%253a%252f%252frealm%252feuroconsumers.pro.sitecorecd.nl-be%252fBirTCBSjBKo47qJwJZPxpR-tTeEZ4n7Kdb9-FjmNZJzJ_wisWcpNc-W3YwgUJjbpOLK0o44YXHG-xFdkYZXUmFDXemtynbiRwPeXrIFBzGN57uh01D1W1oGyuJBp8cFi7MOjQUDZClMyEHeIlVZzt6ZOchB-CmfBU0jU7dwDFjFhwbnyB5hbo0CJVll6dMv8o3uMUV6ckQd1__zzIwon9PrWwEQ1&ectx=Y3Q6aG9tZXBhZ2VfYWxpbmVob21fbm9uZS5uZXdzMG4&customstyle=alineiframev3footernewsletter"
                    data-selector="aline-authentication-modal--btn-trigger"
                    data-aline-authentication-target="register"
                  >
                    Ik registreer me{' '}
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="constrained">
          <div className="flex__row main-footer__top padding--top-small">
            <div className="flex__col flex__col-xs-narrow" data-selector="footer-contact-left">
              <p className="no-margin">
                <Link
                  href="tel:025423232"
                  className="btn btn--primary btn--pill stronger"
                  data-selector="footer-contact-link"
                >
                  <i className="icon-phone padding--right-xsmall" />
                  02 542 32 32
                </Link>
              </p>
            </div>
            <div
              className="flex__col-xs-narrow main-footer__top__info"
              data-selector="footer-contact-right"
            >
              <p className="no-margin" data-selector="footer-contact-text"></p>
              <p>
                <strong className="block">
                  <Link href="/contact/contacteer-ons" target="_self">
                    Alle contactgegevens
                  </Link>
                </strong>
              </p>
              <p>Ma tot vr 9-12.30u / 13-17u (vr tot 16u)</p>
              <p />
            </div>
            <div
              className="flex__col-xs-12 flex__col-sm-12 flex__col-md-narrow margin--left-auto margin--right-auto main-footer__top__links"
              data-selector="footer-mainlinks"
            >
              <Link
                href="/alle-inhoud/magazines"
                className="strong"
                data-selector="footer-mainlinks-link"
              >
                Magazines
              </Link>
              <Link
                href="https://www.test-aankoop.be/applications"
                className="strong"
                data-selector="footer-mainlinks-link"
              >
                Mobiele applicaties
              </Link>
              <Link
                href="https://ontdek.test-aankoop.be/2023/marketplace?cop_id_c=Link&par_id_c=Web4&prm_id_c=FOOTER1F"
                className="strong"
                data-selector="footer-mainlinks-link"
                target="_blank"
              >
                Word lid
              </Link>{' '}
            </div>
          </div>
          <div
            className="flex__row main-footer__content padding--top-small padding--bottom-small"
            data-plugin="collapsible"
            data-plugin-settings="#footer-collapsible-settings"
            data-selector="footer-grouped-links"
          >
            <div className="flex__col-xs-12 flex__col-sm-6 flex__col-md-3 collapsible__item">
              <p className="collapsible__head strong no-margin">
                Doe mee met ons
                <i className="icon icon-chevron-down" />
              </p>
              <ul className="collapsible__content no-margin" style={{ display: 'none' }}>
                <li>
                  <Link href="/klagen" data-selector="footer-grouped-link">
                    Verstuur een klacht
                  </Link>
                </li>
                <li>
                  <Link href="/overzicht-acties" data-selector="footer-grouped-link">
                    Voer actie met ons
                  </Link>
                </li>
                <li>
                  <Link href="/live" data-selector="footer-grouped-link">
                    Bekijk onze Live uitzendingen{' '}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://detesters.be/"
                    data-selector="footer-grouped-link"
                    target="_blank"
                  >
                    De Testers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex__col-xs-12 flex__col-sm-6 flex__col-md-3 collapsible__item">
              <p className="collapsible__head strong no-margin">
                Populair
                <i className="icon icon-chevron-down" />
              </p>
              <ul className="collapsible__content no-margin" style={{ display: 'none' }}>
                <li>
                  <Link
                    href="/hightech/gsms-en-smartphones/vergelijker"
                    data-selector="footer-grouped-link"
                  >
                    Smartphones
                  </Link>
                </li>
                <li>
                  <Link href="/hightech/tv-s/vergelijker" data-selector="footer-grouped-link">
                    Televisies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/woning-energie/gas-elektriciteit-mazout-pellets/simulator"
                    data-selector="footer-grouped-link"
                  >
                    Energie
                  </Link>
                </li>
                <li>
                  <Link href="/hightech/telecom/simulator" data-selector="footer-grouped-link">
                    Telecom
                  </Link>
                </li>
                <li>
                  <Link
                    href="/huishoudelektro/keukenrobots/vergelijker"
                    data-selector="footer-grouped-link"
                  >
                    Keukenrobots
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex__col-xs-12 flex__col-sm-6 flex__col-md-3 collapsible__item">
              <p className="collapsible__head strong no-margin">
                Voor leden
                <i className="icon icon-chevron-down" />
              </p>
              <ul className="collapsible__content no-margin" style={{ display: 'none' }}>
                <li>
                  <Link
                    href="https://www.test-aankoop.be/overzichtspagina?type=standard-letters"
                    data-selector="footer-grouped-link"
                  >
                    Onze modeldocumenten
                  </Link>
                </li>
                <li>
                  <Link href="/info/ledenvoordelen" data-selector="footer-grouped-link">
                    Ledenvoordelen
                  </Link>
                </li>
                <li>
                  <Link href="/aanbod" data-selector="footer-grouped-link">
                    Ons aanbod
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.test-aankoop.be/mijngegevens/help"
                    data-selector="footer-grouped-link"
                  >
                    Veelgestelde vragen
                  </Link>
                </li>
                <li>
                  <Link href="/ta-and-me" data-selector="footer-grouped-link">
                    TA&amp;Me applicatie
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex__col-xs-12 flex__col-sm-6 flex__col-md-3 collapsible__item">
              <p className="collapsible__head strong no-margin">
                Over Testaankoop
                <i className="icon icon-chevron-down" />
              </p>
              <ul className="collapsible__content no-margin" style={{ display: 'none' }}>
                <li>
                  <Link href="/info/onze-waarden" data-selector="footer-grouped-link">
                    Onze waarden
                  </Link>
                </li>
                <li>
                  <Link href="/info/transparantie" data-selector="footer-grouped-link">
                    Onze financieringsbronnen
                  </Link>
                </li>
                <li>
                  <Link href="/gefinancierde-projecten" data-selector="footer-grouped-link">
                    Gefinancierde projecten
                  </Link>
                </li>
                <li>
                  <Link href="/info/ta-labels" data-selector="footer-grouped-link">
                    Onze labels in je winkelrek
                  </Link>
                </li>
                <li>
                  <Link href="/werken-bij-test-aankoop" data-selector="footer-grouped-link">
                    Werken bij Testaankoop
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex__row flex__row--no-gutter main-footer__bottom">
            <div className="flex__col-xs-12 flex__col-md-auto">
              <div className="flex__row flex__row--no-gutter" data-selector="footer-legal">
                <div className="flex__col-xs-12 main-footer__bottom__links">
                  <span className="margin--right-xsmall">© 2025 Testaankoop</span>
                  <Link
                    href="/info/beleid-inzake-cookies"
                    className="margin--right-xsmall strong"
                    data-selector="footer-legal-link"
                  >
                    Beleid inzake cookies
                  </Link>
                  <Link
                    href="https://www.test-aankoop.be/info/algemene-voorwaarden"
                    className="margin--right-xsmall strong"
                    data-selector="footer-legal-link"
                  >
                    Algemene voorwaarden
                  </Link>
                  <Link
                    href="/info/privacy"
                    className="margin--right-xsmall strong"
                    data-selector="footer-legal-link"
                  >
                    Privacy
                  </Link>
                  <Link
                    href="/info/verantwoordelijke-uitgever"
                    className="margin--right-xsmall strong"
                    data-selector="footer-legal-link"
                  >
                    Verantwoordelijke uitgever
                  </Link>
                  <Link
                    href="/info/auteursrecht"
                    className="margin--right-xsmall strong"
                    data-selector="footer-legal-link"
                  >
                    Auteursrecht
                  </Link>
                  <Link
                    href="https://www.test-achats.be"
                    className="margin--right-xsmall strong"
                    data-selector="footer-legal-link"
                  >
                    Version française
                  </Link>
                </div>
                <div
                  className="flex__col-xs-12 main-footer__bottom__social"
                  data-selector="footer-social"
                >
                  <Link
                    href="https://www.facebook.com/profile.php?id=100064172166175"
                    className="margin--right-xsmall"
                    aria-label="facebook"
                    data-selector="footer-social-link"
                    title="facebook"
                  >
                    {' '}
                    <i className="icon-facebook" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/testaankoop/"
                    className="margin--right-xsmall"
                    aria-label="Instagram"
                    data-selector="footer-social-link"
                    title="Instagram"
                  >
                    {' '}
                    <i className="icon-instagram" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/test-aankoop/?viewAsMember=true"
                    className="margin--right-xsmall"
                    aria-label="LinkedIn"
                    data-selector="footer-social-link"
                    title="LinkedIn"
                  >
                    {' '}
                    <i className="icon-linkedin" />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@test.aankoop"
                    className="margin--right-xsmall"
                    aria-label="tiktok"
                    data-selector="footer-social-link"
                    title="tiktok"
                  >
                    {' '}
                    <i className="icon-tiktok" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/user/Testaankoopvideo"
                    className="margin--right-xsmall"
                    aria-label="youtube"
                    data-selector="footer-social-link"
                    title="youtube"
                  >
                    {' '}
                    <i className="icon-youtube-play" />
                  </Link>
                  <Link
                    href="https://www.test-aankoop.be/rss"
                    className="margin--right-xsmall"
                    aria-label="RSS"
                    data-selector="footer-social-link"
                    title="RSS"
                  >
                    {' '}
                    <i className="icon-rss" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="flex__col-xs-12 flex__col-md-narrow main-footer__bottom__logo"
              data-selector="footer-logo"
            >
              <Link href="#">
                <img
                  data-src="https://www.test-aankoop.be/-/media/ta/ta-logos-2022/footer-nl/logo-nl-be--footer-v2.png?rev=527c5bff-e27c-43ec-973a-abecf5f71a2d&la=nl-BE&h=30&mw=150&w=150&hash=7A98309A8576F93EDDB925A4C1B61734"
                  className="no-margin img--medium"
                  height={30}
                  data-selector="footer-logo-image"
                  alt="testaankoop"
                  data-plugin="imageComponent"
                  width={150}
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div
        id="f7cfc672-78d9-4306-a1b4-2870ccebcbc3"
        className="sticky-banner-footer mobile-only hidden"
        data-selector="sticky-banner-footer"
        data-value=""
      >
        <div className="bannerContent">
          <div className="hidden bannerContentHidden">
            <div className="bannerContentHiddenTitle stronger">
              Kies deze airfryer of een van de 150 andere cadeau&quot;s
            </div>
            <Link
              href="https://ontdek.test-aankoop.be/2023/newmarketplace?prm_id_c=MOBBAN1N&cop_id_c=Smartphone&par_id_c=SubscribeButton&server=flbk "
              target=""
            ></Link>
          </div>
          <div className="bannerContentToggler">
            <i className="icon-chevron-up" />
          </div>
          <div className="bannerContentMain">
            <div className="bannerContentMainActions">
              <div className="bannerContentMainActionsLeft" />
              <div className="bannerContentMainActionsCenter">
                <div>
                  <Link
                    href="https://ontdek.test-aankoop.be/2023/newmarketplace?prm_id_c=MOBBAN1N&cop_id_c=Smartphone&par_id_c=SubscribeButton&server=flbk "
                    target=""
                    className="btn btn--pill"
                  >
                    WORD LID
                  </Link>
                </div>
              </div>
              <div className="bannerContentMainActionsRight">
                <div className="bannerContentMainActionsClose hidden">
                  <i className="icon-x" />
                </div>
              </div>
            </div>
            <div className="bannerContentMainCaption uppercase">Ontdek Testaankoop voor €2</div>
          </div>
        </div>
      </div>
      <div id="authentication-callout-bookmark" className="mfp-hide">
        <h2 className="stronger">Meld je aan om dit artikel te bewaren.</h2>
        <p />
        <p>
          {/*Button Login Open Modal */}
          <span data-plugin="iframeAuthentication">
            <Link
              data-plugin="modal"
              data-popup-type="inline"
              href="#aline-authentication-modal"
              className="btn btn--primary btn--large btn btn--large btn--primary"
              data-login-url="https://login.test-aankoop.be/?wa=wsignin1.0&wtrealm=eur%3a%2f%2feuroconsumers.pro.alinesc.nl-be%2f&wreply=https%3a%2f%2fwww.test-aankoop.be%2fCommonAPI%2fCommonBeanTrigger%2fSendLoginOkMessage%3fReturnUrl%3dsec%253a%252f%252frealm%252feuroconsumers.pro.sitecorecd.nl-be%252fQXWmAPQN7bHGdmqzWr_Gbfhm0UyRsNOzyGjFLtyjriOMeVgAyGh3P-iTF3jO6vzUtF-EViOja18XM2R9EaUZX61U80xPo_5rkjFCkHQ9t2ODvcgjtXJhMw8nst6PkvlBiSKKrlrU0jYigSpJp5Dh5MiI3nNWDFnIOzYV1RXfi7yguajZ0&ectx=Y3Q6YWxpbmUtaG9tZQ&customstyle=alineiframev3"
              data-selector="aline-authentication-modal--btn-trigger"
              data-aline-authentication-target="login"
              data-aline-authentication-source="aline"
            >
              Aanmelden
            </Link>
          </span>
          {/*Textlink Create-Account Open Modal */}
          <span data-plugin="iframeAuthentication">
            <Link
              href="#aline-authentication-modal"
              data-register-url="https://login.test-aankoop.be/?wa=registeruser1.0&wtrealm=eur%3a%2f%2feuroconsumers.pro.alinesc.nl-be%2f&wreply=https%3a%2f%2fwww.test-aankoop.be%2fCommonAPI%2fCommonBeanTrigger%2fSendLoginOkMessage%3fReturnUrl%3dsec%253a%252f%252frealm%252feuroconsumers.pro.sitecorecd.nl-be%252fWkhYEnWFe7Yxm0AubwhyocoN57HDrMSd-eDJrx2ZylzaSs7Eo-PCAq7bnOikQOomttk8jLN_0xcIRKeBsHJkqy2nHftxovI6lwwFAXmv1XEdwr2bIVh0jaZAI4RwNrROHmEdOSLZd5Culqo7RDPt6xFIsRGN2tIMOOiTMmpjhsQ8QWIMk5ptSir9t5DEsn9Ae2OLYoR4v7m88tx4askYqlMA7SE1&ectx=Y3Q6aG9tZXBhZ2VfYWxpbmVob21fbm9uZS5lZHNhdmUwbg&customstyle=alineiframev3"
              data-plugin="modal"
              data-popup-type="inline"
              data-selector="aline-authentication-modal--btn-trigger"
              data-aline-authentication-target="register"
              data-aline-authentication-source="aline"
            >
              Registreren
            </Link>
          </span>
        </p>
      </div>
      <div className="hidden">
        <div
          id="aline-authentication-modal"
          className="authentication mpf-hide popup"
          data-plugin="iframeAuthentication"
          data-a_theme="aline"
          data-safaricheckanddisable="false"
          data-thirdpartycookiescheck="false"
        >
          <div className="popup__inner popup--large relative">
            <div className="waiting" />
            <iframe
              data-selector="aline-authentication-modal-iframe"
              frameBorder={0}
              height={600}
              style={{ visibility: 'hidden' }}
            />
          </div>
        </div>
      </div>
      <input
        id="errorMessage"
        hidden
        defaultValue="Het spijt ons, dit onderdeel kon niet geladen worden."
        data-elementload="elementload_error"
      />
      {/* temporary fix for the misalignment of the Table of Contents circles */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n#table-of-content ul.list-inline.no-margin {\n    padding-left: 0;\n    margin: 0 !important;\n    padding-top: 15px;\n}\n',
        }}
      />
      {/* Fix for the misalignment of the Authors list pipes on the articles */}
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n.piped-list__item strong, .content-lede__info .piped-list__item.strong{\nwhite-space:normal;\n}\n.content-lede__info ul.piped-list.right {width: 100%; text-align: right;}\n',
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            ' \n.component-detail-header__shortcuts--icons .specialist-icon {background: rgb(191,1,111);background: linear-gradient(0deg, rgba(191,1,111,1) 50%, rgba(251,86,40,1) 50%);height: 2.5rem !important;border-radius: 100%;}\n.collapsible-box__head--icon.specialist-icon {width: 3rem !important;height: 3rem !important;background: rgb(191,1,111);background: linear-gradient(0deg, rgba(191,1,111,1) 50%, rgba(251,86,40,1) 50%);border-radius: 100%;}\n\n.popup button.icon-x.mfp-close:before {top: 0.2rem;}\n',
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n.compare-table__cell--populated .healthy-scale {display: inline-block;align-items: center;padding-right: 0.5rem;cursor: pointer;} \n\n.compare-table__cell--populated .healthy-scale--1, .compare-table__cell--populated .healthy-scale--2, .compare-table__cell--populated .healthy-scale--3, .compare-table__cell--populated .healthy-scale--4, .compare-table__cell--populated .healthy-scale--5 {width: 5rem;display: inline-block;}\n\n.compare-table__cell--populated .healthy-scale--1--score, .compare-table__cell--populated .healthy-scale--2--score, .compare-table__cell--populated .healthy-scale--3--score, .compare-table__cell--populated .healthy-scale--4--score, .compare-table__cell--populated .healthy-scale--5--score {font-size: 2.5rem;}\n\n.filters-container .filters_button .btn--filters { text-transform: none !important; }\n',
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n.icon-stars--0, .icon-stars--0-half, .icon-stars--1, .icon-stars--1-half, .icon-stars--2, .icon-stars--2-half, .icon-stars--3, .icon-stars--3-half, .icon-stars--4, .icon-stars--4-half, .icon-stars--5 { background-repeat: no-repeat !important; content: none !important;}\n\n.icon-stars--0{background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMTAuNCA1Ni44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuNCA1Ni44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZGlzcGxheTpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZGlzcGxheTpub25lO30NCgkuc3Qze2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0yNDYuNCAyMy4zLC0yMjYuNCAxLjksLTIyNi40IDE5LjcsLTIxMy42IDEyLjUsLTE5MyAzMC41LC0yMDUuNCA0OC40LC0xOTMgNDEuMywtMjEzLjMgDQoJNTkuMiwtMjI2LjMgMzgsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0yNDYuNCA4NS40LC0yMjYuNCA2NCwtMjI2LjQgODEuOCwtMjEzLjYgNzQuNiwtMTkzIDkyLjcsLTIwNS40IDExMC42LC0xOTMgMTAzLjQsLTIxMy4zIA0KCTEyMS4zLC0yMjYuMyAxMDAuMSwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0yNDYuNCAxNDcuNSwtMjI2LjQgMTI2LjEsLTIyNi40IDE0My45LC0yMTMuNiAxMzYuNywtMTkzIDE1NC44LC0yMDUuNCAxNzIuNywtMTkzIA0KCTE2NS41LC0yMTMuMyAxODMuNCwtMjI2LjMgMTYyLjIsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyMTYuOSwtMjQ2LjQgMjA5LjYsLTIyNi40IDE4OC4yLC0yMjYuNCAyMDYuMSwtMjEzLjYgMTk4LjgsLTE5MyAyMTYuOSwtMjA1LjQgMjM0LjgsLTE5MyANCgkyMjcuNiwtMjEzLjMgMjQ1LjYsLTIyNi4zIDIyNC4zLC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjc5LC0yNDYuNCAyNzEuNywtMjI2LjQgMjUwLjQsLTIyNi40IDI2OC4yLC0yMTMuNiAyNjEsLTE5MyAyNzksLTIwNS40IDI5Ni45LC0xOTMgMjg5LjgsLTIxMy4zIA0KCTMwNy43LC0yMjYuMyAyODYuNCwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTE4NC42IDIzLjMsLTE2NC42IDEuOSwtMTY0LjYgMTkuNywtMTUxLjggMTIuNSwtMTMxLjIgMzAuNSwtMTQzLjYgNDguNCwtMTMxLjIgNDEuMywtMTUxLjYgDQoJNTkuMiwtMTY0LjUgMzgsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0xODQuNiA4NS40LC0xNjQuNiA2NCwtMTY0LjYgODEuOCwtMTUxLjggNzQuNiwtMTMxLjIgOTIuNywtMTQzLjYgMTEwLjYsLTEzMS4yIDEwMy40LC0xNTEuNiANCgkxMjEuMywtMTY0LjUgMTAwLjEsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTg0LjYgMTQ3LjUsLTE2NC42IDEyNi4xLC0xNjQuNiAxNDMuOSwtMTUxLjggMTM2LjcsLTEzMS4yIDE1NC44LC0xNDMuNiAxNzIuNywtMTMxLjIgDQoJMTY1LjUsLTE1MS42IDE4My40LC0xNjQuNSAxNjIuMiwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxNi45LC0xODQuNiAyMDkuNiwtMTY0LjYgMTg4LjIsLTE2NC42IDIwNi4xLC0xNTEuOCAxOTguOCwtMTMxLjIgMjE2LjksLTE0My42IDIzNC44LC0xMzEuMiANCgkyMjcuNiwtMTUxLjYgMjQ1LjYsLTE2NC41IDIyNC4zLC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjc5LC0xODQuNiAyNzEuNywtMTY0LjYgMjUwLjQsLTE2NC42IDI2OC4yLC0xNTEuOCAyNjEsLTEzMS4yIDI3OSwtMTQzLjYgMjk2LjksLTEzMS4yIDI4OS44LC0xNTEuNiANCgkzMDcuNywtMTY0LjUgMjg2LjQsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0xMjIuMyAyMy4zLC0xMDIuMyAxLjksLTEwMi4zIDE5LjcsLTg5LjUgMTIuNSwtNjguOSAzMC41LC04MS4zIDQ4LjQsLTY4LjkgNDEuMywtODkuMyANCgk1OS4yLC0xMDIuMiAzOCwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTEyMi4zIDg1LjQsLTEwMi4zIDY0LC0xMDIuMyA4MS44LC04OS41IDc0LjYsLTY4LjkgOTIuNywtODEuMyAxMTAuNiwtNjguOSAxMDMuNCwtODkuMyANCgkxMjEuMywtMTAyLjIgMTAwLjEsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTIyLjMgMTQ3LjUsLTEwMi4zIDEyNi4xLC0xMDIuMyAxNDMuOSwtODkuNSAxMzYuNywtNjguOSAxNTQuOCwtODEuMyAxNzIuNywtNjguOSAxNjUuNSwtODkuMyANCgkxODMuNCwtMTAyLjIgMTYyLjIsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtMTIyLjMgMjA5LjYsLTEwMi4zIDE4OC4yLC0xMDIuMyAyMDYuMSwtODkuNSAxOTguOCwtNjguOSAyMTYuOSwtODEuMyAyMzQuOCwtNjguOSAyMjcuNiwtODkuMyANCgkyNDUuNiwtMTAyLjIgMjI0LjMsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTEyMi4zIDI3MS43LC0xMDIuMyAyNTAuNCwtMTAyLjMgMjY4LjIsLTg5LjUgMjYxLC02OC45IDI3OSwtODEuMyAyOTYuOSwtNjguOSAyODkuOCwtODkuMyANCgkzMDcuNywtMTAyLjIgMjg2LjQsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC02MC44IDIzLjMsLTQwLjggMS45LC00MC44IDE5LjcsLTI4IDEyLjUsLTcuNCAzMC41LC0xOS44IDQ4LjQsLTcuNCA0MS4zLC0yNy43IDU5LjIsLTQwLjcgDQoJMzgsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTYwLjggODUuNCwtNDAuOCA2NCwtNDAuOCA4MS44LC0yOCA3NC42LC03LjQgOTIuNywtMTkuOCAxMTAuNiwtNy40IDEwMy40LC0yNy43IDEyMS4zLC00MC43IA0KCTEwMC4xLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwtNjAuOCAxNDcuNSwtNDAuOCAxMjYuMSwtNDAuOCAxNDMuOSwtMjggMTM2LjcsLTcuNCAxNTQuOCwtMTkuOCAxNzIuNywtNy40IDE2NS41LC0yNy43IA0KCTE4My40LC00MC43IDE2Mi4yLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtNjAuOCAyMDkuNiwtNDAuOCAxODguMiwtNDAuOCAyMDYuMSwtMjggMTk4LjgsLTcuNCAyMTYuOSwtMTkuOCAyMzQuOCwtNy40IDIyNy42LC0yNy43IA0KCTI0NS42LC00MC43IDIyNC4zLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTYwLjggMjcxLjcsLTQwLjggMjUwLjQsLTQwLjggMjY4LjIsLTI4IDI2MSwtNy40IDI3OSwtMTkuOCAyOTYuOSwtNy40IDI4OS44LC0yNy43IDMwNy43LC00MC43IA0KCTI4Ni40LC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LDIgMjMuMywyMiAxLjksMjIgMTkuNywzNC44IDEyLjUsNTUuNCAzMC41LDQzIDQ4LjQsNTUuNCA0MS4zLDM1LjEgNTkuMiwyMi4xIDM4LDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjkyLjcsMiA4NS40LDIyIDY0LDIyIDgxLjgsMzQuOCA3NC42LDU1LjQgOTIuNyw0MyAxMTAuNiw1NS40IDEwMy40LDM1LjEgMTIxLjMsMjIuMSAxMDAuMSwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwyIDE0Ny41LDIyIDEyNi4xLDIyIDE0My45LDM0LjggMTM2LjcsNTUuNCAxNTQuOCw0MyAxNzIuNyw1NS40IDE2NS41LDM1LjEgMTgzLjQsMjIuMSANCgkxNjIuMiwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwyIDIwOS42LDIyIDE4OC4yLDIyIDIwNi4xLDM0LjggMTk4LjgsNTUuNCAyMTYuOSw0MyAyMzQuOCw1NS40IDIyNy42LDM1LjEgMjQ1LjYsMjIuMSANCgkyMjQuMywyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksMiAyNzEuNywyMiAyNTAuNCwyMiAyNjguMiwzNC44IDI2MSw1NS40IDI3OSw0MyAyOTYuOSw1NS40IDI4OS44LDM1LjEgMzA3LjcsMjIuMSAyODYuNCwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIzMC41LDY5LjYgMjMuMyw4OS42IDEuOSw4OS41IDE5LjcsMTAyLjQgMTIuNSwxMjMgMzAuNSwxMTAuNSA0OC4xLDEyMiA0MS4zLDEwMi42IDU5LjIsODkuNyAzOCw4OS43IA0KCSIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMzAuNSIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjkyLjciIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIxNTUuOCIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjIxNi45IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGVsbGlwc2UgdHJhbnNmb3JtPSJtYXRyaXgoMC4yMjk4IC0wLjk3MzIgMC45NzMyIDAuMjI5OCAxODYuOTY2NyAyOTMuNjQyNikiIGNsYXNzPSJzdDMiIGN4PSIyNzkiIGN5PSIyOC43IiByeD0iMjYuNyIgcnk9IjI2LjciLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMC41LDU1LjRjLTE0LjcsMC0yNi43LTEyLTI2LjctMjYuN1MxNS44LDIsMzAuNSwyVjU1LjR6Ii8+DQo8L3N2Zz4NCg==");}\n\n.icon-stars--0-half{background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMTAuNCA1Ni44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuNCA1Ni44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZGlzcGxheTpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZGlzcGxheTpub25lO30NCgkuc3Qze2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0NHtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0yNDYuNCAyMy4zLC0yMjYuNCAxLjksLTIyNi40IDE5LjcsLTIxMy42IDEyLjUsLTE5MyAzMC41LC0yMDUuNCA0OC40LC0xOTMgNDEuMywtMjEzLjMgDQoJNTkuMiwtMjI2LjMgMzgsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0yNDYuNCA4NS40LC0yMjYuNCA2NCwtMjI2LjQgODEuOCwtMjEzLjYgNzQuNiwtMTkzIDkyLjcsLTIwNS40IDExMC42LC0xOTMgMTAzLjQsLTIxMy4zIA0KCTEyMS4zLC0yMjYuMyAxMDAuMSwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0yNDYuNCAxNDcuNSwtMjI2LjQgMTI2LjEsLTIyNi40IDE0My45LC0yMTMuNiAxMzYuNywtMTkzIDE1NC44LC0yMDUuNCAxNzIuNywtMTkzIA0KCTE2NS41LC0yMTMuMyAxODMuNCwtMjI2LjMgMTYyLjIsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyMTYuOSwtMjQ2LjQgMjA5LjYsLTIyNi40IDE4OC4yLC0yMjYuNCAyMDYuMSwtMjEzLjYgMTk4LjgsLTE5MyAyMTYuOSwtMjA1LjQgMjM0LjgsLTE5MyANCgkyMjcuNiwtMjEzLjMgMjQ1LjYsLTIyNi4zIDIyNC4zLC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjc5LC0yNDYuNCAyNzEuNywtMjI2LjQgMjUwLjQsLTIyNi40IDI2OC4yLC0yMTMuNiAyNjEsLTE5MyAyNzksLTIwNS40IDI5Ni45LC0xOTMgMjg5LjgsLTIxMy4zIA0KCTMwNy43LC0yMjYuMyAyODYuNCwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTE4NC42IDIzLjMsLTE2NC42IDEuOSwtMTY0LjYgMTkuNywtMTUxLjggMTIuNSwtMTMxLjIgMzAuNSwtMTQzLjYgNDguNCwtMTMxLjIgNDEuMywtMTUxLjYgDQoJNTkuMiwtMTY0LjUgMzgsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0xODQuNiA4NS40LC0xNjQuNiA2NCwtMTY0LjYgODEuOCwtMTUxLjggNzQuNiwtMTMxLjIgOTIuNywtMTQzLjYgMTEwLjYsLTEzMS4yIDEwMy40LC0xNTEuNiANCgkxMjEuMywtMTY0LjUgMTAwLjEsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTg0LjYgMTQ3LjUsLTE2NC42IDEyNi4xLC0xNjQuNiAxNDMuOSwtMTUxLjggMTM2LjcsLTEzMS4yIDE1NC44LC0xNDMuNiAxNzIuNywtMTMxLjIgDQoJMTY1LjUsLTE1MS42IDE4My40LC0xNjQuNSAxNjIuMiwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxNi45LC0xODQuNiAyMDkuNiwtMTY0LjYgMTg4LjIsLTE2NC42IDIwNi4xLC0xNTEuOCAxOTguOCwtMTMxLjIgMjE2LjksLTE0My42IDIzNC44LC0xMzEuMiANCgkyMjcuNiwtMTUxLjYgMjQ1LjYsLTE2NC41IDIyNC4zLC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjc5LC0xODQuNiAyNzEuNywtMTY0LjYgMjUwLjQsLTE2NC42IDI2OC4yLC0xNTEuOCAyNjEsLTEzMS4yIDI3OSwtMTQzLjYgMjk2LjksLTEzMS4yIDI4OS44LC0xNTEuNiANCgkzMDcuNywtMTY0LjUgMjg2LjQsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0xMjIuMyAyMy4zLC0xMDIuMyAxLjksLTEwMi4zIDE5LjcsLTg5LjUgMTIuNSwtNjguOSAzMC41LC04MS4zIDQ4LjQsLTY4LjkgNDEuMywtODkuMyANCgk1OS4yLC0xMDIuMiAzOCwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTEyMi4zIDg1LjQsLTEwMi4zIDY0LC0xMDIuMyA4MS44LC04OS41IDc0LjYsLTY4LjkgOTIuNywtODEuMyAxMTAuNiwtNjguOSAxMDMuNCwtODkuMyANCgkxMjEuMywtMTAyLjIgMTAwLjEsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTIyLjMgMTQ3LjUsLTEwMi4zIDEyNi4xLC0xMDIuMyAxNDMuOSwtODkuNSAxMzYuNywtNjguOSAxNTQuOCwtODEuMyAxNzIuNywtNjguOSAxNjUuNSwtODkuMyANCgkxODMuNCwtMTAyLjIgMTYyLjIsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtMTIyLjMgMjA5LjYsLTEwMi4zIDE4OC4yLC0xMDIuMyAyMDYuMSwtODkuNSAxOTguOCwtNjguOSAyMTYuOSwtODEuMyAyMzQuOCwtNjguOSAyMjcuNiwtODkuMyANCgkyNDUuNiwtMTAyLjIgMjI0LjMsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTEyMi4zIDI3MS43LC0xMDIuMyAyNTAuNCwtMTAyLjMgMjY4LjIsLTg5LjUgMjYxLC02OC45IDI3OSwtODEuMyAyOTYuOSwtNjguOSAyODkuOCwtODkuMyANCgkzMDcuNywtMTAyLjIgMjg2LjQsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC02MC44IDIzLjMsLTQwLjggMS45LC00MC44IDE5LjcsLTI4IDEyLjUsLTcuNCAzMC41LC0xOS44IDQ4LjQsLTcuNCA0MS4zLC0yNy43IDU5LjIsLTQwLjcgDQoJMzgsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTYwLjggODUuNCwtNDAuOCA2NCwtNDAuOCA4MS44LC0yOCA3NC42LC03LjQgOTIuNywtMTkuOCAxMTAuNiwtNy40IDEwMy40LC0yNy43IDEyMS4zLC00MC43IA0KCTEwMC4xLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwtNjAuOCAxNDcuNSwtNDAuOCAxMjYuMSwtNDAuOCAxNDMuOSwtMjggMTM2LjcsLTcuNCAxNTQuOCwtMTkuOCAxNzIuNywtNy40IDE2NS41LC0yNy43IA0KCTE4My40LC00MC43IDE2Mi4yLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtNjAuOCAyMDkuNiwtNDAuOCAxODguMiwtNDAuOCAyMDYuMSwtMjggMTk4LjgsLTcuNCAyMTYuOSwtMTkuOCAyMzQuOCwtNy40IDIyNy42LC0yNy43IA0KCTI0NS42LC00MC43IDIyNC4zLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTYwLjggMjcxLjcsLTQwLjggMjUwLjQsLTQwLjggMjY4LjIsLTI4IDI2MSwtNy40IDI3OSwtMTkuOCAyOTYuOSwtNy40IDI4OS44LC0yNy43IDMwNy43LC00MC43IA0KCTI4Ni40LC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LDIgMjMuMywyMiAxLjksMjIgMTkuNywzNC44IDEyLjUsNTUuNCAzMC41LDQzIDQ4LjQsNTUuNCA0MS4zLDM1LjEgNTkuMiwyMi4xIDM4LDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjkyLjcsMiA4NS40LDIyIDY0LDIyIDgxLjgsMzQuOCA3NC42LDU1LjQgOTIuNyw0MyAxMTAuNiw1NS40IDEwMy40LDM1LjEgMTIxLjMsMjIuMSAxMDAuMSwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwyIDE0Ny41LDIyIDEyNi4xLDIyIDE0My45LDM0LjggMTM2LjcsNTUuNCAxNTQuOCw0MyAxNzIuNyw1NS40IDE2NS41LDM1LjEgMTgzLjQsMjIuMSANCgkxNjIuMiwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwyIDIwOS42LDIyIDE4OC4yLDIyIDIwNi4xLDM0LjggMTk4LjgsNTUuNCAyMTYuOSw0MyAyMzQuOCw1NS40IDIyNy42LDM1LjEgMjQ1LjYsMjIuMSANCgkyMjQuMywyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksMiAyNzEuNywyMiAyNTAuNCwyMiAyNjguMiwzNC44IDI2MSw1NS40IDI3OSw0MyAyOTYuOSw1NS40IDI4OS44LDM1LjEgMzA3LjcsMjIuMSAyODYuNCwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIzMC41LDY5LjYgMjMuMyw4OS42IDEuOSw4OS41IDE5LjcsMTAyLjQgMTIuNSwxMjMgMzAuNSwxMTAuNSA0OC4xLDEyMiA0MS4zLDEwMi42IDU5LjIsODkuNyAzOCw4OS43IA0KCSIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMzAuNSIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjkyLjciIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIxNTUuOCIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjIxNi45IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGVsbGlwc2UgdHJhbnNmb3JtPSJtYXRyaXgoMC4yMjk4IC0wLjk3MzIgMC45NzMyIDAuMjI5OCAxODYuOTY2NyAyOTMuNjQyNikiIGNsYXNzPSJzdDMiIGN4PSIyNzkiIGN5PSIyOC43IiByeD0iMjYuNyIgcnk9IjI2LjciLz4NCjxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0zMC41LDU1LjRjLTE0LjcsMC0yNi43LTEyLTI2LjctMjYuN1MxNS44LDIsMzAuNSwyVjU1LjR6Ii8+DQo8L3N2Zz4NCg==");}\n\n.icon-stars--1{background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMTAuNCA1Ni44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuNCA1Ni44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZGlzcGxheTpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZGlzcGxheTpub25lO30NCgkuc3Qze3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPGltYWdlIHN0eWxlPSJkaXNwbGF5Om5vbmU7b3ZlcmZsb3c6dmlzaWJsZTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB4bGluazpocmVmPSI1RTZEMTM3Qy5wbmciICB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDUuNTUzMiAzLjgyOTgpIj4NCjwvaW1hZ2U+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTI0Ni40IDIzLjMsLTIyNi40IDEuOSwtMjI2LjQgMTkuNywtMjEzLjYgMTIuNSwtMTkzIDMwLjUsLTIwNS40IDQ4LjQsLTE5MyA0MS4zLC0yMTMuMyANCgk1OS4yLC0yMjYuMyAzOCwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTI0Ni40IDg1LjQsLTIyNi40IDY0LC0yMjYuNCA4MS44LC0yMTMuNiA3NC42LC0xOTMgOTIuNywtMjA1LjQgMTEwLjYsLTE5MyAxMDMuNCwtMjEzLjMgDQoJMTIxLjMsLTIyNi4zIDEwMC4xLC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTU0LjgsLTI0Ni40IDE0Ny41LC0yMjYuNCAxMjYuMSwtMjI2LjQgMTQzLjksLTIxMy42IDEzNi43LC0xOTMgMTU0LjgsLTIwNS40IDE3Mi43LC0xOTMgDQoJMTY1LjUsLTIxMy4zIDE4My40LC0yMjYuMyAxNjIuMiwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxNi45LC0yNDYuNCAyMDkuNiwtMjI2LjQgMTg4LjIsLTIyNi40IDIwNi4xLC0yMTMuNiAxOTguOCwtMTkzIDIxNi45LC0yMDUuNCAyMzQuOCwtMTkzIA0KCTIyNy42LC0yMTMuMyAyNDUuNiwtMjI2LjMgMjI0LjMsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyNzksLTI0Ni40IDI3MS43LC0yMjYuNCAyNTAuNCwtMjI2LjQgMjY4LjIsLTIxMy42IDI2MSwtMTkzIDI3OSwtMjA1LjQgMjk2LjksLTE5MyAyODkuOCwtMjEzLjMgDQoJMzA3LjcsLTIyNi4zIDI4Ni40LC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMzAuNSwtMTg0LjYgMjMuMywtMTY0LjYgMS45LC0xNjQuNiAxOS43LC0xNTEuOCAxMi41LC0xMzEuMiAzMC41LC0xNDMuNiA0OC40LC0xMzEuMiA0MS4zLC0xNTEuNiANCgk1OS4yLC0xNjQuNSAzOCwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTE4NC42IDg1LjQsLTE2NC42IDY0LC0xNjQuNiA4MS44LC0xNTEuOCA3NC42LC0xMzEuMiA5Mi43LC0xNDMuNiAxMTAuNiwtMTMxLjIgMTAzLjQsLTE1MS42IA0KCTEyMS4zLC0xNjQuNSAxMDAuMSwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0xODQuNiAxNDcuNSwtMTY0LjYgMTI2LjEsLTE2NC42IDE0My45LC0xNTEuOCAxMzYuNywtMTMxLjIgMTU0LjgsLTE0My42IDE3Mi43LC0xMzEuMiANCgkxNjUuNSwtMTUxLjYgMTgzLjQsLTE2NC41IDE2Mi4yLC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjE2LjksLTE4NC42IDIwOS42LC0xNjQuNiAxODguMiwtMTY0LjYgMjA2LjEsLTE1MS44IDE5OC44LC0xMzEuMiAyMTYuOSwtMTQzLjYgMjM0LjgsLTEzMS4yIA0KCTIyNy42LC0xNTEuNiAyNDUuNiwtMTY0LjUgMjI0LjMsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTE4NC42IDI3MS43LC0xNjQuNiAyNTAuNCwtMTY0LjYgMjY4LjIsLTE1MS44IDI2MSwtMTMxLjIgMjc5LC0xNDMuNiAyOTYuOSwtMTMxLjIgMjg5LjgsLTE1MS42IA0KCTMwNy43LC0xNjQuNSAyODYuNCwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTEyMi4zIDIzLjMsLTEwMi4zIDEuOSwtMTAyLjMgMTkuNywtODkuNSAxMi41LC02OC45IDMwLjUsLTgxLjMgNDguNCwtNjguOSA0MS4zLC04OS4zIA0KCTU5LjIsLTEwMi4yIDM4LC0xMDIuMiAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iOTIuNywtMTIyLjMgODUuNCwtMTAyLjMgNjQsLTEwMi4zIDgxLjgsLTg5LjUgNzQuNiwtNjguOSA5Mi43LC04MS4zIDExMC42LC02OC45IDEwMy40LC04OS4zIA0KCTEyMS4zLC0xMDIuMiAxMDAuMSwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0xMjIuMyAxNDcuNSwtMTAyLjMgMTI2LjEsLTEwMi4zIDE0My45LC04OS41IDEzNi43LC02OC45IDE1NC44LC04MS4zIDE3Mi43LC02OC45IDE2NS41LC04OS4zIA0KCTE4My40LC0xMDIuMiAxNjIuMiwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LC0xMjIuMyAyMDkuNiwtMTAyLjMgMTg4LjIsLTEwMi4zIDIwNi4xLC04OS41IDE5OC44LC02OC45IDIxNi45LC04MS4zIDIzNC44LC02OC45IDIyNy42LC04OS4zIA0KCTI0NS42LC0xMDIuMiAyMjQuMywtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwtMTIyLjMgMjcxLjcsLTEwMi4zIDI1MC40LC0xMDIuMyAyNjguMiwtODkuNSAyNjEsLTY4LjkgMjc5LC04MS4zIDI5Ni45LC02OC45IDI4OS44LC04OS4zIA0KCTMwNy43LC0xMDIuMiAyODYuNCwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTYwLjggMjMuMywtNDAuOCAxLjksLTQwLjggMTkuNywtMjggMTIuNSwtNy40IDMwLjUsLTE5LjggNDguNCwtNy40IDQxLjMsLTI3LjcgNTkuMiwtNDAuNyANCgkzOCwtNDAuNyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iOTIuNywtNjAuOCA4NS40LC00MC44IDY0LC00MC44IDgxLjgsLTI4IDc0LjYsLTcuNCA5Mi43LC0xOS44IDExMC42LC03LjQgMTAzLjQsLTI3LjcgMTIxLjMsLTQwLjcgDQoJMTAwLjEsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE1NC44LC02MC44IDE0Ny41LC00MC44IDEyNi4xLC00MC44IDE0My45LC0yOCAxMzYuNywtNy40IDE1NC44LC0xOS44IDE3Mi43LC03LjQgMTY1LjUsLTI3LjcgDQoJMTgzLjQsLTQwLjcgMTYyLjIsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LC02MC44IDIwOS42LC00MC44IDE4OC4yLC00MC44IDIwNi4xLC0yOCAxOTguOCwtNy40IDIxNi45LC0xOS44IDIzNC44LC03LjQgMjI3LjYsLTI3LjcgDQoJMjQ1LjYsLTQwLjcgMjI0LjMsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwtNjAuOCAyNzEuNywtNDAuOCAyNTAuNCwtNDAuOCAyNjguMiwtMjggMjYxLC03LjQgMjc5LC0xOS44IDI5Ni45LC03LjQgMjg5LjgsLTI3LjcgMzA3LjcsLTQwLjcgDQoJMjg2LjQsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsMiAyMy4zLDIyIDEuOSwyMiAxOS43LDM0LjggMTIuNSw1NS40IDMwLjUsNDMgNDguNCw1NS40IDQxLjMsMzUuMSA1OS4yLDIyLjEgMzgsMjIuMSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iOTIuNywyIDg1LjQsMjIgNjQsMjIgODEuOCwzNC44IDc0LjYsNTUuNCA5Mi43LDQzIDExMC42LDU1LjQgMTAzLjQsMzUuMSAxMjEuMywyMi4xIDEwMC4xLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE1NC44LDIgMTQ3LjUsMjIgMTI2LjEsMjIgMTQzLjksMzQuOCAxMzYuNyw1NS40IDE1NC44LDQzIDE3Mi43LDU1LjQgMTY1LjUsMzUuMSAxODMuNCwyMi4xIA0KCTE2Mi4yLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LDIgMjA5LjYsMjIgMTg4LjIsMjIgMjA2LjEsMzQuOCAxOTguOCw1NS40IDIxNi45LDQzIDIzNC44LDU1LjQgMjI3LjYsMzUuMSAyNDUuNiwyMi4xIA0KCTIyNC4zLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwyIDI3MS43LDIyIDI1MC40LDIyIDI2OC4yLDM0LjggMjYxLDU1LjQgMjc5LDQzIDI5Ni45LDU1LjQgMjg5LjgsMzUuMSAzMDcuNywyMi4xIDI4Ni40LDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjMwLjUsNjkuNiAyMy4zLDg5LjYgMS45LDg5LjUgMTkuNywxMDIuNCAxMi41LDEyMyAzMC41LDExMC41IDQ4LjEsMTIyIDQxLjMsMTAyLjYgNTkuMiw4OS43IDM4LDg5LjcgDQoJIi8+DQo8Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIzMC41IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGNpcmNsZSBjbGFzcz0ic3Q0IiBjeD0iOTIuNyIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0NCIgY3g9IjE1NS44IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGNpcmNsZSBjbGFzcz0ic3Q0IiBjeD0iMjE2LjkiIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDQiIGN4PSIyNzkiIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8L3N2Zz4NCg==");}\n\n.icon-stars--1-half{background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMTAuNCA1Ni44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuNCA1Ni44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZGlzcGxheTpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZGlzcGxheTpub25lO30NCgkuc3Qze3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0yNDYuNCAyMy4zLC0yMjYuNCAxLjksLTIyNi40IDE5LjcsLTIxMy42IDEyLjUsLTE5MyAzMC41LC0yMDUuNCA0OC40LC0xOTMgNDEuMywtMjEzLjMgDQoJNTkuMiwtMjI2LjMgMzgsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0yNDYuNCA4NS40LC0yMjYuNCA2NCwtMjI2LjQgODEuOCwtMjEzLjYgNzQuNiwtMTkzIDkyLjcsLTIwNS40IDExMC42LC0xOTMgMTAzLjQsLTIxMy4zIA0KCTEyMS4zLC0yMjYuMyAxMDAuMSwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0yNDYuNCAxNDcuNSwtMjI2LjQgMTI2LjEsLTIyNi40IDE0My45LC0yMTMuNiAxMzYuNywtMTkzIDE1NC44LC0yMDUuNCAxNzIuNywtMTkzIA0KCTE2NS41LC0yMTMuMyAxODMuNCwtMjI2LjMgMTYyLjIsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyMTYuOSwtMjQ2LjQgMjA5LjYsLTIyNi40IDE4OC4yLC0yMjYuNCAyMDYuMSwtMjEzLjYgMTk4LjgsLTE5MyAyMTYuOSwtMjA1LjQgMjM0LjgsLTE5MyANCgkyMjcuNiwtMjEzLjMgMjQ1LjYsLTIyNi4zIDIyNC4zLC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjc5LC0yNDYuNCAyNzEuNywtMjI2LjQgMjUwLjQsLTIyNi40IDI2OC4yLC0yMTMuNiAyNjEsLTE5MyAyNzksLTIwNS40IDI5Ni45LC0xOTMgMjg5LjgsLTIxMy4zIA0KCTMwNy43LC0yMjYuMyAyODYuNCwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTE4NC42IDIzLjMsLTE2NC42IDEuOSwtMTY0LjYgMTkuNywtMTUxLjggMTIuNSwtMTMxLjIgMzAuNSwtMTQzLjYgNDguNCwtMTMxLjIgNDEuMywtMTUxLjYgDQoJNTkuMiwtMTY0LjUgMzgsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0xODQuNiA4NS40LC0xNjQuNiA2NCwtMTY0LjYgODEuOCwtMTUxLjggNzQuNiwtMTMxLjIgOTIuNywtMTQzLjYgMTEwLjYsLTEzMS4yIDEwMy40LC0xNTEuNiANCgkxMjEuMywtMTY0LjUgMTAwLjEsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTg0LjYgMTQ3LjUsLTE2NC42IDEyNi4xLC0xNjQuNiAxNDMuOSwtMTUxLjggMTM2LjcsLTEzMS4yIDE1NC44LC0xNDMuNiAxNzIuNywtMTMxLjIgDQoJMTY1LjUsLTE1MS42IDE4My40LC0xNjQuNSAxNjIuMiwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxNi45LC0xODQuNiAyMDkuNiwtMTY0LjYgMTg4LjIsLTE2NC42IDIwNi4xLC0xNTEuOCAxOTguOCwtMTMxLjIgMjE2LjksLTE0My42IDIzNC44LC0xMzEuMiANCgkyMjcuNiwtMTUxLjYgMjQ1LjYsLTE2NC41IDIyNC4zLC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjc5LC0xODQuNiAyNzEuNywtMTY0LjYgMjUwLjQsLTE2NC42IDI2OC4yLC0xNTEuOCAyNjEsLTEzMS4yIDI3OSwtMTQzLjYgMjk2LjksLTEzMS4yIDI4OS44LC0xNTEuNiANCgkzMDcuNywtMTY0LjUgMjg2LjQsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0xMjIuMyAyMy4zLC0xMDIuMyAxLjksLTEwMi4zIDE5LjcsLTg5LjUgMTIuNSwtNjguOSAzMC41LC04MS4zIDQ4LjQsLTY4LjkgNDEuMywtODkuMyANCgk1OS4yLC0xMDIuMiAzOCwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTEyMi4zIDg1LjQsLTEwMi4zIDY0LC0xMDIuMyA4MS44LC04OS41IDc0LjYsLTY4LjkgOTIuNywtODEuMyAxMTAuNiwtNjguOSAxMDMuNCwtODkuMyANCgkxMjEuMywtMTAyLjIgMTAwLjEsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTIyLjMgMTQ3LjUsLTEwMi4zIDEyNi4xLC0xMDIuMyAxNDMuOSwtODkuNSAxMzYuNywtNjguOSAxNTQuOCwtODEuMyAxNzIuNywtNjguOSAxNjUuNSwtODkuMyANCgkxODMuNCwtMTAyLjIgMTYyLjIsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtMTIyLjMgMjA5LjYsLTEwMi4zIDE4OC4yLC0xMDIuMyAyMDYuMSwtODkuNSAxOTguOCwtNjguOSAyMTYuOSwtODEuMyAyMzQuOCwtNjguOSAyMjcuNiwtODkuMyANCgkyNDUuNiwtMTAyLjIgMjI0LjMsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTEyMi4zIDI3MS43LC0xMDIuMyAyNTAuNCwtMTAyLjMgMjY4LjIsLTg5LjUgMjYxLC02OC45IDI3OSwtODEuMyAyOTYuOSwtNjguOSAyODkuOCwtODkuMyANCgkzMDcuNywtMTAyLjIgMjg2LjQsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC02MC44IDIzLjMsLTQwLjggMS45LC00MC44IDE5LjcsLTI4IDEyLjUsLTcuNCAzMC41LC0xOS44IDQ4LjQsLTcuNCA0MS4zLC0yNy43IDU5LjIsLTQwLjcgDQoJMzgsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTYwLjggODUuNCwtNDAuOCA2NCwtNDAuOCA4MS44LC0yOCA3NC42LC03LjQgOTIuNywtMTkuOCAxMTAuNiwtNy40IDEwMy40LC0yNy43IDEyMS4zLC00MC43IA0KCTEwMC4xLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwtNjAuOCAxNDcuNSwtNDAuOCAxMjYuMSwtNDAuOCAxNDMuOSwtMjggMTM2LjcsLTcuNCAxNTQuOCwtMTkuOCAxNzIuNywtNy40IDE2NS41LC0yNy43IA0KCTE4My40LC00MC43IDE2Mi4yLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtNjAuOCAyMDkuNiwtNDAuOCAxODguMiwtNDAuOCAyMDYuMSwtMjggMTk4LjgsLTcuNCAyMTYuOSwtMTkuOCAyMzQuOCwtNy40IDIyNy42LC0yNy43IA0KCTI0NS42LC00MC43IDIyNC4zLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTYwLjggMjcxLjcsLTQwLjggMjUwLjQsLTQwLjggMjY4LjIsLTI4IDI2MSwtNy40IDI3OSwtMTkuOCAyOTYuOSwtNy40IDI4OS44LC0yNy43IDMwNy43LC00MC43IA0KCTI4Ni40LC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LDIgMjMuMywyMiAxLjksMjIgMTkuNywzNC44IDEyLjUsNTUuNCAzMC41LDQzIDQ4LjQsNTUuNCA0MS4zLDM1LjEgNTkuMiwyMi4xIDM4LDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjkyLjcsMiA4NS40LDIyIDY0LDIyIDgxLjgsMzQuOCA3NC42LDU1LjQgOTIuNyw0MyAxMTAuNiw1NS40IDEwMy40LDM1LjEgMTIxLjMsMjIuMSAxMDAuMSwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwyIDE0Ny41LDIyIDEyNi4xLDIyIDE0My45LDM0LjggMTM2LjcsNTUuNCAxNTQuOCw0MyAxNzIuNyw1NS40IDE2NS41LDM1LjEgMTgzLjQsMjIuMSANCgkxNjIuMiwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwyIDIwOS42LDIyIDE4OC4yLDIyIDIwNi4xLDM0LjggMTk4LjgsNTUuNCAyMTYuOSw0MyAyMzQuOCw1NS40IDIyNy42LDM1LjEgMjQ1LjYsMjIuMSANCgkyMjQuMywyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksMiAyNzEuNywyMiAyNTAuNCwyMiAyNjguMiwzNC44IDI2MSw1NS40IDI3OSw0MyAyOTYuOSw1NS40IDI4OS44LDM1LjEgMzA3LjcsMjIuMSAyODYuNCwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIzMC41LDY5LjYgMjMuMyw4OS42IDEuOSw4OS41IDE5LjcsMTAyLjQgMTIuNSwxMjMgMzAuNSwxMTAuNSA0OC4xLDEyMiA0MS4zLDEwMi42IDU5LjIsODkuNyAzOCw4OS43IA0KCSIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMzAuNSIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0NCIgY3g9IjkyLjciIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDQiIGN4PSIxNTUuOCIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0NCIgY3g9IjIxNi45IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGVsbGlwc2UgdHJhbnNmb3JtPSJtYXRyaXgoMC4yMjk4IC0wLjk3MzIgMC45NzMyIDAuMjI5OCAxODYuOTY2NyAyOTMuNjQyNikiIGNsYXNzPSJzdDQiIGN4PSIyNzkiIGN5PSIyOC43IiByeD0iMjYuNyIgcnk9IjI2LjciLz4NCjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik05Mi41LDU1LjRjLTE0LjcsMC0yNi43LTEyLTI2LjctMjYuN1M3Ny44LDIsOTIuNSwyVjU1LjR6Ii8+DQo8L3N2Zz4NCg==");}\n\n.icon-stars--2{background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMTAuNCA1Ni44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuNCA1Ni44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZGlzcGxheTpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZGlzcGxheTpub25lO30NCgkuc3Qze3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPGltYWdlIHN0eWxlPSJkaXNwbGF5Om5vbmU7b3ZlcmZsb3c6dmlzaWJsZTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB4bGluazpocmVmPSI3NEZBNDI0Ny5wbmciICB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDUuNTUzMiAzLjgyOTgpIj4NCjwvaW1hZ2U+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTI0Ni40IDIzLjMsLTIyNi40IDEuOSwtMjI2LjQgMTkuNywtMjEzLjYgMTIuNSwtMTkzIDMwLjUsLTIwNS40IDQ4LjQsLTE5MyA0MS4zLC0yMTMuMyANCgk1OS4yLC0yMjYuMyAzOCwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTI0Ni40IDg1LjQsLTIyNi40IDY0LC0yMjYuNCA4MS44LC0yMTMuNiA3NC42LC0xOTMgOTIuNywtMjA1LjQgMTEwLjYsLTE5MyAxMDMuNCwtMjEzLjMgDQoJMTIxLjMsLTIyNi4zIDEwMC4xLC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTU0LjgsLTI0Ni40IDE0Ny41LC0yMjYuNCAxMjYuMSwtMjI2LjQgMTQzLjksLTIxMy42IDEzNi43LC0xOTMgMTU0LjgsLTIwNS40IDE3Mi43LC0xOTMgDQoJMTY1LjUsLTIxMy4zIDE4My40LC0yMjYuMyAxNjIuMiwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxNi45LC0yNDYuNCAyMDkuNiwtMjI2LjQgMTg4LjIsLTIyNi40IDIwNi4xLC0yMTMuNiAxOTguOCwtMTkzIDIxNi45LC0yMDUuNCAyMzQuOCwtMTkzIA0KCTIyNy42LC0yMTMuMyAyNDUuNiwtMjI2LjMgMjI0LjMsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyNzksLTI0Ni40IDI3MS43LC0yMjYuNCAyNTAuNCwtMjI2LjQgMjY4LjIsLTIxMy42IDI2MSwtMTkzIDI3OSwtMjA1LjQgMjk2LjksLTE5MyAyODkuOCwtMjEzLjMgDQoJMzA3LjcsLTIyNi4zIDI4Ni40LC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMzAuNSwtMTg0LjYgMjMuMywtMTY0LjYgMS45LC0xNjQuNiAxOS43LC0xNTEuOCAxMi41LC0xMzEuMiAzMC41LC0xNDMuNiA0OC40LC0xMzEuMiA0MS4zLC0xNTEuNiANCgk1OS4yLC0xNjQuNSAzOCwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTE4NC42IDg1LjQsLTE2NC42IDY0LC0xNjQuNiA4MS44LC0xNTEuOCA3NC42LC0xMzEuMiA5Mi43LC0xNDMuNiAxMTAuNiwtMTMxLjIgMTAzLjQsLTE1MS42IA0KCTEyMS4zLC0xNjQuNSAxMDAuMSwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0xODQuNiAxNDcuNSwtMTY0LjYgMTI2LjEsLTE2NC42IDE0My45LC0xNTEuOCAxMzYuNywtMTMxLjIgMTU0LjgsLTE0My42IDE3Mi43LC0xMzEuMiANCgkxNjUuNSwtMTUxLjYgMTgzLjQsLTE2NC41IDE2Mi4yLC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjE2LjksLTE4NC42IDIwOS42LC0xNjQuNiAxODguMiwtMTY0LjYgMjA2LjEsLTE1MS44IDE5OC44LC0xMzEuMiAyMTYuOSwtMTQzLjYgMjM0LjgsLTEzMS4yIA0KCTIyNy42LC0xNTEuNiAyNDUuNiwtMTY0LjUgMjI0LjMsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTE4NC42IDI3MS43LC0xNjQuNiAyNTAuNCwtMTY0LjYgMjY4LjIsLTE1MS44IDI2MSwtMTMxLjIgMjc5LC0xNDMuNiAyOTYuOSwtMTMxLjIgMjg5LjgsLTE1MS42IA0KCTMwNy43LC0xNjQuNSAyODYuNCwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTEyMi4zIDIzLjMsLTEwMi4zIDEuOSwtMTAyLjMgMTkuNywtODkuNSAxMi41LC02OC45IDMwLjUsLTgxLjMgNDguNCwtNjguOSA0MS4zLC04OS4zIA0KCTU5LjIsLTEwMi4yIDM4LC0xMDIuMiAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iOTIuNywtMTIyLjMgODUuNCwtMTAyLjMgNjQsLTEwMi4zIDgxLjgsLTg5LjUgNzQuNiwtNjguOSA5Mi43LC04MS4zIDExMC42LC02OC45IDEwMy40LC04OS4zIA0KCTEyMS4zLC0xMDIuMiAxMDAuMSwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0xMjIuMyAxNDcuNSwtMTAyLjMgMTI2LjEsLTEwMi4zIDE0My45LC04OS41IDEzNi43LC02OC45IDE1NC44LC04MS4zIDE3Mi43LC02OC45IDE2NS41LC04OS4zIA0KCTE4My40LC0xMDIuMiAxNjIuMiwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LC0xMjIuMyAyMDkuNiwtMTAyLjMgMTg4LjIsLTEwMi4zIDIwNi4xLC04OS41IDE5OC44LC02OC45IDIxNi45LC04MS4zIDIzNC44LC02OC45IDIyNy42LC04OS4zIA0KCTI0NS42LC0xMDIuMiAyMjQuMywtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwtMTIyLjMgMjcxLjcsLTEwMi4zIDI1MC40LC0xMDIuMyAyNjguMiwtODkuNSAyNjEsLTY4LjkgMjc5LC04MS4zIDI5Ni45LC02OC45IDI4OS44LC04OS4zIA0KCTMwNy43LC0xMDIuMiAyODYuNCwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTYwLjggMjMuMywtNDAuOCAxLjksLTQwLjggMTkuNywtMjggMTIuNSwtNy40IDMwLjUsLTE5LjggNDguNCwtNy40IDQxLjMsLTI3LjcgNTkuMiwtNDAuNyANCgkzOCwtNDAuNyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iOTIuNywtNjAuOCA4NS40LC00MC44IDY0LC00MC44IDgxLjgsLTI4IDc0LjYsLTcuNCA5Mi43LC0xOS44IDExMC42LC03LjQgMTAzLjQsLTI3LjcgMTIxLjMsLTQwLjcgDQoJMTAwLjEsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE1NC44LC02MC44IDE0Ny41LC00MC44IDEyNi4xLC00MC44IDE0My45LC0yOCAxMzYuNywtNy40IDE1NC44LC0xOS44IDE3Mi43LC03LjQgMTY1LjUsLTI3LjcgDQoJMTgzLjQsLTQwLjcgMTYyLjIsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LC02MC44IDIwOS42LC00MC44IDE4OC4yLC00MC44IDIwNi4xLC0yOCAxOTguOCwtNy40IDIxNi45LC0xOS44IDIzNC44LC03LjQgMjI3LjYsLTI3LjcgDQoJMjQ1LjYsLTQwLjcgMjI0LjMsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwtNjAuOCAyNzEuNywtNDAuOCAyNTAuNCwtNDAuOCAyNjguMiwtMjggMjYxLC03LjQgMjc5LC0xOS44IDI5Ni45LC03LjQgMjg5LjgsLTI3LjcgMzA3LjcsLTQwLjcgDQoJMjg2LjQsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsMiAyMy4zLDIyIDEuOSwyMiAxOS43LDM0LjggMTIuNSw1NS40IDMwLjUsNDMgNDguNCw1NS40IDQxLjMsMzUuMSA1OS4yLDIyLjEgMzgsMjIuMSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iOTIuNywyIDg1LjQsMjIgNjQsMjIgODEuOCwzNC44IDc0LjYsNTUuNCA5Mi43LDQzIDExMC42LDU1LjQgMTAzLjQsMzUuMSAxMjEuMywyMi4xIDEwMC4xLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE1NC44LDIgMTQ3LjUsMjIgMTI2LjEsMjIgMTQzLjksMzQuOCAxMzYuNyw1NS40IDE1NC44LDQzIDE3Mi43LDU1LjQgMTY1LjUsMzUuMSAxODMuNCwyMi4xIA0KCTE2Mi4yLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LDIgMjA5LjYsMjIgMTg4LjIsMjIgMjA2LjEsMzQuOCAxOTguOCw1NS40IDIxNi45LDQzIDIzNC44LDU1LjQgMjI3LjYsMzUuMSAyNDUuNiwyMi4xIA0KCTIyNC4zLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwyIDI3MS43LDIyIDI1MC40LDIyIDI2OC4yLDM0LjggMjYxLDU1LjQgMjc5LDQzIDI5Ni45LDU1LjQgMjg5LjgsMzUuMSAzMDcuNywyMi4xIDI4Ni40LDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjMwLjUsNjkuNiAyMy4zLDg5LjYgMS45LDg5LjUgMTkuNywxMDIuNCAxMi41LDEyMyAzMC41LDExMC41IDQ4LjEsMTIyIDQxLjMsMTAyLjYgNTkuMiw4OS43IDM4LDg5LjcgDQoJIi8+DQo8Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIzMC41IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iOTIuNyIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0NCIgY3g9IjE1NS44IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGNpcmNsZSBjbGFzcz0ic3Q0IiBjeD0iMjE2LjkiIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDQiIGN4PSIyNzkiIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8L3N2Zz4NCg==");}\n\n.icon-stars--2-half{background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMTAuNCA1Ni44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuNCA1Ni44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZGlzcGxheTpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZGlzcGxheTpub25lO30NCgkuc3Qze3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0yNDYuNCAyMy4zLC0yMjYuNCAxLjksLTIyNi40IDE5LjcsLTIxMy42IDEyLjUsLTE5MyAzMC41LC0yMDUuNCA0OC40LC0xOTMgNDEuMywtMjEzLjMgDQoJNTkuMiwtMjI2LjMgMzgsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0yNDYuNCA4NS40LC0yMjYuNCA2NCwtMjI2LjQgODEuOCwtMjEzLjYgNzQuNiwtMTkzIDkyLjcsLTIwNS40IDExMC42LC0xOTMgMTAzLjQsLTIxMy4zIA0KCTEyMS4zLC0yMjYuMyAxMDAuMSwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0yNDYuNCAxNDcuNSwtMjI2LjQgMTI2LjEsLTIyNi40IDE0My45LC0yMTMuNiAxMzYuNywtMTkzIDE1NC44LC0yMDUuNCAxNzIuNywtMTkzIA0KCTE2NS41LC0yMTMuMyAxODMuNCwtMjI2LjMgMTYyLjIsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyMTYuOSwtMjQ2LjQgMjA5LjYsLTIyNi40IDE4OC4yLC0yMjYuNCAyMDYuMSwtMjEzLjYgMTk4LjgsLTE5MyAyMTYuOSwtMjA1LjQgMjM0LjgsLTE5MyANCgkyMjcuNiwtMjEzLjMgMjQ1LjYsLTIyNi4zIDIyNC4zLC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjc5LC0yNDYuNCAyNzEuNywtMjI2LjQgMjUwLjQsLTIyNi40IDI2OC4yLC0yMTMuNiAyNjEsLTE5MyAyNzksLTIwNS40IDI5Ni45LC0xOTMgMjg5LjgsLTIxMy4zIA0KCTMwNy43LC0yMjYuMyAyODYuNCwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTE4NC42IDIzLjMsLTE2NC42IDEuOSwtMTY0LjYgMTkuNywtMTUxLjggMTIuNSwtMTMxLjIgMzAuNSwtMTQzLjYgNDguNCwtMTMxLjIgNDEuMywtMTUxLjYgDQoJNTkuMiwtMTY0LjUgMzgsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0xODQuNiA4NS40LC0xNjQuNiA2NCwtMTY0LjYgODEuOCwtMTUxLjggNzQuNiwtMTMxLjIgOTIuNywtMTQzLjYgMTEwLjYsLTEzMS4yIDEwMy40LC0xNTEuNiANCgkxMjEuMywtMTY0LjUgMTAwLjEsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTg0LjYgMTQ3LjUsLTE2NC42IDEyNi4xLC0xNjQuNiAxNDMuOSwtMTUxLjggMTM2LjcsLTEzMS4yIDE1NC44LC0xNDMuNiAxNzIuNywtMTMxLjIgDQoJMTY1LjUsLTE1MS42IDE4My40LC0xNjQuNSAxNjIuMiwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxNi45LC0xODQuNiAyMDkuNiwtMTY0LjYgMTg4LjIsLTE2NC42IDIwNi4xLC0xNTEuOCAxOTguOCwtMTMxLjIgMjE2LjksLTE0My42IDIzNC44LC0xMzEuMiANCgkyMjcuNiwtMTUxLjYgMjQ1LjYsLTE2NC41IDIyNC4zLC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjc5LC0xODQuNiAyNzEuNywtMTY0LjYgMjUwLjQsLTE2NC42IDI2OC4yLC0xNTEuOCAyNjEsLTEzMS4yIDI3OSwtMTQzLjYgMjk2LjksLTEzMS4yIDI4OS44LC0xNTEuNiANCgkzMDcuNywtMTY0LjUgMjg2LjQsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0xMjIuMyAyMy4zLC0xMDIuMyAxLjksLTEwMi4zIDE5LjcsLTg5LjUgMTIuNSwtNjguOSAzMC41LC04MS4zIDQ4LjQsLTY4LjkgNDEuMywtODkuMyANCgk1OS4yLC0xMDIuMiAzOCwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTEyMi4zIDg1LjQsLTEwMi4zIDY0LC0xMDIuMyA4MS44LC04OS41IDc0LjYsLTY4LjkgOTIuNywtODEuMyAxMTAuNiwtNjguOSAxMDMuNCwtODkuMyANCgkxMjEuMywtMTAyLjIgMTAwLjEsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTIyLjMgMTQ3LjUsLTEwMi4zIDEyNi4xLC0xMDIuMyAxNDMuOSwtODkuNSAxMzYuNywtNjguOSAxNTQuOCwtODEuMyAxNzIuNywtNjguOSAxNjUuNSwtODkuMyANCgkxODMuNCwtMTAyLjIgMTYyLjIsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtMTIyLjMgMjA5LjYsLTEwMi4zIDE4OC4yLC0xMDIuMyAyMDYuMSwtODkuNSAxOTguOCwtNjguOSAyMTYuOSwtODEuMyAyMzQuOCwtNjguOSAyMjcuNiwtODkuMyANCgkyNDUuNiwtMTAyLjIgMjI0LjMsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTEyMi4zIDI3MS43LC0xMDIuMyAyNTAuNCwtMTAyLjMgMjY4LjIsLTg5LjUgMjYxLC02OC45IDI3OSwtODEuMyAyOTYuOSwtNjguOSAyODkuOCwtODkuMyANCgkzMDcuNywtMTAyLjIgMjg2LjQsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC02MC44IDIzLjMsLTQwLjggMS45LC00MC44IDE5LjcsLTI4IDEyLjUsLTcuNCAzMC41LC0xOS44IDQ4LjQsLTcuNCA0MS4zLC0yNy43IDU5LjIsLTQwLjcgDQoJMzgsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTYwLjggODUuNCwtNDAuOCA2NCwtNDAuOCA4MS44LC0yOCA3NC42LC03LjQgOTIuNywtMTkuOCAxMTAuNiwtNy40IDEwMy40LC0yNy43IDEyMS4zLC00MC43IA0KCTEwMC4xLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwtNjAuOCAxNDcuNSwtNDAuOCAxMjYuMSwtNDAuOCAxNDMuOSwtMjggMTM2LjcsLTcuNCAxNTQuOCwtMTkuOCAxNzIuNywtNy40IDE2NS41LC0yNy43IA0KCTE4My40LC00MC43IDE2Mi4yLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtNjAuOCAyMDkuNiwtNDAuOCAxODguMiwtNDAuOCAyMDYuMSwtMjggMTk4LjgsLTcuNCAyMTYuOSwtMTkuOCAyMzQuOCwtNy40IDIyNy42LC0yNy43IA0KCTI0NS42LC00MC43IDIyNC4zLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTYwLjggMjcxLjcsLTQwLjggMjUwLjQsLTQwLjggMjY4LjIsLTI4IDI2MSwtNy40IDI3OSwtMTkuOCAyOTYuOSwtNy40IDI4OS44LC0yNy43IDMwNy43LC00MC43IA0KCTI4Ni40LC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LDIgMjMuMywyMiAxLjksMjIgMTkuNywzNC44IDEyLjUsNTUuNCAzMC41LDQzIDQ4LjQsNTUuNCA0MS4zLDM1LjEgNTkuMiwyMi4xIDM4LDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjkyLjcsMiA4NS40LDIyIDY0LDIyIDgxLjgsMzQuOCA3NC42LDU1LjQgOTIuNyw0MyAxMTAuNiw1NS40IDEwMy40LDM1LjEgMTIxLjMsMjIuMSAxMDAuMSwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwyIDE0Ny41LDIyIDEyNi4xLDIyIDE0My45LDM0LjggMTM2LjcsNTUuNCAxNTQuOCw0MyAxNzIuNyw1NS40IDE2NS41LDM1LjEgMTgzLjQsMjIuMSANCgkxNjIuMiwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwyIDIwOS42LDIyIDE4OC4yLDIyIDIwNi4xLDM0LjggMTk4LjgsNTUuNCAyMTYuOSw0MyAyMzQuOCw1NS40IDIyNy42LDM1LjEgMjQ1LjYsMjIuMSANCgkyMjQuMywyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksMiAyNzEuNywyMiAyNTAuNCwyMiAyNjguMiwzNC44IDI2MSw1NS40IDI3OSw0MyAyOTYuOSw1NS40IDI4OS44LDM1LjEgMzA3LjcsMjIuMSAyODYuNCwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIzMC41LDY5LjYgMjMuMyw4OS42IDEuOSw4OS41IDE5LjcsMTAyLjQgMTIuNSwxMjMgMzAuNSwxMTAuNSA0OC4xLDEyMiA0MS4zLDEwMi42IDU5LjIsODkuNyAzOCw4OS43IA0KCSIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMzAuNSIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjkyLjciIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDQiIGN4PSIxNTUuOCIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0NCIgY3g9IjIxNi45IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGVsbGlwc2UgdHJhbnNmb3JtPSJtYXRyaXgoMC4yMjk4IC0wLjk3MzIgMC45NzMyIDAuMjI5OCAxODYuOTY2NyAyOTMuNjQyNikiIGNsYXNzPSJzdDQiIGN4PSIyNzkiIGN5PSIyOC43IiByeD0iMjYuNyIgcnk9IjI2LjciLz4NCjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xNTUuOCw1NS40Yy0xNC43LDAtMjYuNy0xMi0yNi43LTI2LjdTMTQxLjEsMiwxNTUuOCwyVjU1LjR6Ii8+DQo8L3N2Zz4NCg==");}\n\n.icon-stars--3{background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMTAuNCA1Ni44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuNCA1Ni44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZGlzcGxheTpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZGlzcGxheTpub25lO30NCgkuc3Qze3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPGltYWdlIHN0eWxlPSJkaXNwbGF5Om5vbmU7b3ZlcmZsb3c6dmlzaWJsZTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB4bGluazpocmVmPSI4Qjg3NzEwRS5wbmciICB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDUuNTUzMiAzLjgyOTgpIj4NCjwvaW1hZ2U+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTI0Ni40IDIzLjMsLTIyNi40IDEuOSwtMjI2LjQgMTkuNywtMjEzLjYgMTIuNSwtMTkzIDMwLjUsLTIwNS40IDQ4LjQsLTE5MyA0MS4zLC0yMTMuMyANCgk1OS4yLC0yMjYuMyAzOCwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTI0Ni40IDg1LjQsLTIyNi40IDY0LC0yMjYuNCA4MS44LC0yMTMuNiA3NC42LC0xOTMgOTIuNywtMjA1LjQgMTEwLjYsLTE5MyAxMDMuNCwtMjEzLjMgDQoJMTIxLjMsLTIyNi4zIDEwMC4xLC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTU0LjgsLTI0Ni40IDE0Ny41LC0yMjYuNCAxMjYuMSwtMjI2LjQgMTQzLjksLTIxMy42IDEzNi43LC0xOTMgMTU0LjgsLTIwNS40IDE3Mi43LC0xOTMgDQoJMTY1LjUsLTIxMy4zIDE4My40LC0yMjYuMyAxNjIuMiwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxNi45LC0yNDYuNCAyMDkuNiwtMjI2LjQgMTg4LjIsLTIyNi40IDIwNi4xLC0yMTMuNiAxOTguOCwtMTkzIDIxNi45LC0yMDUuNCAyMzQuOCwtMTkzIA0KCTIyNy42LC0yMTMuMyAyNDUuNiwtMjI2LjMgMjI0LjMsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyNzksLTI0Ni40IDI3MS43LC0yMjYuNCAyNTAuNCwtMjI2LjQgMjY4LjIsLTIxMy42IDI2MSwtMTkzIDI3OSwtMjA1LjQgMjk2LjksLTE5MyAyODkuOCwtMjEzLjMgDQoJMzA3LjcsLTIyNi4zIDI4Ni40LC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMzAuNSwtMTg0LjYgMjMuMywtMTY0LjYgMS45LC0xNjQuNiAxOS43LC0xNTEuOCAxMi41LC0xMzEuMiAzMC41LC0xNDMuNiA0OC40LC0xMzEuMiA0MS4zLC0xNTEuNiANCgk1OS4yLC0xNjQuNSAzOCwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTE4NC42IDg1LjQsLTE2NC42IDY0LC0xNjQuNiA4MS44LC0xNTEuOCA3NC42LC0xMzEuMiA5Mi43LC0xNDMuNiAxMTAuNiwtMTMxLjIgMTAzLjQsLTE1MS42IA0KCTEyMS4zLC0xNjQuNSAxMDAuMSwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0xODQuNiAxNDcuNSwtMTY0LjYgMTI2LjEsLTE2NC42IDE0My45LC0xNTEuOCAxMzYuNywtMTMxLjIgMTU0LjgsLTE0My42IDE3Mi43LC0xMzEuMiANCgkxNjUuNSwtMTUxLjYgMTgzLjQsLTE2NC41IDE2Mi4yLC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjE2LjksLTE4NC42IDIwOS42LC0xNjQuNiAxODguMiwtMTY0LjYgMjA2LjEsLTE1MS44IDE5OC44LC0xMzEuMiAyMTYuOSwtMTQzLjYgMjM0LjgsLTEzMS4yIA0KCTIyNy42LC0xNTEuNiAyNDUuNiwtMTY0LjUgMjI0LjMsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTE4NC42IDI3MS43LC0xNjQuNiAyNTAuNCwtMTY0LjYgMjY4LjIsLTE1MS44IDI2MSwtMTMxLjIgMjc5LC0xNDMuNiAyOTYuOSwtMTMxLjIgMjg5LjgsLTE1MS42IA0KCTMwNy43LC0xNjQuNSAyODYuNCwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTEyMi4zIDIzLjMsLTEwMi4zIDEuOSwtMTAyLjMgMTkuNywtODkuNSAxMi41LC02OC45IDMwLjUsLTgxLjMgNDguNCwtNjguOSA0MS4zLC04OS4zIA0KCTU5LjIsLTEwMi4yIDM4LC0xMDIuMiAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iOTIuNywtMTIyLjMgODUuNCwtMTAyLjMgNjQsLTEwMi4zIDgxLjgsLTg5LjUgNzQuNiwtNjguOSA5Mi43LC04MS4zIDExMC42LC02OC45IDEwMy40LC04OS4zIA0KCTEyMS4zLC0xMDIuMiAxMDAuMSwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0xMjIuMyAxNDcuNSwtMTAyLjMgMTI2LjEsLTEwMi4zIDE0My45LC04OS41IDEzNi43LC02OC45IDE1NC44LC04MS4zIDE3Mi43LC02OC45IDE2NS41LC04OS4zIA0KCTE4My40LC0xMDIuMiAxNjIuMiwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LC0xMjIuMyAyMDkuNiwtMTAyLjMgMTg4LjIsLTEwMi4zIDIwNi4xLC04OS41IDE5OC44LC02OC45IDIxNi45LC04MS4zIDIzNC44LC02OC45IDIyNy42LC04OS4zIA0KCTI0NS42LC0xMDIuMiAyMjQuMywtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwtMTIyLjMgMjcxLjcsLTEwMi4zIDI1MC40LC0xMDIuMyAyNjguMiwtODkuNSAyNjEsLTY4LjkgMjc5LC04MS4zIDI5Ni45LC02OC45IDI4OS44LC04OS4zIA0KCTMwNy43LC0xMDIuMiAyODYuNCwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTYwLjggMjMuMywtNDAuOCAxLjksLTQwLjggMTkuNywtMjggMTIuNSwtNy40IDMwLjUsLTE5LjggNDguNCwtNy40IDQxLjMsLTI3LjcgNTkuMiwtNDAuNyANCgkzOCwtNDAuNyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iOTIuNywtNjAuOCA4NS40LC00MC44IDY0LC00MC44IDgxLjgsLTI4IDc0LjYsLTcuNCA5Mi43LC0xOS44IDExMC42LC03LjQgMTAzLjQsLTI3LjcgMTIxLjMsLTQwLjcgDQoJMTAwLjEsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE1NC44LC02MC44IDE0Ny41LC00MC44IDEyNi4xLC00MC44IDE0My45LC0yOCAxMzYuNywtNy40IDE1NC44LC0xOS44IDE3Mi43LC03LjQgMTY1LjUsLTI3LjcgDQoJMTgzLjQsLTQwLjcgMTYyLjIsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LC02MC44IDIwOS42LC00MC44IDE4OC4yLC00MC44IDIwNi4xLC0yOCAxOTguOCwtNy40IDIxNi45LC0xOS44IDIzNC44LC03LjQgMjI3LjYsLTI3LjcgDQoJMjQ1LjYsLTQwLjcgMjI0LjMsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwtNjAuOCAyNzEuNywtNDAuOCAyNTAuNCwtNDAuOCAyNjguMiwtMjggMjYxLC03LjQgMjc5LC0xOS44IDI5Ni45LC03LjQgMjg5LjgsLTI3LjcgMzA3LjcsLTQwLjcgDQoJMjg2LjQsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsMiAyMy4zLDIyIDEuOSwyMiAxOS43LDM0LjggMTIuNSw1NS40IDMwLjUsNDMgNDguNCw1NS40IDQxLjMsMzUuMSA1OS4yLDIyLjEgMzgsMjIuMSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iOTIuNywyIDg1LjQsMjIgNjQsMjIgODEuOCwzNC44IDc0LjYsNTUuNCA5Mi43LDQzIDExMC42LDU1LjQgMTAzLjQsMzUuMSAxMjEuMywyMi4xIDEwMC4xLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE1NC44LDIgMTQ3LjUsMjIgMTI2LjEsMjIgMTQzLjksMzQuOCAxMzYuNyw1NS40IDE1NC44LDQzIDE3Mi43LDU1LjQgMTY1LjUsMzUuMSAxODMuNCwyMi4xIA0KCTE2Mi4yLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LDIgMjA5LjYsMjIgMTg4LjIsMjIgMjA2LjEsMzQuOCAxOTguOCw1NS40IDIxNi45LDQzIDIzNC44LDU1LjQgMjI3LjYsMzUuMSAyNDUuNiwyMi4xIA0KCTIyNC4zLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwyIDI3MS43LDIyIDI1MC40LDIyIDI2OC4yLDM0LjggMjYxLDU1LjQgMjc5LDQzIDI5Ni45LDU1LjQgMjg5LjgsMzUuMSAzMDcuNywyMi4xIDI4Ni40LDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjMwLjUsNjkuNiAyMy4zLDg5LjYgMS45LDg5LjUgMTkuNywxMDIuNCAxMi41LDEyMyAzMC41LDExMC41IDQ4LjEsMTIyIDQxLjMsMTAyLjYgNTkuMiw4OS43IDM4LDg5LjcgDQoJIi8+DQo8Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIzMC41IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iOTIuNyIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjE1NS44IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGNpcmNsZSBjbGFzcz0ic3Q0IiBjeD0iMjE2LjkiIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDQiIGN4PSIyNzkiIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8L3N2Zz4NCg==");}\n\n.icon-stars--3-half{background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMTAuNCA1Ni44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuNCA1Ni44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZGlzcGxheTpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZGlzcGxheTpub25lO30NCgkuc3Qze3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0yNDYuNCAyMy4zLC0yMjYuNCAxLjksLTIyNi40IDE5LjcsLTIxMy42IDEyLjUsLTE5MyAzMC41LC0yMDUuNCA0OC40LC0xOTMgNDEuMywtMjEzLjMgDQoJNTkuMiwtMjI2LjMgMzgsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0yNDYuNCA4NS40LC0yMjYuNCA2NCwtMjI2LjQgODEuOCwtMjEzLjYgNzQuNiwtMTkzIDkyLjcsLTIwNS40IDExMC42LC0xOTMgMTAzLjQsLTIxMy4zIA0KCTEyMS4zLC0yMjYuMyAxMDAuMSwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0yNDYuNCAxNDcuNSwtMjI2LjQgMTI2LjEsLTIyNi40IDE0My45LC0yMTMuNiAxMzYuNywtMTkzIDE1NC44LC0yMDUuNCAxNzIuNywtMTkzIA0KCTE2NS41LC0yMTMuMyAxODMuNCwtMjI2LjMgMTYyLjIsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyMTYuOSwtMjQ2LjQgMjA5LjYsLTIyNi40IDE4OC4yLC0yMjYuNCAyMDYuMSwtMjEzLjYgMTk4LjgsLTE5MyAyMTYuOSwtMjA1LjQgMjM0LjgsLTE5MyANCgkyMjcuNiwtMjEzLjMgMjQ1LjYsLTIyNi4zIDIyNC4zLC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjc5LC0yNDYuNCAyNzEuNywtMjI2LjQgMjUwLjQsLTIyNi40IDI2OC4yLC0yMTMuNiAyNjEsLTE5MyAyNzksLTIwNS40IDI5Ni45LC0xOTMgMjg5LjgsLTIxMy4zIA0KCTMwNy43LC0yMjYuMyAyODYuNCwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTE4NC42IDIzLjMsLTE2NC42IDEuOSwtMTY0LjYgMTkuNywtMTUxLjggMTIuNSwtMTMxLjIgMzAuNSwtMTQzLjYgNDguNCwtMTMxLjIgNDEuMywtMTUxLjYgDQoJNTkuMiwtMTY0LjUgMzgsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0xODQuNiA4NS40LC0xNjQuNiA2NCwtMTY0LjYgODEuOCwtMTUxLjggNzQuNiwtMTMxLjIgOTIuNywtMTQzLjYgMTEwLjYsLTEzMS4yIDEwMy40LC0xNTEuNiANCgkxMjEuMywtMTY0LjUgMTAwLjEsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTg0LjYgMTQ3LjUsLTE2NC42IDEyNi4xLC0xNjQuNiAxNDMuOSwtMTUxLjggMTM2LjcsLTEzMS4yIDE1NC44LC0xNDMuNiAxNzIuNywtMTMxLjIgDQoJMTY1LjUsLTE1MS42IDE4My40LC0xNjQuNSAxNjIuMiwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxNi45LC0xODQuNiAyMDkuNiwtMTY0LjYgMTg4LjIsLTE2NC42IDIwNi4xLC0xNTEuOCAxOTguOCwtMTMxLjIgMjE2LjksLTE0My42IDIzNC44LC0xMzEuMiANCgkyMjcuNiwtMTUxLjYgMjQ1LjYsLTE2NC41IDIyNC4zLC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjc5LC0xODQuNiAyNzEuNywtMTY0LjYgMjUwLjQsLTE2NC42IDI2OC4yLC0xNTEuOCAyNjEsLTEzMS4yIDI3OSwtMTQzLjYgMjk2LjksLTEzMS4yIDI4OS44LC0xNTEuNiANCgkzMDcuNywtMTY0LjUgMjg2LjQsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0xMjIuMyAyMy4zLC0xMDIuMyAxLjksLTEwMi4zIDE5LjcsLTg5LjUgMTIuNSwtNjguOSAzMC41LC04MS4zIDQ4LjQsLTY4LjkgNDEuMywtODkuMyANCgk1OS4yLC0xMDIuMiAzOCwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTEyMi4zIDg1LjQsLTEwMi4zIDY0LC0xMDIuMyA4MS44LC04OS41IDc0LjYsLTY4LjkgOTIuNywtODEuMyAxMTAuNiwtNjguOSAxMDMuNCwtODkuMyANCgkxMjEuMywtMTAyLjIgMTAwLjEsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTIyLjMgMTQ3LjUsLTEwMi4zIDEyNi4xLC0xMDIuMyAxNDMuOSwtODkuNSAxMzYuNywtNjguOSAxNTQuOCwtODEuMyAxNzIuNywtNjguOSAxNjUuNSwtODkuMyANCgkxODMuNCwtMTAyLjIgMTYyLjIsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtMTIyLjMgMjA5LjYsLTEwMi4zIDE4OC4yLC0xMDIuMyAyMDYuMSwtODkuNSAxOTguOCwtNjguOSAyMTYuOSwtODEuMyAyMzQuOCwtNjguOSAyMjcuNiwtODkuMyANCgkyNDUuNiwtMTAyLjIgMjI0LjMsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTEyMi4zIDI3MS43LC0xMDIuMyAyNTAuNCwtMTAyLjMgMjY4LjIsLTg5LjUgMjYxLC02OC45IDI3OSwtODEuMyAyOTYuOSwtNjguOSAyODkuOCwtODkuMyANCgkzMDcuNywtMTAyLjIgMjg2LjQsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC02MC44IDIzLjMsLTQwLjggMS45LC00MC44IDE5LjcsLTI4IDEyLjUsLTcuNCAzMC41LC0xOS44IDQ4LjQsLTcuNCA0MS4zLC0yNy43IDU5LjIsLTQwLjcgDQoJMzgsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTYwLjggODUuNCwtNDAuOCA2NCwtNDAuOCA4MS44LC0yOCA3NC42LC03LjQgOTIuNywtMTkuOCAxMTAuNiwtNy40IDEwMy40LC0yNy43IDEyMS4zLC00MC43IA0KCTEwMC4xLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwtNjAuOCAxNDcuNSwtNDAuOCAxMjYuMSwtNDAuOCAxNDMuOSwtMjggMTM2LjcsLTcuNCAxNTQuOCwtMTkuOCAxNzIuNywtNy40IDE2NS41LC0yNy43IA0KCTE4My40LC00MC43IDE2Mi4yLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtNjAuOCAyMDkuNiwtNDAuOCAxODguMiwtNDAuOCAyMDYuMSwtMjggMTk4LjgsLTcuNCAyMTYuOSwtMTkuOCAyMzQuOCwtNy40IDIyNy42LC0yNy43IA0KCTI0NS42LC00MC43IDIyNC4zLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTYwLjggMjcxLjcsLTQwLjggMjUwLjQsLTQwLjggMjY4LjIsLTI4IDI2MSwtNy40IDI3OSwtMTkuOCAyOTYuOSwtNy40IDI4OS44LC0yNy43IDMwNy43LC00MC43IA0KCTI4Ni40LC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LDIgMjMuMywyMiAxLjksMjIgMTkuNywzNC44IDEyLjUsNTUuNCAzMC41LDQzIDQ4LjQsNTUuNCA0MS4zLDM1LjEgNTkuMiwyMi4xIDM4LDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjkyLjcsMiA4NS40LDIyIDY0LDIyIDgxLjgsMzQuOCA3NC42LDU1LjQgOTIuNyw0MyAxMTAuNiw1NS40IDEwMy40LDM1LjEgMTIxLjMsMjIuMSAxMDAuMSwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwyIDE0Ny41LDIyIDEyNi4xLDIyIDE0My45LDM0LjggMTM2LjcsNTUuNCAxNTQuOCw0MyAxNzIuNyw1NS40IDE2NS41LDM1LjEgMTgzLjQsMjIuMSANCgkxNjIuMiwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwyIDIwOS42LDIyIDE4OC4yLDIyIDIwNi4xLDM0LjggMTk4LjgsNTUuNCAyMTYuOSw0MyAyMzQuOCw1NS40IDIyNy42LDM1LjEgMjQ1LjYsMjIuMSANCgkyMjQuMywyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksMiAyNzEuNywyMiAyNTAuNCwyMiAyNjguMiwzNC44IDI2MSw1NS40IDI3OSw0MyAyOTYuOSw1NS40IDI4OS44LDM1LjEgMzA3LjcsMjIuMSAyODYuNCwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIzMC41LDY5LjYgMjMuMyw4OS42IDEuOSw4OS41IDE5LjcsMTAyLjQgMTIuNSwxMjMgMzAuNSwxMTAuNSA0OC4xLDEyMiA0MS4zLDEwMi42IDU5LjIsODkuNyAzOCw4OS43IA0KCSIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMzAuNSIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjkyLjciIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIxNTUuOCIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0NCIgY3g9IjIxNi45IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGVsbGlwc2UgdHJhbnNmb3JtPSJtYXRyaXgoMC4yMjk4IC0wLjk3MzIgMC45NzMyIDAuMjI5OCAxODYuOTY2NyAyOTMuNjQyNikiIGNsYXNzPSJzdDQiIGN4PSIyNzkiIGN5PSIyOC43IiByeD0iMjYuNyIgcnk9IjI2LjciLz4NCjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0yMTYuOSw1NS40Yy0xNC43LDAtMjYuNy0xMi0yNi43LTI2LjdTMjAyLjIsMiwyMTYuOSwyVjU1LjR6Ii8+DQo8L3N2Zz4NCg==");}\n\n.icon-stars--4{background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMTAuNCA1Ni44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuNCA1Ni44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZGlzcGxheTpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZGlzcGxheTpub25lO30NCgkuc3Qze3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPGltYWdlIHN0eWxlPSJkaXNwbGF5Om5vbmU7b3ZlcmZsb3c6dmlzaWJsZTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB4bGluazpocmVmPSJBMjE0OUZEOS5wbmciICB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDUuNTUzMiAzLjgyOTgpIj4NCjwvaW1hZ2U+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTI0Ni40IDIzLjMsLTIyNi40IDEuOSwtMjI2LjQgMTkuNywtMjEzLjYgMTIuNSwtMTkzIDMwLjUsLTIwNS40IDQ4LjQsLTE5MyA0MS4zLC0yMTMuMyANCgk1OS4yLC0yMjYuMyAzOCwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTI0Ni40IDg1LjQsLTIyNi40IDY0LC0yMjYuNCA4MS44LC0yMTMuNiA3NC42LC0xOTMgOTIuNywtMjA1LjQgMTEwLjYsLTE5MyAxMDMuNCwtMjEzLjMgDQoJMTIxLjMsLTIyNi4zIDEwMC4xLC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTU0LjgsLTI0Ni40IDE0Ny41LC0yMjYuNCAxMjYuMSwtMjI2LjQgMTQzLjksLTIxMy42IDEzNi43LC0xOTMgMTU0LjgsLTIwNS40IDE3Mi43LC0xOTMgDQoJMTY1LjUsLTIxMy4zIDE4My40LC0yMjYuMyAxNjIuMiwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxNi45LC0yNDYuNCAyMDkuNiwtMjI2LjQgMTg4LjIsLTIyNi40IDIwNi4xLC0yMTMuNiAxOTguOCwtMTkzIDIxNi45LC0yMDUuNCAyMzQuOCwtMTkzIA0KCTIyNy42LC0yMTMuMyAyNDUuNiwtMjI2LjMgMjI0LjMsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyNzksLTI0Ni40IDI3MS43LC0yMjYuNCAyNTAuNCwtMjI2LjQgMjY4LjIsLTIxMy42IDI2MSwtMTkzIDI3OSwtMjA1LjQgMjk2LjksLTE5MyAyODkuOCwtMjEzLjMgDQoJMzA3LjcsLTIyNi4zIDI4Ni40LC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMzAuNSwtMTg0LjYgMjMuMywtMTY0LjYgMS45LC0xNjQuNiAxOS43LC0xNTEuOCAxMi41LC0xMzEuMiAzMC41LC0xNDMuNiA0OC40LC0xMzEuMiA0MS4zLC0xNTEuNiANCgk1OS4yLC0xNjQuNSAzOCwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTE4NC42IDg1LjQsLTE2NC42IDY0LC0xNjQuNiA4MS44LC0xNTEuOCA3NC42LC0xMzEuMiA5Mi43LC0xNDMuNiAxMTAuNiwtMTMxLjIgMTAzLjQsLTE1MS42IA0KCTEyMS4zLC0xNjQuNSAxMDAuMSwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0xODQuNiAxNDcuNSwtMTY0LjYgMTI2LjEsLTE2NC42IDE0My45LC0xNTEuOCAxMzYuNywtMTMxLjIgMTU0LjgsLTE0My42IDE3Mi43LC0xMzEuMiANCgkxNjUuNSwtMTUxLjYgMTgzLjQsLTE2NC41IDE2Mi4yLC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjE2LjksLTE4NC42IDIwOS42LC0xNjQuNiAxODguMiwtMTY0LjYgMjA2LjEsLTE1MS44IDE5OC44LC0xMzEuMiAyMTYuOSwtMTQzLjYgMjM0LjgsLTEzMS4yIA0KCTIyNy42LC0xNTEuNiAyNDUuNiwtMTY0LjUgMjI0LjMsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTE4NC42IDI3MS43LC0xNjQuNiAyNTAuNCwtMTY0LjYgMjY4LjIsLTE1MS44IDI2MSwtMTMxLjIgMjc5LC0xNDMuNiAyOTYuOSwtMTMxLjIgMjg5LjgsLTE1MS42IA0KCTMwNy43LC0xNjQuNSAyODYuNCwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTEyMi4zIDIzLjMsLTEwMi4zIDEuOSwtMTAyLjMgMTkuNywtODkuNSAxMi41LC02OC45IDMwLjUsLTgxLjMgNDguNCwtNjguOSA0MS4zLC04OS4zIA0KCTU5LjIsLTEwMi4yIDM4LC0xMDIuMiAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iOTIuNywtMTIyLjMgODUuNCwtMTAyLjMgNjQsLTEwMi4zIDgxLjgsLTg5LjUgNzQuNiwtNjguOSA5Mi43LC04MS4zIDExMC42LC02OC45IDEwMy40LC04OS4zIA0KCTEyMS4zLC0xMDIuMiAxMDAuMSwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0xMjIuMyAxNDcuNSwtMTAyLjMgMTI2LjEsLTEwMi4zIDE0My45LC04OS41IDEzNi43LC02OC45IDE1NC44LC04MS4zIDE3Mi43LC02OC45IDE2NS41LC04OS4zIA0KCTE4My40LC0xMDIuMiAxNjIuMiwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LC0xMjIuMyAyMDkuNiwtMTAyLjMgMTg4LjIsLTEwMi4zIDIwNi4xLC04OS41IDE5OC44LC02OC45IDIxNi45LC04MS4zIDIzNC44LC02OC45IDIyNy42LC04OS4zIA0KCTI0NS42LC0xMDIuMiAyMjQuMywtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwtMTIyLjMgMjcxLjcsLTEwMi4zIDI1MC40LC0xMDIuMyAyNjguMiwtODkuNSAyNjEsLTY4LjkgMjc5LC04MS4zIDI5Ni45LC02OC45IDI4OS44LC04OS4zIA0KCTMwNy43LC0xMDIuMiAyODYuNCwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTYwLjggMjMuMywtNDAuOCAxLjksLTQwLjggMTkuNywtMjggMTIuNSwtNy40IDMwLjUsLTE5LjggNDguNCwtNy40IDQxLjMsLTI3LjcgNTkuMiwtNDAuNyANCgkzOCwtNDAuNyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iOTIuNywtNjAuOCA4NS40LC00MC44IDY0LC00MC44IDgxLjgsLTI4IDc0LjYsLTcuNCA5Mi43LC0xOS44IDExMC42LC03LjQgMTAzLjQsLTI3LjcgMTIxLjMsLTQwLjcgDQoJMTAwLjEsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE1NC44LC02MC44IDE0Ny41LC00MC44IDEyNi4xLC00MC44IDE0My45LC0yOCAxMzYuNywtNy40IDE1NC44LC0xOS44IDE3Mi43LC03LjQgMTY1LjUsLTI3LjcgDQoJMTgzLjQsLTQwLjcgMTYyLjIsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LC02MC44IDIwOS42LC00MC44IDE4OC4yLC00MC44IDIwNi4xLC0yOCAxOTguOCwtNy40IDIxNi45LC0xOS44IDIzNC44LC03LjQgMjI3LjYsLTI3LjcgDQoJMjQ1LjYsLTQwLjcgMjI0LjMsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwtNjAuOCAyNzEuNywtNDAuOCAyNTAuNCwtNDAuOCAyNjguMiwtMjggMjYxLC03LjQgMjc5LC0xOS44IDI5Ni45LC03LjQgMjg5LjgsLTI3LjcgMzA3LjcsLTQwLjcgDQoJMjg2LjQsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsMiAyMy4zLDIyIDEuOSwyMiAxOS43LDM0LjggMTIuNSw1NS40IDMwLjUsNDMgNDguNCw1NS40IDQxLjMsMzUuMSA1OS4yLDIyLjEgMzgsMjIuMSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iOTIuNywyIDg1LjQsMjIgNjQsMjIgODEuOCwzNC44IDc0LjYsNTUuNCA5Mi43LDQzIDExMC42LDU1LjQgMTAzLjQsMzUuMSAxMjEuMywyMi4xIDEwMC4xLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE1NC44LDIgMTQ3LjUsMjIgMTI2LjEsMjIgMTQzLjksMzQuOCAxMzYuNyw1NS40IDE1NC44LDQzIDE3Mi43LDU1LjQgMTY1LjUsMzUuMSAxODMuNCwyMi4xIA0KCTE2Mi4yLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxNi45LDIgMjA5LjYsMjIgMTg4LjIsMjIgMjA2LjEsMzQuOCAxOTguOCw1NS40IDIxNi45LDQzIDIzNC44LDU1LjQgMjI3LjYsMzUuMSAyNDUuNiwyMi4xIA0KCTIyNC4zLDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwyIDI3MS43LDIyIDI1MC40LDIyIDI2OC4yLDM0LjggMjYxLDU1LjQgMjc5LDQzIDI5Ni45LDU1LjQgMjg5LjgsMzUuMSAzMDcuNywyMi4xIDI4Ni40LDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjMwLjUsNjkuNiAyMy4zLDg5LjYgMS45LDg5LjUgMTkuNywxMDIuNCAxMi41LDEyMyAzMC41LDExMC41IDQ4LjEsMTIyIDQxLjMsMTAyLjYgNTkuMiw4OS43IDM4LDg5LjcgDQoJIi8+DQo8Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIzMC41IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iOTIuNyIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjE1NS44IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMjE2LjkiIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDQiIGN4PSIyNzkiIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8L3N2Zz4NCg==");}\n\n.icon-stars--4-half{background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMTAuNCA1Ni44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuNCA1Ni44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZGlzcGxheTpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZGlzcGxheTpub25lO30NCgkuc3Qze3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0yNDYuNCAyMy4zLC0yMjYuNCAxLjksLTIyNi40IDE5LjcsLTIxMy42IDEyLjUsLTE5MyAzMC41LC0yMDUuNCA0OC40LC0xOTMgNDEuMywtMjEzLjMgDQoJNTkuMiwtMjI2LjMgMzgsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0yNDYuNCA4NS40LC0yMjYuNCA2NCwtMjI2LjQgODEuOCwtMjEzLjYgNzQuNiwtMTkzIDkyLjcsLTIwNS40IDExMC42LC0xOTMgMTAzLjQsLTIxMy4zIA0KCTEyMS4zLC0yMjYuMyAxMDAuMSwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE1NC44LC0yNDYuNCAxNDcuNSwtMjI2LjQgMTI2LjEsLTIyNi40IDE0My45LC0yMTMuNiAxMzYuNywtMTkzIDE1NC44LC0yMDUuNCAxNzIuNywtMTkzIA0KCTE2NS41LC0yMTMuMyAxODMuNCwtMjI2LjMgMTYyLjIsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyMTYuOSwtMjQ2LjQgMjA5LjYsLTIyNi40IDE4OC4yLC0yMjYuNCAyMDYuMSwtMjEzLjYgMTk4LjgsLTE5MyAyMTYuOSwtMjA1LjQgMjM0LjgsLTE5MyANCgkyMjcuNiwtMjEzLjMgMjQ1LjYsLTIyNi4zIDIyNC4zLC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjc5LC0yNDYuNCAyNzEuNywtMjI2LjQgMjUwLjQsLTIyNi40IDI2OC4yLC0yMTMuNiAyNjEsLTE5MyAyNzksLTIwNS40IDI5Ni45LC0xOTMgMjg5LjgsLTIxMy4zIA0KCTMwNy43LC0yMjYuMyAyODYuNCwtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMwLjUsLTE4NC42IDIzLjMsLTE2NC42IDEuOSwtMTY0LjYgMTkuNywtMTUxLjggMTIuNSwtMTMxLjIgMzAuNSwtMTQzLjYgNDguNCwtMTMxLjIgNDEuMywtMTUxLjYgDQoJNTkuMiwtMTY0LjUgMzgsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0xODQuNiA4NS40LC0xNjQuNiA2NCwtMTY0LjYgODEuOCwtMTUxLjggNzQuNiwtMTMxLjIgOTIuNywtMTQzLjYgMTEwLjYsLTEzMS4yIDEwMy40LC0xNTEuNiANCgkxMjEuMywtMTY0LjUgMTAwLjEsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTg0LjYgMTQ3LjUsLTE2NC42IDEyNi4xLC0xNjQuNiAxNDMuOSwtMTUxLjggMTM2LjcsLTEzMS4yIDE1NC44LC0xNDMuNiAxNzIuNywtMTMxLjIgDQoJMTY1LjUsLTE1MS42IDE4My40LC0xNjQuNSAxNjIuMiwtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxNi45LC0xODQuNiAyMDkuNiwtMTY0LjYgMTg4LjIsLTE2NC42IDIwNi4xLC0xNTEuOCAxOTguOCwtMTMxLjIgMjE2LjksLTE0My42IDIzNC44LC0xMzEuMiANCgkyMjcuNiwtMTUxLjYgMjQ1LjYsLTE2NC41IDIyNC4zLC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjc5LC0xODQuNiAyNzEuNywtMTY0LjYgMjUwLjQsLTE2NC42IDI2OC4yLC0xNTEuOCAyNjEsLTEzMS4yIDI3OSwtMTQzLjYgMjk2LjksLTEzMS4yIDI4OS44LC0xNTEuNiANCgkzMDcuNywtMTY0LjUgMjg2LjQsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0xMjIuMyAyMy4zLC0xMDIuMyAxLjksLTEwMi4zIDE5LjcsLTg5LjUgMTIuNSwtNjguOSAzMC41LC04MS4zIDQ4LjQsLTY4LjkgNDEuMywtODkuMyANCgk1OS4yLC0xMDIuMiAzOCwtMTAyLjIgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTEyMi4zIDg1LjQsLTEwMi4zIDY0LC0xMDIuMyA4MS44LC04OS41IDc0LjYsLTY4LjkgOTIuNywtODEuMyAxMTAuNiwtNjguOSAxMDMuNCwtODkuMyANCgkxMjEuMywtMTAyLjIgMTAwLjEsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMTIyLjMgMTQ3LjUsLTEwMi4zIDEyNi4xLC0xMDIuMyAxNDMuOSwtODkuNSAxMzYuNywtNjguOSAxNTQuOCwtODEuMyAxNzIuNywtNjguOSAxNjUuNSwtODkuMyANCgkxODMuNCwtMTAyLjIgMTYyLjIsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtMTIyLjMgMjA5LjYsLTEwMi4zIDE4OC4yLC0xMDIuMyAyMDYuMSwtODkuNSAxOTguOCwtNjguOSAyMTYuOSwtODEuMyAyMzQuOCwtNjguOSAyMjcuNiwtODkuMyANCgkyNDUuNiwtMTAyLjIgMjI0LjMsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTEyMi4zIDI3MS43LC0xMDIuMyAyNTAuNCwtMTAyLjMgMjY4LjIsLTg5LjUgMjYxLC02OC45IDI3OSwtODEuMyAyOTYuOSwtNjguOSAyODkuOCwtODkuMyANCgkzMDcuNywtMTAyLjIgMjg2LjQsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC02MC44IDIzLjMsLTQwLjggMS45LC00MC44IDE5LjcsLTI4IDEyLjUsLTcuNCAzMC41LC0xOS44IDQ4LjQsLTcuNCA0MS4zLC0yNy43IDU5LjIsLTQwLjcgDQoJMzgsLTQwLjcgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjkyLjcsLTYwLjggODUuNCwtNDAuOCA2NCwtNDAuOCA4MS44LC0yOCA3NC42LC03LjQgOTIuNywtMTkuOCAxMTAuNiwtNy40IDEwMy40LC0yNy43IDEyMS4zLC00MC43IA0KCTEwMC4xLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwtNjAuOCAxNDcuNSwtNDAuOCAxMjYuMSwtNDAuOCAxNDMuOSwtMjggMTM2LjcsLTcuNCAxNTQuOCwtMTkuOCAxNzIuNywtNy40IDE2NS41LC0yNy43IA0KCTE4My40LC00MC43IDE2Mi4yLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwtNjAuOCAyMDkuNiwtNDAuOCAxODguMiwtNDAuOCAyMDYuMSwtMjggMTk4LjgsLTcuNCAyMTYuOSwtMTkuOCAyMzQuOCwtNy40IDIyNy42LC0yNy43IA0KCTI0NS42LC00MC43IDIyNC4zLC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksLTYwLjggMjcxLjcsLTQwLjggMjUwLjQsLTQwLjggMjY4LjIsLTI4IDI2MSwtNy40IDI3OSwtMTkuOCAyOTYuOSwtNy40IDI4OS44LC0yNy43IDMwNy43LC00MC43IA0KCTI4Ni40LC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LDIgMjMuMywyMiAxLjksMjIgMTkuNywzNC44IDEyLjUsNTUuNCAzMC41LDQzIDQ4LjQsNTUuNCA0MS4zLDM1LjEgNTkuMiwyMi4xIDM4LDIyLjEgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjkyLjcsMiA4NS40LDIyIDY0LDIyIDgxLjgsMzQuOCA3NC42LDU1LjQgOTIuNyw0MyAxMTAuNiw1NS40IDEwMy40LDM1LjEgMTIxLjMsMjIuMSAxMDAuMSwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxNTQuOCwyIDE0Ny41LDIyIDEyNi4xLDIyIDE0My45LDM0LjggMTM2LjcsNTUuNCAxNTQuOCw0MyAxNzIuNyw1NS40IDE2NS41LDM1LjEgMTgzLjQsMjIuMSANCgkxNjIuMiwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTYuOSwyIDIwOS42LDIyIDE4OC4yLDIyIDIwNi4xLDM0LjggMTk4LjgsNTUuNCAyMTYuOSw0MyAyMzQuOCw1NS40IDIyNy42LDM1LjEgMjQ1LjYsMjIuMSANCgkyMjQuMywyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNzksMiAyNzEuNywyMiAyNTAuNCwyMiAyNjguMiwzNC44IDI2MSw1NS40IDI3OSw0MyAyOTYuOSw1NS40IDI4OS44LDM1LjEgMzA3LjcsMjIuMSAyODYuNCwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIzMC41LDY5LjYgMjMuMyw4OS42IDEuOSw4OS41IDE5LjcsMTAyLjQgMTIuNSwxMjMgMzAuNSwxMTAuNSA0OC4xLDEyMiA0MS4zLDEwMi42IDU5LjIsODkuNyAzOCw4OS43IA0KCSIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMzAuNSIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjkyLjciIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIxNTUuOCIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjIxNi45IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGVsbGlwc2UgdHJhbnNmb3JtPSJtYXRyaXgoMC4yMjk4IC0wLjk3MzIgMC45NzMyIDAuMjI5OCAxODYuOTY2NyAyOTMuNjQyNikiIGNsYXNzPSJzdDQiIGN4PSIyNzkiIGN5PSIyOC43IiByeD0iMjYuNyIgcnk9IjI2LjciLz4NCjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0yNzgsNTUuNGMtMTQuNywwLTI2LjctMTItMjYuNy0yNi43UzI2My4zLDIsMjc4LDJWNTUuNHoiLz4NCjwvc3ZnPg0K");}\n\n.icon-stars--5 {background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMTAuNCA1Ni44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTAuNCA1Ni44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZGlzcGxheTpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZGlzcGxheTpub25lO30NCgkuc3Qze3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCjwvc3R5bGU+DQo8aW1hZ2Ugc3R5bGU9ImRpc3BsYXk6bm9uZTtvdmVyZmxvdzp2aXNpYmxlO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhsaW5rOmhyZWY9IkI4QTFDRUEwLnBuZyIgIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgNS41NTMyIDMuODI5OCkiPg0KPC9pbWFnZT4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMzAuNSwtMjQ2LjQgMjMuMywtMjI2LjQgMS45LC0yMjYuNCAxOS43LC0yMTMuNiAxMi41LC0xOTMgMzAuNSwtMjA1LjQgNDguNCwtMTkzIDQxLjMsLTIxMy4zIA0KCTU5LjIsLTIyNi4zIDM4LC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iOTIuNywtMjQ2LjQgODUuNCwtMjI2LjQgNjQsLTIyNi40IDgxLjgsLTIxMy42IDc0LjYsLTE5MyA5Mi43LC0yMDUuNCAxMTAuNiwtMTkzIDEwMy40LC0yMTMuMyANCgkxMjEuMywtMjI2LjMgMTAwLjEsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTQuOCwtMjQ2LjQgMTQ3LjUsLTIyNi40IDEyNi4xLC0yMjYuNCAxNDMuOSwtMjEzLjYgMTM2LjcsLTE5MyAxNTQuOCwtMjA1LjQgMTcyLjcsLTE5MyANCgkxNjUuNSwtMjEzLjMgMTgzLjQsLTIyNi4zIDE2Mi4yLC0yMjYuMyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjE2LjksLTI0Ni40IDIwOS42LC0yMjYuNCAxODguMiwtMjI2LjQgMjA2LjEsLTIxMy42IDE5OC44LC0xOTMgMjE2LjksLTIwNS40IDIzNC44LC0xOTMgDQoJMjI3LjYsLTIxMy4zIDI0NS42LC0yMjYuMyAyMjQuMywtMjI2LjMgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjI3OSwtMjQ2LjQgMjcxLjcsLTIyNi40IDI1MC40LC0yMjYuNCAyNjguMiwtMjEzLjYgMjYxLC0xOTMgMjc5LC0yMDUuNCAyOTYuOSwtMTkzIDI4OS44LC0yMTMuMyANCgkzMDcuNywtMjI2LjMgMjg2LjQsLTIyNi4zICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMC41LC0xODQuNiAyMy4zLC0xNjQuNiAxLjksLTE2NC42IDE5LjcsLTE1MS44IDEyLjUsLTEzMS4yIDMwLjUsLTE0My42IDQ4LjQsLTEzMS4yIDQxLjMsLTE1MS42IA0KCTU5LjIsLTE2NC41IDM4LC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iOTIuNywtMTg0LjYgODUuNCwtMTY0LjYgNjQsLTE2NC42IDgxLjgsLTE1MS44IDc0LjYsLTEzMS4yIDkyLjcsLTE0My42IDExMC42LC0xMzEuMiAxMDMuNCwtMTUxLjYgDQoJMTIxLjMsLTE2NC41IDEwMC4xLC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTU0LjgsLTE4NC42IDE0Ny41LC0xNjQuNiAxMjYuMSwtMTY0LjYgMTQzLjksLTE1MS44IDEzNi43LC0xMzEuMiAxNTQuOCwtMTQzLjYgMTcyLjcsLTEzMS4yIA0KCTE2NS41LC0xNTEuNiAxODMuNCwtMTY0LjUgMTYyLjIsLTE2NC41ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyMTYuOSwtMTg0LjYgMjA5LjYsLTE2NC42IDE4OC4yLC0xNjQuNiAyMDYuMSwtMTUxLjggMTk4LjgsLTEzMS4yIDIxNi45LC0xNDMuNiAyMzQuOCwtMTMxLjIgDQoJMjI3LjYsLTE1MS42IDI0NS42LC0xNjQuNSAyMjQuMywtMTY0LjUgIi8+DQo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI3OSwtMTg0LjYgMjcxLjcsLTE2NC42IDI1MC40LC0xNjQuNiAyNjguMiwtMTUxLjggMjYxLC0xMzEuMiAyNzksLTE0My42IDI5Ni45LC0xMzEuMiAyODkuOCwtMTUxLjYgDQoJMzA3LjcsLTE2NC41IDI4Ni40LC0xNjQuNSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMzAuNSwtMTIyLjMgMjMuMywtMTAyLjMgMS45LC0xMDIuMyAxOS43LC04OS41IDEyLjUsLTY4LjkgMzAuNSwtODEuMyA0OC40LC02OC45IDQxLjMsLTg5LjMgDQoJNTkuMiwtMTAyLjIgMzgsLTEwMi4yICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC0xMjIuMyA4NS40LC0xMDIuMyA2NCwtMTAyLjMgODEuOCwtODkuNSA3NC42LC02OC45IDkyLjcsLTgxLjMgMTEwLjYsLTY4LjkgMTAzLjQsLTg5LjMgDQoJMTIxLjMsLTEwMi4yIDEwMC4xLC0xMDIuMiAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTU0LjgsLTEyMi4zIDE0Ny41LC0xMDIuMyAxMjYuMSwtMTAyLjMgMTQzLjksLTg5LjUgMTM2LjcsLTY4LjkgMTU0LjgsLTgxLjMgMTcyLjcsLTY4LjkgMTY1LjUsLTg5LjMgDQoJMTgzLjQsLTEwMi4yIDE2Mi4yLC0xMDIuMiAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjE2LjksLTEyMi4zIDIwOS42LC0xMDIuMyAxODguMiwtMTAyLjMgMjA2LjEsLTg5LjUgMTk4LjgsLTY4LjkgMjE2LjksLTgxLjMgMjM0LjgsLTY4LjkgMjI3LjYsLTg5LjMgDQoJMjQ1LjYsLTEwMi4yIDIyNC4zLC0xMDIuMiAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjc5LC0xMjIuMyAyNzEuNywtMTAyLjMgMjUwLjQsLTEwMi4zIDI2OC4yLC04OS41IDI2MSwtNjguOSAyNzksLTgxLjMgMjk2LjksLTY4LjkgMjg5LjgsLTg5LjMgDQoJMzA3LjcsLTEwMi4yIDI4Ni40LC0xMDIuMiAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMzAuNSwtNjAuOCAyMy4zLC00MC44IDEuOSwtNDAuOCAxOS43LC0yOCAxMi41LC03LjQgMzAuNSwtMTkuOCA0OC40LC03LjQgNDEuMywtMjcuNyA1OS4yLC00MC43IA0KCTM4LC00MC43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI5Mi43LC02MC44IDg1LjQsLTQwLjggNjQsLTQwLjggODEuOCwtMjggNzQuNiwtNy40IDkyLjcsLTE5LjggMTEwLjYsLTcuNCAxMDMuNCwtMjcuNyAxMjEuMywtNDAuNyANCgkxMDAuMSwtNDAuNyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTU0LjgsLTYwLjggMTQ3LjUsLTQwLjggMTI2LjEsLTQwLjggMTQzLjksLTI4IDEzNi43LC03LjQgMTU0LjgsLTE5LjggMTcyLjcsLTcuNCAxNjUuNSwtMjcuNyANCgkxODMuNCwtNDAuNyAxNjIuMiwtNDAuNyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjE2LjksLTYwLjggMjA5LjYsLTQwLjggMTg4LjIsLTQwLjggMjA2LjEsLTI4IDE5OC44LC03LjQgMjE2LjksLTE5LjggMjM0LjgsLTcuNCAyMjcuNiwtMjcuNyANCgkyNDUuNiwtNDAuNyAyMjQuMywtNDAuNyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjc5LC02MC44IDI3MS43LC00MC44IDI1MC40LC00MC44IDI2OC4yLC0yOCAyNjEsLTcuNCAyNzksLTE5LjggMjk2LjksLTcuNCAyODkuOCwtMjcuNyAzMDcuNywtNDAuNyANCgkyODYuNCwtNDAuNyAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMzAuNSwyIDIzLjMsMjIgMS45LDIyIDE5LjcsMzQuOCAxMi41LDU1LjQgMzAuNSw0MyA0OC40LDU1LjQgNDEuMywzNS4xIDU5LjIsMjIuMSAzOCwyMi4xICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSI5Mi43LDIgODUuNCwyMiA2NCwyMiA4MS44LDM0LjggNzQuNiw1NS40IDkyLjcsNDMgMTEwLjYsNTUuNCAxMDMuNCwzNS4xIDEyMS4zLDIyLjEgMTAwLjEsMjIuMSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTU0LjgsMiAxNDcuNSwyMiAxMjYuMSwyMiAxNDMuOSwzNC44IDEzNi43LDU1LjQgMTU0LjgsNDMgMTcyLjcsNTUuNCAxNjUuNSwzNS4xIDE4My40LDIyLjEgDQoJMTYyLjIsMjIuMSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjE2LjksMiAyMDkuNiwyMiAxODguMiwyMiAyMDYuMSwzNC44IDE5OC44LDU1LjQgMjE2LjksNDMgMjM0LjgsNTUuNCAyMjcuNiwzNS4xIDI0NS42LDIyLjEgDQoJMjI0LjMsMjIuMSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjc5LDIgMjcxLjcsMjIgMjUwLjQsMjIgMjY4LjIsMzQuOCAyNjEsNTUuNCAyNzksNDMgMjk2LjksNTUuNCAyODkuOCwzNS4xIDMwNy43LDIyLjEgMjg2LjQsMjIuMSAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iMzAuNSw2OS42IDIzLjMsODkuNiAxLjksODkuNSAxOS43LDEwMi40IDEyLjUsMTIzIDMwLjUsMTEwLjUgNDguMSwxMjIgNDEuMywxMDIuNiA1OS4yLDg5LjcgMzgsODkuNyANCgkiLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjMwLjUiIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSI5Mi43IiBjeT0iMjguNyIgcj0iMjYuNyIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMTU1LjgiIGN5PSIyOC43IiByPSIyNi43Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIyMTYuOSIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjI3OSIgY3k9IjI4LjciIHI9IjI2LjciLz4NCjwvc3ZnPg0K");}\n',
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n.component-wrapper-price--info__icon-stars.icon-stars.icon-stars--small, .recommended__wheretobuy__items .quality-stars--small .icon-stars {width: 8rem !important;}\n.component-recommended-product__row .component-recommended-product__item__product--features{max-width:350px;}\n',
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n.component-sirius--lab a:hover {color: #fff;}\n.component-list-grid.tags-paywall .component-wrapper-price--offer .flex__col:has(.component-sirius) {flex: 100%;}\n@media screen and (min-width: 53.1875em) {.component-list-grid.tags-paywall .component-list-grid__item__product--details--item-quality {flex: 0 0 55% !important;}}\n\n@media screen and (min-width: 53.125em){.component-list-grid .list .component-list-grid__action-bar__item-quality {flex: auto !important;}}\n@media screen and (min-width: 53.125em){ .quality-label.quality-label--green-choice, .quality-label.quality-label--cheap-choice {z-index:1 !important;}}\n@media screen and (min-width: 53.125em){#detail-header__product-highlight .component-sirius {width: 1020px !important;}}\n#detail-header__product-highlight .component-detail-header__item-quality {flex: 0 0 56%;}\n\n.special-campaign a.btn.btn--primary { text-decoration: none }\n\n.collapsible-box__content .split--striped .split__item .icon-stars--small {width : 8rem !important;}\n\n.icon-stars--highlight,  .icon-stars--highlight--conditional,  .icon-stars--highlight, .icon-stars--highlight--conditional {padding: 0 !important;}\n\n.compare-table .icon-stars {padding: 0 !important;}\n\n.sticky-container:has(.compare-table) { top: 8.5rem !important;}\n\n@media screen and (max-width: 30em) {\n  .compare-wrapper{ margin-top: 11rem; }\n  .sticky-container:has(.compare-table) { top: 11.5rem !important; }\n}\n\n.component-yellow-boutique--item-quality .quality-label-wrapper--small .quality-label__label-text { font-size: 0.8rem !important; }\n\n.component-yellow-boutique--item-quality .quality-label-wrapper--small .quality-label{margin: 0 0 0 -4px !important;}\n@media screen and (max-width: 30em) { .component-yellow-boutique{margin: 1rem;} }\n\n@media screen and (min-width: 53.125em) { .component-yellow-boutique--item { max-width: 33.3333333333% !important; } }\n\n.component-lap-highlight.deal-of-the-day .component-lap-highlight__deal-of-the-day--get-personalized-deal .btn--medium{\n\t\tbackground-color: #fff;\n\t\tcolor: #b60a73;\n}\n',
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n@media screen and (min-width: 53.125em) {\n                    .component-lap-highlight__item .customlabels-gridview,\n                    .component-recommended-product__wrapper .customlabels-gridview { display:none; } }\n',
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n.component-best-deals-offers--item .component-wrapper-price{max-height:23rem;}\n',
        }}
      />
      {/* Garden 2025/01/14 - Safari fix for menu  */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n@media screen and (min-width: 53.125em) {\n        _::-webkit-full-page-media, .FEOMHeader .menu {\n        z-index: 9999999!important;\n    }\n        _::-webkit-full-page-media, .FEOMHeader .menu ul.level1 {\n        left: 0!important;\n    }\n        _::-webkit-full-page-media, .FEOMHeader .menu ul.level1,.FEOMHeader .menu ul.level1 .level2,.FEOMHeader .menu ul.level1 .level3,.FEOMHeader .menu ul.level1 .level4,.FEOMHeader .menu ul.level1 .level4 .extra,.FEOMHeader .menu ul.level1:before {\n            max-height: unset!important;\n        }\n        _::-webkit-full-page-media, .FEOMHeader.hasSkinDesktop .menu ul.level1,.FEOMHeader.hasSkinDesktop .menu ul.level1 .level2,.FEOMHeader.hasSkinDesktop .menu ul.level1 .level3,.FEOMHeader.hasSkinDesktop .menu ul.level1 .level4,.FEOMHeader.hasSkinDesktop .menu ul.level1 .level4 .extra,.FEOMHeader.hasSkinDesktop .menu ul.level1:before {\n            max-height: unset!important;\n        }\n        _::-webkit-full-page-media, .FEOMHeader.is-fixed .menu ul.level1,.FEOMHeader.is-fixed .menu ul.level1 .level2,.FEOMHeader.is-fixed .menu ul.level1 .level3,.FEOMHeader.is-fixed .menu ul.level1 .level4,.FEOMHeader.is-fixed .menu ul.level1 .level4 .extra,.FEOMHeader.is-fixed .menu ul.level1:before {\n            max-height: unset!important;\n        }\n}\n',
        }}
      />
      {/* MP*/}
    </>
  );
};

export default Layout;
