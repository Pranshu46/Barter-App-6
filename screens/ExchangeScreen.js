import React, { Component } from 'react';
import { View, StyleShett,Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert, ToastAndroid } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader'

export default class Exchange extends Component{
    constructor(){
        super()
        this.state = {
            userName : firebase.auth().currentUser.email,
            itemName : "",
            description : ""
        }
    }

    addItem=(itemName, description)=>{
        var userName = this.state.userName
        db.collection("exchange_requests").add({
            "username" : userName,
            "item_name" : itemName,
            "description" : description
        })
        this.setState({
            itemName : '',
            description : '',
        })
        this.setState({
            itemName: '',
            description: '',
        })

        return Alert.alert(
            'Item ready to exchange',
            '',
            [
                {text: 'OK', onPress: () => {
                    this.props.navigation.navigate('HomeScreen')
                }}
            ]
        );
    }

    render(){
        return(
            <View style={{flex:1}}>
                <MyHeader title="Add Item"/>
                <KeyboardAvoidingView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <TextInput
                    style={style.formTextInput}
                    placeholder={"Item Name"}
                    maxLength={8}
                    onChangeText={(text)=>{
                        this.setState({
                            itemName: text
                        })
                    }}
                    value={this.state.itemName}
                    />
                    <TextInput
                    multiline
                    numberOflines={4}
                    style={StyleShett.form.TextInput,{height:100}}
                    placeholder={"Description"}
                    onChangeText={(text)=>{
                        this.setState({
                            description: text
                        })
                    }}
                    value={this.state.description}
                    />
                    <TouchableOpacity>
                        style={Styles.button,{marginTop:10}}
                        onPress = {()=>{
                            this.addItem(this.state.itemName, this.state.description)
                        }}
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#4fffdf',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
    },
    button:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'#45f542',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    },

})