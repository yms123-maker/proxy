import React, { Component } from 'react'
import Son1 from './Son1'
import Son2 from './Son2'
export default class Father extends Component {
    render() {
        return (
            <div>
                <Son1/>
                <Son2/>
            </div>
        )
    }
}
