import React, { Component } from 'react'
import eventHub from './eventHub'
export default class Son1 extends Component {
    state={
        color:'red'
    }
    componentDidMount(){
        eventHub.on("changeColor",(color)=>{
            this.setState({
                color
            })
        })
    }
    render() {
        return (
            <div style={{color:this.state.color}}>
                我是周屌浩
            </div>
        )
    }
}
