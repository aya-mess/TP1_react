import React, { useState } from 'react'

export default function TP1() {
  const [display, setDisplay] = useState("")
  const [result, setResult] = useState("")
  const operators = ['/', '*', '-', '+']

  const updateDisplay = (val) => {
    setDisplay(display + val)

    // Calculation
    if (operators.includes(val) == false) {
      setResult(eval(display + val).toString())
    }
  }

  const calcResult = () => {
    setDisplay(result)
  }

  const clearDisplay = () => {
    setDisplay("")
  }

  return (
    <div className="containeree">
      <h1 className="input">Calculator</h1>
  
      <div className="dfs">{ display || "" }</div>
      <div className="">
        <div className="">
          <div className="keypad">
            <button onClick={() => updateDisplay('+')} className="heigthligth">+</button>
            <button onClick={() => updateDisplay('-')} className="heigthligth">-</button>
            <button onClick={() => updateDisplay('*')} className="heigthligth">*</button>
            <button onClick={() => updateDisplay('/')} className="heigthligth">/</button>
          </div>
        </div>
      </div>
      
      <div className="">
        <div className="">
          <div className="keypad">
            <button onClick={() => updateDisplay('1')} className="btn btn-dark digit-btn">1</button>
            <button onClick={() => updateDisplay('2')} className="btn btn-dark digit-btn">2</button>
            <button onClick={() => updateDisplay('3')} className="btn btn-dark digit-btn">3</button>
          </div>
        </div>
        <div className="">
          <div className="keypad">
            <button onClick={() => updateDisplay('4')} className="btn btn-dark digit-btn">4</button>
            <button onClick={() => updateDisplay('5')} className="btn btn-dark digit-btn">5</button>
            <button onClick={() => updateDisplay('6')} className="btn btn-dark digit-btn">6</button>
          </div>
        </div>
        <div className="">
          <div className="keypad">
            <button onClick={() => updateDisplay('7')} className="btn btn-dark digit-btn">7</button>
            <button onClick={() => updateDisplay('8')} className="btn btn-dark digit-btn">8</button>
            <button onClick={() => updateDisplay('9')} className="btn btn-dark digit-btn">9</button>
          </div>
        </div>
        <div >
          <div className="keypad">
            <button onClick={() => updateDisplay('.')} className="btn btn-dark digit-btn w">.</button>
            <button onClick={() => updateDisplay('0')} className="btn btn-dark digit-btn w">0</button>
            <button onClick={clearDisplay} id='Clear' className='heigthligth w' >CA</button>

            <button onClick={calcResult} id='result' className="heigthligth">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}