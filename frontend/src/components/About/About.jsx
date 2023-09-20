import React from 'react'; 
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import '../About/About.css'; 

function About() {
  return (
    <div class="about">
      <div class="div">
        <div class="top-header">
          <div class="frame">
            <div class="frame-2">
              <p class="text-wrapper">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
              <div class="text-wrapper-2">ShopNow</div>
            </div>
            <div class="frame-3">


            </div>
          </div>
        </div>
        <div class="header">
          <div class="frame-4">
            <div class="logo"><div class="text-wrapper-4">Jewellery</div></div>
            <div class="frame-5">


              <div class="header-3">
                <Link to="/Login">
                  <div class="text-wrapper-6">Login</div>
                </Link>
                <div class="under-line"></div>
              </div>
              <div class="header-4">
                <Link to="/signup">
                  <div class="text-wrapper-5">Sign Up</div>
                </Link>
              </div>
            </div>
          </div>
          <div class="frame-6">
            <div class="search-component-set">
              <div class="frame-7">
                <p class="p">What are you looking for?</p>

              </div>
            </div>
            <div class="frame-8">

              <div class="with-buy"></div>

            </div>
          </div>
        </div>
        <div class="line"><img class="line-2" src="img/line-3.svg" /></div>
        <div class="roadmap">

        </div>
        <div class="frame-9">

          <div class="frame-10">
            <p class="text-wrapper-8">
              Shopping for jewelry online could be a very confusing experience for
               shoppers for two reasons. First, because the chance to feel and touch 
               the product on sale before buying it is not possible, and second, 
               the options are almost limitless; it could be overwhelming. 
               This is where writing a good and effective jewelry product description comes in. 
               It is one of the essential tricks online jewelers should learn to outsmart 
               competitors. It’s easy, so keep your creative juice flowing!
            </p>
            <p class="exclusive-has-more">

            </p>
          </div>
        </div>
        <div class="side-image">
          <img
            class="portrait-two-african"
            src="https://i.pinimg.com/564x/33/5d/8b/335d8bb4fb9b08a7c966276d8a93e4f9.jpg"
          />
        </div>




      </div>



    </div>

  )
}

export default About;
