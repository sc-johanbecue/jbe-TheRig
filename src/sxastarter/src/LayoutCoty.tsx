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
//import 'src/styles/cotystyles.css';

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

        <Link
          href="#content"
          className="absolute left-[-9999px] top-auto h-1 w-1 overflow-hidden focus:left-0 focus:top-[98px] focus:z-[1000] focus:h-auto focus:w-auto focus:bg-blue focus:p-4 focus:font-bold focus:text-white focus:no-underline"
        >
          Skip to content
        </Link>
        <nav className="sticky top-0 z-50 flex w-full items-center bg-white px-6 py-6 h-24 md:px-16 md:py-8 text-blue">
          <div className="flex w-full items-center">
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
                <li>
                  <Link
                    href="/our-purpose"
                    className="hover-underline mx-2 block px-0 pb-1 text-center text-sm leading-none xl:mx-3 2xl:mx-4 2xl:text-base"
                  >
                    Our Purpose
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-brands"
                    className="underlined hover-underline mx-2 block px-0 pb-1 text-center text-sm leading-none xl:mx-3 2xl:mx-4 2xl:text-base"
                  >
                    Our Brands
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sustainability"
                    className="hover-underline mx-2 block px-0 pb-1 text-center text-sm leading-none xl:mx-3 2xl:mx-4 2xl:text-base"
                  >
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main id="content">
          <h1 className="sr-only">Our Brands - Coty.com</h1>
          <div className="absolute z-10 ml-16 mt-5 hidden md:block">
            <ul className="flex" aria-label="Breadcrumb">
              <li className="opacity-[0.56] last-of-type:font-bold last-of-type:opacity-100">
                <Link href="/" className="flex cursor-pointer items-center text-xs !text-blue">
                  HOMEPAGE
                </Link>
              </li>
              <li className="opacity-[0.56] last-of-type:font-bold last-of-type:opacity-100">
                <span className="flex items-center text-xs !text-blue" aria-current="page">
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 !stroke-blue"
                  >
                    <path d="M5 9L1 5L5 1"></path>
                  </svg>
                  OUR BRANDS
                </span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="grid h-[calc(100vh-96px)] md:grid-cols-2">
              <Link href="/our-brands/prestige-brands" className="relative cursor-pointer">
                <img
                  className="rounded-bl-[50%]"
                  src="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt165846d642936dd1/650b0289cd4063e122735b46/lancaster-our-brands.jpg"
                  alt="Prestige Brands"
                />
              </Link>
              <Link href="/our-brands/consumer-brands" className="relative cursor-pointer">
                <img
                  className="rounded-bl-[50%]"
                  src="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt2a3008fca7c54236/650d639814893a01acce4b6f/sally-hansen-new-our-brands-v2.jpg"
                  alt="Consumer Brands"
                />
              </Link>
            </div>
          </div>
        </main>
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                &copy; 2024 Coty Inc. - <Link href="/privacy-policy">Privacy Policy</Link> -{' '}
                <Link href="/terms-of-use">Terms of Use</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
