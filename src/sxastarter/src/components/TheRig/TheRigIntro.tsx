import React from 'react';
import { ImageField, TextField, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Number: TextField;
  Label: TextField;
  Name: TextField;
  Category: TextField;
  Family: TextField;
  ShortDescription: RichTextField;
  LongDescription: RichTextField;
  MasterAsset: ImageField;
}

type TheRigHeaderProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const TheRigHeaderDefaultComponent = (props: TheRigHeaderProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: TheRigHeaderProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="intro-wrapper css-19tk58b">
        <style data-emotion="css 179ykmo">{`.css-179ykmo{position:absolute;top:0px;width:100%;}`}</style>
        <img src="https://therig.sa/bg/linear.webp" className="css-179ykmo" alt="" />
        <style data-emotion="css 1f1qt3z">{`.css-1f1qt3z{max-width:1440px!important;}@media screen and (max-width: 899px){.css-1f1qt3z{padding:0 24px!important;}}`}</style>
        <style data-emotion="css sjot2u">{`.css-sjot2u{width:100%;margin-left:auto;box-sizing:border-box;margin-right:auto;display:block;padding-left:16px;padding-right:16px;max-width:1440px!important;}@media (min-width:600px){.css-sjot2u{padding-left:24px;padding-right:24px;}}@media (min-width:1200px){.css-sjot2u{max-width:1200px;}}@media screen and (max-width: 899px){.css-sjot2u{padding:0 24px!important;}}`}</style>
        <div className="MuiContainer-root MuiContainer-maxWidthLg css-sjot2u">
          <style data-emotion="css 124fws5">{`.css-124fws5{min-width:0;box-sizing:border-box;padding:calc(var(--Grid-rowSpacing) / 2) calc(var(--Grid-columnSpacing) / 2);}`}</style>
          <div className="MuiGrid-root MuiGrid-direction-xs-row css-124fws5">
            <style data-emotion="css 1ug0hhs">{`.css-1ug0hhs{width:866px;z-index:20;text-align:center;position:absolute;left:50%;top:60%;-webkit-transform:translate(-60%, -60%);-webkit-transform:translate(-50%, -50%);-moz-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);}@media screen and (min-width: 1200px){.css-1ug0hhs{margin:auto;}}@media screen and (min-width: 1601px){.css-1ug0hhs{top:55%;-webkit-transform:translate(-50%, -40%);-moz-transform:translate(-50%, -40%);-ms-transform:translate(-50%, -40%);transform:translate(-50%, -40%);}}@media screen and (max-width: 899px){.css-1ug0hhs{top:50%;width:auto;}}`}</style>
            <div className="css-1ug0hhs">
              <style data-emotion="css 1vtk6j6">{`.css-1vtk6j6{-webkit-filter:none;filter:none;}@media screen and (max-width: 899px){.css-1vtk6j6{width:327px;height:100px;}}@media screen and (min-width: 900px){.css-1vtk6j6{width:570px;height:120px;}}@media screen and (min-width: 1200px){.css-1vtk6j6{width:570px;height:120px;}}@media screen and (min-width: 1440px){.css-1vtk6j6{width:570px;height:120px;}}`}</style>
              <img
                alt=""
                loading="lazy"
                width="866"
                height="150"
                decoding="async"
                data-nimg="1"
                className="css-1vtk6j6"
                style={{ color: 'transparent' }}
                src="https://therig.sa/headerTitle/en-mbl-hero.svg"
              />
              <div className="MuiGrid-root MuiGrid-direction-xs-row css-124fws5">
                <style data-emotion="css srloyh">{`.css-srloyh{font-family:'Changa',sans-serif;font-weight:400;text-align:center;margin:16px;font-size:24px;font-style:normal;font-weight:400;line-height:160%;color:#E1E5EE;}@media screen and (max-width: 599px){.css-srloyh{font-size:18px;line-height:160%;margin:0px 16px 16px;}}`}</style>
                <style data-emotion="css pheo6p">{`.css-pheo6p{margin:0;font-family:"Roboto","Helvetica","Arial",sans-serif;font-weight:400;font-size:1rem;line-height:1.5;letter-spacing:0.00938em;font-family:'Changa',sans-serif;font-weight:400;text-align:center;margin:16px;font-size:24px;font-style:normal;font-weight:400;line-height:160%;color:#E1E5EE;}@media screen and (max-width: 599px){.css-pheo6p{font-size:18px;line-height:160%;margin:0px 16px 16px;}}`}</style>
                <p className="MuiTypography-root MuiTypography-body1 css-pheo6p">
                  <span>
                    The world’s first tourism destination on an offshore <br /> platform inspired by
                    the design of offshore oil platforms
                  </span>
                </p>
                <div className="MuiGrid-root MuiGrid-direction-xs-row css-124fws5">
                  <style data-emotion="css e35sq3">{`.css-e35sq3{background-color:rgba(255, 255, 255, 0.05);color:#FFFFFF;border-radius:2px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;padding:12px 32px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;border:1px solid #FFFFFF;margin-top:60px;cursor:pointer;font-size:18px;font-style:normal;font-weight:500;line-height:160%;}.css-e35sq3:active{background-color:#FFFFFF;border:2px solid #FFFFFF;color:#FFFFFF;}@media screen and (max-width: 899px){.css-e35sq3{margin-top:48px;}}`}</style>
                  <button type="submit" style={{ display: 'inline-flex' }} className="css-e35sq3">
                    <span>
                      SUBSCRIBE
                      <style data-emotion="css iiupvq">{`.css-iiupvq{width:10px;margin:0 5px;vertical-align:middle;height:10px;}`}</style>
                      <img
                        alt=""
                        loading="lazy"
                        width="10"
                        height="10"
                        decoding="async"
                        data-nimg="1"
                        className="css-iiupvq"
                        style={{ color: 'transparent' }}
                        src="https://therig.sa/down.svg"
                      />
                    </span>
                  </button>
                </div>
                <style data-emotion="css 11ant8a">{`.css-11ant8a{width:38px;height:51px;margin-top:90px;display:none;}@media screen and (min-width: 900px){.css-11ant8a{display:inline;}}`}</style>
                <img
                  alt="A world-first in adventure tourism"
                  loading="lazy"
                  width="38"
                  height="50"
                  decoding="async"
                  data-nimg="1"
                  className="css-11ant8a"
                  style={{ color: 'transparent' }}
                  srcSet="https://therig.sa/_next/image/?url=%2FScroll-Down.gif&amp;w=48&amp;q=75 1x, https://therig.sa/_next/image/?url=%2FScroll-Down.gif&amp;w=96&amp;q=75 2x"
                  src="https://therig.sa/_next/image/?url=%2FScroll-Down.gif&amp;w=96&amp;q=75"
                />
              </div>
            </div>
          </div>
        </div>
        <style data-emotion="css zqttgr">{`.css-zqttgr{position:absolute;min-width:100%;width:1985px;height:120px;bottom:0px;z-index:1;background:linear-gradient(180deg, rgba(1, 6, 13, 0.00) 0%, #01060D 100%);}`}</style>
        <style data-emotion="css 1peekm2">{`.css-1peekm2{box-sizing:border-box;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;position:absolute;min-width:100%;width:1985px;height:120px;bottom:0px;z-index:1;background:linear-gradient(180deg, rgba(1, 6, 13, 0.00) 0%, #01060D 100%);}`}</style>
        <div className="MuiGrid-root css-1peekm2"></div>
        <style data-emotion="css mizbsd">{`.css-mizbsd{background:url('/rust/rust-top-straight.webp'),transparent 50%/cover no-repeat;mix-blend-mode:plus-darker;width:2000px;height:166px;-webkit-filter:brightness(0);filter:brightness(0);left:-280px;position:absolute;bottom:-84px;}@media screen and (min-width: 1921px){.css-mizbsd{left:0;}}`}</style>
        <div className="css-mizbsd"></div>
      </div>
    );
  }

  return <TheRigHeaderDefaultComponent {...props} />;
};
