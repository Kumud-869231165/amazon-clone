import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonBooksMarketing/LandingPage/AB/Landing-Evergreen-Hero-Desktop-Books.png" alt="" />
             
             {/* product id, title, price, rating, images */}
             <div className="home__row">
               <Product id="12321341"
               title="The Defining Decade: Why Your Twenties Matter and How to Make the Most of Them Now Paperback – 7 April 2016
               by Meg Jay  (Author)"
               price={11.96}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/81Zm61BJd-L.jpg"/>


               <Product id="22321341"
               title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB SSD) - Space Grey"
               price={1303.06}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg"/>

             </div>
             <div className="home__row">
               <Product id="32321341"
               title="Cracking the Coding Interview (Indian Edition) Paperback – 1 July 2015
               by Gayle Laakmann McDowell  (Author)"
               price={11.96}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/61oRH4y27jL.jpg"/>

               <Product id="42321341"
               title="Apple iPhone 11 Pro (512GB) - Gold"
               price={1261.96}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/61fkdeyq5QL._SL1024_.jpg"/>

               <Product id="52321341"
               title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October 2011
               by Eric Ries  (Author)"
               price={9.96}
               rating={5}
               image="https://m.media-amazon.com/images/P/0670921602.01._SCLZZZZZZZ_SX500_.jpg"/>
             </div>

             <div className="home__row">
               <Product id="62321341"
               title="Sony Bravia 139 cm (55 inches) XR series 4K Ultra HD Smart Full Array LED Google TV XR-55X90J (Black) (2021 Model) | with Alexa Compatibility"
               price={1405.96}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/81SwDz%2Bay2S._SL1500_.jpg"/>
             </div>
             
             {/* product */}
            


        </div>
    );
}

export default Home;