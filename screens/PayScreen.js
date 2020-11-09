import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';

import db from '../config';
import firebase from 'firebase';

export default class MainScreen extends Component{

    render(){
        return(
            <View>
                <TouchableOpacity style={styles.Button1}>
             <Text>Button1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button1}>
             <Text>Button2</Text>
                </TouchableOpacity>          
                <TouchableOpacity style={styles.Button1}>
             <Text>Button3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button1}>
             <Text>Button4</Text>
                </TouchableOpacity>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    Button1:{
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:30
      },
      registerButtonText:{
        color:'#ff5722',
        fontSize:15,
        fontWeight:'bold'
      },

})