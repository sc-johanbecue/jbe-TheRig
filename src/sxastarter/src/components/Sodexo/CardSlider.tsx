import React from 'react';
import {
  TextField,
  ImageField,
  RichTextField,
  LinkField,
  Text,
  Link as JssLink,
  Image as JssImage,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Title1: TextField;
  Text1: RichTextField;
  Link1: LinkField;
  Image1: ImageField;
  Title2: TextField;
  Text2: RichTextField;
  Link2: LinkField;
  Image2: ImageField;

  Title3: TextField;
  Text3: RichTextField;
  Link3: LinkField;
  Image3: ImageField;
}

type SodexoBannerProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const SodexoBannerDefaultComponent = (props: SodexoBannerProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: SodexoBannerProps): JSX.Element => {
  if (props.fields) {
    return (
      <>
        <style jsx>{`
          @media (min-width: 768px) {
            :global(.CardsSlider_cards-slider__item__ZGzEh) {
              flex: 0 0 33.3%;
              max-width: 33.3%;
            }
          }

          @media (max-width: 767px) {
            :global(.CardsSlider_cards-slider__item__ZGzEh) {
              flex: 0 0 100%;
              max-width: 100%;
            }
          }

          :global(.splide__list) {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
          }
        `}</style>
        <section
          className="CardsSlider_cards-slider__fSELa"
          id="bf831cab-1a1c-45ea-b9c3-ac49ac2815a2"
        >
          <section
            className="splide splide Slider_slider__CJilF cards-slider__slider"
            aria-labelledby=""
            aria-roledescription="carousel"
            data-grid-layout="global"
            role="region"
          >
            <div
              className="splide__track CardsSlider_cards-slider__slides__8FwQ9"
              aria-atomic="false"
              aria-live="polite"
            >
              <ul className="splide__list">
                <li
                  className="splide__slide CardsSlider_cards-slider__item__ZGzEh"
                  role="group"
                  style={{ visibility: 'visible' }}
                >
                  <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                    <div className="Card_card-container__picture__q2urq">
                      <JssImage field={props.fields.Image1} />
                      <img
                        alt="Modern-Recipe-Banner-Card"
                        fetchPriority="high"
                        decoding="async"
                        data-nimg="fill"
                        // style={{
                        //   position: 'absolute',
                        //   height: '100%',
                        //   width: '100%',
                        //   left: '0',
                        //   top: '0',
                        //   right: '0',
                        //   bottom: '0',
                        //   objectFit: 'cover',
                        //   color: 'transparent',
                        // }}
                        src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/BannerCard-503x503/Modern-Recipe-Banner-Card.jpg?h=608&amp;iar=0&amp;w=608"
                      />
                    </div>
                    <section className="Card_card-container__presentation__Q_aCH">
                      <p className="Card_card-container__presentation-typo__1ENx9 Card_font-body__qRScb Card_font-bold__8gf2G">
                        <Text field={props.fields.Title1} />
                        All day food for modern living
                      </p>
                      <div className="Card_font-h4__Idw5p Card_font-base__PyGMI">
                        <RichText field={props.fields.Text1} />
                        Modern Recipe is designed to meet expectations of today&quot;s
                        talents, bringing together the ingredients that matter the most
                        for top-notch corporate dining experiences. 
                      </div>
                      <div className="Card_card-container__presentation-buttons__rDbZU">
                        <JssLink field={props.fields.Link1} />
                        <Link
                          title="Opens page (same window)"
                          target="_self"
                          className="Button_btn__Xvq6a card-container__presentation-buttons-link Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                          href="/brands-services/food/brands/modern-recipe"
                        >
                          Learn more
                          <span
                            className="Icon_icon__qNAb6 Icon_icon--red__KxdQl Icon_icon--arrow-rtl__xN7T5"
                            style={{ height: '24px', width: '24px' }}
                          >
                            <svg aria-hidden="true" viewBox="0 0 24 24">
                              <use xlinkHref="#icons_arrow"></use>
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </section>
                  </article>
                </li>
                <li
                  className="splide__slide CardsSlider_cards-slider__item__ZGzEh"
                  role="group"
                  style={{ visibility: 'visible' }}
                >
                  <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                    <div className="Card_card-container__picture__q2urq">
                      <JssImage field={props.fields.Image2} />
                      <img
                        alt="Kitchen-Works-Banner-Card"
                        fetchPriority="high"
                        decoding="async"
                        data-nimg="fill"
                        // style={{
                        //   position: 'absolute',
                        //   height: '100%',
                        //   width: '100%',
                        //   left: '0',
                        //   top: '0',
                        //   right: '0',
                        //   bottom: '0',
                        //   objectFit: 'cover',
                        //   color: 'transparent',
                        // }}
                        src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/BannerCard-503x503/Kitchen-Works-Banner-Card.jpg?h=608&amp;iar=0&amp;w=608"
                      />
                    </div>
                    <section className="Card_card-container__presentation__Q_aCH">
                      <p className="Card_card-container__presentation-typo__1ENx9 Card_font-body__qRScb Card_font-bold__8gf2G">
                        <Text field={props.fields.Title2} />
                        Making eating well, easy
                      </p>
                      <div className="Card_font-h4__Idw5p Card_font-base__PyGMI">
                        <RichText field={props.fields.Text2} />
                        Delicious, honest food, in great company and in an environment where you can
                        truly disconnect from work. A no-compromise approach to convenience, value,
                        taste, nutrition and freshness.{' '}
                      </div>
                      <div className="Card_card-container__presentation-buttons__rDbZU">
                        <JssLink field={props.fields.Link2} />
                        <Link
                          title="Opens page (same window)"
                          target="_self"
                          className="Button_btn__Xvq6a card-container__presentation-buttons-link Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                          href="/brands-services/food/brands/kitchen-works"
                        >
                          Learn more
                          <span
                            className="Icon_icon__qNAb6 Icon_icon--red__KxdQl Icon_icon--arrow-rtl__xN7T5"
                            style={{ height: '24px', width: '24px' }}
                          >
                            <svg aria-hidden="true" viewBox="0 0 24 24">
                              <use xlinkHref="#icons_arrow"></use>
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </section>
                  </article>
                </li>
                <li
                  className="splide__slide CardsSlider_cards-slider__item__ZGzEh"
                  role="group"
                  style={{ visibility: 'visible' }}
                >
                  <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                    <div className="Card_card-container__picture__q2urq">
                      <JssImage field={props.fields.Image3} />
                      <img
                        alt="The-good-eating-company-Banner-Card"
                        fetchPriority="high"
                        decoding="async"
                        data-nimg="fill"
                        // style={{
                        //   position: 'absolute',
                        //   height: '100%',
                        //   width: '100%',
                        //   left: '0',
                        //   top: '0',
                        //   right: '0',
                        //   bottom: '0',
                        //   objectFit: 'cover',
                        //   color: 'transparent',
                        // }}
                        src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/BannerCard-503x503/The-good-eating-company-Banner-Card.jpg?h=608&amp;iar=0&amp;w=608"
                      />
                    </div>
                    <section className="Card_card-container__presentation__Q_aCH">
                      <p className="Card_card-container__presentation-typo__1ENx9 Card_font-body__qRScb Card_font-bold__8gf2G">
                        <Text field={props.fields.Title3} />
                        Discover new depths of delicious
                      </p>
                      <div className="Card_font-h4__Idw5p Card_font-base__PyGMI">
                        <RichText field={props.fields.Text3} />
                        At The Good Eating Company, we are passionate about simple cuisine, made
                        exceptionally well. We curate food experiences that put a twist on the
                        ordinary, inviting guests to discover new depths of delicious each day.{' '}
                      </div>
                      <div className="Card_card-container__presentation-buttons__rDbZU">
                        <JssLink field={props.fields.Link3} />
                        <Link
                          title="Opens page (same window)"
                          target="_self"
                          className="Button_btn__Xvq6a card-container__presentation-buttons-link Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                          href="/brands-services/food/brands/the-good-eating-company"
                        >
                          Learn more
                          <span
                            className="Icon_icon__qNAb6 Icon_icon--red__KxdQl Icon_icon--arrow-rtl__xN7T5"
                            style={{ height: '24px', width: '24px' }}
                          >
                            <svg aria-hidden="true" viewBox="0 0 24 24">
                              <use xlinkHref="#icons_arrow"></use>
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </section>
                  </article>
                </li>
              </ul>
            </div>
            <button className="Button_btn__Xvq6a CardsSlider_cards-slider__link__89T9S Button_btn--blue__16_CO Button_btn--reverse__NQ5qh Button_btn--underlined__broDi Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"></button>
            <div
              className="SliderControls_slider-controls__t9rMj CardsSlider_cards-slider__navigation__quABb"
              data-testid="slider-controls"
            >
              <ul className="splide__arrows SliderArrows_slider-arrows__n89FR SliderControls_slider-controls__arrows__wFqwO SliderControls_slider-controls__arrows--hidden__apV18">
                <li className="splide__arrow--prev SliderArrows_slider-arrows__arrow__d8O_p">
                  <button
                    aria-label="Previous slide"
                    className="Button_btn__Xvq6a SliderArrows_slider-arrows__arrow--rotated__VJ_fE Button_btn--unshaped__MfqLg"
                  >
                    <span className="Icon_icon__qNAb6 SliderArrows_slider-arrows__arrow-icon__qHj5H Icon_icon--white__ymQDN Icon_icon--arrow-rtl__xN7T5 Icon_icon--bg-red__sbGiT">
                      <svg aria-hidden="false">
                        <use xlinkHref="#icons_chevron"></use>
                      </svg>
                    </span>
                  </button>
                </li>
                <li className="splide__arrow--next SliderArrows_slider-arrows__arrow__d8O_p">
                  <button
                    aria-label="Next slide"
                    className="Button_btn__Xvq6a Button_btn--unshaped__MfqLg"
                  >
                    <span className="Icon_icon__qNAb6 SliderArrows_slider-arrows__arrow-icon__qHj5H Icon_icon--white__ymQDN Icon_icon--arrow-rtl__xN7T5 Icon_icon--bg-red__sbGiT">
                      <svg aria-hidden="false">
                        <use xlinkHref="#icons_chevron"></use>
                      </svg>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </section>
        </section>
      </>
    );
  }

  return <SodexoBannerDefaultComponent {...props} />;
};
