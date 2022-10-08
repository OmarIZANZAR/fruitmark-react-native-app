import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, ScrollView, View, Text } from 'react-native'

import TransactionCard from './TransactionCard'
import AddTransactionButton from './AddTransactionButton'

import { getTransactions } from '../../state/api'

const TransactionsList = ({ navigation }) => {
    const dispatch = useDispatch()
    const transactions = useSelector(state => state.transactions)

    useEffect(() => {
        dispatch(getTransactions())
    }, [])

    return (
        <View style={styles.container}>
            <AddTransactionButton navigation={navigation} />

            { transactions.length > 0 ? (
                <ScrollView style={styles.scrollArea}>
                    { transactions.map(transaction => (
                        <TransactionCard transaction={transaction} key={transaction._id} />
                    ))}
                    <View style={styles.void}></View>
                </ScrollView>
            ) : (
                <Text>No transactions available</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    scrollArea: {
        paddingHorizontal: 10,
    },
    void: {
        height: 70,
    }
})

export default TransactionsList
