import React from 'react'
import Screen from './Screen'
import Buttons from './Buttons'

class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            display: "0",
            formula: "",
            prevDisplay: "",
            evaluated: false,
        }
    }

    initialize = () => {
        this.setState({
            display: "0",
            formula: "",
            prevDisplay: "",
            evaluated: false,
        })
    }
    
    numberInput = (number) => {
        let currentVal = this.state.display
        if (currentVal === "0" && number === '0') return null
        else if (this.state.display === "0" && number !== '0'){
            this.setState({
                display: number
                        })
        }
        else if(this.state.prevDisplay && currentVal.length === 1 && !this.state.evaluated){
            if(!(/[+-/X=]/.test(currentVal[0]))){
                this.setState({
                    display: currentVal + number
                })
            }
        
            else{
                this.setState({
                    display: number
                })
            }
        }
        else if (this.state.evaluated){
            if(!(/[+-/X=]/.test(currentVal[currentVal.length -1]))){
                this.setState({
                    display: number,
                    formula: "",
                    evaluated: false
                })
            }
            else return null
        }
        else{
            if(currentVal.length <= 19 && !this.state.evaluated){
                this.setState({
                    display: currentVal + number
                }) 
            }
            else{
                this.setState({display: "MAX DIGIT LIMIT"})
                setTimeout(()=> this.setState({display: currentVal}), 500)
            }
            
            
        }
            
        
    }
    
    signInput = (sign) => {
        let currentVal = this.state.display
        let formula = this.state.formula
        if (currentVal === "0" && sign === '-') this.setState({display: sign})
        else if (currentVal === "0") return null
        else if (currentVal === "-" && currentVal.length === 1 && formula === '') return null
        else if (/[+-/X=]/.test(currentVal[currentVal.length - 1]) && sign === '-'){
            this.setState({
                display: sign,
                formula: formula + sign
            })
        }        else if (/[+-/X=]/.test(currentVal[currentVal.length - 1])){
            while((/[+-/X=]/.test(formula[formula.length - 1]))){
                currentVal = currentVal.slice(0, currentVal.length - 1)
                formula = formula.slice(0, formula.length - 1)
            }
                
            
            this.setState({
                display: currentVal+ sign,
                formula: formula+ sign
            })
            
        }

        else if (this.state.evaluated){
            if(!(/[+-/X=]/.test(currentVal[currentVal.length -1]))){
                this.setState({
                    display: currentVal + sign,
                    formula: "",
                    evaluated: false
                })
            }   
            else return null
        }
        else {
            this.setState({display: sign, formula: formula + (currentVal + sign), prevDisplay: currentVal})
        }
    }
    
    decimalInput = () => {
        let currentVal = this.state.display
        let split = currentVal.split(/[/X+-]/);
        if (currentVal === '') return null
        else if (/[+-/X=]/.test(currentVal[currentVal.length - 1])) return null
        else if (/[.]/.test(currentVal[currentVal.length - 1])) return null
        else if(!/[.]/.test(split[split.length - 1])) this.setState({
            display: currentVal + '.'
        })
        else return null
    }
    
    equalsInput = () => {
        let formula = this.state.formula + this.state.display
        while (/[+-./X]/.test(formula[formula.length-1])){
            formula = formula.slice(0, formula.length -1)
        }
        let newFormula = formula.replace(/X/g, '*')
        // eslint-disable-next-line no-eval
        let answer = Math.round(10000 * eval(newFormula)) / 10000
        answer = answer.toString()
        this.setState({
            display: answer,
            formula: formula + '=' + answer,
            evaluated: true,
            prevDisplay: answer
        })
    }

    handleButtonPress = (e) =>{
        switch(e.target.value){
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
                this.numberInput(e.target.value)
                break;
            case "+":
            case "-":
            case "/":
            case "X":
                this.signInput(e.target.value)
                break;
            case '.':
                this.decimalInput()
                break;
            case 'AC':
                this.initialize()
                break;
            case '=':
                this.equalsInput()
                break;
            default:
                break;
        }
    }

    render(){
        return(<div className="Calculator" >
            <Screen display={this.state.display} formula={this.state.formula}/>
            <Buttons onButtonPress={this.handleButtonPress}/>
        </div>)
    }
}
export default Calculator