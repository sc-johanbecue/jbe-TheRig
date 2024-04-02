import React from 'react';
import { ImageField, TextField, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import Image from 'next/image';

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

type RollsRoyceBannerProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const RollsRoyceBannerDefaultComponent = (props: RollsRoyceBannerProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: RollsRoyceBannerProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="full-width-banner" id="civil-aerospace">
        <div
          className="full-width-banner-inner new-video-fw clearfix fw-video-container bnr-overlay"
          style={{
            backgroundImage:
              "url('https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/banners/home-full-width/civil-aerospace/civil-banner-top_v2.jpg')",
          }}
        >
          <div className="new-banner-mobi hide">
            <Image
              src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/banners/home-full-width/civil-aerospace/civil-banner-top_v2.jpg?h=766&amp;iar=0&amp;w=2200"
              alt=""
              width="2200"
              height="766"
            />
          </div>
          <div className="full-width-banner-main">
            <div className="full-width-banner-content box4-text-middle-left navy-blue">
              <p>Civil Aerospace</p>
              <div className="full-width-banner-txt font24">
                <p>
                  Connecting the world through the Power of Trent <br />
                  Leading the way in business aviation power
                  <br />
                  Enabling the transition to net zero flight
                </p>
              </div>
            </div>
          </div>
          <div className="banner-down-arrow">
            <div id="arrow-down" className="">
              <i className="fa fa-angle-down"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <RollsRoyceBannerDefaultComponent {...props} />;
};
