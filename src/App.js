import React, { Component } from 'react'
import './app.css'

import { Button, Input } from 'antd';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '123',
            list: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    render() { 
        return ( 
            <div className="content">
                <div className="anmo">
                    <div style={{'display': 'flex'}}>
                        <Input placeholder="需要什么服务" value={this.state.value} onChange={this.handleChange}/> 
                        <Button type="primary" style={{'marginLeft':'10px'}} onClick={this.handleClick}>增加服务</Button>
                    </div>
                    <ul>
                        {
                            this.state.list.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
         );
    }
    handleChange (e) {
        console.log(e.target.value)
        this.setState({
            value: e.target.value
        })
    }
    handleClick () {
        this.setState({
            list: [...this.state.list, this.state.value]
        })
    }
}
 
export default App;