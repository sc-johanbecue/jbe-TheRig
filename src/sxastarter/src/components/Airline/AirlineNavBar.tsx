import React from 'react';
import {
  Image as JssImage,
  ImageField,
  Placeholder,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Logo: ImageField;
}

type AirlineNavBarProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const AirlineNavBarDefaultComponent = (props: AirlineNavBarProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AirlineNavBarProps): JSX.Element => {
  const phKeyNavigation = `navigation-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <div className="navbar-area">
        <div className="main-responsive-nav">
          <div className="container">
            <div className="main-responsive-menu">
              <div className="row">
                <div className="col-lg-6">
                  <div className="logo">
                    <a href="https://www.sportingkampenhout.be/Sitecore/airline/">
                      <JssImage field={props.fields.Logo} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-navbar">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <a
                className="navbar-brand"
                href="https://www.sportingkampenhout.be/Sitecore/airline/"
              >
                <JssImage field={props.fields.Logo}></JssImage>
              </a>
              <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                <Placeholder name={phKeyNavigation} rendering={props.rendering} />
                {/* <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="https://www.sportingkampenhout.be/Sitecore/airline/"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="https://www.sportingkampenhout.be/Sitecore/airline/"
                    >
                      Categories<i className="fas fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://www.sportingkampenhout.be/Sitecore/airline/"
                        >
                          Tours
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="https://www.sportingkampenhout.be/Sitecore/airline/tour-search"
                            >
                              Tour Grid
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details"
                            >
                              Tour Details
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="https://www.sportingkampenhout.be/Sitecore/airline/tour-booking"
                            >
                              Tour Booking
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="https://www.sportingkampenhout.be/Sitecore/airline/top-destinations"
                            >
                              Top Destination
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="https://www.sportingkampenhout.be/Sitecore/airline/destinations-details"
                            >
                              Destination Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://www.sportingkampenhout.be/Sitecore/airline/"
                        >
                          Flights
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="https://www.sportingkampenhout.be/Sitecore/airline/flight-search"
                            >
                              Flight
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="https://www.sportingkampenhout.be/Sitecore/airline/booking-confirmation"
                            >
                              Flight Booking
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="https://www.sportingkampenhout.be/Sitecore/airline/"
                    >
                      Page<i className="fas fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://www.sportingkampenhout.be/Sitecore/airline/about"
                        >
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://www.sportingkampenhout.be/Sitecore/airline/tour-guids"
                        >
                          Team
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://www.sportingkampenhout.be/Sitecore/airline/testimonials"
                        >
                          Testimonials
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://www.sportingkampenhout.be/Sitecore/airline/faqs"
                        >
                          FAQ
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://www.sportingkampenhout.be/Sitecore/airline/booking-confirmation"
                        >
                          Booking Confirmation
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://www.sportingkampenhout.be/Sitecore/airline/become-expert"
                        >
                          {' '}
                          Become Expert
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://www.sportingkampenhout.be/Sitecore/airline/"
                        >
                          User Pages
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="https://www.sportingkampenhout.be/Sitecore/airline/login"
                            >
                              Login
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="https://www.sportingkampenhout.be/Sitecore/airline/register"
                            >
                              Register
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="https://www.sportingkampenhout.be/Sitecore/airline/forget-password"
                            >
                              Forget Password
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="https://www.sportingkampenhout.be/Sitecore/airline/verifyOTP"
                            >
                              Verify OTP
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="https://www.sportingkampenhout.be/Sitecore/airline/reset-password"
                            >
                              Reset Password
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://www.sportingkampenhout.be/Sitecore/airline/privacy-policy"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://www.sportingkampenhout.be/Sitecore/airline/*"
                        >
                          404 Error
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="https://www.sportingkampenhout.be/Sitecore/airline/"
                    >
                      News<i className="fas fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://www.sportingkampenhout.be/Sitecore/airline/news"
                        >
                          News
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://www.sportingkampenhout.be/Sitecore/airline/news-details"
                        >
                          News Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="https://www.sportingkampenhout.be/Sitecore/airline/contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul> */}
                <div className="others-options d-flex align-items-center">
                  <div className="option-item">
                    <a href="#!" className="search-box">
                      <i className="bi bi-search"></i>
                    </a>
                  </div>
                  <div className="option-item">
                    <a
                      className="btn  btn_navber"
                      href="https://www.sportingkampenhout.be/Sitecore/airline/become-expert"
                    >
                      Become Expert
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="others-option-for-responsive">
          <div className="container">
            <div className="dot-menu">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                Menu
              </button>
              <div
                className="offcanvas offcanvas-end"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
                style={{ visibility: 'hidden' }}
                aria-hidden="true"
              >
                <div className="offcanvas-header-two">
                  <div className="offcanvas-logo">
                    <img
                      src="data:image/png;base64,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"
                      alt="img"
                    />
                  </div>
                  <div className="offcanvas_off">
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
                <div className="offcanvas-body">
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                      <div>
                        <ul className="navbar-nav">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="https://www.sportingkampenhout.be/Sitecore/airline/"
                            >
                              Home
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="https://www.sportingkampenhout.be/Sitecore/airline/"
                            >
                              Categories<i className="fas fa-angle-down"></i>
                            </a>
                            <div className="nav-item">
                              <ul className="dropdown-menu">
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="https://www.sportingkampenhout.be/Sitecore/airline/"
                                  >
                                    Tours
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li className="nav-item">
                                      <a
                                        className="nav-link"
                                        href="https://www.sportingkampenhout.be/Sitecore/airline/tour-search"
                                      >
                                        Tour Grid
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link"
                                        href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details"
                                      >
                                        Tour Details
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link"
                                        href="https://www.sportingkampenhout.be/Sitecore/airline/tour-booking"
                                      >
                                        Tour Booking
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link"
                                        href="https://www.sportingkampenhout.be/Sitecore/airline/top-destinations"
                                      >
                                        Top Destination
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link"
                                        href="https://www.sportingkampenhout.be/Sitecore/airline/destinations-details"
                                      >
                                        Destination Details
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="https://www.sportingkampenhout.be/Sitecore/airline/"
                                  >
                                    Flights
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li className="nav-item">
                                      <a
                                        className="nav-link"
                                        href="https://www.sportingkampenhout.be/Sitecore/airline/flight-search"
                                      >
                                        Flight
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link"
                                        href="https://www.sportingkampenhout.be/Sitecore/airline/booking-confirmation"
                                      >
                                        Flight Booking
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="https://www.sportingkampenhout.be/Sitecore/airline/"
                            >
                              Page<i className="fas fa-angle-down"></i>
                            </a>
                            <div className="nav-item">
                              <ul className="dropdown-menu">
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="https://www.sportingkampenhout.be/Sitecore/airline/about"
                                  >
                                    About
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="https://www.sportingkampenhout.be/Sitecore/airline/tour-guids"
                                  >
                                    Team
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="https://www.sportingkampenhout.be/Sitecore/airline/testimonials"
                                  >
                                    Testimonials
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="https://www.sportingkampenhout.be/Sitecore/airline/faqs"
                                  >
                                    FAQ
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="https://www.sportingkampenhout.be/Sitecore/airline/booking-confirmation"
                                  >
                                    Booking Confirmation
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="https://www.sportingkampenhout.be/Sitecore/airline/become-expert"
                                  >
                                    {' '}
                                    Become Expert
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="https://www.sportingkampenhout.be/Sitecore/airline/"
                                  >
                                    User Pages
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li className="nav-item">
                                      <a
                                        className="nav-link"
                                        href="https://www.sportingkampenhout.be/Sitecore/airline/login"
                                      >
                                        Login
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link"
                                        href="https://www.sportingkampenhout.be/Sitecore/airline/register"
                                      >
                                        Register
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link"
                                        href="https://www.sportingkampenhout.be/Sitecore/airline/forget-password"
                                      >
                                        Forget Password
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link"
                                        href="https://www.sportingkampenhout.be/Sitecore/airline/verifyOTP"
                                      >
                                        Verify OTP
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link"
                                        href="https://www.sportingkampenhout.be/Sitecore/airline/reset-password"
                                      >
                                        Reset Password
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="https://www.sportingkampenhout.be/Sitecore/airline/privacy-policy"
                                  >
                                    Privacy Policy
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="https://www.sportingkampenhout.be/Sitecore/airline/*"
                                  >
                                    404 Error
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="https://www.sportingkampenhout.be/Sitecore/airline/"
                            >
                              News<i className="fas fa-angle-down"></i>
                            </a>
                            <div className="nav-item">
                              <ul className="dropdown-menu">
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="https://www.sportingkampenhout.be/Sitecore/airline/news"
                                  >
                                    News
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="https://www.sportingkampenhout.be/Sitecore/airline/news-details"
                                  >
                                    News Details
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="https://www.sportingkampenhout.be/Sitecore/airline/contact"
                            >
                              Contact
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <AirlineNavBarDefaultComponent {...props} />;
};
