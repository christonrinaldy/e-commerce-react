
const initialState = {
    products: []
}

export default function productReducer (state = initialState,action) {
    switch (action.type) {
        case 'SET_PRODUCTS':
            const products = action.payload.products
            state.products = products
            return {...state, products}
        case 'ADD_PRODUCT':
            const new_products = state.products.concat(action.payload.product)
            state.products = new_products
            return {...state, new_products}
        case 'REMOVE_ADMIN':
            state.products = action.payload.products
        default:
            return state
    }
}