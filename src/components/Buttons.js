import React from 'react'

class Buttons extends React.Component{
    render(){
        let onButtonPress = this.props.onButtonPress
        return(<div className="Buttons">
            <button onClick={onButtonPress} className={'jumbo reset'} id={'clear'} value={'AC'}>AC</button>
            <button onClick={onButtonPress} className={'sign'} id={'divide'} value={'/'}>/</button>
            <button onClick={onButtonPress} className={'sign'} id={'multiply'} value={'X'}>x</button>
            <button onClick={onButtonPress} id={'seven'} value={'7'}>7</button>
            <button onClick={onButtonPress} id={'eight'} value={'8'}>8</button>
            <button onClick={onButtonPress} id={'nine'} value={'9'}>9</button>
            <button onClick={onButtonPress} className={'sign'} id={'subtract'} value={'-'}>-</button>
            <button onClick={onButtonPress} id={'four'} value={'4'}>4</button>
            <button onClick={onButtonPress} id={'five'} value={'5'}>5</button>
            <button onClick={onButtonPress} id={'six'} value={'6'}>6</button>
            <button onClick={onButtonPress} className={'sign'} id={'add'} value={'+'}>+</button>
            <button onClick={onButtonPress} id={'one'} value={'1'}>1</button>
            <button onClick={onButtonPress} id={'two'} value={'2'}>2</button>
            <button onClick={onButtonPress} id={'three'} value={'3'}>3</button>
            <button onClick={onButtonPress} className={'equals'} id={'equals'} value={'='}>=</button>
            <button onClick={onButtonPress} className='jumbo' id={'zero'} value={'0'}>0</button>
            <button onClick={onButtonPress} className={'decimal'} id={'decimal'} value={'.'}>.</button>

        </div>)
    }
}
export default Buttons