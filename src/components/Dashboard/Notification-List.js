import React, { useEffect, useState } from "react";

const Notification = () => {
    let [notifications, setNotifications] = useState({});
  
    useEffect(() => {
      setNotifications(
        JSON.parse(localStorage.getItem("dashboardPage"))["notifications"]
      );
    }, []);
  
    let notificationsarr = Object.keys(notifications).map(
      (key, index) => notifications[key]
    );
  
    return (
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-overflow">
                <h2 className="tm-block-title">Notification List</h2>
                <div className="tm-notification-items">
                    {notificationsarr.map((item, i) => (
                        <div className="media tm-notification-item">
                            <div className="tm-gray-circle">
                                <img src={item.pic} alt={i} className="rounded-circle" />
                            </div>
                            <div className="media-body">
                                <p className="mb-2">{item.message}.</p>
                                <span className="tm-small tm-text-color-secondary">{item.time}.</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
  };
  
  export default Notification;