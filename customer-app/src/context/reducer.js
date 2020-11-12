import {
    cartFunctions as cf
} from '../helpers/cartFunctions';
export const initialState = {
    cartLength: cf.getCart().length,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "Add to cart":
            state.cartLength++
            return state ;

        case "Remove from cart":

            state.cartLength--
            return state;
        default:
            return state
    }

}

export default reducer;