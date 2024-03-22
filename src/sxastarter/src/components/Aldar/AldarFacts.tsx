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
      <div className="component summary margin-bottom-80">
        <section className="facts padding-bottom-80" data-animation="">
          <div className="container typos --box-shadow margin-bottom-40" data-animation="">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-10">
                <p className="typos-lower-header-description">As of 2022</p>
                <h2 className="h2 h2--box typos__heading">
                  <Text field={props.fields.Heading} />
                </h2>
              </div>
              <div className="w-100 d-lg-none"></div>
              <div className="col-1 d-lg-none"></div>
              <div className="col-10 col-md-7">
                <div className="typos__holder"></div>
              </div>
            </div>
          </div>
          <div className="container facts__item-container">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-12 col-lg-8">
                <div className="contaier">
                  <div className="row no-gutters facts__item-row">
                    <div className="col-12 col-lg-3 ">
                      <div className="facts__item with-border">
                        <img
                          src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/homepage-icons/aldar-in-numbers-1.svg?h=80&amp;iar=0&amp;w=80&amp;rev=63605cb08c20489ba25a88498ff85e57"
                          alt="Agreement Icon"
                          width="80"
                          height="80"
                        />
                        <small>Over</small>
                        <h3 className="h3">53,000</h3>
                        <p className="body-text-14--medium">Residential Units</p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-3 ">
                      <div className="facts__item with-border">
                        <img
                          src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/homepage-icons/aldar-in-numbers-2.svg?h=80&amp;iar=0&amp;w=80&amp;rev=5a447a1677dc4224b4fcf580bece9f49"
                          alt="Table Icon "
                          width="80"
                          height="80"
                        />
                        <small>SQM</small>
                        <h3 className="h3">1M+</h3>
                        <p className="body-text-14--medium">Office Space</p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-3 ">
                      <div className="facts__item with-border">
                        <img
                          src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/homepage-icons/aldar-in-numbers-3.svg?h=80&amp;iar=0&amp;w=80&amp;rev=ce1f96d8642e4fe98c6c3f3edc01fd01"
                          alt="Briefcase icon"
                          width="80"
                          height="80"
                        />
                        <small>SQM/GLA</small>
                        <h3 className="h3">600,000 +</h3>
                        <p className="body-text-14--medium">Retail Space</p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-3 ">
                      <div className="facts__item with-border">
                        <img
                          src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/homepage-icons/aldar-in-numbers-5.svg?h=80&amp;iar=0&amp;w=80&amp;rev=3f27a8539eee4d7d995762dfe349ac0c"
                          alt="Hotel bell icon"
                          width="80"
                          height="80"
                        />
                        <small>rooms and suites</small>
                        <h3 className="h3">2,758</h3>
                        <p className="body-text-14--medium">Hospitality</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100 d-lg-none"></div>
              <div className="col-2 d-lg-none"></div>
              <div className="col-10 col-lg-3">
                <figure className="facts__image-container">
                  <img
                    src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/our-businesses/aldar-in-numbers.jpg?h=436&amp;iar=0&amp;w=372&amp;rev=040e4094dd894a488d71f1ae179089ed"
                    alt="Aldar in Numbers Infographic"
                    width="372"
                    height="436"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return <AldarFactsDefaultComponent {...props} />;
};
