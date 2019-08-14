import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Root } from "native-base";

import Login from '../components/screens/Login/Login';
import Register from '../components/screens/Register/Register';
import EditProfile from '../components/screens/EditProfile/EditProfile';


class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        screenName:this.props.screen     
      }
    }
 
    render() {
      return(
        <Root>
        <Stack/>
        </Root>
      )
    }
  }
//screen added in stack navigator
const Stack = createStackNavigator({

    Login: {
      screen: Login,
      title: Login,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: Register,
      title: Register,
      navigationOptions: {
        header: null
      }
    },
    EditProfile:{
      screen:EditProfile,
      title:EditProfile,
      drawerLockMode: "locked-closed",
      navigationOptions:{
        header:null
      }
    },
  }, {initialRouteName: 'Login'});
  
  export default Main;