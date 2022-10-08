import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

import StoreCard from '../components/StoreCard'

import { getStores } from '../../state/api'

const Home = () => {
    const dispatch = useDispatch()
    const stores = useSelector(state => state.stores )

    useEffect(() => {
        dispatch(getStores())
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            { stores.length > 0 ? (
                <ScrollView style={styles.scrollScreen}>
                    { stores.map( store => <StoreCard store={store} key={store._id} /> )}
                </ScrollView>
            ) : (
                <Text>No stores available</Text>
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
    },

    scrollScreen: {
        paddingHorizontal: 10,
    }
})

export default Home
