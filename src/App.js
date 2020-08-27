import React, { Component } from 'react'
import './app.css'

import { Button, Input } from 'antd';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            list: []
        }
    }
    render() { 
        return ( 
            <div className="content">
                <div className="anmo">
                    <div style={{'display': 'flex'}}><Input placeholder="需要什么服务" /> <Button type="primary" style={{'margin-left':'10px'}}>增加服务</Button></div>
                    <ul>
                        <li>推油</li>
                        <li>按摩</li>
                    </ul>
                </div>
            </div>
         );
    }
    hanldrenClick () {
        alert(1)
    }
}
 
export default App;