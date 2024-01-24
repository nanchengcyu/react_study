import React, {Component} from "react";
import {Link} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Route from "react-router-dom/es/Route";
// import "./App.css";

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
                            {/*<a className="list-group-item" href="./about.html">About</a>*/}
                            {/*<a className="list-group-item active" href="./home.html">Home</a>*/}

                            <Link className="list-group-item active" to="/about">About </Link>
                            <Link className="list-group-item active" to="/home">Home </Link>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Route path="/about" component={About}/>
                                <Route path="/home" component={Home}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}