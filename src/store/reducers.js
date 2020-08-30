// reudx store 模块管理
const defaultState = {
    num: 1,
    list: []
}  // 数据存储对象   ==》 vue state
export default (state = defaultState, action) => {
    console.log(action)
    if (action.type === 'click_num') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.num = action.value;
        return newState
    }
    if (action.type === 'click_list') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = [...newState.list,action.value]
        return newState
    }
    if (action.type === 'delete_item') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value, 1)
        return newState
    }
    return state
}
