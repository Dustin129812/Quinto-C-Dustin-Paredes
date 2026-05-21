import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
interface Props{
    lable:string,
    onPress:()=>void
}

export const CalculatorButton = ({lable,onPress}:Props)=> {
  return (
    <Pressable onPress={onPress} style={styles.content}>
        <Text>{lable}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
content:{
  flex:1,
  padding:20,
  alignItems:"baseline",
  backgroundColor:'#E6D693',
  borderRadius:'40%',
}
})
