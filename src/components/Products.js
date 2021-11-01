import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../App";

const Products = (props) => {
  const context = useContext(BooksContext);

  console.log(context);

  return (
    <div>
      <h2>
        <span>Book List</span>
        <Link to="/cart">Cart ({context.totalBooks})</Link>
      </h2>
      {context.state.bookList.map((book) => (
        <div key={book.id} className="book">
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Author: {book.author}</p>
            <p>Price: &#8378; {book.price}</p>
            <button onClick={() => context.addToCart(book)}>Add to cart</button>
          </div>
        </div>
      ))}
      {/* <div className="book">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51eqjXwFzwL._SX344_BO1,204,203,200_.jpg"
          alt="Simyaci"
        />
        <div>
          <h4>Simyaci</h4>
          <p>Yazar: Paulo Coelho</p>
          <p>Fiyat: &#8378; 19.99</p>
          <button>Sepete Ekle</button>
        </div>
      </div> */}
    </div>
  );
};

export default Products;
