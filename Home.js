import React, { Component } from 'react'
import { TextInput, Appbar, Button } from 'react-native-paper';
import { View } from 'react-native'

class Home extends Component {
    state = {
        first_name: '',
        last_name: '',
        email:'',
        mobile:''
    }
    

    submitData(){

    }

    
    
    render() {
        return (
            <View>
            
                <TextInput label='First Name' value={this.state.first_name} onChangeText={first_name => this.setState({ first_name: first_name })} />
                <TextInput label='Last Name' value={this.state.last_name} onChangeText={last_name => this.setState({ last_name: last_name })} />
                <TextInput label='Email' value={this.state.email} onChangeText={email => this.setState({ email: email })} />
                <TextInput label='Enter Mobile' value={this.state.mobile} onChangeText={mobile => this.setState({ mobile: mobile })} />
                 <Button icon="mood" mode="contained" onPress={()=>this.submitData} style={{margin:10}}>Submit</Button> 
           
            </View>
        )
    }
}

export default Home
