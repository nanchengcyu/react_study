import React, {Component} from 'react';
import "./index.css"

export default class Footer extends Component {
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)

    }
    handleCheckAllDone = () => {
    this.props.clearAllDone()
    }

    render() {
        const {todos} = this.props
        //已完成的个数
        const doneTotal = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0)
            , 0)
        //总数
        const total = todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneTotal === total ? true : false}/>
                </label>
                <span>
          <span>已完成{doneTotal}</span> / 全部{total}
        </span>
                <button onClick={this.handleCheckAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}