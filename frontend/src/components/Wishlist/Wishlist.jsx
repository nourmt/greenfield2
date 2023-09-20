import React, { useState , useEffect} from 'react';
import './Wishlist.css'
import axios from "axios"
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Wishlist() {

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

const search=()=>setProducts( products.filter(products =>
  products.name.toLowerCase().includes(searchQuery.toLowerCase())
))






  return (
    <div class="wishlist" >
    <div class="div">
      <div class="top-header">
        <div class="frame">
          <div class="frame-2">
            <p class="text-wrapper">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
           
          </div>
          
          
        </div>
      </div>
      <div class="header">
        <div class="frame-4">
          <div class="logo"><div class="text-wrapper-4">Jewellery</div></div>
          <div class="frame-5">
            <div class="div-wrapper">
            <Link to="/">
              <div class="text-wrapper-5">Home</div>
              </Link>
              </div>

            <div class="header-2">
            <Link to="/Products">
              <div class="text-wrapper-5">Products</div>
              </Link>
              </div>



            <div class="div-wrapper">
            <Link to="/Login">
              <div class="text-wrapper-5">Login</div>
              </Link>
              </div>

            <div class="header-3">
            <Link to="/Add">
              <div class="text-wrapper-5">Add Product</div>
              </Link>
              </div>



          </div>
        </div>
        <div class="frame-6">
          <div class="search-component-set">
            <div class="frame-7">
              
              
             
              <form>
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={event => {setSearchQuery(event.target.value);search()}}
          style={{ 
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '20px',
            width: '300px'
          }}
        />
      </form>




              <ul className="wrapper">
  <li className="icon facebook">
    <a href="https://www.facebook.com/BijouxElixir" target="_blank">
      <span className="tooltip">Facebook</span>
      <img src="https://static.cdnlogo.com/logos/f/35/facebook.png" alt="Facebook" />
    </a>
  </li>
  <li className="icon twitter">
    <a href="https://twitter.com/your-twitter" target="_blank">
      <span className="tooltip">Twitter</span>
      <img src="https://png.pngtree.com/png-clipart/20221019/original/pngtree-twitter-social-media-round-icon-png-image_8704823.png" alt="Twitter" />
    </a>
  </li>
  <li className="icon instagram">
    <a href="https://www.instagram.com/your-instagram" target="_blank">
      <span className="tooltip">Instagram</span>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram" />
    </a>
  </li>
  <li className="icon github">
    <a href="https://github.com/nourmt" target="_blank">
      <span className="tooltip">Github</span>
      <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="Github" />
    </a>
  </li>
  <li className="icon youtube">
    <a href="https://www.youtube.com/your-channel" target="_blank">
      <span className="tooltip">Youtube</span>
      <img src="https://img.freepik.com/vecteurs-premium/logo-youtube-rouge-logo-medias-sociaux_197792-1803.jpg?w=2000" alt="Youtube" />
    </a>
  </li>
</ul>





            </div>
          </div>
          <div class="frame-8">
            <div class="overlap-wrapper">
              <div class="overlap">
              
                <div class="group">
                  <div class="overlap-group">
                    <div class="ellipse"></div>
                    <div class="text-wrapper-6"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="with-buy"></div>
            
          </div>
        </div>
      </div>
      <div class="line"></div>
      <footer class="footer">
        <div class="frame-9">
          <div class="under-line"></div>
          <div class="frame-wrapper">
            <div class="frame-10">
              <img class="icon-copyright" src="img/icon-copyright.svg" />
              <p class="text-wrapper-7">Copyright Rimel 2022. All right reserved</p>
            </div>
          </div>
        </div>
        <div class="frame-11">
          <div class="div-2">
            <div class="frame-12">
              <div class="frame-12">
                <div class="logo"><div class="text-wrapper-8"></div></div>
                <div class="text-wrapper-9">Subscribe</div>
              </div>
              <p class="text-wrapper-10">Get 10% off your first order</p>
            </div>
            <div class="send-mail">
              <div class="text-wrapper-11">Enter your email</div>
              
            </div>
          </div>
          <div class="frame-12">
            <div class="text-wrapper-12">Support</div>
            <div class="div-2">
              <p class="element-bijoy-sarani">111 Bijoy sarani, Dhaka,&nbsp;&nbsp;DH 1515, Bangladesh.</p>
              <div class="text-wrapper-10">exclusive@gmail.com</div>
              <div class="text-wrapper-10">+88015-88888-9999</div>
            </div>
          </div>
          <div class="frame-12">
            <div class="text-wrapper-12">Account</div>
            <div class="div-2">
              <div class="text-wrapper-13">My Account</div>
              <div class="text-wrapper-10">Login / Register</div>
              <div class="text-wrapper-10">Cart</div>
              <div class="text-wrapper-10">Wishlist</div>
              <div class="text-wrapper-10">Shop</div>
            </div>
          </div>
          <div class="frame-12">
            <div class="text-wrapper-12">Quick Link</div>
            <div class="div-2">
              <div class="text-wrapper-13">Privacy Policy</div>
              <div class="text-wrapper-10">Terms Of Use</div>
              <div class="text-wrapper-10">FAQ</div>
              <div class="text-wrapper-10">Contact</div>
            </div>
          </div>
          <div class="frame-12">
            <div class="frame-12">
              <div class="text-wrapper-12">Download App</div>
              <div class="frame-13">
                <p class="text-wrapper-14">Save $3 with App New User Only</p>
                <div class="frame-2">
                  <div class="qr-code"><img class="qrcode" src="https://e7.pngegg.com/pngimages/506/620/png-clipart-qr-code-barcode-scanners-scanner-scan-miscellaneous-angle-thumbnail.png" /></div>
                  <div class="frame-14">
                    <div class="google-play">
                      <div class="overlap-group-2">
                        <div class="overlap-2">
                          <img class="vector-2" src="" />
                          <img class="vector-3" src="" />
                          <img class="vector-4" src="" />
                        </div>
                        <img class="vector-5" src="https://w7.pngwing.com/pngs/867/239/png-transparent-google-play-logo-google-play-android-app-store-play-now-button-text-label-logo.png" />
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-15">
              
            </div>
          </div>
        </div>
      </footer>
      <div class="frame-16">
        
      
       
        <div class="frame-17">
          <div class="frame-23">
            <div class="frame-24">
              <div class="category-rectangle"></div>
              <div class="text-wrapper-15">Just For You</div>
            </div>
            <button class="button"><div class="view-all-products">See All</div></button>
          </div>
         
               
                
          {!clicked ? 
      <div>
      <ul className='products-container'>
        
       {products.map((e,i)=>{
          return(
             <div  className="product-item-alt" key={i}>
            <img src={e.image} alt={e.name} />
            <h2>{e.name}</h2>
            <p>{e.description}</p>
            <p>{e.price}</p>
            {console.log(e.idProduct)}




          <button style={{backgroundColor:"black" , width:"190px"}} onClick={() => navigate("/Update" ,{ state: e})}>update<img style={{width:"30px" , height:"30px" , marginLeft:"68px", marginTop:"-22px"}} src=" https://w7.pngwing.com/pngs/1007/35/png-transparent-computer-icons-update-button-miscellaneous-angle-logo-thumbnail.png" alt="" />
          </button >
          <button style={{backgroundColor:"black" , width:"190px"}} onClick={() => handleDelete(e.idProduct)}>Delete<img style={{width:"30px" , height:"30px" , marginLeft:"68px", marginTop:"-22px"}} src="https://cdn.iconscout.com/icon/free/png-256/free-delete-737-475058.png" alt="" />
          </button>
          <button style={{backgroundColor:"black" , width:"190px"}} onClick={() => handleBuy(e)}>Buy<img style={{width:"30px" , height:"30px" , marginLeft:"60px", marginTop:"-22px"}} src="https://static.vecteezy.com/ti/vecteur-libre/p1/5726517-line-fast-trolley-shopping-logo-design-vector-graphic-symbol-icon-illustration-creative-idee-vectoriel.jpg" alt="" />
</button>
           </div>
          )      
        })}
        
   
      </ul>
      </div> : <Card  data2={prod}/>}
                
            
           
                </div>
              </div>
            </div>
          </div>
       
     
    
  )
}

export default Wishlist