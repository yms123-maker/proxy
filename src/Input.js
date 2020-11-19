import React, { Component } from 'react'

export default class Input extends Component {
    handleUp= e =>{
        if(e.keyCode===13){
            this.props.setList(e.target.value)
            e.target.value=''
        }
    }
    render() {
        return (
           <input type='text' placeholder='请输入' onKeyUp={this.handleUp}/>
        )
    }
}
