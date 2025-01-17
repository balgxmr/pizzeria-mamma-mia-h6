import React, { useContext } from "react";
import "../App.css";
import { formatoSeparador } from "../utils/utils";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, incrementarCantidad, decrementarCantidad, total } = useContext(CartContext);

  return (
    <div className="m-5">
      <h1>Carrito de compras</h1>
      <h4>Detalles del pedido:</h4>
      {cart.length > 0 ? (
        <div className="cart-container">
          {cart.map((pizza) => (
            <div className="pizza-cartDiv" key={pizza.cartItemId}>
              <img src={pizza.img} className="pizza-cartDiv--img" alt={pizza.name} />
              <p className="h6 pizza-cartDiv--name">{pizza.name}</p>
              <p className="h6 pizza-cartDiv--price">${formatoSeparador(pizza.price)}</p>
              <div className="pizza-cartDiv--quantity">
                <button className="btn btn-outline-danger btn-sm" onClick={() => decrementarCantidad(pizza.cartItemId)}>
                  -
                </button>
                <span className="mx-2">{pizza.count}</span>
                <button className="btn btn-outline-primary btn-sm" onClick={() => incrementarCantidad(pizza.cartItemId)}>
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay pizzas en el carrito.</p>
      )}
      <h3 className="mt-4">Total: ${formatoSeparador(total)}</h3>
      <button className="btn btn-dark mt-3">Pagar</button>
    </div>
  );
};

export default Cart;
