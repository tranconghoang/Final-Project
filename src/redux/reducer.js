import { GET_CATEGORIES, GET_PRODUCTDETAIL, GET_PRODUCTLIST, GET_SEARCH } from './types'
const initialState = {
    count: 2,
    size: false,
    categoryList: undefined,
    productList: undefined,
    productDetail: undefined,
    searchProductList:undefined
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES: {
            return { ...state, categoryList: action.categoryList }
        }
        case GET_PRODUCTLIST: {
            return { ...state, productList: action.productList }
        }
        case GET_PRODUCTDETAIL: {
            return { ...state, productDetail: action.productDetail }
        }
        case GET_SEARCH: {
            const { query } = action
            const searchProductList = [];
            for (let item of state.productList) {
                if (item.name.toLowerCase().includes(query.toLowerCase()))
                    searchProductList.push(item)

            }
            return {...state, searchProductList, query}
    }
        default: return state
    }
}

export default appReducer