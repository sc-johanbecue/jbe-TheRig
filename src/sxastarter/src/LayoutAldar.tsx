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
import AldarHeader from 'components/Aldar/AldarHeader';
import AldarFooter from 'components/Aldar/AldarFooter';

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

        <link
          href="https://cdn.aldar.com/-/media/feature/aldar-tenant/aldar-bootstrap-4/aldar-bootstrap-4/styles/optimized-min.css?rev=a0845e903cf246a0888a3f2c0c611abb&t=20210113T201624Z"
          rel="stylesheet"
        />
        <link
          href="https://cdn.aldar.com/-/media/base-themes/core-libraries/styles/optimized-min.css?rev=07b88e8c80f9474884b6bc319be25a7e&t=20201010T213053Z"
          rel="stylesheet"
        />
        <link
          href="https://cdn.aldar.com/-/media/base-themes/main-theme/styles/optimized-min.css?rev=e1a000ae24164edab6292316c6666b86&t=20201010T213056Z"
          rel="stylesheet"
        />
        <link
          href="https://cdn.aldar.com/-/media/themes/aldar-tenant/global/aldar/styles/pre-optimized-min.css?rev=035944b5004e4f5f865ace7a151534c2&sc_lang=en&t=20231027T130735Z"
          rel="stylesheet"
        />

        <link
          href="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/favicons/favicon-taskbar.png?rev=60f93a907eff4fcaa251f387b209c17a"
          rel="shortcut icon"
        />
        <meta property="og:url" content="https://www.aldar.com/en" />
        <meta
          name="description"
          content="Aldar offers UAE residents and investors a range of premium properties and real estate services. Explore our villas, apartments, and offices in Abu Dhabi.        "
        />
        <meta property="twitter:title" content="Home" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className={mainClassPageEditing}>
        <AldarHeader></AldarHeader>
        {/* <header>
          <div id="header">{route && <Placeholder name="headless-header" rendering={route} />}</div>
        </header> */}
        <main>
          <div id="content">{route && <Placeholder name="headless-main" rendering={route} />}</div>
        </main>
        <AldarFooter></AldarFooter>
        {/* <footer>
          <div id="footer">{route && <Placeholder name="headless-footer" rendering={route} />}</div>
        </footer> */}
      </div>
    </>
  );
};

export default Layout;
