// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

export default function Document() {
  const { sitecoreContext } = useSitecoreContext();
  
  // Example of using Sitecore context to determine the language (optional)
  const lang = sitecoreContext?.site?.language || 'en'; // default to 'en'

  return (
    <Html lang={lang}> {/* Dynamically set the lang attribute */}
      <Head>
        {/* Add any additional elements or metadata here */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
