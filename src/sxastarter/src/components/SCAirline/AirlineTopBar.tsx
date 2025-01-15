import React from 'react';
import { LinkField, TextField, Text, Link as JssLink } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Phonenumber: TextField;
  Email: LinkField;
  OptionLink1: LinkField;
  OptionLink2: LinkField;
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
  if (props.fields) {
    return (
      <div className="topbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <ul className="topbar-list">
                <li>
                  <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                  <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">
                    <span>
                      <Text field={props.fields.Phonenumber} />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">
                    <span>
                      <JssLink field={props.fields.Email} />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6">
              <ul className="topbar-others-options">
                <li>
                  <JssLink field={props.fields.OptionLink1} />
                  <a href="https://www.sportingkampenhout.be/Sitecore/airline/login">Login</a>
                </li>
                <li>
                  <JssLink field={props.fields.OptionLink2} />
                  <a href="https://www.sportingkampenhout.be/Sitecore/airline/register">Sign up</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <AirlineTopBarDefaultComponent {...props} />;
};
