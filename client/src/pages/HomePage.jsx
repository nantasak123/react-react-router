import { useState, useEffect } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let navigator = useNavigate();

// get product data
  const getProducts = async () => {
    try {
      setIsError(false);
      const results = await axios.get("http://localhost:4001/products");
      setProducts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };
  // delete product data
  let deleteProduct = async(id) => {
    await axios.delete(`http://localhost:4001/products/${id}`)
    getProducts()
  }

  function goToCreateProductPage() {
    navigator("/product/create");
  }
  function goToVeiwProductPage(id){
    navigator(`/product/view/${id}`);
  }
  function goToEditProductPage(id){
    navigator(`/product/edit/${id}`)
  }


  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
        <button onClick={() => goToCreateProductPage()}>Create Product</button>
      </div>
      <div className="product-list">
        {products.map((product) => {
          return (
            <div className="product">
              <div className="product-preview">
                <img
                  src="https://via.placeholder.com/250/250"
                  alt="some product"
                  width="250"
                  height="250"
                />
              </div>
              <div className="product-detail">
                <h1>Product name: {product.name} </h1>
                <h2>Product price: {product.price}</h2>
                <p>Product description: {product.description} </p>
                <div className="product-actions">
                  <button className="view-button" onClick={() => {goToVeiwProductPage(product.id)}}>View</button>
                  <button className="edit-button" onClick={() => {goToEditProductPage(product.id)}}>Edit</button>
                </div>
              </div>

              <button className="delete-button" onClick={() => {deleteProduct(product.id)}}>x</button>
            </div>
          );
        })}
      </div>
      {isError ? <h1>Request failed</h1> : null}
      {isLoading ? <h1>Loading ....</h1> : null}
    </div>
  );
}

export default HomePage;
