import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FruitCard = ({ element }) => {
    return (
        <View style={styles.fruitCard}>
            <Text style={styles.name} >{element.fruit}</Text>
            <Text style={styles.quantity} >{element.quantity}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    fruitCard: {
        height: 30,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
    },

    name: {
        fontSize: 16,
        textTransform: 'capitalize',
    },

    quantity: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,.2)',
        borderRadius: 7,
        padding: 5,
        width: 60,
        textAlign: 'center',
        fontWeight: '700',
    },
})

export default FruitCard
