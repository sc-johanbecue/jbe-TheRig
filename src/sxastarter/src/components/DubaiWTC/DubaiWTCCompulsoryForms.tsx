import React from 'react';
import Link from 'next/link';

import { TextField, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
}

type DubaiWTCCompulsoryFormsProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const DubaiWTCCompulsoryForms = (props: DubaiWTCCompulsoryFormsProps): JSX.Element => {
  return (
    <div className="col-xs-12 panelsection nm np">
      <div className="col-xs-12 np ">
        <div className="np col-xs-12  add_contact_outer ">
          <div className="col-xs-12 nplr_xs nplr">
            <div className="manage_exhibitors_box col-xs-12 whitebg shadow border-radius text-bold npb">
              <div className="checklist_form_wrapper col-xs-12 whitebg">
                <div className="col-xs-12 np">
                  <div className="col-xs-12 formname nplr_xs np">
                    <h2 className="heading_page ">
                      <Text field={props.fields.Title} />
                    </h2>
                  </div>
                </div>
                <div className="my_message_table common_table col-xs-12 nplr">
                  <div className="table-responsive">
                    <table
                      id="example_data"
                      className="table table-striped display"
                      style={{ verticalAlign: 'middle' }}
                      width="100%"
                    >
                      <thead>
                        <tr>
                          <th className="w285">Form Name</th>
                          <th>Deadline Date</th>
                          <th>Time Left</th>
                          <th style={{ width: '25%', textWrap: 'nowrap' }}>Form Status </th>
                          <th>Action</th>
                          <th>Add To Calendar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="">
                            <Link
                              data-type="a"
                              href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTNj"
                            >
                              {' '}
                              Health & Safety Declaration
                            </Link>
                          </td>
                          <td className="">10 October 2024</td>
                          <td className="">2 DAYS</td>
                          <td>
                            <span className="label label-active ">Submitted </span>
                          </td>
                          <td>
                            <Link
                              data-type="a"
                              href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTNj"
                            >
                              {' '}
                              <i className="icon icon-eye-1"></i> View Form
                            </Link>
                          </td>
                          <td className="ical text-center">
                            <Link
                              data-type="a"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ical"
                              href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard/add_ical/form3c"
                            >
                              <span data-tooltip-top="Add To Calendar">
                                <img
                                  src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/images/calendar.png"
                                  alt=""
                                  style={{ width: '20px', height: 'auto' }}
                                />
                              </span>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="">
                            <Link
                              data-type="a"
                              href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTNz"
                            >
                              {' '}
                              Appointed Contractor Details Submission Form
                            </Link>
                          </td>
                          <td className="">10 October 2024</td>
                          <td className="">2 DAYS</td>
                          <td>
                            <span className="label label-active ">Submitted </span>
                          </td>
                          <td>
                            <Link
                              data-type="a"
                              href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTNz"
                            >
                              {' '}
                              <i className="icon icon-eye-1"></i> View Form
                            </Link>
                          </td>
                          <td className="ical text-center">
                            <Link
                              data-type="a"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ical"
                              href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard/add_ical/form3s"
                            >
                              <span data-tooltip-top="Add To Calendar">
                                <img
                                  src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/images/calendar.png"
                                  alt=""
                                  style={{ width: '20px', height: 'auto' }}
                                />
                              </span>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="">
                            <Link
                              data-type="a"
                              href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTNi"
                            >
                              {' '}
                              Performance Bond & Letter of Undertaking for UAE-Based Contractors
                            </Link>
                          </td>
                          <td className="">09 October 2024</td>
                          <td className="">1 DAY</td>
                          <td>
                            <span className="label label-submitted ">Approved </span>
                          </td>
                          <td>
                            <Link
                              data-type="a"
                              href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTNi"
                            >
                              {' '}
                              <i className="icon icon-eye-1"></i> View Form
                            </Link>
                          </td>
                          <td className="ical text-center">
                            <Link
                              data-type="a"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ical"
                              href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard/add_ical/form3b"
                            >
                              <span data-tooltip-top="Add To Calendar">
                                <img
                                  src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/images/calendar.png"
                                  alt=""
                                  style={{ width: '20px', height: 'auto' }}
                                />
                              </span>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="">
                            <Link
                              data-type="a"
                              href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTNzZA=="
                            >
                              {' '}
                              Click here to submit stand design
                            </Link>
                          </td>
                          <td className="">09 October 2024</td>
                          <td className="">1 DAY</td>
                          <td>
                            <span className="label" style={{ color: '#626262' }}>
                              -
                            </span>
                          </td>
                          <td>
                            <Link
                              data-type="a"
                              href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTNzZA=="
                            >
                              {' '}
                              <i className="icon icon-eye-1"></i> View Form
                            </Link>
                          </td>
                          <td className="ical text-center">
                            <Link
                              data-type="a"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ical"
                              href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard/add_ical/form3sd"
                            >
                              <span data-tooltip-top="Add To Calendar">
                                <img
                                  src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/images/calendar.png"
                                  alt=""
                                  style={{ width: '20px', height: 'auto' }}
                                />
                              </span>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="">
                            <Link
                              data-type="a"
                              href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybThh"
                            >
                              {' '}
                              Event Plus - Utilities & other Exhibitor Services
                            </Link>
                          </td>
                          <td className="">15 October 2024</td>
                          <td className="">7 DAYS</td>
                          <td>
                            <span className="label" style={{ color: '#626262' }}>
                              -
                            </span>
                          </td>
                          <td>
                            <Link
                              data-type="a"
                              href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybThh"
                            >
                              {' '}
                              <i className="icon icon-eye-1"></i> View Form
                            </Link>
                          </td>
                          <td className="ical text-center">
                            <Link
                              data-type="a"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ical"
                              href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard/add_ical/form8a"
                            >
                              <span data-tooltip-top="Add To Calendar">
                                <img
                                  src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/images/calendar.png"
                                  alt=""
                                  style={{ width: '20px', height: 'auto' }}
                                />
                              </span>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="">
                            <Link
                              data-type="a"
                              href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTE1Mg=="
                            >
                              {' '}
                              Get access to New Global Opportunities
                            </Link>
                          </td>
                          <td className="">18 October 2024</td>
                          <td className="">9 DAYS</td>
                          <td>
                            <span className="label" style={{ color: '#626262' }}>
                              -
                            </span>
                          </td>
                          <td>
                            <Link
                              data-type="a"
                              href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTE1Mg=="
                            >
                              {' '}
                              <i className="icon icon-eye-1"></i> View Form
                            </Link>
                          </td>
                          <td className="ical text-center">
                            <Link
                              data-type="a"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ical"
                              href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard/add_ical/form152"
                            >
                              <span data-tooltip-top="Add To Calendar">
                                <img
                                  src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/images/calendar.png"
                                  alt=""
                                  style={{ width: '20px', height: 'auto' }}
                                />
                              </span>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DubaiWTCCompulsoryForms;
