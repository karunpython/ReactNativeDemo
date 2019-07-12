 import React from 'react'
 import {StyleSheet,View,Text} from 'react-native'
 import {Ionicons} from '@expo/vector-icons'
 import {createDrawerNavigator,createAppContainer} from 'react-navigation'
 import Search from './Search'
 import Login from './Login'
 import Home from './Home'
 import Profile from './Profile'
 import MyHeader from './MyHeader'
 import Tab from './tab/Tab'



class Navi extends React.Component{

  static navigationOptions = {
    drawerLabel: 'Home',
  }

    render(){
     return (
        <View style={styles.container}>
           <MyHeader name="Home"/>
        </View>
     )
    }
 }

 const MyDrawer = createDrawerNavigator({
  home:Tab,
  saerch:Search,
  login:Login,
  profile:Profile,
  tab:Tab,
 

})

export default createAppContainer(MyDrawer)

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

  });
  