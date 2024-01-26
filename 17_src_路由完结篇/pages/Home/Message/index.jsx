import React, {Component} from 'react';
import Detail from "./Detail";
import {Link, Router} from "react-router-dom";

export default class Message extends Component {
    state = {
        messageArr: [
            {id: 1, title: 'message001'},
            {id: 2, title: 'message002'},
            {id: 3, title: 'message003'}
        ]
    }

    render() {
        const {messageArr} = this.state;

        return (
            <div>
                <ul>
                    {
                        /*messageArr的遍历*/
                        messageArr.map((msgObj) => {
                            return (


                                <li key={msgObj.id}>
                                    {/*      /*向路由组件传递params参数*/}
                                    {/*      <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>*/}

                                    {/*      /*向路由组件传递state参数*/}

                                    <Link to={{pathname:`/home/message/detail/`,state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>

                                </li>
                            );
                        })
                    }
                </ul>
                <hr/>
                {/*<Router path="/home/message/detail/:id/:title" component={Detail}/>*/}
                <Router path="/home/message/detail" component={Detail}/>
            </div>
        );
    }
}
