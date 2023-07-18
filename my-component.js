import react from "react";
import {View, Text, StyleSheet} from "react-native";

export default function MyComponent(){
    return(
        <View style={styles.container}>
        <Text style={styles.TextTitle}>Hello My Component</Text>
        <Text style={styles.TextPara}>React Native JavaScript Framework...</Text>

        <Text style={{color:'red',fontWeight:'bold'}}>Contact React Native</Text>
        </View>
    )
}
const styles = StyleSheet.create({
      container: {
        paddingTop:30,
        padding:20,
        backgroundColor:'lightgray'
      },
      textTitle:{
        color:'blue',
        fontSize:20,
        fontWeight:'bold',
        marginTop:15,
      },
      textPara:{
        fontSize:16,

      }
})