import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import loadingIndicator from '../../assets/icon.png'

import { logOut } from '../../state/api'

const Admin = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    return (
        <View style={styles.container}>
            { user ? (
                <>
                    <View>
                        <Text style={styles.screenTitle}>Profile</Text>

                        <Image 
                            source={{ uri: user.image }}
                            loadingIndicatorSource={loadingIndicator}
                            style={styles.avatar}
                        />

            
                        <Text style={styles.userName}>{user.username}</Text>
                    </View>

                    <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.5}

                            onPress={() => dispatch(logOut())}
                        >
                            <Text style={styles.buttonText}>Log out</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <Text>No user available</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    screenTitle: {
        fontSize: 30,
        fontWeight: '700',
        marginVertical: 20,
        textAlign: 'center',
    },

    avatar: {
        width: 120,
        height: 120,
        borderRadius: 100,
        marginBottom: 20,
        backgroundColor: '#ccc2',
    },

    userName: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 20,
        textAlign: 'center',
    },

    button: {
        height: 60,
        width: 300,
        marginVertical: 20,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        borderRadius: 7,
        backgroundColor: '#ff5959',
    },

    buttonText: {
        fontWeight: '700',
        fontSize: 20,
    }
})

export default Admin
