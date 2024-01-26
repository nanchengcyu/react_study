import React, {Component} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import News from "./News";
import Route from "react-router-dom/es/Route";
import Message from "./Message";


export default class Home extends Component {


    render() {

        return (
            <div>

                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <NavLink className="list-group-item " to="/home/news">News </NavLink>

                        </li>
                        <li>
                            <NavLink className="list-group-item " to="/home/message">Message </NavLink>
                        </li>
                    </ul>
                    {/* 注册路由 */}
                <switch>
                    <Route path="/home/news" component={News}/>
                    <Route path="/home/message" component={Message}/>
                    <Redirect to="/home/news"/>
                </switch>

                </div>
            </div>
        )
    }
}