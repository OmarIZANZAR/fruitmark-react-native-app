import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import FruitCard from './FruitCard'

const TransactionCard = ({ transaction }) => {

    const time = new Date(transaction.createdAt)
    const createdAt = `${time.getDate()}/${time.getMonth()}/${time.getFullYear()} at ${time.getHours()}:${time.getMinutes()}`

    return (
        <View style={styles.container}>
            <View style={styles.main}>

                <View style={styles.from}>
                    <Text style={styles.fromStoreName}>{transaction.from}</Text>

                    <Text>{createdAt}</Text>
                </View>

                <View style={styles.body}>
                    <View style={styles.arrowContainer}>
                        <View style={styles.arrow}></View>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" style={styles.icon} />
                    </View>
                    <View style={styles.content}>
                        {transaction.content.map(( element, i ) => (
                            <FruitCard element={element} key={i} />
                        ))}
                    </View>
                </View>

                <View style={styles.to}>
                    <Text style={styles.toStoreName}>{transaction.to}</Text>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 280,
        margin: 10,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 3,
    },

    main: {
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        borderRadius: 7,
    },

    from: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.2)',
    },

    fromStoreName: {
        color: '#ff304f',
        fontSize: 16,
        fontWeight: '700',
    },

    to: {
        width: '100%',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.2)',
    },

    toStoreName: {
        color: '#17b978',
        fontWeight: '700',
    },

    body: {
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        minHeight: 40,
    },

    arrowContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginHorizontal: 15,
        position: 'relative',
    },

    arrow: {
        width: 2,
        position: 'absolute',
        top: 0,
        height: '100%',
        backgroundColor: 'black',
    },

    icon: {
        position: 'absolute',
        bottom: -10,
    },

    content: {
        flex: 1,
    },
})

export default TransactionCard
