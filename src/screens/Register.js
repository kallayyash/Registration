import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
    Text, TextInput,
    View, Image, TouchableOpacity, TouchableWithoutFeedback, StatusBar, CheckBox, ScrollView,StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Checkbox from 'react-native-custom-checkbox';
import styles from './../styles/style';



class Register extends Component {
   
    

    render() {
        return (
            <View style={styles.container}>

                <StatusBar
                    backgroundColor="#222"
                    barStyle="light-content"
                />





                <ScrollView>

                    <View>

                        <View>

                            <Text>
                                <Text style={styles.textColor}>First name</Text>
                                <Text style={{ color: '#0f71b8' }}> * </Text>
                            </Text>

                            <TextInput placeholder="Enter first name" style={styles.textDesign} maxLength={30}
                                placeholderTextColor='gray' underlineColorAndroid="rgb(204,204,204)" />
                        </View>



                        <View style={{marginTop:16}}>
                            <Text>
                                <Text style={styles.textColor}>Last name </Text>
                                <Text style={{ color: '#0f71b8' }}> * </Text>
                            </Text>

                            <TextInput placeholder="Enter last name" style={styles.textDesign} maxLength={30}
                                placeholderTextColor='gray' underlineColorAndroid="rgb(204,204,204)" />
                        </View>

                       <View style={{marginTop:16}}>
                            <Text>
                                <Text style={styles.textColor}>Date of birth</Text>
                                <Text style={{ color: '#0f71b8' }}> * </Text>
                            </Text>
                            <TextInput placeholder="Date of birth" style={styles.textDesign} 
                                placeholderTextColor='gray'  underlineColorAndroid="rgb(204,204,204)" />
                        </View>

                       <View style={{marginTop:16}}>
                            <Text>
                                <Text style={styles.textColor}>Mobile number</Text>
                                <Text style={{ color: '#0f71b8' }}> * </Text>
                            </Text>
                              
                               <View style={{flexDirection:'row'}}>
                               <TextInput placeholder="+31 "  maxLength={3} style={styles.telephoneNo}
                                placeholderTextColor='gray'  underlineColorAndroid="rgb(204,204,204)" />
                                   
                                   <Text style={styles.telephoneNo1}></Text>

                               <TextInput placeholder=" Enter mobile number" style={[styles.textDesign,{paddingHorizontal:6.26}]} maxLength={10}
                                placeholderTextColor='gray'  underlineColorAndroid="rgb(204,204,204)" />
                               </View>

                          </View>


                       <View style={{marginTop:16}}>
                            <Text>
                                <Text style={styles.textColor}>Email</Text>
                                <Text style={{ color: '#0f71b8' }}> * </Text>
                            </Text>
                            <TextInput placeholder="Enter email address " style={styles.textDesign}
                                keyboardType='email-address' placeholderTextColor='gray'  underlineColorAndroid="rgb(204,204,204)" />
                        </View>



                       <View style={{marginTop:16}}>
                            <Text>
                                <Text style={styles.textColor}>Password</Text>
                                <Text style={{ color: '#0f71b8' }}> * </Text>
                            </Text>

                            <View style={{ flexDirection: 'row' }}>
                                <TextInput placeholder="Enter password" style={styles.textDesign}
                                    placeholderTextColor='gray' secureTextEntry={true}  underlineColorAndroid="rgb(204,204,204)"/>
                                <Image source={require('./../assets/images/signup/Showpassword.png')} style= {{height :6,width:6}} />
                            </View>
                        </View>

                       <View style={{marginTop:16}}>
                            <Text>
                                <Text style={styles.textColor}>Confirm password</Text>
                                <Text style={{ color: '#0f71b8' }}> * </Text>
                            </Text>

                            <View style={{ flexDirection: 'row' }}>
                                <TextInput placeholder="Re-enter password" style={styles.textDesign}
                                    placeholderTextColor='gray' secureTextEntry={true}  underlineColorAndroid="rgb(204,204,204)" />
                                <Image source={require('./../assets/images/signup/Showpassword.png')} />
                            </View>
                        </View>

                        <View style={styles.checkbox}>
                            <View style={{ flexDirection: 'row' }}>
                                <CheckBox />
                                <View style={{ marginTop: 6, flexDirection: 'row' }}>
                                    <Text style = {{ fontSize : 8}}>  Subscribe the</Text>
                                    <Text style={{ color: '#0f71b8', fontSize : 8 }}> Newsletter</Text>
                                </View>


                            </View>



                            <View style={{ flexDirection: 'row' }}>
                            <CheckBox />

                                <View style={{ marginTop: 5, flexDirection: 'row'}}>
                                    <Text style = {{ fontSize : 8}}> I agree </Text>
                                    <Text style={{ color: '#0f71b8',fontSize : 8 }}>Terms and services </Text>
                                    <Text style = {{ fontSize : 8}}>> and  </Text>

                                    <Text style={{ color: '#0f71b8',fontSize : 8 }} >Privacy policy</Text>
                                </View>
                            </View>



                        </View>



                    </View>


                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText} onPress={() => {
                                alert("Register Successfully");
                                Actions.login()
                            }}>Register</Text>
                        </TouchableOpacity>

                    </View>



                </ScrollView>
            </View>


        )
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch = ({});

export default connect(mapStateToProps, mapDispatchToProps)(Register);


