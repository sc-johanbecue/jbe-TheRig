import React from 'react';
import { ImageField, TextField, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import Image from 'next/image';

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

type RollsRoyceHeaderProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const RollsRoyceHeaderDefaultComponent = (props: RollsRoyceHeaderProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: RollsRoyceHeaderProps): JSX.Element => {
  if (props.fields) {
    return (
      <>
        <div className="ts-image">
          <Image
            src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/signposts/power-of-trent-signpost.jpg?h=375&amp;iar=0&amp;w=570"
            alt=""
            width="570"
            height="375"
          />
        </div>
        <div className="ts-content">
          <div className="tsVcenter">
            <div className="tsHover">
              <div className="three-sp-title">
                <h4 className="mixbold font21">Power of Trent</h4>
              </div>
              <div className="font18 mixlight">
                <p>
                  For nearly three decades, our family of turbofan aircraft engines have continued
                  to push the boundaries of what is possible, as each new model sets new performance
                  benchmarks for civil aviation.
                </p>
              </div>
              <div className="in-signpost">
                <span className="rad-link">
                  <Link
                    href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/power-of-trent.aspx"
                    className="attachment-link"
                  >
                    LEARN MORE
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <RollsRoyceHeaderDefaultComponent {...props} />;
};
