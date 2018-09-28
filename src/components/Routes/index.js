import React,{Component} from 'react';
import {
  StyleSheet
} from 'react-native';

import {Router, Scene} from "react-native-router-flux";
import Login from './../../screens/Login';
import Register from './../../screens/Register';

class Route extends Component {
    
    render() {
        return (
            <Router>
               <Scene navigationBarStyle={{borderBottomColor:"#1e2226"}}  titleStyle={{color : "gray"}}>
                  
                   <Scene key="login" component = {Login} title="Main" hideNavBar={true} />
                   <Scene key="register" component = {Register} title="Registration"  initial = {true} 
                    titleStyle={styles.navigationBarTitleStyle}
                   backButtonImage= {require('./../../assets/images/signup/Backchevron.png')} 
                  />

               </Scene>

            </Router>
            
        )
    }
}

export default Route;

const styles = StyleSheet.create({
    navigationBarTitleStyle: {
    
    
     textAlign: 'center',
    //  paddingVertical: 30,
     marginLeft : 80
 }
});