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
              <a className="navbar-brand" href="/">
                <JssImage field={props.fields.Logo}></JssImage>
              </a>
              <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                <Placeholder name={phKeyNavigation} rendering={props.rendering} />
                <div className="others-options d-flex align-items-center">
                  <div className="option-item">
                    <a href="#!" className="search-box">
                      <i className="bi bi-search"></i>
                    </a>
                  </div>
                  <div className="option-item">
                    <a className="btn  btn_navber" href="#">
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
                    <JssImage field={props.fields.Logo}></JssImage>
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
