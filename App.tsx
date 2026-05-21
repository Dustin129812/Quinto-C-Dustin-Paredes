import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CalculatorButton } from './components/CalculatorButton';
import { useCalculator } from './hooks/useCalculator';

export default function App() {
  const { number,
    buildNumber,
    prevNumber, suma, resta, division, multi, simbol, calculateResult, clean
  } = useCalculator();
  return (
    <View style={styles.container}>
      <Text>{number}</Text>
      <Text>------------------</Text>
      <Text>{prevNumber} {simbol} {number}</Text>
      <Text>------------------</Text>
      <Text>{prevNumber}</Text>
      <View style={styles.content}>
        <CalculatorButton lable='1' onPress={() => { buildNumber("1") }}></CalculatorButton>
        <CalculatorButton lable='2' onPress={() => { buildNumber("2") }}></CalculatorButton>
        <CalculatorButton lable='3' onPress={() => { buildNumber("3") }}></CalculatorButton>
        <CalculatorButton lable='-' onPress={() => { resta() }}></CalculatorButton>

      </View>
      <View style={styles.content}>
        <CalculatorButton lable='4' onPress={() => { buildNumber("4") }}></CalculatorButton>
        <CalculatorButton lable='5' onPress={() => { buildNumber("5") }}></CalculatorButton>
        <CalculatorButton lable='6' onPress={() => { buildNumber("6") }}></CalculatorButton>
        <CalculatorButton lable='+' onPress={() => { suma() }}></CalculatorButton>

      </View>
      <View style={styles.content}>
        <CalculatorButton lable='7' onPress={() => { buildNumber("7") }}></CalculatorButton>
        <CalculatorButton lable='8' onPress={() => { buildNumber("8") }}></CalculatorButton>
        <CalculatorButton lable='9' onPress={() => { buildNumber("9") }}></CalculatorButton>
        <CalculatorButton lable='*' onPress={() => { multi() }}></CalculatorButton>
      </View>
      <View style={styles.content}>
        <CalculatorButton lable='0' onPress={() => { buildNumber("0") }}></CalculatorButton>
        <CalculatorButton lable='.' onPress={() => { buildNumber(".") }}></CalculatorButton>
        <CalculatorButton lable='=' onPress={() => { calculateResult() }}></CalculatorButton>
        <CalculatorButton lable='/' onPress={() => { division() }}></CalculatorButton>
        <StatusBar style="auto" />
      </View>
      <View style={styles.content}>
        <CalculatorButton lable='del' onPress={() => { clean() }}></CalculatorButton>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  }
});
