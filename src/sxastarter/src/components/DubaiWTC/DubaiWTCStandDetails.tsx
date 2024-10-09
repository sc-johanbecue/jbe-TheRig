import React from 'react';
import Link from 'next/link';

const DubaiWTCStandDetails = (): JSX.Element => {
  return (
    <div className="col-xs-12  whitebg mrg_bt30 formlabels">
      <div>
        <div
          data-shortcode="W1NIT1JUOlN0YW5kLUNvbnRlbnQgZW52X2lkPSIyMDE0IiBleGJfaWQ9IjE2MzUxIl0="
          data-editable="no"
          className=" mceNonEditable"
        >
          <div className="col-xs-12 stand_block np" style={{ paddingLeft: '10px;' }}>
            <div className="col-xs-12 col-md-6 np">
              <h5> Sitecore Middle East FZ-LLC</h5>
            </div>
            <div className="col-xs-12 col-md-6 text-right np">
              <div className="col-xs-10  np width-auto np">
                <h5 className="text-right">STAND DETAILS</h5>
              </div>
              <div className="col-xs-2 img_wrapper">
                <img
                  src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/images/stand_details.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-xs-12 np">
            <div className="stdblk-container-col-8">
              <div className="std-block">
                Stand No:
                <p>H4-B10</p>
              </div>
              <div className="std-block">
                Hall No:
                <p>Hall 4</p>
              </div>
              <div className="std-block">
                Pavilion:
                <p>-</p>
              </div>
              <div className="std-block">
                Stand Type:
                <p>Space Only</p>
              </div>
              <div className="std-block">
                Stand Area:
                <p>120.00 Sq.m </p>
              </div>
              <div className="std-block">
                Stand Width:
                <p>10.00</p>
              </div>
              <div className="std-block">
                Stand Depth:
                <p>12.00</p>
              </div>
              <div className="std-block">
                Open Sides:
                <p>4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DubaiWTCStandDetails;
