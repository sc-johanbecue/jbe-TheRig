import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const JumeirahFooter = (): JSX.Element => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="HeaderSection w-100 p-0 index-4 ">
      <div>
        <div className={`main-header ${scrolled ? 'd-none' : ''}`}>
          <div className="primary-header">
            <div className="menu-icon d-block d-md-none">
              <img
                src="https://www.jumeirah.com/static/media/white-hamburger.fe154352164530b63dd61630741a1f0a.svg"
                alt="menu"
                style={{ height: '24px', width: '24px' }}
              />
            </div>
            <div className="search-icon left-wrapper">
              <img
                src="https://www.jumeirah.com/static/media/white-search.162267a5520f0668860de15b2e658b9a.svg"
                alt="menu"
                style={{ height: '24px', width: '24px' }}
              />
            </div>
            <div className="jum-logo">
              <Link href="/en">
                <img
                  src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/logo/redesign/jumeirah_logo_whitesvg.svg?modified=20240428154803"
                  alt=""
                />
              </Link>
            </div>
            <div className="action-items d-flex items-center">
              <div className="items nav-bar ">
                <div className="jumeirah-language-selector dropdown">
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="btn btn-secondary"
                  >
                    English
                  </button>
                  <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu">
                    <button type="button" tabIndex={0} role="menuitem" className="dropdown-item">
                      <Link href="">العربـية</Link>
                    </button>
                    <button type="button" tabIndex={0} role="menuitem" className="dropdown-item">
                      <Link href=""></Link>
                    </button>
                    <button type="button" tabIndex={0} role="menuitem" className="dropdown-item">
                      <Link href="">Deutsch</Link>
                    </button>
                    <button type="button" tabIndex={0} role="menuitem" className="dropdown-item">
                      <Link href="">Français</Link>
                    </button>
                    <button type="button" tabIndex={0} role="menuitem" className="dropdown-item">
                      <Link href="">Русский</Link>
                    </button>
                    <button type="button" tabIndex={0} role="menuitem" className="dropdown-item">
                      <Link href="">简体中文</Link>
                    </button>
                    <button type="button" tabIndex={0} role="menuitem" className="dropdown-item">
                      <Link href="">Español</Link>
                    </button>
                    <button type="button" tabIndex={0} role="menuitem" className="dropdown-item">
                      <Link href="">Italiano</Link>
                    </button>
                    <button type="button" tabIndex={0} role="menuitem" className="dropdown-item">
                      <Link href="">Indonesian</Link>
                    </button>
                  </div>
                </div>
                <div className="lang-selector-arrow"></div>
              </div>
              <div className="items ">
                <div className="login-button flex-row">
                  <div className="profile-icon">
                    <img
                      src="https://www.jumeirah.com/en/static/media/white-profile.05db31ac4360eefca1e6d94842b6c8e4.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div id="jone-login" className="login-wrapper col-sm-12 col-lg-4 col-md-12  ">
                      <div className="login-link text-white">
                        <span className="">Login</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="items ">My reservation</div>
              <div className="items">
                <button type="button" className="book-now btn btn-secondary">
                  RESERVE
                </button>
              </div>
            </div>
            &nbsp;
          </div>
          <div className="secondary-header">
            <ul className="SecondaryNavRD navbar-nav">
              <li className="nav-item">
                <Link href="/en/stay" target="" title="" rel="" className="nav-link">
                  <span className="list-item ">Hotels &amp; Resorts</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/en/suites-and-villas" target="" title="" rel="" className="nav-link">
                  <span className="list-item ">Suites &amp; Villas</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/en/dine/listing" target="" title="" rel="" className="nav-link">
                  <span className="list-item ">Dining</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/en/rejuvenate/listing" target="" title="" rel="" className="nav-link">
                  <span className="list-item ">Well-being</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/en/article/inspiration" target="" title="" rel="" className="nav-link">
                  <span className="list-item ">Inspiration</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/en/offers" target="" title="" rel="" className="nav-link">
                  <span className="list-item ">Exclusive Offers</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/en/events/listing" target="" title="" rel="" className="nav-link">
                  <span className="list-item ">Events</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/en/guest-user" target="" title="" rel="" className="nav-link">
                  <span className="list-item ">Jumeirah One</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`mini-nav ${scrolled ? '' : 'd-none'}`}>
          <div className="items left-section">
            <div className="menu-icon">
              <img
                src="https://www.jumeirah.com/static/media/black-hamburger.80b3902374f20526c40699b5dc49fbc1.svg"
                alt="menu"
                style={{ height: '24px', width: '24px' }}
              />
            </div>
            <div className="search-icon">
              <img
                src="https://www.jumeirah.com/static/media/black-search.ce2b5832e5a903d1abf4235c24c13b1e.svg"
                alt="search"
                style={{ height: '24px', width: '24px' }}
              />
            </div>
          </div>
          <div className="jum-logo items">
            <Link href="/en">
              <img
                src="https://www.jumeirah.com/static/media/black-beacon.f364eac28bc599f89fb6.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="right-aligned-items">
            <div className="items-wraper">
              <div className=" items nav-bar">
                <div className="jumeirah-language-selector dropdown">
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="btn btn-secondary"
                  >
                    English
                  </button>
                  <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu">
                    <button type="button" tabIndex={0} role="menuitem" className="dropdown-item">
                      <Link href="">العربـية</Link>
                    </button>
                    <button type="button" tabIndex={0} role="menuitem" className="dropdown-item">
                      <Link href=""></Link>
                    </button>
                    <button type="button" tabIndex={0} role="menuitem" className="dropdown-item">
                      <Link href="">Deutsch</Link>
                    </button>
                    <button type="button" tabIndex={0} role="menuitem" className="dropdown-item">
                      <Link href="">Français</Link>
                    </button>
                    <button type="button" tabIndex={0} role="menuitem" className="dropdown-item">
                      <Link href="">Русский</Link>
                    </button>
                    <button type="button" tabIndex={0} role="menuitem" className="dropdown-item">
                      <Link href="">简体中文</Link>
                    </button>
                    <button type="button" tabIndex={0} role="menuitem" className="dropdown-item">
                      <Link href="">Español</Link>
                    </button>
                    <button type="button" tabIndex={0} role="menuitem" className="dropdown-item">
                      <Link href="">Italiano</Link>
                    </button>
                    <button type="button" tabIndex={0} role="menuitem" className="dropdown-item">
                      <Link href="">Indonesian</Link>
                    </button>
                  </div>
                </div>
                <div className="lang-selector-arrow"></div>
              </div>
              <div className="items">
                <div className="login-button flex-row">
                  <div className="profile-icon">
                    <img
                      src="https://www.jumeirah.com/static/media/black-profile.e009b9b70a48ece4e8407d310fbe1f4d.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div id="jone-login" className="login-wrapper col-sm-12 col-lg-4 col-md-12  ">
                      <div className="login-link text-black">
                        <span className="">Login</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="items">My reservation</div>
            </div>
            <div className="items right-section">
              <button type="button" className="book-now  btn btn-secondary">
                RESERVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumeirahFooter;
