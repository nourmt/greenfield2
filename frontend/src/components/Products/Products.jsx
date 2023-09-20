import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import '../Wishlist/Wishlist.jsx'



import { useNavigate } from 'react-router-dom';
import './Products.css'
import Wishlist from '../Wishlist/Wishlist.jsx';
function Products() {
  const [products, setProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const [rem,setRem] = useState(false)
  const [clicked,setclicked]=useState(false)
  const [prod,setprod]=useState({})
  const navigate = useNavigate()
  console.log(products,"mydata")


  useEffect(() => {
    axios.get('http://localhost:5000/product/getAll')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error))
  }, [])

  const handleDelete = (productId) => {
    axios.delete(`http://localhost:5000/product/${productId}`)
      .then((res) => {
        if (res.status === 200) {
          setProducts(prevProducts => prevProducts.filter(product => product.idProduct !== productId))
          console.log('deleted')
        }
      })
      .catch(error => console.log(error))
  }
  
  const search=()=>setProducts( products.filter(products =>
    products.name.toLowerCase().includes(searchQuery.toLowerCase())
  ))
 


  const handlePut = (productId) => {
   const updatedProductData = {
      name: "Updated Name",
      image: "Updated Image URL",
      description: "Updated Description",
      price: 100, 
    }
  
    axios
      .put(`http://localhost:5000/product/${productId}`, updatedProductData)
      .then((res) => {
        console.log(res)
       navigate('/Update')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleBuy = (prod) => {
    setprod(prod)
    setclicked(true)
}



  
  return (
    
   <div>
  <Wishlist/>


    </div>
  )
      }
      

export default Products
