import React from 'react';
import {
  ImageField,
  TextField,
  RichTextField,
  Image,
  Text,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  data: {
    datasource: {
      BannerTitle: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      BannerParaphrase: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      BannerBody: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      BannerImage: {
        jsonValue: {
          value: {
            src: string;
            alt: string;
            width: string;
            height: string;
          };
          editable: string;
        };
      };
    };
    contextItem: {
      BannerTitle: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      BannerParaphrase: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      BannerBody: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      BannerImage: {
        jsonValue: {
          value: {
            src: string;
            alt: string;
            width: string;
            height: string;
          };
          editable: string;
        };
      };
    };
  };
}

type RollsRoyceProductBannerProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const RollsRoyceProductBannerDefaultComponent = (
  props: RollsRoyceProductBannerProps
): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: RollsRoyceProductBannerProps): JSX.Element => {
  const datasource = props.fields?.data?.datasource || props.fields?.data?.contextItem;

  const BannerTitle: TextField = {
    value: datasource?.BannerTitle?.jsonValue?.value,
    editable: datasource?.BannerTitle?.jsonValue?.editable,
  };

  const BannerParaphrase: TextField = {
    value: datasource?.BannerParaphrase?.jsonValue?.value,
    editable: datasource?.BannerParaphrase?.jsonValue?.editable,
  };

  const BannerBody: RichTextField = {
    value: datasource?.BannerBody?.jsonValue?.value,
    editable: datasource?.BannerBody?.jsonValue?.editable,
  };

  const BannerImage: ImageField = {
    value: { src: datasource?.BannerImage?.jsonValue?.value?.src },
    editable: datasource?.BannerImage?.jsonValue?.editable,
  };

  const backgroundStyle = `url(${BannerImage.value?.src}) no-repeat scroll center center`;

  if (props.fields) {
    return (
      <div className="homecontentwrapper   add-padding-for-sticky     ">
        <div className="home-banner-fw new-video-fw clearfix fw-video-container ">
          <div
            className="video_fade home-banner-fw-inner"
            style={{
              background: backgroundStyle,
              backgroundSize: 'cover',
            }}
          >
            <div className="banner-mobi-img">
              <Image field={BannerImage} className="fw-mobi-banner-img" />
              <Image field={BannerImage} className="fw-1399-banner-img" />
            </div>

            <div className="max-width-content-no-image">
              <div className="home-content-fw NavyBlue">
                <div className="home-content-fw-inner White">
                  <p className="msBannerTitle trueBannerImage White">
                    <Text field={BannerTitle} />
                  </p>

                  <div className="bannerpara White">
                    <Text field={BannerParaphrase} />
                  </div>

                  <div className="fw-bnr-body-copy font18">
                    <p>
                      <RichText field={BannerBody} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <RollsRoyceProductBannerDefaultComponent {...props} />;
};
