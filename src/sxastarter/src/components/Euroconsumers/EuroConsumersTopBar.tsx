import React from 'react';
import {
  LinkField,
  Link as JssLink,
  ImageField,
  Image as JssImage,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

import { useState } from 'react';

interface Fields {
  CollapsedImage: ImageField;
  ExpandedImage: ImageField;
  Link: LinkField;
}

type AirlineTopBarProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const AirlineTopBarDefaultComponent = (props: AirlineTopBarProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AirlineTopBarProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prevState) => !prevState);
  };

  if (props.fields) {
    return (
      <div
        className="skin"
        data-selector="skin"
        data-type="ALineHeaderSkinController"
        data-rendering="ALineHeaderSkin"
        data-datasource="{96A75B54-3CF1-403D-A914-FF55B0C01AAF}"
        style={{ background: '#BE006E' }}
      >
        <div className="skin__wrapper constrained">
          {/* desktop */}
          <div className="hide-on-mobile relative">
            <label htmlFor="checkbox-skin-desktop" className="toggler">
              <JssImage
                field={props.fields.CollapsedImage}
                src="https://www.test-aankoop.be/-/media/ta/mkg/skins/winterskincollapsed1050x70nl.jpg?rev&la=nl-BE&h=70&mw=1050&w=1050&hash=697620EF7B10837E5FA5C1B9757B9DD2"
                className="collapsed"
                style={isExpanded ? { display: 'none' } : { display: 'inherit' }}
                height={70}
                width={1050}
              />
              <JssImage
                field={props.fields.ExpandedImage}
                src="https://www.test-aankoop.be/-/media/ta/mkg/skins/wintersoldenskinexpanded1050x230nl.jpg?rev&la=nl-BE&h=230&mw=1050&w=1050&hash=24F3469DB636A34BEA648135274E4FD3"
                className="expanded"
                style={isExpanded ? { display: 'inherit' } : { display: 'none' }}
              />
            </label>
            <div>
              <JssLink field={props.fields.Link} className="btn btn--pill" />
              <label
                htmlFor="checkbox-skin-desktop"
                className="icon-chevron-down"
                style={{ color: 'White' }}
              />
            </div>
          </div>
          {/* mobile */}
          <div className="flex__row no-margin mobile-only">
            <div className="flex__col flex__col-xs-1" />
            <div className="flex__col no-padding">
              <JssLink field={props.fields.Link} className="" data-selector="skin-mobile-link">
                <img
                  src="https://www.test-aankoop.be/-/media/ta/mkg/skins/mobskinnl-320x70.jpg?rev&la=nl-BE&h=70&mw=600&w=320&hash=18FB219E8A50DA23883A54711A5E3827"
                  height={70}
                  data-selector="skin-mobile-image"
                  alt="Skin"
                  width={320}
                  fetchPriority="high"
                />
              </JssLink>
            </div>
            <label
              htmlFor="checkbox-skin-mobile"
              className="flex__col flex__col-xs-1 icon-x-2 no-padding"
              style={{ color: 'White' }}
              onClick={handleToggle}
            />
          </div>
        </div>
      </div>
    );
  }

  return <AirlineTopBarDefaultComponent {...props} />;
};
