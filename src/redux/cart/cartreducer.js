import { addItem } from './cart.util';

const initialState = {
    hidden: false,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_HIDDEN':
            return {
                ...state,
                hidden: !state.hidden
            }

        case 'ADD_ITEM':
            return {
                ...state,
                cartItems: addItem(state.cartItems, action.payload)
            }

        default:
            return state;
    }

}

export default cartReducer;