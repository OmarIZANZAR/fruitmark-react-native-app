import * as actions from './actions'

export default ( state, { type, payload } ) => {
    switch (type) {
        case actions.SET_STORES: 
            return {
                ...state,
                stores: payload.stores,
            };

        case actions.SET_USER: 
            return {
                ...state,
                user: payload.user,
            };

        case actions.SET_TRANSACTIONS: 
            return {
                ...state,
                transactions: payload.transactions,
            };

        case actions.ADD_TRANSACTION: 
            return {
                ...state,
                transactions: [ payload.transaction, ...state.transactions ],
            };
    
        default: return state;
    }
}