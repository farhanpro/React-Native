import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} 
from 'react-native';
const App =() => {
  const [randomcolor,setRandomColor] = useState('rgb(32,0,126)');
  
  const BGRST = () => {
    let color2 = "rgb(0,0,0)";
    setRandomColor(color2);
  }
  
  const changeBG = () => {
    let color = "rgb("+
    Math.floor(Math.random() *256)
      +","+
    Math.floor(Math.random() *256)
      +","+
      Math.floor(Math.random() *256)+
      ")";
  setRandomColor(color);
  };
  return(
    <>
    <StatusBar backgroundColor={randomcolor}/>
    <View style={[styles.container,{backgroundColor:randomcolor}]}> 
    <TouchableOpacity onPress ={changeBG} >
    <Text style={styles.text}>TAP ME</Text>
    </TouchableOpacity>
    </View>

    <View style={[styles.container,{backgroundColor:randomcolor}]}>
    <TouchableOpacity onPress = {BGRST}>
    <Text style={styles.text}>Reset</Text>
    </TouchableOpacity>
    </View>

    </>
  );
};
export default App;
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor :"rgb(32,0,126)",
  },
  text:{
    fontSize:30,
    backgroundColor:"#BB2CD9",
    paddingVertical:10,
    paddingHorizontal:40,
    color:"#FFFFFF",
    borderRadius:15,
    textTransform:"uppercase"
  }

})