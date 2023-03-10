import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import canvasHat from './images/canvas-hat.jpg';
import fedoraHat from './images/fedora-hat.jpg';
import greatBlueHat from './images/great-blue-hat.jpg';
import beautyCap from './images/female-beauty-cap.jpg';
import leatherBoots from './images/leather-boots.jpg';
import workoutSneakers from './images/workout-sneakers.jpg';
import fashionSneakers from './images/fashion-sneakers.jpg';
import sneakerShoes from './images/sneaker-shoes.jpg';
import luxuryHandbag from './images/luxury-fashion-handbag.jpg';
import dressHandbag from './images/womens-dress-handbag.jpg';
import shinyLeatherHandbag from './images/shiny-womens-leather-bag.jpg';
import leatherHandBag from './images/brown-womens-leather-handbag.jpg';

const App = () => {
  const [itemCount, setItemCount] = useState(0);
  const [cartProds, setCartProds] = useState([]);
  const [total, setTotal] = useState(0);

  const products = [
    { id: 1, source: canvasHat, title: 'Canvas Hat', price: 19.99 },
    { id: 2, source: fedoraHat, title: 'Fedora Hat', price: 35.99 },
    {
      id: 3,
      source: greatBlueHat,
      title: 'Great Blue Hat',
      price: 29.99,
    },
    { id: 4, source: beautyCap, title: 'Beauty Cap', price: 30.99 },
    { id: 5, source: leatherBoots, title: 'Leather Boots', price: 50.99 },
    {
      id: 6,
      source: workoutSneakers,
      title: 'Workout Sneakers',
      price: 42.99,
    },
    {
      id: 7,
      source: fashionSneakers,
      title: 'Fashion Sneakers',
      price: 45.99,
    },
    { id: 8, source: sneakerShoes, title: 'Sneaker Shoes', price: 48.99 },
    { id: 9, source: luxuryHandbag, title: 'Luxury Handbag', price: 75.99 },
    { id: 10, source: dressHandbag, title: 'Dress Handbag', price: 110.99 },
    {
      id: 11,
      source: shinyLeatherHandbag,
      title: 'Shiny Leather Handbag',
      price: 102.99,
    },
    {
      id: 12,
      source: leatherHandBag,
      title: 'Leopard Print Handbag',
      price: 99.99,
    },
  ];

  const setToCart = (numItems) => {
    setItemCount(itemCount + numItems);
  };

  const removeFromCart = (prodNum) => {
    setItemCount(itemCount - prodNum);
  };

  const setToCartProds = (products) => {
    setCartProds(products);
  };

  const setTotalPrice = (sum) => {
    setTotal(sum);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="logoNav">
          <h1>Accessorize.</h1>
          <Navbar itemCount={itemCount} />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Shop"
            element={
              <Shop
                products={products}
                cartProds={cartProds}
                addToCart={setToCart}
                setToCartProds={setToCartProds}
                setTotalPrice={setTotalPrice}
              />
            }
          />
          <Route
            path="/Cart"
            element={
              <Cart
                cartItems={cartProds}
                total={total}
                setToCartProds={setToCartProds}
                setTotalPrice={setTotalPrice}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>

        <footer>
          <p>
            Photos from <a href="https://www.freepik.com">Freepik</a>
          </p>
          Copyright &copy; 2023{' '}
          <a href="https://www.github.com/mwiafeansong">mwiafeansong</a>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
