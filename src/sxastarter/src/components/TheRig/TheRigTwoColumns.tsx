import React from 'react';
import {
  TextField,
  Placeholder,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';

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

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const TheRigTwoColumnsDefaultComponent = (props: ComponentProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const phKeyColumnOne = `theRigColumnOne-${props.params.DynamicPlaceholderId}`;
  const phKeyColumnTwo = `theRigColumnTwo-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <section
        className="MuiContainer-root MuiContainer-maxWidthLg css-17fx44v"
        id={id ? id : undefined}
      >
        <style data-emotion="css a36zzi">{`
          .css-a36zzi {
            background: url(https://therig.sa/rust/dash.png), transparent 50% / cover no-repeat;
            position: absolute;
            left: 0px;
            min-width: 100%;
            height: 15px;
          }
        `}</style>
        <div className="css-a36zzi"></div>
        <style data-emotion="css si4eiy">{`
          .css-si4eiy {
            width: 100%;
            background: url('https://therig.sa/career/bg.webp'), transparent 50% / cover no-repeat;
          }
          @media screen and (max-width: 899px) {
            .css-si4eiy {
              background: none;
              mix-blend-mode: normal;
            }
          }
        `}</style>
        <style data-emotion="css 1v3kjg">{`
          .css-1v3kjg {
            box-sizing: border-box;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-flex-wrap: wrap;
            -webkit-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            width: 100%;
            -webkit-flex-direction: row;
            -ms-flex-direction: row;
            flex-direction: row;
            width: 100%;
            background: url('https://therig.sa/career/bg.webp'), transparent 50% / cover no-repeat;
          }
          @media screen and (max-width: 899px) {
            .css-1v3kjg {
              background: none;
              mix-blend-mode: normal;
            }
          }
        `}</style>
        <div className="MuiGrid-root MuiGrid-container css-1v3kjg">
          <style data-emotion="css kji4kb">{`
            .css-kji4kb {
              position: relative;
              padding: 80px 50px 80px;
            }
            @media screen and (max-width: 899px) {
              .css-kji4kb {
                padding: 80px 50px 80px;
                -webkit-box-pack: start;
                -ms-flex-pack: start;
                -webkit-justify-content: start;
                justify-content: start;
              }
            }
          `}</style>

          <Placeholder name={phKeyColumnOne} rendering={props.rendering} />

          <style data-emotion="css n326iy">{`
            .css-n326iy {
              padding: 80px 50px 80px;
              position: relative;
            }
            @media screen and (max-width: 899px) {
              .css-n326iy {
                background: url('https://therig.sa/bg/line-break-top.png') no-repeat 100% -80px/2000px 160px 160px #ff6a39;
                padding: 80px 50px 80px;
              }
            }
          `}</style>

          <Placeholder name={phKeyColumnTwo} rendering={props.rendering} />
        </div>
      </section>
    );
  }

  return <TheRigTwoColumnsDefaultComponent {...props} />;
};
