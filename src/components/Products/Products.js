import React from "react";
import All_products from './All_products';
import Categories from './Product_Categories';
// import Add_Product from './Add-Product/Add_Product';


const Products = () => {
  return (
    <div className="container mt-5">
        <div className="row tm-content-row">
          <All_products/>
          <Categories/>
          {/* <Add_Product /> */}
        </div>
    </div>
  );
};

export default Products;
