// @ts-ignore
import React, {Component} from "react"
import Item from "../Item";
import "./index.css"
import PropTypes from "prop-types";

export default class List extends Component {

    //对接受的props进行：类型和必要性限制
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }


    render() {
        const {todos,updateTodo,deleteTodo} = this.props
        return (
            <div>
                <ul className="todo-main">
                    {
                        todos.map(todo => {
                            return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                        })
                    }

                </ul>
            </div>
        )
    }
}