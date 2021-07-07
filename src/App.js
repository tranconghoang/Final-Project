import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import CategoryPage from "./Pages/CategoryPage";
import ProductDetail from "./Pages/ProductDetail";
import LoginPage from "./Pages/LoginPage";
import { Col, Container, Row } from "react-bootstrap";
import TopNavigation from "./Components/TopNavigation";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";
import Ads from "./Components/AdBanner";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect } from "react";
import { getCategories } from "./redux/action";
import ProductInsight from "./Components/ProductInsight/ProductInsight";
import SubCategory from "./Components/SubCategory";

function App() {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <Router>
      <TopNavigation categoryList={categoryList} />
      <Switch>
        <Route exact path="/">
          <SubCategory categoryList={categoryList} />
          <HomePage />
        </Route>
        <Route path="/Categorypage/">
          <SubCategory categoryList={categoryList} />
          <CategoryPage />
          <Suspense fallback={<h1>loading..</h1>} />
        </Route>
        <Route path="/Cartpage">
          <CartPage />
        </Route>
        <Route exac path="/Productinsight/:path">
          <ProductInsight />
        </Route>
        <Route path="/Loginpage">
          <LoginPage />
        </Route>
        <Route path="/LoginForm">
          <LoginForm />
        </Route>
        <Route path="/RegisterForm">
          <RegisterForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
