import React, {Component} from "react"
import "./index.css"
import {nanoid} from "nanoid";
import PropTypes from "prop-types";


export default class Header extends Component {

    //对接受的props进行：类型和必要性限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        //解构赋值获取keyCode, target
        const {keyCode, target} = event

        if (keyCode !== 13) return
        //判断键入为空拦截
        if(target.value.trim() === null){
            alert('键入内容is not null')
            return;
        }
        //键入todos初始化
        const todoObj = {id:nanoid(),name:target.value,done:false}
        //将todoObj传递给App
        this.props.addTodo(todoObj)
        //清空输入
        target.value = ''

    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}