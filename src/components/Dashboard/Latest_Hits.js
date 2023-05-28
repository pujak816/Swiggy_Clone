import React, { Component } from "react";
import LineChart from './Charts/LineChart';

function Hits() {
  return (
    <>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
            <div className="tm-bg-primary-dark tm-block">
                <h2 className="tm-block-title">Latest Hits</h2>
                <LineChart/>
            </div>
        </div>
    </>
  );
}

export default Hits;