/**
 * This Layout is needed for Starter Kit.
 */
import React from 'react';
import Head from 'next/head';
import { LayoutServiceData, Field, HTMLLink, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import Scripts from 'src/Scripts';
import AldarHeader from 'components/Aldar/AldarHeader';
import AldarFooter from 'components/Aldar/AldarFooter';
import AldarMain from 'components/Aldar/AldarMain';

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
        <AldarMain></AldarMain>
        {/* <main>
          <div id="content">{route && <Placeholder name="headless-main" rendering={route} />}</div>
        </main> */}
        <AldarFooter></AldarFooter>
        {/* <footer>
          <div id="footer">{route && <Placeholder name="headless-footer" rendering={route} />}</div>
        </footer> */}
      </div>
      <script
        defer
        src="https://www.aldar.com/sitecore%20modules/Web/ExperienceForms/scripts/jquery-3.6.0.min.js?v=1"
      ></script>
      <script
        defer
        src="https://www.aldar.com/sitecore%20modules/Web/ExperienceForms/scripts/jquery.validate.min.js?v=1"
      ></script>
      <script
        defer
        src="https://www.aldar.com/sitecore%20modules/Web/ExperienceForms/scripts/jquery.validate.unobtrusive.min.js?v=1"
      ></script>
      <script
        defer
        src="https://www.aldar.com/sitecore%20modules/Web/ExperienceForms/scripts/jquery.unobtrusive-ajax.min.js"
      ></script>
      <script
        defer
        src="https://www.aldar.com/sitecore%20modules/Web/ExperienceForms/scripts/form.validate.js?v=3"
      ></script>
      <script
        defer
        src="https://www.aldar.com/sitecore%20modules/Web/ExperienceForms/scripts/form.tracking.js"
      ></script>
      <script
        defer
        src="https://www.aldar.com/sitecore%20modules/Web/ExperienceForms/scripts/form.conditions.js"
      ></script>
      <script
        defer
        src="https://www.aldar.com/sitecore%20modules/Web/ExperienceForms/scripts/formsextensions.validate.js"
      ></script>
      <script
        defer
        src="https://cdn.aldar.com/-/media/base-themes/core-libraries/scripts/optimized-min.js?rev=6165373d2ce14cf7ad4c8a9b5d8b2b2a&t=20230810T074042Z"
      ></script>
      <script
        defer
        src="https://cdn.aldar.com/-/media/base-themes/xa-api/scripts/optimized-min.js?rev=ea3fad816cdb44cca61914013790300b&t=20201010T213054Z"
      ></script>
      <script
        defer
        src="https://cdn.aldar.com/-/media/base-themes/main-theme/scripts/optimized-min.js?rev=c0982cd79aaf4e2ea7f12615308a3f8c&t=20201010T213055Z"
      ></script>
      <script
        defer
        src="https://cdn.aldar.com/-/media/base-themes/google-maps-js-connector/scripts/optimized-min.js?rev=d6654e8cb137491d83b07bc20925095a&t=20201010T213056Z"
      ></script>
      <script
        defer
        src="https://cdn.aldar.com/-/media/base-themes/maps/scripts/optimized-min.js?rev=131bf95750bc4ce28626bae7ad97fa89&t=20201010T213057Z"
      ></script>
      <script
        defer
        src="https://cdn.aldar.com/-/media/base-themes/searchtheme/scripts/optimized-min.js?rev=6cb361a96e444ae1aac45fa7bcd22bee&t=20201010T213058Z"
      ></script>
      <script
        defer
        src="https://cdn.aldar.com/-/media/base-themes/components-theme/scripts/optimized-min.js?rev=d0f06bc707bc4134b79194c16d7181a2&t=20201010T213059Z"
      ></script>
      <script
        defer
        src="https://cdn.aldar.com/-/media/base-themes/resolve-conflicts/scripts/optimized-min.js?rev=150808b4a1df41e68ccfca0bc3d7f105&t=20201010T213059Z"
      ></script>
      <script
        defer
        src="https://cdn.aldar.com/-/media/themes/aldar-tenant/global/aldar/scripts/optimized-min.js?rev=b7c252edce3c466298971f1b414116e5&t=20240206T151823Z"
      ></script>
    </>
  );
};

export default Layout;
