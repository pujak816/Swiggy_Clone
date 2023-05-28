import React, { useState, useEffect } from "react";

const Categories = () => {
  const [productcategories, setProductCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const deleteHandler = (e) => {
    let obj = JSON.parse(localStorage.getItem("productsPage"));
    let categoriesData = obj["categories"];
    categoriesData.splice(categoriesData.indexOf(e.target.id), 1);
    obj = {
      ...obj,
      categories: categoriesData,
    };
    localStorage.setItem("productsPage", JSON.stringify(obj));

    setProductCategories(
      JSON.parse(localStorage.getItem("productsPage"))["categories"]
    );
  };
  useEffect(() => {
    setProductCategories(
      JSON.parse(localStorage.getItem("productsPage"))["categories"]
    );
  }, []);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const newCategoryHandler = (e) => {
    setNewCategory(e.target.value);
  };

  const addCategoryHandler = () => {
    if (newCategory === "") {
      alert("Please Enter a New Category");
      return;
    }
    productcategories.push(newCategory);
    console.log(productcategories);
    let obj = JSON.parse(localStorage.getItem("productsPage"));
    obj = {
      ...obj,
      categories: productcategories,
    };
    localStorage.setItem("productsPage", JSON.stringify(obj));
    setProductCategories(
      JSON.parse(localStorage.getItem("productsPage"))["categories"]
    );
    setShowModal(false);
    setNewCategory("");
  };

  return (
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-product-categoriesm tm-block-2">
                <h2 className="tm-block-title">Product Categories</h2>
                {showModal && (
                    <div>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group mb-3">
                                <label htmlFor="productcat">Category Name</label>
                                <input type="text" className="form-control validate" value={newCategory} id="productcat" onChange={newCategoryHandler}/>
                            </div>
                            <button className="btn btn-primary btn-block text-uppercase mb-3" onClick={addCategoryHandler}>Add Category</button>
                            <button className="btn btn-primary btn-block text-uppercase" onClick={() => setShowModal(false)}>Cancel</button>
                        </form>
                    </div>
                )}
                {!showModal && (
                    <>
                        <div className="tm-product-table-container">
                            <table className="table tm-table-small tm-product-table">
                                <tbody>
                                    {productcategories.map((item, i) => (
                                        <tr key={i}>
                                            <td className="tm-product-name">{item}</td>
                                            <td className="text-center">
                                                <span className="tm-product-delete-link">
                                                    <i className="far fa-trash-alt tm-product-delete-icon" id={item} onClick={deleteHandler}></i>
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <button className="btn btn-primary btn-block text-uppercase mb-3" onClick={showModalHandler}>Add new category</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Categories;