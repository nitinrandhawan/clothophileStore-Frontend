import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import HotSales from "../components/HotSales";
import CardSection2 from "../components/CardSection2";
import Instagram from "../components/Instagram";
import TrendySection from "../components/TrendySection";
import { useDispatch } from "react-redux";
import {
  fetchLatestProducts,
  fetchProducts,
  fetchSellProducts,
} from "../redux/slices/Products.jsx";
import DiscountSection from "../components/DiscountSection.jsx";
import { RevealTexts } from "../components/RevealTexts.jsx";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSellProducts());
    dispatch(fetchProducts());
    dispatch(fetchLatestProducts());
  }, []);
  return (
    <div>
      <HeroSection />
      <HotSales />
      <Instagram />
      <DiscountSection/>
      <CardSection2 />
      {/* <RevealTexts/> */}
      {/* <TrendySection /> */}
    </div>
  );
}

export default Home;
