import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import FruitCard from './FruitCard'

const StoreCard = ({store}) => {
    const fruitsQnty = store.stock.map( e => e.quantity )
    const totalStock = fruitsQnty.reduce( (pv,cv) => pv + cv )

    return (
        <View style={styles.container}>
            <View style={styles.main}>

                <View style={styles.head}>
                    <Text style={styles.headTitle}>{store.name}</Text>
                </View>

                <View style={styles.body}>
                    { store.stock.map(( element, i ) => (
                        <FruitCard element={element} key={i} />
                    ))}
                </View>

                <View style={styles.foot}>
                    <Text style={styles.footText} >Total:</Text>
                    <Text style={styles.footText} >{totalStock} elements</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 345,
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
        justifyContent: 'flex-start',
        borderRadius: 7,
        borderColor: 'tomato',
        borderWidth: 1,
    },

    head: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.2)',
    },

    headTitle: {
        fontSize: 30,
        fontWeight: "700",
    },

    body: {
        padding: 10,
    },

    foot: {
        backgroundColor: 'tomato',
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomRightRadius: 7,
        borderBottomLeftRadius: 7,
    },

    footText: {
        fontSize: 20,
        fontWeight: '700',
    },
})

export default StoreCard
