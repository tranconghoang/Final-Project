import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoryDropDown from "./CategoryDropDown";
import SearchEngine from "./SearchEngine";
import "./TopNavigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCat,
  faList,
  faSearch,
  faShoppingCart,
  faTshirt,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import {
  Grid,
  PersonBoundingBox,
  Laptop,
  HouseDoor,
  EggFried,
} from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { getProductList, getSearch } from "../redux/action";
const search = <FontAwesomeIcon icon={faSearch} />;
const cart = <FontAwesomeIcon icon={faShoppingCart} />;
const tshirt = <FontAwesomeIcon icon={faTshirt} />;
const cat = <FontAwesomeIcon icon={faCat} />;
const utensil = <FontAwesomeIcon icon={faUtensils} />;

export default function TopNavigation({ categoryList }) {
  console.log(categoryList);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        className="navbar d-flex  justify-content-center"
      >
        <Nav as={Link} to="/">
          {" "}
          <img src="/logo.svg" />
        </Nav>
        <Nav className="mga">
          <Nav.Link className="CategoryHover" as={Link} to="/Categorypage">
            <Grid />
            <ul className="ParagraphCategoryHover">
              <li>Fashion</li>
              <li>Cosmetics</li>
              <li>Entertainment</li>
              <li style={{ whiteSpace: "nowrap" }}>Electronic Gadgets</li>
              <li>Bookstore</li>
              <li>Sneakers</li>
              <li>Hobbies</li>
              <li>Miscellaneous</li>
            </ul>
          </Nav.Link>
        </Nav>

        <Form className="searchbarform">
          <FormControl
            type="text"
            onChange={(e) => dispatch(getSearch(e.target.value))}
            placeholder="Search"
            className="mr-sm-2 searchbar"
          />
          <Button variant="outline-info">{search} </Button>
        </Form>

        <Nav className="cart">
          <Nav.Link as={Link} to="/Cartpage">
            {cart}
          </Nav.Link>
        </Nav>

        <Nav className="login">
          <Button className="mr-sm-2 navbtn" to="/LoginForm" as={Link}>
            Login
          </Button>
          <Button className="ml-sm-2 navbtn" to="/RegisterForm" as={Link}>
            Register
          </Button>
        </Nav>
      </Navbar>
    </div>
  );
}
