import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./checkout.css";

export const SuccessPage = () => {
  const [form, setForm] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let res = JSON.parse(localStorage.getItem("booking"));
    setForm(res);
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div id="checkDiv">
      <div>
        <h1 id="check_head">Confirmation</h1>
        <p id="check_sec_head">Your Booking is Confirmed</p>
      </div>
      <div>
        <div>
          <p>
            <b>Name: </b> {form.nam}
          </p>
          <p>
            <b>Contact Number: </b> {form.contact}
          </p>
          <p>
            <b>Vehicle Number: </b> {form.vehicle}
          </p>
          <p>
            <b>Timing: </b> {form.time}
          </p>
        </div>
      </div>
      <div id="check_bottom">
        <button id="check_btn" onClick={handleClick}>
          Go to Home
        </button>
      </div>
    </div>
  );
};
