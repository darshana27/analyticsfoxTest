import React, { Component } from 'react';
import { KeyboardAvoidingView, ImageBackground, Text, TextInput, View, Button, Alert,AsyncStorage,Dimensions } from 'react-native';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            uname: '',
            password: ''
        }
    }



    onPress = () => {
        if(this.state.uname===null || this.state.uname==="" && this.state.pwd===null || this.state.pwd===""){
            alert("Email and password cannot be empty")
        }
        
        const registered_uname = AsyncStorage.getItem('uname')
        const registered_pwd = AsyncStorage.getItem('password')

        if(this.state.uname === registered_uname && this.state.password === registered_pwd){
            Alert.alert("Login successful!")
            this.props.navigation.navigate('EditProfile')
        } else {
            Alert.alert("Invalid username or password. Please try again.")
            this.state.uname = ''
            this.state.password = ''
        }
    }

    render() {
        return (
            <View>
                <TextInput 
                    placeholder="Username" 
                    onChangeText={(uname) => this.setState({uname})}
                />

                <TextInput 
                    placeholder="Password" 
                    onChangeText={(password) => this.setState({password})}
                />

                <Button
                    title = "LOGIN"
                    onPress = {this.onPress}
                />
                <Text>Not a registered user?</Text>
                <Button title="Register Now" onPress= {() => this.props.navigation.navigate('Register')}/>
            </View>
        )
    }
}