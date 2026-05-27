import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
interface Props {
  label: string,
  onPress: () => void,
  second?: boolean
}

export const CalculatorButton = ({ label, onPress, second }: Props) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => ({
      ...styles.content,
      backgroundColor: second ? '#000000' : '#F1A739',
      opacity: pressed ? 0.8 : 1,
    })}>
      <Text style={second ? styles.textb : styles.text}>{label}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  content: {
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginLeft: 5,
  },
  text: {
    color: '#000000',
    fontSize: 25
  },
  textb: {
    color: '#FE0000'
  },


})
