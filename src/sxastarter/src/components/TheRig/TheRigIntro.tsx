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

type TheRigIntroProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const TheRigHeaderDefaultComponent = (props: TheRigIntroProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: TheRigIntroProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="intro-wrapper css-19tk58b">
        <img src="https://therig.sa/bg/linear.webp" className="css-179ykmo" alt="" />

        <div className="MuiContainer-root MuiContainer-maxWidthLg css-sjot2u">
          <div className="MuiGrid-root MuiGrid-direction-xs-row css-124fws5">
            <div className="css-1ug0hhs">
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
                <p className="MuiTypography-root MuiTypography-body1 css-pheo6p">
                  <span>
                    The world’s first tourism destination on an offshore <br /> platform inspired by
                    the design of offshore oil platforms
                  </span>
                </p>
                <div className="MuiGrid-root MuiGrid-direction-xs-row css-124fws5">
                  <button type="submit" style={{ display: 'inline-flex' }} className="css-e35sq3">
                    <span>
                      SUBSCRIBE
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

        <div className="MuiGrid-root css-1peekm2"></div>
        <div className="css-mizbsd"></div>
      </div>
    );
  }

  return <TheRigHeaderDefaultComponent {...props} />;
};
