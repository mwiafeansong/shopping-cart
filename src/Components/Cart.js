import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = (props) => {
  const navigate = useNavigate();

  const removeItem = (e) => {
    let id = parseInt(e.target.getAttribute('data-test-id'));

    const result = props.cartItems.filter((prod) => {
      if (prod.id === id) {
        let newTotal = props.total - prod.newPrice;
        props.setTotalPrice(newTotal.toFixed(2));
        props.removeFromCart(prod.numItems);
      } else {
        return prod;
      }
    });

    props.setToCartProds(result);
  };

  return (
    <section id="cart">
      <h2>Your Cart</h2>
      <ul>
        {props.cartItems.map((item) => {
          return (
            <li key={item.id}>
              <div className="card">
                <img src={item.source} alt=""></img>
                <div className="cardDets">
                  <p className="prodName">{item.title}</p>
                  <p className="prodPrice">{`Number of items: ${item.numItems}`}</p>
                  <p className="prodPrice">{`Price: $${item.newPrice}`}</p>
                  <button
                    data-test-id={item.id}
                    type="button"
                    className="removeItem"
                    onClick={removeItem}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="checkoutDets">
        <div>
          Total Price: <span>{`$ ${props.total}`}</span>
        </div>
        {props.total != 0 && <button className="purchase">Checkout</button>}
        <button className="back" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </section>
  );
};

export default Cart;
