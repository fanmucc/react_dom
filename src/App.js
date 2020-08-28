import React, { Component } from 'react'
import ItemList from './item'
import './App.css'

import { Button, Input } from 'antd';
class App extends Component {
    // 组件初始化
    constructor(props) {
        super(props)
        this.state = {
            value: '123',
            list: [],
            dom: '<h1>标签</h1>',
            num: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClickAdd = this.handleClickAdd.bind(this)
        console.log(1 + 'constructor')
    }
    // 生命周期
    // 挂在阶段
    componentWillMount () {
        // 会进行提示 componentWillMount 重命名，不建议使用。建议将此处代码转移到constructor中调用
        console.log(2 + '组件挂在到DOM前调用，且只调用一次')
    }
    componentDidMount () {
        console.log(4 + '组件挂在到DOM后调用，且只会调用一次')
    }
    
    // 组件更新前调用
    shouldComponentUpdate () {
        console.log('组件更新')  
        // 需要有返回值 true 或 false  false时组件则不进行更改
        return true
    }
    // 组件更新前调用，但是在shouldComponentUpdate之后
    componentWillUpdate () {
        // 组件更新之前调用, 但是如果shouldComponentUpdate返回值为false时则不进行调用
        console.log('组件更新之前调用====')
    }

    // 组件更新完成
    componentDidUpdate () {
        console.log('组件更新完成后执行')
        // 着这里不能对state参数进行修改，否则会变成死循环
        // this.setState({
        //     num: this.state.num + 1
        // })
    }
    
    // 组件被卸载时调用
    componentWillUnmout () {
        // 组件被卸载时调用
    }
    


    render() { 
        // 根据组件的props和state返回一个react元素
        console.log(3 + '根据组件的props和state返回一个react元素')
        return ( 
            <div className="content">
                <div className="anmo">
                    <Button type="primary" onClick={this.handleClickAdd}>增加</Button>
                    {this.state.num}
                    <div style={{'display': 'flex'}}>
                        <Input placeholder="需要什么服务" value={this.state.value} onChange={this.handleChange} ref={(input) => {this.input = input}}/> 
                        <Button type="primary" style={{'marginLeft':'10px'}} onClick={this.handleClick}>增加服务</Button>
                    </div>
                    <ItemList content={this.state.list} deleteItem={this.deleteItem.bind(this)}/>
                    {/* <ul>
                        {
                            this.state.list.map((item, index) => {
                                return <li key={index} onDoubleClick={this.deleteItem.bind(this, index)}>{item}</li>
                            })
                        }
                    </ul> */}
                    <p dangerouslySetInnerHTML={{__html: this.state.dom}}></p>
                </div>
            </div>
         );
    }
    handleChange (e) {
        console.log(e.target.value)
        this.setState({
            // value: e.target.value
            value: this.input.value
        })
    }
    handleClick () {
        this.setState({
            list: [...this.state.list, this.state.value]
        })
    }
    deleteItem (index) {
        console.log(index)
        this.state.list.splice(index, 1)
        this.setState({
            list: this.state.list
        })
    }
    handleClickAdd () {
        this.setState({
            num: this.state.num + 1
        })
    }
}
 
export default App;