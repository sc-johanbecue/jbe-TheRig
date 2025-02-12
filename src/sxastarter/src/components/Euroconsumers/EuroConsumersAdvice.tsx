/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React from 'react';
import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Login: LinkField;
  Register: LinkField;
}

type EuroConsumersArticleProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const EuroConsumersArticleDefaultComponent = (props: EuroConsumersArticleProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">EuroConsumers Header</span>
    </div>
  </div>
);

export const Default = (props: EuroConsumersArticleProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="hub-description-advice theme--color-10">
        <div
          data-type="ALineHubDescriptionController"
          data-rendering="HubDescription"
          data-datasource="{87BB5B9C-D058-439C-8109-C2E0B1F5BBA0}"
          className=""
        >
          <div className="constrained">
            <div className="flex__row hub-description-advice__details align-central">
              <div className="flex__col-xs-12">
                <img
                  data-src="/-/media/global-artwork/home-appliances/cold-appliances/segments/seg-freezer-bottom.svg?rev=42bc3d04-fe3c-4d3a-857d-4717c757f2cc&amp;la=nl-BE&amp;h=276&amp;mw=315&amp;w=315&amp;hash=781D33BAA10E681B7D8134A295A4C96D"
                  className="margin--left-auto margin--right-auto"
                  height="276"
                  alt="Koelkast met diepvriezer onderaan"
                  width="315"
                  fetchPriority="high"
                  src="/-/media/global-artwork/home-appliances/cold-appliances/segments/seg-freezer-bottom.svg?rev=42bc3d04-fe3c-4d3a-857d-4717c757f2cc"
                />{' '}
              </div>
              <div className="flex__col-xs-12 padding--top-xlarge">
                <h1 className="beta stronger">Hoe kies je een koelkast?</h1>
                <h2 className="stronger margin--bottom-xsmall"></h2>
                <p className="no-margin">
                  Ben je op zoek naar een nieuwe koelkast, met of zonder diepvriezer, dan heb je een
                  steeds uitgebreider en gevarieerder gamma om uit te kiezen. Belangrijk is dat je
                  een model kiest dat voldoet aan jouw behoeften. Hoe? We overlopen de belangrijkste
                  criteria.
                </p>

                <div className="padding--top-large padding--bottom-xsmall">
                  <div
                    data-type="ALineBookmarkSharePrintContainerController"
                    data-rendering="BookmarkSharePrintContainer"
                    className=""
                  >
                    <div
                      className="social js-socialshare social--left social--nocount save-share"
                      data-selector="social-share"
                      style={{ marginTop: '0px' }}
                    >
                      <div
                        data-type="ALineBookmarkWidgetController"
                        data-rendering="BookmarkWidgetV2"
                        className=""
                      >
                        <div className="relative" data-selector="bookmark">
                          <Link
                            href="javascript:void(0)"
                            title="Naar bewaarde artikelen"
                            data-plugin="tooltip"
                            data-plugin-settings="#authentication-callout-settings-bookmark"
                            className="anonymous icon icon-bookmark-outlined has-plugin"
                          ></Link>
                        </div>
                      </div>

                      <div
                        data-type="ALineShareLinksController"
                        data-rendering="ShareLinksV2"
                        className=""
                      >
                        <div
                          data-selector="share-links"
                          className="share-links share-links--single-page"
                        >
                          <Link
                            href="https://www.facebook.com/sharer/sharer.php?u=https%3a%2f%2fwww.test-aankoop.be%2fhuishoudelektro%2fkoelkasten%2fhoe-kiezen?skipbean=true"
                            className="icon icon-facebook social__section--facebook "
                            title="Deel op Facebook"
                          >
                            Deel op Facebook
                          </Link>
                          <Link
                            href="https://twitter.com/intent/tweet?url=https%3a%2f%2fwww.test-aankoop.be%2fhuishoudelektro%2fkoelkasten%2fhoe-kiezen?skipbean=true&amp;via=Testaankoop&amp;text=Een+koelkast+kiezen"
                            className="icon icon-twitter social__section--twitter "
                            title="Deel op Twitter"
                          >
                            Deel op Twitter
                          </Link>

                          <Link
                            href="#email-modal"
                            data-selector="email-popup-trigger"
                            data-url-publication-link="sec://realm/euroconsumers.pro.sitecorecd.nl-be/I_JYgsOrPZ4gTkOy-viAqX-M-vES9nJyHOzXmqvsXCxqYpOfGP1OLraz1aA9zOU7A_ItfQnjuea9vAlrZrm6AY5poET9vY1PYlx1ALMeWKQV7jmSXTJF2uzG2kA46_rPG8y7i0gfTaeweD9dglbWh70A7HA1"
                            title=""
                            className="icon icon-mail"
                          >
                            Send by Email
                          </Link>
                        </div>
                        <Link href="#" className="icon icon-share">
                          Share..
                        </Link>

                        <div
                          id="form-send-email"
                          data-plugin="form"
                          data-plugin-settings="#send-mail-settings"
                          className="has-plugin"
                        >
                          <input
                            name="send-mail-trigger"
                            className="send-mail-trigger"
                            type="checkbox"
                            hidden
                          />
                        </div>
                        <script id="send-mail-settings" type="application/json">
                          {/* {
	    "endpoint": "/ALineAPI/ALineShareLinks/RenderSendMail/affb7912-bf78-418d-a679-e5b1e41816e1?Contoller=ALineShareLinks",
	    "submitField": ".send-mail-trigger",
	    "validate": false,
	    "onCreateFn": "EC.SendEmail.SendMailInit",
	    "onSuccessFn": "EC.SendEmail.RenderSendMail"
	    } */}
                        </script>
                      </div>

                      <div
                        data-type="AlinePrintSendMailController"
                        data-rendering="PrintWidgetV2"
                        className=""
                      >
                        <div className="social__section social__section--bookmark">
                          <Link
                            href=""
                            className="js-print social__link social__link--main_link action-link has-plugin"
                            data-plugin="printSitecore"
                            data-plugin-settings="#print-settings"
                            title=""
                          >
                            <i className="icon-printer ">
                              <span className="visuallyhidden">Print</span>
                            </i>
                          </Link>
                        </div>

                        <script type="application/json" id="print-settings">
                          {}
                        </script>
                      </div>

                      <div
                        data-type="ALineSubscribeWidgetController"
                        data-rendering="SubscribeWidget"
                        className="follow-interest"
                      >
                        <style jsx>
                          {`
                            a.temporaryfix,
                            a.temporaryfix i:before {
                              color: #6a6a69 !important;
                              transition: all 500ms !important;
                            }

                            a.temporaryfix:hover,
                            a.temporaryfix:hover i:before {
                              color: #303030 !important;
                              transition: all 500ms !important;
                            }

                            @media screen and (max-width: 850px) {
                              [data-rendering='SubscribeWidget'] {
                                width: 100%;
                                display: block;
                              }
                            }
                          `}
                        </style>

                        <div className="social__section social__section--bookmark">
                          <label
                            data-plugin="tooltip"
                            title=""
                            data-plugin-settings="#authentication-callout-settings-general"
                            className="has-plugin"
                          >
                            <i className="icon icon-bell-outline social__link social__link--main_link">
                              <span className="visuallyhidden">VOLG</span>
                            </i>
                            <strong>VOLG</strong> - Koelkasten
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <EuroConsumersArticleDefaultComponent {...props} />;
};
