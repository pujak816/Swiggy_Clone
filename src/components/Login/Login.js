import React, { useEffect, useState } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const errMsg = <p className="text-red">Enter Valid Username / Password</p>;
  
    const usernameHandler = (e) => {
      setUsername(e.target.value);
      setShow(false);
    };
  
    const passwordHandler = (e) => {
      setpassword(e.target.value);
      setShow(false);
    };
  
    useEffect(() => {
      const getData = async () => {
        try {
          const response = await axios.get(
            "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json "
          );
          localStorage.setItem(
            "accountsPage",
            JSON.stringify(response.data.accountsPage)
          );
          localStorage.setItem(
            "dashboardPage",
            JSON.stringify(response.data.dasbhoardPage)
          );
          localStorage.setItem(
            "productsPage",
            JSON.stringify(response.data.productsPage)
          );
        } catch (err) {
          console.log(err);
        }
      };
      getData();
    }, []);
  
    const loginHandler = () => {
      if (username === password && username !== "" && password !== "") {
        setShow(false);
        localStorage.setItem("loginStatus", true);
        navigate("/dashboard");
        console.log("login");
      } else {
        setShow(true);
      }
    };
  
    return (
        <div className="container tm-mt-big tm-mb-big">
        <div className="row">
            <div className="col-12 mx-auto tm-login-col">
                <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="tm-block-title mb-4">Welcome to Dashboard, Login</h2>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12">
                            <form className="tm-login-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <label for="username">Username</label>
                                    <input type="text" className="form-control validate" onChange={usernameHandler} value={username} />
                                </div>
                                <div className="form-group mt-3">
                                    <label for="password">Password</label>
                                    <input type="password" className="form-control validate" onChange={passwordHandler} value={password}/>
                                </div>
                                {show && errMsg}
                                <div className="form-group mt-4">
                                    <button type="submit" className="btn btn-primary btn-block text-uppercase" onClick={loginHandler}>Login</button>
                                </div>
                                {/* <button className="mt-5 btn btn-primary btn-block text-uppercase">Forgot your password?</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  };
  
  export default Login;