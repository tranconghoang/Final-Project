import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductDetail from "../../Pages/ProductDetail";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  addToCart,
  getProductDetail,
  getProductList,
} from "../../redux/action";

export default function LeftPanel() {
  const cart = useSelector((state) => state.cart);
  const { path } = useParams();
  console.log(path);
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  useEffect(() => {
    dispatch(getProductDetail(path));
  }, [dispatch]);

  return (
      <Carousel  autoPlay>
        {productDetail &&
          productDetail.data.media.map((item) => (
            <div>
              <img
                alt=""
                src={item.image_500x500}
              />
            </div>
          ))}
      </Carousel>
  );
}
