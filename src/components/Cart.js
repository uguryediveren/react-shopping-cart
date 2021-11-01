import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../App";

function getCartTotal(cart) {
  let total = 0;
  for (var i = 0; i < cart.length; i++) {
    let item = cart[i];
    total += item.price * item.count;
  }
  return total;
}

const Cart = () => {
  const context = useContext(BooksContext);

  return (
    <div>
      <h2>
        <Link to="/">Book List</Link> <span>Cart ({context.totalBooks})</span>
      </h2>

      <h3>Total Cart Amount: &#8378;{getCartTotal(context.state.cart)}</h3>

      {context.state.cart.map((cartItem) => {
        return (
          <div key={cartItem.id} className="book">
            <img src={cartItem.image} alt={cartItem.name} />
            <div>
              <h4>{cartItem.name}</h4>
              <p>Yazar: {cartItem.author}</p>
              <p>Fiyat: &#8378;{cartItem.price}</p>
              <p>
                Toplam: &#8378;{(cartItem.count * cartItem.price).toFixed(2)}
              </p>
              <p>There are {cartItem.count} book in your cart.</p>
              <button onClick={() => context.reduceCartItem(cartItem.id)}>
                -
              </button>
              <button onClick={() => context.removeFromCart(cartItem.id)}>
                Remove from cart
              </button>
              <button onClick={() => context.addToCart(cartItem)}>+</button>
            </div>
          </div>
        );
      })}

      {/* <div className="book">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51eqjXwFzwL._SX344_BO1,204,203,200_.jpg"
          alt="Simyacı"
        />
        <div>
          <h4>Simyaci</h4>
          <p>Yazar: Paulo Coelho</p>
          <p>Fiyat: &#8378;19.99</p>
          <p>Toplam: &#8378;19.99</p>
          <p>Sepetinizde bu kitaptan toplam 1 adet var.</p>
          <button>-</button>
          <button>Sepetten Çıkar</button>
          <button>+</button>
        </div>
      </div> */}
    </div>
  );
};

export default Cart;
