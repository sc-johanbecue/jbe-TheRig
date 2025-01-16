import React from 'react';
import {
  ImageField,
  Image as JssImage,
  LinkField,
  Link as JssLink,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Link: LinkField;
  Image: ImageField;
}

type AirlineDiscoverItemProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const AirlineDiscoverItemDefaultComponent = (props: AirlineDiscoverItemProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AirlineDiscoverItemProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="imagination_boxed">
        <a href="top-destinations.html">
          <JssImage field={props.fields.Image}></JssImage>
          <img
            src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/imagination1.b9e565683d8614e0a5b4.png"
            alt="img"
          />
        </a>
        <h3>
          <JssLink field={props.fields.Link}></JssLink>
          <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">
            7% Discount for all<span>Airlines</span>
          </a>
        </h3>
      </div>
    );
  }

  return <AirlineDiscoverItemDefaultComponent {...props} />;
};
