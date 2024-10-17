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

        <script type="application/ld+json">
          {`
         {
           "@context": "http://schema.org",
           "@type": "Organization",
           "name": "Jumeirah",
           "description": "Today, Jumeirah is a Dubai national champion and an acclaimed luxury hospitality leader — operating 24 Jumeirah branded properties (6,747 keys) in eight countries. As exemplified through its flagship hotel, and global icon, Burj Al Arab, Jumeirah has transformed the way that luxury is defined.",
           "image": "https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/madinat-jumeirah/mina-a-salam-at-madinat-jumeirah/hotel-activity/6-4-activities-a-new-side-of-dubai_jumeirah-mina-a-salam-fireworks-madinat-view_landscape/jumeirah_executive-team_6_4_landscape.jpg?modified=20191111172702",
           "logo":"https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/logo/redesign/jumeirah_logo_whitesvg.svg?modified=20240428154803",
           "url": "https://www.jumeirah.com",
           "telephone": "+971 43665000",
           "sameAs":["https://www.facebook.com/Jumeirah","https://www.instagram.com/jumeirah/?hl=en","https://twitter.com/jumeirah","https://www.youtube.com/@Jumeirah","https://www.linkedin.com/company/jumeirah/"],
           "address": {
           "@type": "PostalAddress",
           "streetAddress": "Level 5, Building 5 Dubai Design District",
           "addressLocality": "Dubai",
           "postalCode": "73137",
           "addressCountry": "United Arab Emirates"
           }
         }
           `}
        </script>
        <title data-react-helmet="true">Jumeirah | Hotels in Europe, Middle East &amp; Asia</title>
        <meta
          data-react-helmet="true"
          name="description"
          content="View our full range of luxury hotel destinations across Europe, the Middle East &amp; Asia regions. Explore Jumeirah hotels online."
        />
        <meta data-react-helmet="true" name="keywords" content="" />
        <meta data-react-helmet="true" name="robots" content="" />
        <meta data-react-helmet="true" http-equiv="content-language" content="en" />
        <link
          data-react-helmet="true"
          rel="shortcut icon"
          href="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/logo/redesign/JUM_Symbol_Favicon_16x16px"
        />
        <link data-react-helmet="true" rel="canonical" href="https://www.jumeirah.com/en" />
        <link
          data-react-helmet="true"
          rel="alternate"
          lang="ar"
          href="https://www.jumeirah.com/ar"
        />
        <link
          data-react-helmet="true"
          rel="alternate"
          lang="x-default"
          href="https://www.jumeirah.com/en"
        />
        <link
          data-react-helmet="true"
          rel="alternate"
          lang="en"
          href="https://www.jumeirah.com/en"
        />
        <link
          data-react-helmet="true"
          rel="alternate"
          lang="de"
          href="https://www.jumeirah.com/de"
        />
        <link
          data-react-helmet="true"
          rel="alternate"
          lang="fr"
          href="https://www.jumeirah.com/fr"
        />
        <link
          data-react-helmet="true"
          rel="alternate"
          lang="ru"
          href="https://www.jumeirah.com/ru"
        />
        <link
          data-react-helmet="true"
          rel="alternate"
          lang="zh"
          href="https://www.jumeirah.com/zh"
        />
        <link
          data-react-helmet="true"
          rel="alternate"
          lang="es"
          href="https://www.jumeirah.com/es"
        />
        <link
          data-react-helmet="true"
          rel="alternate"
          lang="it"
          href="https://www.jumeirah.com/it"
        />
        <link
          data-react-helmet="true"
          rel="alternate"
          lang="id"
          href="https://www.jumeirah.com/id"
        />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="theme-color" content="#000000" />
        <meta http-equiv="X-UA-Compatible" content="IE=11" />
        <meta name="csrf-token" content="" />
        <meta name="yandex-verification" content="b635670737a668ab" />
        <script>{`if(document&&void 0!==typeof document){let e=document.getElementsByTagName("head");const n=document.createElement("script");n.src="https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.11.0/sha256.min.js",n.integrity="sha512-ILKpRqba412W8PeOVNfPfJ95lNQ5iOOqTqZNHPbpKjHaYmaxsKme/XILmAamM8qnXnYQt+fM0jI5woK2ikbh7Q==",n.crossorigin="anonymous",n.referrerpolicy="no-referrer",e&&e[0]&&e[0].appendChild(n);(()=>{if("undefined"!=typeof window&&window&&navigator.userAgent.includes("Instagram")){/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream?window.open(window.location.href,"_blank"):window.location="intent:"+window.location.href+"#Intent;end"}})()}</script><script>void 0!==typeof window&&function(){function a(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],a("consent","default",{ad_personalization:"denied",ad_storage:"denied",ad_user_data:"denied",analytics_storage:"denied",functionality_storage:"denied",personalization_storage:"denied",security_storage:"granted",wait_for_update:500,region:["GB","CN","SA","AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE","NO","IS","LI"]}),a("set","ads_data_redaction",!0),a("set","url_passthrough",!1)}(window,document)</script><script>var isB2B=function(){if(void 0!==typeof window){var n=window.location.pathname;return!(!n.includes("agent-booking")&&!n.includes("business-admin"))}},sevenRoomIframe=function(){if(void 0!==typeof window){var n=window.location.pathname;return!(!n.includes("restaurant-booking")&&!n.includes("booking/restaurant-booking"))}}</script><script>isB2B()?function(e,t,a,n,r){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],s=t.createElement(a);s.async=!0,s.src="https://www.googletagmanager.com/gtm.js?id=GTM-MJ9RN7J",m.parentNode.insertBefore(s,m)}(window,document,"script","dataLayer"):function(e,t,a,n,r){let m=e.location.pathname;if(e[n]=e[n]||[],!m.includes("recruitment-privacy-notice")&&!m.includes("recruitment-privacy-policy")&&!m.includes("Cookies-Notice-Jumeirah-Recruitment")){e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var s=t.getElementsByTagName(a)[0],i=t.createElement(a);i.async=!0,i.src="https://www.googletagmanager.com/gtm.js?id=GTM-5K3ZSGQ8",s.parentNode.insertBefore(i,s)}}(window,document,"script","dataLayer"),sevenRoomIframe()&&function(e,t,a,n,r){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],s=t.createElement(a);s.async=!0,s.src="https://www.googletagmanager.com/gtm.js?id=GTM-WG4TWX6",m.parentNode.insertBefore(s,m)}(window,document,"script","dataLayer")`}</script>
        <style>{`df-messenger{--df-messenger-button-titlebar-color:#9f9258;--df-messenger-chat-backgroundColor:#e2e2e2;--df-messenger-user-message:#f4f29d;--df-messenger-send-icon:#c5a61d}`}</style>
        <script defer src="/static/js/main.e3277042.js"></script>
        <link href="/static/css/main.8838062d.css" rel="stylesheet" />
        <script>{`(window.BOOMR_mq=window.BOOMR_mq||[]).push(["addVar",{"rua.upush":"false","rua.cpush":"false","rua.upre":"false","rua.cpre":"false","rua.uprl":"false","rua.cprl":"false","rua.cprf":"false","rua.trans":"","rua.cook":"false","rua.ims":"false","rua.ufprl":"false","rua.cfprl":"false","rua.isuxp":"false","rua.texp":"norulematch","rua.ceh":"false","rua.ueh":"false","rua.ieh.st":"0"}]);`}</script>
        <script>
          {`!function(e){var n="https://s.go-mpulse.net/boomerang/";if("False"=="True")e.BOOMR_config=e.BOOMR_config||{},e.BOOMR_config.PageParams=e.BOOMR_config.PageParams||{},e.BOOMR_config.PageParams.pci=!0,n="https://s2.go-mpulse.net/boomerang/";if(window.BOOMR_API_key="HNHQ2-3S8S4-AT4WB-V2SXU-YRK89",function(){function e(){if(!r){var e=document.createElement("script");e.id="boomr-scr-as",e.src=window.BOOMR.url,e.async=!0,o.appendChild(e),r=!0}}function t(e){r=!0;var n,t,a,i,d=document,O=window;if(window.BOOMR.snippetMethod=e?"if":"i",t=function(e,n){var t=d.createElement("script");t.id=n||"boomr-if-as",t.src=window.BOOMR.url,BOOMR_lstart=(new Date).getTime(),e=e||d.body,e.appendChild(t)},!window.addEventListener&&window.attachEvent&&navigator.userAgent.match(/MSIE [67]\./))return window.BOOMR.snippetMethod="s",void t(o,"boomr-async");a=document.createElement("IFRAME"),a.src="about:blank",a.title="",a.role="presentation",a.loading="eager",i=(a.frameElement||a).style,i.width=0,i.height=0,i.border=0,i.display="none",o.appendChild(a);try{O=a.contentWindow,d=O.document.open()}catch(_){n=document.domain,a.src="javascript:var d=document.open();d.domain='"+n+"';void 0;",O=a.contentWindow,d=O.document.open()}if(n)d._boomrl=function(){this.domain=n,t()},d.write("<bo"+"dy onload='document._boomrl();'>");else if(O._boomrl=function(){t()},O.addEventListener)O.addEventListener("load",O._boomrl,!1);else if(O.attachEvent)O.attachEvent("onload",O._boomrl);d.close()}function a(e){window.BOOMR_onload=e&&e.timeStamp||(new Date).getTime()}if(!window.BOOMR||!window.BOOMR.version&&!window.BOOMR.snippetExecuted){window.BOOMR=window.BOOMR||{},window.BOOMR.snippetStart=(new Date).getTime(),window.BOOMR.snippetExecuted=!0,window.BOOMR.snippetVersion=14,window.BOOMR.url=n+"HNHQ2-3S8S4-AT4WB-V2SXU-YRK89";var i=document.currentScript||document.getElementsByTagName("script")[0],o=i.parentNode,r=!1,d=document.createElement("link");if(d.relList&&"function"==typeof d.relList.supports&&d.relList.supports("preload")&&"as"in d)window.BOOMR.snippetMethod="p",d.href=window.BOOMR.url,d.rel="preload",d.as="script",d.addEventListener("load",e),d.addEventListener("error",function(){t(!0)}),setTimeout(function(){if(!r)t(!0)},3e3),BOOMR_lstart=(new Date).getTime(),o.appendChild(d);else t(!1);if(window.addEventListener)window.addEventListener("load",a,!1);else if(window.attachEvent)window.attachEvent("onload",a)}}(),"".length>0)if(e&&"performance"in e&&e.performance&&"function"==typeof e.performance.setResourceTimingBufferSize)e.performance.setResourceTimingBufferSize();!function(){if(BOOMR=e.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.AK){var n=""=="true"?1:0,t="",a="2b725raxfvwcmzyqzsuq-f-d47393f0e-clientnsv4-s.akamaihd.net",i="false"=="true"?2:1,o={"ak.v":"39","ak.cp":"268163","ak.ai":parseInt("165976",10),"ak.ol":"0","ak.cr":42,"ak.ipv":4,"ak.proto":"h2","ak.rid":"120a58c2","ak.r":40610,"ak.a2":n,"ak.m":"dsca","ak.n":"essl","ak.bpcip":"208.127.174.0","ak.cport":41010,"ak.gh":"23.67.40.33","ak.quicv":"","ak.tlsv":"tls1.3","ak.0rtt":"","ak.0rtt.ed":"","ak.csrc":"-","ak.acc":"","ak.t":"1729154217","ak.ak":"hOBiQwZUYzCg5VSAfCLimQ==t1Ryut3uHZwvHDb32Wn3kx6TR3RIz0HlxUSpZZX+zeTC5XDLVnKqWCoKJ8qDUTtuYpPEKNLPVp95pJ4wN97cr1+BJTqSHgAdJm/0z1uH7FT5bueD+y5ZV7XZLI/v/b7dJGQcUzkELQrmKzcDIGt5DHW/AYjgxW/3ORiFhaxDDVk5TdadQjtX0pAThM7w4CniZKL8Jyp/dNYQ/Q9HxdchCS9d505rMeZbTBUMPrT5NZVFrK9FDZElfy9bsutZ5t1waUKz21FcFOxGJcH5QNouxXSN0CHJk1wVbdFiP5ouEgHj2n4T8ff68rNrxAQp8O/GWCEyTXO/+tgk3PTJDdHZq9xaj+JEklwOGORD37va2dIOv3RABxk/noKuj2ClNWgwHK62PZAu1I+CHCc0xtIWBKvMM0M9H54eL8y9+2OKwF0=","ak.pv":"174","ak.dpoabenc":"","ak.tf":i};if(""!==t)o["ak.ruds"]=t;var r={i:!1,av:function(n){var t="http.initiator";if(n&&(!n[t]||"spa_hard"===n[t]))o["ak.feo"]=void 0!==e.aFeoApplied?1:0,BOOMR.addVar(o)},rv:function(){var e=["ak.bpcip","ak.cport","ak.cr","ak.csrc","ak.gh","ak.ipv","ak.m","ak.n","ak.ol","ak.proto","ak.quicv","ak.tlsv","ak.0rtt","ak.0rtt.ed","ak.r","ak.acc","ak.t","ak.tf"];BOOMR.removeVar(e)}};BOOMR.plugins.AK={akVars:o,akDNSPreFetchDomain:a,init:function(){if(!r.i){var e=BOOMR.subscribe;e("before_beacon",r.av,null,null),e("onbeacon",r.rv,null,null),r.i=!0}return this},is_complete:function(){return!0}}}}()}(window);`}
        </script>
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

      <body>
        <script>{`if(self==top){var theBody=document.getElementsByTagName("body")[0];theBody.style.display="block"}else top.location=self.location`}</script>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
          <div className=" container-fluid   false home      ">
            <div className="  ">
              <div className="HeaderSection w-100 p-0 index-4 "></div>
            </div>
            <div className="  ">
              <div
                className="full-bleed-rd HeroBannerWithVideo   
                  "
                id="HeroBannerWithVideo"
              >
                <div
                  className="video-background"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 45.17%, rgba(0, 0, 0, 0.32) 100%), url("https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/home/banner/burj-al-arab-jumeirah--aerial-at-sunset.jpg?h=1080&amp;w=1920&amp;modified=20240306114614")',
                    backgroundBlendMode: 'darken',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                >
                  <div className="video-foreground  ">
                    <iframe
                      id="vimeo-player"
                      className="false  not-a-reskin"
                      src=""
                      frameBorder="0"
                      allowFullScreen
                      title=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
                <div className="scroll-line">
                  <img
                    src="https://cdn.jumeirah.com/-/media/DH/Hospitality/Jumeirah/Common/Generic/scrollAnimation"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="  "></div>
            <div className="  ">
              <div className="full-bleed-rd three-column-big-card container-fluid">
                <p className="header-title">Beautiful hospitality, generously shared</p>
                <div className="header-title-line "></div>
                <div className="d-flex flex-row ">
                  <div className=" card-deck">
                    <div
                      style={{
                        backgroundColor: '#FAF8F5',
                        boxShadow: 'none',
                        width: '100%',
                        maxWidth: '448px',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                      className="story-card feature-card card"
                    >
                      <div className="card-image-wrapper" style={{ cursor: 'pointer' }}>
                        <img
                          alt="Card image cap"
                          src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/global-pages/home-page/home-page_belong-everywhere_960x1280_desktop.png?h=1280&amp;w=960&amp;modified=20240430114805"
                          width="448"
                          height="597"
                          style={{ objectFit: 'cover' }}
                          className="card-img-top"
                        />
                      </div>
                      <div className="border-anima"></div>
                      <div className="card-body">
                        <div className="d-flex flex-row justify-content-between">
                          <Link
                            className="tagline left-tagline 11"
                            href="/en/stay"
                            style={{
                              fontSize: '0.75rem',
                              textTransform: 'uppercase',
                              color: '#6D6F6E',
                              display: 'inline-block',
                              letterSpacing: '0.075rem',
                              fontWeight: '500',
                            }}
                          >
                            Hotels &amp; Resorts
                          </Link>
                        </div>
                        <h3
                          style={{
                            fontSize: '1.5rem',
                            fontFamily: 'Bressay Display,Old Standard TT,serif',
                            color: '#212322',
                            marginTop: '0.5rem',
                            fontWeight: '400',
                            letterSpacing: 'normal',
                          }}
                          className="card-title"
                        >
                          Belong everywhere.
                        </h3>
                        <p
                          style={{
                            fontSize: '0.875rem',
                            fontFamily: 'Avenir Next,Roboto,sans-serif',
                            fontWeight: '400',
                            marginTop: '0.5rem',
                            color: '#212322',
                          }}
                          className="text-lg card-text"
                        >
                          Discover hotels and resorts that make the world&quot;s farthest locations
                          feel like home.
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#FAF8F5',
                        boxShadow: 'none',
                        width: '100%',
                        maxWidth: '448px',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                      className="story-card feature-card card"
                    >
                      <div className="card-image-wrapper" style={{ cursor: 'pointer' }}>
                        <img
                          alt="Card image cap"
                          src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/global-pages/home-page/home-page_expand-your-horizons_960x1280_desktop.png?h=1280&amp;w=960&amp;modified=20240430132522"
                          width="448"
                          height="597"
                          style={{ objectFit: 'cover' }}
                          className="card-img-top"
                        />
                      </div>
                      <div className="border-anima"></div>
                      <div className="card-body">
                        <div className="d-flex flex-row justify-content-between">
                          <Link
                            className="tagline left-tagline 11"
                            href="/en/stay/exclusive-listing"
                            style={{
                              fontSize: '0.75rem',
                              textTransform: 'uppercase',
                              color: '#6D6F6E',
                              display: 'inline-block',
                              letterSpacing: '0.075rem',
                              fontWeight: '500',
                            }}
                          >
                            Suites &amp; Villas
                          </Link>
                        </div>
                        <h3
                          style={{
                            fontSize: '1.5rem',
                            fontFamily: 'Bressay Display,Old Standard TT,serif',
                            color: '#212322',
                            marginTop: '0.5rem',
                            fontWeight: '400',
                            letterSpacing: 'normal',
                          }}
                          className="card-title"
                        >
                          Expand your horizons.
                        </h3>
                        <p
                          style={{
                            fontSize: '0.875rem',
                            fontFamily: 'Avenir Next,Roboto,sans-serif',
                            fontWeight: '400',
                            marginTop: '0.5rem',
                            color: '#212322',
                          }}
                          className="text-lg card-text"
                        >
                          Explore suites and villas that take generosity to even greater lengths,
                          unique in every detail.
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#FAF8F5',
                        boxShadow: 'none',
                        width: '100%',
                        maxWidth: '448px',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                      className="story-card feature-card card"
                    >
                      <div className="card-image-wrapper" style={{ cursor: 'pointer' }}>
                        <img
                          alt="Card image cap"
                          src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/global-pages/home-page/londondinnershot_desktop_960x1280.png?h=1280&amp;w=960&amp;modified=20240430132632"
                          width="448"
                          height="597"
                          style={{ objectFit: 'cover' }}
                          className="card-img-top"
                        />
                      </div>
                      <div className="border-anima"></div>
                      <div className="card-body">
                        <div className="d-flex flex-row justify-content-between">
                          <Link
                            className="tagline left-tagline 11"
                            href="/en/dine/listing"
                            style={{
                              fontSize: '0.75rem',
                              textTransform: 'uppercase',
                              color: '#6D6F6E',
                              display: 'inline-block',
                              letterSpacing: '0.075rem',
                              fontWeight: '500',
                            }}
                          >
                            Dining &amp; restaurants
                          </Link>
                        </div>
                        <h3
                          style={{
                            fontSize: '1.5rem',
                            fontFamily: 'Bressay Display,Old Standard TT,serif',
                            color: '#212322',
                            marginTop: '0.5rem',
                            fontWeight: '400',
                            letterSpacing: 'normal',
                          }}
                          className="card-title"
                        >
                          Enrich every moment.
                        </h3>
                        <p
                          style={{
                            fontSize: '0.875rem',
                            fontFamily: 'Avenir Next,Roboto,sans-serif',
                            fontWeight: '400',
                            marginTop: '0.5rem',
                            color: '#212322',
                          }}
                          className="text-lg card-text"
                        >
                          Celebrate beauty and togetherness at our eclectic venues. Crafted with
                          precision, measured by the joy they create.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="three-column-card-cta d-flex  align-items-center justify-content-center w-100"></div>
              </div>
              <div className="full-bleed-rd ImageWithConentCenter container-fluid">
                <div
                  style={{
                    background:
                      'radial-gradient(31.25% 31.25% at 50% 50%, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.00) 100%), url("https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/global-pages/home-page/home-page_dining.png?modified=20240430132859"), lightgray -425.99px -508.877px / 164.457% 194.95% no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                  className="image-row row"
                ></div>
                <div className="centerContentBox">
                  <div className="card-body">
                    <div className="d-flex flex-row justify-content-between">
                      <Link
                        href=""
                        className="tagline left-tagline"
                        style={{
                          fontSize: '0.75rem',
                          textTransform: 'uppercase',
                          color: '#6D6F6E',
                          display: 'inline-block',
                          letterSpacing: '0.075rem',
                          fontWeight: '500',
                        }}
                      ></Link>
                    </div>
                    <h3
                      style={{
                        fontSize: '2.0rem',
                        fontFamily: 'Bressay Display,Old Standard TT,serif',
                        color: '#FAF8F5',
                        marginTop: '0.5rem',
                        fontWeight: '400',
                        letterSpacing: 'normal',
                      }}
                      className="card-title"
                    >
                      Dining
                    </h3>
                    <div
                      className="line"
                      style={{ width: '5.875rem', height: '0.0625rem', backgroundColor: '#A7A9A8' }}
                    ></div>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        fontFamily: 'Avenir Next,Roboto,sans-serif',
                        fontWeight: '400',
                        marginTop: '0.5rem',
                        color: '#FAF8F5',
                      }}
                      className="text-lg card-text"
                    >
                      Embark on a culinary journey through Michelin-starred cuisine, poolside tapas,
                      and authentic local flavours.
                    </p>
                    <Link
                      href="/en/dine/listing"
                      style={{
                        width: 'auto',
                        minWidth: '14.4375rem',
                        height: '2.0rem',
                        lineHeight: 'normal',
                        maxWidth: '100%',
                        fontFamily: 'Avenir Next,Roboto,sans-serif',
                        fontWeight: '500',
                        padding: '0 2rem',
                        color: '#212322',
                        borderColor: 'none',
                        fontSize: '0.75rem',
                        letterSpacing: '0.075rem',
                        textTransform: 'uppercase',
                        transition: 'all 0.5s ease 0s',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: 'none',
                      }}
                      target="_self"
                      className="primary-button btn btn-outline-primary btn-block"
                    >
                      Our Restaurants
                    </Link>
                  </div>
                </div>
              </div>
              <div className="full-bleed-rd ImageWithContentLeft    container-fluid">
                <div
                  style={{
                    backgroundColor: '#FAF8F5',
                    boxShadow: 'none',
                    width: '100%',
                    maxWidth: '100%',
                    border: 'none',
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    alignItems: 'flex-start',
                  }}
                  className="story-card home card"
                >
                  <div className="card-image-wrapper" style={{ cursor: 'auto' }}>
                    <img
                      alt="Card image cap"
                      src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/global-pages/home-page/home-page_jumeirah-one-membership.jpg?h=960&amp;w=1280&amp;modified=20240429180829"
                      width="802px"
                      height="802px"
                      style={{ objectFit: 'cover', width: '802px' }}
                      className="card-img-top"
                    />
                  </div>
                  <div style={{ cursor: 'auto' }}>
                    <div className="card-body">
                      <div className="d-flex flex-row justify-content-between">
                        <Link
                          href=""
                          className="tagline left-tagline"
                          style={{
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            color: '#6D6F6E',
                            display: 'inline-block',
                            letterSpacing: '0.075rem',
                            fontWeight: '500',
                          }}
                        ></Link>
                      </div>
                      <h3
                        style={{
                          fontSize: '2rem',
                          fontFamily: 'Bressay Display,Old Standard TT,serif',
                          color: '#212322',
                          marginTop: '0.5rem',
                          fontWeight: '400',
                          letterSpacing: 'normal',
                        }}
                        className="card-title"
                      >
                        Jumeirah One membership
                      </h3>
                      <div
                        className="line"
                        style={{
                          width: '5.875rem',
                          height: '0.0625rem',
                          backgroundColor: '#A7A9A8',
                        }}
                      ></div>
                      <p
                        style={{
                          fontSize: '0.875rem',
                          fontFamily: 'Avenir Next,Roboto,sans-serif',
                          fontWeight: '400',
                          marginTop: '0.5rem',
                          color: '#212322',
                        }}
                        className="text-lg card-text"
                      >
                        Exclusive rates, private access and bespoke experiences await your arrival.
                      </p>
                      <Link
                        href="/en/join-now"
                        style={{
                          width: 'auto',
                          minWidth: '14.4375rem',
                          height: '2.0rem',
                          lineHeight: 'normal',
                          maxWidth: '14.5625rem',
                          fontFamily: 'Avenir Next,Roboto,sans-serif',
                          fontWeight: '500',
                          padding: '0 2rem',
                          color: '#212322',
                          borderColor: '#212322',
                          fontSize: '0.75rem',
                          letterSpacing: '0.075rem',
                          textTransform: 'uppercase',
                          transition: 'all 0.5s ease 0s',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          boxShadow: 'none',
                        }}
                        target="_self"
                        className="primary-button btn btn-outline-primary btn-block"
                      >
                        <span className="btn-text">Join Now</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="full-bleed-rd ImageWithConentCenter container-fluid">
                <div
                  style={{
                    background:
                      'radial-gradient(31.25% 31.25% at 50% 50%, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.00) 100%), url("https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/global-pages/home-page/home-pagewellbeing.png?modified=20240430133052"), lightgray -425.99px -508.877px / 164.457% 194.95% no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                  className="image-row row"
                ></div>
                <div className="centerContentBox">
                  <div className="card-body">
                    <div className="d-flex flex-row justify-content-between">
                      <Link
                        href=""
                        className="tagline left-tagline"
                        style={{
                          fontSize: '0.75rem',
                          textTransform: 'uppercase',
                          color: '#6D6F6E',
                          display: 'inline-block',
                          letterSpacing: '0.075rem',
                          fontWeight: '500',
                        }}
                      ></Link>
                    </div>
                    <h3
                      style={{
                        fontSize: '2.0rem',
                        fontFamily: 'Bressay Display,Old Standard TT,serif',
                        color: '#FAF8F5',
                        marginTop: '0.5rem',
                        fontWeight: '400',
                        letterSpacing: 'normal',
                      }}
                      className="card-title"
                    >
                      Well-being
                    </h3>
                    <div
                      className="line"
                      style={{ width: '5.875rem', height: '0.0625rem', backgroundColor: '#A7A9A8' }}
                    ></div>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        fontFamily: 'Avenir Next,Roboto,sans-serif',
                        fontWeight: 400,
                        marginTop: '0.5rem',
                        color: '#FAF8F5',
                      }}
                      className="text-lg card-text"
                    >
                      Our experiences and rituals are carefully curated to nurture you as an
                      individual and celebrate the beauty of mind and body.
                    </p>
                    <Link
                      href="/en/rejuvenate/listing"
                      style={{
                        width: 'auto',
                        minWidth: '14.4375rem',
                        height: '2.0rem',
                        lineHeight: 'normal',
                        maxWidth: '100%',
                        fontFamily: 'Avenir Next,Roboto,sans-serif',
                        fontWeight: '500',
                        padding: '0 2rem',
                        color: '#212322',
                        borderColor: 'none',
                        fontSize: '0.75rem',
                        letterSpacing: '0.075rem',
                        textTransform: 'uppercase',
                        transition: 'all 0.5s ease 0s',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: 'none',
                      }}
                      target="_self"
                      className="primary-button btn btn-outline-primary btn-block"
                    >
                      Start your journey
                    </Link>
                  </div>
                </div>
              </div>
              <div className="full-bleed-rd FourColumnCardSlider  container-fluid">
                <div className="header-title">
                  <p className="header-title">Inspiring Stories</p>
                  <div className="header-title-line"></div>
                </div>
                <div className="d-flex flex-row justify-content-center 3">
                  <div className=" card-deck">
                    <div className="d-sm-flex justify-content-sm-center">
                      <div
                        style={{
                          backgroundColor: '#FAF8F5',
                          boxShadow: 'none',
                          width: '290px',
                          maxWidth: '290px',
                          border: 'none',
                        }}
                        className="story-card feature-card card"
                      >
                        <div className="card-image-wrapper" style={{ cursor: 'pointer' }}>
                          <img
                            alt="Card image cap"
                            src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/global-pages/home-page/uncover-the-fascinating-story-behind-jumeirah-bali--beautiful-by-design.jpg?modified=20240504110316"
                            width="290"
                            height="330"
                            style={{ objectFit: 'cover', width: '290px' }}
                            className="card-img-top"
                          />
                        </div>
                        <div className="border-anima"></div>
                        <div style={{ cursor: 'pointer' }}>
                          <div className="card-body">
                            <div className="d-flex flex-row justify-content-between">
                              <Link
                                href=""
                                className="tagline left-tagline"
                                style={{
                                  fontSize: '0.75rem',
                                  textTransform: 'uppercase',
                                  color: '#6D6F6E',
                                  display: 'inline-block',
                                  letterSpacing: '0.075rem',
                                  fontWeight: 500,
                                }}
                              ></Link>
                            </div>
                            <h3
                              style={{
                                fontSize: '1.5rem',
                                fontFamily: 'Bressay Display, Old Standard TT, serif',
                                color: '#212322',
                                marginTop: 0,
                                fontWeight: 400,
                                letterSpacing: 'normal',
                              }}
                              className="card-title"
                            >
                              Uncover the fascinating story behind Jumeirah Bali
                            </h3>
                            <p
                              style={{
                                fontSize: '0.875rem',
                                fontFamily: 'Avenir Next, Roboto, sans-serif',
                                fontWeight: 400,
                                marginTop: '0.5rem',
                                color: '#212322',
                              }}
                              className="text-lg card-text"
                            ></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-sm-flex justify-content-sm-center">
                      <div
                        style={{
                          backgroundColor: '#FAF8F5',
                          boxShadow: 'none',
                          width: '290px',
                          maxWidth: '290px',
                          border: 'none',
                        }}
                        className="story-card feature-card card"
                      >
                        <div className="card-image-wrapper" style={{ cursor: 'pointer' }}>
                          <img
                            alt="Card image cap"
                            src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/global-pages/home-page/moments-to-cherish.jpg?modified=20240504062828"
                            width="290"
                            height="330"
                            style={{ objectFit: 'cover', width: '290px' }}
                            className="card-img-top"
                          />
                        </div>
                        <div className="border-anima"></div>
                        <div style={{ cursor: 'pointer' }}>
                          <div className="card-body">
                            <div className="d-flex flex-row justify-content-between">
                              <Link
                                href=""
                                className="tagline left-tagline"
                                style={{
                                  fontSize: '0.75rem',
                                  textTransform: 'uppercase',
                                  color: '#6D6F6E',
                                  display: 'inline-block',
                                  letterSpacing: '0.075rem',
                                  fontWeight: 500,
                                }}
                              ></Link>
                            </div>
                            <h3
                              style={{
                                fontSize: '1.5rem',
                                fontFamily: '"Bressay Display", "Old Standard TT", serif',
                                color: '#212322',
                                marginTop: '0px',
                                fontWeight: 400,
                                letterSpacing: 'normal',
                              }}
                              className="card-title"
                            >
                              Inspiring change through our Arabian heritage
                            </h3>
                            <p
                              style={{
                                fontSize: '0.875rem',
                                fontFamily: '"Avenir Next", Roboto, sans-serif',
                                fontWeight: 400,
                                marginTop: '0.5rem',
                                color: '#212322',
                              }}
                              className="text-lg card-text"
                            ></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-sm-flex justify-content-sm-center">
                      <div
                        style={{
                          backgroundColor: '#FAF8F5',
                          boxShadow: 'none',
                          width: '290px',
                          maxWidth: '290px',
                          border: 'none',
                        }}
                        className="story-card feature-card card"
                      >
                        <div className="card-image-wrapper" style={{ cursor: 'pointer' }}>
                          <img
                            alt="Card image cap"
                            src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/global-pages/home-page/a-taste-of-luxury-jumeirahs-new-private-suites-and-villas-professional-excellence.jpg?modified=20240430085541"
                            width="290"
                            height="330"
                            style={{ objectFit: 'cover', width: '290px' }}
                            className="card-img-top"
                          />
                        </div>
                        <div className="border-anima"></div>
                        <div style={{ cursor: 'pointer' }}>
                          <div className="card-body">
                            <div className="d-flex flex-row justify-content-between">
                              <Link
                                href=""
                                className="tagline left-tagline"
                                style={{
                                  fontSize: '0.75rem',
                                  textTransform: 'uppercase',
                                  color: '#6D6F6E',
                                  display: 'inline-block',
                                  letterSpacing: '0.075rem',
                                  fontWeight: 500,
                                }}
                              ></Link>
                            </div>
                            <h3
                              style={{
                                fontSize: '1.5rem',
                                fontFamily: 'Bressay Display, Old Standard TT, serif',
                                color: '#212322',
                                marginTop: '0px',
                                fontWeight: 400,
                                letterSpacing: 'normal',
                              }}
                              className="card-title"
                            >
                              A taste of luxury: Jumeirah’s private suites and villas{' '}
                            </h3>
                            <p
                              style={{
                                fontSize: '0.875rem',
                                fontFamily: 'Avenir Next, Roboto, sans-serif',
                                fontWeight: 400,
                                marginTop: '0.5rem',
                                color: '#212322',
                              }}
                              className="text-lg card-text"
                            ></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-sm-flex justify-content-sm-center">
                      <div
                        style={{
                          fontSize: '1.5rem',
                          fontFamily: 'Bressay Display, Old Standard TT, serif',
                          color: '#212322',
                          marginTop: '0px',
                          fontWeight: 400,
                          letterSpacing: 'normal',
                        }}
                        className="story-card feature-card card"
                      >
                        <div className="card-image-wrapper" style={{ cursor: 'pointer' }}>
                          <img
                            alt="Card image cap"
                            src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/global-pages/home-page/be-still-my-heart-in-capri-romance-in-europe.jpg?modified=20240430085536"
                            width="290"
                            height="330"
                            style={{ objectFit: 'cover', width: '290px' }}
                            className="card-img-top"
                          />
                        </div>
                        <div className="border-anima"></div>
                        <div style={{ cursor: 'pointer' }}>
                          <div className="card-body">
                            <div className="d-flex flex-row justify-content-between">
                              <Link
                                href=""
                                className="tagline left-tagline"
                                style={{
                                  fontSize: '0.75rem',
                                  textTransform: 'uppercase',
                                  color: '#6D6F6E',
                                  display: 'inline-block',
                                  letterSpacing: '0.075rem',
                                  fontWeight: 500,
                                }}
                              ></Link>
                            </div>
                            <h3
                              style={{
                                fontSize: '1.5rem',
                                fontFamily: 'Bressay Display, Old Standard TT, serif',
                                color: '#212322',
                                marginTop: '0px',
                                fontWeight: 400,
                                letterSpacing: 'normal',
                              }}
                              className="card-title"
                            >
                              Be still my heart, in Capri
                            </h3>
                            <p
                              style={{
                                fontSize: '0.875rem',
                                fontFamily: 'Avenir Next, Roboto, sans-serif',
                                fontWeight: 400,
                                marginTop: '0.5rem',
                                color: '#212322',
                              }}
                              className="text-lg card-text"
                            ></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="more text-center">
                  <button type="button" className="stories-button btn btn-secondary">
                    More Inspiration
                  </button>
                </div>
              </div>
            </div>
            <div className="  ">
              <footer className="full-bleed-rd FooterSection  ">
                <div className="footer-section-wrap">
                  <div className="contents-wrap">
                    <div className="social-wrapper">
                      <div className="newsletter-message">
                        <Link className="connect-text" href="">
                          Let&#x27;s stay in touch
                        </Link>
                        <div className="connect-newsletter-cta">
                          <Link href="/en/newsletter/signup">
                            <button>Newsletter sign-up</button>
                          </Link>
                        </div>
                      </div>
                      <div className="email-box">
                        <input
                          name="email"
                          placeholder="YOUR EMAIL ADDRESS"
                          type="email"
                          className="form-control"
                        />
                      </div>
                      <Link
                        href="javascript:void(0)"
                        target="_self"
                        title="SUBSCRIBE"
                        className="arrow-link-molecule"
                      >
                        SUBSCRIBE
                      </Link>
                      <div className="social-icons">
                        <Link
                          href="https://www.facebook.com/Jumeirah"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/social-media/redesign2024/facebook.svg?modified=20240326070902"
                            alt=""
                          />
                        </Link>
                        <Link
                          href="https://www.instagram.com/jumeirah/?hl=en"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/social-media/redesign2024/instagram.svg?modified=20240326070904"
                            alt=""
                          />
                        </Link>
                        <Link
                          href="https://twitter.com/jumeirah"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/social-media/redesign2024/social.svg?modified=20240326070931"
                            alt=""
                          />
                        </Link>
                        <Link
                          href="https://www.youtube.com/@Jumeirah"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/social-media/redesign2024/youtube.svg?modified=20240326070905"
                            alt=""
                          />
                        </Link>
                        <Link
                          href="https://www.linkedin.com/company/jumeirah/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/social-media/redesign2024/footer/footer/social-media.svg?modified=20240508124452"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="footer-links-wrapper">
                      <div className="footer-links">
                        <div className="left-sided">
                          <ul className="link-area">
                            <li className="f-link">
                              <Link href="/en/jumeirah-group/about-jumeirah">About Jumeirah</Link>
                            </li>
                            <li className="f-link">
                              <Link href="/en/jumeirah-group/contact-us">Contact Us</Link>
                            </li>
                            <li className="f-link">
                              <Link href="/en/careers">Careers</Link>
                            </li>
                            <li className="f-link">
                              <Link href="/en/jumeirah-group/development">Hotel Development</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="right-sided">
                          <ul className="link-area">
                            <li className="f-link">
                              <Link href="/en/jumeirah-residences">Residences</Link>
                            </li>
                            <li className="f-link">
                              <Link href="/en/jumeirah-group/faq">FAQs</Link>
                            </li>
                            <li className="f-link">
                              <Link href="/en/jumeirah-group/press-centre">Press Centre</Link>
                            </li>
                            <li className="f-link">
                              <Link href="/en/jumeirah-group/terms-and-conditions/jumeirah-privacy-notice">
                                Privacy Policy
                              </Link>
                            </li>
                            <li className="f-link">
                              <Link href="/en/jumeirah-group/terms-and-conditions/cookies-notice">
                                Cookies Policy
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="copyright-text">© Jumeirah 2024</div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Layout;
