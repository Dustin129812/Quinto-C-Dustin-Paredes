import { useState } from "react"



export const useCalculator = () => {
  const [number, setNumber] = useState("0")
  const [prevNumber, setPrevNumber] = useState("0")
  const [lastOperation, setLastOperation] = useState("");
  const [simbol, setSimbol] = useState('')

  const clean = () => {
    setNumber("0")
    setPrevNumber("0")
    setLastOperation("")
    setSimbol("")
  }

  const deletNumber = () => {
    if (number == '0' || isNaN(Number(number)) || number.length < 2) return setNumber('0');
    setNumber(number.slice(0, -1))
  }
  const lastNumber = () => {

    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }

    setNumber('0');
  }

  const suma = () => {
    lastNumber()
    if (lastOperation !== "") {
      calculateResult();
    }
    setSimbol('+')
    setLastOperation("suma")
  }
  const resta = () => {
    lastNumber()
    if (lastOperation !== "") {
      calculateResult();
    }
    setSimbol('-')
    setLastOperation("resta")
  }
  const multi = () => {
    lastNumber()
    if (lastOperation !== "") {
      calculateResult();
    }
    setSimbol('x')
    setLastOperation("multi")
  }
  const division = () => {
    lastNumber()

    if (lastOperation !== "") {
      calculateResult();
    }
    setSimbol('/')
    setLastOperation("div")
  }
  const subResult = () => {
    if (lastOperation == "") return;

    const num1 = Number(number);
    const num2 = Number(prevNumber);
    if (isNaN(num2)) return num1;

    switch (lastOperation) {
      case "suma":
        return num2 + num1;

      case "resta":
        return num2 - num1;

      case "multi":
        return num2 * num1;

      case "div":
        if (num1 === 0) return 0
        return num2 / num1;

      default:
        throw new Error(`Operation ${lastOperation} not implemented`);
    }

  }
  const calculateResult = () => {
    const result = subResult();
    if (result === undefined) return;
    const formattedResult =
      Number(result.toFixed(4)).toString();
    setNumber(`0`);
    setSimbol('')
    setPrevNumber(`${formattedResult}`);
  }


  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number === '0' && numberString !== '.') {
      return setNumber(numberString);
    }

    setNumber(number + numberString);
  }


  return {
    number,
    prevNumber,
    simbol,

    buildNumber,
    suma,
    resta,
    multi,
    division,
    calculateResult,
    clean,
    deletNumber

  }

}
