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

export default function SubCategory({ categoryList }) {
  console.log(categoryList);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="subCat">
        <div>
          {Array.isArray(categoryList) &&
            categoryList.map((item) => (
              <Button
                variant="info"
                as={Link}
                onClick={() => dispatch(getProductList(item.id, 1))}
              >
                {" "}
                &nbsp;{item.name}
              </Button>
            ))}
        </div>
      </div>
    </div>
  );
}
