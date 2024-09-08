import React, { useEffect, useState } from "react";
import Wireless from "../assets/wireless-01.png";
import Services from "../services/Services";
import ProductList from "../Components/UI/ProductList";
import Clock from "../Components/UI/Clock.jsx";
import { productActions } from "../Redux/slices/productSlice.js";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSaleProducts, setBestSaleProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const products=useSelector(s=>s.products.products);
  const dispatch=useDispatch();

  const fetchProducts=async()=>{
    const res=await fetch('/products');
    const data=await res.json();
    dispatch(productActions.setProducts(data));
  }

  useEffect(()=>{
    fetchProducts();
  },[]);

  useEffect(() => {
    
    const filteredTrendingProducts = products.filter(
      (p) => p.category == "mobile"
    );
    const filteredBestSaleProducts = products.filter(
      (p) => p.category == "watch"
    );
    const filteredWirelessProducts = products.filter(
      (p) => p.category == "wireless"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSaleProducts(filteredBestSaleProducts);
    setWirelessProducts(filteredWirelessProducts);
  }, [products]);

  useEffect(() => {
    countDown();
  });

  const countDown = () => {
    const countDownDate = new Date("Dec 5, 2024 15:37:25").getTime();

    // Update the count down every 1 second
    const x = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };
  return (
    <div>
      <div className="banner">
        <div style={{ maxWidth: "40%", marginTop: "20px" }}>
          <div style={{ color: "grey", lineHeight: "28px" }}>
            Trending Product in 2022
          </div>
          <h2>Enhance Your Hearing Experience By Choosing SXB Headphone</h2>
          <div className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
            mollitia, itaque cumque quibusdam magni nam corporis quis possimus
            veniam nemo dolorum! Reprehenderit!
          </div>
          <button className="banner-button">Shop Now</button>
        </div>
        <div>
          <img src={Wireless} className="banner-image" />
        </div>
      </div>
      <Services />
      <div
        className="flex resp-padding"
        style={{ flexDirection: "column", gap: "30px", paddingTop: "50px" }}
      >
        <h2>Trending Products</h2>
        <ProductList data={trendingProducts} />
      </div>
      <div
        className="flex resp-padding"
        style={{ flexDirection: "column", gap: "30px", paddingTop: "50px" }}
      >
        <h2>Best Sales Products</h2>
        <ProductList data={bestSaleProducts} />
      </div>
      <div className="flex limited-offer">
        <h5 style={{ marginTop: "20px" }}>Limited Offers</h5>
        <h3>Ant WB-103 Headphones</h3>
        <Clock time={{hours,minutes,days,seconds}}/>
      </div>

      <div
        className="flex resp-padding"
        style={{ flexDirection: "column", gap: "30px", paddingTop: "50px" }}
      >
        <h2>New Arrivals</h2>
        <ProductList data={[...trendingProducts, ...wirelessProducts]} />
      </div>
    </div>
  );
};

export default Home;
