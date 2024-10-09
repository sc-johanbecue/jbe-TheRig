import Link from 'next/link';
import React from 'react';

import {
  LinkField,
  Link as JssLink,
  ImageField,
  Image as JssImage,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  UserGuideLink: LinkField;
  UserGuideImage: ImageField;
}

type DubaiWTCInfoButtonsProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const DubaiWTCInfoButtons = (props: DubaiWTCInfoButtonsProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  // const isPageEditing = sitecoreContext.pageEditing;

  const LinkImage = () => <JssImage field={props.fields.UserGuideImage} />;

  return (
    <div className="mi_button_wrapp np ">
      <div className="mi_video_btn_wrap">
        <div className="mi_video_btn">
          <div className="col-xs-12 np video-tutorial ">
            <Link
              data-type="a"
              href="https://drive.google.com/file/d/1-vGDkUrZSCphfhByLmeYBR0vfnqmWAOk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://dwtc.exhibitoronlinemanual.com//themes/frontend/images/VIEW TUTORIAL VIDEO.svg"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="mi_user_btn">
          <JssLink field={props.fields.UserGuideLink}>
            <JssImage field={props.fields.UserGuideImage} />
          </JssLink>

          {sitecoreContext.pageState === 'edit' || !props.fields.UserGuideLink?.value?.href ? (
            <LinkImage />
          ) : (
            <JssLink field={props.fields.UserGuideLink}>
              <LinkImage />
            </JssLink>
          )}
          <div className="" style={{ width: '200px', position: 'absolute', right: '10px' }}>
            <Link
              data-type="a"
              id=""
              href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/media/s3download/Production/media/2014/22nd_Aug_EXHIBITOR_portal_user_guidelines_2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://dwtc.exhibitoronlinemanual.com//themes/frontend/images/VIEW USER GUIDE.svg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="mi_list_grid_btn">
        <div style={{ width: '41px', position: 'absolute' }}>
          <Link
            data-type="a"
            className="click-xhttp-request click-xhttp-request active active_nav"
            href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard"
            data-qr="mi_encoded_string=i4eKeGL5vlS0wiJeG+o8RemxvAULiZZ8JaD/QSgODptygnq8keoNAm5znGpwQZZRw3ah6VBA2a1aae+x3m8fWQ==&opd=content"
            data-name="Grid view"
            style={{
              background: '#393c4d',
              padding: '6px',
              borderRadius: '5px',
              height: '38px',
              width: '41px',
              display: 'block',
            }}
          >
            <span>
              <i className="fa fa-th fa-2x" style={{ color: '#FFF' }}></i>
            </span>
          </Link>
        </div>
        <div style={{ width: '41px', position: 'absolute', left: '50px' }}>
          <Link
            data-type="a"
            className="click-xhttp-request click-xhttp-request active active_nav"
            href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard"
            data-qr="mi_encoded_string=5lpmUcYSDx85x663XYeq+xPgb5v8/qYTrHNGjxQjgk4=&opd=content"
            data-name="View List"
            style={{
              background: '#cd3641',
              padding: '6px',
              borderRadius: '5px',
              height: '38px',
              width: '41px',
              display: 'block',
            }}
          >
            <span>
              <i className="fa fa-align-justify fa-2x" style={{ color: '#FFF' }}></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DubaiWTCInfoButtons;
