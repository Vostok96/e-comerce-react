import {configureStore} from '@reduxjs/toolkit'
import product from './slices/product.slice'
import isLoading from './slices/isLoading.slice'
import purcharses from './slices/purchases.slice'

export default configureStore({
    reducer: {
        product,
        isLoading,
        purcharses

    }
})