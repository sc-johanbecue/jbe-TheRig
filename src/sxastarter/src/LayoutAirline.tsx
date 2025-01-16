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

        <meta charSet="utf-8" />
        <link rel="icon" href="https://www.sportingkampenhout.be/Sitecore/airline/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link
          rel="apple-touch-icon"
          href="https://www.sportingkampenhout.be/Sitecore/airline/logo192.png"
        />
        <link
          rel="manifest"
          href="https://www.sportingkampenhout.be/Sitecore/airline/manifest.json"
        />
        <link
          rel="stylesheet"
          href="https://www.sportingkampenhout.be/Sitecore/airline/assets/css/bootstrap.min.css"
        />
        <script
          defer
          src="https://www.sportingkampenhout.be/Sitecore/airline/static/js/main.e22c0515.js"
        ></script>
        <link
          href="https://www.sportingkampenhout.be/Sitecore/airline/static/css/main.6dddffd7.css"
          rel="stylesheet"
        />
        <link
          href="https://www.sportingkampenhout.be/Sitecore/airline/static/css/assets/css/fontawesome.all.min.css"
          rel="stylesheet"
        />
        <meta
          id="ConnectiveDocSignExtentionInstalled"
          name="ConnectiveDocSignExtentionInstalled"
          data-extension-version="1.0.7"
        />
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div className={mainClassPageEditing} id="root">
        {/* <header>
          <div id="header">{route && <Placeholder name="headless-header" rendering={route} />}</div>
        </header>
        <main>
          <div id="content">{route && <Placeholder name="headless-main" rendering={route} />}</div>
        </main>
        <footer>
          <div id="footer">{route && <Placeholder name="headless-footer" rendering={route} />}</div>
        </footer> */}
        {/* <div>{route && <Placeholder name="headless-copyright" rendering={route} />}</div> */}

        <header className="main_header_arae">
          {route && <Placeholder name="headless-header" rendering={route} />}
        </header>
        {route && <Placeholder name="headless-main" rendering={route} />}
        <footer id="footer_area">
          {route && <Placeholder name="headless-footer" rendering={route} />}
        </footer>
        {route && <Placeholder name="headless-copyright" rendering={route} />}
      </div>
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://www.sportingkampenhout.be/Sitecore/airline/assets/js/bootstrap.bundle.js"></script>
    </>
  );
};

export default Layout;
