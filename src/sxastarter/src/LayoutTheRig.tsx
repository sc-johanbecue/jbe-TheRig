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
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}
        <link rel="canonical" href={publicUrl} />
        <meta property="og:title" content={fields?.OgTitle?.value?.toString()} />
        <meta property="og:description" content={fields?.OgDescription?.value?.toString()} />
        <meta property="og:image" content={fields?.OgImage?.value?.src?.toString()} />
        <meta property="og:type" content={route?.templateName} data-attr="JSS-21.6.0" />

        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Welcome to THE RIG., the ultimate extreme destination in the Arabian Gulf. Get your adrenaline pumping with thrilling activities, relax in unique accommodations, and enjoy unparalleled hospitality. Book your offshore adventure today."
        />
        <meta
          name="keywords"
          content="Adrenaline , Holiday Adventures: Zip Line, Scuba Diving, THERIG., extreme park, adrenaline "
        />
        <link rel="icon" href="https://therig.sa/the-rig-logo.png" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="The world&#x27;s first, offshore, adventure tourism destination. From adrenalin pumping karting to extreme sports and submersibles, there&#x27;s something for everyone! "
        />
        <meta
          property="og:description"
          content="Welcome to THE RIG., the ultimate extreme destination in the Arabian Gulf. Get your adrenaline pumping with thrilling activities, relax in unique accommodations, and enjoy unparalleled hospitality. Book your offshore adventure today."
        />
        <meta property="og:url" content="https://therig.sa/" />
        <meta property="og:site_name" content="The RIG." />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="The world&#x27;s first, offshore, adventure tourism destination. From adrenalin pumping karting to extreme sports and submersibles, there&#x27;s something for everyone! "
        />
        <meta
          name="twitter:description"
          content="Welcome to THE RIG., the ultimate extreme destination in the Arabian Gulf. Get your adrenaline pumping with thrilling activities, relax in unique accommodations, and enjoy unparalleled hospitality. Book your offshore adventure today."
        />
        <meta name="twitter:url" content="https://therig.sa/" />
        <meta name="twitter:image" content="https://therig.sa/bg/media-header.png" />
        <link rel="alternate" hrefLang="en" href="https://therig.sa/" />
        <link rel="alternate" hrefLang="ar" href="https://therig.sa/ar/" />
        <link rel="alternate" hrefLang="x-default" href="https://therig.sa/" />
        <meta name="next-head-count" content="22" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta data-version="0.1.101" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link data-next-font="" rel="preconnect" href="/" crossOrigin="anonymous" />
        <script defer src="https://therig.sa/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js" />
        <script defer src="https://therig.sa/_next/static/chunks/webpack-7d607ad0e350eccb.js" />
        <script defer src="https://therig.sa/_next/static/chunks/framework-2c79e2a64abdb08b.js" />
        <script defer src="https://therig.sa/_next/static/chunks/main-2c344dd1b37f0ea7.js" />
        <script defer src="https://therig.sa/_next/static/chunks/pages/_app-c3938ff6c057bd4f.js" />
        <script defer src="https://therig.sa/_next/static/chunks/699-9c5e8f6d198c60f4.js" />
        <script defer src="https://therig.sa/_next/static/chunks/666-5a3c37bd48f296b8.js" />
        <script defer src="https://therig.sa/_next/static/chunks/440-d2f921bfebaf65be.js" />
        <script defer src="https://therig.sa/_next/static/chunks/513-dd1af0ac0d6287e7.js" />
        <script defer src="https://therig.sa/_next/static/chunks/435-10742e896af78f21.js" />
        <script defer src="https://therig.sa/_next/static/chunks/420-eafb122c24c6e0b1.js" />
        <script defer src="https://therig.sa/_next/static/chunks/258-f4e4822d18206e1d.js" />
        <script defer src="https://therig.sa/_next/static/chunks/484-dbf94c26d8162048.js" />
        <script defer src="https://therig.sa/_next/static/chunks/pages/index-f68afcea7b094900.js" />
        <script
          defer
          src="https://therig.sa/_next/static/1A9z0Ik3x0u_Errt0Chgc/_buildManifest.js"
        />
        <script id="cssOnLoad">
          {`document.addEventListener('DOMContentLoaded', function () {
      const cssOneId = '489fa6e788c2c9ab'; // You could encode the CSS path itself to generate an ID.

      // Check if the CSS is already added
      if (!document.getElementById(cssOneId)) {
        const head = document.head || document.getElementsByTagName('head')[0];
        const link = document.createElement('link');
        link.id = cssOneId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://therig.sa/_next/static/css/489fa6e788c2c9ab.css';
        link.media = 'all';
        head.appendChild(link);
      }

      const cssTwoId = '489fa6e788c2c9ab'; // You could encode the CSS path itself to generate an ID.

      // Check if the CSS is already added
      if (!document.getElementById(cssTwoId)) {
        const head = document.head || document.getElementsByTagName('head')[0];
        const link = document.createElement('link');
        link.id = cssTwoId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://therig.sa/_next/static/css/c21825ec9574f45e.css';
        link.media = 'all';
        head.appendChild(link);
      }
    })
  `}
        </script>
        <script defer src="https://therig.sa/_next/static/1A9z0Ik3x0u_Errt0Chgc/_ssgManifest.js" />
        <style data-href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&display=swap">
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:300;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwA_JxhTQ.woff) format('woff')`}
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:400;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhTQ.woff) format('woff')`}
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:500;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhTQ.woff) format('woff')`}
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:700;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthTQ.woff) format('woff')`}
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:300;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu6-K6z9mXgjU0.woff2) format('woff2');
        unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF`}
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:300;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K6z9mXg.woff2) format('woff2');
        unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD`}
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:400;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu6-K6z9mXgjU0.woff2) format('woff2');
        unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF`}
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:400;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K6z9mXg.woff2) format('woff2');
        unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD`}
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:500;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu6-K6z9mXgjU0.woff2) format('woff2');
        unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF`}
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:500;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K6z9mXg.woff2) format('woff2');
        unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD`}
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:700;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu6-K6z9mXgjU0.woff2) format('woff2');
        unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF`}
          @font-face
          {`
        font-family:'DM Sans';
        font-style:normal;
        font-weight:700;
        font-display:swap;
        src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K6z9mXg.woff2) format('woff2');
        unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD`}
        </style>
        <style data-href="https://fonts.googleapis.com/css2?family=Changa:wght@300;400;500;600;700;800&display=swap">
          @font-face
          {`font-family:'Changa';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-c79JNi2YuVOUcOarRPgnNGooxCZ_OxQjM.woff) format('woff')}@font-face{font-family:'Changa';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-c79JNi2YuVOUcOarRPgnNGooxCZ62xQjM.woff) format('woff')}@font-face{font-family:'Changa';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-c79JNi2YuVOUcOarRPgnNGooxCZ5-xQjM.woff) format('woff')}@font-face{font-family:'Changa';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-c79JNi2YuVOUcOarRPgnNGooxCZ3O2QjM.woff) format('woff')}@font-face{font-family:'Changa';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-c79JNi2YuVOUcOarRPgnNGooxCZ0q2QjM.woff) format('woff')}@font-face{font-family:'Changa';font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-c79JNi2YuVOUcOarRPgnNGooxCZy22QjM.woff) format('woff')}@font-face{font-family:'Changa';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckY5y-eOz1paFD.woff2) format('woff2');unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:'Changa';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckaJy-eOz1paFD.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Changa';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckZpy-eOz1pQ.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Changa';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckY5y-eOz1paFD.woff2) format('woff2');unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:'Changa';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckaJy-eOz1paFD.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Changa';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckZpy-eOz1pQ.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Changa';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckY5y-eOz1paFD.woff2) format('woff2');unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:'Changa';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckaJy-eOz1paFD.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Changa';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckZpy-eOz1pQ.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Changa';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckY5y-eOz1paFD.woff2) format('woff2');unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:'Changa';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckaJy-eOz1paFD.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Changa';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckZpy-eOz1pQ.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Changa';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckY5y-eOz1paFD.woff2) format('woff2');unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:'Changa';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckaJy-eOz1paFD.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Changa';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckZpy-eOz1pQ.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Changa';font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckY5y-eOz1paFD.woff2) format('woff2');unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:'Changa';font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckaJy-eOz1paFD.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Changa';font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/changa/v27/2-cm9JNi2YuVOUckZpy-eOz1pQ.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD`}
        </style>
        <style data-href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;700&display=swap">
          @font-face
          {`font-family:'Cairo';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hOA-W1c.woff) format('woff')}@font-face{font-family:'Cairo';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hNI-W1c.woff) format('woff')}@font-face{font-family:'Cairo';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hAc5W1c.woff) format('woff')}@font-face{font-family:'Cairo';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXVc1nY6HkvangtZmpQdkhzfH5lkSscQyyS8p4_RHH1.woff2) format('woff2');unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:'Cairo';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXVc1nY6HkvangtZmpQdkhzfH5lkSscSCyS8p4_RHH1.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Cairo';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXVc1nY6HkvangtZmpQdkhzfH5lkSscRiyS8p4_RA.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Cairo';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXVc1nY6HkvangtZmpQdkhzfH5lkSscQyyS8p4_RHH1.woff2) format('woff2');unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:'Cairo';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXVc1nY6HkvangtZmpQdkhzfH5lkSscSCyS8p4_RHH1.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Cairo';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXVc1nY6HkvangtZmpQdkhzfH5lkSscRiyS8p4_RA.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Cairo';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXVc1nY6HkvangtZmpQdkhzfH5lkSscQyyS8p4_RHH1.woff2) format('woff2');unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:'Cairo';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXVc1nY6HkvangtZmpQdkhzfH5lkSscSCyS8p4_RHH1.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Cairo';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/cairo/v28/SLXVc1nY6HkvangtZmpQdkhzfH5lkSscRiyS8p4_RA.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD`}
        </style>
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className={mainClassPageEditing}>
        {route && <Placeholder name="headless-header" rendering={route} />}

        <main>{route && <Placeholder name="headless-main" rendering={route} />}</main>

        {route && <Placeholder name="headless-footer" rendering={route} />}

        <div className="css-dy1auj">
          <div className="Toastify"></div>
        </div>
      </div>

      {/* <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317"
        integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA=="
        data-cf-beacon='{"rayId":"8643e4970aa42a34","version":"2024.2.4","token":"95d0ff46ebca47c7886903eb9234d320"}'
        crossOrigin="anonymous"
      /> */}

      <script defer src="https://therig.sa/_next/static/chunks/407-0b701f93c1c45baa.js" />
      <script defer src="https://therig.sa/_next/static/chunks/45-1e62ff89a816174c.js" />
      <script defer src="https://therig.sa/_next/static/chunks/pages/about-497fe4ec30a7d93e.js" />
      <script defer src="https://therig.sa/_next/static/chunks/190-83c08bc2ec5e0bdf.js" />
      <script defer src="https://therig.sa/_next/static/chunks/641-ef09a6859b1428bb.js" />
      <script defer src="https://therig.sa/_next/static/chunks/707-550c01aaec79d951.js" />
      <script defer src="https://therig.sa/_next/static/chunks/pages/press-29017a85477a96af.js" />
      <script defer src="https://therig.sa/_next/static/chunks/709-0789c51d73337628.js" />
      <script defer src="https://therig.sa/_next/static/chunks/pages/privacy-7e9a0d88da107ada.js" />
      <script defer src="https://therig.sa/_next/static/chunks/pages/terms-2f117c12cb0c5b79.js" />
      <script
        defer
        src="https://therig.sa/_next/static/chunks/pages/cookie_policy-5e6fcb9973ae9093.js"
      />
    </>
  );
};

export default Layout;
