 import React from 'react'
 import {Appbar} from 'react-native-paper'
 import {StyleSheet} from 'react-native'
 import {Ionicons} from '@expo/vector-icons'

 export default MyHeader = (props) =>{
     return (
         <Appbar.Header style={styles.appHeader}>
             <Ionicons name="md-menu" size={34} color="#F86262" style={styles.headerIcon}/>
             <Appbar.Content title={props.name}/>
         </Appbar.Header>
     )
 }

 const styles = StyleSheet.create({
    appHeader: {
      backgroundColor: '#f9f9f9',
    },
    headerIcon: {
      marginLeft:10
    },
  });
  