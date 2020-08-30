// 引入redux
import { createStore } from 'redux'
// 引入创建的state模块 并使用redux进行创建
import reducer from './reducers'
const store = createStore(reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store