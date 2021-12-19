import { useState } from "react"


const Buttons = (id) => {

    const [value, setValue] = useState(0)
    const [oldvalue, setOldValue] = useState(0)
    const [operator, setOperator] = useState ()

    function click (e)  {
        const newValue = e.target.value

        if(value === 0) {
            setValue(newValue)
        } else {
            setValue(value + newValue)
        }        
    }

    function clear () {
        setValue(0)
    }
    function percentage () {
        setValue(value / 100)
    }

    function moreorless () {
        if(value > 0 ) {
            setValue(- value)
        } else {
            setValue(Math.abs(value))
        }       
    }

    function operatorHandle(e) {
        const newOperator = e.target.value
        setOperator(newOperator)
        setOldValue(value)
        setValue("")

    }

    function result () {
        if(operator=== "/") {
            setValue(oldvalue / value)
        } if(operator=== "x") {
            setValue(oldvalue * value)
        } if(operator=== "+") {
            setValue(parseFloat(oldvalue) + parseFloat(value))
        } if(operator=== "-") {
            setValue(oldvalue - value)
        }

    }

    return (
        <div>
            <div>
                <p className="card">{value}</p>
            </div>
            <div className="numbers">
                <button onClick={clear} >AC</button>
                <button onClick={moreorless} >+/-</button>
                <button onClick={percentage} >%</button>
            </div>
            <div className="numbers_first">
                <button onClick={click} value={7}>7</button>
                <button onClick={click} value={8}>8</button>
                <button onClick={click} value={9}>9</button>
            </div>
            <div className="numbers_first">
                <button onClick={click} value={4}>4</button>
                <button onClick={click} value={5}>5</button>
                <button onClick={click} value={6}>6</button>
            </div>
            <div className="numbers_first">
                <button onClick={click} value={7}>7</button>
                <button onClick={click} value={2}>2</button>
                <button onClick={click} value={3}>3</button>
            </div>
            <div className="numbers_first">
                <button onClick={click} value={0} className="zero">0</button>
                <button onClick={click} value="." className="virgula">,</button>
            </div>
            <div className="container_button">
                <button onClick={operatorHandle} value="/">/</button>
                <button onClick={operatorHandle} value="x">x</button>
                <button onClick={operatorHandle} value="-">-</button>
                <button onClick={operatorHandle} value="+">+</button>
                <button onClick={result} >=</button>

            </div>
            
            
        </div>
    )
}

export default Buttons