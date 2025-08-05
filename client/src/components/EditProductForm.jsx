import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function EditProductForm() {
  let [name,setName] = useState("")
  let [image,setImage] = useState("")
  let [price,setPrice] = useState()
  let [description,setDescription] = useState("")
  let params = useParams()

  let uploadData = async() => {
    try{
      await axios.put(`http://localhost:4001/products/${params.productId}`,{
        name: name,
        image: image,
        price: price,
        description: description
      })
    }catch{
      alert("Errore")
    }
  }

  return (
    <form className="product-form" onSubmit={uploadData}>
      <h1>Edit Product Form</h1>
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
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
