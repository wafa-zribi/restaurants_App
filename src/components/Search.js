import {View, TextInput, StyleSheet} from 'react-native';  
import {useState} from 'react';
import {FontAwesome} from "@expo/vector-icons";
import { elevation} from '../common/styles';

export default function Search({setTerm}){
    const [input ,setInput]=useState("");
    const handleEndediting=()=>{
        if(!input) return;
        setTerm(input);
        setInput("");
    }
    return(
        <View style={[styles.container, styles.elevation]}>
            <FontAwesome name="search" size={24} color="black" />
            <TextInput style={styles.input}
            placeholder="Restaurants, food"
            value={input}
            onChangeText={(text)=>{setInput(text);}}
            onEndEditing={ handleEndediting}
            />

        </View>
    )

}

const styles= StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'#EDEDED',
        marginTop:5,
        marginHorizontal:25,
        padding:15,
        borderRadius:40,
    },
    input:{
        fontSize:18,
        marginLeft:10,

    },
    elevation,
})