import React, { useState } from "react";
import Hits from './Latest_Hits';
import Performance from './Performance';
import Information from './Storage-Information';
import Notification from './Notification-List';
import Orders from './Orders_List';


const Dashboard = () => {
    let localPerformance = JSON.parse(localStorage.getItem("dashboardPage"))[
      "storage"
    ];
    const [userData, setUserData] = useState({
      labels: [
        `Available (${localPerformance.available}GB)`,
        `System (${localPerformance.system}GB)`,
        `Used (${localPerformance.used}GB)`,
      ],
  
      datasets: [
        {
          data: [
            localPerformance.available,
            localPerformance.system,
            localPerformance.used,
          ],
  
          backgroundColor: ["#f7604c", "#a8d582", "#4ed6b8"],
          fontColor: "#fff",
        },
      ],
    });
  
    return (
        <div class="container">
        <div class="row">
            <div class="col">
                <p class="text-white mt-5 mb-5">Welcome back, <b>Admin</b></p>
            </div>
        </div>
        <div class="row tm-content-row">
            <Hits />
            <Performance />
            <Information  chartData={userData}/>
            <Notification />
            <Orders />
        </div>
    </div>
    );
  };
  
  export default Dashboard;