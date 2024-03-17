import React from 'react';
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';

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

type TheRigESG = {
  params: { [key: string]: string };
  fields: Fields;
};

const TheRigHeaderDefaultComponent = (props: TheRigESG): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: TheRigESG): JSX.Element => {
  if (props.fields) {
    return (
      <div data-testid="egs-block-wrapper" className="css-i9vblt">
        <div className="css-8hvgb2">
          <div typeof="video/mp4" className="css-ly8dp0">
            <div style={{ width: '100%', height: '100%;' }}>
              <video
                src="https://therig.sa/bg/egs.mp4"
                preload="auto"
                autoPlay={false}
                loop={false}
                playsInline={false}
                webkit-playsinline=""
                x5-playsinline=""
                style={{ width: '100%', height: '100%;' }}
              ></video>
            </div>
          </div>
        </div>
        <div className="MuiContainer-root MuiContainer-maxWidthLg css-18czceh">
          <div className="MuiGrid-root MuiGrid-direction-xs-row MuiGrid-grid-md-12 MuiGrid-grid-sm-12 MuiGrid-grid-xs-12 MuiGrid-grid-lg-12 egs-grid css-48vdzh">
            <div className="css-108vj9e">
              <b>THE RIG.</b> ENVIRONMENT, SOCIAL AND GOVERNANCE AMBITION
            </div>
            <div className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-row MuiGrid-spacing-xs-3 en-grid-item css-v57kt1">
              <div className="MuiGrid-root MuiGrid-direction-xs-row MuiGrid-grid-sm-12 MuiGrid-grid-xs-12 MuiGrid-grid-md-3 MuiGrid-grid-lg-3 egsGrid css-b3tb0r">
                <div className="css-1yjs7k1">
                  <div className="css-1hikysy">
                    <img
                      alt=""
                      loading="lazy"
                      width="80"
                      height="80"
                      decoding="async"
                      data-nimg="1"
                      className="css-12mq798"
                      style={{ color: 'transparent' }}
                      srcSet="https://therig.sa/_next/image/?url=%2Fegs%2F1.png&amp;w=96&amp;q=75 1x, https://therig.sa/_next/image/?url=%2Fegs%2F1.png&amp;w=256&amp;q=75 2x"
                      src="https://therig.sa/_next/image/?url=%2Fegs%2F1.png&amp;w=256&amp;q=75"
                    />
                    <div className="css-mxs5mc">
                      Maximize positive <br /> environmental impact
                    </div>
                  </div>
                  <hr
                    style={{
                      height: '0.2px',
                      borderWidth: '0',
                      color: '#003B5C',
                      backgroundColor: '#003B5C',
                    }}
                    className="breakLine "
                  />
                </div>
              </div>
              <div className="MuiGrid-root MuiGrid-direction-xs-row MuiGrid-grid-sm-12 MuiGrid-grid-xs-12 MuiGrid-grid-md-3 MuiGrid-grid-lg-3 egsGrid css-b3tb0r">
                <div className="css-1yjs7k1">
                  <div className="css-1hikysy">
                    <img
                      alt=""
                      loading="lazy"
                      width="80"
                      height="80"
                      decoding="async"
                      data-nimg="1"
                      className="css-12mq798"
                      style={{ color: 'transparent' }}
                      srcSet="https://therig.sa/_next/image/?url=%2Fegs%2F2.png&amp;w=96&amp;q=75 1x, https://therig.sa/_next/image/?url=%2Fegs%2F2.png&amp;w=256&amp;q=75 2x"
                      src="https://therig.sa/_next/image/?url=%2Fegs%2F2.png&amp;w=256&amp;q=75"
                    />
                    <div className="css-mxs5mc">
                      Empower <br /> communities
                    </div>
                  </div>
                  <hr
                    style={{
                      height: '0.2px',
                      borderWidth: '0',
                      color: '#003B5C',
                      backgroundColor: '#003B5C',
                    }}
                    className="breakLine "
                  />
                </div>
              </div>
              <div className="MuiGrid-root MuiGrid-direction-xs-row MuiGrid-grid-sm-12 MuiGrid-grid-xs-12 MuiGrid-grid-md-3 MuiGrid-grid-lg-3 egsGrid css-b3tb0r">
                <div className="css-1yjs7k1">
                  <div className="css-1hikysy">
                    <img
                      alt=""
                      loading="lazy"
                      width="80"
                      height="80"
                      decoding="async"
                      data-nimg="1"
                      className="css-12mq798"
                      style={{ color: 'transparent' }}
                      srcSet="https://therig.sa/_next/image/?url=%2Fegs%2F3.png&amp;w=96&amp;q=75 1x, https://therig.sa/_next/image/?url=%2Fegs%2F3.png&amp;w=256&amp;q=75 2x"
                      src="https://therig.sa/_next/image/?url=%2Fegs%2F3.png&amp;w=256&amp;q=75"
                    />
                    <div className="css-mxs5mc">
                      Facilitate eco <br /> experiences
                    </div>
                  </div>
                  <hr
                    style={{
                      height: '0.2px',
                      borderWidth: '0',
                      color: '#003B5C',
                      backgroundColor: '#003B5C',
                    }}
                    className="breakLine "
                  />
                </div>
              </div>
              <div className="MuiGrid-root MuiGrid-direction-xs-row MuiGrid-grid-sm-12 MuiGrid-grid-xs-12 MuiGrid-grid-md-3 MuiGrid-grid-lg-3 egsGrid css-b3tb0r">
                <div className="css-1yjs7k1">
                  <div className="css-1hikysy">
                    <img
                      alt=""
                      loading="lazy"
                      width="80"
                      height="80"
                      decoding="async"
                      data-nimg="1"
                      className="css-12mq798"
                      style={{ color: 'transparent' }}
                      srcSet="https://therig.sa/_next/image/?url=%2Fegs%2F4.png&amp;w=96&amp;q=75 1x, https://therig.sa/_next/image/?url=%2Fegs%2F4.png&amp;w=256&amp;q=75 2x"
                      src="https://therig.sa/_next/image/?url=%2Fegs%2F4.png&amp;w=256&amp;q=75"
                    />
                    <div className="css-mxs5mc">
                      Operate <br /> Responsibly
                    </div>
                  </div>
                  <hr
                    style={{
                      height: '0.2px',
                      borderWidth: '0',
                      color: '#003B5C',
                      backgroundColor: '#003B5C',
                    }}
                    className="breakLine last"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="css-13wifey"></div>
      </div>
    );
  }

  return <TheRigHeaderDefaultComponent {...props} />;
};
