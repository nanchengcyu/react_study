import React, {Component} from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {
    //初始化状态
    state ={
        users:[],
        isFirst:true, //是否是第一次打开页面
        isLoading:false,  //是否在请求中
        err:''
    } //初始化状态
    //更新App的state
    updateAppState = (stateObj) =>{
        this.setState(stateObj)
    }


    saveUsers = (users) =>{
        this.setState({users})
    }

    render() {

        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        )

    }
}