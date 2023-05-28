import React from "react";

const List = (props) => {
  const data = Object.keys(props.accdata);

  return (
    <div className="row tm-content-row">
          <div className="col-12 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
              <h2 className="tm-block-title">List of Accounts</h2>
              <p className="text-white">Accounts</p>
              <select className="custom-select" onChange={(e) => props.data(e.target.value)}>
                <option value="select account">Select account</option>
                {data.map((item) => (
                <option value={item} key={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
  );
};

export default List;