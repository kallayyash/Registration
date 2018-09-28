import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'

    },
    textColor: {
        color: 'rgb(15,113,184)',
        fontSize : 8
    },
    textDesign: {

        width: 310,
        // borderColor: 'gray',
        // margin: 1,
        // borderWidth: 1,
        padding: 8,
        // borderRadius: 30,
        color: 'rgb(51,51,51)',
        paddingHorizontal: 0,  //textinput inside leave space 
        fontSize: 8.93,
    },
    telephoneNo : {
        flexDirection:'row',
        padding: 8,
        color: 'rgb(51,51,51)',
        paddingHorizontal: 0,  //textinput inside leave space 
        fontSize: 8.93,
       
       
    },
    telephoneNo1 :{
        borderBottomColor: 'rgb(151,151,151)',
        borderRightWidth: 1,
        marginTop:10,
        height:9.7
    },
    button: {
        width: 310,
        height:24.93,
        backgroundColor: 'rgb(15,113,184)',
        borderRadius: 6.2,
        marginVertical: 10, //for spacing b/n pass and button 
        // paddingVertical: 13  //button size
    },
    buttonText: {
        fontSize: 16,
        width:310,
        height:24.93,
        // fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    logoText: {
        marginVertical: 15,
        fontSize: 10,
        color: 'black',


    },
    signUp: {

        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',


    },
    signUpText: {
        fontSize: 10,
        color: '#96c41c',

    },
})
export default styles;
