import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product';

const Shop = (props) => {
  const navigate = useNavigate();

  const getProduct = (e) => {
    e.preventDefault();
    let id = parseInt(e.target.getAttribute('data-test-id'));
    let prodCount =
      e.target.previousElementSibling.previousElementSibling.value;

    for (const prod of props.products) {
      if (id === prod.id) {
        return [prod, prodCount];
      }
    }
  };

  const addToCartPage = (selectedProdDets, cartProds) => {
    for (const prod of cartProds) {
      if (selectedProdDets[0].id === prod.id) {
        const result = cartProds.map((prod) => {
          if (selectedProdDets[0].id === prod.id) {
            prod.numItems = prod.numItems + parseInt(selectedProdDets[1]);
            prod.newPrice = selectedProdDets[0].price * prod.numItems;
          }
          return prod;
        });
        props.setToCartProds(result);
        return;
      }
    }

    selectedProdDets[0].numItems = parseInt(selectedProdDets[1]);
    selectedProdDets[0].newPrice =
      selectedProdDets[0].numItems * selectedProdDets[0].price;
    props.setToCartProds([...cartProds, selectedProdDets[0]]);
  };

  const getTotalPrice = (cartProds) => {
    let sum = 0;
    for (const prod of cartProds) {
      sum = sum + prod.newPrice;
    }

    props.setTotalPrice(sum);
  };

  const submitToCart = (e) => {
    let prodDets = getProduct(e);
    addToCartPage(prodDets, props.cartProds);
  };

  useEffect(() => {
    getTotalPrice(props.cartProds);
  });

  return (
    <section id="shop">
      <ul>
        {props.products.map((product) => {
          return (
            <li key={product.id}>
              <Product
                source={product.source}
                title={product.title}
                price={`$ ${product.price}`}
                addToCart={props.addToCart}
                id={product.id}
                getItemId={submitToCart}
              />
            </li>
          );
        })}
      </ul>
      <div className="checkout">
        <button onClick={() => navigate('/Cart')}>Proceed To Checkout</button>
      </div>
    </section>
  );
};

export default Shop;
