import "./shopDetail.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ShopDetail = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const getData = () => {
    try {
      fetch(`http://localhost:3020/shops?id=${id}`)
        .then((d) => d.json())
        .then((res) => {
          setData(res[0]);
          console.log(res);
        });
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const handleClick = () => {
    localStorage.setItem("packChossen", JSON.stringify(form));
    alert("Pack is succesfully added to cart !!");
    navigate("/cart");
  };

  return (
    <div id="DetailContainer">
      <div id="shop_image_div">
        <img src={data.image} alt="" />
      </div>
      <div id="shopData">
        <p>
          <b>Name : </b> {data.name}
        </p>
        <p>
          <b>Location : </b> {data.location}
        </p>
        <p>
          <b>Rating : </b> {data.rating} ⭐
        </p>
        <p>
          <b>Payment Method : </b> {data.payment}
        </p>
        <p>
          <b>Discount : </b> {data.discount}
        </p>
        <div id="service_list">
          <div>
            <input
              type="checkbox"
              value="true"
              name="puncture"
              onChange={handleChange}
            />
            <label htmlFor="puncture">Puncture</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="true"
              name="wash"
              onChange={handleChange}
            />
            <label htmlFor="wash">Washing</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="true"
              name="service"
              onChange={handleChange}
            />
            <label htmlFor="service">Service</label>
          </div>

          <button id="addToCartBtn" onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
