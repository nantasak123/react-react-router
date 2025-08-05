import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";

function ViewProductPage() {
  let params = useParams();
  let navigator = useNavigate()
  let [product,setProducts] = useState([])

  // fetch product data function
  let fetchProductData = async() =>{
    try {
      let result = await axios.get(`http://localhost:4001/products/${params.productId}`)
      setProducts(result.data.data)
    }catch{
      alert("Error")
    }
  }
  // go back function
  let goToHomePage = () => {
    navigator("/")
  }
  // fetch data for 1 time
  useEffect(() => {
    fetchProductData()
  },[])
  // return html
  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
      <button onClick={goToHomePage}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
