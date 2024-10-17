import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../Features/ProductsSlice'
import cartReducer from '../Features/CartSlice'
import userReducer from '../Features/usersSlice'
export default configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        users: userReducer,
    }
})