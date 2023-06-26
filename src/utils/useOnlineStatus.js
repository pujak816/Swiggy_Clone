import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setonlineStatus] = useState(); // state variable to maintain the state

  useEffect(() => {
    window.addEventListener("offline", () => {
      setonlineStatus(false);
    });
    window.addEventListener("online", () => {
      setonlineStatus(true);
    });
  }, []);

  return onlineStatus; // return boolean
};
export default useOnlineStatus;
