import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice'
import getConfig from '../../utils/getConfig';



export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchases : (state, action) => {
            return action.payload
        }
    }
})

export const getPurchasesThunk = () => dispatch =>{
    
        axios
            .get('https://e-commerce-api-v2.academlo.tech/api/v1/cart', getConfig())
            .then(resp => dispatch(setPurchases(resp.data)))
            .catch(error => console.error(error))
            
}

export const createPurchaseThunk = (data) => (dispatch) => {
    axios
      .post(
        "https://e-commerce-api-v2.academlo.tech/api/v1/cart",
        data,
        getConfig()
      )
      .then(() => dispatch(getPurchaseThunk()))
      .catch((error) => console.error(error));
  };
  

export const {setPurchases} = purchasesSlice.actions;
export default purchasesSlice.reducer;