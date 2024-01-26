/*1.该文件适用于创建一个Count组件服务得reducer,reducer本质为函数。
  2.reducer函数会接收两个参数，分别为之前的状态和动作对象
* */
export default function countReducer(preState=0,action){
    //从action中获取：type，data
    const {type,data} = action;
    //根据type决定如何加工数据
    switch (type) {
        case 'increment':
            return preState + data;
        case 'decrement':
            return preState - data;
        default:
            return preState;
    }

}