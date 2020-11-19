import React, { Component } from 'react'
import axios from 'axios'
export default class Proxy extends Component {
    componentDidMount(){
        // axios.get('/films.json').then(res=>{
        //     console.log(res)
        // })
        // axios.get('https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=5009550',{
        //     headers:{
        //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605247210162190849998872"}',
        //         'X-Host':' mall.film-ticket.film.list'
        //     }
        // }).then(res=>{
        //     console.log(res)
        // })
        axios.get('/api/ajax/topRatedMovies?token=&optimus_uuid=1FC171202A3011EB8E98A5636373D2626FC73A1741664FBC93FC7B0A7C3E60C6&optimus_risk_level=71&optimus_code=10').then(res=>{
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                proxy
            </div>
        )
    }
}
