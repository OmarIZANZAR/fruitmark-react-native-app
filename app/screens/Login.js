import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'

import { logIn } from '../../state/api'

const Login = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        username: '',
        password: '',
    })

    const submitForm = () => {
        if( data.username.length > 0 && data.password.length > 0 ) {
            dispatch(logIn(data))
        }
    }

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <StatusBar style="auto" />

            <Text style={styles.title}>Admin</Text>

            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={ text => setData({ ...data, username: text })}
                    value={data.username}
                    placeholder="Username"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={ text => setData({ ...data, password: text })}
                    value={data.password}
                    placeholder="Password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                />

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.5}

                    onPress={submitForm}
                >
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 40,
        fontWeight: '700',
        marginBottom: 30,
    },

    input: {
        height: 60,
        width: 300,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        borderRadius: 7,
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
        backgroundColor: 'tomato',
    },

    buttonText: {
        fontWeight: '700',
        fontSize: 20,
    }
})

export default Login
