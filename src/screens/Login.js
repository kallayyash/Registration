import {connect} from 'react-redux';
import React,{Component} from 'react';
import {View, Text , StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Login extends Component {
    state = {  }
    render() {
        return (
            <View style = {styles.container}>
                <Text onPress = {() => { Actions.register()}}>This is my Login Page</Text>
            </View>
        )
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>({});

export default connect(mapStateToProps,mapDispatchToProps)(Login);


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#33d9b2',
     
    }
})