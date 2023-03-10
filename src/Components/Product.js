import { useState } from 'react';

const Product = (props) => {
  const [prodCount, setProdCount] = useState(1);

  const increment = () => {
    setProdCount(prodCount + 1);
  };

  const decrement = () => {
    if (prodCount === 1) {
      return;
    } else {
      setProdCount(prodCount - 1);
    }
  };

  const handleChange = (e) => {
    setProdCount(e.target.value);
  };

  return (
    <div className="card">
      <img src={props.source} alt=""></img>
      <div className="cardDets">
        <p className="prodName">{props.title}</p>
        <p className="prodPrice">{props.price}</p>
        <form>
          <button type="button" className="changeCount" onClick={decrement}>
            -
          </button>
          <input type="text" value={prodCount} onChange={handleChange}></input>
          <button type="button" className="changeCount" onClick={increment}>
            +
          </button>
          <button
            data-test-id={props.id}
            type="submit"
            onClick={(e) => {
              props.addToCart(prodCount);
              props.getItemId(e);
            }}
          >
            Add to Cart
          </button>
        </form>
      </div>
    </div>
  );
};

export default Product;
