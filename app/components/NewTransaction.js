import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'

import { Picker } from '@react-native-picker/picker'
import InputSpinner from 'react-native-input-spinner'

import { addTransaction, getStores } from '../../state/api'

const NewTransaction = ({ navigation }) => {
    const dispatch = useDispatch()
    const stores = useSelector(state => state.stores)

    const [sourceStore, setSourceStore] = useState("")
    const [destinationsList, setDestinationsList] = useState([])
    const [destinationStore, setDestinationStore] = useState("")
    const [sourceStock, setSourceStock] = useState(null)

    const [content, setContent] = useState({
        banana: 0,
        apple: 0,
        orange: 0,
        strawberry: 0,
        cherry: 0,
    })

    useEffect(() => {
        if(stores.length > 0 && sourceStore.length > 0 ){
            const stock = stores.find( store => store.name === sourceStore ).stock
            setSourceStock(stock)
            
            const destinations = stores
                .filter( store => store.name !== sourceStore )
                .map( store => store.name )

            setDestinationsList(destinations)
        }
    }, [sourceStore])

    const submitData = () => {
        if(sourceStore.length > 0 && destinationStore.length > 0){
            if(content.banana || content.apple || content.orange || content.strawberry || content.cherry ){
                let newTransaction = {
                    from: sourceStore,
                    to: destinationStore,
                    ...content,
                }

                dispatch(addTransaction(newTransaction))
                dispatch(getStores())
                navigation.navigate('TransactionsList')
            }
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <Text style={styles.title}>Add New Transaction</Text>

            <View style={styles.form}>
                <View style={styles.roote}>
                    <View style={styles.rooteSide}>
                        <Text style={styles.label}>From</Text>
                        <View style={styles.input}>
                            <Picker
                                selectedValue={sourceStore}
                                onValueChange={ value =>  setSourceStore( value )}
                            >
                                <Picker.Item 
                                    label="Source store" 
                                    value="" 
                                    enabled={false} 
                                    style={styles.pickerLabel}
                                />
                                <Picker.Item label="Marsela" value="Marsela" />
                                <Picker.Item label="Paris" value="Paris" />
                                <Picker.Item label="Dijon" value="Dijon" />
                                <Picker.Item label="Niza" value="Niza" />
                                <Picker.Item label="Lila" value="Lila" />
                            </Picker>
                        </View>
                    </View>

                    <View style={styles.rooteSide}>
                        <Text style={styles.label}>To</Text>
                        <View style={styles.input}>
                            <Picker
                                selectedValue={destinationStore}
                                onValueChange={ value =>  setDestinationStore( value )}
                            >
                                <Picker.Item 
                                    label="Destination store" 
                                    value="" 
                                    enabled={false} 
                                    style={styles.pickerLabel}
                                    key={'initial1'}
                                />
                                { destinationsList && destinationsList.map( destination => (
                                    <Picker.Item 
                                        label={destination} 
                                        value={destination} 
                                        key={destination._id} 
                                    />
                                ))}
                            </Picker>
                        </View>
                    </View>
                </View>
                
                { sourceStock && (
                    <View>
                        <Text style={styles.label}>Content</Text>
                        { sourceStock.map( (element, i) => (
                            <View style={styles.inputGroup} key={i}>
                                <Text style={styles.contentLabel}>{element.fruit}</Text>
                                <InputSpinner
                                    initialValue={0}
                                    min={0}
                                    max={element.quantity}
                                    step={1}
                                    precision={0}
                                    value={ content[element.fruit] }
                                    onChange={ num => setContent({ ...content, [element.fruit]: num })}
                                    skin="square"
                                    showBorder={true}
                                    shadow={false}
                                    height={40}
                                    width={160}
                                    colorMax={"#f04048"}
                                    colorMin={"#40c5f4"}
                                    buttonFontSize={30}
                                    activeOpacity={0.5}
                                    speed={1}
                                /> 
                            </View>
                        ))}
                    </View>
                )}
            </View>

            <View style={styles.controlArea}>
                <TouchableOpacity
                    style={styles.cancelButton}
                    activeOpacity={0.5}

                    onPress={() => navigation.navigate('TransactionsList')}
                >
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.confirmButton}
                    activeOpacity={0.5}

                    onPress={submitData}
                >
                    <Text style={styles.buttonText}>Confirm</Text>
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
        justifyContent: 'space-between',
    },

    title: {
        fontSize: 25,
        fontWeight: '700',
        marginVertical: 20,
    },

    form: {
        flex: 1,
        justifyContent: 'flex-start',
    },

    roote: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 300,
        marginBottom: 10,
    },

    rooteSide: {
        width: '49%',
        height: '100%',
    },

    label: {
        fontSize: 16,
        fontWeight: '700',
    },

    input: {
        height: 60,
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        borderRadius: 7,
    },

    pickerLabel: {
        color: "grey",
    },

    contentLabel: {
        marginLeft: 10,
    },

    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    controlArea: {
        width: 300,
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    cancelButton: {
        height: 60,
        marginRight: 20,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        borderRadius: 7,
        backgroundColor: '#ff5959',
    },

    confirmButton: {
        height: 60,
        flex: 1,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        borderRadius: 7,
        backgroundColor: '#2cb978',
    },

    buttonText: {
        fontWeight: '700',
        fontSize: 20,
    }
})

export default NewTransaction
