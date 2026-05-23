import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CalculatorButton } from './components/CalculatorButton';
import { useCalculator } from './hooks/useCalculator';

export default function App() {
  const {
    number,
    prevNumber,
    simbol,
    buildNumber,
    suma,
    resta,
    division,
    multi,
    calculateResult,
    clean,
    deletNumber
  } = useCalculator();
  return (
    <View style={styles.container}>
      <View style={styles.app}>
        <View style={styles.contentb}>

          <Text style={styles.text}>{number}</Text>
          {simbol && (<Text style={styles.textO}>{prevNumber} {simbol} {number}</Text>)}
          <Text style={styles.textR} numberOfLines={1}>{prevNumber}</Text>
        </View>
        <View style={styles.content}>
          <CalculatorButton lable='del' onPress={() => { clean() }} text={true} ></CalculatorButton>
          <CalculatorButton lable='<=' onPress={() => { deletNumber() }} text={true}></CalculatorButton>
        </View>
        <View style={styles.content}>
          <CalculatorButton lable='1' onPress={() => { buildNumber("1") }}></CalculatorButton>
          <CalculatorButton lable='2' onPress={() => { buildNumber("2") }}></CalculatorButton>
          <CalculatorButton lable='3' onPress={() => { buildNumber("3") }}></CalculatorButton>
          <CalculatorButton lable='+' onPress={() => { suma() }}></CalculatorButton>
        </View>
        <View style={styles.content}>
          <CalculatorButton lable='4' onPress={() => { buildNumber("4") }}></CalculatorButton>
          <CalculatorButton lable='5' onPress={() => { buildNumber("5") }}></CalculatorButton>
          <CalculatorButton lable='6' onPress={() => { buildNumber("6") }}></CalculatorButton>
          <CalculatorButton lable='-' onPress={() => { resta() }}></CalculatorButton>
        </View>
        <View style={styles.content}>
          <CalculatorButton lable='7' onPress={() => { buildNumber("7") }}></CalculatorButton>
          <CalculatorButton lable='8' onPress={() => { buildNumber("8") }}></CalculatorButton>
          <CalculatorButton lable='9' onPress={() => { buildNumber("9") }}></CalculatorButton>
          <CalculatorButton lable='X' onPress={() => { multi() }}></CalculatorButton>
        </View>
        <View style={styles.content}>
          <CalculatorButton lable='0' onPress={() => { buildNumber("0") }}></CalculatorButton>
          <CalculatorButton lable='.' onPress={() => { buildNumber(".") }}></CalculatorButton>
          <CalculatorButton lable='=' onPress={() => { calculateResult() }}></CalculatorButton>
          <CalculatorButton lable='/' onPress={() => { division() }}></CalculatorButton>
          <StatusBar style="auto" />
        </View>
        <StatusBar style="auto" />
      </View>
    </View >
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
    borderColor: '#fff'
  },
  contentb: {
    width: '100%',
    backgroundColor: '#6A6969',
    paddingHorizontal: 10,
    borderRadius: 15,
    alignItems: 'flex-end',
    paddingVertical: 10,
    marginVertical: 10
  },
  app: {
    maxWidth: 250,
    width: '90%',
    minHeight: 500,
    padding: 20,
    backgroundColor: '#3E3E3E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  text: {
    color: '#fff',
    borderBottomWidth: 2,
    borderColor: '#9D0F02',
    marginVertical: 5
  },
  textR: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderColor: '#9D0F02',
    marginVertical: 5
  },
  textO: {
    color: '#CFCFCF',
    fontSize: 18,
    borderBottomWidth: 2,
    borderColor: '#9D0F02',
    marginVertical: 5,
    alignItems:'flex-end'
  }
});
