const initialState = {
    Admin: null,
    status: null,
}

export default function adminReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ADMIN':
            state.Admin = action.payload.admin
            return {...state.Admin}
            return state.Admin
        case 'SET_STATUS':
            state.status = action.payload.status
        case 'REMOVE_ADMIN':
            state.Admin = action.payload.admin
            state.status = action.payload.status
        default:
            return state
    }
}