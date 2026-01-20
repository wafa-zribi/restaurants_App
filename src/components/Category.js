import { View,Text, StyleSheet, Image } from "react-native"
import { elevation } from "../common/styles"

export default function Category(props){
    return(
        <View style={[styles.container, styles.elevation]}>
            <View style={styles.imageContainer}>
                <Image source={props.imageUrl} style={styles.image}/>
            </View>
            <Text style={styles.header}>{props.name}</Text>
        </View>
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
        marginHorizontal:10,
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