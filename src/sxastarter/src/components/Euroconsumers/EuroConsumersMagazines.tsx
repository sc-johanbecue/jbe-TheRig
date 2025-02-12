/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React from 'react';
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Title: TextField;
  Introduction: TextField;
  Content: TextField;
  AdditionalContent: TextField;
}

type EuroConsumersMagazines = {
  params: { [key: string]: string };
  fields: Fields;
};

const EuroConsumersMagazinesDefaultComponent = (props: EuroConsumersMagazines): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">EuroConsumers Header</span>
    </div>
  </div>
);

export const Default = (props: EuroConsumersMagazines): JSX.Element => {
  if (props.fields) {
    return (
      <>
        <style jsx>
          {`
            :root {
              --magazines-panel-card-background: #ffffff;
            }
            #magazines-panel-a76a2adb833d422dbc2b9632c285f942-id {
              background-color: #ffffff;
            }
          `}
        </style>
        <section
          className="section magazines-panel"
          id="magazines-panel-a76a2adb833d422dbc2b9632c285f942-id"
        >
          <div className="constrained">
            <div className="magazines-panel__header">
              <h2 className="stronger magazines-panel__header__title magazines-panel__header-text-color">
                Onze magazines
              </h2>
              <p className="magazines-panel__header__description magazines-panel__header-text-color">
                Hier vind je de nieuwste nummers terug van onze tijdschriften.
              </p>
            </div>
            <div
              className="flex__row magazines-panel__cards js-equal-heights"
              data-plugin="flickityCarousel"
              data-plugin-settings="#magazinesPanelFlickityCards"
              data-selector="magazines-panel-cards"
              style={{ height: 160 }}
            >
              <div
                className="flex__col-xs-10 flex__col-lg-4 box js-equal-heights-parent"
                data-selector="magazines-panel-cards-div"
              >
                <div
                  className="magazines-panel-card-item js-equal-heights-parent"
                  data-selector="magazines-panel-card-item"
                >
                  <Link
                    className="magazines-panel-card-item__clickable-zone"
                    href="/alle-inhoud/magazines?magazine=budget-en-recht"
                  >
                    <img
                      src="https://www.test-aankoop.be/-/media/ta/resources/paper publications/budget recht/2025/298/br_298/br298cover.jpg?rev=580ff9a2-15a0-44f2-85b3-3d21b4a6e60e&la=nl-BE&h=808&w=595&hash=D70C4F037A2F22A9EF1225FFB51F670D"
                      className="magazines-panel-card-item__image"
                      alt=""
                    />
                    <div className="magazines-panel-card-item__infos">
                      <h3 className="magazines-panel-card-item__infos__title stronger">
                        Budget &amp; Recht
                      </h3>
                      <span className="magazines-panel-card-item__infos__date-number">
                        januari 2025 - N° 298
                      </span>
                      <span
                        className="magazines-panel-card-item__infos__description"
                        data-selector="magazines-panel-card-item-description"
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div
                className="flex__col-xs-10 flex__col-lg-4 box js-equal-heights-parent"
                data-selector="magazines-panel-cards-div"
              >
                <div
                  className="magazines-panel-card-item js-equal-heights-parent"
                  data-selector="magazines-panel-card-item"
                >
                  <Link
                    className="magazines-panel-card-item__clickable-zone"
                    href="/alle-inhoud/magazines?magazine=testaankoop"
                  >
                    <img
                      src="https://www.test-aankoop.be/-/media/ta/resources/paper publications/testaankoop/2025/703/aa_703/aa703001001cover.jpg?rev=d1ebbc25-7262-4dc0-976c-b7d181c1d3ad&la=nl-BE&h=808&w=595&hash=6141DEBBE8EBC74507E33934895D3598"
                      className="magazines-panel-card-item__image"
                      alt=""
                    />
                    <div className="magazines-panel-card-item__infos">
                      <h3 className="magazines-panel-card-item__infos__title stronger">
                        Testaankoop
                      </h3>
                      <span className="magazines-panel-card-item__infos__date-number">
                        januari 2025 - N° 703
                      </span>
                      <span
                        className="magazines-panel-card-item__infos__description"
                        data-selector="magazines-panel-card-item-description"
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div
                className="flex__col-xs-10 flex__col-lg-4 box js-equal-heights-parent"
                data-selector="magazines-panel-cards-div"
              >
                <div
                  className="magazines-panel-card-item js-equal-heights-parent"
                  data-selector="magazines-panel-card-item"
                >
                  <Link
                    className="magazines-panel-card-item__clickable-zone"
                    href="/alle-inhoud/magazines?magazine=testaankoop-connect"
                  >
                    <img
                      src="https://www.test-aankoop.be/-/media/ta/resources/paper publications/test connect/2025/56/tcn56/cn56001001cover.jpg?rev=27518fce-5668-45b9-8ee9-39015b8988c4&la=nl-BE&h=901&w=664&hash=5305FB07783A467C4CCCABBF6345DD5C"
                      className="magazines-panel-card-item__image"
                      alt=""
                    />
                    <div className="magazines-panel-card-item__infos">
                      <h3 className="magazines-panel-card-item__infos__title stronger">
                        Testaankoop connect
                      </h3>
                      <span className="magazines-panel-card-item__infos__date-number">
                        januari 2025 - N° 56
                      </span>
                      <span
                        className="magazines-panel-card-item__infos__description"
                        data-selector="magazines-panel-card-item-description"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="magazines-panel__footer">
              <Link href="/alle-inhoud/magazines" className="magazines-panel__footer__link">
                <span>Bekijk alle magazines</span>
                <i className="icon icon-chevron-right" />
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return <EuroConsumersMagazinesDefaultComponent {...props} />;
};
