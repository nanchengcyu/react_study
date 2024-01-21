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
    //用于更新一个todo对象 传给子组件item
    updateTodo =(id,done) =>{
        //获取状态中的todos
        const {todos}= this.state
        //更新todo对象
        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id === id) return {...todoObj,done}
            else return todoObj
        })
        this.setState({todos:newTodos})
    }
    //用于删除一个todo对象 传给子组件item
    deleteTodo =(id) =>{
        //获取状态中的todos获取状态中的todos
        const{todos} =this.state
        //删除对应id的todo对象
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id
        })
        //更新状态
        this.setState({todos:newTodos})

    }
    checkAllTodo =()=>{
        //获取原来的todos
        const {todos} = this.state
        //加工数据
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done:true}

        })
        //更新状态
        this.setState({todos:newTodos})
    }
    clearAllDone = ()=>{
        //获取原来的todos/获取原来的todos
        const {todos} = this.state
        //过滤出没有done的
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done
        })
        //更新状态
        this.setState({todos:newTodos})
    }
    render() {
        const {todos} = this.state
        return (

            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>

        )
    }
}