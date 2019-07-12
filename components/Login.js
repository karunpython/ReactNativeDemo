import React, { Component } from 'react'
import {
    View, TouchableOpacity, Text, Image,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Dimensions,
    TextInput
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import MyHeader from './MyHeader'



const { width: WIDTH } = Dimensions.get('window')

class Login extends Component {

    static navigationOptions = {
        drawerLabel: 'Login',
      }

      state={
          showPass:true,
          press:false
      }

      showPress = ()=>{
          if(this.state.press==false){
              this.setState({showPass:false,press:true})
          }else{
            this.setState({showPass:true,press:false})
          }
      }

    render() {
        return (
            <View>
              <MyHeader name="Login"/>
               <ImageBackground  source={require('../images/ic_bg.png')} style={styles.backbroundContainer}>
                <ScrollView>
                    <View style={styles.logoContainer}>
                        <Image source={require('../images/logo.png')} style={styles.logo} resizeMode="contain" />
                        <Text style={styles.logoText}>Winds Captain App</Text>
                    </View>

                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder={'Username'}
                            underlineColorAndroid='transparent' />
                        <Icon name={'ios-person'} size={30} color="#4F8EF7" style={styles.inputIcon} />
                    </View>

                    <View>
                        
                        <TextInput
                            style={styles.input}
                            placeholder={'Password'}
                            secureTextEntry={this.state.showPass}
                            underlineColorAndroid='transparent' />
                        <Icon name={'ios-lock'} size={30} color="#4F8EF7" style={styles.inputIcon} />
                        <TouchableOpacity style={styles.btnEye}  onPress={this.showPress}>
                            <Icon name={this.state.press==false ? 'ios-eye':'ios-eye-off'} size={30} color="#4F8EF7"/>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.btnLogin}>
                        <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>

                </ScrollView>
              </ImageBackground>
            </View>
        )
    }
}

export default Login

const styles = StyleSheet.create({

    backbroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginTop:80,
        width: 80,
        height: 80,
    },
    logoContainer: {
        height:200,
        marginBottom:80,
        alignItems: 'center'
    },
    logoText: {
        marginTop:10,
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        opacity: 0.9
        
    },
    input: {
        backgroundColor:'red',
        marginTop: 20,
        width: WIDTH - 55,
        height: 45,
        fontSize: 16,
        paddingLeft: 30,
        color: 'white',
        marginHorizontal: 25
    },
    inputIcon: {
        position: 'absolute',
        marginTop: 15,
        top: 15,
        left: 37
    }, 
    btnEye: {
        position: 'absolute',
        marginTop: 15,
        top: 15,
        right: 37
    },
    btnLogin: {
       width: WIDTH - 55,
       height:45,
       borderRadius:25,
       marginLeft:20,
       backgroundColor:'blue',
       justifyContent:'center',
       marginTop:20
    },
    text: {
        color:'white',
        fontSize:16,
        textAlign:'center'
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
    },
    touchableOpacity: {
        borderWidth: 1,
        borderColor: '#666',
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        width: '90%',


    },
})