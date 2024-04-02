import React from 'react';
import {
  ImageField,
  TextField,
  RichTextField,
  Placeholder,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Number: TextField;
  Label: TextField;
  Name: TextField;
  Category: TextField;
  Family: TextField;
  ShortDescription: RichTextField;
  LongDescription: RichTextField;
  MasterAsset: ImageField;
}

type RollsRoyceThreeSignPostsProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const RollsRoyceThreeSignPostsDefaultComponent = (
  props: RollsRoyceThreeSignPostsProps
): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: RollsRoyceThreeSignPostsProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const phKeyColumnOne = `RollsRoyceSignPostsColumnOne-${props.params.DynamicPlaceholderId}`;
  const phKeyColumnTwo = `RollsRoyceSignPostsColumnTwo-${props.params.DynamicPlaceholderId}`;
  const phKeyColumnThree = `RollsRoyceSignPostsColumnTwo-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <div
        className="sub-section new-country-site-section clearfix new-module-spacing"
        id="inner-module---2-3-signposts"
      >
        <section
          id="module---2-3-signposts"
          className="2-3-signpost-module module-wrapper new-module-spacing"
        >
          <section className="padding20-mobile double-signpost-wrapper">
            <div className="container-fluid module-max-width">
              <div className="row">
                <div className="col-xs-12">
                  <div className="three-signpost-wrapper-inner">
                    <article
                      className="three-signpost three-signpost1 center"
                      id={id ? 'RollsRoyceSignPostsColumnOne' + id : undefined}
                    >
                      <Placeholder
                        name={phKeyColumnOne}
                        rendering={props.rendering}
                        className="three-signpost three-signpost1 center"
                      ></Placeholder>
                    </article>
                    <article
                      className="three-signpost three-signpost2 center"
                      id={id ? 'RollsRoyceSignPostsColumnTwo' + id : undefined}
                    >
                      <Placeholder
                        name={phKeyColumnTwo}
                        rendering={props.rendering}
                        className="three-signpost three-signpost2 center"
                      ></Placeholder>
                    </article>
                    <article
                      className="three-signpost three-signpost3 center"
                      id={id ? 'RollsRoyceSignPostsColumnThree' + id : undefined}
                    >
                      <Placeholder
                        name={phKeyColumnThree}
                        rendering={props.rendering}
                        className="three-signpost three-signpost3 center"
                      ></Placeholder>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }

  return <RollsRoyceThreeSignPostsDefaultComponent {...props} />;
};
