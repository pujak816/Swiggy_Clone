import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Add_Product = () => {
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

    const addProductHandler = () => {
        let obj = JSON.parse(localStorage.getItem("productsPage"));
        console.log("before addding product:", obj);
    
        if (
          category === "" ||
          description === "" ||
          expireDate === "" ||
          name === "" ||
          stock === "" ||
          unitSold === ""
        ) {
          alert("Please enter all details for product");
          return;
        }
    
        obj.products.push({
          category: category,
          description: description,
          expireDate: expireDate,
          name: name,
          stock: stock,
          unitSold: unitSold,
        });
    
        console.log("after addding product:", obj);
    
        localStorage.setItem("productsPage", JSON.stringify(obj));
        setProductlist(
          JSON.parse(localStorage.getItem("productsPage"))["products"]
        );
        setModal(false);
      };
    
      const selectDeleteHandler = (e) => {
        e.preventDefault();
      };

    return (
        <>
            <div className="container tm-mt-big tm-mb-big">
                <div className="row">
                    <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
                        <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                            <div className="row">
                            <div className="col-12">
                                <h2 className="tm-block-title d-inline-block">Add Product</h2>
                            </div>
                            </div>
                            <div className="row tm-edit-product-row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <form action="" className="tm-edit-product-form">
                                    <div className="form-group mb-3">
                                        <label htmlFor="Name">Product Name</label>
                                        <input onChange={(e) => setName(e.target.value)} value={name} name="name" type="text" className="form-control validate" required="" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="Description">Description</label>
                                        <textarea className="form-control validate" onChange={(e) => setdescription(e.target.value)} value={description} rows="3" required=""></textarea>
                                    </div>
                                    <div className="row">
                                        <div className="form-group mb-3 col-xs-12 col-sm-6">
                                            <label htmlFor="Category">Category</label>
                                            <input onChange={(e) => setCategory(e.target.value)} value={category} name="expire_date" type="text" className="form-control validate hasDatepicker" data-large-mode="true" />
                                        </div>
                                        <div className="form-group mb-3 col-xs-12 col-sm-6">
                                            <label htmlFor="Expiry Date">Expire Date</label>
                                            <input onChange={(e) => setexpireDate(e.target.value)} value={expireDate} name="expire_date" type="date" className="form-control validate hasDatepicker" data-large-mode="true" />
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="form-group mb-3 col-xs-12 col-sm-6">
                                            <label htmlFor="Stock">Stock</label>
                                            <input onChange={(e) => setStock(e.target.value)} value={stock} name="expire_date" type="text" className="form-control validate hasDatepicker" data-large-mode="true" />
                                        </div>
                                        <div className="form-group mb-3 col-xs-12 col-sm-6">
                                            <label htmlFor="Unit Sold">Units In Stock</label>
                                            <input onChange={(e) => setUnitSold(e.target.value)} value={unitSold} name="stock" type="text" className="form-control validate" required="" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-12">
                            <Link to="/products" className="btn btn-primary btn-block text-uppercase"  onClick={addProductHandler}>Add Product Now</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Add_Product;