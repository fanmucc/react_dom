import React, { Component } from 'react';
import propTypes from 'prop-types'  // 引入验证父传子数据验证
import { List } from 'antd';
class ItemList extends Component {
    componentWillReceiveProps(){
        // 第一次渲染子函数时并不会调用
        // 当父函数传递给子函数的数据发生变化重新渲染的时候才会调用
        console.log('componentWillReceiveProps')
    }
    render() { 
        return ( 
            <div>
                {this.props.text}
                <List
                    itemLayout="horizontal"
                    dataSource={this.props.content}
                    bordered="true"
                    renderItem={(item, index) => (
                        <List.Item onClick={this.handleItemClick.bind(this, index)}>
                            <List.Item.Meta
                                description={item}
                            ></List.Item.Meta>
                        </List.Item>
                    )}
                ></List>
            </div>
         );
    }
    handleItemClick(index) {
        console.log('子组件事件'+index)
        this.props.deleteItem(index)
    }
}
// 如果不符合会在控制台进行错误输出
ItemList.propTypes = {
    // content: propTypes.array, // 输入值验证 需要符合相应的数据类型
    content: propTypes.array.isRequired,  // isRequired 毕传值
}
// 默认值写法
ItemList.defaultProps = {
    text: '默认值'
}
 
export default ItemList;