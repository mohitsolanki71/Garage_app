import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
export const Home = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      fetch("http://localhost:3020/shops")
        .then((d) => d.json())
        .then((res) => {
          setData(res);
          console.log("res", res);
        });
    } catch (e) {}
  };

  //
  const getRatingData = (e) => {
    let value = e.target.value;
    try {
      fetch(`http://localhost:3020/shops?rating=${value}`)
        .then((d) => d.json())
        .then((res) => {
          setData(res);
          console.log("res", res);
        });
    } catch (e) {}
  };

  const getPaymentData = (e) => {
    let value = e.target.value;
    try {
      fetch(`http://localhost:3020/shops?payment=${value}`)
        .then((d) => d.json())
        .then((res) => {
          setData(res);
          console.log("res", res);
        });
    } catch (e) {}
  };

  const getDiscountData = (e) => {
    let value = e.target.value;
    try {
      fetch(`http://localhost:3020/shops?discount=${value}`)
        .then((d) => d.json())
        .then((res) => {
          setData(res);
          console.log("res", res);
        });
    } catch (e) {}
  };

  const getLocationData = (e) => {
    let value = e.target.value;
    try {
      fetch(`http://localhost:3020/shops?location=${value}`)
        .then((d) => d.json())
        .then((res) => {
          setData(res);
          console.log("res", res);
        });
    } catch (e) {}
  };

  return (
    <div id="home_container">
      <div id="locations">
        <select name="" className="location_filter" onChange={getLocationData}>
          <option hidden>Location</option>
          <option value="housingboard">Housing Board</option>
          <option value="sadarbazar">Sadar Bazar</option>
          <option value="geetabhawan">Geeta Bhawan</option>
          <option value="palikabazar">Palika Bazar</option>
        </select>
      </div>
      <div id="content_container">
        <div id="all_filters">
          <h2>Filter By:</h2>
          <select name="" className="filters" onChange={getRatingData}>
            <option hidden>Rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Star</option>
            <option value="3">3 Star</option>
            <option value="4">4 Star</option>
            <option value="5">5 Star</option>
          </select>
          <select name="" className="filters" onChange={getPaymentData}>
            <option hidden>Mode of Payment</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
          <select name="" className="filters" onChange={getDiscountData}>
            <option hidden>Discount</option>
            <option value="10">10 Percent</option>
            <option value="20">20 Percent</option>
            <option value="30">30 Percent</option>
          </select>
        </div>
        <div id="shops_content">
          {data.map((e, i) => (
            <div className="each_shop">
              <Link className="link" to={`/shop/${e.id}`}>
                <img src={e.image} alt="" className="shop_img"></img>
              </Link>

              <div className="shop_detail">
                <div className="shop_part1">
                  <h3 className="shop_name">{e.name}</h3>
                  <p className="shop_location">{e.location}</p>
                </div>
                <div>
                  <p>{e.rating}⭐</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
