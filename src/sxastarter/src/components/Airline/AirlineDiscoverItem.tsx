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
    const href =
      props.fields.Link.value.href != ''
        ? props.fields.Link.value.href
        : props.fields.Link.value.anchor;
    return (
      <div className="imagination_boxed">
        <a href={href}>
          <JssImage field={props.fields.Image}></JssImage>
        </a>
        <h3>
          <JssLink field={props.fields.Link}></JssLink>
        </h3>
      </div>
    );
  }

  return <AirlineDiscoverItemDefaultComponent {...props} />;
};
