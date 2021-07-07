import {
  ADD_TO_CART,
  GET_CATEGORIES,
  GET_COLOR,
  GET_PRODUCTDETAIL,
  GET_PRODUCTLIST,
  GET_SEARCH,
} from "./types";
const initialState = {
  qty: 0,
  count: 2,
  size: false,
  categoryList: undefined,
  productList: undefined,
  productDetail: undefined,
  searchProductList: undefined,
  cart: [],
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES: {
      return { ...state, categoryList: action.categoryList };
    }
    case GET_PRODUCTLIST: {
      return { ...state, productList: action.productList };
    }
    case GET_PRODUCTDETAIL: {
      return { ...state, productDetail: action.productDetail };
    }
    case GET_SEARCH: {
      const { query } = action;
      const searchProductList = [];
      for (let item of state.productList) {
        if (item.name.toLowerCase().includes(query.toLowerCase()))
          searchProductList.push(item);
      }
      return { ...state, searchProductList, query };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        categoryList: action.categoryList,
        cart: action.payload.cartItems,
        productDetail: action.payload.product,
      };
    }
    case GET_COLOR: {
      return { ...state, color: action.color };
    }
    
    default:
      return state;
  }
};

export default appReducer;
