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
        {/* <title>Burberry - Prestige Brands - Coty</title> */}
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}
        <link rel="canonical" href={publicUrl} />
        <meta property="og:title" content={fields?.OgTitle?.value?.toString()} />
        <meta property="og:description" content={fields?.OgDescription?.value?.toString()} />
        <meta property="og:image" content={fields?.OgImage?.value?.src?.toString()} />
        <meta property="og:type" content={route?.templateName} data-attr="JSS-21.6.0" />
        <meta
          name="description"
          content="British luxury fashion house established in 1856 by Thomas Burberry headquartered in London, England."
        />
        <meta name="keywords" content="Burberry" />
        <link
          rel="shortcut icon"
          href="https://www.coty.com/favicon.ico"
          type="image/vnd.microsoft.icon"
        />
        <link rel="icon" href="https://www.coty.com/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="https://www.coty.com/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="https://www.coty.com/favicon-96x96.png" sizes="96x96" />
        <link
          rel="stylesheet"
          href="https://www.sportingkampenhout.be/sitecore/Cotyea348a8ec5ce6481.css"
        />
        <link
          rel="stylesheet"
          href="https://www.sportingkampenhout.be/sitecore/Coty9741213a0e947ea8.css"
        />
        <script async src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"></script>
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

        <Link href="#content" className="absolute left-[-9999px] focus:left-0 focus:top-[98px]">
          Skip to content
        </Link>

        <nav className="sticky top-0 z-50 flex w-full items-center bg-white px-6 py-6 h-24 md:px-16 md:py-8  text-blue ">
          <div className="flex w-full items-center ">
            <div className="flex w-2/12 items-center" data-testid="logotype">
              <Link
                className="z-30 flex text-2xl font-semibold transition duration-300 ease-in-out"
                aria-label="Home"
                href="/"
              >
                <svg
                  width="128"
                  height="47"
                  viewBox="0 0 110 40"
                  fill="#002554"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="z-50 transition duration-700 ease-in-out"
                >
                  <path d="M35.3832 33.7277H34.1738V39.8268H35.3832V33.7277Z"></path>
                  <path d="M53.1092 37.1595H55.2596V36.165H53.1092V34.7222H55.6489V33.7277H51.9236V39.8268H55.7071V38.8323H53.1092V37.1595Z"></path>
                  <path d="M29.3034 35.2796C29.3034 34.7968 29.8148 34.5956 30.2682 34.5956C30.6681 34.5988 31.0536 34.7436 31.355 35.0037L31.9884 34.1644C31.4633 33.7744 30.82 33.5717 30.1635 33.5896C29.1232 33.5896 28.0887 34.2277 28.0887 35.3141C28.0887 37.2974 30.9946 36.918 30.9946 38.1596C30.9905 38.2723 30.9629 38.3829 30.9137 38.4846C30.8645 38.5863 30.7947 38.6769 30.7085 38.7508C30.6224 38.8247 30.5219 38.8802 30.4131 38.914C30.3043 38.9478 30.1897 38.9591 30.0764 38.9472C29.7954 38.9381 29.5193 38.8728 29.2646 38.7552C29.0098 38.6376 28.7819 38.4702 28.5944 38.2631L27.804 39.0334C28.4155 39.6163 29.2272 39.949 30.0764 39.9647C30.3409 39.9826 30.6064 39.9482 30.8573 39.8637C31.1083 39.7792 31.3398 39.6461 31.5383 39.4722C31.7368 39.2984 31.8983 39.0872 32.0135 38.851C32.1287 38.6148 32.1953 38.3583 32.2093 38.0964C32.2093 35.9982 29.3034 36.2684 29.3034 35.2682"></path>
                  <path d="M48.058 38.959C48.6274 38.9727 49.1798 38.7665 49.5981 38.3842L50.3653 39.1372C49.7289 39.7057 48.8979 40.0139 48.0406 39.9995C47.5182 39.9844 47.0073 39.8445 46.5516 39.5917C46.0958 39.3389 45.7087 38.9808 45.4232 38.5478C45.1378 38.1149 44.9626 37.62 44.9126 37.1055C44.8625 36.591 44.9392 36.0722 45.1359 35.5934C45.3327 35.1146 45.6437 34.69 46.0424 34.3559C46.4411 34.0218 46.9156 33.7881 47.4255 33.6749C47.9353 33.5616 48.4653 33.5721 48.9702 33.7055C49.475 33.8388 49.9397 34.0911 50.3246 34.4407L49.54 35.257C49.2803 35.0249 48.9675 34.8586 48.6285 34.7725C48.2894 34.6864 47.9343 34.6829 47.5937 34.7625C47.253 34.8421 46.937 35.0022 46.6727 35.2293C46.4085 35.4563 46.2039 35.7434 46.0766 36.0659C45.9493 36.3884 45.9031 36.7367 45.9419 37.0808C45.9807 37.4249 46.1034 37.7545 46.2994 38.0413C46.4955 38.3281 46.759 38.5636 47.0673 38.7274C47.3757 38.8913 47.7196 38.9787 48.0696 38.982"></path>
                  <path d="M41.7404 37.6309V33.7277H42.8795V39.8268H42.06L38.9333 35.9063V39.8268H37.7942V33.7277H38.6136L41.7404 37.6309Z"></path>
                  <path d="M66.0748 33.5688C65.4973 33.5673 64.9426 33.7919 64.532 34.1937C64.1215 34.5955 63.8884 35.1417 63.8838 35.713C63.883 35.9917 63.9384 36.2677 64.0469 36.5249C64.1554 36.7821 64.3148 37.0153 64.5156 37.2107C64.7165 37.4062 64.9548 37.56 65.2165 37.6631C65.4783 37.7662 65.7583 37.8165 66.04 37.8112H66.0748L64.9125 39.7542H66.226L67.6789 37.3283C68.0237 36.8316 68.2246 36.2512 68.2601 35.6497C68.2534 35.3656 68.1894 35.0857 68.0718 34.8264C67.9543 34.5671 67.7855 34.3337 67.5754 34.1398C67.3653 33.946 67.1182 33.7956 66.8485 33.6975C66.5789 33.5995 66.2921 33.5557 66.0051 33.5688H66.0748ZM66.749 36.6155C66.5419 36.7128 66.3157 36.7638 66.0865 36.765C65.9427 36.7628 65.8009 36.7321 65.6694 36.6748C65.5379 36.6175 65.4193 36.5347 65.3207 36.4312C65.222 36.3278 65.1454 36.2058 65.0953 36.0726C65.0451 35.9394 65.0225 35.7975 65.0287 35.6555C65.0232 35.5178 65.0459 35.3804 65.0955 35.2516C65.145 35.1227 65.2203 35.0051 65.317 34.9058C65.4136 34.8065 65.5295 34.7275 65.6577 34.6736C65.7859 34.6197 65.9239 34.5919 66.0632 34.592C66.2037 34.589 66.3433 34.6133 66.4743 34.6637C66.6052 34.714 66.7248 34.7894 66.8263 34.8855C66.9277 34.9816 67.0091 35.0965 67.0656 35.2237C67.1222 35.3509 67.1528 35.4879 67.1558 35.6268C67.1393 35.9787 67.0112 36.3166 66.7897 36.5925"></path>
                  <path d="M72.0367 33.5665C70.4617 33.5665 69.863 34.9864 69.863 36.7167C69.863 38.447 70.4442 39.8726 72.0367 39.8726C73.6291 39.8726 74.2103 38.4527 74.2103 36.7167C74.2103 34.9807 73.6291 33.5665 72.0367 33.5665ZM72.0367 38.8264C71.3218 38.8264 71.0777 37.8664 71.0777 36.7167C71.0777 35.567 71.3218 34.6128 72.0367 34.6128C72.7515 34.6128 72.9956 35.567 72.9956 36.7167C72.9956 37.8664 72.7457 38.8264 72.0367 38.8264Z"></path>
                  <path d="M76.8544 37.3088H78.1562V35.6877L76.8544 37.3088ZM79.3418 37.3088H80.3589V38.2688H79.3418V39.6657H78.1794V38.286H75.3142V37.5905L78.5282 33.5665H79.3651L79.3418 37.3088Z"></path>
                  <path d="M58.6296 4.97365H66.9231V26.2833H72.1827V4.97365H80.4761V0.633545H58.6296V4.97365Z"></path>
                  <path d="M23.9562 3.73799C21.3115 1.28858 17.8094 -0.0508436 14.1866 0.00147707C5.94547 0.00147707 0 5.94541 0 13.4587C0 20.9719 6.02102 26.9159 14.2621 26.9159C17.8922 26.985 21.4169 25.7074 24.1422 23.3346L24.0085 23.1909L21.277 20.3166L20.8295 19.8452C19.0782 21.4461 16.7745 22.3242 14.39 22.2999C12.0476 22.2779 9.80696 21.3497 8.14791 19.714C6.48887 18.0783 5.5433 15.865 5.51367 13.5482C5.48404 11.2314 6.3727 8.99519 7.98939 7.31846C9.60607 5.64173 11.8222 4.65777 14.1633 4.57727C16.5764 4.59131 18.8871 5.54312 20.597 7.22732L23.9562 3.73799Z"></path>
                  <path d="M55.9675 13.4585C55.9675 6.02001 50.0976 0.00134277 41.9379 0.00134277C33.7781 0.00134277 27.9024 6.02001 27.9024 13.4585C27.9024 20.8971 33.7723 26.9157 41.9379 26.9157C50.1034 26.9157 55.9675 20.8971 55.9675 13.4585ZM50.6614 13.4585C50.6134 15.1529 50.0616 16.7956 49.075 18.1815C48.0884 19.5674 46.7107 20.6349 45.1141 21.2507C43.5176 21.8665 41.7729 22.0032 40.0982 21.6437C38.4236 21.2842 36.8931 20.4445 35.6982 19.2295C34.5033 18.0146 33.697 16.4782 33.3799 14.8125C33.0629 13.1468 33.2492 11.4255 33.9156 9.86397C34.582 8.30239 35.6989 6.96971 37.1267 6.03248C38.5546 5.09525 40.23 4.59504 41.9437 4.59438C43.1059 4.60557 44.2544 4.84427 45.3229 5.29669C46.3914 5.74911 47.3588 6.40631 48.1692 7.23037C48.9797 8.05442 49.6172 9.02904 50.0449 10.098C50.4726 11.1669 50.6821 12.3091 50.6614 13.4585Z"></path>
                  <path d="M103.712 0.633545H110L99.3121 16.2234V26.289H94.0756V16.2924L83.3936 0.633545H89.7517L96.7839 11.2682L103.712 0.633545Z"></path>
                  <path d="M59.635 34.4403V35.5498L60.7805 34.9232V39.6657H61.9667V33.5665H61.1294L59.635 34.4403Z"></path>
                </svg>
              </Link>
            </div>
            <div className="w-8/12">
              <ul className="hidden justify-center lg:flex lg:items-center">
                <li className="">
                  <div className="relative w-full w-fit">
                    <div className="w-full  block w-fit" data-testid="navigation-element">
                      <Link
                        aria-expanded="false"
                        aria-controls="menu-dropdown-horizontal-menu-our-purpose"
                        className="  hover-underline mx-2 block px-0 pb-1 text-center text-sm leading-none xl:mx-3 2xl:mx-4 2xl:text-base "
                        href="/our-purpose"
                      >
                        Our Purpose
                      </Link>
                    </div>
                    <div
                      className="absolute -left-4 bottom-0 translate-y-full pt-4  overflow-hidden transition-all ease-out lg:duration-[0ms] opacity-0 duration-200"
                      data-testid="menu-dropdown-horizontal-menu-our-purpose"
                      id="menu-dropdown-horizontal-menu-our-purpose"
                      style={{ maxHeight: '0px', visibility: 'hidden' }}
                    >
                      <ul className="relative flex flex-col rounded-tr-[48px] border-2 border-solid border-lightGray bg-white px-8 py-6">
                        <li className="first-of-type:pt-0 pt-2 ">
                          <span
                            className="absolute -top-[7px] z-50 inline"
                            style={{
                              left: '54.5px',
                              width: '10px',
                              height: '10px',
                              background: 'rgb(255, 255, 255)',
                              borderStyle: 'solid',
                              borderWidth: '1px 0px 0px 1px',
                              borderColor: 'lightgray transparent transparent lightgray',
                              transform: 'rotate(45deg)',
                            }}
                          ></span>
                          <Link
                            tabIndex={-1}
                            className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-sm"
                            href="/our-purpose"
                          >
                            Who We Are
                          </Link>
                        </li>
                        <li className="first-of-type:pt-0 pt-2 ">
                          <span
                            className="absolute -top-[7px] z-50 inline"
                            style={{
                              left: '54.5px',
                              width: '10px',
                              height: '10px',
                              background: 'rgb(255, 255, 255)',
                              borderStyle: 'solid',
                              borderWidth: '1px 0px 0px 1px',
                              borderColor: 'lightgray transparent transparent lightgray',
                              transform: 'rotate(45deg)',
                            }}
                          ></span>
                          <Link
                            tabIndex={-1}
                            className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-sm"
                            href="/our-heritage"
                          >
                            Our Heritage
                          </Link>
                        </li>
                        <li className="first-of-type:pt-0 pt-2 ">
                          <span
                            className="absolute -top-[7px] z-50 inline"
                            style={{
                              left: '54.5px',
                              width: '10px',
                              height: '10px',
                              background: 'rgb(255, 255, 255)',
                              borderStyle: 'solid',
                              borderWidth: '1px 0px 0px 1px',
                              borderColor: 'lightgray transparent transparent lightgray',
                              transform: 'rotate(45deg)',
                            }}
                          ></span>
                          <Link
                            tabIndex={-1}
                            className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-sm"
                            href="/our-leaders"
                          >
                            Our Leaders
                          </Link>
                        </li>
                        <li className="first-of-type:pt-0 pt-2 ">
                          <span
                            className="absolute -top-[7px] z-50 inline"
                            style={{
                              left: '54.5px',
                              width: '10px',
                              height: '10px',
                              background: 'rgb(255, 255, 255)',
                              borderStyle: 'solid',
                              borderWidth: '1px 0px 0px 1px',
                              borderColor: 'lightgray transparent transparent lightgray',
                              transform: 'rotate(45deg)',
                            }}
                          ></span>
                          <Link
                            tabIndex={-1}
                            className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-sm"
                            href="/undefine-beauty"
                          >
                            #UndefineBeauty
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="">
                  <Link
                    className="  hover-underline mx-2 block px-0 pb-1 text-center text-sm leading-none xl:mx-3 2xl:mx-4 2xl:text-base "
                    href="/our-brands"
                  >
                    Our Brands
                  </Link>
                </li>
                <li className="">
                  <div className="relative w-full w-fit">
                    <div className="w-full  block w-fit" data-testid="navigation-element">
                      <Link
                        aria-expanded="false"
                        aria-controls="menu-dropdown-horizontal-menu-sustainability"
                        className="  hover-underline mx-2 block px-0 pb-1 text-center text-sm leading-none xl:mx-3 2xl:mx-4 2xl:text-base "
                        href="/sustainability"
                      >
                        Sustainability
                      </Link>
                    </div>
                    <div
                      className="absolute -left-4 bottom-0 translate-y-full pt-4  overflow-hidden transition-all ease-out lg:duration-[0ms] opacity-0 duration-200"
                      data-testid="menu-dropdown-horizontal-menu-sustainability"
                      id="menu-dropdown-horizontal-menu-sustainability"
                      style={{ maxHeight: '0px', visibility: 'hidden' }}
                    >
                      <ul className="relative flex flex-col rounded-tr-[48px] border-2 border-solid border-lightGray bg-white px-8 py-6">
                        <li className="first-of-type:pt-0 pt-2 ">
                          <span
                            className="absolute -top-[7px] z-50 inline"
                            style={{
                              left: '68.5px',
                              width: '10px',
                              height: '10px',
                              background: 'rgb(255, 255, 255)',
                              borderStyle: 'solid',
                              borderWidth: '1px 0px 0px 1px',
                              borderColor: 'lightgray transparent transparent lightgray',
                              transform: 'rotate(45deg)',
                            }}
                          ></span>
                          <Link
                            tabIndex={-1}
                            className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-sm"
                            href="/sustainability"
                          >
                            Beauty That Lasts
                          </Link>
                        </li>
                        <li className="first-of-type:pt-0 pt-2 ">
                          <span
                            className="absolute -top-[7px] z-50 inline"
                            style={{
                              left: '68.5px',
                              width: '10px',
                              height: '10px',
                              background: 'rgb(255, 255, 255)',
                              borderStyle: 'solid',
                              borderWidth: '1px 0px 0px 1px',
                              borderColor: 'lightgray transparent transparent lightgray',
                              transform: 'rotate(45deg)',
                            }}
                          ></span>
                          <Link
                            tabIndex={-1}
                            className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-sm"
                            href="/sustainability/goals-targets"
                          >
                            Goals and Targets
                          </Link>
                        </li>
                        <li className="first-of-type:pt-0 pt-2 ">
                          <span
                            className="absolute -top-[7px] z-50 inline"
                            style={{
                              left: '68.5px',
                              width: '10px',
                              height: '10px',
                              background: 'rgb(255, 255, 255)',
                              borderStyle: 'solid',
                              borderWidth: '1px 0px 0px 1px',
                              borderColor: 'lightgray transparent transparent lightgray',
                              transform: 'rotate(45deg)',
                            }}
                          ></span>
                          <Link
                            tabIndex={-1}
                            className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-sm"
                            href="/sustainability/beauty-of-our-planet"
                          >
                            Beauty of our Planet
                          </Link>
                        </li>
                        <li className="first-of-type:pt-0 pt-2 ">
                          <span
                            className="absolute -top-[7px] z-50 inline"
                            style={{
                              left: '68.5px',
                              width: '10px',
                              height: '10px',
                              background: 'rgb(255, 255, 255)',
                              borderStyle: 'solid',
                              borderWidth: '1px 0px 0px 1px',
                              borderColor: 'lightgray transparent transparent lightgray',
                              transform: 'rotate(45deg)',
                            }}
                          ></span>
                          <Link
                            tabIndex={-1}
                            className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-sm"
                            href="/sustainability/beauty-of-our-people"
                          >
                            Beauty of our People
                          </Link>
                        </li>
                        <li className="first-of-type:pt-0 pt-2 ">
                          <span
                            className="absolute -top-[7px] z-50 inline"
                            style={{
                              left: '68.5px',
                              width: '10px',
                              height: '10px',
                              background: 'rgb(255, 255, 255)',
                              borderStyle: 'solid',
                              borderWidth: '1px 0px 0px 1px',
                              borderColor: 'lightgray transparent transparent lightgray',
                              transform: 'rotate(45deg)',
                            }}
                          ></span>
                          <Link
                            tabIndex={-1}
                            className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-sm"
                            href="/sustainability/governed-beautifully"
                          >
                            Governed Beautifully
                          </Link>
                        </li>
                        <li className="first-of-type:pt-0 pt-2 ">
                          <span
                            className="absolute -top-[7px] z-50 inline"
                            style={{
                              left: '68.5px',
                              width: '10px',
                              height: '10px',
                              background: 'rgb(255, 255, 255)',
                              borderStyle: 'solid',
                              borderWidth: '1px 0px 0px 1px',
                              borderColor: 'lightgray transparent transparent lightgray',
                              transform: 'rotate(45deg)',
                            }}
                          ></span>
                          <Link
                            tabIndex={-1}
                            className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-sm"
                            href="/sustainability/esg-reporting-hub"
                          >
                            ESG Reporting Hub
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="">
                  <Link
                    className="  hover-underline mx-2 block px-0 pb-1 text-center text-sm leading-none xl:mx-3 2xl:mx-4 2xl:text-base "
                    href="/innovation"
                  >
                    Innovation
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="  hover-underline mx-2 block px-0 pb-1 text-center text-sm leading-none xl:mx-3 2xl:mx-4 2xl:text-base "
                    href="/your-career"
                  >
                    Your Career
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="  hover-underline mx-2 block px-0 pb-1 text-center text-sm leading-none xl:mx-3 2xl:mx-4 2xl:text-base "
                    href="/news"
                  >
                    News
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex w-2/12 min-w-[80px] items-center justify-between gap-4 md:min-w-min md:justify-center md:gap-8">
              <div className="min-w-8 hidden lg:block" data-testid="countries-selector">
                <div>
                  <div className="relative inline-block text-left" data-headlessui-state="">
                    <div>
                      <span id=":r88:" className="sr-only">
                        Country
                      </span>
                      <div
                        className="border-blue inline-flex w-full justify-center border-0 border-b pt-2 text-sm font-semibold md:pt-0"
                        role="combobox"
                        aria-expanded="false"
                        aria-haspopup="menu"
                        aria-labelledby=":r88:"
                        id=":r87:"
                        data-headlessui-state=""
                        aria-controls=":r89:"
                      >
                        EN
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="text-blue -mr-1 h-5 w-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div
                      className="absolute right-0 top-2 z-10 w-10 border border-blue bg-white font-semibold md:top-0"
                      hidden={false}
                      id=":r89:"
                      role="menu"
                      tabIndex={0}
                      data-headlessui-state=""
                      style={{ display: 'none' }}
                      aria-labelledby=":r87:"
                    >
                      <button
                        className="flex w-full cursor-pointer pl-[2px] text-sm text-blue"
                        data-testid="countries-link"
                        data-option-index="0"
                        aria-current="true"
                        id="headlessui-menu-item-:r8c:"
                        role="menuitem"
                        tabIndex={-1}
                        data-headlessui-state=""
                      >
                        EN
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-4"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <button
                        className="flex w-full cursor-pointer pl-[2px] text-sm text-blue"
                        data-testid="countries-link"
                        data-option-index="1"
                        aria-current="false"
                        id="headlessui-menu-item-:r8d:"
                        role="menuitem"
                        tabIndex={-1}
                        data-headlessui-state=""
                      >
                        FR
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden h-8 gap-x-4 justify-end lg:flex">
                <Link
                  target="_blank"
                  className="min-w-[90px] border px-5 border-blue whitespace-nowrap rounded-br-2xl py-2 text-center text-base leading-4 transition duration-300 ease-in-out hover:border-transparent hover:bg-blue hover:text-white"
                  href="https://careers.coty.com/go/Open-Positions/8765801"
                >
                  OPEN POSITIONS
                </Link>
              </div>
              <button
                data-testid="search-bar"
                aria-label="Click to search"
                className="relative z-50"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="transition duration-700 ease-in-out"
                    d="M18.9388 25.4558C12.0935 25.4558 6.54426 19.9065 6.54426 13.0612C6.54426 6.21589 12.0935 0.666665 18.9388 0.666665C25.7841 0.666665 31.3333 6.21589 31.3333 13.0612C31.3333 19.9065 25.7841 25.4558 18.9388 25.4558Z"
                    stroke="#002554"
                    stroke-width="1.33333"
                  ></path>
                  <line
                    className="transition duration-700 ease-in-out"
                    x1="10.2671"
                    y1="22.6755"
                    x2="0.471133"
                    y2="32.4714"
                    stroke="#002554"
                    stroke-width="1.33333"
                  ></line>
                </svg>
              </button>
              <div className="relative z-50 block h-[26px] w-6 lg:hidden ">
                <button
                  className="flex min-h-[24px] flex-col items-center justify-between gap-y-2 py-2"
                  aria-label="Open menu"
                  aria-expanded="false"
                  aria-controls="menu-mobile"
                  aria-haspopup="true"
                >
                  <span className="h-px w-6 bg-blue transition duration-700 ease-in-out "></span>
                  <span className="h-px w-6 bg-blue transition duration-700 ease-in-out "></span>
                </button>
              </div>
            </div>
          </div>
          <div
            id="menu-mobile"
            className="fixed inset-0 z-20 overflow-auto bg-blue text-white lg:hidden"
            aria-describedby=":r8e:"
            style={{
              visibility: 'hidden',
              transform: 'translateY(-100%)',
              transition: 'transform 1000ms cubic-bezier(0.4, 0, 0.2, 1), visibility linear 1500ms',
            }}
          >
            <span id=":r8e:" className="sr-only">
              Primary mobile menu
            </span>
            <div className="mx-auto flex h-full max-w-screen-sm flex-col px-5 pt-20">
              <ul className="mt-6 border-t border-white">
                <li className="flex w-full flex-col items-center">
                  <div className="relative w-full border-b border-white">
                    <div
                      className="w-full  flex items-center justify-between"
                      data-testid="navigation-element"
                    >
                      <Link
                        aria-expanded="false"
                        aria-controls="menu-dropdown-vertical-menu-our-purpose"
                        className="  w-full py-5 text-3xl font-bold uppercase sm:text-4xl"
                        href="/our-purpose"
                      >
                        Our Purpose
                      </Link>
                      <button
                        tabIndex={-1}
                        className="p-4 transition-transform ease-out -rotate-90"
                      >
                        <svg
                          width="10"
                          height="18"
                          viewBox="0 0 10 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9 17L5 13L0.999999 9L9 1" stroke="#FFFFFF"></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className=" overflow-hidden transition-all ease-out lg:duration-[0ms] opacity-0 duration-200"
                      data-testid="menu-dropdown-vertical-menu-our-purpose"
                      id="menu-dropdown-vertical-menu-our-purpose"
                      style={{ maxHeight: '0px', visibility: 'hidden' }}
                    >
                      <ul className="relative flex flex-col rounded-tr-[48px] mb-5 bg-transparent">
                        <li className="first-of-type:pt-0 py-3 uppercase ">
                          <span
                            className="absolute -top-[7px] z-50 hidden"
                            style={{
                              left: '24px',
                              width: '10px',
                              height: '10px',
                              background: 'rgb(255, 255, 255)',
                              borderStyle: 'solid',
                              borderWidth: '1px 0px 0px 1px',
                              borderColor: 'lightgray transparent transparent lightgray',
                              transform: 'rotate(45deg);',
                            }}
                          ></span>
                          <Link
                            tabIndex={-1}
                            className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-lg"
                            href="/our-purpose"
                          >
                            Who We Are
                          </Link>
                        </li>
                        <li className="first-of-type:pt-0 py-3 uppercase ">
                          <span
                            className="absolute -top-[7px] z-50 hidden"
                            style={{
                              left: '24px',
                              width: '10px',
                              height: '10px',
                              background: 'rgb(255, 255, 255)',
                              borderStyle: 'solid',
                              borderWidth: '1px 0px 0px 1px',
                              borderColor: 'lightgray transparent transparent lightgray',
                              transform: 'rotate(45deg);',
                            }}
                          ></span>
                          <Link
                            tabIndex={-1}
                            className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-lg"
                            href="/our-heritage"
                          >
                            Our Heritage
                          </Link>
                        </li>
                        <li className="first-of-type:pt-0 py-3 uppercase ">
                          <span
                            className="absolute -top-[7px] z-50 hidden"
                            style={{
                              left: '24px',
                              width: '10px',
                              height: '10px',
                              background: 'rgb(255, 255, 255)',
                              borderStyle: 'solid',
                              borderWidth: '1px 0px 0px 1px',
                              borderColor: 'lightgray transparent transparent lightgray',
                              transform: 'rotate(45deg);',
                            }}
                          ></span>
                          <Link
                            tabIndex={-1}
                            className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-lg"
                            href="/our-leaders"
                          >
                            Our Leaders
                          </Link>
                        </li>
                        <li className="first-of-type:pt-0 py-3 uppercase ">
                          <span
                            className="absolute -top-[7px] z-50 hidden"
                            style={{
                              left: '24px',
                              width: '10px',
                              height: '10px',
                              background: 'rgb(255, 255, 255)',
                              borderStyle: 'solid',
                              borderWidth: '1px 0px 0px 1px',
                              borderColor: 'lightgray transparent transparent lightgray',
                              transform: 'rotate(45deg);',
                            }}
                          ></span>
                          <Link
                            tabIndex={-1}
                            className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-lg"
                            href="/undefine-beauty"
                          >
                            #UndefineBeauty
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="flex w-full flex-col items-center">
                  <Link
                    className="border-b border-white  w-full py-5 text-3xl font-bold uppercase sm:text-4xl"
                    href="/our-brands"
                  >
                    Our Brands
                  </Link>
                </li>
                <li className="flex w-full flex-col items-center">
                  <div className="relative w-full border-b border-white">
                    <div
                      className="w-full  flex items-center justify-between"
                      data-testid="navigation-element"
                    >
                      <Link
                        aria-expanded="false"
                        aria-controls="menu-dropdown-vertical-menu-sustainability"
                        className="  w-full py-5 text-3xl font-bold uppercase sm:text-4xl"
                        href="/sustainability"
                      >
                        Sustainability
                      </Link>
                      <button
                        tabIndex={-1}
                        className="p-4 transition-transform ease-out -rotate-90"
                      >
                        <svg
                          width="10"
                          height="18"
                          viewBox="0 0 10 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9 17L5 13L0.999999 9L9 1" stroke="#FFFFFF"></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className=" overflow-hidden transition-all ease-out lg:duration-[0ms] opacity-0 duration-200"
                      data-testid="menu-dropdown-vertical-menu-sustainability"
                      id="menu-dropdown-vertical-menu-sustainability"
                      style={{ maxHeight: '0px', visibility: 'hidden' }}
                    >
                      <ul className="relative flex flex-col rounded-tr-[48px] mb-5 bg-transparent">
                        <li className="first-of-type:pt-0 py-3 uppercase ">
                          <span
                            className="absolute -top-[7px] z-50 hidden"
                            style={{
                              left: '24px',
                              width: '10px',
                              height: '10px',
                              background: 'rgb(255, 255, 255)',
                              borderStyle: 'solid',
                              borderWidth: '1px 0px 0px 1px',
                              borderColor: 'lightgray transparent transparent lightgray',
                              transform: 'rotate(45deg);',
                            }}
                          ></span>
                          <Link
                            tabIndex={-1}
                            className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-lg"
                            href="/sustainability"
                          >
                            Beauty That Lasts
                          </Link>
                        </li>
                        <li className="first-of-type:pt-0 py-3 uppercase ">
                          <span
                            className="absolute -top-[7px] z-50 hidden"
                            style={{
                              left: '24px',
                              width: '10px',
                              height: '10px',
                              background: 'rgb(255, 255, 255)',
                              borderStyle: 'solid',
                              borderWidth: '1px 0px 0px 1px',
                              borderColor: 'lightgray transparent transparent lightgray',
                              transform: 'rotate(45deg);',
                            }}
                          ></span>
                          <Link
                            tabIndex={-1}
                            className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-lg"
                            href="/sustainability/goals-targets"
                          >
                            Goals and Targets
                          </Link>
                        </li>
                        <li className="first-of-type:pt-0 py-3 uppercase ">
                          <span
                            className="absolute -top-[7px] z-50 hidden"
                            style={{
                              left: '24px',
                              width: '10px',
                              height: '10px',
                              background: 'rgb(255, 255, 255)',
                              borderStyle: 'solid',
                              borderWidth: '1px 0px 0px 1px',
                              borderColor: 'lightgray transparent transparent lightgray',
                              transform: 'rotate(45deg);',
                            }}
                          ></span>
                          <Link
                            tabIndex={-1}
                            className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-lg"
                            href="/sustainability/beauty-of-our-planet"
                          >
                            Beauty of our Planet
                          </Link>
                        </li>
                        <li className="first-of-type:pt-0 py-3 uppercase ">
                          <span
                            className="absolute -top-[7px] z-50 hidden"
                            style={{
                              left: '24px',
                              width: '10px',
                              height: '10px',
                              background: 'rgb(255, 255, 255)',
                              borderStyle: 'solid',
                              borderWidth: '1px 0px 0px 1px',
                              borderColor: 'lightgray transparent transparent lightgray',
                              transform: 'rotate(45deg);',
                            }}
                          ></span>
                          <Link
                            tabIndex={-1}
                            className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-lg"
                            href="/sustainability/beauty-of-our-people"
                          >
                            Beauty of our People
                          </Link>
                        </li>
                        <li className="first-of-type:pt-0 py-3 uppercase ">
                          <span
                            className="absolute -top-[7px] z-50 hidden"
                            style={{
                              left: '24px',
                              width: '10px',
                              height: '10px',
                              background: 'rgb(255, 255, 255)',
                              borderStyle: 'solid',
                              borderWidth: '1px 0px 0px 1px',
                              borderColor: 'lightgray transparent transparent lightgray',
                              transform: 'rotate(45deg)',
                            }}
                          ></span>
                          <Link
                            tabIndex={-1}
                            className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-lg"
                            href="/sustainability/governed-beautifully"
                          >
                            Governed Beautifully
                          </Link>
                        </li>
                        <li className="first-of-type:pt-0 py-3 uppercase ">
                          <span
                            className="absolute -top-[7px] z-50 hidden"
                            style={{
                              left: '24px',
                              width: '10px',
                              height: '10px',
                              background: 'rgb(255, 255, 255)',
                              borderStyle: 'solid',
                              borderWidth: '1px 0px 0px 1px',
                              borderColor: 'lightgray transparent transparent lightgray',
                              transform: 'rotate(45deg);',
                            }}
                          ></span>
                          <Link
                            tabIndex={-1}
                            className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-lg"
                            href="/sustainability/esg-reporting-hub"
                          >
                            ESG Reporting Hub
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="flex w-full flex-col items-center">
                  <Link
                    className="border-b border-white  w-full py-5 text-3xl font-bold uppercase sm:text-4xl"
                    href="/innovation"
                  >
                    Innovation
                  </Link>
                </li>
                <li className="flex w-full flex-col items-center">
                  <Link
                    className="border-b border-white  w-full py-5 text-3xl font-bold uppercase sm:text-4xl"
                    href="/your-career"
                  >
                    Your Career
                  </Link>
                </li>
                <li className="flex w-full flex-col items-center">
                  <Link
                    className="border-b border-white  w-full py-5 text-3xl font-bold uppercase sm:text-4xl"
                    href="/news"
                  >
                    News
                  </Link>
                </li>
              </ul>
              <div className="mt-[42px] flex justify-evenly gap-y-4 mb-4">
                <Link
                  target="_blank"
                  className="text-xl font-medium uppercase opacity-60 transition duration-300 ease-in-out hover:opacity-100"
                  href="https://careers.coty.com/go/Open-Positions/8765801"
                >
                  Open positions
                </Link>
                <Link
                  target="_blank"
                  className="text-xl font-medium uppercase opacity-60 transition duration-300 ease-in-out hover:opacity-100"
                  href="/news"
                >
                  News
                </Link>
              </div>
              <div className="mt-[42px] flex justify-evenly gap-y-4 pb-8">
                <div className="flex justify-center gap-[1.6rem] mt-2 flex w-full max-w-[136px] items-center justify-between self-center">
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    data-testid="social-list-item"
                    href="https://www.facebook.com/COTYInc/?ref=page_internal"
                  >
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'inline-block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: '0px',
                        margin: '0px',
                        padding: '0px',
                        position: 'relative',
                        maxWidth: '100%',
                      }}
                    >
                      <span
                        style={{
                          boxSizing: 'border-box',
                          display: 'block',
                          width: 'initial',
                          height: 'initial',
                          background: 'none',
                          opacity: 1,
                          border: '0px',
                          margin: '0px',
                          padding: '0px',
                          maxWidth: '100%',
                        }}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e"
                          style={{
                            display: 'block',
                            maxWidth: '100%',
                            width: 'initial',
                            height: 'initial',
                            background: 'none',
                            opacity: 1,
                            border: '0px',
                            margin: '0px',
                            padding: '0px',
                          }}
                        />
                      </span>
                      <img
                        alt="facebook.svg"
                        srcSet="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt2f59f9a354f27e0a/623b141f7c24b44cb0bf3d68/facebook.svg?width=16&amp;quality=50&amp;auto=webp 1x, https://images.contentstack.io/v3/assets/blted39bd312054daca/blt2f59f9a354f27e0a/623b141f7c24b44cb0bf3d68/facebook.svg?width=32&amp;quality=50&amp;auto=webp 2x"
                        src="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt2f59f9a354f27e0a/623b141f7c24b44cb0bf3d68/facebook.svg?width=32&amp;quality=50&amp;auto=webp"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="cursor-pointer"
                        style={{
                          position: 'absolute',
                          inset: '0px',
                          boxSizing: 'border-box',
                          padding: '0px',
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: '0px',
                          height: '0px',
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                        }}
                      />
                    </span>
                  </Link>
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    data-testid="social-list-item"
                    href="https://twitter.com/COTYInc"
                  >
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'inline-block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: '0px',
                        margin: '0px',
                        padding: '0px',
                        position: 'relative',
                        maxWidth: '100%;',
                      }}
                    >
                      <span
                        style={{
                          boxSizing: 'border-box',
                          display: 'block',
                          width: 'initial',
                          height: 'initial',
                          background: 'none',
                          opacity: 1,
                          border: '0px',
                          margin: '0px',
                          padding: '0px',
                          maxWidth: '100%',
                        }}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e"
                          style={{
                            display: 'block',
                            maxWidth: '100%',
                            width: 'initial',
                            height: 'initial',
                            background: 'none',
                            opacity: 1,
                            border: '0px',
                            margin: '0px',
                            padding: '0px',
                          }}
                        />
                      </span>
                      <img
                        alt="twitter.svg"
                        srcSet="https://images.contentstack.io/v3/assets/blted39bd312054daca/bltae3da7ec72868e4a/623b157398622e5de9392b40/twitter.svg?width=16&amp;quality=50&amp;auto=webp 1x, https://images.contentstack.io/v3/assets/blted39bd312054daca/bltae3da7ec72868e4a/623b157398622e5de9392b40/twitter.svg?width=32&amp;quality=50&amp;auto=webp 2x"
                        src="https://images.contentstack.io/v3/assets/blted39bd312054daca/bltae3da7ec72868e4a/623b157398622e5de9392b40/twitter.svg?width=32&amp;quality=50&amp;auto=webp"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="cursor-pointer"
                        style={{
                          position: 'absolute',
                          inset: '0px',
                          boxSizing: 'border-box',
                          padding: '0px',
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: '0px',
                          height: '0px',
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                        }}
                      />
                    </span>
                  </Link>
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    data-testid="social-list-item"
                    href="https://www.instagram.com/cotyinc"
                  >
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'inline-block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: '0px',
                        margin: '0px',
                        padding: '0px',
                        position: 'relative',
                        maxWidth: '100%',
                      }}
                    >
                      <span
                        style={{
                          boxSizing: 'border-box',
                          display: 'block',
                          width: 'initial',
                          height: 'initial',
                          background: 'none',
                          opacity: 1,
                          border: '0px',
                          margin: '0px',
                          padding: '0px',
                          maxWidth: '100%',
                        }}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e"
                          style={{
                            display: 'block',
                            maxWidth: '100%',
                            width: 'initial',
                            height: 'initial',
                            background: 'none',
                            opacity: 1,
                            border: '0px',
                            margin: '0px',
                            padding: '0px',
                          }}
                        />
                      </span>
                      <img
                        alt="instagram.svg"
                        srcSet="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt1385c7d5d3fc46d9/623b14ac159fc76504c17780/instagram.svg?width=16&amp;quality=50&amp;auto=webp 1x, https://images.contentstack.io/v3/assets/blted39bd312054daca/blt1385c7d5d3fc46d9/623b14ac159fc76504c17780/instagram.svg?width=32&amp;quality=50&amp;auto=webp 2x"
                        src="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt1385c7d5d3fc46d9/623b14ac159fc76504c17780/instagram.svg?width=32&amp;quality=50&amp;auto=webp"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="cursor-pointer"
                        style={{
                          position: 'absolute',
                          inset: '0px',
                          boxSizing: 'border-box',
                          padding: '0px',
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: '0px',
                          height: '0px',
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                        }}
                      />
                    </span>
                  </Link>
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    data-testid="social-list-item"
                    href="https://in.linkedin.com/company/coty"
                  >
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'inline-block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: '0px',
                        margin: '0px',
                        padding: '0px',
                        position: 'relative',
                        maxWidth: '100%',
                      }}
                    >
                      <span
                        style={{
                          boxSizing: 'border-box',
                          display: 'block',
                          width: 'initial',
                          height: 'initial',
                          background: 'none',
                          opacity: 1,
                          border: '0px',
                          margin: '0px',
                          padding: '0px',
                          maxWidth: '100%',
                        }}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e"
                          style={{
                            display: 'block',
                            maxWidth: '100%',
                            width: 'initial',
                            height: 'initial',
                            background: 'none',
                            opacity: 1,
                            border: '0px',
                            margin: '0px',
                            padding: '0px',
                          }}
                        />
                      </span>
                      <img
                        alt="linkedin.svg"
                        srcSet="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt69d99ba37c9de5ba/623b15c3714afc639a7b22cb/linkedin.svg?width=16&amp;quality=50&amp;auto=webp 1x, https://images.contentstack.io/v3/assets/blted39bd312054daca/blt69d99ba37c9de5ba/623b15c3714afc639a7b22cb/linkedin.svg?width=32&amp;quality=50&amp;auto=webp 2x"
                        src="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt69d99ba37c9de5ba/623b15c3714afc639a7b22cb/linkedin.svg?width=32&amp;quality=50&amp;auto=webp"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="cursor-pointer"
                        style={{
                          position: 'absolute',
                          inset: '0px',
                          boxSizing: 'border-box',
                          padding: '0px',
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: '0px',
                          height: '0px',
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                        }}
                      />
                    </span>
                  </Link>
                </div>
                <div className="block max-w-[50px] lg:hidden">
                  <div>
                    <div className="relative inline-block text-left" data-headlessui-state="">
                      <div>
                        <span id=":r8g:" className="sr-only">
                          Country
                        </span>
                        <div
                          className="border-white inline-flex w-full justify-center border-0 border-b pt-2 text-sm font-semibold md:pt-0"
                          role="combobox"
                          aria-expanded="false"
                          aria-haspopup="menu"
                          aria-labelledby=":r8g:"
                          id=":r8f:"
                          data-headlessui-state=""
                          aria-controls=":r8h:"
                        >
                          EN
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="text-white -mr-1 h-5 w-5"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div
                        className="absolute right-0 top-2 z-10 w-10 border border-blue bg-white font-semibold md:top-0"
                        hidden={false}
                        id=":r8h:"
                        role="menu"
                        tabIndex={0}
                        data-headlessui-state=""
                        aria-labelledby=":r8f:"
                        style={{ display: 'none' }}
                      >
                        <button
                          className="flex w-full cursor-pointer pl-[2px] text-sm text-blue"
                          data-testid="countries-link"
                          data-option-index="0"
                          aria-current="true"
                          id="headlessui-menu-item-:r8k:"
                          role="menuitem"
                          tabIndex={-1}
                          data-headlessui-state=""
                        >
                          EN
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="w-4"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                        <button
                          className="flex w-full cursor-pointer pl-[2px] text-sm text-blue"
                          data-testid="countries-link"
                          data-option-index="1"
                          aria-current="false"
                          id="headlessui-menu-item-:r8l:"
                          role="menuitem"
                          tabIndex={-1}
                          data-headlessui-state=""
                        >
                          FR
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main id="content" tabIndex={-1}>
          <h1 className="sr-only">Page Details - Brand Page - Burberry</h1>
          <div className="pt-24">
            <div className="absolute z-[9] ml-16 mt-5 hidden md:block">
              <ul className="flex" aria-label="Breadcrumb">
                <li className="opacity-[0.56] last-of-type:font-bold last-of-type:opacity-100">
                  <Link href="/">
                    <Link className="flex cursor-pointer items-center text-xs !text-white" href="">
                      HOMEPAGE
                    </Link>
                  </Link>
                </li>
                <li className="opacity-[0.56] last-of-type:font-bold last-of-type:opacity-100">
                  <Link href="/our-brands">
                    <Link className="flex cursor-pointer items-center text-xs !text-white" href="">
                      <svg
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-2 !stroke-white"
                      >
                        <path d="M5 9L1 5L5 1" />
                      </svg>
                      OUR BRANDS
                    </Link>
                  </Link>
                </li>
                <li className="opacity-[0.56] last-of-type:font-bold last-of-type:opacity-100">
                  <Link href="/our-brands/prestige-brands">
                    <Link className="flex cursor-pointer items-center text-xs !text-white" href="">
                      <svg
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-2 !stroke-white"
                      >
                        <path d="M5 9L1 5L5 1" />
                      </svg>
                      PRESTIGE BRANDS
                    </Link>
                  </Link>
                </li>
                <li className="opacity-[0.56] last-of-type:font-bold last-of-type:opacity-100">
                  <span className="flex items-center text-xs !text-white" aria-current="page">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-2 !stroke-white"
                    >
                      <path d="M5 9L1 5L5 1" />
                    </svg>
                    BURBERRY
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <div style={{ willChange: 'transform', transform: 'translateY(-3.16949%)' }}>
                <div className="banner_gradient__7umfc relative h-[440px] overflow-hidden rounded-br-[195px] md:rounded-br-[272px]">
                  <div className="block z-0 w-full overflow-hidden">
                    <img
                      alt="Burberry Hero Banner"
                      src="https://images.contentstack.io/v3/assets/blted39bd312054daca/bltee9c547f629408c0/634e7b4f885d1d218e4873ca/burberry-hero-banner-s.jpg?width=3840&quality=100&auto=webp"
                      // layout="fill"
                      // objectFit="cover"
                      // priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center pb-10 pt-[60px] md:pb-16 md:pt-20">
              <div className="relative h-20 w-2/3 md:h-32 md:w-1/2 max-h-[64px]">
                <Link target="_blank" rel="noopener noreferrer" href="https://www.burberry.com">
                  <img
                    alt="Burberry Logo"
                    src="https://images.contentstack.io/v3/assets/blted39bd312054daca/bltb7053bcb8736c65e/634e7b4fe20f8c3ac1fd75d4/burberry-logo.svg?width=3840&quality=50&auto=webp"
                    // layout="fill"
                    // objectFit="contain"
                  />
                </Link>
              </div>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold tracking-wider text-blue underline underline-offset-[7px] even:mt-5 md:even:mt-[35px]"
                href="https://www.burberry.com"
              >
                VISIT WEBSITE
              </Link>
            </div>
          </div>
        </main>

        <footer className="relative z-10 flex min-h-[66.66vh] flex-col bg-blue px-6 pb-8 text-white md:min-h-[50vh] md:px-12">
          <div className="grid md:grid-cols-2">
            <p className="word-spacing-max pl-0 pt-24 text-left text-[3.5rem] font-bold leading-[4rem] md:text-[66px] lg:pl-20 lg:text-[80px] lg:leading-[88px]">
              FEARLESS. FORWARD. YOU.
            </p>
            <div className="md:ml-12 lg:ml-40">
              <div className="space-between mt-10 flex flex-row text-sm leading-6 md:mt-24">
                <div className="flex-1 pr-3 last:pr-0">
                  <ul className="max-w-[230px] space-y-2">
                    <li>
                      <Link className="hover:underline" href="/contact-us">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://supplier.coty.com"
                        className="hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Supplier Portal
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:underline" href="/terms-use">
                        Terms of Use
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://careers.coty.com/"
                        className="hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://investors.coty.com/home/default.aspx"
                        className="hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Investors
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://assets.contentstack.io/v3/assets/blted39bd312054daca/blt46196b3a33d2d0ca/Coty-Modern-Slavery-Statement-2024.pdf"
                        className="hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Modern Slavery Act &amp; Transparency in Supply Chains Statement
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 pr-3 last:pr-0">
                  <ul className="max-w-[230px] space-y-2">
                    <li>
                      <Link className="hover:underline" href="/faq">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:underline" href="/sustainability/esg-reporting-hub">
                        Our Policies
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:underline" href="/privacy-policy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:underline" href="/cookie-policy">
                        Cookie Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://app.convercent.com/en-us/LandingPage/5c667d90-60bd-e711-80df-000d3ab6ebad"
                        className="hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ethics &amp; Compliance Hotline
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 flex flex-col items-center text-sm sm:items-start">
                <div className="mb-4 hidden md:block">Follow Coty</div>
                <div className="flex justify-center gap-[1.6rem] w-full max-w-[188px] justify-between md:max-w-[176px]">
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    data-testid="social-list-item"
                    href="https://www.facebook.com/COTYInc/?ref=page_internal"
                  >
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'inline-block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: '0',
                        margin: '0',
                        padding: '0',
                        position: 'relative',
                        maxWidth: '100%',
                      }}
                    >
                      <span
                        style={{
                          boxSizing: 'border-box',
                          display: 'block',
                          width: 'initial',
                          height: 'initial',
                          background: 'none',
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: '100%',
                        }}
                      >
                        <img
                          style={{
                            display: 'block',
                            maxWidth: '100%',
                            width: 'initial',
                            height: 'initial',
                            background: 'none',
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e"
                        />
                      </span>
                      <img
                        alt="facebook.svg"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="cursor-pointer"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                        }}
                      />
                      <noscript>
                        <img
                          alt="facebook.svg"
                          loading="lazy"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'none',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                          }}
                          className="cursor-pointer"
                          srcSet="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt2f59f9a354f27e0a/623b141f7c24b44cb0bf3d68/facebook.svg?width=32&amp;quality=50&amp;auto=webp 1x, https://images.contentstack.io/v3/assets/blted39bd312054daca/blt2f59f9a354f27e0a/623b141f7c24b44cb0bf3d68/facebook.svg?width=48&amp;quality=50&amp;auto=webp 2x"
                          src="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt2f59f9a354f27e0a/623b141f7c24b44cb0bf3d68/facebook.svg?width=48&amp;quality=50&amp;auto=webp"
                        />
                      </noscript>
                    </span>
                  </Link>
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    data-testid="social-list-item"
                    href="https://twitter.com/COTYInc"
                  >
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'inline-block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: '0',
                        margin: '0',
                        padding: '0',
                        position: 'relative',
                        maxWidth: '100%',
                      }}
                    >
                      <span
                        style={{
                          boxSizing: 'border-box',
                          display: 'block',
                          width: 'initial',
                          height: 'initial',
                          background: 'none',
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: '100%',
                        }}
                      >
                        <img
                          style={{
                            display: 'block',
                            maxWidth: '100%',
                            width: 'initial',
                            height: 'initial',
                            background: 'none',
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e"
                        />
                      </span>
                      <img
                        alt="twitter.svg"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="cursor-pointer"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                        }}
                      />
                      <noscript>
                        <img
                          alt="twitter.svg"
                          loading="lazy"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'none',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                          }}
                          className="cursor-pointer"
                          srcSet="https://images.contentstack.io/v3/assets/blted39bd312054daca/bltae3da7ec72868e4a/623b157398622e5de9392b40/twitter.svg?width=32&amp;quality=50&amp;auto=webp 1x, https://images.contentstack.io/v3/assets/blted39bd312054daca/bltae3da7ec72868e4a/623b157398622e5de9392b40/twitter.svg?width=48&amp;quality=50&amp;auto=webp 2x"
                          src="https://images.contentstack.io/v3/assets/blted39bd312054daca/bltae3da7ec72868e4a/623b157398622e5de9392b40/twitter.svg?width=48&amp;quality=50&amp;auto=webp"
                        />
                      </noscript>
                    </span>
                  </Link>
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    data-testid="social-list-item"
                    href="https://www.instagram.com/cotyinc"
                  >
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'inline-block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: '0',
                        margin: '0',
                        padding: '0',
                        position: 'relative',
                        maxWidth: '100%',
                      }}
                    >
                      <span
                        style={{
                          boxSizing: 'border-box',
                          display: 'block',
                          width: 'initial',
                          height: 'initial',
                          background: 'none',
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: '100%',
                        }}
                      >
                        <img
                          style={{
                            display: 'block',
                            maxWidth: '100%',
                            width: 'initial',
                            height: 'initial',
                            background: 'none',
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e"
                        />
                      </span>
                      <img
                        alt="instagram.svg"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="cursor-pointer"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                        }}
                      />
                      <noscript>
                        <img
                          alt="instagram.svg"
                          loading="lazy"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'none',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                          }}
                          className="cursor-pointer"
                          srcSet="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt1385c7d5d3fc46d9/623b14ac159fc76504c17780/instagram.svg?width=32&amp;quality=50&amp;auto=webp 1x, https://images.contentstack.io/v3/assets/blted39bd312054daca/blt1385c7d5d3fc46d9/623b14ac159fc76504c17780/instagram.svg?width=48&amp;quality=50&amp;auto=webp 2x"
                          src="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt1385c7d5d3fc46d9/623b14ac159fc76504c17780/instagram.svg?width=48&amp;quality=50&amp;auto=webp"
                        />
                      </noscript>
                    </span>
                  </Link>
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    data-testid="social-list-item"
                    href="https://in.linkedin.com/company/coty"
                  >
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'inline-block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: '0',
                        margin: '0',
                        padding: '0',
                        position: 'relative',
                        maxWidth: '100%',
                      }}
                    >
                      <span
                        style={{
                          boxSizing: 'border-box',
                          display: 'block',
                          width: 'initial',
                          height: 'initial',
                          background: 'none',
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: '100%',
                        }}
                      >
                        <img
                          style={{
                            display: 'block',
                            maxWidth: '100%',
                            width: 'initial',
                            height: 'initial',
                            background: 'none',
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e"
                        />
                      </span>
                      <img
                        alt="linkedin.svg"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="cursor-pointer"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                        }}
                      />
                      <noscript>
                        <img
                          alt="linkedin.svg"
                          loading="lazy"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'none',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                          }}
                          className="cursor-pointer"
                          srcSet="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt69d99ba37c9de5ba/623b15c3714afc639a7b22cb/linkedin.svg?width=32&amp;quality=50&amp;auto=webp 1x, https://images.contentstack.io/v3/assets/blted39bd312054daca/blt69d99ba37c9de5ba/623b15c3714afc639a7b22cb/linkedin.svg?width=48&amp;quality=50&amp;auto=webp 2x"
                          src="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt69d99ba37c9de5ba/623b15c3714afc639a7b22cb/linkedin.svg?width=48&amp;quality=50&amp;auto=webp"
                        />
                      </noscript>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[50px] flex flex-row items-center md:mt-20">
            <div className="h-1 grow border-t border-white"></div>
            <div className="mx-4">
              <svg
                width="80"
                height="80"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[56px] w-[56px] fill-white md:h-[80px] md:w-[80px]"
              >
                <path
                  d="M28 3.24231e-06C22.4621 3.24231e-06 17.0486 1.64222 12.4441 4.7189C7.83949 7.79558 4.25064 12.1686 2.13139 17.2849C0.0121364 22.4012 -0.542363 28.0311 0.538023 33.4625C1.61841 38.894 4.28517 43.8831 8.20103 47.799C12.1169 51.7149 17.106 54.3816 22.5375 55.462C27.9689 56.5424 33.5988 55.9879 38.7151 53.8686C43.8315 51.7494 48.2045 48.1605 51.2811 43.556C54.3578 38.9514 56 33.5379 56 28C56.0018 24.3225 55.2787 20.6807 53.8722 17.2828C52.4657 13.8848 50.4033 10.7975 47.8029 8.19712C45.2025 5.59673 42.1152 3.53431 38.7172 2.12781C35.3193 0.721303 31.6775 -0.00176692 28 3.24231e-06ZM54.101 23.3266C51.0815 21.8688 47.7833 21.0787 44.431 21.0101C42.1568 21.0213 39.9087 21.4965 37.8245 22.4066C35.7403 23.3167 33.8638 24.6426 32.3098 26.3031C30.9397 27.7466 29.8118 29.4021 28.9697 31.2054C29.1794 27.8461 29.8734 24.5346 31.0303 21.3737C31.8411 19.1765 33.1397 17.1919 34.8283 15.569C36.6152 13.9639 38.8637 12.9646 41.2525 12.7138C42.7245 12.5144 44.2216 12.617 45.6526 13.0153C47.0836 13.4136 48.4184 14.0992 49.5757 15.0303C51.9145 17.0338 53.4893 19.7837 54.0336 22.8148C54.0336 22.9899 54.101 23.1515 54.1279 23.3266H54.101ZM52.0404 24.0404C51.1615 24.357 50.3386 24.8117 49.6027 25.3872C48.568 26.3238 47.6295 27.3615 46.8013 28.4849C45.0951 30.8492 42.9785 32.8882 40.5522 34.505C36.9832 36.574 32.9195 37.6353 28.7946 37.5758C29.0699 33.7197 30.6905 30.0828 33.3737 27.2997C34.7881 25.7793 36.4988 24.5648 38.4005 23.7309C40.3022 22.8971 42.3545 22.4616 44.431 22.4512C47.0318 22.5003 49.6017 23.0252 52.0134 24L52.0404 24.0404ZM28 26.6936C27.668 24.6735 27.1309 22.6925 26.3973 20.7812C24.2963 15.4883 20.8485 12.3368 16.1347 11.3536C17.5871 9.61643 19.403 8.21912 21.4543 7.26034C23.5057 6.30157 25.7424 5.80463 28.0067 5.80463C30.2711 5.80463 32.5078 6.30157 34.5591 7.26034C36.6105 8.21912 38.4264 9.61643 39.8788 11.3536C35.1515 12.3098 31.7172 15.394 29.6162 20.7812C28.8841 22.694 28.3427 24.6744 28 26.6936ZM28 1.45457C32.4599 1.45242 36.8483 2.57576 40.7586 4.72046C44.669 6.86517 47.975 9.96187 50.3703 13.7239C47.8763 11.7813 44.7381 10.8572 41.5892 11.1381C40.0088 9.02794 37.9585 7.31504 35.6008 6.13524C33.2432 4.95545 30.6431 4.34118 28.0067 4.34118C25.3704 4.34118 22.7703 4.95545 20.4126 6.13524C18.055 7.31504 16.0047 9.02794 14.4242 11.1381C11.2754 10.8572 8.13719 11.7813 5.64311 13.7239C8.0345 9.96118 11.3378 6.8636 15.2462 4.71865C19.1547 2.57371 23.5417 1.45095 28 1.45457ZM2.00677 22.8014C2.5658 19.7599 4.16567 17.0077 6.532 15.0169C7.68931 14.0857 9.02419 13.4001 10.4552 13.0018C11.8862 12.6036 13.3833 12.501 14.8552 12.7004C17.2433 12.9539 19.491 13.9529 21.2795 15.5556C22.968 17.1759 24.2626 19.1617 25.064 21.3603C26.2321 24.5186 26.9309 27.831 27.138 31.1919C26.296 29.3853 25.1631 27.7291 23.7845 26.2896C22.2325 24.6266 20.3563 23.299 18.2717 22.3887C16.187 21.4784 13.938 21.0047 11.6633 20.9967C8.31099 21.0653 5.01282 21.8553 1.99329 23.3131C1.99329 23.1515 1.9933 22.9899 2.08758 22.8283L2.00677 22.8014ZM27.2997 37.6431C23.1748 37.7026 19.1111 36.6414 15.5421 34.5724C13.0858 32.9419 10.9457 30.8793 9.2256 28.4849C8.40412 27.3684 7.46989 26.3393 6.43771 25.4141C5.71209 24.8306 4.89227 24.3752 4.01349 24.0673C6.42524 23.0925 8.99513 22.5676 11.596 22.5185C13.6724 22.5289 15.7248 22.9644 17.6265 23.7983C19.5281 24.6321 21.2389 25.8467 22.6532 27.367C25.3364 30.1501 26.957 33.787 27.2323 37.6431H27.2997ZM1.5219 28.0269C1.5219 27.0572 1.52192 26.1011 1.67007 25.1583H2.1549C3.38569 25.3 4.54745 25.8011 5.49498 26.5993C6.12994 27.1593 6.71152 27.777 7.23232 28.4444C9.40067 31.4208 10.2492 35.5017 11.0842 39.4344C11.9865 43.7576 12.9293 48.1751 15.5556 51.3939C11.3155 49.1329 7.76983 45.7617 5.2979 41.6411C2.82597 37.5204 1.52076 32.8053 1.5219 28V28.0269ZM12.5387 39.138C12.1338 37.0112 11.6168 34.9073 10.9899 32.835C12.1005 33.9668 13.3389 34.9657 14.6801 35.8115C17.3303 37.4166 20.2913 38.4403 23.367 38.8148C21.549 39.7197 20.0161 41.109 18.9372 42.8295C17.8583 44.5501 17.2753 46.535 17.2525 48.5656C17.2376 49.5035 17.3371 50.4397 17.5488 51.3535C14.505 48.4175 13.5084 43.8787 12.5387 39.138ZM18.7475 48.5656C18.7568 46.228 19.6343 43.9772 21.2096 42.25C22.785 40.5229 24.9458 39.4425 27.2727 39.2188C27.195 41.9189 26.4418 44.5564 25.082 46.8903C23.7221 49.2242 21.7989 51.1801 19.4882 52.5791C18.9661 51.2976 18.7139 49.9221 18.7475 48.5387V48.5656ZM28.0135 54.4781C25.5817 54.4784 23.1616 54.143 20.8215 53.4815C24.2825 51.2174 26.8303 47.8013 28.0135 43.8384C29.2074 47.7997 31.7584 51.2137 35.2188 53.4815C32.8744 54.1439 30.4497 54.4793 28.0135 54.4781ZM36.5387 52.5522C34.2374 51.1593 32.3202 49.2141 30.9608 46.8929C29.6015 44.5716 28.843 41.9478 28.7542 39.2593C31.0812 39.483 33.242 40.5632 34.8173 42.2904C36.3927 44.0175 37.2701 46.2684 37.2794 48.6061C37.3159 49.991 37.0589 51.368 36.5252 52.6465L36.5387 52.5522ZM32.6599 38.8821C35.7356 38.5076 38.6966 37.4839 41.3468 35.8788C42.6881 35.033 43.9265 34.0342 45.037 32.9024C44.4057 34.9745 43.8842 37.0784 43.4747 39.2054C42.4781 43.9462 41.5219 48.4849 38.4781 51.4209C38.6898 50.5071 38.7893 49.5709 38.7744 48.633C38.7516 46.6024 38.1686 44.6174 37.0898 42.8969C36.0109 41.1764 34.478 39.787 32.6599 38.8821ZM40.4714 51.4613C43.0977 48.2424 44.0269 43.8249 44.9427 39.5017C45.7643 35.569 46.6262 31.5017 48.7811 28.5118C49.31 27.8471 49.8959 27.2297 50.532 26.6667C51.4795 25.8685 52.6412 25.3673 53.872 25.2256H54.3569C54.4512 26.1684 54.505 27.1246 54.505 28.0943C54.4867 32.8813 53.1723 37.5739 50.7014 41.6739C48.2305 45.7738 44.6954 49.1281 40.4714 51.3805"
                  fill="current"
                ></path>
              </svg>
            </div>
            <div className="h-0 grow border-t border-white"></div>
          </div>
          <div className="mt-auto flex justify-between">
            <p className="flex flex-col text-xs">
              <span className="font-bold">© 2025, Coty Inc.</span>
              <span className="inline-flex flex-col whitespace-pre-wrap md:flex-row">
                <span>All trademarks registered. </span>
                <span>All rights reserved.</span>
              </span>
            </p>
            <p className="flex flex-col text-right text-xs">
              <span className="font-bold">NYSE</span>
              <span>$0.0</span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
