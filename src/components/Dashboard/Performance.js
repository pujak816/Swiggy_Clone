import React from "react";
import HorizontalChart from './Charts/HorizontalChart';

function Performance() {
  return (
    <>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
          <div className="tm-bg-primary-dark tm-block">
            <h2 className="tm-block-title">Performance</h2>
            <HorizontalChart/>
          </div>
        </div>
    </>
  );
}

export default Performance;