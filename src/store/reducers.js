import {CLICK_NUM, CLICK_LIST, DELETE_ITEM} from './actionTypes'
// reudx store 模块管理
const defaultState = {
    num: 1,
    list: []
}  // 数据存储对象   ==》 vue state
export default (state = defaultState, action) => {
    console.log(action)
    if (action.type === CLICK_NUM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.num = action.value;
        return newState
    }
    if (action.type === CLICK_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = [...newState.list,action.value]
        return newState
    }
    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value, 1)
        return newState
    }
    return state
}
