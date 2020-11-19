import React, { Component } from 'react'
import eventHub from './eventHub'
export default class Son2 extends Component {
    change=()=>{
        eventHub.trigger("changeColor",this.color16())
    }
    color16(){//十六进制颜色随机
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
        return color;
    }

    render() {
        return (
            <div>
                <button onClick={this.change}>改变颜色</button>
            </div>
        )
    }
}
