import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";

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
        .get('https://e-commerce-api-v2.academlo.tech/api/v1/products')
        .then( resp => dispatch(setProduct(resp.data)))
        .catch(error => console.error(error))
        .finally(()=> dispatch (setIsLoading(false)))
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