import React from 'react';
import {
  Placeholder,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';

type AirlineOffersProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
};

const AirlineOffersDefaultComponent = (props: AirlineOffersProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AirlineOffersProps): JSX.Element => {
  const phKeyOfferItems = `offerItems-${props.params.DynamicPlaceholderId}`;

  return (
    <section id="offer_area" className="section_padding_top">
      <div className="container">
        <div className="row">
          <Placeholder name={phKeyOfferItems} rendering={props.rendering} />
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="offer_area_box d-none-phone img_animation">
              <img
                src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/offer1.1cc63cca0b9e3a9cb641.png"
                alt="img"
              />
              <div className="offer_area_content">
                <h2>Special Offers</h2>
                <p>
                  Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                  et accusam et justo duo dolores et ea rebum. Stet clita kasd dolor sit amet. Lorem
                  ipsum dolor sit amet.
                </p>
                <a
                  className="btn btn_theme btn_md"
                  href="https://www.sportingkampenhout.be/Sitecore/airline/#!"
                >
                  Holiday deals
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="offer_area_box img_animation">
              <img
                src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/offer2.18ee11a637d736bb1ccf.png"
                alt="img"
              />
              <div className="offer_area_content">
                <h2>News letter</h2>
                <p>
                  Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                  et.
                </p>
                <a
                  className="btn btn_theme btn_md"
                  href="https://www.sportingkampenhout.be/Sitecore/airline/#!"
                >
                  Subscribe now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="offer_area_box img_animation">
              <img
                src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/offer3.701ffbe92f95aac2a837.png"
                alt="img"
              />
              <div className="offer_area_content">
                <h2>Travel tips</h2>
                <p>
                  Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                  et.
                </p>
                <a
                  className="btn btn_theme btn_md"
                  href="https://www.sportingkampenhout.be/Sitecore/airline/#!"
                >
                  Get tips
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return <AirlineOffersDefaultComponent {...props} />;
};
