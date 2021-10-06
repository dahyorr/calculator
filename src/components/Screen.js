import React from 'react'

class Screen extends React.Component{
    render(){
        return(<div className="Screen">
            <div className='formula-screen'>{this.props.formula}</div>
            <div className='output-screen' id='display'>{this.props.display}</div>
        </div>)
    }
}
export default Screen