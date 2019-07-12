import React from 'react'
import {Appbar} from 'react-native-paper'
import {StyleSheet,View,Text} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {createDrawerNavigator,createAppContainer} from 'react-navigation'
import MyHeader from './MyHeader'



export default class Profile extends React.Component{
  static navigationOptions = {
    drawerLabel: 'Profile',
  }
  
   render(){
    return (
      <View >
           <MyHeader name="Profile"/>
           <View style={styles.container}>
           <Text>Profile...</Text>
           </View>
         
        </View>
    )
   }
}




const styles = StyleSheet.create({
  container: {
     flex:1,
     justifyContent:"center",
     alignItems:"center",
     marginTop:120
     
   },
   headerIcon: {
     marginLeft:10
   },
 });
 