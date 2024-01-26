import React, {Component} from 'react'
import {nanoid} from "nanoid";
import {connect} from "react-redux";


//定义UI组件
export default class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        console.log(name,age)
        const  personObj = {id:nanoid(),name,age}
        console.log(personObj)
    }

    render() {
        //console.log('UI组件接收到的props是',this.props);
        return (
            <div>
                <input ref={c => this.nameNode = c} type="text" placeholder="input your name"/>
                <input ref={c => this.ageNode = c} type="text" placeholder="input your age"/>
                <button onClick={this.addPerson}>add Person</button>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}

connect(

)(Person)



