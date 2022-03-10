import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  let [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let arr = [];
    let res = JSON.parse(localStorage.getItem("packChossen"));
    console.log("res:", res);
    for (let key in res) {
      if (res[key]) {
        arr.push(key);
      }
    }
    setData(arr);
  };
  console.log("Data outside: ", data);

  const handleClick = () => {
    localStorage.setItem("total_amount", JSON.stringify(data.length * 1000));
    navigate("/checkout");
  };

  return (
    <div id="cart_container">
      <div>
        <h1 id="heading">Services Choosed</h1>
        <p id="next_heading">Bill is Generated</p>
      </div>

      {data.length > 0 ? (
        <>
          <div id="service_detail">
            {data.map((e, i) => (
              <p>
                {i + 1}. {e}
              </p>
            ))}
          </div>
          <div id="cart_bottom">
            <p id="cart_total">
              <b>Total Charges :</b> ₹ {data.length * 1000}
            </p>
            <button id="check_btn" onClick={handleClick}>
              Proceed to Checkout
            </button>
          </div>{" "}
        </>
      ) : (
        <div id="if_cart_empty">Cart is Empty</div>
      )}
    </div>
  );
};
