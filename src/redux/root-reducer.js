import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartreducer";
import directoryReducer from "./directory/directoryReducer";
import shopReducer from "./shop/shopReducer";

import { persistReducer } from "redux-persist";

//import the type of storage you want
import storage from 'redux-persist/lib/storage';

//config for redux-persist
const persistConfig = ({
    key: 'root',
    storage,
    whitelist: ['cart']
})

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)