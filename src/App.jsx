import React, {Component} from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";


export default class App extends Component {
    //初始化数据
    state ={todos:[
            {id:'001',name:'eat',done:true},
            {id:'002',name:'sleep',done:true},
            {id:'003',name:'coding',done:false}
        ]

    }

    //用于添加一个todo,接收的参数是todo对象
    addTodo =(todoObj) =>{
        //获取原todos
        const todos = this.state
        //追加新todos
        const newTodos = [todoObj,...todos]
        //更新状态
        this.setState({todos:newTodos})

    }
    render() {
        const {todos} = this.state
        return (


            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos}/>
                    <Footer/>
                </div>
            </div>

        )
    }
}