import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";
import getConfig from "../../utils/getConfig";

export const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        setProduct : (state, action) => {
            return action.payload
        }
    }
})

export const getProductThunk = () => dispatch => {
    dispatch (setIsLoading(true))

    axios
        .get('https://e-commerce-api-v2.academlo.tech/api/v1/products', getConfig())
        .then( resp => dispatch(setProduct(resp.data)))
        .catch(error => console.error(error))
        .finally(()=> dispatch (setIsLoading(false)))
}

export const createProductThunk = data => dispatch => {

    axios
        .post('https://e-commerce-api-v2.academlo.tech/api/v1/cart', data, getConfig())
        .then(() => dispatch(getProductThunk()))
        .catch(error => console.error(error))

}

export const cartCheckoutThunk = () => dispatch => {
    axios
        .post('https://e-commerce-api-v2.academlo.tech/api/v1/purchases', {}, getConfig())
        .then(()=> dispatch(getProductThunk()))
        .catch(error => console.error(error))

}

export const filterCategoriresThunk = id => dispatch => {
    dispatch (setIsLoading(true))
    axios
        .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/?categoryId=${id}`)
        .then(resp => dispatch(setProduct(resp.data)))
        .catch(error => console.error(error))
        .finally(()=> dispatch (setIsLoading(false)))
}
export const filterHeadlineThunk = valueInput => dispatch => {dispatch(setIsLoading(true))
axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${valueInput}`)
    .then(resp => dispatch(setProduct(resp.data)))
    .catch(error => console.error(error))
    .finally(()=> dispatch*setIsLoading(false))
}
export const {setProduct} = productSlice.actions;
export default productSlice.reducer;