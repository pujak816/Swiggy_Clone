import React, { useEffect, useState } from "react";

const Orders = () => {
  const [dashboardorders, setDashboardOrders] = useState({});

  useEffect(() => {
    setDashboardOrders(
      JSON.parse(localStorage.getItem("dashboardPage"))["orders"]
    );
  }, []);

  let orders = Object.keys(dashboardorders).map(
    (key, index) => dashboardorders[key]
  );

  return (
    <div className="col-12 tm-block-col">
      <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
        <h2 className="tm-block-title">Orders List</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ORDER NO.</th>
              <th scope="col">STATUS</th>
              <th scope="col">OPERATORS</th>
              <th scope="col">LOCATION</th>
              <th scope="col">DISTANCE</th>
              <th scope="col">START DATE</th>
              <th scope="col">EST DELIVERY DUE</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item, i) => (
              <tr key={i}>
                <th scope="row">
                  <b>#{item.orderNo}</b>
                </th>
                <td>
                  <div className="tm-status-circle"></div>
                  {item.status}
                </td>
                <td>
                  <b>{item.operators}</b>
                </td>
                <td>
                  <b>{item.location}</b>
                </td>
                <td>
                  <b>{item.distance} km</b>
                </td>
                <td>{item.startDate}</td>
                <td>{item.deliveryDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
