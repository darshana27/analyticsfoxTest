import React, { Component } from 'react';
import { KeyboardAvoidingView, ImageBackground, Text, TextInput, View, Button, Alert,AsyncStorage,Dimensions } from 'react-native';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            fname:'',
            lname:'',
            email:'',
            uname:'',
            password:''
        }
    }

    onPress = () => {
        if(this.state.uname===null || this.state.uname==="" && this.state.pwd===null || this.state.pwd===""){
            alert("Email and password cannot be empty")
        }
        AsyncStorage.setItem('fname',this.state.fname)
        AsyncStorage.setItem('lname',this.state.lname)
        AsyncStorage.setItem('email',this.state.email)
        AsyncStorage.setItem('uname',this.state.uname)
        AsyncStorage.setItem('password',this.state.password)
        Alert.alert("Registeration successful");
        this.props.navigation.navigate('Login')

    }

    render() {
        return (
            <View>
                <TextInput 
                    placeholder="First Name" 
                    onChangeText={(uname) => this.setState({fname})}
                />

                <TextInput 
                    placeholder="Last Name" 
                    onChangeText={(password) => this.setState({lname})}
                />
                <TextInput 
                    placeholder="Email" 
                    onChangeText={(uname) => this.setState({email})}
                />
                <TextInput 
                    placeholder="Username" 
                    onChangeText={(uname) => this.setState({uname})}
                />
                        <TextInput 
                    placeholder="Password" 
                    onChangeText={(uname) => this.setState({password})}
                />
                <Button
                    title = "Resigter"
                    onPress = {this.onPress}
                />
                <Text>Not a registered user?</Text>
                <Button title="Register Now" onPress= {() => this.props.navigation.navigate('Register')}/>
            </View>
        )
    }
}