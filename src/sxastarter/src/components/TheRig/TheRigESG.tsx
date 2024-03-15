import React from 'react';
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Fact1: TextField;
  Fact2: TextField;
  Fact3: TextField;
  Fact4: TextField;
  Fact5: TextField;
  Fact1Figure: TextField;
  Fact2Figure: TextField;
  Fact3Figure: TextField;
  Fact4Figure: TextField;
  Fact5Figure: TextField;
}

type TheRigESG = {
  params: { [key: string]: string };
  fields: Fields;
};

const TheRigHeaderDefaultComponent = (props: TheRigESG): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: TheRigESG): JSX.Element => {
  if (props.fields) {
    return (
      <div data-testid="egs-block-wrapper" className="css-i9vblt">
        <style data-emotion="css q2d0bh">{`.css--q2d0bh{padding:240px 0px;}.css-q2d0bh .egs-grid .en-grid-item .egsGrid:last-child>div{border:none;}.css-q2d0bh .egs-grid .ar-grid-item .egsGrid:last-child>div{border:none;max-width:30ch;}@media screen and (max-width: 899px){.css-q2d0bh{padding:120px 0px!important;}}@media screen and (max-width: 1439px){.css-q2d0bh{text-align:center;}.css-q2d0bh .egs-grid .ar-grid-item .egsGrid:last-child>div{max-width:none;}}`}</style>
        <style data-emotion="css 18czceh">{`.css--18czceh{width:100%;margin-left:auto;box-sizing:border-box;margin-right:auto;display:block;padding-left:16px;padding-right:16px;padding:240px 0px;}@media (min-width:600px){.css-18czceh{padding-left:24px;padding-right:24px;}}@media (min-width:1200px){.css-18czceh{max-width:1200px;}}.css-18czceh .egs-grid .en-grid-item .egsGrid:last-child>div{border:none;}.css-18czceh .egs-grid .ar-grid-item .egsGrid:last-child>div{border:none;max-width:30ch;}@media screen and (max-width: 899px){.css-18czceh{padding:120px 0px!important;}}@media screen and (max-width: 1439px){.css-18czceh{text-align:center;}.css-18czceh .egs-grid .ar-grid-item .egsGrid:last-child>div{max-width:none;}}`}</style>
        <div className="MuiContainer-root MuiContainer-maxWidthLg css-18czceh">
          <style data-emotion="css 48vdzh">{`.css--48vdzh{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 12 / var(--Grid-columns));min-width:0;box-sizing:border-box;padding:calc(var(--Grid-rowSpacing) / 2) calc(var(--Grid-columnSpacing) / 2);}@media (min-width:600px){.css-48vdzh{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 12 / var(--Grid-columns));}}@media (min-width:900px){.css-48vdzh{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 12 / var(--Grid-columns));}}@media (min-width:1200px){.css-48vdzh{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 12 / var(--Grid-columns));}}`}</style>
          <div className="MuiGrid-root MuiGrid-direction-xs-row MuiGrid-grid-md-12 MuiGrid-grid-sm-12 MuiGrid-grid-xs-12 MuiGrid-grid-lg-12 egs-grid css-48vdzh">
            <style data-emotion="css 108vj9e">{`.css--108vj9e{font-family:'Changa',sans-serif!important;font-style:normal;font-weight:400;font-size:42px;line-height:52px;font-size:42px;font-style:normal;font-weight:700;line-height:52px;color:white;width:800px;text-align:center;margin:auto;margin-bottom:72px;text-transform:uppercase;}.css-108vj9e b{color:#6BCABA;}@media screen and (min-width: 900px){.css-108vj9e{text-align:center;}}@media screen and (max-width: 899px){.css-108vj9e{width:100%;font-size:36px;padding:12px;}}`}</style>
            <div className="css-108vj9e">
              <b>THE RIG.</b> ENVIRONMENT, SOCIAL AND GOVERNANCE AMBITION
            </div>
            <style data-emotion="css v57kt1">{`.css--v57kt1{--Grid-columns:12;--Grid-columnSpacing:24px;--Grid-rowSpacing:24px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;min-width:0;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:calc(var(--Grid-rowSpacing) / -2) calc(var(--Grid-columnSpacing) / -2);}`}</style>
            <div className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-row MuiGrid-spacing-xs-3 en-grid-item css-v57kt1">
              <style data-emotion="css b3tb0r">{`.css--b3tb0r{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 12 / var(--Grid-columns));min-width:0;box-sizing:border-box;padding:calc(var(--Grid-rowSpacing) / 2) calc(var(--Grid-columnSpacing) / 2);}@media (min-width:600px){.css-b3tb0r{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 12 / var(--Grid-columns));}}@media (min-width:900px){.css-b3tb0r{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 3 / var(--Grid-columns));}}@media (min-width:1200px){.css-b3tb0r{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 3 / var(--Grid-columns));}}`}</style>
              <div className="MuiGrid-root MuiGrid-direction-xs-row MuiGrid-grid-sm-12 MuiGrid-grid-xs-12 MuiGrid-grid-md-3 MuiGrid-grid-lg-3 egsGrid css-b3tb0r">
                <style data-emotion="css 1yjs7k1">{`.css--1yjs7k1{border-inline-end:1px solid #003B5C;}.css-1yjs7k1 .breakLine{display:none;}@media screen and (max-width: 899px){.css-1yjs7k1{border-right:none;}.css-1yjs7k1 .breakLine{display:block;width:280px;margin:10px auto;}.css-1yjs7k1 .last{display:none;}}`}</style>
                <div className="css-1yjs7k1">
                  <style data-emotion="css 1hikysy">{`.css--1hikysy{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:16px;-webkit-flex:1 0 0;-ms-flex:1 0 0;flex:1 0 0;padding:24px 20px;}`}</style>
                  <div className="css-1hikysy">
                    <style data-emotion="css 12mq798">{`.css--12mq798{width:80px;height:80px;margin-bottom:16px;}`}</style>
                    <img
                      alt=""
                      loading="lazy"
                      width="80"
                      height="80"
                      decoding="async"
                      data-nimg="1"
                      className="css-12mq798"
                      style={{ color: 'transparent' }}
                      srcSet="https://therig.sa/_next/image/?url=%2Fegs%2F1.png&amp;w=96&amp;q=75 1x, https://therig.sa/_next/image/?url=%2Fegs%2F1.png&amp;w=256&amp;q=75 2x"
                      src="https://therig.sa/_next/image/?url=%2Fegs%2F1.png&amp;w=256&amp;q=75"
                    />
                    <style data-emotion="css mxs5mc">{`.css--mxs5mc{font-family:'Changa',sans-serif!important;font-style:normal;font-size:1.8rem;line-height:3.3rem;font-weight:300;color:#E1E5EE;font-family:Changa;font-size:22px;font-style:normal;font-weight:300;line-height:160%;text-align:center;}`}</style>
                    <div className="css-mxs5mc">
                      Maximize positive <br /> environmental impact
                    </div>
                  </div>
                  <hr
                    style={{
                      height: '0.2px',
                      borderWidth: 0,
                      color: '#003B5C',
                      backgroundColor: '#003B5C',
                    }}
                    className="breakLine "
                  />
                </div>
              </div>
              <div className="MuiGrid-root MuiGrid-direction-xs-row MuiGrid-grid-sm-12 MuiGrid-grid-xs-12 MuiGrid-grid-md-3 MuiGrid-grid-lg-3 egsGrid css-b3tb0r">
                <div className="css-1yjs7k1">
                  <div className="css-1hikysy">
                    <img
                      alt=""
                      loading="lazy"
                      width="80"
                      height="80"
                      decoding="async"
                      data-nimg="1"
                      className="css-12mq798"
                      style={{ color: 'transparent' }}
                      srcSet="https://therig.sa/_next/image/?url=%2Fegs%2F2.png&amp;w=96&amp;q=75 1x, https://therig.sa/_next/image/?url=%2Fegs%2F2.png&amp;w=256&amp;q=75 2x"
                      src="https://therig.sa/_next/image/?url=%2Fegs%2F2.png&amp;w=256&amp;q=75"
                    />
                    <div className="css-mxs5mc">
                      Empower <br /> communities
                    </div>
                  </div>
                  <hr
                    style={{
                      height: '0.2px',
                      borderWidth: 0,
                      color: '#003B5C',
                      backgroundColor: '#003B5C',
                    }}
                    className="breakLine "
                  />
                </div>
              </div>
              <div className="MuiGrid-root MuiGrid-direction-xs-row MuiGrid-grid-sm-12 MuiGrid-grid-xs-12 MuiGrid-grid-md-3 MuiGrid-grid-lg-3 egsGrid css-b3tb0r">
                <div className="css-1yjs7k1">
                  <div className="css-1hikysy">
                    <img
                      alt=""
                      loading="lazy"
                      width="80"
                      height="80"
                      decoding="async"
                      data-nimg="1"
                      className="css-12mq798"
                      style={{ color: 'transparent' }}
                      srcSet="https://therig.sa/_next/image/?url=%2Fegs%2F3.png&amp;w=96&amp;q=75 1x, https://therig.sa/_next/image/?url=%2Fegs%2F3.png&amp;w=256&amp;q=75 2x"
                      src="https://therig.sa/_next/image/?url=%2Fegs%2F3.png&amp;w=256&amp;q=75"
                    />
                    <div className="css-mxs5mc">
                      Facilitate eco <br /> experiences
                    </div>
                  </div>
                  <hr
                    style={{
                      height: '0.2px',
                      borderWidth: 0,
                      color: '#003B5C',
                      backgroundColor: '#003B5C',
                    }}
                    className="breakLine "
                  />
                </div>
              </div>
              <div className="MuiGrid-root MuiGrid-direction-xs-row MuiGrid-grid-sm-12 MuiGrid-grid-xs-12 MuiGrid-grid-md-3 MuiGrid-grid-lg-3 egsGrid css-b3tb0r">
                <div className="css-1yjs7k1">
                  <div className="css-1hikysy">
                    <img
                      alt=""
                      loading="lazy"
                      width="80"
                      height="80"
                      decoding="async"
                      data-nimg="1"
                      className="css-12mq798"
                      style={{ color: 'transparent' }}
                      srcSet="https://therig.sa/_next/image/?url=%2Fegs%2F4.png&amp;w=96&amp;q=75 1x, https://therig.sa/_next/image/?url=%2Fegs%2F4.png&amp;w=256&amp;q=75 2x"
                      src="https://therig.sa/_next/image/?url=%2Fegs%2F4.png&amp;w=256&amp;q=75"
                    />
                    <div className="css-mxs5mc">
                      Operate <br /> Responsibly
                    </div>
                  </div>
                  <hr
                    style={{
                      height: '0.2px',
                      borderWidth: 0,
                      color: '#003B5C',
                      backgroundColor: '#003B5C',
                    }}
                    className="breakLine last"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <style data-emotion="css 13wifey">{`.css--13wifey{background:url('https://therig.sa/rust/rust-top-straight.webp'),transparent 50%/cover no-repeat;mix-blend-mode:plus-darker;width:2000px;height:166px;mix-blend-mode:multiply;left:-280px;position:absolute;bottom:-84px;}@media screen and (min-width: 1921px){.css-13wifey{left:0;}}@media screen and (max-width: 899px){.css-13wifey{background:url('/rust/subscribeRus.png'),transparent 50%/cover no-repeat;mix-blend-mode:hard-light;bottom:-82px;left:-392px;-webkit-filter:brightness(0.5);filter:brightness(0.5);}}`}</style>
        <div className="css-13wifey"></div>
      </div>
    );
  }

  return <TheRigHeaderDefaultComponent {...props} />;
};
