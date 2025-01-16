import React from 'react';
import {
  TextField,
  Text,
  Placeholder,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Tab1Title: TextField;
  Tab2Title: TextField;
  Tab3Title: TextField;
  Tab4Title: TextField;
}

type AirlineHotDealsProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const AirlineHotDealsDefaultComponent = (props: AirlineHotDealsProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AirlineHotDealsProps): JSX.Element => {
  const phKeyHotDealsTab1Items = `hotDealsTab1Items-${props.params.DynamicPlaceholderId}`;
  const phKeyHotDealsTab2Items = `hotDealsTab2Items-${props.params.DynamicPlaceholderId}`;
  const phKeyHotDealsTab3Items = `hotDealsTab3Items-${props.params.DynamicPlaceholderId}`;
  const phKeyHotDealsTab4Items = `hotDealsTab4Items-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <section id="explore_area" className="section_padding_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section_heading_center">
                <h2>
                  <Text field={props.fields.Title} />
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="theme_nav_tab">
                <nav className="theme_nav_tab_item">
                  <div className="nav nav-tabs" id="nav-tab1" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-hotels-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-hotels"
                      type="button"
                      role="tab"
                      aria-controls="nav-hotels"
                      aria-selected="true"
                    >
                      <Text field={props.fields.Tab1Title} />
                    </button>
                    <button
                      className="nav-link"
                      id="nav-tours-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-tours"
                      type="button"
                      role="tab"
                      aria-controls="nav-tours"
                      aria-selected="false"
                    >
                      <Text field={props.fields.Tab2Title} />
                    </button>
                    <button
                      className="nav-link"
                      id="nav-space-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-space"
                      type="button"
                      role="tab"
                      aria-controls="nav-space"
                      aria-selected="false"
                    >
                      <Text field={props.fields.Tab3Title} />
                    </button>
                    <button
                      className="nav-link"
                      id="nav-events-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-events"
                      type="button"
                      role="tab"
                      aria-controls="nav-events"
                      aria-selected="false"
                    >
                      <Text field={props.fields.Tab4Title} />
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-hotels"
                  role="tabpanel"
                  aria-labelledby="nav-hotels-tab"
                >
                  <div className="row">
                    <Placeholder name={phKeyHotDealsTab1Items} rendering={props.rendering} />
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel1.7e5c5eee3784f788957e.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>New beach, Thailand
                          </p>
                          <div className="discount_tab">
                            <span>50%</span>
                          </div>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Kantua hotel, Thailand
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.8/5 Excellent</span>
                            <span className="review_count">(1214 reviewes)</span>
                          </p>
                          <h3>
                            $99.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel2.3e4b06c0456866ba2d94.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>Indonesia
                          </p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Hotel paradise international
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.8/5 Excellent</span>
                            <span className="review_count">(1214 reviewes)</span>
                          </p>
                          <h3>
                            $69.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel3.7daea2be758071426c02.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>Kualalampur
                          </p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Hotel kualalampur
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.8/5 Excellent</span>
                            <span className="review_count">(1214 reviewes)</span>
                          </p>
                          <h3>
                            $79.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel4.2f5a764952dd511e35fa.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>Mariana island
                          </p>
                          <div className="discount_tab">
                            <span>20%</span>
                          </div>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Hotel deluxe
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.8/5 Excellent</span>
                            <span className="review_count">(1214 reviewes)</span>
                          </p>
                          <h3>
                            $99.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel5.a6f0242835c6b60b9c4b.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>imgKathmundu, Nepal
                          </p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Hotel rajavumi
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.1/5 Excellent</span>
                            <span className="review_count">(114 reviewes)</span>
                          </p>
                          <h3>
                            $49.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel6.71ece295cac75a47c576.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>Beach view
                          </p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Thailand grand suit
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.8/5 Excellent</span>
                            <span className="review_count">(1214 reviewes)</span>
                          </p>
                          <h3>
                            $99.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel7.031accfb26a2e1d6c6f5.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>Long island
                          </p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Zefi resort and spa
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.8/5 Excellent</span>
                            <span className="review_count">(1214 reviewes)</span>
                          </p>
                          <h3>
                            $89.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel8.980e6eaf416d34809cf6.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>Philippine
                          </p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Manila international resort
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.8/5 Excellent</span>
                            <span className="review_count">(1214 reviewes)</span>
                          </p>
                          <h3>
                            $99.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-tours"
                  role="tabpanel"
                  aria-labelledby="nav-tours-tab"
                >
                  <div className="row">
                    <Placeholder name={phKeyHotDealsTab2Items} rendering={props.rendering} />
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel1.7e5c5eee3784f788957e.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>New beach, Thailand
                          </p>
                          <div className="discount_tab">
                            <span>50%</span>
                          </div>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Kantua hotel, Thailand
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.8/5 Excellent</span>
                            <span className="review_count">(1214 reviewes)</span>
                          </p>
                          <h3>
                            $99.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel2.3e4b06c0456866ba2d94.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>Indonesia
                          </p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Hotel paradise international
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.8/5 Excellent</span>
                            <span className="review_count">(1214 reviewes)</span>
                          </p>
                          <h3>
                            $69.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel3.7daea2be758071426c02.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>Kualalampur
                          </p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Hotel kualalampur
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.8/5 Excellent</span>
                            <span className="review_count">(1214 reviewes)</span>
                          </p>
                          <h3>
                            $79.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel4.2f5a764952dd511e35fa.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>Mariana island
                          </p>
                          <div className="discount_tab">
                            <span>20%</span>
                          </div>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Hotel deluxe
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.8/5 Excellent</span>
                            <span className="review_count">(1214 reviewes)</span>
                          </p>
                          <h3>
                            $99.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel5.a6f0242835c6b60b9c4b.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>imgKathmundu, Nepal
                          </p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Hotel rajavumi
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.1/5 Excellent</span>
                            <span className="review_count">(114 reviewes)</span>
                          </p>
                          <h3>
                            $49.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel6.71ece295cac75a47c576.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>Beach view
                          </p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Thailand grand suit
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.8/5 Excellent</span>
                            <span className="review_count">(1214 reviewes)</span>
                          </p>
                          <h3>
                            $99.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-space"
                  role="tabpanel"
                  aria-labelledby="nav-space-tab"
                >
                  <div className="row">
                    <Placeholder name={phKeyHotDealsTab3Items} rendering={props.rendering} />
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel5.a6f0242835c6b60b9c4b.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>imgKathmundu, Nepal
                          </p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Hotel rajavumi
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.1/5 Excellent</span>
                            <span className="review_count">(114 reviewes)</span>
                          </p>
                          <h3>
                            $49.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel6.71ece295cac75a47c576.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>Beach view
                          </p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Thailand grand suit
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.8/5 Excellent</span>
                            <span className="review_count">(1214 reviewes)</span>
                          </p>
                          <h3>
                            $99.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel7.031accfb26a2e1d6c6f5.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>Long island
                          </p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Zefi resort and spa
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.8/5 Excellent</span>
                            <span className="review_count">(1214 reviewes)</span>
                          </p>
                          <h3>
                            $89.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel8.980e6eaf416d34809cf6.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>Philippine
                          </p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Manila international resort
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.8/5 Excellent</span>
                            <span className="review_count">(1214 reviewes)</span>
                          </p>
                          <h3>
                            $99.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-events"
                  role="tabpanel"
                  aria-labelledby="nav-events-tab"
                >
                  <div className="row">
                    <Placeholder name={phKeyHotDealsTab4Items} rendering={props.rendering} />
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel4.2f5a764952dd511e35fa.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>Mariana island
                          </p>
                          <div className="discount_tab">
                            <span>20%</span>
                          </div>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Hotel deluxe
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.8/5 Excellent</span>
                            <span className="review_count">(1214 reviewes)</span>
                          </p>
                          <h3>
                            $99.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel5.a6f0242835c6b60b9c4b.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>imgKathmundu, Nepal
                          </p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Hotel rajavumi
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.1/5 Excellent</span>
                            <span className="review_count">(114 reviewes)</span>
                          </p>
                          <h3>
                            $49.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel6.71ece295cac75a47c576.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>Beach view
                          </p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Thailand grand suit
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.8/5 Excellent</span>
                            <span className="review_count">(1214 reviewes)</span>
                          </p>
                          <h3>
                            $99.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel7.031accfb26a2e1d6c6f5.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>Long island
                          </p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Zefi resort and spa
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.8/5 Excellent</span>
                            <span className="review_count">(1214 reviewes)</span>
                          </p>
                          <h3>
                            $89.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                            <img
                              src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/hotel8.980e6eaf416d34809cf6.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>Philippine
                          </p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-details">
                              Manila international resort
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">4.8/5 Excellent</span>
                            <span className="review_count">(1214 reviewes)</span>
                          </p>
                          <h3>
                            $99.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <AirlineHotDealsDefaultComponent {...props} />;
};
