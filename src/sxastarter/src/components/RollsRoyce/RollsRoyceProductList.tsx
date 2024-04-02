import React from 'react';
import {
  Text,
  TextField,
  Placeholder,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import Image from 'next/image';

interface Fields {
  Title: TextField;
}

type RollsRoyceProductListProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const RollsRoyceProductListDefaultComponent = (props: RollsRoyceProductListProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: RollsRoyceProductListProps): JSX.Element => {
  const phKeyProductList = `rollsRoyceProductList-${props.params.DynamicPlaceholderId}`;
  if (props.fields) {
    return (
      <div
        className="fw-ship-design sub-section new-country-site-section module-sec ship-design-module-section clearfix new-module-spacing"
        id="inner-our-family-engine"
      >
        <div
          className="module-center-heading module-heading section-slide-wrap"
          id="our-family-engine"
        >
          <h2 className="">
            <Link className="mixbold-1 sec-ttl-link" href="https://www.rolls-royce.com/">
              <Text field={props.fields.Title} />
              <span className="icon-chevron-right"></span>
            </Link>
          </h2>
          <div className="font24 fw-intro-text">
            <p></p>
          </div>
        </div>
        <div className="prod-container fw-sld-wrapper">
          <div className="general-listing central-slider fw-sld-wrapper">
            <div id="trent-7000" className="product-item equal-height product-item-1 first">
              <div className="product-item-inner">
                <Link
                  className="async-link"
                  href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-7000.aspx#section-our-designs"
                >
                  <div className="product-item-top">
                    <div className="product-item-image">
                      <Image
                        src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/aerospace/airlines-product-images/trent-7000.png?w=400"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="product-item-bottom">
                    <div className="product-item-title font18 mixbold">
                      Trent 7000&nbsp;<span className="icon-chevron-right"></span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div id="trent-xwb" className="product-item equal-height product-item-2">
              <div className="product-item-inner">
                <Link
                  className="async-link"
                  href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-xwb.aspx#section-our-designs"
                >
                  <div className="product-item-top">
                    <div className="product-item-image">
                      <Image
                        src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/aerospace/airlines-product-images/trent-xwb.png?w=400"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="product-item-bottom">
                    <div className="product-item-title font18 mixbold">
                      Trent XWB&nbsp;<span className="icon-chevron-right"></span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div id="trent-1000" className="product-item equal-height product-item-3">
              <div className="product-item-inner">
                <Link
                  className="async-link"
                  href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-1000.aspx#section-our-designs"
                >
                  <div className="product-item-top">
                    <div className="product-item-image">
                      <Image
                        src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/aerospace/airlines-product-images/trent-1000.png?w=400"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="product-item-bottom">
                    <div className="product-item-title font18 mixbold">
                      Trent 1000&nbsp;<span className="icon-chevron-right"></span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div id="trent-900" className="product-item equal-height product-item-4">
              <div className="product-item-inner">
                <Link
                  className="async-link"
                  href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-900.aspx#section-our-designs"
                >
                  <div className="product-item-top">
                    <div className="product-item-image">
                      <Image
                        src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/aerospace/airlines-product-images/trent-900.png?w=400"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="product-item-bottom">
                    <div className="product-item-title font18 mixbold">
                      Trent 900&nbsp;<span className="icon-chevron-right"></span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div id="trent-500" className="product-item equal-height product-item-5">
              <div className="product-item-inner">
                <Link
                  className="async-link"
                  href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-500.aspx#section-our-designs"
                >
                  <div className="product-item-top">
                    <div className="product-item-image">
                      <Image
                        src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/aerospace/airlines-product-images/trent-500.png?w=400"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="product-item-bottom">
                    <div className="product-item-title font18 mixbold">
                      Trent 500&nbsp;<span className="icon-chevron-right"></span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div id="trent-800" className="product-item equal-height product-item-6">
              <div className="product-item-inner">
                <Link
                  className="async-link"
                  href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-800.aspx#section-our-designs"
                >
                  <div className="product-item-top">
                    <div className="product-item-image">
                      <Image
                        src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/aerospace/airlines-product-images/trent-800.png?w=400"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="product-item-bottom">
                    <div className="product-item-title font18 mixbold">
                      Trent 800&nbsp;<span className="icon-chevron-right"></span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div id="trent-700" className="product-item equal-height product-item-7">
              <div className="product-item-inner">
                <Link
                  className="async-link"
                  href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-700.aspx#section-our-designs"
                >
                  <div className="product-item-top">
                    <div className="product-item-image">
                      <Image
                        src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/aerospace/airlines-product-images/trent-700.png?w=400"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="product-item-bottom">
                    <div className="product-item-title font18 mixbold">
                      Trent 700&nbsp;<span className="icon-chevron-right"></span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div id="rb211-524gh-and-t" className="product-item equal-height product-item-8 last">
              <div className="product-item-inner">
                <Link
                  className="async-link"
                  href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/rb211-524gh-and-t.aspx#section-our-designs"
                >
                  <div className="product-item-top">
                    <div className="product-item-image">
                      <Image
                        src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/aerospace/airlines-product-images/rb211-524g.png?w=400"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="product-item-bottom">
                    <div className="product-item-title font18 mixbold">
                      RB211-524G/H & -T&nbsp;<span className="icon-chevron-right"></span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <Placeholder name={phKeyProductList} rendering={props.rendering} />
          </div>
        </div>
      </div>
    );
  }

  return <RollsRoyceProductListDefaultComponent {...props} />;
};
