import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const AddTransactionButton = ({ navigation }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('NewTransaction')}
        >
            <View style={styles.main}>
                <Text style={styles.text}>+</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'tomato',
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 10,
        right: 10,
        borderRadius: 7,
        zIndex: 2,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 5,
    },

    main: {
        
        height: '100%',
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 7,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    text: {
        fontSize: 30,
    }
})

export default AddTransactionButton
