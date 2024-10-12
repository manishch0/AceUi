import React, { useState } from 'react'
import Checkbox from './components/Checkbox/Checkbox'

function App() {
    const [check, setCheck] = useState(false)
    return (
        <div>
            <Checkbox label={"apple"} check={check} onChange={(value) => {
                setCheck(value)
            }} />
            <Checkbox label={"banana"} check={check} onChange={(value) => {
                setCheck(value)
            }} /><Checkbox label={"orange"} check={check} onChange={(value) => {
                setCheck(value)
            }} /><Checkbox label={"test the label"} check={check} onChange={(value) => {
                setCheck(value)
            }} />
        </div>
    )
}

export default App;

// function sum(a,b){
//     return a+b
// }

// sum(3,4)

