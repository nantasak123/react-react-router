import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function CreateProductForm() {
  const navigate = useNavigate();
  let [name, setName] = useState('');
  let [image, setImage] = useState('');
  let [price, setPrice] = useState();
  let [description, setDescription] = useState('');
// back to home page after form submission
  let goToHome = (e) => {
    e.preventDefault();
    postProduct();
    navigate('/');
  }
  
  let postProduct = async () => {
     axios.post("http://localhost:4001/products", {
      name: name,
      image: image,
      price: price,
      description: description
    })
  
    
  }


  return (
    <form className="product-form" onSubmit={goToHome}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => {setName(e.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(e) => {setImage(e.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(e) => {setPrice(e.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(e) => {setDescription(e.target.value)}}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
