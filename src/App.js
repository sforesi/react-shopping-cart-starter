// import useState
import React, { useState } from 'react';
import './styles.css';
import AllTheThings from './components/AllTheThings';
import MyShoppingCart from './components/MyShoppingCart';
import Form from './components/Form';
import productsArr from './products';

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

  const AllTheThingscart = productsArr.map((ele, index) => {
    return (
      <ShoppingItems
      name={ele,name}
      price={ele.price}
      key={index}
      handleClick={() => removeFromCart(index)}
      />
    )
  }) 


  const MyShoppingCart = cart.map((ele, index) => {
    return (
      <ShoppingItems
      name={ele,name}
      price={ele.price}
      key={index}
      handleClick={() => removeFromCart(index)}
      />
    )
  }) 
  // create an addToCart function that takes in a product as a param
  // using the ...spread operator add the product to the cart array

  function removeFromCart(index) {
    let newShoppingCart = cart.filter((item, idx) => {
      return index !== index
    })
    setCart(newShoppingCart)
  }

  // create an removeFromCart function that takes in an index as a param
  // using Array.filter remove create a new array where that item is removed

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <Form />
      <div className="products">
        <AllTheThings />
        <MyShoppingCart />
      </div>
    </div>
  );
}
