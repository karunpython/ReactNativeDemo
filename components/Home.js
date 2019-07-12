 import React from 'react'
 import {Card,Title} from 'react-native-paper'
 import {StyleSheet,ImageBackground,TextInput,View} from 'react-native'
 

 export default class Home extends React.Component{
  static navigationOptions = {
    drawerLabel: 'Home',
  }
  
   render(){
     return (
          <View>
          <MyHeader name="Home"/>
              <ImageBackground resizeMode="stretch" source={require('../images/ic_bg.png')} style={styles.imageBackground}>
                <TextInput style={styles.textInput} placeholder="Search..."/>
              </ImageBackground>

            <View style={styles.viewContainer} >
              
                    <View>
                          <Card style={styles.cardContainer}>
                              <Card.Content>
                                <Title>Mongo</Title>
                              </Card.Content>
                           
                          </Card>

                          <Card  style={styles.cardContainer}>
                              <Card.Content>
                                <Title>Apple</Title>
                              </Card.Content>
                          </Card>

                          <Card  style={styles.cardContainer}>
                              <Card.Content>
                                <Title>Banana</Title>
                              </Card.Content>
                          </Card>
                    </View>
        
                  
                    <View>
                          <Card style={styles.cardContainer}>
                              <Card.Content>
                                <Title>Mongo</Title>
                              </Card.Content>
                           
                          </Card>

                          <Card  style={styles.cardContainer}>
                              <Card.Content>
                                <Title>Apple</Title>
                              </Card.Content>
                          </Card>

                          <Card  style={styles.cardContainer}>
                              <Card.Content>
                                <Title>Banana</Title>
                              </Card.Content>
                          </Card>
                    </View>
        
              

            </View>

          </View>
     )
   }
 }

 const styles = StyleSheet.create({
  imageBackground: {
    width:'100%',
    height:'100%'
  },
  textInput: {
    backgroundColor:'white',
    paddingLeft:20,
    margin:40,
    borderRadius:30,
    height:50
  },
  viewContainer:{
    flex:1,
    flexDirection:'row',
    marginTop:'-45%',
    justifyContent:'space-around'
  },
  cardContainer:{
   marginBottom:10,
   elevation:4
  }



  });
  