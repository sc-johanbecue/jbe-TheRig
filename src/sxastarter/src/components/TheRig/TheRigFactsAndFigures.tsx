import React from 'react';
import { Text, TextField } from '@sitecore-jss/sitecore-jss-nextjs';

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

type TheRigFactAndFiguresroProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const TheRigHeaderDefaultComponent = (props: TheRigFactAndFiguresroProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: TheRigFactAndFiguresroProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="css-fy3zvu">
        <style data-emotion="css 10r2m1s">{`
          .css-10r2m1s {
            padding: 80px 60px;
            margin: 0px;
            height: 405px;
          }
          @media screen and (max-width: 900px) {
            .css-10r2m1s {
              height: auto;
            }
          }
        `}</style>
        <div data-testid="FactsAndFigures" className="css-10r2m1s">
          <style data-emotion="css tuxzvu">{`
            .css-tuxzvu {
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
              margin-top: -8px;
              width: calc(100% + 8px);
              margin-left: -8px;
            }
            .css-tuxzvu > .MuiGrid-item {
              padding-top: 8px;
            }
            .css-tuxzvu > .MuiGrid-item {
              padding-left: 8px;
            }
          `}</style>
          <div
            className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-1 css-tuxzvu"
            style={{ margin: '0px' }}
          >
            <style data-emotion="css 15j76c0">{`
              .css-15j76c0 {
                box-sizing: border-box;
                margin: 0;
                -webkit-flex-direction: row;
                -ms-flex-direction: row;
                flex-direction: row;
                -webkit-flex-basis: 100%;
                -ms-flex-preferred-size: 100%;
                flex-basis: 100%;
                -webkit-box-flex: 0;
                -webkit-flex-grow: 0;
                -ms-flex-positive: 0;
                flex-grow: 0;
                max-width: 100%;
              }
              @media (min-width: 600px) {
                .css-15j76c0 {
                  -webkit-flex-basis: 100%;
                  -ms-flex-preferred-size: 100%;
                  flex-basis: 100%;
                  -webkit-box-flex: 0;
                  -webkit-flex-grow: 0;
                  -ms-flex-positive: 0;
                  flex-grow: 0;
                  max-width: 100%;
                }
              }
              @media (min-width: 900px) {
                .css-15j76c0 {
                  -webkit-flex-basis: 100%;
                  -ms-flex-preferred-size: 100%;
                  flex-basis: 100%;
                  -webkit-box-flex: 0;
                  -webkit-flex-grow: 0;
                  -ms-flex-positive: 0;
                  flex-grow: 0;
                  max-width: 100%;
                }
              }
              @media (min-width: 1200px) {
                .css-15j76c0 {
                  -webkit-flex-basis: 100%;
                  -ms-flex-preferred-size: 100%;
                  flex-basis: 100%;
                  -webkit-box-flex: 0;
                  -webkit-flex-grow: 0;
                  -ms-flex-positive: 0;
                  flex-grow: 0;
                  max-width: 100%;
                }
              }
              @media (min-width: 1536px) {
                .css-15j76c0 {
                  -webkit-flex-basis: 100%;
                  -ms-flex-preferred-size: 100%;
                  flex-basis: 100%;
                  -webkit-box-flex: 0;
                  -webkit-flex-grow: 0;
                  -ms-flex-positive: 0;
                  flex-grow: 0;
                  max-width: 100%;
                }
              }
            `}</style>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 css-15j76c0">
              <style data-emotion="css 1npb3ao">{`
                .css-1npb3ao {
                  font-family: 'Changa', sans-serif;
                  font-weight: 400;
                  font-size: 32px;
                  line-height: 3.25rem;
                  text-align: center;
                  margin-bottom: 60px;
                  color: #e1e5ee;
                }
              `}</style>
              <style data-emotion="css 1y5qbxs">{`
                .css-1y5qbxs {
                  margin: 0;
                  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
                  font-weight: 300;
                  font-size: 3.75rem;
                  line-height: 1.2;
                  letter-spacing: -0.00833em;
                  font-family: 'Changa', sans-serif;
                  font-weight: 400;
                  font-size: 32px;
                  line-height: 3.25rem;
                  text-align: center;
                  margin-bottom: 60px;
                  color: #e1e5ee;
                }
              `}</style>
              <h2
                className="MuiTypography-root MuiTypography-h2 css-1y5qbxs"
                style={{ textAlign: 'center' }}
              >
                <Text field={props.fields.Title} />
              </h2>
            </div>
          </div>
          <style data-emotion="css 1d3bbye">{`
            .css-1d3bbye {
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
            }
          `}</style>
          <div className="MuiGrid-root MuiGrid-container fact-grid css-1d3bbye">
            <style data-emotion="css 1q09act">{`
              .css-1q09act {
                box-sizing: border-box;
                margin: 0;
                -webkit-flex-direction: row;
                -ms-flex-direction: row;
                flex-direction: row;
                -webkit-flex-basis: 100%;
                -ms-flex-preferred-size: 100%;
                flex-basis: 100%;
                -webkit-box-flex: 0;
                -webkit-flex-grow: 0;
                -ms-flex-positive: 0;
                flex-grow: 0;
                max-width: 100%;
              }
              @media (min-width: 600px) {
                .css-1q09act {
                  -webkit-flex-basis: 100%;
                  -ms-flex-preferred-size: 100%;
                  flex-basis: 100%;
                  -webkit-box-flex: 0;
                  -webkit-flex-grow: 0;
                  -ms-flex-positive: 0;
                  flex-grow: 0;
                  max-width: 100%;
                }
              }
              @media (min-width: 900px) {
                .css-1q09act {
                  -webkit-flex-basis: 20%;
                  -ms-flex-preferred-size: 20%;
                  flex-basis: 20%;
                  -webkit-box-flex: 0;
                  -webkit-flex-grow: 0;
                  -ms-flex-positive: 0;
                  flex-grow: 0;
                  max-width: 20%;
                }
              }
              @media (min-width: 1200px) {
                .css-1q09act {
                  -webkit-flex-basis: 20%;
                  -ms-flex-preferred-size: 20%;
                  flex-basis: 20%;
                  -webkit-box-flex: 0;
                  -webkit-flex-grow: 0;
                  -ms-flex-positive: 0;
                  flex-grow: 0;
                  max-width: 20%;
                }
              }
              @media (min-width: 1536px) {
                .css-1q09act {
                  -webkit-flex-basis: 20%;
                  -ms-flex-preferred-size: 20%;
                  flex-basis: 20%;
                  -webkit-box-flex: 0;
                  -webkit-flex-grow: 0;
                  -ms-flex-positive: 0;
                  flex-grow: 0;
                  max-width: 20%;
                }
              }
            `}</style>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2.4 MuiGrid-grid-lg-2.4 en-grid-item css-1q09act">
              <style data-emotion="css 1wb1tnx">{`
                .css-1wb1tnx {
                  border-right: 2px solid #777777;
                }
                .css-1wb1tnx .breakLine {
                  display: none;
                }
                @media screen and (max-width: 899px) {
                  .css-1wb1tnx {
                    border-right: none;
                  }
                  .css-1wb1tnx .breakLine {
                    display: block;
                    width: 100px;
                    margin: 10px auto;
                  }
                  .css-1wb1tnx .last {
                    display: none;
                  }
                }
              `}</style>
              <div className="css-1wb1tnx">
                <style data-emotion="css 1q2jcol">{`
                  .css-1q2jcol {
                    font-family: 'Changa', sans-serif;
                    font-weight: 400;
                    color: #ff6a39;
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-align-items: center;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    -webkit-justify-content: center;
                    justify-content: center;
                    font-weight: 800;
                    font-size: 84px;
                    line-height: 60px;
                    padding-top: 40px;
                    position: relative;
                    text-align: center;
                  }
                  @media screen and (max-width: 1439px) {
                    .css-1q2jcol {
                      font-size: 48px;
                      line-height: 68px;
                      padding-top: 0;
                    }
                  }
                  .css-1q2jcol span {
                    font-size: 2.2rem;
                    font-family: 'Changa', sans-serif;
                    font-weight: 400;
                    color: inherit;
                    font-weight: 800;
                    text-transform: uppercase;
                    margin-left: 8px;
                  }
                  @media screen and (max-width: 899px) {
                    .css-1q2jcol span {
                      font-size: 1.8rem;
                      margin-left: 6px;
                    }
                  }
                `}</style>
                <div className="css-1q2jcol">
                  <Text field={props.fields.Fact1Figure} />
                </div>
                <style data-emotion="css 1b171hf">{`
                  .css-1b171hf {
                    font-family: 'Changa', sans-serif;
                    font-weight: 400;
                    color: #ff6a39;
                    font-weight: 500;
                    text-align: center;
                    padding-top: 10px;
                  }
                  .css-1b171hf span {
                    font-size: 18px;
                    font-family: 'Changa', sans-serif;
                    font-weight: 400;
                    color: #ffffff;
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 160%;
                  }
                  @media screen and (max-width: 1439px) {
                    .css-1b171hf span {
                      font-size: 14px;
                      padding-top: 0px;
                    }
                  }
                `}</style>
                <div className="css-1b171hf">
                  <span>
                    <Text field={props.fields.Fact1} />
                  </span>
                </div>
                <hr className="breakLine " />
              </div>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2.4 MuiGrid-grid-lg-2.4 en-grid-item css-1q09act">
              <div className="css-1wb1tnx">
                <div className="css-1q2jcol">
                  <Text field={props.fields.Fact2Figure} />
                </div>
                <div className="css-1b171hf">
                  <span>
                    <Text field={props.fields.Fact2} />
                  </span>
                </div>
                <hr className="breakLine " />
              </div>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2.4 MuiGrid-grid-lg-2.4 en-grid-item css-1q09act">
              <div className="css-1wb1tnx">
                <div className="css-1q2jcol">
                  <Text field={props.fields.Fact3Figure} />
                </div>
                <div className="css-1b171hf">
                  <span>
                    <Text field={props.fields.Fact3} />
                  </span>
                </div>
                <hr className="breakLine " />
              </div>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2.4 MuiGrid-grid-lg-2.4 en-grid-item css-1q09act">
              <div className="css-1wb1tnx">
                <div className="css-1q2jcol">
                  <Text field={props.fields.Fact4Figure} />
                </div>
                <div className="css-1b171hf">
                  <span>
                    {' '}
                    <Text field={props.fields.Fact4} />
                  </span>
                </div>
                <hr className="breakLine " />
              </div>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2.4 MuiGrid-grid-lg-2.4 en-grid-item css-1q09act">
              <div className="css-1wb1tnx">
                <div className="css-1q2jcol">
                  <Text field={props.fields.Fact5Figure} />
                </div>
                <div className="css-1b171hf">
                  <span>
                    <Text field={props.fields.Fact5} />
                  </span>
                </div>
                <hr className="breakLine last" />
              </div>
            </div>
          </div>
        </div>
        <style data-emotion="css 1xjbe9x">{`
          .css-1xjbe9x {
            position: absolute;
            bottom: -83px;
            background: url('/rust/rust-top-straight.webp'), transparent 50% / cover no-repeat;
            mix-blend-mode: plus-darker;
            width: 2000px;
            height: 166px;
            -webkit-filter: brightness(0);
            filter: brightness(0);
            left: -280px;
          }
          @media screen and (min-width: 1921px) {
            .css-1xjbe9x {
              left: 0;
            }
          }
        `}</style>
        <div className="css-1xjbe9x"></div>
      </div>
    );
  }

  return <TheRigHeaderDefaultComponent {...props} />;
};
