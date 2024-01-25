import React, { Component } from 'react';
import Detail from "./Detail";
import {Link, Router} from "react-router-dom";

export default class Message extends Component {
    state = {
        messageArr: [
            { id: 1, title: 'message001' },
            { id: 2, title: 'message002' },
            { id: 3, title: 'message003' }
        ]
    }

    render() {
        const { messageArr } = this.state;

        return (
            <div>
                <ul>
                    {
                        /*messageArr的遍历*/
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
                <hr />
               <Router path="/home/message/detail/:id/:title" component={Detail}/>
            </div>
        );
    }
}
