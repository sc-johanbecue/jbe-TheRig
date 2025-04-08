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
      <Head>
        <title>
          {fields?.Title?.value?.toString() ||
            'Sodexo Group Food Services &amp; Facilities Management'}
        </title>
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
        <meta content="Sodexo integrates catering, facilities management, and employee benefits services to create an improved quality of life for the people we serve, our clients, employees, customers and the community. " />
        <meta content="en" property="og:locale" />
        <meta
          content="Sodexo Group Food Services &amp; Facilities Management"
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
        <link
          rel="stylesheet"
          href="https://www.sodexo.com/_next/static/css/82c79a564f3ac4be.css"
        />
        <link
          rel="stylesheet"
          href="https://www.sodexo.com/_next/static/css/7258364f27e782a5.css"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://www.sodexo.com/_next/static/css/d1c4779c33d3f3bd.css"
          as="style"
        />
        <script
          type="text/javascript"
          async
          src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
        />
        <script
          async
          src="//sodexo-fr.videomarketingplatform.co/resources/um/integrations/google-tag-manager/glueframe-1.1.3.js"
        />
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-NGRCK3Z" />
        <script
          type="text/javascript"
          async
          src="https://t.contentsquare.net/uxa/4a912ed65f01e.js"
        />
        <script
          type="text/javascript"
          async
          src="https://static.hotjar.com/c/hotjar-5005374.js?sv=7"
        />
        <script type="text/javascript" async src="https://tag.aticdn.net/piano-analytics.js" />
        <script
          type="text/javascript"
          async
          src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js?did=af68c76a-4d0f-439d-b71a-a520761e4b2f"
        />
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-N3W8DT6" />
        <script defer noModule src="/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js" />
        <script src="/_next/static/chunks/webpack-298d49d36da548df.js" defer />
        <script src="/_next/static/chunks/framework-9620da855a94eb57.js" defer />
        <script src="/_next/static/chunks/main-2facddc7a75f0c44.js" defer />
        <script src="/_next/static/chunks/pages/_app-341dbd0e54409f54.js" defer />
        <script src="/_next/static/chunks/4333364f-94584e990f9d6ab0.js" defer />
        <script src="/_next/static/chunks/975-6f5469cf380f081c.js" defer />
        <script src="/_next/static/chunks/840-93f0fed481957f6f.js" defer />
        <script src="/_next/static/chunks/285-ed29a8c86bcb6bd9.js" defer />
        <script src="/_next/static/chunks/pages/%5B%5B...path%5D%5D-149ec4c58b8ca9df.js" defer />
        <script src="/_next/static/fjQkXPGL6oDwYVwaJbw8e/_buildManifest.js" defer />
        <script src="/_next/static/fjQkXPGL6oDwYVwaJbw8e/_ssgManifest.js" defer />
        <style id="__jsx-264729537" jsx>
          {`
          :root{--font-family-base: 'Theme Base', 'Open Sans', sans-serif;
          --font-family-heading: 'Theme Heading', 'Sansa Pro', sans-serif;
          `}
        </style>

        <meta
          id="ConnectiveDocSignExtentionInstalled"
          name="ConnectiveDocSignExtentionInstalled"
          data-extension-version="1.0.7"
        />
        <script
          src="https://cdn.cookielaw.org/scripttemplates/202408.1.0/otBannerSdk.js"
          async
          type="text/javascript"
        />
        <script
          async
          src="https://script.hotjar.com/modules.47bdc3ea03ae568fad7d.js"
          charSet="utf-8"
        />
        <script async src="https://script.hotjar.com/survey-v2.8884dcd5c15b9e2934fa.js" />
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

      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ position: 'absolute', width: '0', height: '0' }}
        aria-hidden="true"
        id="__SVG_SPRITE_NODE__"
      >
        <symbol xmlns="http://www.w3.org/2000/svg" id="icons">
          <symbol viewBox="0 0 12 12" id="icons_clock">
            <path
              fillRule="evenodd"
              clip-rule="evenodd"
              d="M6 1.132a4.868 4.868 0 1 0 0 9.736 4.868 4.868 0 0 0 0-9.736ZM0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6Zm6-3.283c.313 0 .566.253.566.566v2.414l1.106.738a.566.566 0 1 1-.627.942L5.686 6.47A.566.566 0 0 1 5.434 6V3.283c0-.313.253-.566.566-.566Z"
            ></path>
          </symbol>
          <symbol viewBox="0 0 12 12" id="icons_download">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.99731 1.483e-10C6.3655 -7.68223e-06 6.66398 0.298463 6.66399 0.666653L6.66412 6.68581L8.35748 4.94903C8.61451 4.68541 9.03659 4.68007 9.30021 4.9371C9.56384 5.19413 9.56918 5.61621 9.31214 5.87983L6.47482 8.78991C6.34934 8.9186 6.17722 8.99118 5.99748 8.99118C5.81775 8.99118 5.64562 8.9186 5.52015 8.78991L2.68282 5.87983C2.42579 5.61621 2.43113 5.19413 2.69476 4.9371C2.95838 4.68007 3.38046 4.68541 3.63749 4.94903L5.33078 6.68574L5.33066 0.666681C5.33065 0.298491 5.62912 7.68253e-06 5.99731 1.483e-10ZM0.666667 8.47863C1.03486 8.47863 1.33333 8.77711 1.33333 9.1453V10.6667H10.6667V9.1453C10.6667 8.77711 10.9652 8.47863 11.3333 8.47863C11.7015 8.47863 12 8.77711 12 9.1453V11.3333C12 11.7015 11.7015 12 11.3333 12H0.666667C0.298477 12 0 11.7015 0 11.3333V9.1453C0 8.77711 0.298477 8.47863 0.666667 8.47863Z"
            ></path>
          </symbol>
          <symbol viewBox="0 0 32 32" id="icons_calendar">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.4445 7C12.9968 7 13.4445 7.44772 13.4445 8L13.4445 9.66667H18.5555V8C18.5555 7.44771 19.0032 7 19.5555 7C20.1078 7 20.5555 7.44772 20.5555 8V9.66667H24C24.5523 9.66667 25 10.1144 25 10.6667V24C25 24.5523 24.5523 25 24 25H8C7.44772 25 7 24.5523 7 24V10.6667C7 10.1144 7.44772 9.66667 8 9.66667H11.4445L11.4445 8C11.4445 7.44771 11.8922 7 12.4445 7ZM11.4445 11.6667H9V14.1111L23 14.1111V11.6667H20.5555V12C20.5555 12.5523 20.1078 13 19.5555 13C19.0032 13 18.5555 12.5523 18.5555 12V11.6667H13.4445V12C13.4445 12.5523 12.9968 13 12.4445 13C11.8922 13 11.4445 12.5523 11.4445 12V11.6667ZM23 16.1111L9 16.1111V23H23V16.1111ZM12.3333 19.6667C12.3333 19.1144 12.781 18.6667 13.3333 18.6667H18.6667C19.219 18.6667 19.6667 19.1144 19.6667 19.6667C19.6667 20.219 19.219 20.6667 18.6667 20.6667H13.3333C12.781 20.6667 12.3333 20.219 12.3333 19.6667Z"
            ></path>
          </symbol>
          <symbol viewBox="0 0 12 12" id="icons_arrow">
            <path d="M8.03812 1.72944C7.74523 1.43654 7.27036 1.43654 6.97746 1.72944C6.68457 2.02233 6.68457 2.4972 6.97746 2.7901L8.03812 1.72944ZM11.4978 6.24975L12.0281 6.78008C12.321 6.48719 12.321 6.01232 12.0281 5.71942L11.4978 6.24975ZM6.97746 9.70941C6.68457 10.0023 6.68457 10.4772 6.97746 10.7701C7.27036 11.063 7.74523 11.063 8.03812 10.7701L6.97746 9.70941ZM11.5 6.99998C11.9142 6.99998 12.25 6.6642 12.25 6.24998C12.25 5.83577 11.9142 5.49998 11.5 5.49998V6.99998ZM1 5.49998C0.585786 5.49998 0.25 5.83577 0.25 6.24998C0.25 6.6642 0.585786 6.99998 1 6.99998V5.49998ZM6.97746 2.7901L10.9675 6.78008L12.0281 5.71942L8.03812 1.72944L6.97746 2.7901ZM10.9675 5.71942L6.97746 9.70941L8.03812 10.7701L12.0281 6.78008L10.9675 5.71942ZM11.5 5.49998H1V6.99998H11.5V5.49998Z"></path>
          </symbol>
          <symbol viewBox="0 0 16 14" fill="none" id="icons_dart">
            <path
              d="M9.67966 1.67969L14.9996 6.99967M14.9996 6.99967L9.67966 12.3197M14.9996 6.99967L1 6.99998"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </symbol>
          <symbol viewBox="0 0 12 12" id="icons_cross">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.23123 1.23123C1.53954 0.922923 2.03941 0.922923 2.34772 1.23123L6 4.88352L9.65228 1.23123C9.96059 0.922923 10.4605 0.922923 10.7688 1.23123C11.0771 1.53954 11.0771 2.03941 10.7688 2.34772L7.11648 6L10.7688 9.65228C11.0771 9.96059 11.0771 10.4605 10.7688 10.7688C10.4605 11.0771 9.96059 11.0771 9.65228 10.7688L6 7.11648L2.34772 10.7688C2.03941 11.0771 1.53954 11.0771 1.23123 10.7688C0.922923 10.4605 0.922923 9.96059 1.23123 9.65228L4.88352 6L1.23123 2.34772C0.922923 2.03941 0.922923 1.53954 1.23123 1.23123Z"
            ></path>
          </symbol>
          <symbol viewBox="0 0 12 12" id="icons_plus">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.94446 0.875C6.28964 0.875 6.56946 1.15482 6.56946 1.5V5.31944L10.5 5.31944C10.8452 5.31944 11.125 5.59926 11.125 5.94444C11.125 6.28962 10.8452 6.56944 10.5 6.56944L6.56946 6.56944V10.5C6.56946 10.8452 6.28964 11.125 5.94446 11.125C5.59928 11.125 5.31946 10.8452 5.31946 10.5V6.56944L1.5 6.56944C1.15482 6.56944 0.875 6.28962 0.875 5.94444C0.875 5.59926 1.15482 5.31944 1.5 5.31944L5.31946 5.31944L5.31946 1.5C5.31946 1.15482 5.59928 0.875 5.94446 0.875Z"
            ></path>
          </symbol>
          <symbol viewBox="0 0 12 12" id="icons_minus">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11 6.06946C11 6.41464 10.7202 6.69446 10.375 6.69446L1.625 6.69446C1.27982 6.69446 1 6.41464 1 6.06946C1 5.72428 1.27982 5.44446 1.625 5.44446L10.375 5.44446C10.7202 5.44446 11 5.72428 11 6.06946Z"
            ></path>
          </symbol>
          <symbol viewBox="0 0 12 12" id="icons_facebook">
            <g clip-path="url(#icons_clip0_628_1128)">
              <path d="M12 6.0364C12 2.7024 9.314 0 6 0C2.686 0 0 2.7024 0 6.0364C0 9.05 2.1936 11.5472 5.0624 12V7.7816H3.5392V6.036H5.0624V4.7064C5.0624 3.1936 5.958 2.3576 7.3288 2.3576C7.9848 2.3576 8.672 2.4756 8.672 2.4756V3.9612H7.9148C7.1696 3.9612 6.9376 4.4268 6.9376 4.9044V6.0364H8.6016L8.3356 7.7812H6.9376V12C9.8064 11.5472 12 9.05 12 6.0364Z"></path>
            </g>
            <defs>
              <clipPath id="icons_clip0_628_1128">
                <rect width="12" height="12" fill="white"></rect>
              </clipPath>
            </defs>
          </symbol>
          <symbol viewBox="0 0 12 12" id="icons_linkedin">
            <g clip-path="url(#icons_clip0_628_1126)">
              <path d="M12 0.882353V11.1176C12 11.3517 11.907 11.5761 11.7416 11.7416C11.5761 11.907 11.3517 12 11.1176 12H0.882353C0.648338 12 0.423908 11.907 0.258435 11.7416C0.0929619 11.5761 0 11.3517 0 11.1176L0 0.882353C0 0.648338 0.0929619 0.423908 0.258435 0.258435C0.423908 0.0929619 0.648338 0 0.882353 0L11.1176 0C11.3517 0 11.5761 0.0929619 11.7416 0.258435C11.907 0.423908 12 0.648338 12 0.882353ZM3.52941 4.58824H1.76471V10.2353H3.52941V4.58824ZM3.68824 2.64706C3.68917 2.51357 3.66379 2.38121 3.61357 2.25753C3.56334 2.13385 3.48925 2.02128 3.39552 1.92623C3.30178 1.83119 3.19025 1.75554 3.06728 1.7036C2.94431 1.65166 2.81231 1.62445 2.67882 1.62353H2.64706C2.3756 1.62353 2.11526 1.73137 1.92331 1.92331C1.73137 2.11526 1.62353 2.3756 1.62353 2.64706C1.62353 2.91852 1.73137 3.17885 1.92331 3.3708C2.11526 3.56275 2.3756 3.67059 2.64706 3.67059C2.78055 3.67387 2.91339 3.65082 3.03797 3.60275C3.16255 3.55468 3.27644 3.48253 3.37313 3.39043C3.46982 3.29833 3.54742 3.18808 3.60149 3.06598C3.65555 2.94388 3.68503 2.81232 3.68824 2.67882V2.64706ZM10.2353 6.80471C10.2353 5.10706 9.15529 4.44706 8.08235 4.44706C7.73105 4.42947 7.38128 4.50429 7.06791 4.66407C6.75456 4.82385 6.48856 5.06299 6.29647 5.35765H6.24706V4.58824H4.58824V10.2353H6.35294V7.23176C6.32743 6.92415 6.42433 6.6189 6.62258 6.38232C6.82084 6.14573 7.10443 5.99693 7.41177 5.96824H7.47882C8.04 5.96824 8.45647 6.32118 8.45647 7.21059V10.2353H10.2212L10.2353 6.80471Z"></path>
            </g>
            <defs>
              <clipPath id="icons_clip0_628_1126">
                <rect width="12" height="12" fill="white"></rect>
              </clipPath>
            </defs>
          </symbol>
          <symbol viewBox="0 0 12 12" id="icons_twitter">
            <path d="M7.14 5.078 11.61 0h-1.06L6.673 4.41 3.574 0H0l4.684 6.668L0 11.992h1.059l4.097-4.656 3.27 4.656H12ZM5.692 6.727l-.472-.665L1.44.782h1.625l3.047 4.261.477.664 3.96 5.543H8.927Zm0 0"></path>
          </symbol>
          <symbol>
            <symbol viewBox="0 0 12 12" id="icons_email">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.3943 6.31274L5.0397 6.85058C5.59597 7.31414 6.40399 7.31414 6.96025 6.85058L7.60566 6.31274L11.2911 9.99819C11.2055 10 11.109 10 11 10H1C0.890939 10 0.794494 10 0.708852 9.99819L4.3943 6.31274ZM0.0018106 9.29101L3.62291 5.66992L0.00330279 2.65358C0 2.75244 0 2.86681 0 3V9C0 9.109 0 9.2054 0.0018106 9.29101ZM0.781886 2.00069C0.848414 2 0.920888 2 1 2H11C11.0791 2 11.1516 2 11.2181 2.00069L6.32007 6.08236C6.13465 6.23688 5.86531 6.23688 5.67988 6.08236L0.781886 2.00069ZM11.9967 2.65354L8.37705 5.66992L11.9982 9.29106C12 9.20544 12 9.10902 12 9V3C12 2.8668 12 2.75241 11.9967 2.65354Z"
              ></path>
            </symbol>
            <symbol viewBox="0 0 12 12" id="icons_share">
              <g clip-path="url(#icons_clip0_628_1104)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.25234 1.23365C8.91168 1.23365 8.63552 1.50981 8.63552 1.85047C8.63552 2.19113 8.91168 2.46729 9.25234 2.46729C9.593 2.46729 9.86916 2.19113 9.86916 1.85047C9.86916 1.50981 9.593 1.23365 9.25234 1.23365ZM7.40187 1.85047C7.40187 0.828483 8.23035 0 9.25234 0C10.2743 0 11.1028 0.828483 11.1028 1.85047C11.1028 2.87245 10.2743 3.70094 9.25234 3.70094C8.8475 3.70094 8.47302 3.57093 8.16838 3.35039C8.15042 3.36404 8.13153 3.37685 8.11174 3.38873L3.67867 6.04857C3.69333 6.14238 3.70094 6.23853 3.70094 6.33645C3.70094 6.50391 3.67869 6.66618 3.637 6.82046L7.85919 8.93156C8.19838 8.5439 8.69677 8.29906 9.25234 8.29906C10.2743 8.29906 11.1028 9.12755 11.1028 10.1495C11.1028 11.1715 10.2743 12 9.25234 12C8.23035 12 7.40187 11.1715 7.40187 10.1495C7.40187 10.1272 7.40227 10.1049 7.40305 10.0827L3.03255 7.89749C2.99736 7.8799 2.96458 7.85939 2.93437 7.83641C2.62974 8.05693 2.25528 8.18692 1.85047 8.18692C0.828483 8.18692 0 7.35844 0 6.33645C0 5.31447 0.828483 4.48598 1.85047 4.48598C2.32746 4.48598 2.7623 4.66646 3.09043 4.96285L7.46654 2.33718C7.42438 2.18209 7.40187 2.01891 7.40187 1.85047ZM1.85047 5.71963C1.50981 5.71963 1.23365 5.99579 1.23365 6.33645C1.23365 6.67711 1.50981 6.95327 1.85047 6.95327C2.19113 6.95327 2.46729 6.67711 2.46729 6.33645C2.46729 5.99579 2.19113 5.71963 1.85047 5.71963ZM9.25234 9.53271C8.91168 9.53271 8.63552 9.80887 8.63552 10.1495C8.63552 10.4902 8.91168 10.7664 9.25234 10.7664C9.593 10.7664 9.86916 10.4902 9.86916 10.1495C9.86916 9.80887 9.593 9.53271 9.25234 9.53271Z"
                ></path>
              </g>
              <defs>
                <clipPath id="icons_clip0_628_1104">
                  <rect width="12" height="12" fill="white"></rect>
                </clipPath>
              </defs>
            </symbol>
            <symbol viewBox="0 0 12 12" id="icons_chevron">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.46967 1.46966C4.76256 1.17677 5.23744 1.17677 5.53033 1.46966L9.77297 5.7123C10.0659 6.00519 10.0659 6.48007 9.77297 6.77296L5.53033 11.0156C5.23744 11.3085 4.76256 11.3085 4.46967 11.0156C4.17678 10.7227 4.17678 10.2478 4.46967 9.95494L8.18198 6.24263L4.46967 2.53032C4.17678 2.23743 4.17678 1.76255 4.46967 1.46966Z"
              ></path>
            </symbol>
          </symbol>
          <symbol viewBox="0 0 14 14" id="icons_planet">
            <path d="M12.999 6.99925V6.99625C12.999 5.22083 12.2261 3.6264 10.9987 2.52994L10.9927 2.52495C10.9775 2.5086 10.9606 2.49401 10.9422 2.48145L10.9412 2.48095C9.85106 1.52375 8.44918 0.997184 6.9985 1.00001C5.48263 1.00001 4.09874 1.56299 3.04383 2.49195L3.05033 2.48645C3.03762 2.49609 3.02589 2.50698 3.01533 2.51895C2.38115 3.08052 1.87352 3.77094 1.52609 4.5435C1.17865 5.31607 0.999327 6.15365 1 7.00075C1 8.77567 1.77194 10.3701 2.99833 11.4671L3.00433 11.4721C3.02022 11.4901 3.03798 11.5063 3.05733 11.5206L3.05833 11.5211C4.14816 12.4768 5.54896 13.0026 6.9985 13C8.45481 13.0022 9.86162 12.4716 10.9537 11.5081L10.9472 11.5136C11.5923 10.9526 12.1095 10.2596 12.4637 9.48148C12.8178 8.70334 13.0007 7.8582 13 7.00325V6.99975L12.999 6.99925ZM10.7682 10.9016C10.471 10.6612 10.1514 10.4499 9.81376 10.2706L9.78127 10.2546C10.0877 9.37115 10.2722 8.35269 10.2897 7.29324V7.28524H12.42C12.3482 8.65588 11.7583 9.94802 10.7697 10.9001L10.7682 10.9016ZM7.28548 10.1491C7.92692 10.1836 8.52637 10.3246 9.07933 10.5541L9.04333 10.5411C8.60037 11.5511 7.97692 12.245 7.28548 12.3975V10.1491ZM7.28548 9.57714V7.28524H9.71927C9.69996 8.23433 9.5354 9.17486 9.23131 10.0741L9.25081 10.0086C8.63009 9.75349 7.96991 9.60768 7.29947 9.57764L7.28548 9.57714ZM7.28548 6.71326V4.42136C7.974 4.38994 8.65185 4.23921 9.28881 3.97588L9.24931 3.99038C9.52679 4.79985 9.69727 5.73281 9.71927 6.70276V6.71326H7.28548ZM7.28548 3.84939V1.60199C7.97692 1.75448 8.60037 2.44545 9.04333 3.4584C8.52637 3.6734 7.92692 3.81389 7.29997 3.84889L7.28548 3.84939ZM8.71236 1.84947C9.30148 2.04598 9.85246 2.34228 10.3412 2.72544L10.3297 2.71644C10.1082 2.89043 9.85976 3.05442 9.59778 3.19692L9.56979 3.21092C9.35809 2.7113 9.06703 2.24919 8.70786 1.84247L8.71236 1.84797V1.84947ZM6.71252 1.60349V3.84939C6.09582 3.81793 5.48908 3.68095 4.91867 3.4444L4.95467 3.4574C5.39963 2.44745 6.02208 1.75398 6.71352 1.60149L6.71252 1.60349ZM4.42871 3.20942C4.1577 3.0636 3.89947 2.89518 3.65678 2.70594L3.66878 2.71494C4.1433 2.34303 4.67705 2.05367 5.24765 1.85897L5.28564 1.84747C4.93588 2.24317 4.65089 2.69169 4.44121 3.17642L4.42871 3.20942ZM6.71352 4.42086V6.71276H4.27973C4.30173 5.73231 4.47221 4.79935 4.76919 3.92438L4.74969 3.98988C5.37017 4.24461 6.02998 4.39024 6.70003 4.42036L6.71352 4.42086ZM6.71352 7.28474V9.57664C6.025 9.60806 5.34715 9.7588 4.71019 10.0221L4.74969 10.0076C4.47221 9.19866 4.30173 8.2652 4.27973 7.29524V7.28474H6.71352ZM6.71352 10.1486V12.396C6.02208 12.2435 5.39863 11.5526 4.95567 10.5396C5.47263 10.3246 6.07208 10.1846 6.69903 10.1496L6.71352 10.1486ZM5.28864 12.1485C4.69967 11.9526 4.14871 11.657 3.65978 11.2746L3.67178 11.2836C3.89326 11.1096 4.14174 10.9456 4.40372 10.8031L4.43171 10.7891C4.64164 11.2889 4.9327 11.7506 5.29314 12.1555L5.28864 12.1505V12.1485ZM9.57028 10.7886C9.86026 10.9461 10.1087 11.1096 10.3422 11.2921L10.3302 11.2831C9.85569 11.655 9.32195 11.9443 8.75135 12.139L8.71336 12.1505C9.06312 11.755 9.34811 11.3067 9.55779 10.8221L9.57028 10.7886ZM12.42 6.71326H10.2897C10.2744 5.67878 10.0959 4.65321 9.76077 3.6744L9.78127 3.74339C10.1344 3.55743 10.4688 3.33775 10.7797 3.08742L10.7677 3.09642C11.7542 4.04489 12.3444 5.33224 12.419 6.69876L12.42 6.71326ZM3.23082 3.09692C3.51879 3.33091 3.84226 3.5454 4.18524 3.72789L4.21773 3.74389C3.91126 4.62735 3.72677 5.64581 3.70928 6.70526V6.71326H1.57845C1.65029 5.34262 2.24022 4.05048 3.22882 3.09842L3.23082 3.09692ZM1.57895 7.28524H3.70928C3.7246 8.31972 3.90312 9.34529 4.23823 10.3241L4.21773 10.2551C3.84226 10.4546 3.51929 10.6691 3.21932 10.9111L3.23132 10.9021C2.24477 9.95361 1.65463 8.66626 1.57995 7.29974L1.57895 7.28524Z"></path>
          </symbol>
          <symbol viewBox="0 0 12 12" id="icons_search">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.11111 1.33333C3.0247 1.33333 1.33333 3.0247 1.33333 5.11111C1.33333 7.19752 3.0247 8.88889 5.11111 8.88889C7.19752 8.88889 8.88889 7.19752 8.88889 5.11111C8.88889 3.0247 7.19752 1.33333 5.11111 1.33333ZM0 5.11111C0 2.28832 2.28832 0 5.11111 0C7.9339 0 10.2222 2.28832 10.2222 5.11111C10.2222 6.28218 9.82838 7.36126 9.16592 8.22312L11.8047 10.8619C12.0651 11.1223 12.0651 11.5444 11.8047 11.8047C11.5444 12.0651 11.1223 12.0651 10.8619 11.8047L8.22311 9.16593C7.36125 9.82838 6.28217 10.2222 5.11111 10.2222C2.28832 10.2222 0 7.9339 0 5.11111Z"
            ></path>
          </symbol>
          <symbol viewBox="0 0 12 12" id="icons_play">
            <path d="M10.248 5.56711C10.5814 5.75956 10.5814 6.24068 10.248 6.43313L4.24805 9.89724C3.91471 10.0897 3.49805 9.84912 3.49805 9.46422L3.49805 2.53602C3.49805 2.15112 3.91471 1.91056 4.24805 2.10301L10.248 5.56711Z"></path>
          </symbol>
          <symbol viewBox="0 0 12 12" id="icons_pause">
            <path d="M2.40234 2.29993C2.40234 2.02378 2.6262 1.79993 2.90234 1.79993H4.30234C4.57849 1.79993 4.80234 2.02378 4.80234 2.29993V9.69993C4.80234 9.97607 4.57849 10.1999 4.30234 10.1999H2.90234C2.6262 10.1999 2.40234 9.97607 2.40234 9.69993V2.29993Z"></path>
            <path d="M7.19531 2.29993C7.19531 2.02378 7.41917 1.79993 7.69531 1.79993H9.09531C9.37146 1.79993 9.59531 2.02378 9.59531 2.29993V9.69993C9.59531 9.97607 9.37146 10.1999 9.09531 10.1999H7.69531C7.41917 10.1999 7.19531 9.97607 7.19531 9.69993V2.29993Z"></path>
          </symbol>
          <symbol viewBox="0 0 32 32" id="icons_burger">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 11C8 10.4477 8.44772 10 9 10L23 10C23.5523 10 24 10.4477 24 11C24 11.5523 23.5523 12 23 12L9 12C8.44772 12 8 11.5523 8 11Z"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 16.3333C8 15.781 8.44772 15.3333 9 15.3333L23 15.3333C23.5523 15.3333 24 15.7811 24 16.3333C24 16.8856 23.5523 17.3333 23 17.3333L9 17.3333C8.44772 17.3333 8 16.8856 8 16.3333Z"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 21.6667C8 21.1144 8.44772 20.6667 9 20.6667L23 20.6667C23.5523 20.6667 24 21.1144 24 21.6667C24 22.219 23.5523 22.6667 23 22.6667L9 22.6667C8.44772 22.6667 8 22.219 8 21.6667Z"
            ></path>
          </symbol>
          <symbol viewBox="0 0 12 14" id="icons_location" stroke="white">
            <path
              d="M10.5062 4.06961C10.2579 3.46649 9.89378 2.91851 9.43491 2.45696C8.97605 1.99536 8.43142 1.62821 7.83192 1.37839C7.23244 1.12857 6.58993 1 5.94106 1C5.29219 1 4.64968 1.12857 4.0502 1.37839C3.45073 1.62821 2.90603 1.99436 2.4472 2.45597C1.98839 2.91756 1.62443 3.46556 1.37612 4.06867C1.12781 4.67178 1 5.31818 1 5.97098C1 6.62377 1.12781 7.27018 1.37612 7.87329C1.62443 8.47639 1.98839 9.02444 2.4472 9.48598L5.94106 13L9.43491 9.48697C9.89378 9.02543 10.2579 8.47744 10.5062 7.87433C10.7546 7.27121 10.8824 6.6248 10.8824 5.97197C10.8824 5.31915 10.7546 4.67272 10.5062 4.06961Z"
              stroke-width="1.25"
              stroke-linejoin="round"
            ></path>
            <path
              d="M8.05884 5.94119C8.05884 7.11073 7.11073 8.05883 5.94119 8.05883C4.77165 8.05883 3.82354 7.11073 3.82354 5.94119C3.82354 4.77164 4.77165 3.82354 5.94119 3.82354C7.11073 3.82354 8.05884 4.77164 8.05884 5.94119Z"
              stroke-width="1.25"
              stroke-linejoin="round"
            ></path>
          </symbol>
          <symbol viewBox="0 0 12 12" id="icons_instagram">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 0C4.3704 0 4.1664 0.0068 3.5264 0.036C2.8876 0.0652 2.4512 0.1668 2.0696 0.3152C1.6696 0.4656 1.3068 0.7016 1.0068 1.0072C0.701689 1.30685 0.465543 1.6694 0.3148 2.0696C0.1672 2.4512 0.0652 2.888 0.036 3.5268C0.0072 4.1664 0 4.37 0 6C0 7.63 0.0068 7.8336 0.036 8.4736C0.0652 9.1124 0.1668 9.5488 0.3152 9.9304C0.4656 10.3304 0.7016 10.6932 1.0072 10.9932C1.30686 11.2983 1.6694 11.5344 2.0696 11.6852C2.4512 11.8332 2.8876 11.9348 3.5264 11.964C4.1664 11.9932 4.3704 12 6 12C7.6296 12 7.8336 11.9932 8.4736 11.964C9.1124 11.9348 9.5488 11.8332 9.9304 11.6848C10.3304 11.5344 10.6932 11.2984 10.9932 10.9928C11.2983 10.6931 11.5345 10.3306 11.6852 9.9304C11.8332 9.5488 11.9348 9.1124 11.964 8.4736C11.9932 7.8336 12 7.6296 12 6C12 4.3704 11.9932 4.1664 11.964 3.5264C11.9348 2.8876 11.8332 2.4512 11.6848 2.0696C11.5342 1.66923 11.298 1.30653 10.9928 1.0068C10.6931 0.701689 10.3306 0.465543 9.9304 0.3148C9.5488 0.1672 9.112 0.0652 8.4732 0.036C7.8336 0.0072 7.63 0 6 0ZM6 1.0812C7.602 1.0812 7.792 1.0872 8.4248 1.116C9.0096 1.1428 9.3272 1.24 9.5388 1.3228C9.8188 1.4312 10.0188 1.5616 10.2288 1.7712C10.4388 1.9812 10.5688 2.1812 10.6772 2.4612C10.7596 2.6728 10.8572 2.9904 10.884 3.5752C10.9128 4.208 10.9188 4.398 10.9188 6C10.9188 7.602 10.9128 7.792 10.884 8.4248C10.8572 9.0096 10.76 9.3272 10.6772 9.5388C10.5812 9.79942 10.428 10.0352 10.2288 10.2288C10.0352 10.428 9.79944 10.5812 9.5388 10.6772C9.3272 10.7596 9.0096 10.8572 8.4248 10.884C7.792 10.9128 7.6024 10.9188 6 10.9188C4.3976 10.9188 4.208 10.9128 3.5752 10.884C2.9904 10.8572 2.6728 10.76 2.4612 10.6772C2.20058 10.5812 1.9648 10.428 1.7712 10.2288C1.57207 10.0352 1.41885 9.79941 1.3228 9.5388C1.2404 9.3272 1.1428 9.0096 1.116 8.4248C1.0872 7.792 1.0812 7.602 1.0812 6C1.0812 4.398 1.0872 4.208 1.116 3.5752C1.1428 2.9904 1.24 2.6728 1.3228 2.4612C1.4312 2.1812 1.5616 1.9812 1.7712 1.7712C1.96478 1.57202 2.20056 1.41879 2.4612 1.3228C2.6728 1.2404 2.9904 1.1428 3.5752 1.116C4.208 1.0872 4.398 1.0812 6 1.0812Z"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 8.002C5.73709 8.002 5.47676 7.95022 5.23387 7.84961C4.99097 7.749 4.77027 7.60153 4.58437 7.41563C4.39847 7.22973 4.251 7.00903 4.15039 6.76613C4.04978 6.52324 3.998 6.26291 3.998 6C3.998 5.73709 4.04978 5.47676 4.15039 5.23387C4.251 4.99097 4.39847 4.77028 4.58437 4.58437C4.77027 4.39847 4.99097 4.251 5.23387 4.15039C5.47676 4.04978 5.73709 3.998 6 3.998C6.53096 3.998 7.04018 4.20892 7.41563 4.58437C7.79107 4.95982 8.002 5.46904 8.002 6C8.002 6.53096 7.79107 7.04018 7.41563 7.41563C7.04018 7.79108 6.53096 8.002 6 8.002ZM6 2.916C5.18207 2.916 4.39764 3.24092 3.81928 3.81928C3.24092 4.39764 2.916 5.18207 2.916 6C2.916 6.81793 3.24092 7.60236 3.81928 8.18072C4.39764 8.75908 5.18207 9.084 6 9.084C6.81793 9.084 7.60235 8.75908 8.18072 8.18072C8.75908 7.60236 9.084 6.81793 9.084 6C9.084 5.18207 8.75908 4.39764 8.18072 3.81928C7.60235 3.24092 6.81793 2.916 6 2.916ZM9.9812 2.86C9.9812 3.05334 9.90439 3.23877 9.76768 3.37548C9.63097 3.5122 9.44554 3.589 9.2522 3.589C9.05886 3.589 8.87343 3.5122 8.73672 3.37548C8.6 3.23877 8.5232 3.05334 8.5232 2.86C8.5232 2.66666 8.6 2.48123 8.73672 2.34452C8.87343 2.20781 9.05886 2.131 9.2522 2.131C9.44554 2.131 9.63097 2.20781 9.76768 2.34452C9.90439 2.48123 9.9812 2.66666 9.9812 2.86Z"
            ></path>
          </symbol>
          <symbol viewBox="0 0 12 9" id="icons_youtube">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.6752 0.254171C11.1913 0.392809 11.5995 0.801029 11.7381 1.31707C11.9923 2.25674 12 4.20539 12 4.20539C12 4.20539 12 6.16175 11.7458 7.09371C11.6072 7.60976 11.199 8.01797 10.6829 8.15661C9.75096 8.41078 6 8.41078 6 8.41078C6 8.41078 2.24904 8.41078 1.31707 8.15661C0.801026 8.01797 0.392812 7.60976 0.254172 7.09371C0 6.15405 0 4.20539 0 4.20539C0 4.20539 0 2.25674 0.24647 1.32478C0.385109 0.808729 0.793325 0.400514 1.30937 0.261876C2.24134 0.0077003 5.9923 0 5.9923 0C5.9923 0 9.74326 0 10.6752 0.254171ZM7.91014 4.20539L4.79846 6.0077V2.40308L7.91014 4.20539Z"
            ></path>
          </symbol>
          <symbol viewBox="0 0 19 12" id="icons_variation">
            <path d="M16.7917 3.52562L11.1093 9.005C10.8246 9.27958 10.3629 9.27958 10.0782 9.005L6.94792 5.98656L1.99477 10.7628C1.71001 11.0374 1.24833 11.0374 0.963568 10.7628C0.678811 10.4882 0.678811 10.043 0.963568 9.76844L6.43232 4.495C6.71708 4.22041 7.17876 4.22041 7.46351 4.495L10.5938 7.51344L15.7605 2.53125H13.1458C12.7431 2.53125 12.4167 2.21645 12.4167 1.82812C12.4167 1.4398 12.7431 1.125 13.1458 1.125H17.5208C17.9235 1.125 18.25 1.4398 18.25 1.82812V6.04687C18.25 6.4352 17.9235 6.75 17.5208 6.75C17.1181 6.75 16.7917 6.4352 16.7917 6.04687V3.52562Z"></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.5729 4.04044L11.2612 9.16246C10.8917 9.51876 10.2958 9.51876 9.92631 9.16246L6.94792 6.29044L2.14661 10.9203C1.77711 11.2766 1.18122 11.2766 0.811726 10.9203C0.437758 10.5597 0.437758 9.97159 0.811726 9.61097L6.28048 4.33754C6.64997 3.98124 7.24586 3.98124 7.61536 4.33754L10.5938 7.20956L15.2185 2.75H13.1458C12.6299 2.75 12.1979 2.34469 12.1979 1.82812C12.1979 1.31156 12.6299 0.90625 13.1458 0.90625H17.5208C18.0368 0.90625 18.4688 1.31156 18.4688 1.82812V6.04687C18.4688 6.56344 18.0368 6.96875 17.5208 6.96875C17.0049 6.96875 16.5729 6.56344 16.5729 6.04687V4.04044ZM11.1093 9.005C10.8246 9.27958 10.3629 9.27958 10.0782 9.005L6.94792 5.98656L1.99477 10.7628C1.71001 11.0374 1.24833 11.0374 0.963568 10.7628C0.678811 10.4882 0.678811 10.043 0.963568 9.76844L6.43232 4.495C6.71708 4.22041 7.17876 4.22041 7.46351 4.495L10.5938 7.51344L15.7605 2.53125H13.1458C12.7431 2.53125 12.4167 2.21645 12.4167 1.82812C12.4167 1.4398 12.7431 1.125 13.1458 1.125H17.5208C17.9235 1.125 18.25 1.4398 18.25 1.82812V6.04687C18.25 6.4352 17.9235 6.75 17.5208 6.75C17.1181 6.75 16.7917 6.4352 16.7917 6.04687V3.52562L11.1093 9.005Z"
            ></path>
          </symbol>
          <symbol viewBox="0 0 36 36" fill="none" id="icons_sodexo-favicon">
            <path
              fill="#283897"
              d="M27.09 4.682 29.383 0l.657 4.764 4.686-1.606-3.278 4.104 3.551 2.695-4.742.354L30 15.26 27.368 11.6l-3.874 3.495 1.453-4.921-4.565-.61 4.442-2.471-1.82-4.241 4.086 1.829Z"
            ></path>
            <path
              fill="#DA2020"
              d="M0 35c9.43-5.117 17.622-12.99 23.428-19.8C19.253 27.994 9.195 34.87 0 35Z"
            ></path>
          </symbol>
          <symbol viewBox="0 0 131 75" id="icons_quote">
            <path d="M131 0H99.7972L66.5315 59.0909V75H110.886L131 0ZM64.4685 0H33.2657L0 59.0909V75H44.3543L64.4685 0Z"></path>
          </symbol>
          <symbol viewBox="0 0 40 40" fill="none" id="icons_chevron-rounded">
            <circle cx="20" cy="20" r="19.5" transform="rotate(-180 20 20)"></circle>
            <path
              d="M12.8333 21.6667L19.9044 14.5956L26.9754 21.6667"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </symbol>
        </symbol>
      </svg>
      <div>
        <div className="Header_header__fake__XuqIA Header_header__fake--without-progress-bar__Y0RZY"></div>
        <header className="Header_header__lDmSR Header_header--hide__ec1NG" role="banner">
          <div className="Header_header__content__YuahI Header_header__content--hide__Zn37G">
            <div className="MainNavMobile_main-nav-mobile__33IiE">
              <div className="MainNavMobile_main-nav-mobile__header__UAcKF">
                <Link
                  title="Opens homepage (same window)"
                  target="_self"
                  className="Button_btn__Xvq6a MainNavMobile_main-nav-mobile__header__logo__neAwj Button_btn--link__JI8fR Button_btn--unshaped__MfqLg"
                  aria-label="Sodexo Homepage"
                  role="menuitem"
                  href="/"
                >
                  <img
                    alt=""
                    width="97"
                    height="32"
                    className="main-nav-mobile__header__img"
                    src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Logos/Sodexo_Logotype_Blue.png?h=32&amp;w=97"
                  />
                </Link>
                <div className="MainNavMobile_main-nav-mobile__header__items__7hMro">
                  <Link
                    title=""
                    target="_self"
                    className="Button_btn__Xvq6a MainNavMobile_main-nav-mobile__header__button__WiPJV Button_btn--link__JI8fR Button_btn--unshaped__MfqLg"
                    aria-label="Search"
                    role="menuitem"
                    href="/How-can-we-help-you"
                  >
                    <span className="Icon_icon__qNAb6" style={{ height: '32px', width: '32px' }}>
                      <svg aria-hidden="true" viewBox="0 0 32 32">
                        <use xlinkHref="#icons_search"></use>
                      </svg>
                    </span>
                  </Link>
                  <button
                    aria-label="Open"
                    className="Button_btn__Xvq6a MainNavMobile_main-nav-mobile__header__button__WiPJV MainNavMobile_main-nav-mobile__header__button--no-collapse___BlDD Button_btn--unshaped__MfqLg"
                    role="menuitem"
                  >
                    <span className="Icon_icon__qNAb6" style={{ height: '32px', width: '32px' }}>
                      <svg aria-hidden="true" viewBox="0 0 32 32">
                        <use xlinkHref="#icons_burger"></use>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <nav
                aria-label="Main navigation"
                className="MainNavMobile_main-nav-mobile__container__k_30_"
                role="navigation"
              >
                <div className="MainNavMobile_main-nav-mobile__nav__D74og MainNavMobile_main-nav-mobile__nav--is-local-nav__NJmVh">
                  <ul
                    className="MainNavMobile_main-nav-mobile__items__H1CF6 MainNavMobile_main-nav-mobile__items--is-local-nav__Mq9kl"
                    role="menubar"
                  >
                    <li className="MainNavMobile_main-nav-mobile__item__XKfAe">
                      <button
                        className="Button_btn__Xvq6a MainNavMobile_main-nav-mobile__item__button__8aioY Button_btn--blue__16_CO Button_btn--full__ovmcM Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                        role="menuitem"
                      >
                        <span>About Us</span>
                        <span
                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                          style={{ height: '24px', width: '24px' }}
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24">
                            <use xlinkHref="#icons_chevron"></use>
                          </svg>
                        </span>
                      </button>
                    </li>
                    <li className="MainNavMobile_main-nav-mobile__item__XKfAe">
                      <button
                        className="Button_btn__Xvq6a MainNavMobile_main-nav-mobile__item__button__8aioY Button_btn--blue__16_CO Button_btn--full__ovmcM Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                        role="menuitem"
                      >
                        <span>Brands &amp; Services</span>
                        <span
                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                          style={{ height: '24px', width: '24px' }}
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24">
                            <use xlinkHref="#icons_chevron"></use>
                          </svg>
                        </span>
                      </button>
                    </li>
                    <li className="MainNavMobile_main-nav-mobile__item__XKfAe">
                      <button
                        className="Button_btn__Xvq6a MainNavMobile_main-nav-mobile__item__button__8aioY Button_btn--blue__16_CO Button_btn--full__ovmcM Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                        role="menuitem"
                      >
                        <span>Corporate Responsibility</span>
                        <span
                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                          style={{ height: '24px', width: '24px' }}
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24">
                            <use xlinkHref="#icons_chevron"></use>
                          </svg>
                        </span>
                      </button>
                    </li>
                    <li className="MainNavMobile_main-nav-mobile__item__XKfAe">
                      <button
                        className="Button_btn__Xvq6a MainNavMobile_main-nav-mobile__item__button__8aioY Button_btn--blue__16_CO Button_btn--full__ovmcM Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                        role="menuitem"
                      >
                        <span>Insights</span>
                        <span
                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                          style={{ height: '24px', width: '24px' }}
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24">
                            <use xlinkHref="#icons_chevron"></use>
                          </svg>
                        </span>
                      </button>
                    </li>
                    <li className="MainNavMobile_main-nav-mobile__item__XKfAe">
                      <button
                        className="Button_btn__Xvq6a MainNavMobile_main-nav-mobile__item__button__8aioY Button_btn--blue__16_CO Button_btn--full__ovmcM Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                        role="menuitem"
                      >
                        <span>Working at Sodexo</span>
                        <span
                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                          style={{ height: '24px', width: '24px' }}
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24">
                            <use xlinkHref="#icons_chevron"></use>
                          </svg>
                        </span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    className="MainBottomNav_main-bottom-nav__uP_AN main-nav__bottom--is-local-nav"
                    role="menubar"
                  >
                    <li className="MainBottomNav_main-bottom-nav__item__dZPyI">
                      <button
                        className="Button_btn__Xvq6a MainBottomNav_main-bottom-nav__button__cUZ0L Button_btn--blue__16_CO Button_btn--full__ovmcM Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                        role="menuitem"
                      >
                        <span>Investors</span>
                        <span
                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                          style={{ height: '24px', width: '24px' }}
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24">
                            <use xlinkHref="#icons_chevron"></use>
                          </svg>
                        </span>
                      </button>
                    </li>
                    <li className="MainBottomNav_main-bottom-nav__item__dZPyI">
                      <button
                        className="Button_btn__Xvq6a MainBottomNav_main-bottom-nav__button__cUZ0L Button_btn--blue__16_CO Button_btn--full__ovmcM Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                        role="menuitem"
                      >
                        <span>Newsroom</span>
                        <span
                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                          style={{ height: '24px', width: '24px' }}
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24">
                            <use xlinkHref="#icons_chevron"></use>
                          </svg>
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
                <nav
                  aria-label="Contact us"
                  className="SupNav_sup-nav__dNFRi color-white MainNavMobile_main-nav-mobile__footer__0rTjp"
                  role="navigation"
                >
                  <ul className="SupNav_sup-nav__items__OjN_T">
                    <li className="SupNav_sup-nav__item__8bdW7 SupNav_sup-nav__item_skip-to-content__xkvcu">
                      <Link
                        href="#id_main_skip_to_content"
                        className="Button_btn__Xvq6a SupNav_sup-nav__item__skip-button__sINS2 Button_btn--white__F9cW2 Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-white__RvzsU"
                        title=""
                        target="_self"
                      >
                        Go to content
                      </Link>
                    </li>
                    <li className="SupNav_sup-nav__item__8bdW7">
                      <div className="LineSlide_line-slide__mrcBo" data-theme="white">
                        <Link
                          title="Opens page (same window)"
                          target="_self"
                          className="Button_btn__Xvq6a LineSlide_line-slide__button__hD2YY SupNav_sup-nav__item__button__yPRgg Button_btn--white__F9cW2 Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-white__RvzsU"
                          href="/contact-us"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </li>
                    <li className="SupNav_sup-nav__item__8bdW7">
                      <div className="LineSlide_line-slide__mrcBo" data-theme="white">
                        <button className="Button_btn__Xvq6a LineSlide_line-slide__button__hD2YY SupNav_sup-nav__item__button__yPRgg Button_btn--white__F9cW2 Button_btn--reverse__NQ5qh Button_btn--unshaped__MfqLg Button_btn--unshaped-white__RvzsU">
                          <span>Location</span>
                          <span
                            className="Icon_icon__qNAb6"
                            style={{ height: '24px', width: '24px' }}
                          >
                            <svg aria-hidden="true" viewBox="0 0 24 24">
                              <use xlinkHref="#icons_planet"></use>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </li>
                    <li className="SupNav_sup-nav__item__8bdW7">
                      <div
                        aria-label="Language selection"
                        className="HeaderLanguageSelector_selector__1J9ck"
                      >
                        <div className="LineSlide_line-slide__mrcBo" data-theme="white">
                          <Link
                            className="LineSlide_line-slide__button__hD2YY font-semibold"
                            href="/fr"
                          >
                            fr
                          </Link>
                        </div>
                        <span className="HeaderLanguageSelector_separator__7DZ_l">/</span>
                      </div>
                      <div
                        aria-label="Language selection"
                        className="HeaderLanguageSelector_selector__1J9ck"
                      >
                        <div className="LineSlide_line-slide__mrcBo" data-theme="white">
                          <Link
                            className="LineSlide_line-slide__button__hD2YY font-semibold"
                            href="https://www.sodexo.com/"
                          >
                            en
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
              </nav>
            </div>
            <nav
              aria-label="Contact us"
              className="SupNav_sup-nav__dNFRi color-white Header_header__sup-nav__HISv_"
              role="navigation"
            >
              <ul className="SupNav_sup-nav__items__OjN_T">
                <li className="SupNav_sup-nav__item__8bdW7 SupNav_sup-nav__item_skip-to-content__xkvcu">
                  <Link
                    href="#id_main_skip_to_content"
                    className="Button_btn__Xvq6a SupNav_sup-nav__item__skip-button__sINS2 Button_btn--white__F9cW2 Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-white__RvzsU"
                    title=""
                    target="_self"
                  >
                    Go to content
                  </Link>
                </li>
                <li className="SupNav_sup-nav__item__8bdW7">
                  <div className="LineSlide_line-slide__mrcBo" data-theme="white">
                    <Link
                      title="Opens page (same window)"
                      target="_self"
                      className="Button_btn__Xvq6a LineSlide_line-slide__button__hD2YY SupNav_sup-nav__item__button__yPRgg Button_btn--white__F9cW2 Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-white__RvzsU"
                      href="/contact-us"
                    >
                      Contact Us
                    </Link>
                  </div>
                </li>
                <li className="SupNav_sup-nav__item__8bdW7">
                  <div className="LineSlide_line-slide__mrcBo" data-theme="white">
                    <button className="Button_btn__Xvq6a LineSlide_line-slide__button__hD2YY SupNav_sup-nav__item__button__yPRgg Button_btn--white__F9cW2 Button_btn--reverse__NQ5qh Button_btn--unshaped__MfqLg Button_btn--unshaped-white__RvzsU">
                      <span>Location</span>
                      <span className="Icon_icon__qNAb6" style={{ height: '24px', width: '24px' }}>
                        <svg aria-hidden="true" viewBox="0 0 24 24">
                          <use xlinkHref="#icons_planet"></use>
                        </svg>
                      </span>
                    </button>
                  </div>
                </li>
                <li className="SupNav_sup-nav__item__8bdW7">
                  <div
                    aria-label="Language selection"
                    className="HeaderLanguageSelector_selector__1J9ck"
                  >
                    <div className="LineSlide_line-slide__mrcBo" data-theme="white">
                      <Link
                        className="LineSlide_line-slide__button__hD2YY font-semibold"
                        href="/fr"
                      >
                        fr
                      </Link>
                    </div>
                    <span className="HeaderLanguageSelector_separator__7DZ_l">/</span>
                  </div>
                  <div
                    aria-label="Language selection"
                    className="HeaderLanguageSelector_selector__1J9ck"
                  >
                    <div className="LineSlide_line-slide__mrcBo" data-theme="white">
                      <Link
                        className="LineSlide_line-slide__button__hD2YY font-semibold"
                        href="https://www.sodexo.com/"
                      >
                        en
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
            <div className="Header_header__main-nav__container__T0Tcd">
              <nav
                aria-label="Main navigation"
                className="MainNav_main-nav__W_abG"
                role="navigation"
              >
                <ul className="MainNav_main-nav__items__yB2c3" role="menubar">
                  <li className="MainNav_main-nav__item___rOZL">
                    <Link
                      title="Opens homepage (same window)"
                      target="_self"
                      className="Button_btn__Xvq6a MainNav_main-nav__item__logo__ReTIR Button_btn--link__JI8fR Button_btn--unshaped__MfqLg"
                      aria-label="Sodexo Homepage"
                      role="menuitem"
                      href="/"
                    >
                      <img
                        alt=""
                        width="131"
                        height="42"
                        src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Logos/Sodexo_Logotype_Blue.png?h=42&amp;iar=0&amp;w=131"
                      />
                    </Link>
                  </li>
                  <li className="MainNav_main-nav__item___rOZL">
                    <div
                      className="IconRotate_icon-rotate__es0G_"
                      data-rotate-end="270"
                      data-rotate-start="90"
                    >
                      <div className="LineSlide_line-slide__mrcBo" data-theme="secondary">
                        <button
                          aria-expanded="false"
                          aria-haspopup="menu"
                          className="Button_btn__Xvq6a LineSlide_line-slide__button__hD2YY MainNav_main-nav__item__button__6pfmO MainNav_font-bold__xTgVJ Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                          role="menuitem"
                        >
                          <span>About Us</span>
                          <span
                            className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                            style={{ height: '16px', width: '16px' }}
                          >
                            <svg aria-hidden="true" viewBox="0 0 16 16">
                              <use xlinkHref="#icons_chevron"></use>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <section className="MegaMenu_megamenu__0nlkj" id="About Us_0" role="menu">
                      <div className="MegaMenu_megamenu__container__zZn9P">
                        <div className="MegaMenu_megamenu__category___Q8he">
                          <p className="MegaMenu_megamenu__category__title__BQ4mJ">About Us</p>
                          <p>
                            Sodexo was created in 1966. Today, we are the global leader in
                            sustainable food and valued experiences at every moment in life: learn,
                            work, heal and play. We believe in creating a better day for everyone to
                            build a better life for all. Whether you’re looking for key figures or
                            our in-depth mission – this is who we are.
                          </p>
                        </div>
                        <div className="MegaMenu_megamenu__category__content__qn5GV">
                          <div className="circle-scale">
                            <button
                              aria-label="Back"
                              className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--dark-blue__7qBLy MegaMenu_megamenu__button__close__QnTqq Button_btn--unshaped__MfqLg"
                              role="menuitem"
                            >
                              <span
                                className="Icon_icon__qNAb6"
                                style={{ height: '24px', width: '24px' }}
                              >
                                <svg aria-hidden="true" viewBox="0 0 24 24">
                                  <use xlinkHref="#icons_cross"></use>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div className="MegaMenu_megamenu__content__Raoni">
                            <ul className="MegaMenu_megamenu__items__ol09A">
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/about-us/sodexo-in-brief"
                                  >
                                    Sodexo in Brief
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/about-us/mission-and-ambition"
                                  >
                                    Our mission and ambition
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/about-us/sodexo-leadership-team"
                                  >
                                    Sodexo Leadership Team
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/about-us/board-of-directors"
                                  >
                                    Board of Directors
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/about-us/innovation-approach"
                                  >
                                    Our Innovation Approach
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/about-us/our-history"
                                  >
                                    Our History
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/about-us/awards"
                                  >
                                    Our Awards
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                            </ul>
                            <div className="MegaMenuPush_megamenu-push__LGiSD">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt=""
                                  loading="lazy"
                                  width="292"
                                  height="164"
                                  decoding="async"
                                  data-nimg="1"
                                  className="MegaMenuPush_megamenu-push__picture__hG58Z PushImage_push-image--rounded-top-left__2b0_6"
                                  src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Menu_images_292x164/URD-FY2024.jpg?h=164&amp;iar=0&amp;w=292"
                                  style={{ color: 'transparent', objectFit: 'cover' }}
                                />
                              </div>
                              <p className="MegaMenuPush_megamenu-push__title__QoWNg MegaMenuPush_font-h4__G44Yq">
                                Integrated Report Fiscal 2024
                              </p>
                              <p className="MegaMenuPush_megamenu-push__description__L24Xd MegaMenuPush_font-body-small__uG15h">
                                Discover how we are creating a better everyday in the our report.
                              </p>
                              <Link
                                title=""
                                target="_self"
                                className="Button_btn__Xvq6a MegaMenuPush_megamenu-push__button__PmRwc Button_btn--link__JI8fR Button_btn--outline-blue__W1LG6"
                                href="/investors/financial-results-and-publications/integrated-report"
                              >
                                Download the report
                                <span
                                  className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                  style={{ height: '24px', width: '24px' }}
                                >
                                  <svg aria-hidden="true" viewBox="0 0 24 24">
                                    <use xlinkHref="#icons_arrow"></use>
                                  </svg>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </li>
                  <li className="MainNav_main-nav__item___rOZL">
                    <div
                      className="IconRotate_icon-rotate__es0G_"
                      data-rotate-end="270"
                      data-rotate-start="90"
                    >
                      <div className="LineSlide_line-slide__mrcBo" data-theme="secondary">
                        <button
                          aria-expanded="false"
                          aria-haspopup="menu"
                          className="Button_btn__Xvq6a LineSlide_line-slide__button__hD2YY MainNav_main-nav__item__button__6pfmO MainNav_font-bold__xTgVJ Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                          role="menuitem"
                        >
                          <span>Brands &amp; Services</span>
                          <span
                            className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                            style={{ height: '16px', width: '16px' }}
                          >
                            <svg aria-hidden="true" viewBox="0 0 16 16">
                              <use xlinkHref="#icons_chevron"></use>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <section
                      className="MegaMenu_megamenu__0nlkj"
                      id="Brands &amp; Services_1"
                      role="menu"
                    >
                      <div className="MegaMenu_megamenu__container__zZn9P">
                        <div className="MegaMenu_megamenu__category___Q8he">
                          <p className="MegaMenu_megamenu__category__title__BQ4mJ">
                            Brands &amp; Services
                          </p>
                          <p>
                            Our portfolio of activities encompasses Food Services, Facilities
                            Management Services, as well as Hospitality services with Sodexo Live!
                            From the daily services we deliver to the brands we manage – this is
                            what we do.{' '}
                          </p>
                        </div>
                        <div className="MegaMenu_megamenu__category__content__qn5GV">
                          <div className="circle-scale">
                            <button
                              aria-label="Back"
                              className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--dark-blue__7qBLy MegaMenu_megamenu__button__close__QnTqq Button_btn--unshaped__MfqLg"
                              role="menuitem"
                            >
                              <span
                                className="Icon_icon__qNAb6"
                                style={{ height: '24px', width: '24px' }}
                              >
                                <svg aria-hidden="true" viewBox="0 0 24 24">
                                  <use xlinkHref="#icons_cross"></use>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div className="MegaMenu_megamenu__content__Raoni">
                            <ul className="MegaMenu_megamenu__items__ol09A">
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <button
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                  >
                                    <span>Food Brands &amp; Services</span>
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_chevron"></use>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <ul className="MegaMenu_megamenu__subItem__fxm_D">
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title="Opens page (same window)"
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/brands-services/food/brands"
                                      >
                                        Brands Overview
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title="Opens page (same window)"
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/brands-services/food/brands/modern-recipe"
                                      >
                                        Modern Recipe
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title="Opens page (same window)"
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/brands-services/food/brands/kitchen-works"
                                      >
                                        Kitchen Works
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title="Opens page (same window)"
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/brands-services/food/brands/the-good-eating-company"
                                      >
                                        The Good Eating Company
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title="Opens page (same window)"
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/brands-services/food/services"
                                      >
                                        Food Services
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/brands-services/facilities-management-services"
                                  >
                                    Facility Management Services
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/brands-services/sodexo-live"
                                  >
                                    Sodexo Live!
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/brands-services/entegra"
                                  >
                                    Entegra
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/brands-services/circles"
                                  >
                                    Circles
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                            </ul>
                            <div className="MegaMenuPush_megamenu-push__LGiSD">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt=""
                                  loading="lazy"
                                  width="292"
                                  height="164"
                                  decoding="async"
                                  data-nimg="1"
                                  className="MegaMenuPush_megamenu-push__picture__hG58Z PushImage_push-image--rounded-top-left__2b0_6"
                                  src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Menu_images_292x164/Brands-292x164.jpg?h=164&amp;iar=0&amp;w=292"
                                  style={{ color: 'transparent', objectFit: 'cover' }}
                                />
                              </div>
                              <p className="MegaMenuPush_megamenu-push__title__QoWNg MegaMenuPush_font-h4__G44Yq">
                                Our food brands
                              </p>
                              <p className="MegaMenuPush_megamenu-push__description__L24Xd MegaMenuPush_font-body-small__uG15h">
                                We prepare local, fresh, and healthy foods that taste delicious and
                                enhance our guests’ experience whether they are at a work, a
                                sporting event or their school cafeteria.
                              </p>
                              <Link
                                title="Opens page (same window)"
                                target="_self"
                                className="Button_btn__Xvq6a MegaMenuPush_megamenu-push__button__PmRwc Button_btn--link__JI8fR Button_btn--outline-blue__W1LG6"
                                href="/brands-services/food/brands"
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
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </li>
                  <li className="MainNav_main-nav__item___rOZL">
                    <div
                      className="IconRotate_icon-rotate__es0G_"
                      data-rotate-end="270"
                      data-rotate-start="90"
                    >
                      <div className="LineSlide_line-slide__mrcBo" data-theme="secondary">
                        <button
                          aria-expanded="false"
                          aria-haspopup="menu"
                          className="Button_btn__Xvq6a LineSlide_line-slide__button__hD2YY MainNav_main-nav__item__button__6pfmO MainNav_font-bold__xTgVJ Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                          role="menuitem"
                        >
                          <span>Corporate Responsibility</span>
                          <span
                            className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                            style={{ height: '16px', width: '16px' }}
                          >
                            <svg aria-hidden="true" viewBox="0 0 16 16">
                              <use xlinkHref="#icons_chevron"></use>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <section
                      className="MegaMenu_megamenu__0nlkj"
                      id="Corporate Responsibility_2"
                      role="menu"
                    >
                      <div className="MegaMenu_megamenu__container__zZn9P">
                        <div className="MegaMenu_megamenu__category___Q8he">
                          <p className="MegaMenu_megamenu__category__title__BQ4mJ">
                            Corporate Responsibility
                          </p>
                          <p>
                            We feel responsible for supporting individuals, communities and the
                            environment. We commit to business integrity through setting our
                            sustainable goals and checking our progress – thanks to reports,
                            roadmaps and partnerships. Fostering health and safety, fighting for
                            human rights and inclusion, protecting the planet – this is how we act.
                          </p>
                        </div>
                        <div className="MegaMenu_megamenu__category__content__qn5GV">
                          <div className="circle-scale">
                            <button
                              aria-label="Back"
                              className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--dark-blue__7qBLy MegaMenu_megamenu__button__close__QnTqq Button_btn--unshaped__MfqLg"
                              role="menuitem"
                            >
                              <span
                                className="Icon_icon__qNAb6"
                                style={{ height: '24px', width: '24px' }}
                              >
                                <svg aria-hidden="true" viewBox="0 0 24 24">
                                  <use xlinkHref="#icons_cross"></use>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div className="MegaMenu_megamenu__content__Raoni">
                            <ul className="MegaMenu_megamenu__items__ol09A">
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <button
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                  >
                                    <span>Our Commitments</span>
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_chevron"></use>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <ul className="MegaMenu_megamenu__subItem__fxm_D">
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/our-commitments/CSR-commitments-progress"
                                      >
                                        CSR Commitments &amp; Progress
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/our-commitments/materiality-matrix"
                                      >
                                        Materiality Matrix
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/our-commitments/partnerships"
                                      >
                                        Partnerships
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/our-commitments/policies-and-positioning"
                                      >
                                        Policies and Positioning
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/our-commitments/business-integrity-human-rights"
                                      >
                                        Business Integrity
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/our-commitments/human-rights"
                                      >
                                        Human Rights
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <button
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                  >
                                    <span>Impact on Individuals</span>
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_chevron"></use>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <ul className="MegaMenu_megamenu__subItem__fxm_D">
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/impact-on-environment/healthy-sustainable-eating"
                                      >
                                        Healthy &amp; Sustainable Eating
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/impact-on-communities/responsible-sourcing"
                                      >
                                        Responsible Sourcing
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/impact-on-individuals/health-safety"
                                      >
                                        Our Health and Safety Culture
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <button
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                  >
                                    <span>Impact on Communities</span>
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_chevron"></use>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <ul className="MegaMenu_megamenu__subItem__fxm_D">
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/impact-on-communities/community-support"
                                      >
                                        Community Support
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/impact-on-communities/responsible-sourcing"
                                      >
                                        Responsible Sourcing
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <button
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                  >
                                    <span>Impact on Environment</span>
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_chevron"></use>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <ul className="MegaMenu_megamenu__subItem__fxm_D">
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/impact-on-environment/our-climate-journey"
                                      >
                                        Our Contribution for Climate
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/impact-on-environment/saving-resources-reducing-waste"
                                      >
                                        Saving Resources and Reducing Waste
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/impact-on-environment/healthy-sustainable-eating"
                                      >
                                        Committed to sustainable eating
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/impact-on-communities/responsible-sourcing"
                                      >
                                        Responsible Sourcing
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <div className="MegaMenuPush_megamenu-push__LGiSD">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt=""
                                  loading="lazy"
                                  width="292"
                                  height="164"
                                  decoding="async"
                                  data-nimg="1"
                                  className="MegaMenuPush_megamenu-push__picture__hG58Z PushImage_push-image--rounded-top-left__2b0_6"
                                  src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Menu_images_292x164/Stop-Hunger-2024-Impact-report-Menu.jpg?h=164&amp;iar=0&amp;w=292"
                                  style={{ color: 'transparent', objectFit: 'cover' }}
                                />
                              </div>
                              <p className="MegaMenuPush_megamenu-push__title__QoWNg MegaMenuPush_font-h4__G44Yq">
                                Stop Hunger 2024 Impact Report
                              </p>
                              <p className="MegaMenuPush_megamenu-push__description__L24Xd MegaMenuPush_font-body-small__uG15h">
                                Inspiring stories, lasting impact. Discover Stop Hunger&quot;ss 2024
                                Impact Report
                              </p>
                              <Link
                                href="https://www.stop-hunger.org/cms/render/live/en/sites/stophunger/home/actualites/news/content-col1-area/latest-news/2024-stop-hunger-impact-report.html"
                                className="Button_btn__Xvq6a MegaMenuPush_megamenu-push__button__PmRwc Button_btn--link__JI8fR Button_btn--outline-blue__W1LG6"
                                title="Opens website (new window)"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Read the report
                                <span
                                  className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                  style={{ height: '24px', width: '24px' }}
                                >
                                  <svg aria-hidden="true" viewBox="0 0 24 24">
                                    <use xlinkHref="#icons_arrow"></use>
                                  </svg>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </li>
                  <li className="MainNav_main-nav__item___rOZL">
                    <div
                      className="IconRotate_icon-rotate__es0G_"
                      data-rotate-end="270"
                      data-rotate-start="90"
                    >
                      <div className="LineSlide_line-slide__mrcBo" data-theme="secondary">
                        <button
                          aria-expanded="false"
                          aria-haspopup="menu"
                          className="Button_btn__Xvq6a LineSlide_line-slide__button__hD2YY MainNav_main-nav__item__button__6pfmO MainNav_font-bold__xTgVJ Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                          role="menuitem"
                        >
                          <span>Insights</span>
                          <span
                            className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                            style={{ height: '16px', width: '16px' }}
                          >
                            <svg aria-hidden="true" viewBox="0 0 16 16">
                              <use xlinkHref="#icons_chevron"></use>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <section className="MegaMenu_megamenu__0nlkj" id="Insights_3" role="menu">
                      <div className="MegaMenu_megamenu__container__zZn9P">
                        <div className="MegaMenu_megamenu__category___Q8he">
                          <p className="MegaMenu_megamenu__category__title__BQ4mJ">Insights</p>
                          <p>
                            We have stories to tell and insights to share. Whether envisioning the
                            future of the workplace, hunting for tech innovations, promoting
                            sustainable practices, or offering our expert views on food, health and
                            safety – this is how we think.
                          </p>
                        </div>
                        <div className="MegaMenu_megamenu__category__content__qn5GV">
                          <div className="circle-scale">
                            <button
                              aria-label="Back"
                              className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--dark-blue__7qBLy MegaMenu_megamenu__button__close__QnTqq Button_btn--unshaped__MfqLg"
                              role="menuitem"
                            >
                              <span
                                className="Icon_icon__qNAb6"
                                style={{ height: '24px', width: '24px' }}
                              >
                                <svg aria-hidden="true" viewBox="0 0 24 24">
                                  <use xlinkHref="#icons_cross"></use>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div className="MegaMenu_megamenu__content__Raoni">
                            <ul className="MegaMenu_megamenu__items__ol09A">
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/blog/our-everyday-stories"
                                  >
                                    Our everyday stories
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title="Opens page (same window)"
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/working-at-sodexo/our-people-stories"
                                  >
                                    Our people stories
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                            </ul>
                            <div className="MegaMenuPush_megamenu-push__LGiSD">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt=""
                                  loading="lazy"
                                  width="292"
                                  height="164"
                                  decoding="async"
                                  data-nimg="1"
                                  className="MegaMenuPush_megamenu-push__picture__hG58Z PushImage_push-image--rounded-top-left__2b0_6"
                                  src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Menu_images_292x164/Insights-Cfc-Menu.jpg?h=164&amp;iar=0&amp;w=292"
                                  style={{ color: 'transparent', objectFit: 'cover' }}
                                />
                              </div>
                              <p className="MegaMenuPush_megamenu-push__title__QoWNg MegaMenuPush_font-h4__G44Yq">
                                Discover the Cook for Change! – The sustainable chef challenge
                              </p>
                              <p className="MegaMenuPush_megamenu-push__description__L24Xd MegaMenuPush_font-body-small__uG15h">
                                Get inspired by the creativity of our 8 eco-chef finalists as they
                                crafted delicious, planet-friendly dishes in the grand final in
                                Paris.
                              </p>
                              <Link
                                title="Opens page (same window)"
                                target="_self"
                                className="Button_btn__Xvq6a MegaMenuPush_megamenu-push__button__PmRwc Button_btn--link__JI8fR Button_btn--outline-blue__W1LG6"
                                href="/blog/our-everyday-stories/business-stories/cook-for-change-2024"
                              >
                                Watch the video
                                <span
                                  className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                  style={{ height: '24px', width: '24px' }}
                                >
                                  <svg aria-hidden="true" viewBox="0 0 24 24">
                                    <use xlinkHref="#icons_arrow"></use>
                                  </svg>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </li>
                  <li className="MainNav_main-nav__item___rOZL">
                    <div
                      className="IconRotate_icon-rotate__es0G_"
                      data-rotate-end="270"
                      data-rotate-start="90"
                    >
                      <div className="LineSlide_line-slide__mrcBo" data-theme="secondary">
                        <button
                          aria-expanded="false"
                          aria-haspopup="menu"
                          className="Button_btn__Xvq6a LineSlide_line-slide__button__hD2YY MainNav_main-nav__item__button__6pfmO MainNav_font-bold__xTgVJ Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                          role="menuitem"
                        >
                          <span>Working at Sodexo</span>
                          <span
                            className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                            style={{ height: '16px', width: '16px' }}
                          >
                            <svg aria-hidden="true" viewBox="0 0 16 16">
                              <use xlinkHref="#icons_chevron"></use>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <section
                      className="MegaMenu_megamenu__0nlkj"
                      id="Working at Sodexo_4"
                      role="menu"
                    >
                      <div className="MegaMenu_megamenu__container__zZn9P">
                        <div className="MegaMenu_megamenu__category___Q8he">
                          <p className="MegaMenu_megamenu__category__title__BQ4mJ">
                            Working at Sodexo
                          </p>
                          <p>
                            Working with us is more than a job: it’s becoming a part of something
                            greater because we believe our everyday actions have an impact. Our
                            employees’ stories show we’re a group of humans who belong in a company
                            that allows you to thrive and act with purpose. If you’re looking for a
                            career – this is how we work.
                          </p>
                        </div>
                        <div className="MegaMenu_megamenu__category__content__qn5GV">
                          <div className="circle-scale">
                            <button
                              aria-label="Back"
                              className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--dark-blue__7qBLy MegaMenu_megamenu__button__close__QnTqq Button_btn--unshaped__MfqLg"
                              role="menuitem"
                            >
                              <span
                                className="Icon_icon__qNAb6"
                                style={{ height: '24px', width: '24px' }}
                              >
                                <svg aria-hidden="true" viewBox="0 0 24 24">
                                  <use xlinkHref="#icons_cross"></use>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div className="MegaMenu_megamenu__content__Raoni">
                            <ul className="MegaMenu_megamenu__items__ol09A">
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/working-at-sodexo/more-than-a-job"
                                  >
                                    More than a job
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/working-at-sodexo/find-a-job"
                                  >
                                    Find a job
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/working-at-sodexo/belonging-and-inclusion"
                                  >
                                    Belonging &amp; Inclusion
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/working-at-sodexo/our-people-stories"
                                  >
                                    People Stories
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/working-at-sodexo/more-than-a-job/vita"
                                  >
                                    Vita
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                            </ul>
                            <div className="MegaMenuPush_megamenu-push__LGiSD">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt="health workers"
                                  loading="lazy"
                                  width="393"
                                  height="397"
                                  decoding="async"
                                  data-nimg="1"
                                  className="MegaMenuPush_megamenu-push__picture__hG58Z PushImage_push-image--rounded-top-left__2b0_6"
                                  src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Menu_images_393x397/working_at_menu_image_square2.jpg?h=397&amp;iar=0&amp;w=393"
                                  style={{ color: 'transparent', objectFit: 'cover' }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </li>
                </ul>
                <ul className="MainRightNav_main-right-nav__hR4Vf" role="menubar">
                  <li className="MainRightNav_main-right-nav__item__muzGi">
                    <div
                      className="IconRotate_icon-rotate__es0G_"
                      data-rotate-end="270"
                      data-rotate-start="90"
                    >
                      <div className="TextSlide_text-slide__6LG59" data-theme="light">
                        <button
                          aria-expanded="false"
                          aria-haspopup="menu"
                          className="Button_btn__Xvq6a TextSlide_text-slide__button__RS_o1 MainRightNav_main-right-nav__button__myVXL Button_btn--dark-blue__mOPUf Button_btn--unshaped__MfqLg Button_btn--unshaped-dark-blue__UGX4S"
                          role="menuitem"
                        >
                          <span>Investors</span>
                          <span
                            className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                            style={{ height: '16px', width: '16px' }}
                          >
                            <svg aria-hidden="true" viewBox="0 0 16 16">
                              <use xlinkHref="#icons_chevron"></use>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <section className="MegaMenu_megamenu__0nlkj" id="Investors_0" role="menu">
                      <div className="MegaMenu_megamenu__container__zZn9P">
                        <div className="MegaMenu_megamenu__category___Q8he">
                          <p className="MegaMenu_megamenu__category__title__BQ4mJ">Investors</p>
                          <p>
                            We provide transparent financial news and quarterly announcements as
                            well as detailed share information.
                          </p>
                        </div>
                        <div className="MegaMenu_megamenu__category__content__qn5GV">
                          <div className="circle-scale">
                            <button
                              aria-label="Back"
                              className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--dark-blue__7qBLy MegaMenu_megamenu__button__close__QnTqq Button_btn--unshaped__MfqLg"
                              role="menuitem"
                            >
                              <span
                                className="Icon_icon__qNAb6"
                                style={{ height: '24px', width: '24px' }}
                              >
                                <svg aria-hidden="true" viewBox="0 0 24 24">
                                  <use xlinkHref="#icons_cross"></use>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div className="MegaMenu_megamenu__content__Raoni">
                            <ul className="MegaMenu_megamenu__items__ol09A">
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <button
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                  >
                                    <span>Financial Results and Publications</span>
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_chevron"></use>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <ul className="MegaMenu_megamenu__subItem__fxm_D">
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/financial-results-and-publications/financial-results"
                                      >
                                        Financial Results
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/financial-results-and-publications/Universal-Registration-Document"
                                      >
                                        Universal Registration Document
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title="Opens page (same window)"
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/financial-results-and-publications/integrated-report"
                                      >
                                        Integrated Report Fiscal 2024
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/financial-results-and-publications/archives"
                                      >
                                        Presentation archive
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/financial-results-and-publications/pluxee"
                                      >
                                        Pluxee Spin-off and Listing
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <button
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                  >
                                    <span>News</span>
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_chevron"></use>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <ul className="MegaMenu_megamenu__subItem__fxm_D">
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/news/newsroom"
                                      >
                                        Press Releases
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/news/financial-calendar"
                                      >
                                        Financial Calendar
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <button
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                  >
                                    <span>Shareholders</span>
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_chevron"></use>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <ul className="MegaMenu_megamenu__subItem__fxm_D">
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/shareholders/benefits-registered-shareholder"
                                      >
                                        Benefits of being a registered shareholder
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/shareholders/shareholders-meetings"
                                      >
                                        Shareholder Meetings
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/shareholders/share-ownership"
                                      >
                                        Share Ownership
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/shareholders/bellon-sa"
                                      >
                                        Bellon SA
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <button
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                  >
                                    <span>Governance</span>
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_chevron"></use>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <ul className="MegaMenu_megamenu__subItem__fxm_D">
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/about-us/board-of-directors"
                                      >
                                        Board of Directors
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/about-us/sodexo-leadership-team"
                                      >
                                        Sodexo Leadership Team
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/Governance/risk-factors"
                                      >
                                        Risk factors
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/Governance/compensation"
                                      >
                                        Corporate Officers Compensation
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/Governance/related-party-transactions"
                                      >
                                        Related-party Transactions
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <button
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                  >
                                    <span>Sodexo Share</span>
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_chevron"></use>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <ul className="MegaMenu_megamenu__subItem__fxm_D">
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/sodexo-share/share-price"
                                      >
                                        Share Price
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/sodexo-share/share-profile"
                                      >
                                        Share Profile
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/sodexo-share/dividends"
                                      >
                                        Dividends
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/sodexo-share/ADR"
                                      >
                                        ADR
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <button
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                  >
                                    <span>Debt and Bonds</span>
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_chevron"></use>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <ul className="MegaMenu_megamenu__subItem__fxm_D">
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/Debt-bonds/financing-strategy"
                                      >
                                        Financing Strategy
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/Debt-bonds/debt-structure"
                                      >
                                        Debt Structure
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/Debt-bonds/credit-rating"
                                      >
                                        Credit Rating
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/Debt-bonds/documentation"
                                      >
                                        Debt Documentation
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/investors/regulated-information"
                                  >
                                    Regulated Information
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                            </ul>
                            <div className="MegaMenuPush_megamenu-push__LGiSD">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt=""
                                  loading="lazy"
                                  width="292"
                                  height="164"
                                  decoding="async"
                                  data-nimg="1"
                                  className="MegaMenuPush_megamenu-push__picture__hG58Z PushImage_push-image--rounded-top-left__2b0_6"
                                  src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Menu_images_292x164/H1-2025-menu-image.jpg?h=164&amp;iar=0&amp;w=292"
                                  style={{ color: 'transparent', objectFit: 'cover' }}
                                />
                              </div>
                              <p className="MegaMenuPush_megamenu-push__title__QoWNg MegaMenuPush_font-h4__G44Yq">
                                H1 Fiscal 2025 results
                              </p>
                              <p className="MegaMenuPush_megamenu-push__description__L24Xd MegaMenuPush_font-body-small__uG15h">
                                Friday, April 4th 2025
                              </p>
                              <Link
                                href="https://edge.media-server.com/mmc/p/wnyop4w8"
                                className="Button_btn__Xvq6a MegaMenuPush_megamenu-push__button__PmRwc Button_btn--link__JI8fR Button_btn--outline-blue__W1LG6"
                                title="Opens web page (new window)"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Watch the webcast
                                <span
                                  className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                  style={{ height: '24px', width: '24px' }}
                                >
                                  <svg aria-hidden="true" viewBox="0 0 24 24">
                                    <use xlinkHref="#icons_arrow"></use>
                                  </svg>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </li>
                  <li className="MainRightNav_main-right-nav__item__muzGi">
                    <div
                      className="IconRotate_icon-rotate__es0G_"
                      data-rotate-end="270"
                      data-rotate-start="90"
                    >
                      <div className="TextSlide_text-slide__6LG59" data-theme="light">
                        <button
                          aria-expanded="false"
                          aria-haspopup="menu"
                          className="Button_btn__Xvq6a TextSlide_text-slide__button__RS_o1 MainRightNav_main-right-nav__button__myVXL Button_btn--dark-blue__mOPUf Button_btn--unshaped__MfqLg Button_btn--unshaped-dark-blue__UGX4S"
                          role="menuitem"
                        >
                          <span>Newsroom</span>
                          <span
                            className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                            style={{ height: '16px', width: '16px' }}
                          >
                            <svg aria-hidden="true" viewBox="0 0 16 16">
                              <use xlinkHref="#icons_chevron"></use>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <section className="MegaMenu_megamenu__0nlkj" id="Newsroom_1" role="menu">
                      <div className="MegaMenu_megamenu__container__zZn9P">
                        <div className="MegaMenu_megamenu__category___Q8he">
                          <p className="MegaMenu_megamenu__category__title__BQ4mJ">Newsroom</p>
                          <p>
                            We’re always bustling with activity and are glad to share our latest
                            news, press releases, institutional reports and images.
                          </p>
                        </div>
                        <div className="MegaMenu_megamenu__category__content__qn5GV">
                          <div className="circle-scale">
                            <button
                              aria-label="Back"
                              className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--dark-blue__7qBLy MegaMenu_megamenu__button__close__QnTqq Button_btn--unshaped__MfqLg"
                              role="menuitem"
                            >
                              <span
                                className="Icon_icon__qNAb6"
                                style={{ height: '24px', width: '24px' }}
                              >
                                <svg aria-hidden="true" viewBox="0 0 24 24">
                                  <use xlinkHref="#icons_cross"></use>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div className="MegaMenu_megamenu__content__Raoni">
                            <ul className="MegaMenu_megamenu__items__ol09A">
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/news/newsroom"
                                  >
                                    Newsroom
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                            </ul>
                            <div className="MegaMenuPush_megamenu-push__LGiSD">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt="office work"
                                  loading="lazy"
                                  width="393"
                                  height="397"
                                  decoding="async"
                                  data-nimg="1"
                                  className="MegaMenuPush_megamenu-push__picture__hG58Z PushImage_push-image--rounded-top-left__2b0_6"
                                  src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Menu_images_393x397/Newsroom_menu_image_square.jpg?h=397&amp;iar=0&amp;w=393"
                                  style={{ color: 'transparent', objectFit: 'cover' }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </li>
                  <li className="MainRightNav_main-right-nav__item__muzGi">
                    <div className="IconSlide_icon-slide__Zlul4" data-theme="light">
                      <Link
                        title=""
                        target="_self"
                        className="Button_btn__Xvq6a IconSlide_icon-slide__button__TOG0Q MainRightNav_main-right-nav__button__myVXL Button_btn--link__JI8fR Button_btn--unshaped__MfqLg"
                        aria-label="Search"
                        role="menuitem"
                        href="/How-can-we-help-you"
                      >
                        <span
                          className="Icon_icon__qNAb6"
                          style={{ height: '32px', width: '32px' }}
                        >
                          <svg aria-hidden="true" viewBox="0 0 32 32">
                            <use xlinkHref="#icons_search"></use>
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className="MainNav_main-nav__overlay__xEWYd"></div>
            </div>
          </div>
        </header>
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
                    alt=""
                    loading="eager"
                    decoding="async"
                    data-nimg="fill"
                    className="HeroEditorial-module_image__CkIvM"
                    // style={{
                    //   position: 'absolute',
                    //   height: '100%',
                    //   width: '100%',
                    //   left: '0',
                    //   top: '0',
                    //   right: '0',
                    //   bottom: '0',
                    //   objectFit: 'cover',
                    //   color: 'transparent',
                    // }}
                    src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Banner-1240x698/news/2025/H1-2025-Banner.jpg?h=698&amp;iar=0&amp;w=1240"
                  />
                </div>
                <div className="HeroEditorial-module_content__rjYwE">
                  <p className="HeroEditorial-module_metadata__L37Uu font-body font-bold">
                    Apr 04, 2025
                  </p>
                  <Link
                    id="715b0434-73e7-4a6d-929a-eb5dfe21ff5f"
                    className=""
                    title="Opens page (same window)"
                    href="/investors/financial-results-and-publications/financial-results"
                  >
                    <h1 className="HeroEditorial-module_title__ppi-b font-hero-title">
                      H1 Fiscal 2025 results
                    </h1>
                  </Link>
                  <p className="HeroEditorial-module_description__VNc38 font-body"> </p>
                  <Link
                    title="Opens page (same window)"
                    target="_self"
                    className="Button_btn__Xvq6a Button_btn--red-waves__OSCcE Button_btn--link__JI8fR Button_btn--without-border__wYHqY"
                    href="/investors/financial-results-and-publications/financial-results"
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
                  </Link>
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
                      <Link
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
                      </Link>
                    </section>
                  </div>
                  <section
                    className="splide Slider_slider__CJilF LatestNews_latest-news__slider__ptqhR splide--loop splide--ltr splide--draggable is-active is-overflow is-initialized"
                    aria-roledescription="carousel"
                    data-grid-layout="global"
                    role="region"
                    id="splide01"
                  >
                    <div
                      className="splide__track splide__track--loop splide__track--ltr splide__track--draggable"
                      aria-atomic="false"
                      aria-live="polite"
                      id="splide01-track"
                      style={{ paddingLeft: '0px', paddingRight: '0px' }}
                    >
                      <ul
                        className="splide__list"
                        id="splide01-list"
                        role="presentation"
                        style={{
                          transform: 'translateX(-1212.95px)',
                          transition: 'transform 400ms cubic-bezier(0.25, 1, 0.5, 1)',
                        }}
                      >
                        <li
                          className="splide__slide splide__slide--clone"
                          role="group"
                          id="splide01-clone01"
                          aria-roledescription="slide"
                          aria-label="4 of 5"
                          style={{ width: 'calc(100%)' }}
                          aria-hidden="true"
                        >
                          <article className="LatestNewsSlide_latest-news-slide__WLk__">
                            <div className="LatestNewsSlide_latest-news-slide__image__ZWzY7">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt="Facilities Maintenance"
                                  loading="lazy"
                                  decoding="async"
                                  data-nimg="fill"
                                  className="PushImage_push-image--rounded-bottom-left__3k2A8"
                                  // style={{
                                  //   position: 'absolute',
                                  //   height: '100%',
                                  //   width: '100%',
                                  //   left: '0',
                                  //   top: '0',
                                  //   right: '0',
                                  //   bottom: '0',
                                  //   objectFit: 'cover',
                                  //   color: 'transparent',
                                  // }}
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
                                <Link
                                  target="_self"
                                  className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__content__buttons--link__W_tAU Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                  href="/news/newsroom/2025/significant-contract-with-santos-australia"
                                  tabIndex={-1}
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
                                </Link>
                                <Link
                                  href="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Documents/press-releases/2025/PR-Sodexo-in-Australia-x-Santos.pdf"
                                  aria-label="Download"
                                  className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__file-button__9IU2p Button_btn--unshaped__MfqLg"
                                  tabIndex={-1}
                                >
                                  <span
                                    className="Icon_icon__qNAb6 Icon_icon--bg-red__sbGiT"
                                    style={{ height: '24px', width: '24px' }}
                                  >
                                    <svg aria-hidden="true" viewBox="0 0 24 24">
                                      <use xlinkHref="#icons_download"></use>
                                    </svg>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </article>
                        </li>
                        <li
                          className="splide__slide splide__slide--clone is-active"
                          role="group"
                          id="splide01-clone02"
                          aria-roledescription="slide"
                          aria-label="5 of 5"
                          style={{ width: 'calc(100%)' }}
                          aria-hidden="true"
                        >
                          <article className="LatestNewsSlide_latest-news-slide__WLk__">
                            <div className="LatestNewsSlide_latest-news-slide__image__ZWzY7">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt=""
                                  loading="lazy"
                                  decoding="async"
                                  data-nimg="fill"
                                  className="PushImage_push-image--rounded-bottom-left__3k2A8"
                                  // style={{
                                  //   position: 'absolute',
                                  //   height: '100%',
                                  //   width: '100%',
                                  //   left: '0',
                                  //   top: '0',
                                  //   right: '0',
                                  //   bottom: '0',
                                  //   objectFit: 'cover',
                                  //   color: 'transparent',
                                  // }}
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
                                <Link
                                  target="_self"
                                  className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__content__buttons--link__W_tAU Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                  href="/news/newsroom/2025/mucem-selects-michelin-star-chef-alexandre-mazzia-and-sodexo-live"
                                  tabIndex={-1}
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
                                </Link>
                              </div>
                            </div>
                          </article>
                        </li>
                        <li
                          className="splide__slide"
                          role="group"
                          id="splide01-slide01"
                          aria-roledescription="slide"
                          aria-label="1 of 5"
                          style={{ width: 'calc(100%)' }}
                          aria-hidden="true"
                        >
                          <article className="LatestNewsSlide_latest-news-slide__WLk__">
                            <div className="LatestNewsSlide_latest-news-slide__image__ZWzY7">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt=""
                                  loading="lazy"
                                  decoding="async"
                                  data-nimg="fill"
                                  className="PushImage_push-image--rounded-bottom-left__3k2A8"
                                  // style={{
                                  //   position: 'absolute',
                                  //   height: '100%',
                                  //   width: '100%',
                                  //   left: '0',
                                  //   top: '0',
                                  //   right: '0',
                                  //   bottom: '0',
                                  //   objectFit: 'cover',
                                  //   color: 'transparent',
                                  // }}
                                  src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Banner-1240x698/news/2025/Prix-DSIN.jpg?h=698&amp;iar=0&amp;w=1240"
                                />
                              </div>
                            </div>
                            <div className="LatestNewsSlide_latest-news-slide__content__fT26E">
                              <h3 className="LatestNewsSlide_latest-news-slide__content__title__0TF1Y LatestNewsSlide_font-h3__9qeWo">
                                Alice Guéhennec, Chief Tech, Data, Digital, and Innovation Officer
                                at Sodexo, awarded “Best CDIO” in the “Data &amp; AI” category, by
                                the 2024 DSIN
                              </h3>
                              <div className="LatestNewsSlide_latest-news-slide__content__text__oVqab">
                                Alice Guéhennec, Chief Tech, Data, Digital, and Innovation Officer
                                at Sodexo, has been awarded “Best CDIO” in the “Data and Artificial
                                Intelligence” category, by the 2024 DSIN Trophies jury. Learn more.
                              </div>
                              <div className="LatestNewsSlide_latest-news-slide__content__buttons__5sWAm">
                                <Link
                                  target="_self"
                                  className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__content__buttons--link__W_tAU Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                  href="/news/newsroom/2025/alice-guehennec-awarded-best-cdio-data-ai-dsin"
                                  tabIndex={-1}
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
                                </Link>
                              </div>
                            </div>
                          </article>
                        </li>
                        <li
                          className="splide__slide"
                          role="group"
                          id="splide01-slide02"
                          aria-roledescription="slide"
                          aria-label="2 of 5"
                          style={{ width: 'calc(100%)' }}
                          aria-hidden="true"
                        >
                          <article className="LatestNewsSlide_latest-news-slide__WLk__">
                            <div className="LatestNewsSlide_latest-news-slide__image__ZWzY7">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt=""
                                  loading="lazy"
                                  decoding="async"
                                  data-nimg="fill"
                                  className="PushImage_push-image--rounded-bottom-left__3k2A8"
                                  // style={{
                                  //   position: 'absolute',
                                  //   height: '100%',
                                  //   width: '100%',
                                  //   left: '0',
                                  //   top: '0',
                                  //   right: '0',
                                  //   bottom: '0',
                                  //   objectFit: 'cover',
                                  //   color: 'transparent',
                                  // }}
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
                                <Link
                                  target="_self"
                                  className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__content__buttons--link__W_tAU Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                  href="/news/newsroom/2025/equileap-2025"
                                  tabIndex={-1}
                                >
                                  Learn more
                                  <span
                                    className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5 Icon_icon--slide-out__hcsnY"
                                    style={{ height: '24px', width: '24px' }}
                                  >
                                    <svg aria-hidden="true" viewBox="0 0 24 24">
                                      <use xlinkHref="#icons_arrow"></use>
                                    </svg>
                                    <svg aria-hidden="true" viewBox="0 0 24 24">
                                      <use xlinkHref="#icons_arrow"></use>
                                    </svg>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </article>
                        </li>
                        <li
                          className="splide__slide"
                          role="group"
                          id="splide01-slide03"
                          aria-roledescription="slide"
                          aria-label="3 of 5"
                          style={{ width: 'calc(100%)' }}
                          aria-hidden="true"
                        >
                          <article className="LatestNewsSlide_latest-news-slide__WLk__">
                            <div className="LatestNewsSlide_latest-news-slide__image__ZWzY7">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt="Sodexo Team"
                                  loading="lazy"
                                  decoding="async"
                                  data-nimg="fill"
                                  className="PushImage_push-image--rounded-bottom-left__3k2A8"
                                  // style={{
                                  //   position: 'absolute',
                                  //   height: '100%',
                                  //   width: '100%',
                                  //   left: '0',
                                  //   top: '0',
                                  //   right: '0',
                                  //   bottom: '0',
                                  //   objectFit: 'cover',
                                  //   color: 'transparent',
                                  // }}
                                  src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Banner-1240x698/news/2025/Ethisphere-march-2025-banner.jpg?h=440&amp;iar=0&amp;w=990"
                                />
                              </div>
                            </div>
                            <div className="LatestNewsSlide_latest-news-slide__content__fT26E">
                              <h3 className="LatestNewsSlide_latest-news-slide__content__title__0TF1Y LatestNewsSlide_font-h3__9qeWo">
                                Sodexo named one of the World’s Most Ethical Companies® by
                                Ethisphere for the second year in a row
                              </h3>
                              <div className="LatestNewsSlide_latest-news-slide__content__text__oVqab">
                                Sodexo is proud to announce its recognition as one of the World’s
                                Most Ethical Compagnies® for the second consecutive year. Issued by
                                Ethisphere, a global leader in defining and advancing the standards
                                of ethical business, this annual recognition honors Sodexo’s
                                continuous commitment to business integrity through best-in-class
                                policies and practices. Learn more.
                              </div>
                              <div className="LatestNewsSlide_latest-news-slide__content__buttons__5sWAm">
                                <Link
                                  target="_self"
                                  className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__content__buttons--link__W_tAU Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                  href="/news/newsroom/2025/sodexo-named-one-of-the-world-most-ethical-companies-by-ethisphere-for-the-second-year-in-a-row"
                                  tabIndex={-1}
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
                                </Link>
                                <Link
                                  href="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Documents/press-releases/2025/PR-Sodexo-Worlds-Most-Ethical-Companies-Ethisphere-2025.pdf"
                                  aria-label="Download"
                                  className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__file-button__9IU2p Button_btn--unshaped__MfqLg"
                                  tabIndex={-1}
                                >
                                  <span
                                    className="Icon_icon__qNAb6 Icon_icon--bg-red__sbGiT"
                                    style={{ height: '24px', width: '24px' }}
                                  >
                                    <svg aria-hidden="true" viewBox="0 0 24 24">
                                      <use xlinkHref="#icons_download"></use>
                                    </svg>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </article>
                        </li>
                        <li
                          className="splide__slide is-prev"
                          role="group"
                          id="splide01-slide04"
                          aria-roledescription="slide"
                          aria-label="4 of 5"
                          style={{ width: 'calc(100%)' }}
                          aria-hidden="true"
                        >
                          <article className="LatestNewsSlide_latest-news-slide__WLk__">
                            <div className="LatestNewsSlide_latest-news-slide__image__ZWzY7">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt="Facilities Maintenance"
                                  loading="lazy"
                                  decoding="async"
                                  data-nimg="fill"
                                  className="PushImage_push-image--rounded-bottom-left__3k2A8"
                                  // style={{
                                  //   position: 'absolute',
                                  //   height: '100%',
                                  //   width: '100%',
                                  //   left: '0',
                                  //   top: '0',
                                  //   right: '0',
                                  //   bottom: '0',
                                  //   objectFit: 'cover',
                                  //   color: 'transparent',
                                  // }}
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
                                <Link
                                  target="_self"
                                  className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__content__buttons--link__W_tAU Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                  href="/news/newsroom/2025/significant-contract-with-santos-australia"
                                  tabIndex={-1}
                                >
                                  Learn more
                                  <span
                                    className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5 Icon_icon--slide-out__hcsnY"
                                    style={{ height: '24px', width: '24px' }}
                                  >
                                    <svg aria-hidden="true" viewBox="0 0 24 24">
                                      <use xlinkHref="#icons_arrow"></use>
                                    </svg>
                                    <svg aria-hidden="true" viewBox="0 0 24 24">
                                      <use xlinkHref="#icons_arrow"></use>
                                    </svg>
                                  </span>
                                </Link>
                                <Link
                                  href="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Documents/press-releases/2025/PR-Sodexo-in-Australia-x-Santos.pdf"
                                  aria-label="Download"
                                  className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__file-button__9IU2p Button_btn--unshaped__MfqLg"
                                  tabIndex={-1}
                                >
                                  <span
                                    className="Icon_icon__qNAb6 Icon_icon--bg-red__sbGiT"
                                    style={{ height: '24px', width: '24px' }}
                                  >
                                    <svg aria-hidden="true" viewBox="0 0 24 24">
                                      <use xlinkHref="#icons_download"></use>
                                    </svg>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </article>
                        </li>
                        <li
                          className="splide__slide is-active is-visible"
                          role="group"
                          id="splide01-slide05"
                          aria-roledescription="slide"
                          aria-label="5 of 5"
                          style={{ width: 'calc(100%)' }}
                        >
                          <article className="LatestNewsSlide_latest-news-slide__WLk__">
                            <div className="LatestNewsSlide_latest-news-slide__image__ZWzY7">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt=""
                                  loading="lazy"
                                  decoding="async"
                                  data-nimg="fill"
                                  className="PushImage_push-image--rounded-bottom-left__3k2A8"
                                  // style={{
                                  //   position: 'absolute',
                                  //   height: '100%',
                                  //   width: '100%',
                                  //   left: '0',
                                  //   top: '0',
                                  //   right: '0',
                                  //   bottom: '0',
                                  //   objectFit: 'cover',
                                  //   color: 'transparent',
                                  // }}
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
                                <Link
                                  target="_self"
                                  className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__content__buttons--link__W_tAU Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                  href="/news/newsroom/2025/mucem-selects-michelin-star-chef-alexandre-mazzia-and-sodexo-live"
                                >
                                  Learn more
                                  <span
                                    className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5 Icon_icon--slide-out__hcsnY"
                                    style={{ height: '24px', width: '24px' }}
                                  >
                                    <svg aria-hidden="true" viewBox="0 0 24 24">
                                      <use xlinkHref="#icons_arrow"></use>
                                    </svg>
                                    <svg aria-hidden="true" viewBox="0 0 24 24">
                                      <use xlinkHref="#icons_arrow"></use>
                                    </svg>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </article>
                        </li>
                        <li
                          className="splide__slide splide__slide--clone is-next"
                          role="group"
                          id="splide01-clone03"
                          aria-roledescription="slide"
                          aria-label="1 of 5"
                          style={{ width: 'calc(100%)' }}
                          aria-hidden="true"
                        >
                          <article className="LatestNewsSlide_latest-news-slide__WLk__">
                            <div className="LatestNewsSlide_latest-news-slide__image__ZWzY7">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt=""
                                  loading="lazy"
                                  decoding="async"
                                  data-nimg="fill"
                                  className="PushImage_push-image--rounded-bottom-left__3k2A8"
                                  // style={{
                                  //   position: 'absolute',
                                  //   height: '100%',
                                  //   width: '100%',
                                  //   left: '0',
                                  //   top: '0',
                                  //   right: '0',
                                  //   bottom: '0',
                                  //   objectFit: 'cover',
                                  //   color: 'transparent',
                                  // }}
                                  src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Banner-1240x698/news/2025/Prix-DSIN.jpg?h=698&amp;iar=0&amp;w=1240"
                                />
                              </div>
                            </div>
                            <div className="LatestNewsSlide_latest-news-slide__content__fT26E">
                              <h3 className="LatestNewsSlide_latest-news-slide__content__title__0TF1Y LatestNewsSlide_font-h3__9qeWo">
                                Alice Guéhennec, Chief Tech, Data, Digital, and Innovation Officer
                                at Sodexo, awarded “Best CDIO” in the “Data &amp; AI” category, by
                                the 2024 DSIN
                              </h3>
                              <div className="LatestNewsSlide_latest-news-slide__content__text__oVqab">
                                Alice Guéhennec, Chief Tech, Data, Digital, and Innovation Officer
                                at Sodexo, has been awarded “Best CDIO” in the “Data and Artificial
                                Intelligence” category, by the 2024 DSIN Trophies jury. Learn more.
                              </div>
                              <div className="LatestNewsSlide_latest-news-slide__content__buttons__5sWAm">
                                <Link
                                  target="_self"
                                  className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__content__buttons--link__W_tAU Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                  href="/news/newsroom/2025/alice-guehennec-awarded-best-cdio-data-ai-dsin"
                                  tabIndex={-1}
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
                                </Link>
                              </div>
                            </div>
                          </article>
                        </li>
                        <li
                          className="splide__slide splide__slide--clone"
                          role="group"
                          id="splide01-clone04"
                          aria-roledescription="slide"
                          aria-label="2 of 5"
                          style={{ width: 'calc(100%)' }}
                          aria-hidden="true"
                        >
                          <article className="LatestNewsSlide_latest-news-slide__WLk__">
                            <div className="LatestNewsSlide_latest-news-slide__image__ZWzY7">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt=""
                                  loading="lazy"
                                  decoding="async"
                                  data-nimg="fill"
                                  className="PushImage_push-image--rounded-bottom-left__3k2A8"
                                  // style={{
                                  //   position: 'absolute',
                                  //   height: '100%',
                                  //   width: '100%',
                                  //   left: '0',
                                  //   top: '0',
                                  //   right: '0',
                                  //   bottom: '0',
                                  //   objectFit: 'cover',
                                  //   color: 'transparent',
                                  // }}
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
                                <Link
                                  target="_self"
                                  className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__content__buttons--link__W_tAU Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                  href="/news/newsroom/2025/equileap-2025"
                                  tabIndex={-1}
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
                                </Link>
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
                      <ul className="splide__arrows SliderArrows_slider-arrows__n89FR SliderControls_slider-controls__arrows__wFqwO">
                        <li
                          className="splide__arrow--prev SliderArrows_slider-arrows__arrow__d8O_p"
                          aria-label="Previous slide"
                          aria-controls="splide01-track"
                        >
                          <button
                            aria-label="Previous slide"
                            className="Button_btn__Xvq6a SliderArrows_slider-arrows__arrow--rotated__VJ_fE Button_btn--unshaped__MfqLg"
                          >
                            <span className="Icon_icon__qNAb6 SliderArrows_slider-arrows__arrow-icon__qHj5H SliderArrows_slider-arrows__arrow-icon_big__N13YL Icon_icon--white__ymQDN Icon_icon--arrow-rtl__xN7T5 Icon_icon--bg-red__sbGiT">
                              <svg aria-hidden="false">
                                <use xlinkHref="#icons_chevron"></use>
                              </svg>
                            </span>
                          </button>
                        </li>
                        <li
                          className="splide__arrow--next SliderArrows_slider-arrows__arrow__d8O_p"
                          aria-label="Go to first slide"
                          aria-controls="splide01-track"
                        >
                          <button
                            aria-label="Next slide"
                            className="Button_btn__Xvq6a Button_btn--unshaped__MfqLg"
                          >
                            <span className="Icon_icon__qNAb6 SliderArrows_slider-arrows__arrow-icon__qHj5H SliderArrows_slider-arrows__arrow-icon_big__N13YL Icon_icon--white__ymQDN Icon_icon--arrow-rtl__xN7T5 Icon_icon--bg-red__sbGiT">
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
                className="splide Slider_slider__CJilF cards-slider__slider splide--loop splide--ltr splide--draggable is-active is-initialized is-overflow"
                aria-roledescription="carousel"
                data-grid-layout="global"
                role="region"
                id="splide02"
              >
                <div
                  className="splide__track CardsSlider_cards-slider__slides__8FwQ9 splide__track--loop splide__track--ltr splide__track--draggable"
                  aria-atomic="true"
                  aria-live="off"
                  id="splide02-track"
                  style={{ paddingLeft: '0px', paddingRight: '0px' }}
                >
                  <ul
                    className="splide__list"
                    id="splide02-list"
                    role="presentation"
                    style={{ transform: 'translateX(-2512.08px)' }}
                  >
                    <li
                      className="splide__slide CardsSlider_cards-slider__item__ZGzEh splide__slide--clone is-active"
                      role="group"
                      id="splide02-clone01"
                      aria-roledescription="slide"
                      aria-label="1 of 3"
                      style={{ width: 'calc(33.3333%)' }}
                      aria-hidden="true"
                    >
                      <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                        <div className="Card_card-container__picture__q2urq">
                          <img
                            alt="Modern-Recipe-Banner-Card"
                            fetchPriority="high"
                            decoding="async"
                            data-nimg="fill"
                            // style={{
                            //   position: 'absolute',
                            //   height: '100%',
                            //   width: '100%',
                            //   left: '0',
                            //   top: '0',
                            //   right: '0',
                            //   bottom: '0',
                            //   objectFit: 'cover',
                            //   color: 'transparent',
                            // }}
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
                            <Link
                              title="Opens page (same window)"
                              target="_self"
                              className="Button_btn__Xvq6a card-container__presentation-buttons-link Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                              href="/brands-services/food/brands/modern-recipe"
                              tabIndex={-1}
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
                            </Link>
                          </div>
                        </section>
                      </article>
                    </li>
                    <li
                      className="splide__slide CardsSlider_cards-slider__item__ZGzEh splide__slide--clone"
                      role="group"
                      id="splide02-clone02"
                      aria-roledescription="slide"
                      aria-label="2 of 3"
                      style={{ width: 'calc(33.3333%)' }}
                      aria-hidden="true"
                    >
                      <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                        <div className="Card_card-container__picture__q2urq">
                          <img
                            alt="Kitchen-Works-Banner-Card"
                            fetchPriority="high"
                            decoding="async"
                            data-nimg="fill"
                            // style={{
                            //   position: 'absolute',
                            //   height: '100%',
                            //   width: '100%',
                            //   left: '0',
                            //   top: '0',
                            //   right: '0',
                            //   bottom: '0',
                            //   objectFit: 'cover',
                            //   color: 'transparent',
                            // }}
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
                            value, taste, nutrition and freshness.&nbsp;
                          </div>
                          <div className="Card_card-container__presentation-buttons__rDbZU">
                            <Link
                              title="Opens page (same window)"
                              target="_self"
                              className="Button_btn__Xvq6a card-container__presentation-buttons-link Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                              href="/brands-services/food/brands/kitchen-works"
                              tabIndex={-1}
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
                            </Link>
                          </div>
                        </section>
                      </article>
                    </li>
                    <li
                      className="splide__slide CardsSlider_cards-slider__item__ZGzEh splide__slide--clone"
                      role="group"
                      id="splide02-clone03"
                      aria-roledescription="slide"
                      aria-label="3 of 3"
                      style={{ width: 'calc(33.3333%)' }}
                      aria-hidden="true"
                    >
                      <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                        <div className="Card_card-container__picture__q2urq">
                          <img
                            alt="The-good-eating-company-Banner-Card"
                            fetchPriority="high"
                            decoding="async"
                            data-nimg="fill"
                            // style={{
                            //   position: 'absolute',
                            //   height: '100%',
                            //   width: '100%',
                            //   left: '0',
                            //   top: '0',
                            //   right: '0',
                            //   bottom: '0',
                            //   objectFit: 'cover',
                            //   color: 'transparent',
                            // }}
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
                            ordinary, inviting guests to discover new depths of delicious each
                            day.&nbsp;
                          </div>
                          <div className="Card_card-container__presentation-buttons__rDbZU">
                            <Link
                              title="Opens page (same window)"
                              target="_self"
                              className="Button_btn__Xvq6a card-container__presentation-buttons-link Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                              href="/brands-services/food/brands/the-good-eating-company"
                              tabIndex={-1}
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
                            </Link>
                          </div>
                        </section>
                      </article>
                    </li>
                    <li
                      className="splide__slide CardsSlider_cards-slider__item__ZGzEh splide__slide--clone is-active"
                      role="group"
                      id="splide02-clone04"
                      aria-roledescription="slide"
                      aria-label="1 of 3"
                      style={{ width: 'calc(33.3333%)' }}
                      aria-hidden="true"
                    >
                      <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                        <div className="Card_card-container__picture__q2urq">
                          <img
                            alt="Modern-Recipe-Banner-Card"
                            fetchPriority="high"
                            decoding="async"
                            data-nimg="fill"
                            // style={{
                            //   position: 'absolute',
                            //   height: '100%',
                            //   width: '100%',
                            //   left: '0',
                            //   top: '0',
                            //   right: '0',
                            //   bottom: '0',
                            //   objectFit: 'cover',
                            //   color: 'transparent',
                            // }}
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
                            <Link
                              title="Opens page (same window)"
                              target="_self"
                              className="Button_btn__Xvq6a card-container__presentation-buttons-link Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                              href="/brands-services/food/brands/modern-recipe"
                              tabIndex={-1}
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
                            </Link>
                          </div>
                        </section>
                      </article>
                    </li>
                    <li
                      className="splide__slide CardsSlider_cards-slider__item__ZGzEh splide__slide--clone"
                      role="group"
                      id="splide02-clone05"
                      aria-roledescription="slide"
                      aria-label="2 of 3"
                      style={{ width: 'calc(33.3333%)' }}
                      aria-hidden="true"
                    >
                      <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                        <div className="Card_card-container__picture__q2urq">
                          <img
                            alt="Kitchen-Works-Banner-Card"
                            fetchPriority="high"
                            decoding="async"
                            data-nimg="fill"
                            // style={{
                            //   position: 'absolute',
                            //   height: '100%',
                            //   width: '100%',
                            //   left: '0',
                            //   top: '0',
                            //   right: '0',
                            //   bottom: '0',
                            //   objectFit: 'cover',
                            //   color: 'transparent',
                            // }}
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
                            value, taste, nutrition and freshness.&nbsp;
                          </div>
                          <div className="Card_card-container__presentation-buttons__rDbZU">
                            <Link
                              title="Opens page (same window)"
                              target="_self"
                              className="Button_btn__Xvq6a card-container__presentation-buttons-link Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                              href="/brands-services/food/brands/kitchen-works"
                              tabIndex={-1}
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
                            </Link>
                          </div>
                        </section>
                      </article>
                    </li>
                    <li
                      className="splide__slide CardsSlider_cards-slider__item__ZGzEh splide__slide--clone is-prev"
                      role="group"
                      id="splide02-clone06"
                      aria-roledescription="slide"
                      aria-label="3 of 3"
                      style={{ width: 'calc(33.3333%)' }}
                      aria-hidden="true"
                    >
                      <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                        <div className="Card_card-container__picture__q2urq">
                          <img
                            alt="The-good-eating-company-Banner-Card"
                            fetchPriority="high"
                            decoding="async"
                            data-nimg="fill"
                            // style={{
                            //   position: 'absolute',
                            //   height: '100%',
                            //   width: '100%',
                            //   left: '0',
                            //   top: '0',
                            //   right: '0',
                            //   bottom: '0',
                            //   objectFit: 'cover',
                            //   color: 'transparent',
                            // }}
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
                            ordinary, inviting guests to discover new depths of delicious each
                            day.&nbsp;
                          </div>
                          <div className="Card_card-container__presentation-buttons__rDbZU">
                            <Link
                              title="Opens page (same window)"
                              target="_self"
                              className="Button_btn__Xvq6a card-container__presentation-buttons-link Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                              href="/brands-services/food/brands/the-good-eating-company"
                              tabIndex={-1}
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
                            </Link>
                          </div>
                        </section>
                      </article>
                    </li>
                    <li
                      className="splide__slide CardsSlider_cards-slider__item__ZGzEh is-active is-visible"
                      role="group"
                      id="splide02-slide01"
                      aria-roledescription="slide"
                      aria-label="1 of 3"
                      style={{ width: 'calc(33.3333%)' }}
                    >
                      <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                        <div className="Card_card-container__picture__q2urq">
                          <img
                            alt="Modern-Recipe-Banner-Card"
                            fetchPriority="high"
                            decoding="async"
                            data-nimg="fill"
                            // style={{
                            //   position: 'absolute',
                            //   height: '100%',
                            //   width: '100%',
                            //   left: '0',
                            //   top: '0',
                            //   right: '0',
                            //   bottom: '0',
                            //   objectFit: 'cover',
                            //   color: 'transparent',
                            // }}
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
                            <Link
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
                            </Link>
                          </div>
                        </section>
                      </article>
                    </li>
                    <li
                      className="splide__slide CardsSlider_cards-slider__item__ZGzEh is-visible is-next"
                      role="group"
                      id="splide02-slide02"
                      aria-roledescription="slide"
                      aria-label="2 of 3"
                      style={{ width: 'calc(33.3333%)' }}
                    >
                      <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                        <div className="Card_card-container__picture__q2urq">
                          <img
                            alt="Kitchen-Works-Banner-Card"
                            fetchPriority="high"
                            decoding="async"
                            data-nimg="fill"
                            // style={{
                            //   position: 'absolute',
                            //   height: '100%',
                            //   width: '100%',
                            //   left: '0',
                            //   top: '0',
                            //   right: '0',
                            //   bottom: '0',
                            //   objectFit: 'cover',
                            //   color: 'transparent',
                            // }}
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
                            value, taste, nutrition and freshness.&nbsp;
                          </div>
                          <div className="Card_card-container__presentation-buttons__rDbZU">
                            <Link
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
                            </Link>
                          </div>
                        </section>
                      </article>
                    </li>
                    <li
                      className="splide__slide CardsSlider_cards-slider__item__ZGzEh is-visible"
                      role="group"
                      id="splide02-slide03"
                      aria-roledescription="slide"
                      aria-label="3 of 3"
                      style={{ width: 'calc(33.3333%)' }}
                    >
                      <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                        <div className="Card_card-container__picture__q2urq">
                          <img
                            alt="The-good-eating-company-Banner-Card"
                            fetchPriority="high"
                            decoding="async"
                            data-nimg="fill"
                            // style={{
                            //   position: 'absolute',
                            //   height: '100%',
                            //   width: '100%',
                            //   left: '0',
                            //   top: '0',
                            //   right: '0',
                            //   bottom: '0',
                            //   objectFit: 'cover',
                            //   color: 'transparent',
                            // }}
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
                            ordinary, inviting guests to discover new depths of delicious each
                            day.&nbsp;
                          </div>
                          <div className="Card_card-container__presentation-buttons__rDbZU">
                            <Link
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
                            </Link>
                          </div>
                        </section>
                      </article>
                    </li>
                    <li
                      className="splide__slide CardsSlider_cards-slider__item__ZGzEh splide__slide--clone is-active"
                      role="group"
                      id="splide02-clone07"
                      aria-roledescription="slide"
                      aria-label="1 of 3"
                      style={{ width: 'calc(33.3333%)' }}
                      aria-hidden="true"
                    >
                      <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                        <div className="Card_card-container__picture__q2urq">
                          <img
                            alt="Modern-Recipe-Banner-Card"
                            fetchPriority="high"
                            decoding="async"
                            data-nimg="fill"
                            // style={{
                            //   position: 'absolute',
                            //   height: '100%',
                            //   width: '100%',
                            //   left: '0',
                            //   top: '0',
                            //   right: '0',
                            //   bottom: '0',
                            //   objectFit: 'cover',
                            //   color: 'transparent',
                            // }}
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
                            <Link
                              title="Opens page (same window)"
                              target="_self"
                              className="Button_btn__Xvq6a card-container__presentation-buttons-link Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                              href="/brands-services/food/brands/modern-recipe"
                              tabIndex={-1}
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
                            </Link>
                          </div>
                        </section>
                      </article>
                    </li>
                    <li
                      className="splide__slide CardsSlider_cards-slider__item__ZGzEh splide__slide--clone"
                      role="group"
                      id="splide02-clone08"
                      aria-roledescription="slide"
                      aria-label="2 of 3"
                      style={{ width: 'calc(33.3333%)' }}
                      aria-hidden="true"
                    >
                      <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                        <div className="Card_card-container__picture__q2urq">
                          <img
                            alt="Kitchen-Works-Banner-Card"
                            fetchPriority="high"
                            decoding="async"
                            data-nimg="fill"
                            // style={{
                            //   position: 'absolute',
                            //   height: '100%',
                            //   width: '100%',
                            //   left: '0',
                            //   top: '0',
                            //   right: '0',
                            //   bottom: '0',
                            //   objectFit: 'cover',
                            //   color: 'transparent',
                            // }}
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
                            value, taste, nutrition and freshness.&nbsp;
                          </div>
                          <div className="Card_card-container__presentation-buttons__rDbZU">
                            <Link
                              title="Opens page (same window)"
                              target="_self"
                              className="Button_btn__Xvq6a card-container__presentation-buttons-link Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                              href="/brands-services/food/brands/kitchen-works"
                              tabIndex={-1}
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
                            </Link>
                          </div>
                        </section>
                      </article>
                    </li>
                    <li
                      className="splide__slide CardsSlider_cards-slider__item__ZGzEh splide__slide--clone"
                      role="group"
                      id="splide02-clone09"
                      aria-roledescription="slide"
                      aria-label="3 of 3"
                      style={{ width: 'calc(33.3333%)' }}
                      aria-hidden="true"
                    >
                      <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                        <div className="Card_card-container__picture__q2urq">
                          <img
                            alt="The-good-eating-company-Banner-Card"
                            fetchPriority="high"
                            decoding="async"
                            data-nimg="fill"
                            // style={{
                            //   position: 'absolute',
                            //   height: '100%',
                            //   width: '100%',
                            //   left: '0',
                            //   top: '0',
                            //   right: '0',
                            //   bottom: '0',
                            //   objectFit: 'cover',
                            //   color: 'transparent',
                            // }}
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
                            ordinary, inviting guests to discover new depths of delicious each
                            day.&nbsp;
                          </div>
                          <div className="Card_card-container__presentation-buttons__rDbZU">
                            <Link
                              title="Opens page (same window)"
                              target="_self"
                              className="Button_btn__Xvq6a card-container__presentation-buttons-link Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                              href="/brands-services/food/brands/the-good-eating-company"
                              tabIndex={-1}
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
                            </Link>
                          </div>
                        </section>
                      </article>
                    </li>
                    <li
                      className="splide__slide CardsSlider_cards-slider__item__ZGzEh splide__slide--clone is-active"
                      role="group"
                      id="splide02-clone10"
                      aria-roledescription="slide"
                      aria-label="1 of 3"
                      style={{ width: 'calc(33.3333%)' }}
                      aria-hidden="true"
                    >
                      <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                        <div className="Card_card-container__picture__q2urq">
                          <img
                            alt="Modern-Recipe-Banner-Card"
                            fetchPriority="high"
                            decoding="async"
                            data-nimg="fill"
                            // style={{
                            //   position: 'absolute',
                            //   height: '100%',
                            //   width: '100%',
                            //   left: '0',
                            //   top: '0',
                            //   right: '0',
                            //   bottom: '0',
                            //   objectFit: 'cover',
                            //   color: 'transparent',
                            // }}
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
                            <Link
                              title="Opens page (same window)"
                              target="_self"
                              className="Button_btn__Xvq6a card-container__presentation-buttons-link Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                              href="/brands-services/food/brands/modern-recipe"
                              tabIndex={-1}
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
                            </Link>
                          </div>
                        </section>
                      </article>
                    </li>
                    <li
                      className="splide__slide CardsSlider_cards-slider__item__ZGzEh splide__slide--clone"
                      role="group"
                      id="splide02-clone11"
                      aria-roledescription="slide"
                      aria-label="2 of 3"
                      style={{ width: 'calc(33.3333%)' }}
                      aria-hidden="true"
                    >
                      <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                        <div className="Card_card-container__picture__q2urq">
                          <img
                            alt="Kitchen-Works-Banner-Card"
                            fetchPriority="high"
                            decoding="async"
                            data-nimg="fill"
                            // style={{
                            //   position: 'absolute',
                            //   height: '100%',
                            //   width: '100%',
                            //   left: '0',
                            //   top: '0',
                            //   right: '0',
                            //   bottom: '0',
                            //   objectFit: 'cover',
                            //   color: 'transparent',
                            // }}
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
                            value, taste, nutrition and freshness.&nbsp;
                          </div>
                          <div className="Card_card-container__presentation-buttons__rDbZU">
                            <Link
                              title="Opens page (same window)"
                              target="_self"
                              className="Button_btn__Xvq6a card-container__presentation-buttons-link Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                              href="/brands-services/food/brands/kitchen-works"
                              tabIndex={-1}
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
                            </Link>
                          </div>
                        </section>
                      </article>
                    </li>
                    <li
                      className="splide__slide CardsSlider_cards-slider__item__ZGzEh splide__slide--clone"
                      role="group"
                      id="splide02-clone12"
                      aria-roledescription="slide"
                      aria-label="3 of 3"
                      style={{ width: 'calc(33.3333%)' }}
                      aria-hidden="true"
                    >
                      <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                        <div className="Card_card-container__picture__q2urq">
                          <img
                            alt="The-good-eating-company-Banner-Card"
                            fetchPriority="high"
                            decoding="async"
                            data-nimg="fill"
                            // style={{
                            //   position: 'absolute',
                            //   height: '100%',
                            //   width: '100%',
                            //   left: '0',
                            //   top: '0',
                            //   right: '0',
                            //   bottom: '0',
                            //   objectFit: 'cover',
                            //   color: 'transparent',
                            // }}
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
                            ordinary, inviting guests to discover new depths of delicious each
                            day.&nbsp;
                          </div>
                          <div className="Card_card-container__presentation-buttons__rDbZU">
                            <Link
                              title="Opens page (same window)"
                              target="_self"
                              className="Button_btn__Xvq6a card-container__presentation-buttons-link Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                              href="/brands-services/food/brands/the-good-eating-company"
                              tabIndex={-1}
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
                            </Link>
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
                  <ul className="splide__arrows SliderArrows_slider-arrows__n89FR SliderControls_slider-controls__arrows__wFqwO SliderControls_slider-controls__arrows--hidden__apV18 splide__arrows--ltr">
                    <li
                      className="splide__arrow--prev SliderArrows_slider-arrows__arrow__d8O_p"
                      aria-label="Previous slide"
                      aria-controls="splide02-track"
                    >
                      <button
                        aria-label="Previous slide"
                        className="Button_btn__Xvq6a SliderArrows_slider-arrows__arrow--rotated__VJ_fE Button_btn--unshaped__MfqLg"
                      >
                        <span className="Icon_icon__qNAb6 SliderArrows_slider-arrows__arrow-icon__qHj5H Icon_icon--white__ymQDN Icon_icon--arrow-rtl__xN7T5 Icon_icon--bg-red__sbGiT">
                          <svg aria-hidden="false">
                            <use xlinkHref="#icons_chevron"></use>
                          </svg>
                        </span>
                      </button>
                    </li>
                    <li
                      className="splide__arrow--next SliderArrows_slider-arrows__arrow__d8O_p"
                      aria-label="Next slide"
                      aria-controls="splide02-track"
                    >
                      <button
                        aria-label="Next slide"
                        className="Button_btn__Xvq6a Button_btn--unshaped__MfqLg"
                      >
                        <span className="Icon_icon__qNAb6 SliderArrows_slider-arrows__arrow-icon__qHj5H Icon_icon--white__ymQDN Icon_icon--arrow-rtl__xN7T5 Icon_icon--bg-red__sbGiT">
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
                        // style={{
                        //   position: 'absolute',
                        //   height: '100%',
                        //   width: '100%',
                        //   left: '0',
                        //   top: '0',
                        //   right: '0',
                        //   bottom: '0',
                        //   objectFit: 'cover',
                        //   color: 'transparent',
                        // }}
                        src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/BannerCard-503x503/Sodexo-2024-Report-EN.jpg?h=503&amp;iar=0&amp;w=503"
                      />
                    </div>
                  </div>
                </div>
                <div className="BannerCard_banner-card__content__JcBKs" data-grid-layout="global">
                  <div className="opacity-in AnimateIn_opacity-in__animation--part1__2X1EP">
                    <h2 className="BannerCard_banner-card__title__z7y_B">
                      Integrated Report Fiscal 2024
                    </h2>
                  </div>
                  <div className="opacity-in AnimateIn_opacity-in__animation--part2__rqjWC">
                    <div className="BannerCard_banner-card__text__XOb09">
                      <p>
                        Discover or rediscover Sodexo, our fundamentals, unique business model,
                        strategy and performance in our Integrated Report Fiscal 2024.
                      </p>
                    </div>
                  </div>
                  <Link
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
                  </Link>
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
                        // style={{
                        //   position: 'absolute',
                        //   height: '100%',
                        //   width: '100%',
                        //   left: '0',
                        //   top: '0',
                        //   right: '0',
                        //   bottom: '0',
                        //   objectFit: 'cover',
                        //   color: 'transparent',
                        // }}
                        src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Banner-card-608x342/HP-Employees3.jpg?h=342&amp;iar=0&amp;w=608"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="BannerCard_banner-card__content__JcBKs BannerCard_banner-card__content--reversed__mMBDq"
                  data-grid-layout="global"
                >
                  <div className="opacity-in AnimateIn_opacity-in__animation--part1__2X1EP">
                    <h2 className="BannerCard_banner-card__title__z7y_B BannerCard_banner-card__title--half-bolded__nYE1S">
                      Working at Sodexo is more than a job
                    </h2>
                  </div>
                  <div className="opacity-in AnimateIn_opacity-in__animation--part2__rqjWC">
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
                  <Link
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
                  </Link>
                </div>
              </div>
            </section>
            <section
              className="FullBanner_full-banner__h_pyn color-white"
              data-full-width="true"
              data-grid-layout="global"
            >
              <figure
                className="FullBanner_full-banner__background__container__0tAvX FullBanner_full-banner__background__container_with-overlay__JVOLi full-banner-figure-.25"
                style={{ opacity: '.25' }}
              >
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="FullBanner_full-banner__background__image__y2_xF"
                  // style={{
                  //   position: 'absolute',
                  //   height: '100%',
                  //   width: '100%',
                  //   left: '0',
                  //   top: '0',
                  //   right: '0',
                  //   bottom: '0',
                  //   color: 'transparent',
                  // }}
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
                  <Link
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
                  </Link>
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
                      aria-controls="select-listbox"
                      aria-expanded="false"
                      autoComplete="off"
                      className="Select_select__input__0JQC3 Select_select__input--select__YjZZq"
                      readOnly
                      role="combobox"
                      type="text"
                      aria-activedescendant=""
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
                        className="Icon_icon__qNAb6 Icon_icon--blue___O2uj Icon_icon--arrow-rtl__xN7T5"
                        style={{ height: '24px', width: '24px' }}
                      >
                        <svg aria-hidden="true" viewBox="0 0 24 24">
                          <use xlinkHref="#icons_chevron"></use>
                        </svg>
                      </span>
                    </button>
                  </fieldset>
                  <div
                    id="listbox-wrapper-Select a location"
                    className="select__listbox-wrapper-close"
                  >
                    <ul
                      aria-label="Select a location"
                      id="select-listbox"
                      role="listbox"
                      style={{ display: 'none' }}
                    >
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://br.sodexo.com"
                        id="https://br.sodexo.com"
                      >
                        Brazil
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://au.sodexo.com/"
                        id="https://au.sodexo.com/"
                      >
                        Australia
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://at.sodexo.com/"
                        id="https://at.sodexo.com/"
                      >
                        Austria
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://be.sodexo.com/"
                        id="https://be.sodexo.com/"
                      >
                        Belgium
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://cz.sodexo.com/"
                        id="https://cz.sodexo.com/"
                      >
                        Czech Republic
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://www.sodexo.com/our-locations/denmark"
                        id="https://www.sodexo.com/our-locations/denmark"
                      >
                        Denmark
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://fi.sodexo.com/"
                        id="https://fi.sodexo.com/"
                      >
                        Finland
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://fr.sodexo.com/"
                        id="https://fr.sodexo.com/"
                      >
                        France
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://de.sodexo.com/"
                        id="https://de.sodexo.com/"
                      >
                        Germany
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://hu.sodexo.com/"
                        id="https://hu.sodexo.com/"
                      >
                        Hungary
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://ie.sodexo.com/"
                        id="https://ie.sodexo.com/"
                      >
                        Ireland
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://middleeast.sodexo.com/home/about-us/overview.html"
                        id="https://middleeast.sodexo.com/home/about-us/overview.html"
                      >
                        Algeria
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="http://il.sodexo.com/"
                        id="http://il.sodexo.com/"
                      >
                        Israel
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://it.sodexo.com/"
                        id="https://it.sodexo.com/"
                      >
                        Italy
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://lu.sodexo.com/"
                        id="https://lu.sodexo.com/"
                      >
                        Luxembourg
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://middleeast.sodexo.com/home.html"
                        id="https://middleeast.sodexo.com/home.html"
                      >
                        Middle East
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://nl.sodexo.com/"
                        id="https://nl.sodexo.com/"
                      >
                        Netherlands
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://no.sodexo.com/"
                        id="https://no.sodexo.com/"
                      >
                        Norway
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://middleeast.sodexo.com/home/about-us/overview.html"
                        id="https://middleeast.sodexo.com/home/about-us/overview.html"
                      >
                        Oman
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://pl.sodexo.com/"
                        id="https://pl.sodexo.com/"
                      >
                        Poland
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://middleeast.sodexo.com/home/about-us/overview.html"
                        id="https://middleeast.sodexo.com/home/about-us/overview.html"
                      >
                        Qatar
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://ro.sodexo.com/"
                        id="https://ro.sodexo.com/"
                      >
                        Romania
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://za.sodexo.com/"
                        id="https://za.sodexo.com/"
                      >
                        South Africa
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://es.sodexo.com/"
                        id="https://es.sodexo.com/"
                      >
                        Spain
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://se.sodexo.com/"
                        id="https://se.sodexo.com/"
                      >
                        Sweden
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://ch.sodexo.com/"
                        id="https://ch.sodexo.com/"
                      >
                        Switzerland
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://tr.sodexo.com/"
                        id="https://tr.sodexo.com/"
                      >
                        Turkey
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://middleeast.sodexo.com/home/about-us/overview.html"
                        id="https://middleeast.sodexo.com/home/about-us/overview.html"
                      >
                        United Arab Emirates
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://uk.sodexo.com/"
                        id="https://uk.sodexo.com/"
                      >
                        United Kingdom
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://www.sodexo.com/"
                        id="https://www.sodexo.com/"
                      >
                        Worldwide
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://ca.sodexo.com/"
                        id="https://ca.sodexo.com/"
                      >
                        Canada
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://cl.sodexo.com"
                        id="https://cl.sodexo.com"
                      >
                        Chile
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://co.sodexo.com/"
                        id="https://co.sodexo.com/"
                      >
                        Colombia
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://cr.sodexo.com/"
                        id="https://cr.sodexo.com/"
                      >
                        Costa Rica
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://cn.sodexo.com/"
                        id="https://cn.sodexo.com/"
                      >
                        Greater China
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://cn.sodexo.com/en/about-us/sodexo-profile/sodexo-hong-kong-china.html"
                        id="https://cn.sodexo.com/en/about-us/sodexo-profile/sodexo-hong-kong-china.html"
                      >
                        Hong Kong China
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://in.sodexo.com/"
                        id="https://in.sodexo.com/"
                      >
                        India
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://id.sodexo.com/"
                        id="https://id.sodexo.com/"
                      >
                        Indonesia
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://www.globeshipsodexo.com/"
                        id="https://www.globeshipsodexo.com/"
                      >
                        Japón
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://sg.sodexo.com/about-us/sodexo-in-malaysia.html"
                        id="https://sg.sodexo.com/about-us/sodexo-in-malaysia.html"
                      >
                        Malasia
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://mx.sodexo.com/"
                        id="https://mx.sodexo.com/"
                      >
                        Mexico
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://www.sodexo.pa/"
                        id="https://www.sodexo.pa/"
                      >
                        Panama
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://pe.sodexo.com/"
                        id="https://pe.sodexo.com/"
                      >
                        Peru
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://ph.sodexo.com/"
                        id="https://ph.sodexo.com/"
                      >
                        Philippines
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://sg.sodexo.com/"
                        id="https://sg.sodexo.com/"
                      >
                        Singapore
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://sg.sodexo.com/about-us/sodexo-in-asia-pacific.html"
                        id="https://sg.sodexo.com/about-us/sodexo-in-asia-pacific.html"
                      >
                        South Korea
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://th.sodexo.com/"
                        id="https://th.sodexo.com/"
                      >
                        Thailand
                      </li>
                      <li
                        className="Select_select__list-item__0PLYq"
                        data-value="https://us.sodexo.com/"
                        id="https://us.sodexo.com/"
                      >
                        United States
                      </li>
                    </ul>
                  </div>
                </div>
                <Link
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
                </Link>
              </div>
            </div>
          </div>
        </main>
        <footer className="Surface_surface__Y0_rx Footer_footer__TvKAw color-white">
          <div className="Footer_footer__container__9eH4G">
            <div className="Footer_footer__head__mIP7D Footer_footer__head--with-share-price__jtoxJ">
              <div className="Footer_footer__head__logo__OaDzG">
                <Link href="/">
                  <img
                    alt="Sodoxo Logo"
                    width="134"
                    height="45"
                    src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Logos/Sodexo_Logotype_White.png?h=45&amp;iar=0&amp;w=134"
                  />
                </Link>
              </div>
              <div className="Footer_footer__head__socials__msT4u Footer_footer__head__socials--with-share-price__D93x_">
                <ul className="Footer_footer__head__socials__list__QTegF">
                  <li>
                    <Link href="https://twitter.com/sodexogroup" target="_blank">
                      <span className="Icon_icon__qNAb6" style={{ height: '48px', width: '48px' }}>
                        <svg aria-hidden="true" viewBox="0 0 48 48">
                          <use xlinkHref="#icons_twitter"></use>
                        </svg>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/company/sodexo/" target="_blank">
                      <span className="Icon_icon__qNAb6" style={{ height: '48px', width: '48px' }}>
                        <svg aria-hidden="true" viewBox="0 0 48 48">
                          <use xlinkHref="#icons_linkedin"></use>
                        </svg>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/sodexogroup/" target="_blank">
                      <span className="Icon_icon__qNAb6" style={{ height: '48px', width: '48px' }}>
                        <svg aria-hidden="true" viewBox="0 0 48 48">
                          <use xlinkHref="#icons_instagram"></use>
                        </svg>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com/user/SodexoGroup" target="_blank">
                      <span className="Icon_icon__qNAb6" style={{ height: '48px', width: '48px' }}>
                        <svg aria-hidden="true" viewBox="0 0 48 48">
                          <use xlinkHref="#icons_youtube"></use>
                        </svg>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <aside className="SharePrice_share-price__fZoBK">
                <p className="SharePrice_share-price__label__B1dUZ SharePrice_font-body-small__h1nQ0 color-white">
                  Share price
                </p>
                <span className="SharePrice_share-price__badge__f9keT SharePrice_font-h4__aGdXo color-base">
                  <p>53.30€</p>
                  <span className="SharePrice_share-price__badge__variation__Naqxx">
                    <span className="Icon_icon__qNAb6" style={{ height: '32px', width: '32px' }}>
                      <svg aria-hidden="true" viewBox="0 0 32 32">
                        <use xlinkHref="#icons_variation"></use>
                      </svg>
                    </span>
                    <p>-1.66%</p>
                  </span>
                </span>
              </aside>
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
                    <Link
                      target=""
                      className="FooterLink_footer-link__V8b7V"
                      href="/about-us/sodexo-in-brief"
                    >
                      Sodexo in Brief
                    </Link>
                  </li>
                  <li className="FooterNavigation_navItem__v16e9">
                    <Link
                      title="Opens web page (same window)"
                      target=""
                      className="FooterLink_footer-link__V8b7V"
                      href="/about-us/our-history"
                    >
                      Our History
                    </Link>
                  </li>
                  <li className="FooterNavigation_navItem__v16e9">
                    <Link
                      title="Opens web page (same window)"
                      target=""
                      className="FooterLink_footer-link__V8b7V"
                      href="/working-at-sodexo/more-than-a-job"
                    >
                      Working at Sodexo
                    </Link>
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
                        className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5 Icon_icon--rotate-90___Kml5"
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
                    <div aria-hidden="true" className="Accordion_accordion__panel__content__JtKyH">
                      <ul>
                        <li className="FooterNavigation_navItem__v16e9">
                          <Link
                            target=""
                            className="FooterLink_footer-link__V8b7V"
                            href="/about-us/sodexo-in-brief"
                          >
                            Sodexo in Brief
                          </Link>
                        </li>
                        <li className="FooterNavigation_navItem__v16e9">
                          <Link
                            title="Opens web page (same window)"
                            target=""
                            className="FooterLink_footer-link__V8b7V"
                            href="/about-us/our-history"
                          >
                            Our History
                          </Link>
                        </li>
                        <li className="FooterNavigation_navItem__v16e9">
                          <Link
                            title="Opens web page (same window)"
                            target=""
                            className="FooterLink_footer-link__V8b7V"
                            href="/working-at-sodexo/more-than-a-job"
                          >
                            Working at Sodexo
                          </Link>
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
                    <Link
                      title="Opens web page (same window)"
                      target=""
                      className="FooterLink_footer-link__V8b7V"
                      href="/brands-services/food/services"
                    >
                      Food
                    </Link>
                  </li>
                  <li className="FooterNavigation_navItem__v16e9">
                    <Link
                      title="Opens web page (same window)"
                      target=""
                      className="FooterLink_footer-link__V8b7V"
                      href="/corporate-responsibility/impact-on-communities/responsible-sourcing"
                    >
                      Responsible Sourcing
                    </Link>
                  </li>
                  <li className="FooterNavigation_navItem__v16e9">
                    <Link
                      title="Opens web page (same window)"
                      target=""
                      className="FooterLink_footer-link__V8b7V"
                      href="/corporate-responsibility/impact-on-environment/saving-resources-reducing-waste"
                    >
                      Reducing Food Waste
                    </Link>
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
                        className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5 Icon_icon--rotate-90___Kml5"
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
                    <div aria-hidden="true" className="Accordion_accordion__panel__content__JtKyH">
                      <ul>
                        <li className="FooterNavigation_navItem__v16e9">
                          <Link
                            title="Opens web page (same window)"
                            target=""
                            className="FooterLink_footer-link__V8b7V"
                            href="/brands-services/food/services"
                          >
                            Food
                          </Link>
                        </li>
                        <li className="FooterNavigation_navItem__v16e9">
                          <Link
                            title="Opens web page (same window)"
                            target=""
                            className="FooterLink_footer-link__V8b7V"
                            href="/corporate-responsibility/impact-on-communities/responsible-sourcing"
                          >
                            Responsible Sourcing
                          </Link>
                        </li>
                        <li className="FooterNavigation_navItem__v16e9">
                          <Link
                            title="Opens web page (same window)"
                            target=""
                            className="FooterLink_footer-link__V8b7V"
                            href="/corporate-responsibility/impact-on-environment/saving-resources-reducing-waste"
                          >
                            Reducing Food Waste
                          </Link>
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
                    <Link
                      title="Opens web page (same window)"
                      target=""
                      className="FooterLink_footer-link__V8b7V"
                      href="/investors/shareholders/benefits-registered-shareholder"
                    >
                      Investors
                    </Link>
                  </li>
                  <li className="FooterNavigation_navItem__v16e9">
                    <Link
                      title="Opens web page (same window)"
                      target=""
                      className="FooterLink_footer-link__V8b7V"
                      href="/working-at-sodexo/more-than-a-job"
                    >
                      Career Seekers
                    </Link>
                  </li>
                  <li className="FooterNavigation_navItem__v16e9">
                    <Link
                      title="Opens web page (same window)"
                      target=""
                      className="FooterLink_footer-link__V8b7V"
                      href="/news/newsroom"
                    >
                      Newsroom
                    </Link>
                  </li>
                  <li className="FooterNavigation_navItem__v16e9">
                    <Link
                      title="Opens web page (same window)"
                      target=""
                      className="FooterLink_footer-link__V8b7V"
                      href="/contact-us"
                    >
                      Contact Us
                    </Link>
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
                        className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5 Icon_icon--rotate-90___Kml5"
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
                    <div aria-hidden="true" className="Accordion_accordion__panel__content__JtKyH">
                      <ul>
                        <li className="FooterNavigation_navItem__v16e9">
                          <Link
                            title="Opens web page (same window)"
                            target=""
                            className="FooterLink_footer-link__V8b7V"
                            href="/investors/shareholders/benefits-registered-shareholder"
                          >
                            Investors
                          </Link>
                        </li>
                        <li className="FooterNavigation_navItem__v16e9">
                          <Link
                            title="Opens web page (same window)"
                            target=""
                            className="FooterLink_footer-link__V8b7V"
                            href="/working-at-sodexo/more-than-a-job"
                          >
                            Career Seekers
                          </Link>
                        </li>
                        <li className="FooterNavigation_navItem__v16e9">
                          <Link
                            title="Opens web page (same window)"
                            target=""
                            className="FooterLink_footer-link__V8b7V"
                            href="/news/newsroom"
                          >
                            Newsroom
                          </Link>
                        </li>
                        <li className="FooterNavigation_navItem__v16e9">
                          <Link
                            title="Opens web page (same window)"
                            target=""
                            className="FooterLink_footer-link__V8b7V"
                            href="/contact-us"
                          >
                            Contact Us
                          </Link>
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
                    <Link
                      title="Opens web page (same window)"
                      target=""
                      className="FooterLink_footer-link__V8b7V"
                      href="/contact-us"
                    >
                      Frequently Asked Questions
                    </Link>
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
                        className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5 Icon_icon--rotate-90___Kml5"
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
                    <div aria-hidden="true" className="Accordion_accordion__panel__content__JtKyH">
                      <ul>
                        <li className="FooterNavigation_navItem__v16e9">
                          <Link
                            title="Opens web page (same window)"
                            target=""
                            className="FooterLink_footer-link__V8b7V"
                            href="/contact-us"
                          >
                            Frequently Asked Questions
                          </Link>
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
                <Link
                  title="Opens page (same window)"
                  target=""
                  className="FooterLink_footer-link__V8b7V"
                  href="/legal/legal-privacy"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="Footer_footer-placeholder__item__Ygn2f Footer_footer__legal__item__XHCzb">
                <Link
                  title="Opens page (new window)"
                  target=""
                  className="FooterLink_footer-link__V8b7V"
                  href="/legal/cookie-policy"
                >
                  Cookie Policy
                </Link>
              </li>
              <li className="Footer_footer-placeholder__item__Ygn2f Footer_footer__legal__item__XHCzb">
                <Link
                  href="javascript:;return false;"
                  className="FooterLink_footer-link__V8b7V ot-sdk-show-settings"
                >
                  Cookie Settings
                </Link>
              </li>
              <li className="Footer_footer-placeholder__item__Ygn2f Footer_footer__legal__item__XHCzb">
                <Link
                  title="Opens page (same window)"
                  target=""
                  className="FooterLink_footer-link__V8b7V"
                  href="/legal/online-data-protection-policy"
                >
                  Online Privacy Policy
                </Link>
              </li>
              <li className="Footer_footer-placeholder__item__Ygn2f Footer_footer__legal__item__XHCzb">
                <Link
                  title="Opens page (new window)"
                  target=""
                  className="FooterLink_footer-link__V8b7V"
                  href="/legal/global-data-protection-policy"
                >
                  Data Protection Policy
                </Link>
              </li>
              <li className="Footer_footer-placeholder__item__Ygn2f Footer_footer__legal__item__XHCzb">
                <Link
                  href="https://vdp.sodexo.com"
                  className="FooterLink_footer-link__V8b7V"
                  title="Opens website (new window)"
                  target=""
                >
                  Vulnerability Disclosure Policy{' '}
                </Link>
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
                        className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5 Icon_icon--rotate-90___Kml5"
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
                    <div aria-hidden="true" className="Accordion_accordion__panel__content__JtKyH">
                      <ul>
                        <li className="Footer_footer-placeholder__item__Ygn2f Footer_footer__external__placeholder__oLAAZ">
                          <Link href="undefined" className="FooterLink_footer-link__V8b7V"></Link>
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
                <Link href="undefined" className="FooterLink_footer-link__V8b7V"></Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
