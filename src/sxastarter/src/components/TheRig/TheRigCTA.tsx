import React from 'react';
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Title: TextField;
  Fact1: TextField;
  Fact2: TextField;
  Fact3: TextField;
  Fact4: TextField;
  Fact5: TextField;
  Fact1Figure: TextField;
  Fact2Figure: TextField;
  Fact3Figure: TextField;
  Fact4Figure: TextField;
  Fact5Figure: TextField;
}

type TheRigCTA = {
  params: { [key: string]: string };
  fields: Fields;
};

const TheRigCTADefaultComponent = (props: TheRigCTA): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: TheRigCTA): JSX.Element => {
  if (props.fields) {
    return (
      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 css-1lxviua">
        <img
          src="https://therig.sa/bg/line-break-career-partners.webp"
          className="css-42e7fn"
          alt=""
        />
        <style data-emotion="css p2upxh">{`
              .css-p2upxh {
                color: #ffffff;
                width: 100% !important;
                text-align: center;
                color: undefined;
              }
            `}</style>
        <div className="css-p2upxh">
          <div className="css-1pp2eok">JOIN OUR TEAM</div>
          <style data-emotion="css scoelx">{`
                .css-scoelx {
                  font-family: 'Changa', sans-serif !important;
                  font-style: normal;
                  font-size: 1.8rem;
                  line-height: 3.3rem;
                  font-weight: 300;
                  margin-bottom: 32px;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 300;
                  line-height: 160%;
                }
                .css-scoelx strong {
                  font-family: 'Changa', sans-serif !important;
                  font-style: normal;
                  font-size: 1.8rem;
                  line-height: 3.3rem;
                  font-weight: 300;
                  font-weight: 300;
                }
              `}</style>
          <div className="css-scoelx">Ready to take on your next adventure?</div>
          <div className="css-r2wt59">
            <Link className="css-1lzrdpk" href="/">
              CONTACT US
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-6flbmm"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="KeyboardDoubleArrowRightIcon"
              >
                <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <TheRigCTADefaultComponent {...props} />;
};