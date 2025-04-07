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
        <script type="text/javascript" async src="https://tag.aticdn.net/piano-analytics.js" />
        <script
          type="text/javascript"
          async
          src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js?did=af68c76a-4d0f-439d-b71a-a520761e4b2f"
        />
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-N3W8DT6" />
        <script
          defer
          noModule
          src="https://www.sodexo.com/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js"
        />
        <script
          src="https://www.sodexo.com/_next/static/chunks/webpack-298d49d36da548df.js"
          defer
        />
        <script
          src="https://www.sodexo.com/_next/static/chunks/framework-9620da855a94eb57.js"
          defer
        />
        <script src="https://www.sodexo.com/_next/static/chunks/main-2facddc7a75f0c44.js" defer />
        <script
          src="https://www.sodexo.com/_next/static/chunks/pages/_app-341dbd0e54409f54.js"
          defer
        />
        <script
          src="https://www.sodexo.com/_next/static/chunks/4333364f-94584e990f9d6ab0.js"
          defer
        />
        <script src="https://www.sodexo.com/_next/static/chunks/975-6f5469cf380f081c.js" defer />
        <script src="https://www.sodexo.com/_next/static/chunks/840-93f0fed481957f6f.js" defer />
        <script src="https://www.sodexo.com/_next/static/chunks/285-ed29a8c86bcb6bd9.js" defer />
        <script
          src="https://www.sodexo.com/_next/static/chunks/pages/%5B%5B...path%5D%5D-149ec4c58b8ca9df.js"
          defer
        />
        <script
          src="https://www.sodexo.com/_next/static/fjQkXPGL6oDwYVwaJbw8e/_buildManifest.js"
          defer
        />
        <script
          src="https://www.sodexo.com/_next/static/fjQkXPGL6oDwYVwaJbw8e/_ssgManifest.js"
          defer
        />
        <style id="__jsx-264729537" jsx>
          {`
          :root{--font-family-base: 'Theme Base', 'Open Sans', sans-serif;
          --font-family-heading: 'Theme Heading', 'Sansa Pro', sans-serif;
          `}
        </style>
        <style id="__jsx-1640501015">
          {`
          #id_main_skip_to_content.jsx-1640501015{}
          `}
        </style>
        <style id="__jsx-1675192690">
          {`#id_main_skip_to_content.jsx-1675192690{
   color: var(--color-font-base);
   }`}
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
        <style id="onetrust-style" jsx>
          {`
            #onetrust-banner-sdk .onetrust-vendors-list-handler {
              cursor: pointer;
              color: #1f96db;
              font-size: inherit;
              font-weight: 700;
              text-decoration: none;
              margin-left: 5px;
            }
            #onetrust-banner-sdk .onetrust-vendors-list-handler:hover {
              color: #1f96db;
            }
            #onetrust-banner-sdk:focus {
              outline: 2px solid #000;
              outline-offset: -2px;
            }
            #onetrust-banner-sdk a:focus {
              outline: 2px solid #000;
            }
            #onetrust-banner-sdk #onetrust-accept-btn-handler,
            #onetrust-banner-sdk #onetrust-reject-all-handler,
            #onetrust-banner-sdk #onetrust-pc-btn-handler {
              outline-offset: 1px;
            }
            #onetrust-banner-sdk.ot-bnr-w-logo .ot-bnr-logo {
              height: 64px;
              width: 64px;
            }
            #onetrust-banner-sdk .ot-tcf2-vendor-count.ot-text-bold {
              font-weight: 700;
            }
            #onetrust-banner-sdk .ot-close-icon,
            #onetrust-pc-sdk .ot-close-icon,
            #ot-sync-ntfy .ot-close-icon {
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              height: 12px;
              width: 12px;
            }
            #onetrust-banner-sdk .powered-by-logo,
            #onetrust-banner-sdk .ot-pc-footer-logo a,
            #onetrust-pc-sdk .powered-by-logo,
            #onetrust-pc-sdk .ot-pc-footer-logo a,
            #ot-sync-ntfy .powered-by-logo,
            #ot-sync-ntfy .ot-pc-footer-logo a {
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              height: 25px;
              width: 152px;
              display: block;
              text-decoration: none;
              font-size: 0.75em;
            }
            #onetrust-banner-sdk .powered-by-logo:hover,
            #onetrust-banner-sdk .ot-pc-footer-logo a:hover,
            #onetrust-pc-sdk .powered-by-logo:hover,
            #onetrust-pc-sdk .ot-pc-footer-logo a:hover,
            #ot-sync-ntfy .powered-by-logo:hover,
            #ot-sync-ntfy .ot-pc-footer-logo a:hover {
              color: #565656;
            }
            #onetrust-banner-sdk h3 *,
            #onetrust-banner-sdk h4 *,
            #onetrust-banner-sdk h6 *,
            #onetrust-banner-sdk button *,
            #onetrust-banner-sdk a[data-parent-id] *,
            #onetrust-pc-sdk h3 *,
            #onetrust-pc-sdk h4 *,
            #onetrust-pc-sdk h6 *,
            #onetrust-pc-sdk button *,
            #onetrust-pc-sdk a[data-parent-id] *,
            #ot-sync-ntfy h3 *,
            #ot-sync-ntfy h4 *,
            #ot-sync-ntfy h6 *,
            #ot-sync-ntfy button *,
            #ot-sync-ntfy a[data-parent-id] * {
              font-size: inherit;
              font-weight: inherit;
              color: inherit;
            }
            #onetrust-banner-sdk .ot-hide,
            #onetrust-pc-sdk .ot-hide,
            #ot-sync-ntfy .ot-hide {
              display: none !important;
            }
            #onetrust-banner-sdk button.ot-link-btn:hover,
            #onetrust-pc-sdk button.ot-link-btn:hover,
            #ot-sync-ntfy button.ot-link-btn:hover {
              text-decoration: underline;
              opacity: 1;
            }
            #onetrust-pc-sdk .ot-sdk-row .ot-sdk-column {
              padding: 0;
            }
            #onetrust-pc-sdk .ot-sdk-container {
              padding-right: 0;
            }
            #onetrust-pc-sdk .ot-sdk-row {
              flex-direction: initial;
              width: 100%;
            }
            #onetrust-pc-sdk [type='checkbox']:checked,
            #onetrust-pc-sdk [type='checkbox']:not(:checked) {
              pointer-events: initial;
            }
            #onetrust-pc-sdk [type='checkbox']:disabled + label::before,
            #onetrust-pc-sdk [type='checkbox']:disabled + label:after,
            #onetrust-pc-sdk [type='checkbox']:disabled + label {
              pointer-events: none;
              opacity: 0.7;
            }
            #onetrust-pc-sdk #vendor-list-content {
              transform: translate3d(0, 0, 0);
            }
            #onetrust-pc-sdk li input[type='checkbox'] {
              z-index: 1;
            }
            #onetrust-pc-sdk li .ot-checkbox label {
              z-index: 2;
            }
            #onetrust-pc-sdk li .ot-checkbox input[type='checkbox'] {
              height: auto;
              width: auto;
            }
            #onetrust-pc-sdk li .host-title a,
            #onetrust-pc-sdk li .ot-host-name a,
            #onetrust-pc-sdk li .accordion-text,
            #onetrust-pc-sdk li .ot-acc-txt {
              z-index: 2;
              position: relative;
            }
            #onetrust-pc-sdk input {
              margin: 3px 0.1ex;
            }
            #onetrust-pc-sdk .pc-logo,
            #onetrust-pc-sdk .ot-pc-logo {
              height: 60px;
              width: 180px;
              background-position: center;
              background-size: contain;
              background-repeat: no-repeat;
              display: inline-flex;
              justify-content: center;
              align-items: center;
            }
            #onetrust-pc-sdk .pc-logo img,
            #onetrust-pc-sdk .ot-pc-logo img {
              max-height: 100%;
              max-width: 100%;
            }
            #onetrust-pc-sdk .screen-reader-only,
            #onetrust-pc-sdk .ot-scrn-rdr,
            .ot-sdk-cookie-policy .screen-reader-only,
            .ot-sdk-cookie-policy .ot-scrn-rdr {
              border: 0;
              clip: rect(0 0 0 0);
              height: 1px;
              margin: -1px;
              overflow: hidden;
              padding: 0;
              position: absolute;
              width: 1px;
            }
            #onetrust-pc-sdk.ot-fade-in,
            .onetrust-pc-dark-filter.ot-fade-in,
            #onetrust-banner-sdk.ot-fade-in {
              animation-name: onetrust-fade-in;
              animation-duration: 400ms;
              animation-timing-function: ease-in-out;
            }
            #onetrust-pc-sdk.ot-hide {
              display: none !important;
            }
            .onetrust-pc-dark-filter.ot-hide {
              display: none !important;
            }
            #ot-sdk-btn.ot-sdk-show-settings,
            #ot-sdk-btn.optanon-show-settings {
              color: #68b631;
              border: 1px solid #68b631;
              height: auto;
              white-space: normal;
              word-wrap: break-word;
              padding: 0.8em 2em;
              font-size: 0.8em;
              line-height: 1.2;
              cursor: pointer;
              -moz-transition: 0.1s ease;
              -o-transition: 0.1s ease;
              -webkit-transition: 1s ease;
              transition: 0.1s ease;
            }
            #ot-sdk-btn.ot-sdk-show-settings:hover,
            #ot-sdk-btn.optanon-show-settings:hover {
              color: #fff;
              background-color: #68b631;
            }
            .onetrust-pc-dark-filter {
              background: rgba(0, 0, 0, 0.5);
              z-index: 2147483646;
              width: 100%;
              height: 100%;
              overflow: hidden;
              position: fixed;
              top: 0;
              bottom: 0;
              left: 0;
            }
            @keyframes onetrust-fade-in {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }
            .ot-cookie-label {
              text-decoration: underline;
            }
            @media only screen and (min-width: 426px) and (max-width: 896px) and (orientation: landscape) {
              #onetrust-pc-sdk p {
                font-size: 0.75em;
              }
            }
            #onetrust-banner-sdk .banner-option-input:focus + label {
              outline: 1px solid #000;
              outline-style: auto;
            }
            .category-vendors-list-handler + a:focus,
            .category-vendors-list-handler + a:focus-visible {
              outline: 2px solid #000;
            }
            #onetrust-pc-sdk .ot-userid-title {
              margin-top: 10px;
            }
            #onetrust-pc-sdk .ot-userid-title > span,
            #onetrust-pc-sdk .ot-userid-timestamp > span {
              font-weight: 700;
            }
            #onetrust-pc-sdk .ot-userid-desc {
              font-style: italic;
            }
            #onetrust-pc-sdk .ot-host-desc a {
              pointer-events: initial;
            }
            #onetrust-pc-sdk .ot-ven-hdr > p a {
              position: relative;
              z-index: 2;
              pointer-events: initial;
            }
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info a,
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info a {
              margin-right: auto;
            }
            #onetrust-pc-sdk .ot-pc-footer-logo img {
              width: 136px;
              height: 16px;
            }
            #onetrust-pc-sdk .ot-pur-vdr-count {
              font-weight: 400;
              font-size: 0.7rem;
              padding-top: 3px;
              display: block;
            }
            #onetrust-banner-sdk .ot-optout-signal,
            #onetrust-pc-sdk .ot-optout-signal {
              border: 1px solid #32ae88;
              border-radius: 3px;
              padding: 5px;
              margin-bottom: 10px;
              background-color: #f9fffa;
              font-size: 0.85rem;
              line-height: 2;
            }
            #onetrust-banner-sdk .ot-optout-signal .ot-optout-icon,
            #onetrust-pc-sdk .ot-optout-signal .ot-optout-icon {
              display: inline;
              margin-right: 5px;
            }
            #onetrust-banner-sdk .ot-optout-signal svg,
            #onetrust-pc-sdk .ot-optout-signal svg {
              height: 20px;
              width: 30px;
              transform: scale(0.5);
            }
            #onetrust-banner-sdk .ot-optout-signal svg path,
            #onetrust-pc-sdk .ot-optout-signal svg path {
              fill: #32ae88;
            }
            #onetrust-consent-sdk .ot-general-modal {
              overflow: hidden;
              position: fixed;
              margin: 0 auto;
              top: 50%;
              left: 50%;
              width: 40%;
              padding: 1.5rem;
              max-width: 575px;
              min-width: 575px;
              z-index: 2147483647;
              border-radius: 2.5px;
              transform: translate(-50%, -50%);
            }
            #onetrust-consent-sdk .ot-signature-health-group {
              margin-top: 1rem;
              padding-left: 1.25rem;
              padding-right: 1.25rem;
              margin-bottom: 0.625rem;
              width: calc(100% - 2.5rem);
            }
            #onetrust-consent-sdk .ot-signature-health-group .ot-signature-health-form {
              gap: 0.5rem;
            }
            #onetrust-consent-sdk .ot-signature-health .ot-signature-health-form {
              width: 70%;
              gap: 0.35rem;
            }
            #onetrust-consent-sdk .ot-signature-health .ot-signature-input {
              height: 38px;
              padding: 6px 10px;
              background-color: #fff;
              border: 1px solid #d1d1d1;
              border-radius: 4px;
              box-shadow: none;
              box-sizing: border-box;
            }
            #onetrust-consent-sdk .ot-signature-health .ot-signature-subtitle {
              font-size: 1.125rem;
            }
            #onetrust-consent-sdk .ot-signature-health .ot-signature-group-title {
              font-size: 1.25rem;
              font-weight: 700;
            }
            #onetrust-consent-sdk .ot-signature-health,
            #onetrust-consent-sdk .ot-signature-health-group {
              display: flex;
              flex-direction: column;
              gap: 1rem;
            }
            #onetrust-consent-sdk .ot-signature-health .ot-signature-cont,
            #onetrust-consent-sdk .ot-signature-health-group .ot-signature-cont {
              display: flex;
              flex-direction: column;
              gap: 0.25rem;
            }
            #onetrust-consent-sdk .ot-signature-health .ot-signature-paragraph,
            #onetrust-consent-sdk .ot-signature-health-group .ot-signature-paragraph {
              margin: 0;
              line-height: 20px;
              font-size: max(14px, 0.875rem);
            }
            #onetrust-consent-sdk .ot-signature-health .ot-health-signature-error,
            #onetrust-consent-sdk .ot-signature-health-group .ot-health-signature-error {
              color: #4d4d4d;
              font-size: min(12px, 0.75rem);
            }
            #onetrust-consent-sdk .ot-signature-health .ot-signature-buttons-cont,
            #onetrust-consent-sdk .ot-signature-health-group .ot-signature-buttons-cont {
              margin-top: max(0.75rem, 2%);
              gap: 1rem;
              display: flex;
              justify-content: flex-end;
            }
            #onetrust-consent-sdk .ot-signature-health .ot-signature-button,
            #onetrust-consent-sdk .ot-signature-health-group .ot-signature-button {
              flex: 1;
              height: auto;
              color: #fff;
              cursor: pointer;
              line-height: 1.2;
              min-width: 125px;
              font-weight: 600;
              font-size: 0.813em;
              border-radius: 2px;
              padding: 12px 10px;
              white-space: normal;
              word-wrap: break-word;
              word-break: break-word;
              background-color: #68b631;
              border: 2px solid #68b631;
            }
            #onetrust-consent-sdk .ot-signature-health .ot-signature-button.reject,
            #onetrust-consent-sdk .ot-signature-health-group .ot-signature-button.reject {
              background-color: #fff;
            }
            #onetrust-consent-sdk .ot-input-field-cont {
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
            }
            #onetrust-consent-sdk .ot-input-field-cont .ot-signature-input {
              width: 65%;
            }
            #onetrust-consent-sdk .ot-signature-health-form {
              display: flex;
              flex-direction: column;
            }
            #onetrust-consent-sdk .ot-signature-health-form .ot-signature-label {
              margin-bottom: 0;
              line-height: 20px;
              font-size: max(14px, 0.875rem);
            }
            @media only screen and (max-width: 600px) {
              #onetrust-consent-sdk .ot-general-modal {
                min-width: 100%;
              }
              #onetrust-consent-sdk .ot-signature-health .ot-signature-health-form {
                width: 100%;
              }
              #onetrust-consent-sdk .ot-input-field-cont .ot-signature-input {
                width: 100%;
              }
            }
            #onetrust-banner-sdk,
            #onetrust-pc-sdk,
            #ot-sdk-cookie-policy,
            #ot-sync-ntfy {
              font-size: 16px;
            }
            #onetrust-banner-sdk *,
            #onetrust-banner-sdk ::after,
            #onetrust-banner-sdk ::before,
            #onetrust-pc-sdk *,
            #onetrust-pc-sdk ::after,
            #onetrust-pc-sdk ::before,
            #ot-sdk-cookie-policy *,
            #ot-sdk-cookie-policy ::after,
            #ot-sdk-cookie-policy ::before,
            #ot-sync-ntfy *,
            #ot-sync-ntfy ::after,
            #ot-sync-ntfy ::before {
              -webkit-box-sizing: content-box;
              -moz-box-sizing: content-box;
              box-sizing: content-box;
            }
            #onetrust-banner-sdk div,
            #onetrust-banner-sdk span,
            #onetrust-banner-sdk h1,
            #onetrust-banner-sdk h2,
            #onetrust-banner-sdk h3,
            #onetrust-banner-sdk h4,
            #onetrust-banner-sdk h5,
            #onetrust-banner-sdk h6,
            #onetrust-banner-sdk p,
            #onetrust-banner-sdk img,
            #onetrust-banner-sdk svg,
            #onetrust-banner-sdk button,
            #onetrust-banner-sdk section,
            #onetrust-banner-sdk a,
            #onetrust-banner-sdk label,
            #onetrust-banner-sdk input,
            #onetrust-banner-sdk ul,
            #onetrust-banner-sdk li,
            #onetrust-banner-sdk nav,
            #onetrust-banner-sdk table,
            #onetrust-banner-sdk thead,
            #onetrust-banner-sdk tr,
            #onetrust-banner-sdk td,
            #onetrust-banner-sdk tbody,
            #onetrust-banner-sdk .ot-main-content,
            #onetrust-banner-sdk .ot-toggle,
            #onetrust-banner-sdk #ot-content,
            #onetrust-banner-sdk #ot-pc-content,
            #onetrust-banner-sdk .checkbox,
            #onetrust-pc-sdk div,
            #onetrust-pc-sdk span,
            #onetrust-pc-sdk h1,
            #onetrust-pc-sdk h2,
            #onetrust-pc-sdk h3,
            #onetrust-pc-sdk h4,
            #onetrust-pc-sdk h5,
            #onetrust-pc-sdk h6,
            #onetrust-pc-sdk p,
            #onetrust-pc-sdk img,
            #onetrust-pc-sdk svg,
            #onetrust-pc-sdk button,
            #onetrust-pc-sdk section,
            #onetrust-pc-sdk a,
            #onetrust-pc-sdk label,
            #onetrust-pc-sdk input,
            #onetrust-pc-sdk ul,
            #onetrust-pc-sdk li,
            #onetrust-pc-sdk nav,
            #onetrust-pc-sdk table,
            #onetrust-pc-sdk thead,
            #onetrust-pc-sdk tr,
            #onetrust-pc-sdk td,
            #onetrust-pc-sdk tbody,
            #onetrust-pc-sdk .ot-main-content,
            #onetrust-pc-sdk .ot-toggle,
            #onetrust-pc-sdk #ot-content,
            #onetrust-pc-sdk #ot-pc-content,
            #onetrust-pc-sdk .checkbox,
            #ot-sdk-cookie-policy div,
            #ot-sdk-cookie-policy span,
            #ot-sdk-cookie-policy h1,
            #ot-sdk-cookie-policy h2,
            #ot-sdk-cookie-policy h3,
            #ot-sdk-cookie-policy h4,
            #ot-sdk-cookie-policy h5,
            #ot-sdk-cookie-policy h6,
            #ot-sdk-cookie-policy p,
            #ot-sdk-cookie-policy img,
            #ot-sdk-cookie-policy svg,
            #ot-sdk-cookie-policy button,
            #ot-sdk-cookie-policy section,
            #ot-sdk-cookie-policy a,
            #ot-sdk-cookie-policy label,
            #ot-sdk-cookie-policy input,
            #ot-sdk-cookie-policy ul,
            #ot-sdk-cookie-policy li,
            #ot-sdk-cookie-policy nav,
            #ot-sdk-cookie-policy table,
            #ot-sdk-cookie-policy thead,
            #ot-sdk-cookie-policy tr,
            #ot-sdk-cookie-policy td,
            #ot-sdk-cookie-policy tbody,
            #ot-sdk-cookie-policy .ot-main-content,
            #ot-sdk-cookie-policy .ot-toggle,
            #ot-sdk-cookie-policy #ot-content,
            #ot-sdk-cookie-policy #ot-pc-content,
            #ot-sdk-cookie-policy .checkbox,
            #ot-sync-ntfy div,
            #ot-sync-ntfy span,
            #ot-sync-ntfy h1,
            #ot-sync-ntfy h2,
            #ot-sync-ntfy h3,
            #ot-sync-ntfy h4,
            #ot-sync-ntfy h5,
            #ot-sync-ntfy h6,
            #ot-sync-ntfy p,
            #ot-sync-ntfy img,
            #ot-sync-ntfy svg,
            #ot-sync-ntfy button,
            #ot-sync-ntfy section,
            #ot-sync-ntfy a,
            #ot-sync-ntfy label,
            #ot-sync-ntfy input,
            #ot-sync-ntfy ul,
            #ot-sync-ntfy li,
            #ot-sync-ntfy nav,
            #ot-sync-ntfy table,
            #ot-sync-ntfy thead,
            #ot-sync-ntfy tr,
            #ot-sync-ntfy td,
            #ot-sync-ntfy tbody,
            #ot-sync-ntfy .ot-main-content,
            #ot-sync-ntfy .ot-toggle,
            #ot-sync-ntfy #ot-content,
            #ot-sync-ntfy #ot-pc-content,
            #ot-sync-ntfy .checkbox {
              font-family: inherit;
              font-weight: 400;
              -webkit-font-smoothing: auto;
              letter-spacing: normal;
              line-height: normal;
              padding: 0;
              margin: 0;
              height: auto;
              min-height: 0;
              max-height: none;
              width: auto;
              min-width: 0;
              max-width: none;
              border-radius: 0;
              border: none;
              clear: none;
              float: none;
              position: static;
              bottom: auto;
              left: auto;
              right: auto;
              top: auto;
              text-align: left;
              text-decoration: none;
              text-indent: 0;
              text-shadow: none;
              text-transform: none;
              white-space: normal;
              background: 0 0;
              overflow: visible;
              vertical-align: baseline;
              visibility: visible;
              z-index: auto;
              box-shadow: none;
            }
            #onetrust-banner-sdk label:before,
            #onetrust-banner-sdk label:after,
            #onetrust-banner-sdk .checkbox:after,
            #onetrust-banner-sdk .checkbox:before,
            #onetrust-pc-sdk label:before,
            #onetrust-pc-sdk label:after,
            #onetrust-pc-sdk .checkbox:after,
            #onetrust-pc-sdk .checkbox:before,
            #ot-sdk-cookie-policy label:before,
            #ot-sdk-cookie-policy label:after,
            #ot-sdk-cookie-policy .checkbox:after,
            #ot-sdk-cookie-policy .checkbox:before,
            #ot-sync-ntfy label:before,
            #ot-sync-ntfy label:after,
            #ot-sync-ntfy .checkbox:after,
            #ot-sync-ntfy .checkbox:before {
              content: '';
              content: none;
            }
            #onetrust-banner-sdk .ot-sdk-container,
            #onetrust-pc-sdk .ot-sdk-container,
            #ot-sdk-cookie-policy .ot-sdk-container {
              position: relative;
              width: 100%;
              max-width: 100%;
              margin: 0 auto;
              padding: 0 20px;
              box-sizing: border-box;
            }
            #onetrust-banner-sdk .ot-sdk-column,
            #onetrust-banner-sdk .ot-sdk-columns,
            #onetrust-pc-sdk .ot-sdk-column,
            #onetrust-pc-sdk .ot-sdk-columns,
            #ot-sdk-cookie-policy .ot-sdk-column,
            #ot-sdk-cookie-policy .ot-sdk-columns {
              width: 100%;
              float: left;
              box-sizing: border-box;
              padding: 0;
              display: initial;
            }
            @media (min-width: 400px) {
              #onetrust-banner-sdk .ot-sdk-container,
              #onetrust-pc-sdk .ot-sdk-container,
              #ot-sdk-cookie-policy .ot-sdk-container {
                width: 90%;
                padding: 0;
              }
            }
            @media (min-width: 550px) {
              #onetrust-banner-sdk .ot-sdk-container,
              #onetrust-pc-sdk .ot-sdk-container,
              #ot-sdk-cookie-policy .ot-sdk-container {
                width: 100%;
              }
              #onetrust-banner-sdk .ot-sdk-column,
              #onetrust-banner-sdk .ot-sdk-columns,
              #onetrust-pc-sdk .ot-sdk-column,
              #onetrust-pc-sdk .ot-sdk-columns,
              #ot-sdk-cookie-policy .ot-sdk-column,
              #ot-sdk-cookie-policy .ot-sdk-columns {
                margin-left: 4%;
              }
              #onetrust-banner-sdk .ot-sdk-column:first-child,
              #onetrust-banner-sdk .ot-sdk-columns:first-child,
              #onetrust-pc-sdk .ot-sdk-column:first-child,
              #onetrust-pc-sdk .ot-sdk-columns:first-child,
              #ot-sdk-cookie-policy .ot-sdk-column:first-child,
              #ot-sdk-cookie-policy .ot-sdk-columns:first-child {
                margin-left: 0;
              }
              #onetrust-banner-sdk .ot-sdk-two.ot-sdk-columns,
              #onetrust-pc-sdk .ot-sdk-two.ot-sdk-columns,
              #ot-sdk-cookie-policy .ot-sdk-two.ot-sdk-columns {
                width: 13.3333333333%;
              }
              #onetrust-banner-sdk .ot-sdk-three.ot-sdk-columns,
              #onetrust-pc-sdk .ot-sdk-three.ot-sdk-columns,
              #ot-sdk-cookie-policy .ot-sdk-three.ot-sdk-columns {
                width: 22%;
              }
              #onetrust-banner-sdk .ot-sdk-four.ot-sdk-columns,
              #onetrust-pc-sdk .ot-sdk-four.ot-sdk-columns,
              #ot-sdk-cookie-policy .ot-sdk-four.ot-sdk-columns {
                width: 30.6666666667%;
              }
              #onetrust-banner-sdk .ot-sdk-eight.ot-sdk-columns,
              #onetrust-pc-sdk .ot-sdk-eight.ot-sdk-columns,
              #ot-sdk-cookie-policy .ot-sdk-eight.ot-sdk-columns {
                width: 65.3333333333%;
              }
              #onetrust-banner-sdk .ot-sdk-nine.ot-sdk-columns,
              #onetrust-pc-sdk .ot-sdk-nine.ot-sdk-columns,
              #ot-sdk-cookie-policy .ot-sdk-nine.ot-sdk-columns {
                width: 74%;
              }
              #onetrust-banner-sdk .ot-sdk-ten.ot-sdk-columns,
              #onetrust-pc-sdk .ot-sdk-ten.ot-sdk-columns,
              #ot-sdk-cookie-policy .ot-sdk-ten.ot-sdk-columns {
                width: 82.6666666667%;
              }
              #onetrust-banner-sdk .ot-sdk-eleven.ot-sdk-columns,
              #onetrust-pc-sdk .ot-sdk-eleven.ot-sdk-columns,
              #ot-sdk-cookie-policy .ot-sdk-eleven.ot-sdk-columns {
                width: 91.3333333333%;
              }
              #onetrust-banner-sdk .ot-sdk-twelve.ot-sdk-columns,
              #onetrust-pc-sdk .ot-sdk-twelve.ot-sdk-columns,
              #ot-sdk-cookie-policy .ot-sdk-twelve.ot-sdk-columns {
                width: 100%;
                margin-left: 0;
              }
            }
            #onetrust-banner-sdk h1,
            #onetrust-banner-sdk h2,
            #onetrust-banner-sdk h3,
            #onetrust-banner-sdk h4,
            #onetrust-banner-sdk h5,
            #onetrust-banner-sdk h6,
            #onetrust-pc-sdk h1,
            #onetrust-pc-sdk h2,
            #onetrust-pc-sdk h3,
            #onetrust-pc-sdk h4,
            #onetrust-pc-sdk h5,
            #onetrust-pc-sdk h6,
            #ot-sdk-cookie-policy h1,
            #ot-sdk-cookie-policy h2,
            #ot-sdk-cookie-policy h3,
            #ot-sdk-cookie-policy h4,
            #ot-sdk-cookie-policy h5,
            #ot-sdk-cookie-policy h6 {
              margin-top: 0;
              font-weight: 600;
              font-family: inherit;
            }
            #onetrust-banner-sdk h1,
            #onetrust-pc-sdk h1,
            #ot-sdk-cookie-policy h1 {
              font-size: 1.5rem;
              line-height: 1.2;
            }
            #onetrust-banner-sdk h2,
            #onetrust-pc-sdk h2,
            #ot-sdk-cookie-policy h2 {
              font-size: 1.5rem;
              line-height: 1.25;
            }
            #onetrust-banner-sdk h3,
            #onetrust-pc-sdk h3,
            #ot-sdk-cookie-policy h3 {
              font-size: 1.5rem;
              line-height: 1.3;
            }
            #onetrust-banner-sdk h4,
            #onetrust-pc-sdk h4,
            #ot-sdk-cookie-policy h4 {
              font-size: 1.5rem;
              line-height: 1.35;
            }
            #onetrust-banner-sdk h5,
            #onetrust-pc-sdk h5,
            #ot-sdk-cookie-policy h5 {
              font-size: 1.5rem;
              line-height: 1.5;
            }
            #onetrust-banner-sdk h6,
            #onetrust-pc-sdk h6,
            #ot-sdk-cookie-policy h6 {
              font-size: 1.5rem;
              line-height: 1.6;
            }
            @media (min-width: 550px) {
              #onetrust-banner-sdk h1,
              #onetrust-pc-sdk h1,
              #ot-sdk-cookie-policy h1 {
                font-size: 1.5rem;
              }
              #onetrust-banner-sdk h2,
              #onetrust-pc-sdk h2,
              #ot-sdk-cookie-policy h2 {
                font-size: 1.5rem;
              }
              #onetrust-banner-sdk h3,
              #onetrust-pc-sdk h3,
              #ot-sdk-cookie-policy h3 {
                font-size: 1.5rem;
              }
              #onetrust-banner-sdk h4,
              #onetrust-pc-sdk h4,
              #ot-sdk-cookie-policy h4 {
                font-size: 1.5rem;
              }
              #onetrust-banner-sdk h5,
              #onetrust-pc-sdk h5,
              #ot-sdk-cookie-policy h5 {
                font-size: 1.5rem;
              }
              #onetrust-banner-sdk h6,
              #onetrust-pc-sdk h6,
              #ot-sdk-cookie-policy h6 {
                font-size: 1.5rem;
              }
            }
            #onetrust-banner-sdk p,
            #onetrust-pc-sdk p,
            #ot-sdk-cookie-policy p {
              margin: 0 0 1em;
              font-family: inherit;
              line-height: normal;
            }
            #onetrust-banner-sdk a,
            #onetrust-pc-sdk a,
            #ot-sdk-cookie-policy a {
              color: #565656;
              text-decoration: underline;
            }
            #onetrust-banner-sdk a:hover,
            #onetrust-pc-sdk a:hover,
            #ot-sdk-cookie-policy a:hover {
              color: #565656;
              text-decoration: none;
            }
            #onetrust-banner-sdk .ot-sdk-button,
            #onetrust-banner-sdk button,
            #onetrust-pc-sdk .ot-sdk-button,
            #onetrust-pc-sdk button,
            #ot-sdk-cookie-policy .ot-sdk-button,
            #ot-sdk-cookie-policy button {
              margin-bottom: 1rem;
              font-family: inherit;
            }
            #onetrust-banner-sdk .ot-sdk-button,
            #onetrust-banner-sdk button,
            #onetrust-pc-sdk .ot-sdk-button,
            #onetrust-pc-sdk button,
            #ot-sdk-cookie-policy .ot-sdk-button,
            #ot-sdk-cookie-policy button {
              display: inline-block;
              height: 38px;
              padding: 0 30px;
              color: #555;
              text-align: center;
              font-size: 0.9em;
              font-weight: 400;
              line-height: 38px;
              letter-spacing: 0.01em;
              text-decoration: none;
              white-space: nowrap;
              background-color: transparent;
              border-radius: 2px;
              border: 1px solid #bbb;
              cursor: pointer;
              box-sizing: border-box;
            }
            #onetrust-banner-sdk .ot-sdk-button:hover,
            #onetrust-banner-sdk :not(.ot-leg-btn-container) > button:not(.ot-link-btn):hover,
            #onetrust-banner-sdk :not(.ot-leg-btn-container) > button:not(.ot-link-btn):focus,
            #onetrust-pc-sdk .ot-sdk-button:hover,
            #onetrust-pc-sdk :not(.ot-leg-btn-container) > button:not(.ot-link-btn):hover,
            #onetrust-pc-sdk :not(.ot-leg-btn-container) > button:not(.ot-link-btn):focus,
            #ot-sdk-cookie-policy .ot-sdk-button:hover,
            #ot-sdk-cookie-policy :not(.ot-leg-btn-container) > button:not(.ot-link-btn):hover,
            #ot-sdk-cookie-policy :not(.ot-leg-btn-container) > button:not(.ot-link-btn):focus {
              color: #333;
              border-color: #888;
              opacity: 0.7;
            }
            #onetrust-banner-sdk .ot-sdk-button:focus,
            #onetrust-banner-sdk :not(.ot-leg-btn-container) > button:focus,
            #onetrust-pc-sdk .ot-sdk-button:focus,
            #onetrust-pc-sdk :not(.ot-leg-btn-container) > button:focus,
            #ot-sdk-cookie-policy .ot-sdk-button:focus,
            #ot-sdk-cookie-policy :not(.ot-leg-btn-container) > button:focus {
              outline: 2px solid #000;
            }
            #onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary,
            #onetrust-banner-sdk button.ot-sdk-button-primary,
            #onetrust-banner-sdk input[type='submit'].ot-sdk-button-primary,
            #onetrust-banner-sdk input[type='reset'].ot-sdk-button-primary,
            #onetrust-banner-sdk input[type='button'].ot-sdk-button-primary,
            #onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary,
            #onetrust-pc-sdk button.ot-sdk-button-primary,
            #onetrust-pc-sdk input[type='submit'].ot-sdk-button-primary,
            #onetrust-pc-sdk input[type='reset'].ot-sdk-button-primary,
            #onetrust-pc-sdk input[type='button'].ot-sdk-button-primary,
            #ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary,
            #ot-sdk-cookie-policy button.ot-sdk-button-primary,
            #ot-sdk-cookie-policy input[type='submit'].ot-sdk-button-primary,
            #ot-sdk-cookie-policy input[type='reset'].ot-sdk-button-primary,
            #ot-sdk-cookie-policy input[type='button'].ot-sdk-button-primary {
              color: #fff;
              background-color: #33c3f0;
              border-color: #33c3f0;
            }
            #onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:hover,
            #onetrust-banner-sdk button.ot-sdk-button-primary:hover,
            #onetrust-banner-sdk input[type='submit'].ot-sdk-button-primary:hover,
            #onetrust-banner-sdk input[type='reset'].ot-sdk-button-primary:hover,
            #onetrust-banner-sdk input[type='button'].ot-sdk-button-primary:hover,
            #onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:focus,
            #onetrust-banner-sdk button.ot-sdk-button-primary:focus,
            #onetrust-banner-sdk input[type='submit'].ot-sdk-button-primary:focus,
            #onetrust-banner-sdk input[type='reset'].ot-sdk-button-primary:focus,
            #onetrust-banner-sdk input[type='button'].ot-sdk-button-primary:focus,
            #onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:hover,
            #onetrust-pc-sdk button.ot-sdk-button-primary:hover,
            #onetrust-pc-sdk input[type='submit'].ot-sdk-button-primary:hover,
            #onetrust-pc-sdk input[type='reset'].ot-sdk-button-primary:hover,
            #onetrust-pc-sdk input[type='button'].ot-sdk-button-primary:hover,
            #onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:focus,
            #onetrust-pc-sdk button.ot-sdk-button-primary:focus,
            #onetrust-pc-sdk input[type='submit'].ot-sdk-button-primary:focus,
            #onetrust-pc-sdk input[type='reset'].ot-sdk-button-primary:focus,
            #onetrust-pc-sdk input[type='button'].ot-sdk-button-primary:focus,
            #ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:hover,
            #ot-sdk-cookie-policy button.ot-sdk-button-primary:hover,
            #ot-sdk-cookie-policy input[type='submit'].ot-sdk-button-primary:hover,
            #ot-sdk-cookie-policy input[type='reset'].ot-sdk-button-primary:hover,
            #ot-sdk-cookie-policy input[type='button'].ot-sdk-button-primary:hover,
            #ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:focus,
            #ot-sdk-cookie-policy button.ot-sdk-button-primary:focus,
            #ot-sdk-cookie-policy input[type='submit'].ot-sdk-button-primary:focus,
            #ot-sdk-cookie-policy input[type='reset'].ot-sdk-button-primary:focus,
            #ot-sdk-cookie-policy input[type='button'].ot-sdk-button-primary:focus {
              color: #fff;
              background-color: #1eaedb;
              border-color: #1eaedb;
            }
            #onetrust-banner-sdk input[type='text'],
            #onetrust-pc-sdk input[type='text'],
            #ot-sdk-cookie-policy input[type='text'] {
              height: 38px;
              padding: 6px 10px;
              background-color: #fff;
              border: 1px solid #d1d1d1;
              border-radius: 4px;
              box-shadow: none;
              box-sizing: border-box;
            }
            #onetrust-banner-sdk input[type='text'],
            #onetrust-pc-sdk input[type='text'],
            #ot-sdk-cookie-policy input[type='text'] {
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
            }
            #onetrust-banner-sdk input[type='text']:focus,
            #onetrust-pc-sdk input[type='text']:focus,
            #ot-sdk-cookie-policy input[type='text']:focus {
              border: 1px solid #000;
              outline: 0;
            }
            #onetrust-banner-sdk label,
            #onetrust-pc-sdk label,
            #ot-sdk-cookie-policy label {
              display: block;
              margin-bottom: 0.5rem;
              font-weight: 600;
            }
            #onetrust-banner-sdk input[type='checkbox'],
            #onetrust-pc-sdk input[type='checkbox'],
            #ot-sdk-cookie-policy input[type='checkbox'] {
              display: inline;
            }
            #onetrust-banner-sdk ul,
            #onetrust-pc-sdk ul,
            #ot-sdk-cookie-policy ul {
              list-style: circle inside;
            }
            #onetrust-banner-sdk ul,
            #onetrust-pc-sdk ul,
            #ot-sdk-cookie-policy ul {
              padding-left: 0;
              margin-top: 0;
            }
            #onetrust-banner-sdk ul ul,
            #onetrust-pc-sdk ul ul,
            #ot-sdk-cookie-policy ul ul {
              margin: 1.5rem 0 1.5rem 3rem;
              font-size: 90%;
            }
            #onetrust-banner-sdk li,
            #onetrust-pc-sdk li,
            #ot-sdk-cookie-policy li {
              margin-bottom: 1rem;
            }
            #onetrust-banner-sdk th,
            #onetrust-banner-sdk td,
            #onetrust-pc-sdk th,
            #onetrust-pc-sdk td,
            #ot-sdk-cookie-policy th,
            #ot-sdk-cookie-policy td {
              padding: 12px 15px;
              text-align: left;
              border-bottom: 1px solid #e1e1e1;
            }
            #onetrust-banner-sdk button,
            #onetrust-pc-sdk button,
            #ot-sdk-cookie-policy button {
              margin-bottom: 1rem;
              font-family: inherit;
            }
            #onetrust-banner-sdk .ot-sdk-container:after,
            #onetrust-banner-sdk .ot-sdk-row:after,
            #onetrust-pc-sdk .ot-sdk-container:after,
            #onetrust-pc-sdk .ot-sdk-row:after,
            #ot-sdk-cookie-policy .ot-sdk-container:after,
            #ot-sdk-cookie-policy .ot-sdk-row:after {
              content: '';
              display: table;
              clear: both;
            }
            #onetrust-banner-sdk .ot-sdk-row,
            #onetrust-pc-sdk .ot-sdk-row,
            #ot-sdk-cookie-policy .ot-sdk-row {
              margin: 0;
              max-width: none;
              display: block;
            }
            #onetrust-banner-sdk {
              box-shadow: 0 0 18px rgba(0, 0, 0, 0.2);
            }
            #onetrust-banner-sdk.otCenterRounded {
              z-index: 2147483645;
              top: 10%;
              position: fixed;
              right: 0;
              background-color: #fff;
              width: 60%;
              max-width: 650px;
              border-radius: 2.5px;
              left: 1em;
              margin: 0 auto;
              font-size: 14px;
              max-height: 90%;
              overflow-x: hidden;
              overflow-y: auto;
            }
            #onetrust-banner-sdk.otRelFont {
              font-size: 0.875rem;
            }
            #onetrust-banner-sdk::-webkit-scrollbar {
              width: 11px;
            }
            #onetrust-banner-sdk::-webkit-scrollbar-thumb {
              border-radius: 10px;
              background: #c1c1c1;
            }
            #onetrust-banner-sdk {
              scrollbar-arrow-color: #c1c1c1;
              scrollbar-darkshadow-color: #c1c1c1;
              scrollbar-face-color: #c1c1c1;
              scrollbar-shadow-color: #c1c1c1;
            }
            #onetrust-banner-sdk h3,
            #onetrust-banner-sdk p {
              color: dimgray;
            }
            #onetrust-banner-sdk #onetrust-policy {
              margin-top: 40px;
            }
            #onetrust-banner-sdk #onetrust-policy-title {
              float: left;
              text-align: left;
              font-size: 1em;
              line-height: 1.4;
              margin-bottom: 0;
              padding: 0 0 10px 30px;
              width: calc(100% - 90px);
            }
            #onetrust-banner-sdk #onetrust-policy-text,
            #onetrust-banner-sdk .ot-b-addl-desc,
            #onetrust-banner-sdk .ot-gv-list-handler {
              clear: both;
              float: left;
              margin: 0 30px 10px 30px;
              font-size: 0.813em;
              line-height: 1.5;
            }
            #onetrust-banner-sdk #onetrust-policy-text *,
            #onetrust-banner-sdk .ot-b-addl-desc *,
            #onetrust-banner-sdk .ot-gv-list-handler * {
              line-height: inherit;
              font-size: inherit;
              margin: 0;
            }
            #onetrust-banner-sdk .ot-optout-signal {
              margin: 0 1.875rem 0.625rem 1.875rem;
            }
            #onetrust-banner-sdk .ot-gv-list-handler {
              padding: 0;
              border: 0;
              height: auto;
              width: auto;
            }
            #onetrust-banner-sdk .ot-b-addl-desc {
              display: block;
            }
            #onetrust-banner-sdk #onetrust-button-group-parent {
              padding: 15px 30px;
              text-align: center;
            }
            #onetrust-banner-sdk
              #onetrust-button-group-parent:not(.has-reject-all-button)
              #onetrust-button-group {
              text-align: right;
            }
            #onetrust-banner-sdk #onetrust-button-group {
              text-align: center;
              display: inline-block;
              width: 100%;
            }
            #onetrust-banner-sdk #onetrust-reject-all-handler,
            #onetrust-banner-sdk #onetrust-pc-btn-handler {
              margin-right: 1em;
            }
            #onetrust-banner-sdk #onetrust-pc-btn-handler {
              border: 1px solid #6cc04a;
              max-width: 45%;
            }
            #onetrust-banner-sdk .banner-actions-container {
              float: right;
              width: 50%;
            }
            #onetrust-banner-sdk #onetrust-pc-btn-handler.cookie-setting-link {
              background-color: #fff;
              border: none;
              color: #6cc04a;
              text-decoration: underline;
              padding-left: 0;
              padding-right: 0;
            }
            #onetrust-banner-sdk #onetrust-accept-btn-handler,
            #onetrust-banner-sdk #onetrust-reject-all-handler,
            #onetrust-banner-sdk #onetrust-pc-btn-handler {
              background-color: #6cc04a;
              color: #fff;
              border-color: #6cc04a;
              min-width: 135px;
              padding: 12px 10px;
              letter-spacing: 0.05em;
              line-height: 1.4;
              font-size: 0.813em;
              font-weight: 600;
              height: auto;
              white-space: normal;
              word-break: break-word;
              word-wrap: break-word;
            }
            #onetrust-banner-sdk .has-reject-all-button #onetrust-pc-btn-handler {
              float: left;
              max-width: calc(40% - 18px);
            }
            #onetrust-banner-sdk
              .has-reject-all-button
              #onetrust-pc-btn-handler.cookie-setting-link {
              text-align: left;
              margin-right: 0;
            }
            #onetrust-banner-sdk .has-reject-all-button .banner-actions-container {
              max-width: 60%;
              width: auto;
            }
            #onetrust-banner-sdk .ot-close-icon {
              width: 44px;
              height: 44px;
              background-size: 12px;
              margin: -18px -18px 0 0;
              border: none;
              display: inline-block;
              padding: 0;
            }
            #onetrust-banner-sdk #onetrust-close-btn-container {
              position: absolute;
              right: 24px;
              top: 20px;
            }
            #onetrust-banner-sdk .banner_logo {
              display: none;
            }
            #onetrust-banner-sdk.ot-bnr-w-logo #onetrust-policy {
              margin-top: 10px;
            }
            #onetrust-banner-sdk.ot-bnr-w-logo .ot-bnr-logo {
              margin: 4px 25px;
            }
            #onetrust-banner-sdk #banner-options {
              float: left;
              padding: 0 30px;
              width: calc(100% - 90px);
            }
            #onetrust-banner-sdk .banner-option {
              margin-bottom: 10px;
            }
            #onetrust-banner-sdk .banner-option-input {
              cursor: pointer;
              width: auto;
              height: auto;
              border: none;
              padding: 0;
              padding-right: 3px;
              margin: 0 0 6px;
              font-size: 0.82em;
              line-height: 1.4;
            }
            #onetrust-banner-sdk .banner-option-input * {
              pointer-events: none;
              font-size: inherit;
              line-height: inherit;
            }
            #onetrust-banner-sdk .banner-option-input[aria-expanded='true'] .ot-arrow-container {
              transform: rotate(90deg);
            }
            #onetrust-banner-sdk
              .banner-option-input[aria-expanded='true']
              ~ .banner-option-details {
              height: auto;
              display: block;
            }
            #onetrust-banner-sdk .banner-option-header {
              cursor: pointer;
              display: inline-block;
            }
            #onetrust-banner-sdk .banner-option-header :first-child {
              color: dimgray;
              font-weight: bold;
              float: left;
            }
            #onetrust-banner-sdk .ot-arrow-container,
            #onetrust-banner-sdk .banner-option-details {
              transition: all 300ms ease-in 0s;
              -webkit-transition: all 300ms ease-in 0s;
              -moz-transition: all 300ms ease-in 0s;
              -o-transition: all 300ms ease-in 0s;
            }
            #onetrust-banner-sdk .ot-arrow-container {
              display: inline-block;
              border-top: 6px solid rgba(0, 0, 0, 0);
              border-bottom: 6px solid rgba(0, 0, 0, 0);
              border-left: 6px solid dimgray;
              margin-left: 10px;
              vertical-align: middle;
            }
            #onetrust-banner-sdk .banner-option-details {
              display: none;
              font-size: 0.83em;
              line-height: 1.5;
              height: 0px;
              padding: 10px 10px 5px 10px;
            }
            #onetrust-banner-sdk .banner-option-details * {
              font-size: inherit;
              line-height: inherit;
              color: dimgray;
            }
            #onetrust-banner-sdk .ot-dpd-container {
              float: left;
              margin: 0 30px 10px 30px;
            }
            #onetrust-banner-sdk .ot-dpd-title {
              font-weight: bold;
              padding-bottom: 10px;
            }
            #onetrust-banner-sdk .ot-dpd-title {
              font-size: 1em;
              line-height: 1.4;
            }
            #onetrust-banner-sdk .ot-dpd-desc {
              font-size: 0.813em;
              line-height: 1.5;
              margin-bottom: 0;
            }
            #onetrust-banner-sdk .ot-dpd-desc * {
              margin: 0;
            }
            #onetrust-banner-sdk .onetrust-vendors-list-handler {
              display: block;
              margin-left: 0px;
              margin-top: 5px;
              padding: 0;
              margin-bottom: 0;
              border: 0;
              line-height: normal;
              height: auto;
              width: auto;
            }
            #onetrust-banner-sdk :not(.ot-dpd-desc) > .ot-b-addl-desc {
              float: left;
              margin: 0 30px 10px 30px;
            }
            #onetrust-banner-sdk .ot-dpd-desc > .ot-b-addl-desc {
              margin-top: 10px;
              margin-bottom: 10px;
              font-size: 1em;
              line-height: 1.5;
              float: none;
            }
            #onetrust-banner-sdk #onetrust-policy-text a {
              font-weight: bold;
              margin-left: 5px;
            }
            #onetrust-banner-sdk.ot-close-btn-link #onetrust-close-btn-container {
              top: 15px;
              transform: none;
              right: 15px;
            }
            #onetrust-banner-sdk.ot-close-btn-link #onetrust-close-btn-container button {
              padding: 0;
              white-space: pre-wrap;
              border: none;
              height: auto;
              line-height: 1.5;
              text-decoration: underline;
              font-size: 0.75em;
            }
            #onetrust-banner-sdk.ot-close-btn-link.ot-wo-title #onetrust-group-container {
              margin-top: 20px;
            }
            @media only screen and (max-width: 425px) {
              #onetrust-banner-sdk #onetrust-accept-btn-handler,
              #onetrust-banner-sdk #onetrust-reject-all-handler,
              #onetrust-banner-sdk #onetrust-pc-btn-handler {
                width: 100%;
                margin-bottom: 10px;
              }
              #onetrust-banner-sdk #onetrust-pc-btn-handler,
              #onetrust-banner-sdk #onetrust-reject-all-handler {
                margin-right: 0;
              }
              #onetrust-banner-sdk
                .has-reject-all-button
                #onetrust-pc-btn-handler.cookie-setting-link {
                text-align: center;
              }
              #onetrust-banner-sdk .banner-actions-container,
              #onetrust-banner-sdk #onetrust-pc-btn-handler {
                width: 100%;
                max-width: none;
              }
              #onetrust-banner-sdk.otCenterRounded {
                left: 0;
                width: 95%;
                top: 50%;
                transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
              }
            }
            @media only screen and (max-width: 600px) {
              #onetrust-banner-sdk .ot-sdk-container {
                width: auto;
                padding: 0;
              }
              #onetrust-banner-sdk #onetrust-policy-title {
                padding: 0 22px 10px 22px;
              }
              #onetrust-banner-sdk #onetrust-policy-text,
              #onetrust-banner-sdk :not(.ot-dpd-desc) > .ot-b-addl-desc,
              #onetrust-banner-sdk .ot-dpd-container {
                margin: 0 22px 10px 22px;
                width: calc(100% - 44px);
              }
              #onetrust-banner-sdk #onetrust-button-group-parent {
                padding: 15px 22px;
              }
              #onetrust-banner-sdk #banner-options {
                padding: 0 22px;
                width: calc(100% - 44px);
              }
              #onetrust-banner-sdk .banner-option {
                margin-bottom: 6px;
              }
              #onetrust-banner-sdk .has-reject-all-button #onetrust-pc-btn-handler {
                float: none;
                max-width: 100%;
              }
              #onetrust-banner-sdk .has-reject-all-button .banner-actions-container {
                width: 100%;
                text-align: center;
                max-width: 100%;
              }
              #onetrust-banner-sdk.ot-close-btn-link #onetrust-group-container {
                margin-top: 20px;
              }
            }
            @media only screen and (min-width: 426px) and (max-width: 896px) {
              #onetrust-banner-sdk.otCenterRounded {
                left: 0;
                top: 15%;
                transform: translateY(-13%);
                -webkit-transform: translateY(-13%);
                max-width: 600px;
                width: 95%;
              }
            }
            #onetrust-consent-sdk #onetrust-banner-sdk {
              background-color: #ffffff;
            }
            #onetrust-consent-sdk #onetrust-policy-title,
            #onetrust-consent-sdk #onetrust-policy-text,
            #onetrust-consent-sdk .ot-b-addl-desc,
            #onetrust-consent-sdk .ot-dpd-desc,
            #onetrust-consent-sdk .ot-dpd-title,
            #onetrust-consent-sdk #onetrust-policy-text *:not(.onetrust-vendors-list-handler),
            #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),
            #onetrust-consent-sdk #onetrust-banner-sdk #banner-options *,
            #onetrust-banner-sdk .ot-cat-header,
            #onetrust-banner-sdk .ot-optout-signal {
              color: #4a4a4a;
            }
            #onetrust-consent-sdk #onetrust-banner-sdk .banner-option-details {
              background-color: #e9e9e9;
            }
            #onetrust-consent-sdk #onetrust-banner-sdk a[href],
            #onetrust-consent-sdk #onetrust-banner-sdk a[href] font,
            #onetrust-consent-sdk #onetrust-banner-sdk .ot-link-btn {
              color: #283897;
            }
            #onetrust-consent-sdk #onetrust-accept-btn-handler,
            #onetrust-banner-sdk #onetrust-reject-all-handler {
              background-color: #293994;
              border-color: #293994;
              color: #ffffff;
            }
            #onetrust-consent-sdk #onetrust-banner-sdk *:focus,
            #onetrust-consent-sdk #onetrust-banner-sdk:focus {
              outline-color: #000000;
              outline-width: 1px;
            }
            #onetrust-consent-sdk #onetrust-pc-btn-handler,
            #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link {
              color: #283897;
              border-color: #283897;
              background-color: #ffffff;
            }
            #onetrust-banner-sdk #onetrust-policy-title:before {
              content: '';
              background-image: url('https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Logos/Sodexo_Logotype_Blue.png?h=42&iar=0&w=131');
              background-repeat: no-repeat;
              background-size: contain;
              background-position: center;
              width: 95px;
              height: 57px;
              position: absolute;
              top: 15px;
              left: 30px;
            }
            @keyframes ot-slide-in-left {
              from {
                -webkit-transform: translate3d(-100%, 0, 0);
                transform: translate3d(-100%, 0, 0);
              }
              to {
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
              }
            }
            @keyframes ot-slide-in-right {
              from {
                -webkit-transform: translate3d(100%, 0, 0);
                transform: translate3d(100%, 0, 0);
              }
              to {
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
              }
            }
            @keyframes ot-slide-out-left {
              from {
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
              }
              to {
                -webkit-transform: translate3d(-100%, 0, 0);
                transform: translate3d(-100%, 0, 0);
              }
            }
            @keyframes ot-slide-out-right {
              from {
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
              }
              to {
                -webkit-transform: translate3d(100%, 0, 0);
                transform: translate3d(100%, 0, 0);
              }
            }
            #onetrust-pc-sdk.otPcPanel.ot-slide-out-right {
              -webkit-animation-name: ot-slide-out-right;
              animation-name: ot-slide-out-right;
            }
            #onetrust-pc-sdk.otPcPanel.ot-slide-in-left {
              -webkit-animation-name: ot-slide-in-left;
              animation-name: ot-slide-in-left;
            }
            #onetrust-pc-sdk.otPcPanel.ot-slide-in-right {
              -webkit-animation-name: ot-slide-in-right;
              animation-name: ot-slide-in-right;
            }
            #onetrust-pc-sdk.otPcPanel.ot-slide-out-left {
              -webkit-animation-name: ot-slide-out-left;
              animation-name: ot-slide-out-left;
            }
            @media print, (prefers-reduced-motion) {
              .ot-animated {
                -webkit-animation: initial !important;
                animation: initial !important;
                -webkit-transition: none !important;
                transition: none !important;
              }
              #onetrust-pc-sdk.otPcPanel.ot-slide-out-left {
                -webkit-transform: translate3d(-100%, 0, 0);
                transform: translate3d(-100%, 0, 0);
              }
              #onetrust-pc-sdk.otPcPanel.ot-slide-out-right {
                -webkit-transform: translate3d(100%, 0, 0);
                transform: translate3d(100%, 0, 0);
              }
            }
            #onetrust-pc-sdk {
              position: fixed;
              z-index: 2147483647;
              bottom: 0;
              left: 0;
              background-color: #fff;
              max-width: 480px;
              min-width: 480px;
              height: 100%;
              -webkit-box-shadow: 0px 2px 10px -3px #999;
              -moz-box-shadow: 0px 2px 10px -3px #999;
              box-shadow: 0px 2px 10px -3px #999;
            }
            #onetrust-pc-sdk.otRelFont {
              font-size: 1rem;
            }
            #onetrust-pc-sdk.otPcPanel.right,
            #onetrust-pc-sdk.otPcPanel[dir='rtl'] {
              right: 0;
              left: auto;
            }
            #onetrust-pc-sdk.otPcPanel.right-rtl[dir='rtl'] {
              left: 0;
              right: auto;
            }
            #onetrust-pc-sdk.otPcPanel.ot-animated {
              -webkit-animation-duration: 1s;
              animation-duration: 1s;
              -webkit-animation-fill-mode: both;
              animation-fill-mode: both;
            }
            #onetrust-pc-sdk #close-pc-btn-handler.ot-close-icon {
              background-color: rgba(0, 0, 0, 0);
              border: none;
            }
            #onetrust-pc-sdk .ot-optout-signal {
              margin-top: 0.625rem;
            }
            #onetrust-pc-sdk .ot-pc-scrollbar::-webkit-scrollbar-track {
              margin-right: 20px;
            }
            #onetrust-pc-sdk .ot-pc-scrollbar::-webkit-scrollbar {
              width: 11px;
            }
            #onetrust-pc-sdk .ot-pc-scrollbar::-webkit-scrollbar-thumb {
              border-radius: 10px;
              background: #d8d8d8;
            }
            #onetrust-pc-sdk .ot-pc-scrollbar {
              scrollbar-arrow-color: #d8d8d8;
              scrollbar-darkshadow-color: #d8d8d8;
              scrollbar-face-color: #d8d8d8;
              scrollbar-shadow-color: #d8d8d8;
            }
            #onetrust-pc-sdk.ot-ftr-stacked .ot-pc-refuse-all-handler {
              margin-bottom: 0px;
            }
            #onetrust-pc-sdk.ot-ftr-stacked #ot-pc-content {
              bottom: 160px;
            }
            #onetrust-pc-sdk.ot-ftr-stacked .ot-pc-footer button {
              width: 100%;
              max-width: none;
            }
            #onetrust-pc-sdk.ot-ftr-stacked #ot-lst-cnt {
              max-height: 84%;
            }
            #onetrust-pc-sdk #ot-addtl-venlst .ot-arw-cntr,
            #onetrust-pc-sdk #ot-addtl-venlst .ot-plus-minus,
            #onetrust-pc-sdk .ot-hide-tgl {
              visibility: hidden;
            }
            #onetrust-pc-sdk #ot-addtl-venlst .ot-arw-cntr *,
            #onetrust-pc-sdk #ot-addtl-venlst .ot-plus-minus *,
            #onetrust-pc-sdk .ot-hide-tgl * {
              visibility: hidden;
            }
            #onetrust-pc-sdk .ot-pc-header {
              height: 39px;
              border-bottom: 1px solid #e9e9e9;
              padding: 10px 0 10px 25px;
            }
            #onetrust-pc-sdk .ot-pc-logo {
              height: 40px;
              width: 120px;
            }
            #onetrust-pc-sdk .ot-close-icon {
              float: right;
              height: 10px;
              width: 10px;
              margin-top: 10px;
              margin-right: 5px;
            }
            #onetrust-pc-sdk #ot-pc-content,
            #onetrust-pc-sdk #ot-pc-lst {
              position: absolute;
              top: 60px;
              bottom: 104px;
            }
            #onetrust-pc-sdk #ot-pc-content {
              padding-left: 2px;
              padding-right: 10px;
              margin-left: 23px;
              margin-right: 7px;
              width: calc(100% - 42px);
              overflow-y: auto;
            }
            #onetrust-pc-sdk #ot-pc-lst {
              width: 100%;
            }
            #onetrust-pc-sdk .ot-pc-footer {
              position: absolute;
              bottom: 0px;
              width: 100%;
              max-height: 160px;
              border-top: 1px solid #d8d8d8;
            }
            #onetrust-pc-sdk .ot-pc-footer button {
              margin-top: 19px;
            }
            #onetrust-pc-sdk .ot-btn-container {
              text-align: left;
              margin-left: 25px;
              margin-right: 25px;
            }
            #onetrust-pc-sdk .ot-btn-container button {
              min-width: calc(50% - 5px);
            }
            #onetrust-pc-sdk .ot-pc-footer-logo {
              padding-left: 25px;
              height: 30px;
              background: #f4f4f4;
              text-align: right;
            }
            #onetrust-pc-sdk .ot-pc-footer-logo a {
              display: inline-block;
              margin-top: 5px;
              margin-right: 10px;
            }
            #onetrust-pc-sdk.otPcPanel[dir='rtl'] .ot-pc-footer-logo {
              direction: rtl;
            }
            #onetrust-pc-sdk.otPcPanel[dir='rtl'] .ot-pc-footer-logo a {
              margin-right: 25px;
            }
            #onetrust-pc-sdk button {
              display: inline-block;
              font-size: 0.75em;
              letter-spacing: 0.08em;
              max-width: 394px;
              padding: 12px 30px;
              line-height: 1;
              word-break: break-word;
              word-wrap: break-word;
              white-space: normal;
              font-weight: bold;
              height: auto;
            }
            #onetrust-pc-sdk button:hover,
            #onetrust-pc-sdk button:focus {
              color: #fff;
              border-color: #68b631;
            }
            #onetrust-pc-sdk .ot-link-btn {
              padding: 0;
              margin-bottom: 0;
              border: 0;
              font-weight: normal;
              line-height: normal;
              width: auto;
              height: auto;
            }
            #onetrust-pc-sdk #accept-recommended-btn-handler {
              margin-right: 10px;
              margin-bottom: 25px;
            }
            #onetrust-pc-sdk .ot-pc-refuse-all-handler {
              margin-right: 5px;
            }
            #onetrust-pc-sdk .ot-tgl {
              float: right;
              position: relative;
              z-index: 1;
            }
            #onetrust-pc-sdk .ot-tgl input:checked + .ot-switch .ot-switch-nob {
              background-color: #468254;
              border: 1px solid #fff;
            }
            #onetrust-pc-sdk .ot-tgl input:checked + .ot-switch .ot-switch-nob:before {
              -webkit-transform: translateX(21px);
              -ms-transform: translateX(21px);
              transform: translateX(21px);
              background-color: #fff;
            }
            #onetrust-pc-sdk .ot-tgl input:focus + .ot-switch .ot-switch-nob {
              box-shadow: 0 0 1px #2196f3;
              outline-style: auto !important;
              outline-width: 1px !important;
            }
            #onetrust-pc-sdk .ot-switch {
              position: relative;
              display: inline-block;
              width: 45px;
              height: 25px;
              margin-bottom: 0;
            }
            #onetrust-pc-sdk .ot-switch-nob {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: #767676;
              border: 1px solid #ddd;
              transition: all 0.2s ease-in 0s;
              -moz-transition: all 0.2s ease-in 0s;
              -o-transition: all 0.2s ease-in 0s;
              -webkit-transition: all 0.2s ease-in 0s;
              border-radius: 20px;
            }
            #onetrust-pc-sdk .ot-switch-nob:before {
              position: absolute;
              content: '';
              height: 18px;
              width: 18px;
              bottom: 3px;
              left: 2px;
              background-color: #fff;
              -webkit-transition: 0.4s;
              transition: 0.4s;
              border-radius: 20px;
            }
            #onetrust-pc-sdk .ot-chkbox {
              z-index: 1;
            }
            #onetrust-pc-sdk .ot-chkbox input:checked ~ label::before {
              background-color: #3860be;
            }
            #onetrust-pc-sdk .ot-chkbox input + label::after {
              content: none;
              color: #fff;
            }
            #onetrust-pc-sdk .ot-chkbox input:checked + label::after {
              content: '';
            }
            #onetrust-pc-sdk .ot-chkbox input:focus + label::before {
              outline-style: solid;
              outline-width: 2px;
              outline-style: auto;
            }
            #onetrust-pc-sdk .ot-chkbox label {
              position: relative;
              display: inline-block;
              cursor: pointer;
            }
            #onetrust-pc-sdk .ot-chkbox label::before,
            #onetrust-pc-sdk .ot-chkbox label::after {
              position: absolute;
              content: '';
              display: inline-block;
              border-radius: 3px;
            }
            #onetrust-pc-sdk .ot-chkbox label::before {
              height: 18px;
              width: 18px;
              border: 1px solid #3860be;
              left: 0px;
            }
            #onetrust-pc-sdk .ot-chkbox label::after {
              height: 5px;
              width: 9px;
              border-left: 3px solid;
              border-bottom: 3px solid;
              transform: rotate(-45deg);
              -o-transform: rotate(-45deg);
              -ms-transform: rotate(-45deg);
              -webkit-transform: rotate(-45deg);
              left: 4px;
              top: 5px;
            }
            #onetrust-pc-sdk .ot-label-txt {
              display: none;
            }
            #onetrust-pc-sdk .ot-chkbox input,
            #onetrust-pc-sdk .ot-tgl input {
              position: absolute;
              opacity: 0;
              width: 0;
              height: 0;
            }
            #onetrust-pc-sdk .ot-arw-cntr {
              left: 5px;
              float: right;
              position: relative;
              pointer-events: none;
            }
            #onetrust-pc-sdk .ot-arw {
              width: 16px;
              height: 16px;
              margin-left: 5px;
              color: dimgray;
              display: inline-block;
              vertical-align: middle;
              -webkit-transition: all 150ms ease-in 0s;
              -moz-transition: all 150ms ease-in 0s;
              -o-transition: all 150ms ease-in 0s;
              transition: all 150ms ease-in 0s;
            }
            #onetrust-pc-sdk input:checked ~ .ot-acc-hdr .ot-arw,
            #onetrust-pc-sdk button[aria-expanded='true'] ~ .ot-acc-hdr .ot-arw-cntr svg {
              transform: rotate(90deg);
              -o-transform: rotate(90deg);
              -ms-transform: rotate(90deg);
              -webkit-transform: rotate(90deg);
            }
            #onetrust-pc-sdk input[type='checkbox']:focus + .ot-acc-hdr {
              outline: 1px solid #000;
            }
            #onetrust-pc-sdk .ot-acc-hdr {
              display: inline-block;
              width: 100%;
            }
            #onetrust-pc-sdk #ot-fltr-modal .ot-label-txt {
              display: inline-block;
              font-size: 0.85em;
              color: dimgray;
            }
            #onetrust-pc-sdk .ot-label-status {
              padding-left: 5px;
              font-size: 0.75em;
              display: none;
            }
            #onetrust-pc-sdk .ot-plus-minus {
              width: 20px;
              height: 20px;
              font-size: 1.5em;
              position: relative;
              display: inline-block;
              margin-right: 5px;
              top: 3px;
            }
            #onetrust-pc-sdk .ot-plus-minus span {
              position: absolute;
              background: #27455c;
              border-radius: 1px;
            }
            #onetrust-pc-sdk .ot-plus-minus span:first-of-type {
              top: 25%;
              bottom: 25%;
              width: 10%;
              left: 45%;
            }
            #onetrust-pc-sdk .ot-plus-minus span:last-of-type {
              left: 25%;
              right: 25%;
              height: 10%;
              top: 45%;
            }
            #onetrust-pc-sdk button[aria-expanded='true'] ~ .ot-acc-hdr .ot-arw,
            #onetrust-pc-sdk
              button[aria-expanded='true']
              ~ .ot-acc-hdr
              .ot-plus-minus
              span:first-of-type,
            #onetrust-pc-sdk
              button[aria-expanded='true']
              ~ .ot-acc-hdr
              .ot-plus-minus
              span:last-of-type {
              transform: rotate(90deg);
            }
            #onetrust-pc-sdk
              button[aria-expanded='true']
              ~ .ot-acc-hdr
              .ot-plus-minus
              span:last-of-type {
              left: 50%;
              right: 50%;
            }
            #onetrust-pc-sdk .ot-host-item,
            #onetrust-pc-sdk .ot-ven-item {
              padding-right: 0;
            }
            #onetrust-pc-sdk .ot-host-item .ot-plus-minus,
            #onetrust-pc-sdk .ot-ven-item .ot-plus-minus {
              float: left;
              margin-right: 8px;
              margin-top: 10px;
            }
            #onetrust-pc-sdk .ot-ven-item ul {
              list-style: none inside;
              font-size: 100%;
              margin: 0;
            }
            #onetrust-pc-sdk .ot-ven-item ul li {
              margin: 0 !important;
              padding: 0;
              border: none !important;
            }
            #onetrust-pc-sdk .ot-hide-acc > button {
              pointer-events: none;
            }
            #onetrust-pc-sdk .ot-hide-acc .ot-plus-minus > *,
            #onetrust-pc-sdk .ot-hide-acc .ot-arw-cntr > * {
              visibility: hidden;
            }
            #onetrust-pc-sdk .ot-hide-acc .ot-acc-hdr {
              min-height: 30px;
            }
            #onetrust-pc-sdk #ot-pc-title,
            #onetrust-pc-sdk #ot-pc-desc,
            #onetrust-pc-sdk #ot-category-title,
            #onetrust-pc-sdk .ot-cat-header,
            #onetrust-pc-sdk .ot-cat-item p:last-of-type {
              color: dimgray;
            }
            #onetrust-pc-sdk #ot-pc-title {
              margin-top: 20px;
              margin-bottom: 10px;
            }
            #onetrust-pc-sdk #ot-pc-desc,
            #onetrust-pc-sdk .ot-cat-item p {
              font-size: 0.79em;
              line-height: 1.4;
            }
            #onetrust-pc-sdk #ot-pc-desc *,
            #onetrust-pc-sdk .ot-cat-item p * {
              font-size: inherit;
              line-height: inherit;
            }
            #onetrust-pc-sdk #ot-category-title,
            #onetrust-pc-sdk #ot-pc-title {
              font-size: 1.125em;
              line-height: 1.2;
            }
            #onetrust-pc-sdk #ot-pc-desc {
              clear: both;
              font-size: 0.813em;
              line-height: 1.5;
              margin-bottom: 25px;
            }
            #onetrust-pc-sdk #ot-pc-desc * {
              font-size: inherit;
            }
            #onetrust-pc-sdk #ot-pc-desc a {
              display: block;
              margin-top: 5px;
              margin-bottom: 5px;
            }
            #onetrust-pc-sdk #ot-pc-desc li {
              padding: 10px 0px;
            }
            #onetrust-pc-sdk #ot-pc-desc,
            #onetrust-pc-sdk #accept-recommended-btn-handler,
            #onetrust-pc-sdk #ot-pc-title,
            #onetrust-pc-sdk #ot-category-title,
            #onetrust-pc-sdk .ot-cat-header {
              float: left;
            }
            #onetrust-pc-sdk #ot-category-title {
              width: 100%;
              text-align: left;
            }
            #onetrust-pc-sdk #ot-pc-title,
            #onetrust-pc-sdk #ot-category-title,
            #onetrust-pc-sdk .ot-cat-header,
            #onetrust-pc-sdk #ot-lst-title,
            #onetrust-pc-sdk .ot-ven-hdr .ot-ven-name,
            #onetrust-pc-sdk .ot-always-active {
              font-weight: bold;
            }
            #onetrust-pc-sdk a {
              color: #656565;
              cursor: pointer;
            }
            #onetrust-pc-sdk a:hover {
              color: #3860be;
            }
            #onetrust-pc-sdk .ot-always-active {
              float: right;
              color: #3860be;
              margin-top: -2px;
            }
            #onetrust-pc-sdk .ot-cat-header,
            #onetrust-pc-sdk .ot-always-active {
              font-size: 0.88em;
              line-height: 1.4;
              position: relative;
            }
            #onetrust-pc-sdk .ot-cat-item {
              margin-top: 25px;
              line-height: 1.1;
            }
            #onetrust-pc-sdk .ot-cat-item p:last-of-type {
              clear: both;
              padding-top: 15px;
              margin: 0;
            }
            #onetrust-pc-sdk .ot-acc-txt p ul,
            #onetrust-pc-sdk .ot-cat-item ul,
            #onetrust-pc-sdk li.ot-subgrp p ul {
              margin: 0px;
              list-style: disc;
              margin-left: 15px;
            }
            #onetrust-pc-sdk .ot-acc-txt p ul li,
            #onetrust-pc-sdk .ot-cat-item ul li,
            #onetrust-pc-sdk li.ot-subgrp p ul li {
              font-size: inherit;
              margin: 5px 0 0 0;
              padding: 0;
              border: none;
            }
            #onetrust-pc-sdk .ot-subgrp-cntr {
              display: inline-block;
              width: 100%;
            }
            #onetrust-pc-sdk .ot-subgrp-cntr .ot-tgl-cntr {
              float: right;
            }
            #onetrust-pc-sdk .ot-subgrp-cntr .ot-tgl-cntr.ot-always-active-subgroup {
              width: auto;
            }
            #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps li p,
            #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps li h5 {
              font-size: 0.813em;
              line-height: 1.5;
              color: dimgray;
            }
            #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr {
              display: inline-block;
              width: 100%;
              vertical-align: middle;
            }
            #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-txt {
              margin: 0;
            }
            #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps li {
              margin: 10px 0 0 0;
              padding: 0;
              border: none;
            }
            #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps li p {
              clear: both;
              float: left;
              padding-top: 10px;
              margin: 0;
            }
            #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps li h5 {
              font-weight: bold;
              margin-bottom: 0;
              float: left;
              position: relative;
              top: 6px;
            }
            #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps li.ot-subgrp {
              margin-left: 20px;
              overflow: hidden;
            }
            #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps li.ot-subgrp > p ul:first-child {
              padding-bottom: 7.5px;
            }
            #onetrust-pc-sdk ul.ot-subgrps {
              margin: 0;
            }
            #onetrust-pc-sdk .ot-hlst-cntr,
            #onetrust-pc-sdk .ot-vlst-cntr {
              margin-top: 3px;
              overflow: hidden;
              clear: both;
              padding-left: 2px;
              padding-bottom: 2px;
            }
            #onetrust-pc-sdk .ot-always-active-subgroup {
              width: auto;
              padding-left: 0px !important;
              top: 3px;
              position: relative;
            }
            #onetrust-pc-sdk .category-vendors-list-handler,
            #onetrust-pc-sdk .category-vendors-list-handler + a,
            #onetrust-pc-sdk .category-host-list-handler {
              color: #3860be;
              margin-left: 0;
              font-size: 0.813em;
              text-decoration: none;
              float: left;
              margin-top: 5px;
            }
            #onetrust-pc-sdk .category-vendors-list-handler:hover,
            #onetrust-pc-sdk .category-vendors-list-handler + a:hover,
            #onetrust-pc-sdk .category-host-list-handler:hover {
              text-decoration-line: underline;
            }
            #onetrust-pc-sdk .category-vendors-list-handler + a {
              clear: none;
            }
            #onetrust-pc-sdk .ot-vlst-cntr .ot-ext-lnk,
            #onetrust-pc-sdk .ot-ven-hdr .ot-ext-lnk {
              display: inline-block;
              height: 13px;
              width: 13px;
              background-repeat: no-repeat;
              margin-left: 1px;
              margin-top: 6px;
              cursor: pointer;
            }
            #onetrust-pc-sdk .ot-ven-hdr .ot-ext-lnk {
              margin-bottom: -1px;
            }
            #onetrust-pc-sdk .back-btn-handler {
              min-height: 20px;
              font-size: 1em;
              text-decoration: none;
            }
            #onetrust-pc-sdk .back-btn-handler svg {
              width: 12px;
              height: 12px;
            }
            #onetrust-pc-sdk .back-btn-handler:hover {
              opacity: 0.6;
            }
            #onetrust-pc-sdk #ot-lst-title h3 {
              word-break: break-word;
              word-wrap: break-word;
              margin-bottom: 0;
              color: #656565;
              font-weight: bold;
              margin-left: 15px;
              display: inline-block;
              font-size: 1em;
            }
            #onetrust-pc-sdk #ot-lst-title {
              margin-top: 15px;
              font-size: 1em;
            }
            #onetrust-pc-sdk #ot-pc-hdr {
              display: inline-block;
              padding-left: 27px;
              padding-right: 17px;
              width: calc(100% - 44px);
            }
            #onetrust-pc-sdk #ot-pc-hdr input::placeholder {
              color: #d4d4d4;
              font-style: italic;
            }
            #onetrust-pc-sdk #vendor-search-handler {
              height: 31px;
              width: 100%;
              border-radius: 50px;
              font-size: 0.8em;
              padding-right: 35px;
              padding-left: 15px;
              float: left;
              margin-left: 15px;
            }
            #onetrust-pc-sdk #ot-lst-cnt {
              transform: translate3d(0, 0, 0);
              position: relative;
              padding-left: 27px;
              margin-right: 10px;
              margin-top: 10px;
              width: calc(100% - 37px);
              top: 0;
              bottom: 70px;
              height: calc(100% - 94px);
              overflow-y: auto;
              overflow-x: hidden;
            }
            #onetrust-pc-sdk #ot-pc-lst .ot-tgl-cntr {
              right: 32px;
              position: absolute;
              margin-top: 10px;
              height: 20px;
            }
            #onetrust-pc-sdk #ot-pc-lst:not(.ot-enbl-chr):not(.ot-hosts-ui) .ot-tgl-cntr {
              right: 12px;
            }
            #onetrust-pc-sdk #ot-sel-blk {
              position: sticky;
              position: -webkit-sticky;
              width: 100%;
              display: inline-block;
              top: 0;
              overflow: hidden;
              z-index: 3;
            }
            #onetrust-pc-sdk #ot-sel-blk p {
              font-size: 0.75em;
              color: #6b6b6b;
              margin: 0;
              display: inline-block;
            }
            #onetrust-pc-sdk .ot-enbl-chr > :not(.ot-hosts-ui) .ot-sel-all {
              padding-right: 33px;
            }
            #onetrust-pc-sdk .ot-enbl-chr .ot-hosts-ui .ot-sel-all {
              padding-right: 23px;
            }
            #onetrust-pc-sdk .ot-enbl-chr .ot-accordion-layout h4 ~ .ot-tgl + .ot-tgl {
              right: 105px;
            }
            #onetrust-pc-sdk .ot-enbl-chr .ot-cat-item h5 + .ot-tgl-cntr {
              padding-left: 31px;
              padding-right: 13px;
            }
            #onetrust-pc-sdk #ot-pc-lst:not(.ot-enbl-chr) .ot-tgl-cntr .ot-arw-cntr,
            #onetrust-pc-sdk #ot-pc-lst:not(.ot-enbl-chr) .ot-tgl-cntr .ot-arw-cntr * {
              visibility: hidden;
            }
            #onetrust-pc-sdk
              #ot-pc-content:not(.ot-enbl-chr)
              .ot-pli-hdr.ot-leg-border-color
              span:first-child {
              text-align: center;
            }
            #onetrust-pc-sdk
              #ot-pc-content:not(.ot-enbl-chr)
              .ot-pli-hdr.ot-leg-border-color
              span:last-child {
              text-align: right;
            }
            #onetrust-pc-sdk .ot-hosts-ui:not(.ot-enbl-chr) .ot-tgl-cntr {
              right: 23px;
            }
            #onetrust-pc-sdk .ot-hosts-ui #ot-sel-blk {
              width: 100%;
            }
            #onetrust-pc-sdk .ot-lst-subhdr {
              display: inline-block;
              width: 100%;
              margin-top: 10px;
            }
            #onetrust-pc-sdk .ot-lst-subhdr svg {
              width: 30px;
              height: 30px;
              position: absolute;
              float: left;
              right: -15px;
            }
            #onetrust-pc-sdk .ot-search-cntr {
              float: left;
              width: 82%;
              position: relative;
            }
            #onetrust-pc-sdk .ot-fltr-cntr {
              float: right;
              right: 15px;
              position: relative;
            }
            #onetrust-pc-sdk #filter-btn-handler {
              background-color: #3860be;
              border-radius: 17px;
              display: inline-block;
              position: relative;
              width: 32px;
              height: 32px;
              -moz-transition: 0.1s ease;
              -o-transition: 0.1s ease;
              -webkit-transition: 1s ease;
              transition: 0.1s ease;
              padding: 0;
              margin: 0;
            }
            #onetrust-pc-sdk #filter-btn-handler:hover {
              opacity: 0.7;
            }
            #onetrust-pc-sdk #filter-btn-handler svg {
              width: 12px;
              margin: 6px 10px 0 9px;
              display: block;
              height: 12px;
              position: static;
              right: auto;
              top: auto;
            }
            #onetrust-pc-sdk .ot-ven-link,
            #onetrust-pc-sdk .ot-ven-legclaim-link {
              color: #3860be;
              text-decoration: none;
              display: inline-block;
              margin-top: 10px;
              transform: translate(0, 1%);
              -o-transform: translate(0, 1%);
              -ms-transform: translate(0, 1%);
              -webkit-transform: translate(0, 1%);
              z-index: 2;
              position: relative;
              font-size: 0.75em;
            }
            #onetrust-pc-sdk .ot-ven-link:hover,
            #onetrust-pc-sdk .ot-ven-legclaim-link:hover {
              text-decoration: underline;
            }
            #onetrust-pc-sdk .ot-ven-link *,
            #onetrust-pc-sdk .ot-ven-legclaim-link * {
              font-size: inherit;
            }
            #onetrust-pc-sdk .ot-ven-name {
              vertical-align: middle;
            }
            #onetrust-pc-sdk .ot-ven-hdr,
            #onetrust-pc-sdk .ot-host-hdr {
              width: calc(100% - 165px);
              height: auto;
              float: left;
              text-align: left;
              word-break: break-word;
              word-wrap: break-word;
              vertical-align: middle;
              padding-bottom: 2px;
              padding-left: 2px;
            }
            #onetrust-pc-sdk .ot-host-hdr {
              pointer-events: none;
              position: relative;
              z-index: 1;
            }
            #onetrust-pc-sdk .ot-host-hdr .ot-host-name {
              pointer-events: none;
            }
            #onetrust-pc-sdk .ot-host-hdr a {
              pointer-events: initial;
            }
            #onetrust-pc-sdk #ot-host-lst .ot-host-info {
              font-size: 0.7em;
              line-height: 1.1;
            }
            #onetrust-pc-sdk #ot-host-lst .ot-host-name,
            #onetrust-pc-sdk #ot-host-lst .ot-host-name a {
              color: dimgray;
              font-size: 0.81em;
              font-weight: bold;
              line-height: 1.4;
              margin-bottom: 5px;
              position: relative;
            }
            #onetrust-pc-sdk #ot-host-lst .ot-host-name a,
            #onetrust-pc-sdk #ot-host-lst .ot-host-info a {
              font-size: 1em;
            }
            #onetrust-pc-sdk #ot-host-lst .ot-host-desc {
              width: 100%;
              margin-bottom: 5px;
            }
            #onetrust-pc-sdk #ot-host-lst .ot-host-expand,
            #onetrust-pc-sdk #ot-host-lst .ot-host-desc {
              color: dimgray;
              font-size: 0.69em;
              line-height: 1.4;
              float: left;
              font-weight: normal;
            }
            #onetrust-pc-sdk #ot-host-lst .ot-host-hdr > a {
              text-decoration: underline;
              font-size: 0.69em;
              position: relative;
              z-index: 2;
              float: left;
              margin-bottom: 5px;
              line-height: 1.4;
            }
            #onetrust-pc-sdk #ot-host-lst .ot-host-expand {
              color: #3860be;
            }
            #onetrust-pc-sdk #ot-host-lst .ot-host-expand * {
              font-size: inherit;
            }
            #onetrust-pc-sdk .ot-host-opt {
              margin: 0;
              font-size: inherit;
              display: inline-block;
              width: 100%;
            }
            #onetrust-pc-sdk .ot-host-opt .ot-host-info {
              border: none;
              font-size: 0.8em;
              color: dimgray;
              display: inline-block;
              width: calc(100% - 20px);
              padding: 10px;
              margin-bottom: 10px;
              background-color: #f8f8f8;
            }
            #onetrust-pc-sdk .ot-host-opt .ot-host-info > div {
              overflow: auto;
            }
            #onetrust-pc-sdk .ot-host-opt li > div div {
              font-size: 0.8em;
              padding: 5px 0;
            }
            #onetrust-pc-sdk .ot-host-opt li > div div:nth-child(1) {
              width: 30%;
              float: left;
            }
            #onetrust-pc-sdk .ot-host-opt li > div div:nth-child(2) {
              width: 70%;
              float: left;
              word-break: break-word;
              word-wrap: break-word;
            }
            #onetrust-pc-sdk #ot-ven-lst .ot-acc-hdr {
              overflow: hidden;
              cursor: pointer;
            }
            #onetrust-pc-sdk .ot-ven-dets {
              border-radius: 2px;
              margin-top: 10px;
              background-color: #f8f8f8;
            }
            #onetrust-pc-sdk .ot-ven-dets li:first-child p:first-child {
              border-top: none;
            }
            #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc:not(:first-child) {
              border-top: 1px solid #ddd !important;
            }
            #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc:nth-child(n + 3) p {
              display: inline-block;
            }
            #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc:nth-child(n + 3) p:nth-of-type(odd) {
              width: 30%;
            }
            #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc:nth-child(n + 3) p:nth-of-type(even) {
              width: 50%;
              word-break: break-word;
              word-wrap: break-word;
            }
            #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc p,
            #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc h5 {
              padding-top: 5px;
              padding-bottom: 5px;
              display: block;
            }
            #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc h5 {
              display: inline-block;
            }
            #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc p:nth-last-child(-n + 1) {
              padding-bottom: 10px;
            }
            #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc p:nth-child(-n + 2):not(.disc-pur) {
              padding-top: 10px;
            }
            #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc .disc-pur-cont {
              display: inline;
            }
            #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc .disc-pur {
              position: relative;
              width: 50% !important;
              word-break: break-word;
              word-wrap: break-word;
              left: calc(30% + 17px);
            }
            #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc .disc-pur:nth-child(-n + 1) {
              position: static;
            }
            #onetrust-pc-sdk .ot-ven-dets p,
            #onetrust-pc-sdk .ot-ven-dets h5,
            #onetrust-pc-sdk .ot-ven-dets span {
              font-size: 0.69em;
              text-align: left;
              vertical-align: middle;
              word-break: break-word;
              word-wrap: break-word;
              margin: 0;
              padding-bottom: 10px;
              padding-left: 15px;
              color: #2e3644;
            }
            #onetrust-pc-sdk .ot-ven-dets h5 {
              padding-top: 5px;
            }
            #onetrust-pc-sdk .ot-ven-dets span {
              color: dimgray;
              padding: 0;
              vertical-align: baseline;
            }
            #onetrust-pc-sdk .ot-ven-dets .ot-ven-pur h5 {
              border-top: 1px solid #e9e9e9;
              border-bottom: 1px solid #e9e9e9;
              padding-bottom: 5px;
              margin-bottom: 5px;
              font-weight: bold;
            }
            #onetrust-pc-sdk #no-results {
              text-align: center;
              margin-top: 30px;
              height: calc(100% - 300px);
              margin-left: 27px;
            }
            #onetrust-pc-sdk #no-results span {
              font-weight: bold;
            }
            #onetrust-pc-sdk #no-results p {
              font-size: 1em;
              color: #2e3644;
              word-break: break-word;
              word-wrap: break-word;
            }
            #onetrust-pc-sdk #ot-fltr-modal {
              right: 13px;
              top: 87px;
              height: 90%;
              max-height: 370px;
              display: none;
              -moz-transition: 0.2s ease;
              -o-transition: 0.2s ease;
              -webkit-transition: 2s ease;
              transition: 0.2s ease;
              opacity: 1;
              position: absolute;
            }
            #onetrust-pc-sdk #ot-fltr-cnt {
              z-index: 2147483646;
              background-color: #fff;
              position: relative;
              height: 100%;
              max-width: 325px;
              border-radius: 3px;
              padding-right: 10px;
              padding-bottom: 5px;
              -webkit-box-shadow: 0px 0px 12px 2px #c7c5c7;
              -moz-box-shadow: 0px 0px 12px 2px #c7c5c7;
              box-shadow: 0px 0px 12px 2px #c7c5c7;
            }
            #onetrust-pc-sdk .ot-fltr-scrlcnt {
              overflow-y: auto;
              overflow-x: hidden;
              clear: both;
              max-height: calc(100% - 60px);
            }
            #onetrust-pc-sdk #ot-anchor {
              border: 12px solid rgba(0, 0, 0, 0);
              display: none;
              position: absolute;
              z-index: 2147483647;
              right: 36px;
              top: 75px;
              transform: rotate(45deg);
              -o-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              -webkit-transform: rotate(45deg);
              background-color: #fff;
              -webkit-box-shadow: -3px -3px 5px -2px #c7c5c7;
              -moz-box-shadow: -3px -3px 5px -2px #c7c5c7;
              box-shadow: -3px -3px 5px -2px #c7c5c7;
            }
            #onetrust-pc-sdk .ot-fltr-btns {
              margin-left: 15px;
            }
            #onetrust-pc-sdk #filter-apply-handler {
              margin-right: 15px;
            }
            #onetrust-pc-sdk .ot-fltr-opt {
              margin-bottom: 20px;
              margin-left: 15px;
              width: 75%;
            }
            #onetrust-pc-sdk .ot-fltr-opt label {
              padding-left: 30px;
            }
            #onetrust-pc-sdk .ot-fltr-opt p {
              display: inline-block;
              margin: 0;
              font-size: 0.9em;
              color: #2e3644;
            }
            #onetrust-pc-sdk #ot-sel-blk .ot-chkbox {
              width: 20px;
              height: 20px;
              float: right;
            }
            #onetrust-pc-sdk .line-through label::after,
            #onetrust-pc-sdk[dir='rtl'] .line-through label::after {
              height: auto;
              border-left: 0;
              transform: none;
              -o-transform: none;
              -ms-transform: none;
              -webkit-transform: none;
              left: 5px;
              top: 8px;
            }
            #onetrust-pc-sdk #ot-selall-vencntr label,
            #onetrust-pc-sdk #ot-selall-adtlvencntr label,
            #onetrust-pc-sdk #ot-selall-hostcntr label,
            #onetrust-pc-sdk #ot-selall-licntr label,
            #onetrust-pc-sdk #ot-selall-gnvencntr label {
              position: relative;
              display: inline-block;
              width: 20px;
              height: 20px;
              margin: 0;
            }
            #onetrust-pc-sdk #ot-selall-vencntr input,
            #onetrust-pc-sdk #ot-selall-adtlvencntr input,
            #onetrust-pc-sdk #ot-selall-hostcntr input,
            #onetrust-pc-sdk #ot-selall-licntr input,
            #onetrust-pc-sdk #ot-selall-gnvencntr input {
              height: auto;
              width: auto;
              border-radius: 0;
              font-size: initial;
              padding: 0;
              float: none;
            }
            #onetrust-pc-sdk #ot-ven-lst:first-child {
              border-top: 1px solid #e2e2e2;
            }
            #onetrust-pc-sdk #vdr-lst-dsc {
              font-size: 0.812em;
              line-height: 1.5;
              padding: 10px 15px 5px 15px;
            }
            #onetrust-pc-sdk #close-pc-btn-handler {
              margin: 0;
              float: right;
              height: 44px;
              width: 44px;
              background-size: 10px;
            }
            #onetrust-pc-sdk #close-pc-btn-handler svg {
              display: block;
            }
            #onetrust-pc-sdk .ot-close-icon {
              padding: 0;
              background-color: rgba(0, 0, 0, 0);
              border: none;
            }
            #onetrust-pc-sdk #clear-filters-handler {
              float: right;
              max-width: 200px;
              margin-bottom: 10px;
              text-decoration: none;
              margin-top: 20px;
              font-weight: bold;
              color: #3860be;
              font-size: 0.9em;
              letter-spacing: normal;
              border: none;
              padding: 1px;
            }
            #onetrust-pc-sdk #clear-filters-handler:hover {
              color: #2285f7;
            }
            #onetrust-pc-sdk #clear-filters-handler:focus {
              outline: #000 solid 1px;
            }
            #onetrust-pc-sdk .ot-accordion-layout.ot-cat-item {
              position: relative;
              border-radius: 1px;
              margin: 0;
              padding: 0;
              border: 1px solid #d8d8d8;
              border-top: none;
              float: left;
              width: calc(100% - 2px);
            }
            #onetrust-pc-sdk .ot-accordion-layout.ot-cat-item:first-of-type {
              margin-top: 10px;
              border-top: 1px solid #d8d8d8;
            }
            #onetrust-pc-sdk .ot-accordion-layout.ot-cat-item .ot-vlst-cntr:first-child {
              margin-top: 15px;
            }
            #onetrust-pc-sdk .ot-accordion-layout.ot-cat-item .ot-acc-grpdesc {
              font-size: 0.813em;
              line-height: 1.5;
              padding-left: 20px;
              padding-right: 20px;
              width: calc(100% - 40px);
            }
            #onetrust-pc-sdk .ot-accordion-layout.ot-cat-item .ot-acc-grpdesc ul {
              padding-bottom: 5px;
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-acc-hdr {
              padding-top: 11.5px;
              padding-bottom: 11.5px;
              padding-left: 20px;
              padding-right: 15px;
              width: calc(100% - 35px);
              display: inline-block;
              position: relative;
              min-height: 25px;
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-acc-txt {
              width: 100%;
              padding: 0px;
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-subgrp-cntr,
            #onetrust-pc-sdk .ot-accordion-layout .ot-acc-grpdesc + .ot-leg-btn-container {
              padding-left: 20px;
              padding-right: 16px;
              width: calc(100% - 36px);
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-acc-grpdesc + .ot-leg-btn-container {
              margin-top: 5px;
              margin-bottom: 10px;
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-acc-grpcntr {
              z-index: 1;
              position: relative;
            }
            #onetrust-pc-sdk
              .ot-accordion-layout
              input[type='checkbox']:checked
              ~ .ot-acc-txt.ot-acc-grpcntr {
              width: auto;
              padding-bottom: 15px;
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-cat-header {
              float: none;
              font-size: 0.88em;
              color: #2e3644;
              margin: 0;
              display: inline-block;
              height: auto;
              word-wrap: break-word;
              vertical-align: middle;
              min-height: inherit;
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-vlst-cntr,
            #onetrust-pc-sdk .ot-accordion-layout .ot-hlst-cntr {
              padding-left: 20px;
              width: calc(100% - 20px);
              display: inline-block;
              margin-top: 0;
              padding-bottom: 2px;
            }
            #onetrust-pc-sdk .ot-accordion-layout h4 ~ .ot-tgl,
            #onetrust-pc-sdk .ot-accordion-layout h4 ~ .ot-always-active {
              right: 16px;
            }
            #onetrust-pc-sdk .ot-accordion-layout h4 ~ .ot-tgl + .ot-tgl {
              right: 88px;
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-cat-header + .ot-arw-cntr {
              right: 10px;
              margin-top: -2px;
              left: auto;
            }
            #onetrust-pc-sdk .ot-accordion-layout h4 ~ .ot-tgl,
            #onetrust-pc-sdk .ot-accordion-layout h4 ~ .ot-always-active,
            #onetrust-pc-sdk .ot-accordion-layout .ot-cat-header + .ot-arw-cntr {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
            }
            #onetrust-pc-sdk #ot-category-title {
              padding-bottom: 10px;
            }
            #onetrust-pc-sdk .ot-pli-hdr {
              color: #77808e;
              overflow: hidden;
              padding-top: 7.5px;
              padding-bottom: 7.5px;
              width: calc(100% - 2px);
              border-top-left-radius: 3px;
              border-top-right-radius: 3px;
            }
            #onetrust-pc-sdk .ot-pli-hdr .ot-li-title {
              float: right;
              font-size: 0.813em;
            }
            #onetrust-pc-sdk .ot-pli-hdr span:first-child {
              top: 50%;
              transform: translateY(50%);
              max-width: 80px;
            }
            #onetrust-pc-sdk .ot-pli-hdr span:last-child {
              text-align: center;
              max-width: 95px;
            }
            #onetrust-pc-sdk .ot-pli-hdr.ot-leg-border-color {
              background-color: #f8f8f8;
              border: 1px solid #e9e9e9;
            }
            #onetrust-pc-sdk .ot-pli-hdr.ot-leg-border-color span:first-child {
              text-align: left;
              width: 80px;
            }
            #onetrust-pc-sdk .ot-subgrp > h5,
            #onetrust-pc-sdk .ot-cat-header {
              width: calc(100% - 130px);
              max-width: 60%;
            }
            #onetrust-pc-sdk .ot-pli-hdr ~ .ot-cat-item .ot-subgrp > h5,
            #onetrust-pc-sdk .ot-pli-hdr ~ .ot-cat-item .ot-cat-header {
              width: calc(100% - 145px);
            }
            #onetrust-pc-sdk .ot-pli-hdr ~ .ot-cat-item h5 + .ot-tgl-cntr,
            #onetrust-pc-sdk .ot-pli-hdr ~ .ot-cat-item .ot-cat-header + .ot-tgl {
              padding-left: 28px;
            }
            #onetrust-pc-sdk .ot-acc-grpcntr .ot-acc-grpdesc {
              margin-bottom: 5px;
            }
            #onetrust-pc-sdk .ot-acc-grpcntr .ot-subgrp-cntr {
              border-top: 1px solid #e9e9e9;
            }
            #onetrust-pc-sdk .ot-acc-grpcntr .ot-subgrp-cntr ul.ot-subgrps li {
              margin-top: 5px;
              margin-bottom: 5px;
            }
            #onetrust-pc-sdk .ot-acc-hdr .ot-arw-cntr + .ot-tgl,
            #onetrust-pc-sdk .ot-cat-item h4 + .ot-tgl,
            #onetrust-pc-sdk .ot-acc-txt h4 + .ot-tgl-cntr {
              padding-left: 30px;
            }
            #onetrust-pc-sdk .ot-sel-all-hdr,
            #onetrust-pc-sdk .ot-sel-all-chkbox {
              position: relative;
              display: inline-block;
              width: 100%;
            }
            #onetrust-pc-sdk .ot-sel-all-chkbox {
              z-index: 1;
            }
            #onetrust-pc-sdk .ot-li-hdr,
            #onetrust-pc-sdk .ot-consent-hdr {
              float: right;
              font-size: 0.813em;
              line-height: normal;
              text-align: center;
              word-break: break-word;
              word-wrap: break-word;
            }
            #onetrust-pc-sdk .ot-li-hdr {
              max-width: 100px;
              min-width: 100px;
            }
            #onetrust-pc-sdk .ot-consent-hdr {
              margin-right: 5px;
              max-width: 55px;
            }
            #onetrust-pc-sdk .ot-ven-litgl + .ot-arw-cntr {
              margin-left: 81px;
            }
            #onetrust-pc-sdk .ot-sel-all {
              margin: 0;
              position: relative;
              padding-right: 13px;
              float: right;
            }
            #onetrust-pc-sdk #ot-selall-hostcntr,
            #onetrust-pc-sdk #ot-selall-vencntr {
              right: 20px;
              position: relative;
            }
            #onetrust-pc-sdk #ot-selall-licntr {
              position: relative;
              right: 79px;
            }
            #onetrust-pc-sdk #ot-pc-lst #ot-ven-lst .ot-sel-all {
              position: relative;
              display: inline-block;
              width: 20px;
              height: 25px;
            }
            #onetrust-pc-sdk #ot-pc-lst #ot-ven-lst .ot-sel-all label {
              position: absolute;
              padding: 0;
              width: 18px;
              height: 18px;
            }
            #onetrust-pc-sdk .ot-always-active-group .ot-cat-header {
              width: 55%;
            }
            #onetrust-pc-sdk .ot-leg-btn-container {
              display: inline-block;
              width: 100%;
              margin-top: 10px;
            }
            #onetrust-pc-sdk .ot-leg-btn-container button {
              height: auto;
              padding: 6.5px 8px;
              margin-bottom: 0;
              letter-spacing: 0;
              line-height: normal;
            }
            #onetrust-pc-sdk .ot-leg-btn-container svg {
              display: none;
              height: 14px;
              width: 14px;
              padding-right: 5px;
              vertical-align: sub;
            }
            #onetrust-pc-sdk .ot-active-leg-btn {
              cursor: default;
              pointer-events: none;
            }
            #onetrust-pc-sdk .ot-active-leg-btn svg {
              display: inline-block;
            }
            #onetrust-pc-sdk .ot-remove-objection-handler {
              border: none;
              text-decoration: underline;
              padding: 0;
              font-size: 0.82em;
              font-weight: 600;
              line-height: 1.4;
              padding-left: 10px;
            }
            #onetrust-pc-sdk .ot-obj-leg-btn-handler span {
              font-weight: bold;
              text-align: center;
              font-size: 0.91em;
              line-height: 1.5;
            }
            #onetrust-pc-sdk[dir='rtl'] input ~ .ot-acc-hdr .ot-arw,
            #onetrust-pc-sdk[dir='rtl'] #ot-back-arw {
              transform: rotate(180deg);
              -o-transform: rotate(180deg);
              -ms-transform: rotate(180deg);
              -webkit-transform: rotate(180deg);
            }
            #onetrust-pc-sdk[dir='rtl'] input:checked ~ .ot-acc-hdr .ot-arw {
              transform: rotate(270deg);
              -o-transform: rotate(270deg);
              -ms-transform: rotate(270deg);
              -webkit-transform: rotate(270deg);
            }
            #onetrust-pc-sdk[dir='rtl'] .ot-chkbox label::after {
              transform: rotate(45deg);
              -webkit-transform: rotate(45deg);
              -o-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              border-left: 0;
              border-right: 3px solid;
            }
            #onetrust-pc-sdk[dir='rtl'] .ot-lst-subhdr svg {
              right: 0;
            }
            #onetrust-pc-sdk .ot-ven-ctgl,
            #onetrust-pc-sdk .ot-ven-litgl,
            #onetrust-pc-sdk .ot-host-tgl,
            #onetrust-pc-sdk .ot-ven-gvctgl {
              position: relative;
              display: inline-block;
              width: 20px;
              height: 20px;
              margin-left: 60px;
            }
            #onetrust-pc-sdk .ot-ven-ctgl label,
            #onetrust-pc-sdk .ot-ven-litgl label,
            #onetrust-pc-sdk .ot-host-tgl label,
            #onetrust-pc-sdk .ot-ven-gvctgl label {
              position: absolute;
              width: 20px;
              height: 20px;
              margin: 0;
            }
            #onetrust-pc-sdk #ot-host-lst .ot-host-expand {
              clear: both;
              float: none;
              display: block;
            }
            #onetrust-pc-sdk ul {
              list-style: none;
            }
            #onetrust-pc-sdk ul li {
              position: relative;
              margin: 0;
              padding: 15px 15px 15px 15px;
              border-bottom: 1px solid #e2e2e2;
            }
            #onetrust-pc-sdk ul li h3,
            #onetrust-pc-sdk ul li h4 {
              font-size: 0.75em;
              color: #656565;
              margin: 0;
              height: auto;
              word-break: break-word;
              word-wrap: break-word;
            }
            #onetrust-pc-sdk ul li p {
              margin: 0;
              font-size: 0.7em;
            }
            #onetrust-pc-sdk .ot-ven-item > button:focus,
            #onetrust-pc-sdk .ot-host-item > button:focus,
            #onetrust-pc-sdk .ot-accordion-layout.ot-cat-item > button:focus,
            #onetrust-pc-sdk .ot-acc-cntr > button:focus {
              outline: #000 solid 2px;
            }
            #onetrust-pc-sdk .ot-ven-item > button,
            #onetrust-pc-sdk .ot-host-item > button,
            #onetrust-pc-sdk .ot-accordion-layout.ot-cat-item > button,
            #onetrust-pc-sdk .ot-acc-cntr > button {
              position: absolute;
              cursor: pointer;
              width: 100%;
              height: 100%;
              margin: 0;
              top: 0;
              left: 0;
              z-index: 1;
              max-width: none;
              border: none;
            }
            #onetrust-pc-sdk .ot-ven-item > button[aria-expanded='false'] ~ .ot-acc-txt,
            #onetrust-pc-sdk .ot-host-item > button[aria-expanded='false'] ~ .ot-acc-txt,
            #onetrust-pc-sdk
              .ot-accordion-layout.ot-cat-item
              > button[aria-expanded='false']
              ~ .ot-acc-txt,
            #onetrust-pc-sdk .ot-acc-cntr > button[aria-expanded='false'] ~ .ot-acc-txt {
              margin-top: 0;
              max-height: 0;
              overflow: hidden;
              width: 100%;
              transition: 0.25s ease-out;
              display: none;
            }
            #onetrust-pc-sdk .ot-ven-item > button[aria-expanded='true'] ~ .ot-acc-txt,
            #onetrust-pc-sdk .ot-host-item > button[aria-expanded='true'] ~ .ot-acc-txt,
            #onetrust-pc-sdk
              .ot-accordion-layout.ot-cat-item
              > button[aria-expanded='true']
              ~ .ot-acc-txt,
            #onetrust-pc-sdk .ot-acc-cntr > button[aria-expanded='true'] ~ .ot-acc-txt {
              transition: 0.1s ease-in;
              width: auto;
              overflow: auto;
              display: block;
            }
            #onetrust-pc-sdk .ot-host-item > button:focus {
              outline: 0;
              border: 2px solid #000;
            }
            #onetrust-pc-sdk.ot-addtl-vendors .ot-enbl-chr #ot-selall-vencntr {
              right: 0;
            }
            #onetrust-pc-sdk.ot-addtl-vendors > :not(.ot-enbl-chr) #ot-selall-licntr {
              right: 135px;
            }
            #onetrust-pc-sdk.ot-addtl-vendors > :not(.ot-enbl-chr) #ot-selall-adtlvencntr,
            #onetrust-pc-sdk.ot-addtl-vendors > :not(.ot-enbl-chr) #ot-selall-gnvencntr {
              right: 40px;
            }
            #onetrust-pc-sdk.ot-addtl-vendors .ot-li-hdr {
              margin-right: 15px;
            }
            #onetrust-pc-sdk.ot-addtl-vendors #ot-selall-licntr {
              right: 115px;
            }
            #onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) #ot-sel-blk {
              background-color: #f9f9fc;
              border: 1px solid #e2e2e2;
              width: auto;
              padding-bottom: 5px;
              padding-top: 5px;
            }
            #onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) .ot-sel-all {
              padding-right: 23px;
            }
            #onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) ul li {
              border: 1px solid #e2e2e2;
              margin-bottom: 10px;
            }
            #onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) .ot-sel-all-chkbox {
              float: right;
              width: auto;
              right: 3px;
            }
            #onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) .ot-tgl-cntr {
              right: 12px;
            }
            #onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) .ot-ven-ctgl {
              margin-left: 75px;
            }
            #onetrust-pc-sdk.ot-addtl-vendors
              #ot-lst-cnt:not(.ot-host-cnt)
              .ot-ven-litgl
              + .ot-arw-cntr {
              margin-left: 95px;
            }
            #onetrust-pc-sdk.ot-addtl-vendors
              #ot-lst-cnt:not(.ot-host-cnt)
              .ot-acc-cntr
              > .ot-acc-hdr {
              padding-top: 10px;
              padding-bottom: 10px;
            }
            #onetrust-pc-sdk.ot-addtl-vendors
              #ot-lst-cnt:not(.ot-host-cnt)
              #ot-addtl-venlst
              .ot-tgl-cntr {
              right: 32px;
            }
            #onetrust-pc-sdk.ot-addtl-vendors #ot-ven-lst:first-child {
              border-top: none;
            }
            #onetrust-pc-sdk.ot-addtl-vendors #ot-selall-vencntr {
              right: 40px;
              position: absolute;
            }
            #onetrust-pc-sdk #ot-selall-adtlvencntr,
            #onetrust-pc-sdk #ot-selall-gnvencntr {
              position: relative;
              right: 20px;
            }
            #onetrust-pc-sdk .ot-acc-cntr {
              position: relative;
              border-left: 1px solid #e2e2e2;
              border-right: 1px solid #e2e2e2;
              border-bottom: 1px solid #e2e2e2;
            }
            #onetrust-pc-sdk .ot-acc-cntr > .ot-acc-hdr {
              background-color: #f9f9fc;
              padding-left: 15px;
              padding-top: 5px;
              padding-bottom: 5px;
              width: calc(100% - 15px);
            }
            #onetrust-pc-sdk .ot-acc-cntr > .ot-acc-hdr .ot-plus-minus {
              vertical-align: middle;
              top: auto;
            }
            #onetrust-pc-sdk .ot-acc-cntr > .ot-acc-hdr .ot-arw-cntr {
              right: 10px;
              left: auto;
            }
            #onetrust-pc-sdk .ot-acc-cntr.ot-add-tech .ot-acc-hdr {
              padding: 10px 0 10px 15px;
            }
            #onetrust-pc-sdk .ot-acc-cntr > button[aria-expanded='true'] ~ .ot-acc-hdr {
              border-bottom: 1px solid #e2e2e2;
            }
            #onetrust-pc-sdk .ot-acc-cntr > .ot-acc-txt {
              padding-left: 10px;
              padding-right: 10px;
              padding-top: 10px;
              position: relative;
              z-index: 1;
            }
            #onetrust-pc-sdk .ot-acc-cntr .ot-addtl-venbox {
              display: none;
            }
            #onetrust-pc-sdk .ot-vensec-title {
              font-size: 0.813em;
              vertical-align: middle;
              display: inline-block;
            }
            #onetrust-pc-sdk.ot-close-btn-link #close-pc-btn-handler {
              border: none;
              height: auto;
              line-height: 1.5;
              text-decoration: underline;
              font-size: 0.69em;
              background: none;
              right: 15px;
              top: 15px;
              width: auto;
              position: absolute;
              font-weight: normal;
            }
            #onetrust-pc-sdk .ot-cat-header {
              float: left;
              font-weight: 600;
              font-size: 0.875em;
              line-height: 1.5;
              max-width: 90%;
              vertical-align: middle;
            }
            #onetrust-pc-sdk .ot-vnd-item > button:focus {
              outline: #000 solid 2px;
            }
            #onetrust-pc-sdk .ot-vnd-item > button {
              position: absolute;
              cursor: pointer;
              width: 100%;
              height: 100%;
              margin: 0;
              top: 0;
              left: 0;
              z-index: 1;
              max-width: none;
              border: none;
            }
            #onetrust-pc-sdk .ot-vnd-item > button[aria-expanded='false'] ~ .ot-acc-txt {
              margin-top: 0;
              max-height: 0;
              opacity: 0;
              overflow: hidden;
              width: 100%;
              transition: 0.25s ease-out;
              display: none;
            }
            #onetrust-pc-sdk .ot-vnd-item > button[aria-expanded='true'] ~ .ot-acc-txt {
              transition: 0.1s ease-in;
              margin-top: 10px;
              width: 100%;
              overflow: auto;
              display: block;
            }
            #onetrust-pc-sdk .ot-vnd-item > button[aria-expanded='true'] ~ .ot-acc-grpcntr {
              width: auto;
              margin-top: 0px;
              padding-bottom: 10px;
            }
            #onetrust-pc-sdk .ot-accordion-layout.ot-cat-item {
              position: relative;
              border-radius: 2px;
              margin: 0;
              padding: 0;
              border: 1px solid #d8d8d8;
              border-top: none;
              width: calc(100% - 2px);
              float: left;
            }
            #onetrust-pc-sdk .ot-accordion-layout.ot-cat-item:first-of-type {
              margin-top: 10px;
              border-top: 1px solid #d8d8d8;
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-acc-grpdesc {
              padding-left: 20px;
              padding-right: 20px;
              width: calc(100% - 40px);
              font-size: 0.812em;
              margin-bottom: 10px;
              margin-top: 15px;
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-acc-grpdesc > ul {
              padding-top: 10px;
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-acc-grpdesc > ul li {
              padding-top: 0;
              line-height: 1.5;
              padding-bottom: 10px;
            }
            #onetrust-pc-sdk .ot-accordion-layout div + .ot-acc-grpdesc {
              margin-top: 5px;
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-vlst-cntr:first-child {
              margin-top: 10px;
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-vlst-cntr:last-child,
            #onetrust-pc-sdk .ot-accordion-layout .ot-hlst-cntr:last-child {
              margin-bottom: 5px;
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-acc-hdr {
              padding-top: 11.5px;
              padding-bottom: 11.5px;
              padding-left: 20px;
              padding-right: 20px;
              width: calc(100% - 40px);
              display: inline-block;
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-acc-txt {
              width: 100%;
              padding: 0;
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-subgrp-cntr {
              padding-left: 20px;
              padding-right: 15px;
              padding-bottom: 0;
              width: calc(100% - 35px);
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-subgrp {
              padding-right: 5px;
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-acc-grpcntr {
              z-index: 1;
              position: relative;
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-cat-header + .ot-arw-cntr {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              right: 20px;
              margin-top: -2px;
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-cat-header + .ot-arw-cntr .ot-arw {
              width: 15px;
              height: 20px;
              margin-left: 5px;
              color: dimgray;
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-cat-header {
              float: none;
              color: #2e3644;
              margin: 0;
              display: inline-block;
              height: auto;
              word-wrap: break-word;
              min-height: inherit;
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-vlst-cntr,
            #onetrust-pc-sdk .ot-accordion-layout .ot-hlst-cntr {
              padding-left: 20px;
              width: calc(100% - 20px);
              display: inline-block;
              margin-top: 0;
              padding-bottom: 2px;
            }
            #onetrust-pc-sdk .ot-accordion-layout .ot-acc-hdr {
              position: relative;
              min-height: 25px;
            }
            #onetrust-pc-sdk .ot-accordion-layout h4 ~ .ot-tgl,
            #onetrust-pc-sdk .ot-accordion-layout h4 ~ .ot-always-active {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              right: 20px;
            }
            #onetrust-pc-sdk .ot-accordion-layout h4 ~ .ot-tgl + .ot-tgl {
              right: 95px;
            }
            #onetrust-pc-sdk .ot-accordion-layout .category-vendors-list-handler,
            #onetrust-pc-sdk .ot-accordion-layout .category-vendors-list-handler + a {
              margin-top: 5px;
            }
            #onetrust-pc-sdk #ot-lst-cnt {
              margin-top: 1rem;
              max-height: calc(100% - 96px);
            }
            #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info-cntr {
              border: 1px solid #d8d8d8;
              padding: 0.75rem 2rem;
              padding-bottom: 0;
              width: auto;
              margin-top: 0.5rem;
            }
            #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info {
              margin-bottom: 1rem;
              padding-left: 0.75rem;
              padding-right: 0.75rem;
              display: flex;
              flex-direction: column;
            }
            #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info[data-vnd-info-key*='DPOEmail'] {
              border-top: 1px solid #d8d8d8;
              padding-top: 1rem;
            }
            #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info[data-vnd-info-key*='DPOLink'] {
              border-bottom: 1px solid #d8d8d8;
              padding-bottom: 1rem;
            }
            #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info .ot-vnd-lbl {
              font-weight: bold;
              font-size: 0.85em;
              margin-bottom: 0.5rem;
            }
            #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info .ot-vnd-cnt {
              margin-left: 0.5rem;
              font-weight: 500;
              font-size: 0.85rem;
            }
            #onetrust-pc-sdk .ot-vs-list,
            #onetrust-pc-sdk .ot-vnd-serv {
              width: auto;
              padding: 1rem 1.25rem;
              padding-bottom: 0;
            }
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-serv-hdr-cntr,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-serv-hdr-cntr {
              padding-bottom: 0.75rem;
              border-bottom: 1px solid #d8d8d8;
            }
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-serv-hdr-cntr .ot-vnd-serv-hdr,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-serv-hdr-cntr .ot-vnd-serv-hdr {
              font-weight: 600;
              font-size: 0.95em;
              line-height: 2;
              margin-left: 0.5rem;
            }
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item {
              border: none;
              margin: 0;
              padding: 0;
            }
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item button,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item button {
              outline: none;
              border-bottom: 1px solid #d8d8d8;
            }
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item button[aria-expanded='true'],
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item button[aria-expanded='true'] {
              border-bottom: none;
            }
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item:first-child,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item:first-child {
              margin-top: 0.25rem;
              border-top: unset;
            }
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item:last-child,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item:last-child {
              margin-bottom: 0.5rem;
            }
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item:last-child button,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item:last-child button {
              border-bottom: none;
            }
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info-cntr,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info-cntr {
              border: 1px solid #d8d8d8;
              padding: 0.75rem 1.75rem;
              padding-bottom: 0;
              width: auto;
              margin-top: 0.5rem;
            }
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info {
              margin-bottom: 1rem;
              padding-left: 0.75rem;
              padding-right: 0.75rem;
              display: flex;
              flex-direction: column;
            }
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info[data-vnd-info-key*='DPOEmail'],
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info[data-vnd-info-key*='DPOEmail'] {
              border-top: 1px solid #d8d8d8;
              padding-top: 1rem;
            }
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info[data-vnd-info-key*='DPOLink'],
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info[data-vnd-info-key*='DPOLink'] {
              border-bottom: 1px solid #d8d8d8;
              padding-bottom: 1rem;
            }
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info .ot-vnd-lbl,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info .ot-vnd-lbl {
              font-weight: bold;
              font-size: 0.85em;
              margin-bottom: 0.5rem;
            }
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info .ot-vnd-cnt,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info .ot-vnd-cnt {
              margin-left: 0.5rem;
              font-weight: 500;
              font-size: 0.85rem;
            }
            #onetrust-pc-sdk .ot-vs-list.ot-vnd-subgrp-cnt,
            #onetrust-pc-sdk .ot-vnd-serv.ot-vnd-subgrp-cnt {
              padding-left: 40px;
            }
            #onetrust-pc-sdk .ot-vs-list.ot-vnd-subgrp-cnt .ot-vnd-serv-hdr-cntr .ot-vnd-serv-hdr,
            #onetrust-pc-sdk .ot-vnd-serv.ot-vnd-subgrp-cnt .ot-vnd-serv-hdr-cntr .ot-vnd-serv-hdr {
              font-size: 0.8em;
            }
            #onetrust-pc-sdk .ot-vs-list.ot-vnd-subgrp-cnt .ot-cat-header,
            #onetrust-pc-sdk .ot-vnd-serv.ot-vnd-subgrp-cnt .ot-cat-header {
              font-size: 0.8em;
            }
            #onetrust-pc-sdk .ot-subgrp-cntr .ot-vnd-serv {
              margin-bottom: 1rem;
              padding: 1rem 0.95rem;
            }
            #onetrust-pc-sdk .ot-subgrp-cntr .ot-vnd-serv .ot-vnd-serv-hdr-cntr {
              padding-bottom: 0.75rem;
              border-bottom: 1px solid #d8d8d8;
            }
            #onetrust-pc-sdk .ot-subgrp-cntr .ot-vnd-serv .ot-vnd-serv-hdr-cntr .ot-vnd-serv-hdr {
              font-weight: 700;
              font-size: 0.8em;
              line-height: 20px;
              margin-left: 0.82rem;
            }
            #onetrust-pc-sdk .ot-subgrp-cntr .ot-cat-header {
              font-weight: 700;
              font-size: 0.8em;
              line-height: 20px;
            }
            #onetrust-pc-sdk
              .ot-subgrp-cntr
              ul.ot-subgrps
              .ot-vnd-serv
              .ot-vnd-lst-cont
              .ot-accordion-layout
              .ot-acc-hdr
              div.ot-chkbox {
              margin-left: 0.82rem;
            }
            #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr,
            #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr,
            #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr,
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr,
            #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr,
            #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr {
              padding: 0.7rem 0;
              margin: 0;
              display: flex;
              width: 100%;
              align-items: center;
              justify-content: space-between;
            }
            #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr div:first-child,
            #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr div:first-child,
            #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr div:first-child,
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr div:first-child,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr div:first-child,
            #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr div:first-child,
            #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr div:first-child {
              margin-left: 0.5rem;
            }
            #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr div:last-child,
            #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr div:last-child,
            #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr div:last-child,
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr div:last-child,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr div:last-child,
            #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr div:last-child,
            #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr div:last-child {
              margin-right: 0.5rem;
              margin-left: 0.5rem;
            }
            #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-always-active,
            #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-always-active,
            #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr .ot-always-active,
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-always-active,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-always-active,
            #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-always-active,
            #onetrust-pc-sdk
              .ot-accordion-layout.ot-checkbox-consent
              .ot-acc-hdr
              .ot-always-active {
              position: relative;
              right: unset;
              top: unset;
              transform: unset;
            }
            #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-plus-minus,
            #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-plus-minus,
            #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr .ot-plus-minus,
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-plus-minus,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-plus-minus,
            #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-plus-minus,
            #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr .ot-plus-minus {
              top: 0;
            }
            #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-arw-cntr,
            #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-arw-cntr,
            #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr .ot-arw-cntr,
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-arw-cntr,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-arw-cntr,
            #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-arw-cntr,
            #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr .ot-arw-cntr {
              float: none;
              top: unset;
              right: unset;
              transform: unset;
              margin-top: -2px;
              position: relative;
            }
            #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-cat-header,
            #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-cat-header,
            #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr .ot-cat-header,
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-cat-header,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-cat-header,
            #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-cat-header,
            #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr .ot-cat-header {
              flex: 1;
              margin: 0 0.5rem;
            }
            #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-tgl,
            #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-tgl,
            #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr .ot-tgl,
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-tgl,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-tgl,
            #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-tgl,
            #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr .ot-tgl {
              position: relative;
              transform: none;
              right: 0;
              top: 0;
              float: none;
            }
            #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-chkbox,
            #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-chkbox,
            #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr .ot-chkbox,
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-chkbox,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-chkbox,
            #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-chkbox,
            #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr .ot-chkbox {
              position: relative;
              margin: 0 0.5rem;
            }
            #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-chkbox label,
            #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-chkbox label,
            #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr .ot-chkbox label,
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-chkbox label,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-chkbox label,
            #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-chkbox label,
            #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr .ot-chkbox label {
              padding: 0;
            }
            #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-chkbox label::before,
            #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-chkbox label::before,
            #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr .ot-chkbox label::before,
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-chkbox label::before,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-chkbox label::before,
            #onetrust-pc-sdk
              #ot-pc-lst
              .ot-vs-list
              .ot-vnd-item
              .ot-acc-hdr
              .ot-chkbox
              label::before,
            #onetrust-pc-sdk
              .ot-accordion-layout.ot-checkbox-consent
              .ot-acc-hdr
              .ot-chkbox
              label::before {
              position: relative;
            }
            #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-chkbox input,
            #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-chkbox input,
            #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr .ot-chkbox input,
            #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-chkbox input,
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-chkbox input,
            #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-chkbox input,
            #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr .ot-chkbox input {
              position: absolute;
              cursor: pointer;
              width: 100%;
              height: 100%;
              opacity: 0;
              margin: 0;
              top: 0;
              left: 0;
              z-index: 1;
            }
            #onetrust-pc-sdk
              .ot-subgrp-cntr
              ul.ot-subgrps
              li.ot-subgrp
              .ot-acc-hdr
              h5.ot-cat-header,
            #onetrust-pc-sdk
              .ot-subgrp-cntr
              ul.ot-subgrps
              li.ot-subgrp
              .ot-acc-hdr
              h4.ot-cat-header {
              margin: 0;
            }
            #onetrust-pc-sdk .ot-vs-config .ot-subgrp-cntr ul.ot-subgrps li.ot-subgrp h5 {
              top: 0;
              line-height: 20px;
            }
            #onetrust-pc-sdk .ot-vs-list {
              display: flex;
              flex-direction: column;
              padding: 0;
              margin: 0.5rem 4px;
            }
            #onetrust-pc-sdk .ot-vs-selc-all {
              display: flex;
              padding: 0;
              float: unset;
              align-items: center;
              justify-content: flex-start;
            }
            #onetrust-pc-sdk .ot-vs-selc-all.ot-toggle-conf {
              justify-content: flex-end;
            }
            #onetrust-pc-sdk .ot-vs-selc-all.ot-toggle-conf.ot-caret-conf .ot-sel-all-chkbox {
              margin-right: 48px;
            }
            #onetrust-pc-sdk .ot-vs-selc-all.ot-toggle-conf .ot-sel-all-chkbox {
              margin: 0;
              padding: 0;
              margin-right: 14px;
              justify-content: flex-end;
            }
            #onetrust-pc-sdk .ot-vs-selc-all.ot-toggle-conf #ot-selall-vencntr.ot-chkbox,
            #onetrust-pc-sdk .ot-vs-selc-all.ot-toggle-conf #ot-selall-vencntr.ot-tgl {
              display: inline-block;
              right: unset;
              width: auto;
              height: auto;
              float: none;
            }
            #onetrust-pc-sdk .ot-vs-selc-all.ot-toggle-conf #ot-selall-vencntr label {
              width: 45px;
              height: 25px;
            }
            #onetrust-pc-sdk .ot-vs-selc-all .ot-sel-all-chkbox {
              margin-right: 11px;
              margin-left: 0.75rem;
              display: flex;
              align-items: center;
            }
            #onetrust-pc-sdk .ot-vs-selc-all .sel-all-hdr {
              margin: 0 1.25rem;
              font-size: 0.812em;
              line-height: normal;
              text-align: center;
              word-break: break-word;
              word-wrap: break-word;
            }
            #onetrust-pc-sdk .ot-vnd-list-cnt #ot-selall-vencntr.ot-chkbox {
              float: unset;
              right: 0;
            }
            #onetrust-pc-sdk .ot-vs-selc-all.ot-toggle-conf.ot-caret-conf .ot-sel-all-chkbox {
              margin-right: 0.5rem;
            }
            #onetrust-pc-sdk .ot-vs-selc-all.ot-toggle-conf .ot-sel-all-chkbox {
              margin-right: 15px;
            }
            #onetrust-pc-sdk #ot-sel-blk .ot-chkbox {
              right: unset;
            }
            #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-tgl {
              padding: 0;
            }
            #onetrust-pc-sdk .ot-vs-list {
              margin-top: 0.5rem;
            }
            #onetrust-pc-sdk .ot-pgph-link {
              font-size: 0.813em;
              margin-top: 5px;
              position: relative;
            }
            #onetrust-pc-sdk .ot-pgph-link.ot-pgph-link-subgroup {
              margin-bottom: 1rem;
            }
            #onetrust-pc-sdk .ot-pgph-contr {
              margin: 0 2.5rem;
            }
            #onetrust-pc-sdk .ot-pgph-title {
              font-size: 1.18rem;
              margin-bottom: 2rem;
            }
            #onetrust-pc-sdk .ot-pgph-desc {
              font-size: 1rem;
              font-weight: 400;
              margin-bottom: 2rem;
              line-height: 1.5rem;
            }
            #onetrust-pc-sdk .ot-pgph-desc:not(:last-child):after {
              content: '';
              width: 96%;
              display: block;
              margin: 0 auto;
              padding-bottom: 2rem;
              border-bottom: 1px solid #e9e9e9;
            }
            @media only screen and (max-width: 600px) {
              #onetrust-pc-sdk {
                max-width: 100%;
                min-width: 100%;
              }
              #onetrust-pc-sdk .ot-ftr-stacked button {
                width: 100%;
              }
              #onetrust-pc-sdk #ot-lst-cnt,
              #onetrust-pc-sdk #ot-pc-hdr {
                margin-top: 0;
                padding: 0 5px 0 10px;
                width: calc(100% - 25px);
              }
            }
            @media only screen and (max-width: 425px) {
              #onetrust-pc-sdk.otPcPanel {
                left: 0;
                min-width: 100%;
                height: 100%;
                top: 0;
                border-radius: 0;
              }
              #onetrust-pc-sdk #ot-host-lst .ot-chkbox {
                margin-left: 0;
              }
              #onetrust-pc-sdk #ot-pc-content {
                margin: 0 10px 0 20px;
              }
              #onetrust-pc-sdk p {
                font-size: 0.7em;
              }
              #onetrust-pc-sdk .ot-tgl-cntr {
                width: auto;
              }
              #onetrust-pc-sdk #vendor-search-handler {
                font-size: 1em;
              }
              #onetrust-pc-sdk #ot-lst-cnt {
                height: calc(100% - 95px);
              }
              #onetrust-pc-sdk .ot-switch + p {
                max-width: 80%;
              }
              #onetrust-pc-sdk button {
                letter-spacing: 0.01em;
              }
              #onetrust-pc-sdk .save-preference-btn-handler {
                margin-top: 0;
              }
              #onetrust-pc-sdk .ot-search-cntr {
                width: 75%;
              }
            }
            @media only screen and (max-width: 320px) {
              #onetrust-pc-sdk #ot-fltr-cnt {
                margin-left: 15px;
              }
            }
            @media only screen and (max-width: 896px) and (max-height: 425px) and (orientation: landscape) {
              #onetrust-pc-sdk {
                left: 0;
                top: 0;
                min-width: 100%;
                height: 100%;
                border-radius: 0;
              }
              #onetrust-pc-sdk .ot-pc-header {
                height: auto;
                min-height: 20px;
              }
              #onetrust-pc-sdk .ot-pc-header .ot-pc-logo {
                max-height: 30px;
              }
              #onetrust-pc-sdk .ot-pc-footer {
                max-height: 60px;
                overflow-y: auto;
              }
              #onetrust-pc-sdk #ot-pc-content,
              #onetrust-pc-sdk #ot-pc-lst {
                bottom: 70px;
                height: auto !important;
              }
              #onetrust-pc-sdk.ot-ftr-stacked #ot-pc-content {
                bottom: 70px;
              }
              #onetrust-pc-sdk button {
                letter-spacing: 0.02em;
              }
              #onetrust-pc-sdk #ot-anchor {
                left: initial;
                right: 50px;
              }
              #onetrust-pc-sdk #ot-lst-title {
                margin-top: 12px;
              }
              #onetrust-pc-sdk #ot-lst-title * {
                font-size: inherit;
              }
              #onetrust-pc-sdk #ot-pc-hdr input {
                margin-right: 0;
                padding-right: 45px;
              }
              #onetrust-pc-sdk .ot-switch + p {
                max-width: 85%;
              }
              #onetrust-pc-sdk #ot-lst-cnt {
                max-height: none;
                overflow: initial;
              }
              #onetrust-pc-sdk #ot-lst-cnt.no-results {
                height: auto;
              }
              #onetrust-pc-sdk input {
                font-size: 1em !important;
              }
              #onetrust-pc-sdk p {
                font-size: 0.6em;
              }
              #onetrust-pc-sdk #ot-pc-lst {
                overflow: auto;
              }
              #onetrust-pc-sdk #ot-fltr-modal {
                width: 100%;
                height: 100%;
                max-height: none;
                top: 0;
              }
              #onetrust-pc-sdk #ot-sel-blk {
                position: static;
              }
              #onetrust-pc-sdk #ot-fltr-cnt {
                height: 250px;
                width: 100%;
              }
              #onetrust-pc-sdk.ot-shw-fltr #ot-anchor {
                display: none !important;
              }
              #onetrust-pc-sdk.ot-shw-fltr #ot-pc-lst {
                height: 100% !important;
                overflow: hidden;
                top: 0px;
              }
              #onetrust-pc-sdk.ot-shw-fltr #ot-fltr-cnt {
                margin: 0;
                height: 100%;
                padding: 10px;
                top: 0;
                width: calc(100% - 20px);
                position: absolute;
                right: 0;
                left: 0;
                max-width: none;
              }
              #onetrust-pc-sdk.ot-shw-fltr .ot-fltr-scrlcnt {
                max-height: calc(100% - 65px);
              }
            }
            #onetrust-consent-sdk #onetrust-pc-sdk,
            #onetrust-consent-sdk #ot-search-cntr,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-switch.ot-toggle,
            #onetrust-consent-sdk #onetrust-pc-sdk ot-grp-hdr1 .checkbox,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-title:after,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-sel-blk,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-cnt,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-anchor {
              background-color: #ffffff;
            }
            #onetrust-consent-sdk #onetrust-pc-sdk h3,
            #onetrust-consent-sdk #onetrust-pc-sdk h4,
            #onetrust-consent-sdk #onetrust-pc-sdk h5,
            #onetrust-consent-sdk #onetrust-pc-sdk h6,
            #onetrust-consent-sdk #onetrust-pc-sdk p,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-ven-lst .ot-ven-opts p,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-desc,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-title,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-li-title,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-sel-all-hdr span,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-info,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-modal #modal-header,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst #ot-sel-blk p,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst #ot-lst-title h3,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst .back-btn-handler p,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst .ot-ven-name,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst #ot-ven-lst .consent-category,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,
            #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-optout-signal {
              color: #4a4a4a;
            }
            #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-pgph-link,
            #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,
            #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler + a,
            #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-ven-link,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-ven-legclaim-link,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-name a,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-acc-hdr .ot-host-expand,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-info a,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-content #ot-pc-desc .ot-link-btn,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info a,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info a {
              color: #283897;
            }
            #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler:hover {
              text-decoration: underline;
            }
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-acc-grpcntr.ot-acc-txt,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-acc-txt .ot-subgrp-tgl .ot-switch.ot-toggle {
              background-color: #e9e9e9;
            }
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-info,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-acc-txt .ot-ven-dets {
              background-color: #e9e9e9;
            }
            #onetrust-consent-sdk
              #onetrust-pc-sdk
              button:not(#clear-filters-handler):not(.ot-close-icon):not(#filter-btn-handler):not(
                .ot-remove-objection-handler
              ):not(.ot-obj-leg-btn-handler):not([aria-expanded]):not(.ot-link-btn),
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-active-leg-btn {
              background-color: #293994;
              border-color: #293994;
              color: #ffffff;
            }
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-active-menu {
              border-color: #293994;
            }
            #onetrust-consent-sdk
              #onetrust-pc-sdk
              .ot-leg-btn-container
              .ot-remove-objection-handler {
              background-color: transparent;
              border: 1px solid transparent;
            }
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn {
              background-color: #ffffff;
              color: #78808e;
              border-color: #78808e;
            }
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-tgl input:focus + .ot-switch,
            .ot-switch .ot-switch-nob,
            .ot-switch .ot-switch-nob:before,
            #onetrust-pc-sdk .ot-checkbox input[type='checkbox']:focus + label::before,
            #onetrust-pc-sdk .ot-chkbox input[type='checkbox']:focus + label::before {
              outline-color: #000000;
              outline-width: 1px;
            }
            #onetrust-pc-sdk .ot-host-item > button:focus,
            #onetrust-pc-sdk .ot-ven-item > button:focus {
              border: 1px solid #000000;
            }
            #onetrust-consent-sdk #onetrust-pc-sdk *:focus,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-vlst-cntr > a:focus {
              outline: 1px solid #000000;
            }
            #onetrust-pc-sdk .ot-vlst-cntr .ot-ext-lnk,
            #onetrust-pc-sdk .ot-ven-hdr .ot-ext-lnk {
              background-image: url('https://cdn.cookielaw.org/logos/static/ot_external_link.svg');
            }
            .ot-sdk-cookie-policy {
              font-family: inherit;
              font-size: 16px;
            }
            .ot-sdk-cookie-policy.otRelFont {
              font-size: 1rem;
            }
            .ot-sdk-cookie-policy h3,
            .ot-sdk-cookie-policy h4,
            .ot-sdk-cookie-policy h6,
            .ot-sdk-cookie-policy p,
            .ot-sdk-cookie-policy li,
            .ot-sdk-cookie-policy a,
            .ot-sdk-cookie-policy th,
            .ot-sdk-cookie-policy #cookie-policy-description,
            .ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,
            .ot-sdk-cookie-policy #cookie-policy-title {
              color: dimgray;
            }
            .ot-sdk-cookie-policy #cookie-policy-description {
              margin-bottom: 1em;
            }
            .ot-sdk-cookie-policy h4 {
              font-size: 1.2em;
            }
            .ot-sdk-cookie-policy h6 {
              font-size: 1em;
              margin-top: 2em;
            }
            .ot-sdk-cookie-policy th {
              min-width: 75px;
            }
            .ot-sdk-cookie-policy a,
            .ot-sdk-cookie-policy a:hover {
              background: #fff;
            }
            .ot-sdk-cookie-policy thead {
              background-color: #f6f6f4;
              font-weight: bold;
            }
            .ot-sdk-cookie-policy .ot-mobile-border {
              display: none;
            }
            .ot-sdk-cookie-policy section {
              margin-bottom: 2em;
            }
            .ot-sdk-cookie-policy table {
              border-collapse: inherit;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy {
              font-family: inherit;
              font-size: 1rem;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title {
              color: dimgray;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description {
              margin-bottom: 1em;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup {
              margin-left: 1.5em;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td {
              font-size: 0.9em;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a {
              font-size: inherit;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group {
              font-size: 1em;
              margin-bottom: 0.6em;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title {
              margin-bottom: 1.2em;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy > section {
              margin-bottom: 1em;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th {
              min-width: 75px;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover {
              background: #fff;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead {
              background-color: #f6f6f4;
              font-weight: bold;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border {
              display: none;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section {
              margin-bottom: 2em;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li {
              list-style: disc;
              margin-left: 1.5em;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4 {
              display: inline-block;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table {
              border-collapse: inherit;
              margin: auto;
              border: 1px solid #d7d7d7;
              border-radius: 5px;
              border-spacing: initial;
              width: 100%;
              overflow: hidden;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td {
              border-bottom: 1px solid #d7d7d7;
              border-right: 1px solid #d7d7d7;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td {
              border-bottom: 0px;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child {
              border-right: 0px;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type {
              width: 25%;
            }
            .ot-sdk-cookie-policy[dir='rtl'] {
              text-align: left;
            }
            #ot-sdk-cookie-policy h3 {
              font-size: 1.5em;
            }
            @media only screen and (max-width: 530px) {
              .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,
              .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,
              .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,
              .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,
              .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,
              .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr {
                display: block;
              }
              .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr {
                position: absolute;
                top: -9999px;
                left: -9999px;
              }
              .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr {
                margin: 0 0 1em 0;
              }
              .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),
              .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a {
                background: #f6f6f4;
              }
              .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td {
                border: none;
                border-bottom: 1px solid #eee;
                position: relative;
                padding-left: 50%;
              }
              .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before {
                position: absolute;
                height: 100%;
                left: 6px;
                width: 40%;
                padding-right: 10px;
              }
              .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border {
                display: inline-block;
                background-color: #e4e4e4;
                position: absolute;
                height: 100%;
                top: 0;
                left: 45%;
                width: 2px;
              }
              .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before {
                content: attr(data-label);
                font-weight: bold;
              }
              .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li {
                word-break: break-word;
                word-wrap: break-word;
              }
              #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table {
                overflow: hidden;
              }
              #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td {
                border: none;
                border-bottom: 1px solid #d7d7d7;
              }
              #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,
              #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,
              #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,
              #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,
              #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,
              #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr {
                display: block;
              }
              #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,
              #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type {
                width: auto;
              }
              #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr {
                margin: 0 0 1em 0;
              }
              #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before {
                height: 100%;
                width: 40%;
                padding-right: 10px;
              }
              #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before {
                content: attr(data-label);
                font-weight: bold;
              }
              #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li {
                word-break: break-word;
                word-wrap: break-word;
              }
              #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr {
                position: absolute;
                top: -9999px;
                left: -9999px;
                z-index: -9999;
              }
              #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td {
                border-bottom: 1px solid #d7d7d7;
                border-right: 0px;
              }
              #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child {
                border-bottom: 0px;
              }
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h5,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description {
              color: #696969;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th {
              color: #696969;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group {
              color: #696969;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title {
              color: #696969;
            }
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th {
              background-color: #f8f8f8;
            }
            .ot-floating-button__front {
              background-image: url('https://cdn.cookielaw.org/logos/static/ot_persistent_cookie_icon.png');
            }
          `}
        </style>

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
                <Link
                  className=""
                  title="Opens page (same window)"
                  id="{070EA548-849E-452A-82D4-4CED8EA19DC0}"
                  href="/blog/our-everyday-stories/business-stories/2025/superbowl-25"
                >
                  <h1 className="HeroEditorial-module_title__ppi-b font-hero-title">
                    Experience exceptional moments at the world&#x27;s largest sporting events
                  </h1>
                </Link>
                <p className="HeroEditorial-module_description__VNc38 font-body"> </p>
                <Link
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
                  className="splide splide Slider_slider__CJilF LatestNews_latest-news__slider__ptqhR"
                  aria-labelledby=""
                  aria-roledescription="carousel"
                  data-grid-layout="global"
                  role="region"
                >
                  <div className="splide__track" aria-atomic="false" aria-live="polite">
                    <ul className="splide__list">
                      <li className="splide__slide" role="group" style={{ visibility: 'visible' }}>
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
                              <Link
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
                              </Link>
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
                              Sodexo makes significant progress in Equileap&quot;s global ranking,
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
                              Sodexo named one of the World&quot;s Most Ethical Companies® by
                              Ethisphere for the second year in a row
                            </h3>
                            <div className="LatestNewsSlide_latest-news-slide__content__text__oVqab">
                              Sodexo is proud to announce its recognition as one of the World&quot;s
                              Most Ethical Compagnies® for the second consecutive year. Issued by
                              Ethisphere, a global leader in defining and advancing the standards of
                              ethical business, this annual recognition honors Sodexo&quot;s
                              continuous commitment to business integrity through best-in-class
                              policies and practices. Learn more.
                            </div>
                            <div className="LatestNewsSlide_latest-news-slide__content__buttons__5sWAm">
                              <Link
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
                              </Link>
                              <Link
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
                              </Link>
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
                              market-leading position in Australia&quot;s energy and resources
                              sector
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
                              <Link
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
                      ordinary—it&quot;s about making a real difference every day. You belong in a
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
                Cookie Preferences
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
