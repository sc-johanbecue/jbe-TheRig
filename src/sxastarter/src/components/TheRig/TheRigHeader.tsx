import React, { useState, useEffect, useCallback } from 'react';
import {
  ImageField,
  TextField,
  RichTextField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

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

type TheRigHeaderProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const TheRigHeaderDefaultComponent = (props: TheRigHeaderProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: TheRigHeaderProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const direction = sitecoreContext.language === 'ar-SA' ? 'rtl' : 'ltr';

  const [headerClass, setHeaderClass] = useState('');

  const onScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    alert('HELLO');
    if (currentScrollPos > 100) {
      // If scrolled down more than 100px, use 'even-smaller' class
      setHeaderClass('compressed css-18u71s2');
    } else if (currentScrollPos > 50) {
      // If scrolled down more than 50px but less than 100px, use 'small' class
      setHeaderClass('compressed css-1rmhix3');
    } else {
      // If not scrolled down much, header class is an empty string (default state)
      setHeaderClass('css-cea17v');
    }
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener('scroll', onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  if (props.fields) {
    return (
      <header
        className={headerClass === null || headerClass === '' ? 'css-cea17v' : headerClass}
        dir={direction}
      >
        <div className="css-58w1wt">
          <div className="css-0">
            <Link href="/">
              <img
                alt="rig logo"
                loading="lazy"
                width="112"
                height="95"
                decoding="async"
                data-nimg="1"
                className="css-xzc2ri"
                style={{ color: 'transparent' }}
                src="https://therig.sa/header/rig_logo.svg"
              />
            </Link>
          </div>
          <div className="css-f8bp36">
            <nav className="css-lqzyi5">
              <div dir="ltr">
                <Link className=" css-an3xli" href="/about/">
                  ABOUT THE RIG.
                  <div className="underline css-th6fei"></div>
                </Link>
              </div>
              <div dir="auto">
                <Link className=" css-an3xli" href="/press/">
                  press
                  <div className="underline css-th6fei"></div>
                </Link>
              </div>

              <button className="css-r2sx70">
                <img src="https://therig.sa/svg/moon-icon.svg" alt="" />
              </button>
              <Link className="css-1tssrit" href="/ar/">
                العربية
                <div className="underline css-th6fei"></div>
              </Link>
            </nav>
            <div className="css-9qr6hs">
              <div className="line line-a"></div>
              <div className="line line-b"></div>
              <div className="line line-c"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return <TheRigHeaderDefaultComponent {...props} />;
};
