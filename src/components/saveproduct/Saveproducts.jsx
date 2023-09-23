import { useContext, useState } from "react";
import "./saveproducts.css";
import { Context } from "../context";

const Saveproducts = () => {
  const { state, dispatch } = useContext(Context);
  let price = state.buyproduct.reduce((item, qual) => {
    return item + qual.price * qual.quanity;
  }, 0);
  let count = state.buyproduct.reduce((item, qual) => {
    return item + qual.quanity;
  }, 0);
  localStorage.setItem('cart',JSON.stringify(state.buyproduct)) || []
  return (
    <div className={`none ${state.opcls ? "active" : ""}`}>
      <div className="clrel">
        <span className="close" onClick={() => dispatch({ type: "OP_CS" })}>
          ✕
        </span>
      </div>
      <div className="total">
        <h3>Total price: {price}$</h3>
        <h3>Total products count: {count}</h3>
      </div>
      <div className="bybuild">
        {state.buyproduct.length > 0 ? (
          state.buyproduct.map((item) => {
            return (
              <div key={item.id} className="buildcart">
                <img
                  width={"100px"}
                  height={"100px"}
                  src={item.image}
                  alt="k"
                  style={{borderRadius:'8px'}}
                />
                <span>{item.quanity}*{item.price}$</span>
                <button
                  className="btn"
                  onClick={() => dispatch({ type: "DECR", payload: item.id })}
                >
                  -
                </button>
                <p>{item.quanity}</p>
                <button
                  className="btn"
                  onClick={() => dispatch({ type: "INCR", payload: item.id })}
                >
                  +
                </button>
                <button className="trsh"
                  onClick={() => dispatch({ type: "DEL", payload: item.id })}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            );
          })
        ) : (
          <h1>Empty List</h1>
        )}
      </div>
    </div>
  );
};

export default Saveproducts;
