import React from 'react';
import { TextField, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Heading: TextField;
}

type AldarFactsProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const AldarFactsDefaultComponent = (props: AldarFactsProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AldarFactsProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="component typos-component container --title-description margin-top-80">
        <div className="component-content">
          <div className="container typos" data-animation="">
            <div className="row">
              <div className="col-1 "></div>
              <div className="col-10 col-md-3 ">
                <h2 className="h2 h2--box typos__heading">
                  <Text field={props.fields.Heading} />
                </h2>
              </div>
              <div className="w-100 d-lg-none"></div>
              <div className="col-1 d-lg-none"></div>
              <div className="col-10 col-md-7 ">
                <div className="typos__holder">
                  <p className="body-text-18" />
                  Welcome to a world of unparalleled luxury and sophistication, where your dreams of
                  the perfect living space become a stunning reality. At Aldar, we pride ourselves
                  on being at the forefront of creating innovative and iconic properties that
                  redefine the very essence of modern living. Whether you are looking for apartments
                  for rent in Abu Dhabi or villas for rent in Abu Dhabi, we offer a range of
                  properties that cater to your every need and desire.&nbsp;
                  <br />
                  <br />
                  With a commitment to excellence in every aspect of our business, we strive to
                  exceed your expectations and provide you with the ultimate lifestyle experience.
                  So come, explore our world of luxury and let us help you find your perfect home.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <AldarFactsDefaultComponent {...props} />;
};
