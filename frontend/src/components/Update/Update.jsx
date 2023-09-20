import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './Update.css'
import {useLocation, useNavigate } from "react-router-dom";


const Update = () => {
  const location=useLocation()
  const product=location.state
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [clientsId, setClientsId] = useState(product.Clients_idClients);
  const [file, setFile] = useState(null);
  const [image, setImageUrl] = useState("");
  const [uploaded, setUploaded] = useState("");
  const [imageUrl1, setImageUrl1] = useState(null);
  const presetKey = "m2ftdosw";
  const navigate = useNavigate();
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadImage = async () => {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", presetKey);
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dvho59azq/image/upload`,
        form
      );
      setImageUrl(response.data.secure_url);
      return response.data.secure_url
    } catch (error) {
      console.log(error); 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const uploadedImageUrl = await uploadImage(); 

    if (uploadedImageUrl) {
      const newProduct = {
        name: name,
        image: uploadedImageUrl,
        description: description,
        price: price,
        Clients_idClients: clientsId,
      };

      axios
        .put(`http://localhost:5000/product/${product.idProduct}`, newProduct)
        .then((res) => {
          console.log(res.data,"updated");
          navigate("/products")
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div id="background2">
      <h2>Update</h2>
      <form className="form_one" onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <label>Name:</label>
          <input className="UpdInp"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
           
            onChange={(e) => handleFile(e)}
           
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input className="UpdInp"
            type="number"
            min="0"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Clients ID:</label>
          <input className="UpdInp"
            type="text"
            value={clientsId}
            onChange={(e) => setClientsId(e.target.value)}
            required
          />
        </div>
        {name && description && price? <button type="submit"    onClick={handleSubmit} >Update</button> :<button type="submit"  >Update</button> }
       
        {image && (<img src={uploaded } alt="Uploaded" style={{maxWidth:"100%"}} /> )}
        
       
      </form>

      
    </div>
  )
}

export default Update
