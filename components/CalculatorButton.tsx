import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
interface Props {
  lable: string,
  onPress: () => void,
  text?: boolean
}

export const CalculatorButton = ({ lable, onPress, text }: Props) => {
  return (
    <Pressable onPress={onPress} style={text ? styles.constentb : styles.content}>
      <Text style={text ? styles.textb : styles.text}>{lable}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  content: {
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1A739',
    borderRadius: 15,
    marginLeft: 5,
  },
  text: {
    color: '#000000',
    fontSize:25
  },
  constentb: {
    width: 60,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 15,
    marginLeft: 5,
  },
  textb: {
    color: '#FE0000'
  }

})
