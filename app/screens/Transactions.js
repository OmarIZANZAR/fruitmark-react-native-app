import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import NewTransaction from '../components/NewTransaction'
import TransactionsList from '../components/TransactionsList'

const Stack = createNativeStackNavigator()

const Transactions = () => {
    return (
        <Stack.Navigator screenOptions={{ header: () => <></> }}>
            <Stack.Screen name="TransactionsList" component={TransactionsList} />
            <Stack.Screen name="NewTransaction" component={NewTransaction} />
        </Stack.Navigator>
    )
}

export default Transactions
