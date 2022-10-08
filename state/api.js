import * as actions from './actions'
const server_uri = "https://fruitmark.cyclic.app/"

export const getStores = () => async (dispatch) => {
    try {
        const res = await fetch( server_uri + "stores" )
        const data = await res.json();

        if(data.isError){
            console.log("COULD NOT FETCH STORES", data.info)
            return
        }

        dispatch({
            type: actions.SET_STORES,
            payload: { stores: data.stores }
        })

    } catch (error) {
        console.log("COULD NOT FETCH STORES", error)
    }
}

export const getTransactions = () => async (dispatch) => {
    try {
        const res = await fetch( server_uri + "transactions" )
        const data = await res.json()

        if(data.isError){
            console.log("COULD NOT GET TRANSACTIONS", data.info)
            return
        }

        dispatch({
            type: actions.SET_TRANSACTIONS,
            payload: { transactions: data.transactions }
        })

    } catch (error) {
        console.log("COULD NOT GET TRANSACTIONS")
    }
}

export const addTransaction = (transaction) => async (dispatch) => {
    try {
        let newTransaction = {
            from: transaction.from,
            to: transaction.to,
            content: []
        }

        if(transaction.banana){
            newTransaction.content.push({
                fruit: "banana",
                quantity: transaction.banana
            })
        }

        if(transaction.apple){
            newTransaction.content.push({
                fruit: "apple",
                quantity: transaction.apple
            })
        }

        if(transaction.orange){
            newTransaction.content.push({
                fruit: "orange",
                quantity: transaction.orange
            })
        }

        if(transaction.strawberry){
            newTransaction.content.push({
                fruit: "strawberry",
                quantity: transaction.strawberry
            })
        }

        if(transaction.cherry){
            newTransaction.content.push({
                fruit: "cherry",
                quantity: transaction.cherry
            })
        }

        const res = await fetch( server_uri + "transactions", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTransaction)
        })

        const data = await res.json()

        dispatch({
            type: actions.ADD_TRANSACTION,
            payload: { transaction: data.newTransaction }
        })
    } catch (error) {
        console.log("COULD NOT ADD TRANSACTION")
    }
}

export const logIn = ({ username, password }) => async (dispatch) => {
    try {
        const res = await fetch( server_uri + "users/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })

        const data = await res.json()

        // console.log(data)

        dispatch({
            type: actions.SET_USER,
            payload: { user: data.user }
        })

    } catch (error) {
        console.log("COULD NOT LOG IN")
    }
}

export const logOut = () => async (dispatch) => {
    try {
        dispatch({
            type: actions.SET_USER,
            payload: { user: null }
        })

    } catch (error) {
        console.log("COULD NOT LOG OUT")
    }
}
