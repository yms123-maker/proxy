import React, { Component } from 'react'
import axios from 'axios'
export default class Chicken extends Component {
    state={
        list:[],
        username:'',
        age:0
    }
    componentDidMount(){
        this.download()
    }
    handleChange=e=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    add=()=>{
        axios.post('http://localhost:4000/list',{
            username:this.state.username,
            age:this.state.age
        }).then(res=>{
            this.download()
        })
    }
    download=()=>{
        axios.get('http://localhost:4000/list').then(res=>{
            this.setState({
                list:res.data
            })
        })
    }
    delete=(data)=>{
        axios.delete(`http://localhost:4000/list/${data}`).then(res=>{
            this.download()
        })
    }
    update=(item)=>{
        var result=prompt("请输入更改结果",item.username+','+item.age)
        if(result){
            var arr=result.split(',')
            axios.patch(`http://localhost:4000/list/${item.id}`,{
                username:arr[0],
                age:arr[1]
            }).then(res=>{
                this.download()
            })
        }
    }
    blur=()=>{
        var keyword=prompt("请输入关键字")
        axios.get(`http://localhost:4000/list?username_like=${keyword}`).then(res=>{
           for(var i=0;i<res.data.length;i++){
               console.log(res.data[i])
           }
        })
    }
    render() {
        return (
            <div>
                <input id="username" value={this.state.username} onChange={this.handleChange} type="text" placeholder="请输入用户名..."/>
                <input id="age" value={this.state.age} onChange={this.handleChange} type="number" placeholder="请输入年龄..."/>
                <button onClick={this.add}>添加</button>
                <button onClick={this.blur}>模糊查询</button>
                <ul>
                    {
                        this.state.list.map((item)=>{
                            return(
                                    <li key={item.id}>姓名：{item.username}-----------年龄：{item.age}
                                        <button onClick={this.delete.bind(this,item.id)} style={{marginLeft:'20px'}}>删除</button>
                                        <button onClick={this.update.bind(this,item)}>更新</button>
                                    </li>
                            ) 
                        })
                    }
                </ul>
            </div>
           
        )
    }
}
