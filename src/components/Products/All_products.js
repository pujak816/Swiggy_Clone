import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const All_products = () => {
  const [productlist, setProductlist] = useState([]);
  const [selected, setSelected] = useState([]);
  const [modal, setModal] = useState(false);

  const [category, setCategory] = useState("");
  const [description, setdescription] = useState("");
  const [expireDate, setexpireDate] = useState("");
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [unitSold, setUnitSold] = useState("");
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
  }, [selected]);

  const deleteHandler = (e) => {
    console.log(e.target.id);
    let obj = JSON.parse(localStorage.getItem("productsPage"));
    let productsData = obj["products"];

    let productsAfterDelete = productsData.filter(
      (item) => item.name !== e.target.id
    );
    obj = {
      ...obj,
      products: productsAfterDelete,
    };
    localStorage.setItem("productsPage", JSON.stringify(obj));

    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
  };

  const checkboxHandler = (e) => {
    if (e.target.checked) {
      setSelected([...selected, e.target.id]);
    } else {
      selected.splice(selected.indexOf(e.target.id), 1);
      setSelected(selected);
    }
  };

  const selectedDeleteHandler = () => {
    let checkboxAfterDelete = productlist.filter(
      (item) => !selected.includes(item.name)
    );
    // console.log(checkboxAfterDelete);

    let obj = JSON.parse(localStorage.getItem("productsPage"));
    obj = {
      ...obj,
      products: checkboxAfterDelete,
    };
    localStorage.setItem("productsPage", JSON.stringify(obj));

    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );

    let selectedall = document.querySelectorAll("input[type=checkbox]:checked");
    for (let i = 0; i < selectedall.length; i++) {
      selectedall[i].checked = false;
    }
  };

  return (
    <>
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 tm-block-col">
                <div className="tm-bg-primary-dark tm-block tm-block-products">
                    <div className="tm-product-table-container">
                        <table className="table table-hover tm-table-small tm-product-table">
                            <thead>
                                <tr>
                                    <th scope="col">&nbsp;</th>
                                    <th scope="col">PRODUCT NAME</th>
                                    <th scope="col">UNIT SOLD</th>
                                    <th scope="col">IN STOCK</th>
                                    <th scope="col">EXPIRE DATE</th>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productlist.map((item, i) => (
                                    <tr key={i}>
                                        <th id={i} scope="row">
                                            <input type="checkbox" id={item.name} onChange={checkboxHandler}/>
                                        </th>
                                        <td className="tm-product-name">{item.name}</td>
                                        <td>{item.unitSold}</td>
                                        <td>{item.stock}</td>
                                        <td>{item.expireDate}</td>
                                        <td><span className="tm-product-delete-link"><i className="far fa-trash-alt tm-product-delete-icon" id={item.name} onClick={deleteHandler}></i></span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Link to="/add_product" className="btn btn-primary btn-block text-uppercase mb-3">Add new product</Link>
                    <button className="btn btn-primary btn-block text-uppercase" onClick={selectedDeleteHandler} type="reset">Delete selected products</button>
                </div>
            </div>
    </>
  );
};

export default All_products;