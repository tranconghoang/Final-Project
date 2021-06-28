import { GET_CATEGORIES, GET_PRODUCTDETAIL, GET_PRODUCTLIST, GET_SEARCH, ADD_TO_CART } from "./types"

export const getCategories = () => {
    return function (dispatch) {
        fetch("http://localhost:8000/categories", {
            headers: {
                "Content-Type": "application/json"
            }

        })
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: GET_CATEGORIES,
                    categoryList: json
                })
            })
            .catch(console.error)
    }

}
export const getProductList = (cateId,page) => {
    return function (dispatch) {
        fetch("http://localhost:8000/products?cateId="+cateId+"&page="+page, {
            headers: {
                "Content-Type": "application/json"
            }

        })
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: GET_PRODUCTLIST,
                    productList: json.data
                })
            })
            .catch(console.error)
    }
}
export const getProductDetail = (htmlPath) => {
    return function (dispatch) {
        fetch(`http://localhost:8000/product/${htmlPath}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: GET_PRODUCTDETAIL,
                    productDetail: json.result
                })
            })
            .catch(console.error)
    }
}
export const getSearch = (query) => {
    return{
        type: GET_SEARCH,
        query
    }
}
export const addToCart = (items, product,qty,) => (dispatch) => {
    const cartItems = items.slice()
    let productAlreadyInCart = false
    cartItems.forEach(item=> {
        if(item.data.id === product.data.id) {
            productAlreadyInCart = true
            
        }
    })
    if (!productAlreadyInCart) {
        cartItems.push({ ...product, qty:qty, total_price: product.data.final_price * qty})
    }
    return dispatch({type: ADD_TO_CART,
        payload:{
            cartItems: cartItems,
            product: product,
        }})
}