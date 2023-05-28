import React, { useEffect, useState } from "react";

const Setting = (props) => {
  const [accname, setAccname] = useState("");
  const [accpwd, setAccpwd] = useState("");
  const [acccpwd, setAcccpwd] = useState("");
  const [accemail, setAccemail] = useState("");
  const [accphone, setAccPhone] = useState("");
  const [accpic, setAccpic] = useState("");
  const [obj, setObj] = useState({});
  const [update, isUpdate] = useState(false);

  const [modal, setModal] = useState(false);

  let activeUser = props;

  let localData = JSON.parse(localStorage.getItem("accountsPage"));
  let selectedDatatoShow = localData[`${props.activeUser}`];
  const updateProfileHandler = () => {
    setObj({
      email:
        accemail === "" ? localData[`${props.activeUser}`].email : accemail,
      name: accname === "" ? localData[`${props.activeUser}`].name : accname,
      password:
        accpwd === "" ? localData[`${props.activeUser}`].password : accpwd,
      phone:
        accphone === "" ? localData[`${props.activeUser}`].phone : accphone,
      profilePic:
        accpic === "" ? localData[`${props.activeUser}`].profilePic : accpic,
    });
    isUpdate(true);
    setModal(true);
  };

  const deletephotoHandler = () => {
    console.log("delete clicked");

    setObj({
      email: localData[`${props.activeUser}`].email,
      name: localData[`${props.activeUser}`].name,
      password: localData[`${props.activeUser}`].password,
      phone: localData[`${props.activeUser}`].phone,
      profilePic: "",
    });
    console.log(obj);
  };

  useEffect(() => {
    if (update) {
      console.log(obj);
      let obj1 = JSON.parse(localStorage.getItem("accountsPage"));
      console.log("before addding product:", obj1);
      console.log();
      obj1 = {
        ...obj1,
        [`${JSON.stringify(activeUser).slice(
          15,
          JSON.stringify(activeUser).length - 2
        )}`]: obj,
      };
      console.log(obj1);
      localStorage.setItem("accountsPage", JSON.stringify(obj1));
    }
    setAccname("");
    setAccpwd("");
    setAccemail("");
    setAccPhone("");
    setAccpic("");
  }, [obj, update]);

  return (
    <>
      <div className="row tm-content-row" >
        <div className="tm-block-col tm-col-avatar">
            <div className="tm-bg-primary-dark tm-block tm-block-avatar">
              <h2 className="tm-block-title">Change Avatar</h2>
              <div className="tm-avatar-container">
                  <img src={accpic.length > 0? accpic: selectedDatatoShow !== undefined? selectedDatatoShow.profilePic: ""} alt={selectedDatatoShow !== undefined ? selectedDatatoShow.name : ""} className="tm-avatar img-fluid mb-4" />
                  <span className="tm-avatar-delete-link">
                  <i className="far fa-trash-alt tm-product-delete-icon"  onClick={deletephotoHandler}></i>
                  </span>
              </div>
              <button className="btn btn-primary btn-block text-uppercase">
              Upload New Photo
              </button>
            </div>
        </div>
        <div className="tm-block-col tm-col-account-settings">
            <div className="tm-bg-primary-dark tm-block tm-block-settings">
              <h2 className="tm-block-title">Account Settings</h2>
              <form className="tm-signup-form row" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group col-lg-6">
                    <label for="name">Account Name</label>
                    <input name="name" type="text" className="form-control validate" onChange={(e) => setAccname(e.target.value)} value={accname.length > 0? accname: selectedDatatoShow !== undefined? selectedDatatoShow.name: ""}/>
                  </div>
                  <div className="form-group col-lg-6">
                    <label for="email">Account Email</label>
                    <input name="email" type="email" className="form-control validate" onChange={(e) => setAccemail(e.target.value)} value={accemail.length > 0? accemail: selectedDatatoShow !== undefined? selectedDatatoShow.email: ""}/>
                  </div>
                  <div className="form-group col-lg-6">
                    <label for="password">Password</label>
                    <input name="password" type="password" className="form-control validate" onChange={(e) => setAccpwd(e.target.value)} value={accpwd.length > 0? accpwd: selectedDatatoShow !== undefined? selectedDatatoShow.password: ""}/>
                  </div>
                  <div className="form-group col-lg-6">
                    <label for="password2">Re-enter Password</label>
                    <input name="password2" type="password" className="form-control validate"  onChange={(e) => setAcccpwd(e.target.value)} value={accpwd.length > 0? accpwd: selectedDatatoShow !== undefined? selectedDatatoShow.password: ""}/>
                  </div>
                  <div className="form-group col-lg-6">
                    <label for="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" className="form-control validate" onChange={(e) => setAccPhone(e.target.value)} value={accphone.length > 0? accphone: selectedDatatoShow !== undefined? selectedDatatoShow.phone: ""}/>
                  </div>
                  <div className="form-group col-lg-6">
                    <label className="tm-hide-sm">&nbsp;</label>
                    <button type="submit" className="btn btn-primary btn-block text-uppercase" onClick={updateProfileHandler}>Update Your Profile</button>
                  </div>
              </form>
            </div>
        </div>
      </div>
      {modal && (
        <div className="setModal">
      </div>
      )}
    </>
  );
};

export default Setting;