import {ADD_PERSON} from "../constant";

//初始化人数据
const initState =[{}]
export default function personReducer(preState=initState,action){
    const {type,data} = action
    switch (type){
        case ADD_PERSON:
            return [data,...preState]
        default:
            return preState
    }
}