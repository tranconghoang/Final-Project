import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Ads from "../Components/AdBanner";
import Filter from "../Components/Filter";
import ProductBox from "../Components/Products";
import "./HomePage.css";

function HomePage() {

  return (
    <div className="over-all">
      <Ads></Ads>
      
      <ProductBox />
    </div>
  );
}
export default HomePage;
