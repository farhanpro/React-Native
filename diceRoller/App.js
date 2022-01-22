import { status } from "express/lib/response";
import React,{useState} from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
} from 'react-native';
import DiceOne from './assets/dice1.png'
import DiceTwo from './assets/dice2.png'
import DiceThree from './assets/dice3.png'
import DiceFour from './assets/dice4.png'
import DiceFive from './assets/dice5.png'
import DiceSix from './assets/dice6.png'

const App =() =>{
  const [uri,setUri] = useState(DiceOne)   /* const [randomcolor,setRandomColor]*/
  const [uri2,setUri2] = useState(DiceOne)

  let Roll = ()=>
  {
    let i = Math.floor((Math.random() * 6) + 1);
    let j = Math.floor((Math.random()*6) +1);
    console.log("i = ",i);
    console.log("j = ",j);
   
  
  if (i == 1 )
   {
     setUri(DiceOne);
   }
   
   else if(i ==2)
   {
     setUri(DiceTwo);
   }
   else if(i == 3)
   {
     setUri(DiceThree);
   }
   
   else if(i == 4)
   {
     setUri(DiceFour);
   }
   
   else if(i == 5)
   {
     setUri(DiceFive);
   }
   
   else if(i==6)
   {
     setUri(DiceSix);
   }
   if (j == 1)
   {
     setUri2(DiceOne);
   }
   else if(j ==2)
   {
     setUri2(DiceTwo);
   }
   else if(j ==3)
   {
     setUri2(DiceThree);
   }
   else if(j ==4)
   {
     setUri2(DiceFour);
   }
   else if(j ==5)
   {
     setUri2(DiceFive);
   }
   else if(j ==6)
   {
     setUri2(DiceSix);
   }
   if(i == 1 && j == 1)
    {
      setUri(DiceOne);
      setUri2(DiceOne)
    }
    else if(i == 2 && j == 2)
    {
      setUri(DiceTwo);
      setUri2(DiceTwo);
    }
    else if(i == 3 && j == 3)
    {
      setUri(DiceThree);
      setUri2(DiceThree);
    }
    else if(i == 4 && j == 4)
    {
      setUri(DiceFour);
      setUri2(DiceFour);
    }
    else if(i == 5 && j == 5)
    {
      setUri(DiceFive);
      setUri2(DiceFive);
    }
    else if(i == 6 && j == 6)
    {
      setUri(DiceSix);
      setUri2(DiceSix);
    }
   
  
  }
  return (
    <>
    <View style={styles.container}>
    <TouchableOpacity  onPress={Roll}>
      <Image style={styles.Image} source={uri}/>
      <Text style={styles.gamePlayButton}>Roll The Dice</Text>
      <Image style={styles.Image2} source={uri2}/>
      </TouchableOpacity>
    </View>
    
    </>
  )
}

export default App;
const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor : "#222831",
    alignItems:"center",
    justifyContent : "center",
  },
  Image :{
    width : 200,
    height : 200,
    margindown : 50,
  },
  Image2 :{
    width : 200,
    height : 200,
    marginTop: 20 ,
  },
  gamePlayButton :{
    fontSize : 20,
    marginTop : 30,
    color : "#F2A365",
    paddingHorizontal : 40,
    paddingVertical : 10,
    borderColor:"#30475E",
    borderRadius : 5,
    borderWidth : 2,
    fontWeight: "bold",
    backgroundColor: "#FFFFFF",

  }
})