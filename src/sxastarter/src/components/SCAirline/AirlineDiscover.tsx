import React from 'react';
import {
  TextField,
  Text,
  Placeholder,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Subtitle: TextField;
}

type AirlineDiscoverProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const AirlineDiscoverDefaultComponent = (props: AirlineDiscoverProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AirlineDiscoverProps): JSX.Element => {
  const phKeyDiscoverItems = `discoverItems-${props.params.DynamicPlaceholderId}`;
  if (props.fields) {
    return (
      <section id="go_beyond_area" className="section_padding_top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="heading_left_area">
                <h2>
                  <Text field={props.fields.Title} />
                </h2>
                <h5>
                  <Text field={props.fields.Subtitle} />
                </h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <Placeholder name={phKeyDiscoverItems} rendering={props.rendering} />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="imagination_boxed">
                <a href="top-destinations.html">
                  <img
                    src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/imagination2.7b067dc7665c7cf6f236.png"
                    alt="img"
                  />
                </a>
                <h3>
                  <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">
                    Travel around<span>the world</span>
                  </a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="imagination_boxed">
                <a href="top-destinations.html">
                  <img
                    src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/imagination3.dbae66bae69b2fed2fb6.png"
                    alt="img"
                  />
                </a>
                <h3>
                  <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">
                    Luxury resorts<span>top deals</span>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <AirlineDiscoverDefaultComponent {...props} />;
};
