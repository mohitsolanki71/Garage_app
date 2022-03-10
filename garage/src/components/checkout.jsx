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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleClick = () => {
    if (
      form.nam === undefined ||
      form.time === undefined ||
      form.contact === undefined ||
      form.vehicle === undefined
    ) {
      alert("Please fill all the details !!");
    } else {
      localStorage.setItem("punctured_booking", JSON.stringify(form));
      alert("Appointment booked successfully !!");
      navigate("/success");
    }
  };
  console.log("Booking : ", form);

  return (
    <div id="checkDiv">
      <div>
        <h1 id="check_head">Checkout</h1>
        <p id="check_sec_head">Bill is Generated</p>
      </div>

      <div id="customer_details">
        <label htmlFor="nam">Name</label>
        <input
          type="text"
          name="nam"
          placeholder="Name"
          onChange={handleChange}
        />
        <label htmlFor="contact">Contact No.</label>
        <input
          type="number"
          name="contact"
          placeholder="Contact No."
          onChange={handleChange}
        />
        <label htmlFor="vehicle">Vehicle Number</label>
        <input
          type="text"
          name="vehicle"
          placeholder="Vehicle Number"
          onChange={handleChange}
        />
        <label htmlFor="Time">Time</label>
        <input
          type="time"
          name="time"
          placeholder="Time"
          onChange={handleChange}
        />
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
