import { useEffect, useRef, useState } from "react"



export const useCalculator = () => {
  const [number, setNumber] = useState("0")
  const [prevNumber, setPrevNumber] = useState("0")
  const [lastOperation, setLastOperation] = useState("");
  const [simbol, setSimbol] = useState('')

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
    setSimbol('+')
    setLastOperation("suma")
  }
  const resta = () => {
    lastNumber()
    setSimbol('-')
    setLastOperation("resta")
  }
  const multi = () => {
    lastNumber()
    setSimbol('x')
    setLastOperation("multi")
  }
  const division = () => {
    lastNumber()
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
        return num2 / num1;

      default:
        throw new Error(`Operation ${lastOperation} not implemented`);
    }
  
}
const calculateResult = () => {
  const result = subResult();
  setNumber(`${result}`);
  setPrevNumber('0');
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
  calculateResult

}

}
