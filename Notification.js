import React, { Component } from 'react'
import { FlatList, View, TouchableOpacity, Text, Image, Alert, StyleSheet } from 'react-native'
import { ActivityIndicator } from 'react-native-paper';

class Notification extends Component {

    state = {
        items: [],
        loading: true,
        page: 1
    }

    componentDidMount() {
        this.getData()
    }

    getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10&_page='+ this.state.page);
        const data = await response.json()
        this.setState({
            items: this.state.items.concat(data),
            loading: false,
            page:this.state.page + 1
        })
    }

    //handling onPress action  
    getListViewItem = (item) => {
        Alert.alert(item.title);
    }

    myFooter = () =>{
        return(
        <View style={{alignItems:'center', margin:5}}>
            <TouchableOpacity style={styles.touchableOpacity}
            onPress={this.getData}
            >
            <Text> More Result</Text>
            </TouchableOpacity>
        </View>)
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.loading ?
                    (
                        <ActivityIndicator style={styles.activityIndicator}
                            color='#bc2b78'
                            size="large" />
                    ) :
                    (

                        <FlatList
                            data={this.state.items}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) =>

                                <TouchableOpacity style={{ padding: 5, marginTop: 10 }}
                                    onPress={this.getListViewItem.bind(this, item)}>
                                    <Text> {item.id}</Text>
                                    <Text> {item.title}</Text>
                                    <Image source={{ uri: item.url }}
                                        style={{ width: '100%', height: 200 }}

                                    />
                                </TouchableOpacity>
                            }
                            ListFooterComponent={this.myFooter}
                        />)}
            </View >
        )
    }
}

export default Notification

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
        padding:10,
        borderRadius:10,
        alignItems:"center",
        width:'90%',
        
    },
})