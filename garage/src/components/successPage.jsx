import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./checkout.css";

export const CheckOut = () => {
  const [total, setTotal] = useState(0);
  const [form, setForm] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let res = JSON.parse(localStorage.getItem("total_amount"));
    setTotal(res);
  };

  const handleClick = () => {
    navigate("/");
  };
  console.log("Booking : ", form);

  return (
    <div id="checkDiv">
      <div>
        <h1 id="check_head">Checkout</h1>
        <p id="check_sec_head">The Royal Taste</p>
      </div>
      <div>
        <h3>Total : {total}</h3>
      </div>
      <div id="check_bottom">
        <button id="check_btn" onClick={handleClick}>
          Place Order
        </button>
      </div>
    </div>
  );
};
