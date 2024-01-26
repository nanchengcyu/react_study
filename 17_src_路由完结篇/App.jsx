import React, {Component} from "react";
import {NavLink, Redirect} from "react-router-dom";

import Route from "react-router-dom/es/Route";
import Home from "./pages/Home";
import About from "./pages/About";


export default class App extends Component {
    //初始化状态
    state = {
        users: [],
        isFirst: true, //是否是第一次打开页面
        isLoading: false,  //是否在请求中
        err: ''
    } //初始化状态
    //更新App的state
    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }


    saveUsers = (users) => {
        this.setState({users})
    }

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">

                            <NavLink className="list-group-item " to="/about">About </NavLink>
                            <NavLink className="list-group-item " to="/home">Home </NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Route path="/about" component={About}/>
                                <Route path="/home" component={Home}/>
                                <Redirect to="/about"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}