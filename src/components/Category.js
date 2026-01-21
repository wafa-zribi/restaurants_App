import { View,Text, StyleSheet, Image, Botton, TouchableOpacity } from "react-native"
import { elevation } from "../common/styles";


export default function Category(props){
    return(
        <TouchableOpacity onPress={props.handlePress}>
        <View style={[styles.container, styles.elevation,
        props.index ===0 ? {marginLeft:15} : {marginLeft:30},
        props.active ? {backgroundColor:'rgb(241,186,87)'} : {backgroundColor:'#F5F5F5'}]}>

            <View style={styles.imageContainer}>
                <Image source={props.imageUrl} style={styles.image}/>
            </View>
            <Text style={styles.header}>{props.name}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container:{
        width:70,
        height: 100,
        borderRadius: 50,
        marginVertical: 15,
        backgroundColor: '#F5F5F5',
        justifyContent:'center',
        alignItems:'center',
    },
    elevation,
    image:{
        width:50,
        height:50,
    },
    imageContainer:{
        width:50,
        height:50,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        marginBottom:5,
    },
    header:{
        fontWeight:'bold',
    }

})