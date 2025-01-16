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
  Tab1Title: TextField;
  Tab2Title: TextField;
  Tab3Title: TextField;
  Tab4Title: TextField;
}

type AirlineHotDealsProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const AirlineHotDealsDefaultComponent = (props: AirlineHotDealsProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AirlineHotDealsProps): JSX.Element => {
  const phKeyHotDealsTab1Items = `hotDealsTab1Items-${props.params.DynamicPlaceholderId}`;
  const phKeyHotDealsTab2Items = `hotDealsTab2Items-${props.params.DynamicPlaceholderId}`;
  const phKeyHotDealsTab3Items = `hotDealsTab3Items-${props.params.DynamicPlaceholderId}`;
  const phKeyHotDealsTab4Items = `hotDealsTab4Items-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <section id="explore_area" className="section_padding_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section_heading_center">
                <h2>
                  <Text field={props.fields.Title} />
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="theme_nav_tab">
                <nav className="theme_nav_tab_item">
                  <div className="nav nav-tabs" id="nav-tab1" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-hotels-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-hotels"
                      type="button"
                      role="tab"
                      aria-controls="nav-hotels"
                      aria-selected="true"
                    >
                      <Text field={props.fields.Tab1Title} />
                    </button>
                    <button
                      className="nav-link"
                      id="nav-tours-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-tours"
                      type="button"
                      role="tab"
                      aria-controls="nav-tours"
                      aria-selected="false"
                    >
                      <Text field={props.fields.Tab2Title} />
                    </button>
                    <button
                      className="nav-link"
                      id="nav-space-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-space"
                      type="button"
                      role="tab"
                      aria-controls="nav-space"
                      aria-selected="false"
                    >
                      <Text field={props.fields.Tab3Title} />
                    </button>
                    <button
                      className="nav-link"
                      id="nav-events-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-events"
                      type="button"
                      role="tab"
                      aria-controls="nav-events"
                      aria-selected="false"
                    >
                      <Text field={props.fields.Tab4Title} />
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-hotels"
                  role="tabpanel"
                  aria-labelledby="nav-hotels-tab"
                >
                  <div className="row">
                    <Placeholder
                      name={phKeyHotDealsTab1Items}
                      key={'hotDealsTab1Items'}
                      rendering={props.rendering}
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-tours"
                  role="tabpanel"
                  aria-labelledby="nav-tours-tab"
                >
                  <div className="row">
                    <Placeholder
                      name={phKeyHotDealsTab2Items}
                      key={'hotDealsTab2Items'}
                      rendering={props.rendering}
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-space"
                  role="tabpanel"
                  aria-labelledby="nav-space-tab"
                >
                  <div className="row">
                    <Placeholder
                      name={phKeyHotDealsTab3Items}
                      key={'hotDealsTab3Items'}
                      rendering={props.rendering}
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-events"
                  role="tabpanel"
                  aria-labelledby="nav-events-tab"
                >
                  <div className="row">
                    <Placeholder
                      name={phKeyHotDealsTab4Items}
                      key={'hotDealsTab4Items'}
                      rendering={props.rendering}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <AirlineHotDealsDefaultComponent {...props} />;
};
