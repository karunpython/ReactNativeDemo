import React from 'react'
import {StyleSheet,View,Text} from 'react-native'

function Status() {
    return (
        <View style={styles.container}>
           <Text>Status...</Text>
           </View>
    )
}

export default Status

const styles = StyleSheet.create({
    container: {
       flex:1,
       justifyContent:"center",
       alignItems:"center",
       marginTop:120 
     }
   });
   