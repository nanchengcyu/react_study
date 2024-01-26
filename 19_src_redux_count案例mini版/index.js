//引入react核心库
import React from 'react';

//引入ReactDOM
import ReactDOM from 'react-dom';
//引入App
import App from './App';


//引入路由组件
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";

ReactDOM.render(<App/>, document.getElementById('root'))

store.subscribe(() => {
    ReactDOM.render(<App/>, document.getElementById('root'))
})
