import React from 'react';
import { ImageField, TextField, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

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
      <div>
        <style data-emotion="css 58w1wt">
          {`
            .css-58w1wt {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              max-width: 1440px;
              margin: auto;
            }
          `}
        </style>
        <div className="css-58w1wt">
          <div className="css-0">
            <Link href="/">
              <style data-emotion="css xzc2ri">
                {`
                  .css-xzc2ri {
                    -webkit-transition: 0.3s;
                    transition: 0.3s;
                  }
                `}
              </style>
              <img
                alt="rig logo"
                loading="lazy"
                width="112"
                height="95"
                decoding="async"
                data-nimg="1"
                className="css-xzc2ri"
                style={{ color: 'transparent' }}
                src="https://therig.sa/header/rig_logo.svg"
              />
            </Link>
          </div>
          <style data-emotion="css f8bp36">
            {`
               .css-f8bp36{
                  -webkit-box-flex:1;
                  -webkit-flex-grow:1;
                  -ms-flex-positive:1;
                  flex-grow:1;
                  text-align:center;
                  -webkit-padding-end:92px;
                  padding-inline-end:92px;
                  display:-webkit-box;
                  display:-webkit-flex;
                  display:-ms-flexbox;
                  display:flex;
                  -webkit-align-items:center;
                  -webkit-box-align:center;
                  -ms-flex-align:center;
                  align-items:center;
                  -webkit-box-pack:center;
                  -ms-flex-pack:center;
                  -webkit-justify-content:center;
                  justify-content:center;
               }
               @media screen and (max-width: 899px){
                  .css-f8bp36{
                     -webkit-padding-end:28px;
                     padding-inline-end:28px;
                     -webkit-align-items:flex-start;
                     -webkit-box-align:flex-start;
                     -ms-flex-align:flex-start;
                     align-items:flex-start;
                     -webkit-box-pack:end;
                     -ms-flex-pack:end;
                     -webkit-justify-content:end;
                     justify-content:end;
                  }
               }
            `}
          </style>
          <div className="css-f8bp36">
            <style data-emotion="css lqzyi5">
              {`
                .css-lqzyi5 {
                  max-width: 530px;
                  margin: auto;
                  display: -webkit-box;
                  display: -webkit-flex;
                  display: -ms-flexbox;
                  display: flex;
                  -webkit-box-pack: justify;
                  -webkit-justify-content: space-between;
                  justify-content: space-between;
                  -webkit-align-items: center;
                  -webkit-box-align: center;
                  -ms-flex-align: center;
                  align-items: center;
                  color: #ffffff;
                  gap: 24px;
                }
                @media screen and (max-width: 899px) {
                  .css-lqzyi5 {
                    -webkit-box-pack: end;
                    -ms-flex-pack: end;
                    -webkit-justify-content: end;
                    justify-content: end;
                    margin: 0;
                  }
                }
              `}
            </style>
            <nav className="css-lqzyi5">
              <div dir="ltr">
                <style data-emotion="css an3xli">
                  {`
                    .css-an3xli {
                      font-family: 'Changa', sans-serif !important;
                      font-style: normal;
                      font-size: 1.8rem;
                      line-height: 3.3rem;
                      font-weight: 300;
                      font-family: 'Changa', sans-serif !important;
                      text-transform: uppercase;
                      color: #e1e5ee;
                      -webkit-transition: height 0.3s;
                      transition: height 0.3s;
                      position: relative;
                    }
                    .css-an3xli:hover .underline {
                      background: #ff6a39;
                      height: 2px;
                      left: 0;
                    }
                    .css-an3xli:active {
                      color: #ff6a39;
                    }
                    .css-an3xli:active .underline {
                      background: #ff6a39;
                      height: 2px;
                      left: 0;
                    }
                    .css-an3xli.active .underline {
                      background: #ff6a39;
                      height: 2px;
                      left: 0;
                    }
                    @media screen and (max-width: 899px) {
                      .css-an3xli {
                        display: none;
                      }
                    }
                  `}
                </style>
                <Link className=" css-an3xli" href="/about/">
                  ABOUT THE RIG.
                  <style data-emotion="css th6fei">
                    {`
                      .css-th6fei {
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        height: 0;
                        background: #ff6a39;
                        width: 100%;
                        -webkit-transition: height 0.3s;
                        transition: height 0.3s;
                      }
                      @media screen and (max-width: 899px) {
                        .css-th6fei {
                          display: none;
                        }
                      }
                    `}
                  </style>
                  <div className="underline css-th6fei"></div>
                </Link>
              </div>
              <div dir="auto">
                <Link className=" css-an3xli" href="/press/">
                  press
                  <div className="underline css-th6fei"></div>
                </Link>
              </div>
              <style data-emotion="css r2sx70">
                {`
                  .css-r2sx70 {
                    cursor: pointer;
                    background: transparent;
                    border: none;
                    padding: 0;
                    width: 24px;
                    height: 24px;
                  }
                `}
              </style>
              <button className="css-r2sx70">
                <img src="https://therig.sa/svg/moon-icon.svg" alt="" />
              </button>
              <style data-emotion="css 1tssrit">
                {`
                  .css-1tssrit {
                    font-family: 'Changa', sans-serif !important;
                    font-style: normal;
                    font-size: 1.8rem;
                    line-height: 3.3rem;
                    font-weight: 300;
                    color: #e1e5ee;
                    -webkit-transition: height 0.3s;
                    transition: height 0.3s;
                    position: relative;
                  }
                  .css-1tssrit:hover .underline {
                    background: #ff6a39;
                    height: 2px;
                    left: 0;
                  }
                  .css-1tssrit:active:active {
                    color: #ff6a39;
                  }
                  .css-1tssrit:active .underline {
                    background: #ff6a39;
                    height: 2px;
                    left: 0;
                  }
                `}
              </style>
              <Link className="css-1tssrit" href="/ar/">
                العربية
                <div className="underline css-th6fei"></div>
              </Link>
            </nav>
            <style data-emotion="css 9qr6hs">
              {`
                .css-9qr6hs {
                  position: absolute;
                  top: 32px;
                  inset-inline-end: 32px;
                  cursor: pointer;
                  -webkit-transition: 0.3s;
                  transition: 0.3s;
                  width: 28px;
                  height: 28px;
                }
                .css-9qr6hs svg {
                  color: #ffffff;
                  font-size: 3.2rem;
                }
                @media screen and (min-width: 900px) {
                  .css-9qr6hs {
                    display: none;
                  }
                }
                .css-9qr6hs .line {
                  -webkit-transition: 0.3s;
                  transition: 0.3s;
                  width: 28px;
                  height: 4px;
                  background-color: #ffffff;
                  position: absolute;
                  left: 4px;
                }
                .css-9qr6hs .line-a {
                  top: 5px;
                  -webkit-transform: rotate(0deg);
                  -moz-transform: rotate(0deg);
                  -ms-transform: rotate(0deg);
                  transform: rotate(0deg);
                }
                .css-9qr6hs .line-b {
                  top: 15px;
                  opacity: 1;
                }
                .css-9qr6hs .line-c {
                  top: 25px;
                  -webkit-transform: rotate(0deg);
                  -moz-transform: rotate(0deg);
                  -ms-transform: rotate(0deg);
                  transform: rotate(0deg);
                }
              `}
            </style>
            <div className="css-9qr6hs">
              <div className="line line-a"></div>
              <div className="line line-b"></div>
              <div className="line line-c"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <TheRigHeaderDefaultComponent {...props} />;
};
