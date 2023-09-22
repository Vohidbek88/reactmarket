import { useContext, useState } from "react";
import "./product.css";
import { Context } from "../context";

const Product = (props) => {
  const [qty, setQty] = useState();
  const { state, dispatch } = useContext(Context);
  const { id, description, url, price } = props;
  const addItem = (id) => {
    if (state.buyproduct.some((item) => item.id == id)) {
      dispatch({ type: "INCR", payload: id });
    } else {
      const newArr = state.data.find((item) => item.id == id);
      dispatch({ type: "BUY_PUSH", payload: newArr });
    }
  };
  return (
    <div className="cart">
      <img src={url} alt={description} width={"170"} height={"170"} />
      <p style={{ fontWeight: "900", paddingTop: "5px" }}>
        {description && description.split("").slice(0, 50)}
      </p>
      <span style={{ color: "blue", fontWeight: "900", padding: "5px 0" }}>
        {" "}
        {price}$
      </span>
      <div className="fotrbtn">
        <button className="korzbtn">
          <span>{qty && qty}</span>
          <i
            className="fa-solid fa-cart-shopping"
            style={{ fontSize: "30px", color: "green", cursor: "pointer" }}
            onClick={() => dispatch({ type: "OP_CS" })}
          ></i>
        </button>
        <button className="btnadd" onClick={() => addItem(id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
