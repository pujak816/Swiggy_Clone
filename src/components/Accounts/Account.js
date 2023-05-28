import React, { useEffect, useState } from "react";
import List from './List_Account';
import Setting from './Settings';

const Account = () => {
  const [accdata, setAccdata] = useState({});
  const [user, setUser] = useState("");
  useEffect(() => {
    setAccdata(JSON.parse(localStorage.getItem("accountsPage")));
  }, []);

  const selectedUser = (data) => {
    setUser(data);
  };

  return (
    <div className="container mt-5">
        <List accdata={accdata} data={selectedUser}/>
        <Setting activeUser={user}/>
    </div>
  );
};

export default Account;