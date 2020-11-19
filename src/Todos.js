import React, { Component } from 'react'
import List from './List'
import Input from './Input'
export default class Todos extends Component {
    constructor(){
        super()
        this.state={
            list:[
                {id:1, title: "屌浩周"},
                {id:2, title: "周屌浩"}
            ]
        }
    }
    setList=(data)=>{
        this.setState({
            list:[...this.state.list,{id:parseInt(Math.random()*1000),title:data}]
        })
    }
    render() {
        return (
            <div>
                <Input setList={this.setList}/>
                <List list={this.state.list}/>
            </div>
        )
    }
}
