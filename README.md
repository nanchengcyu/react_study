**基础学习在main分支 案例在master分支**




https://www.bilibili.com/video/BV1wy4y1D7JT/?spm_id_from=333.337.search-card.all.click&vd_source=f0376b0d81e8dafb55834fe0ef0bbd3a

前言

引入js书写


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>2_虚拟DOM的两种创建方法</title>
</head>
<body>
<div id="test"></div>
<!--引入React核心库 引入顺序有要求必须按照下方1在2前-->
<script type="text/javascript" src="../js/react.development.js"></script>
<script type="text/javascript" src="../js/react-dom.development.js"></script>
<script type="text/javascript" src="../js/babel.min.js"></script>

<script type="text/babel">  /*此处一定要写babel*/
//1.创建虚拟DOM
const VDOM = (
    <h1 id="title">
        <span>Hello,React</span>
    </h1>
) /*此处是jsx的语法糖，但是在此处必须有（）将html的语法写到此处*/
//2.渲染虚拟DOM到页面
ReactDOM.render(VDOM,document.getElementById('test'))

</script>


</body>
</html>
DOM 
DOM 是 Document Object Model（文档对象模型）的缩写，它是一种用于表示和操作 HTML、XML 等文档结构的接口。在前端开发中，DOM 提供了一种以结构化方式访问和修改文档的方法，使开发者可以通过编程的方式改变文档的内容、结构和样式。

具体来说，DOM 将文档表示为一个树状结构，其中每个元素、属性、文本等都是树中的节点。通过 DOM，开发者可以使用脚本语言（通常是 JavaScript）来访问、添加、删除或修改文档的元素和属性。

一些常见的 DOM 操作包括：

1.  查询和获取元素： 开发者可以使用 JavaScript 中的方法（如 getElementById、getElementsByClassName、querySelector 等）来获取文档中的特定元素。
2.  修改元素内容： 开发者可以使用 DOM 提供的属性和方法来修改元素的文本内容、属性值等。
3.  动态创建和添加元素： 开发者可以使用 DOM 创建新的元素，并将其添加到文档中。
4.  删除元素： 可以使用 DOM 方法删除文档中的元素。
5.  处理事件： DOM 允许开发者为页面上的元素添加事件监听器，以便在用户与页面交互时执行特定的操作。

下面是一个简单的示例，演示如何使用 JavaScript 和 DOM 操作来改变 HTML 文档的内容：

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Example</title>
</head>
<body>

    <h1 id="myHeading">Hello, World!</h1>
    <button onclick="changeText()">Change Text</button>

    <script>
        function changeText() {
            // 获取元素
            var heading = document.getElementById("myHeading");

            // 修改元素内容
            heading.innerHTML = "New Text!";
        }
    </script>

</body>
</html>

在这个示例中，通过 JavaScript 中的 getElementById 方法获取了  元素，然后通过修改其 innerHTML 属性改变了文本内容。这是一个简单的 DOM 操作示例，真实的应用中可能涉及更多复杂的操作和事件处理。


P6 表达式与语句的区分

React调试工具

---
组件的实例对象三大属性
这三个核心都是建立在类定义的组件上，因为函数建立的组件没有，因此称为组件的实例对象三大属性






state的简写方式
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>hello,React study by nanchengyu</title>
</head>
<body>
<div id="test"></div>
<!--引入React核心库 引入顺序有要求必须按照下方1在2前-->
<script type="text/javascript" src="../js/react.development.js"></script>
<script type="text/javascript" src="../js/react-dom.development.js"></script>
<script type="text/javascript" src="../js/babel.min.js"></script>

<script type="text/babel">  /*此处一定要写babel*/
//1.创建类组件
class Weather extends React.Component {
    //1.1 初始化状态
    state ={isHot:false,wind:'微风'}
    render() {
        //读取状态
        const {isHot,wind} = this.state
        return <h2 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'}，{wind}</h2>
    }

    //1.2 自定义方法 用赋值语句的形式+箭头函数
    changeWeather =()=>{
        const isHot = this.state.isHot
        this.setState({isHot:!isHot})
    }

}

//2.渲染组件到test上
ReactDOM.render(<Weather/>, document.getElementById('test'))
</script>


</body>
</html>

props的简写
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>hello,React study by nanchengyu</title>
</head>
<body>
<div id="test"></div>
<div id="test1"></div>
<div id="test2"></div>
<!--引入React核心库 引入顺序有要求必须按照下方1在2前-->
<script type="text/javascript" src="../js/react.development.js"></script>
<script type="text/javascript" src="../js/react-dom.development.js"></script>
<script type="text/javascript" src="../js/babel.min.js"></script>
<!--用于对组件标签属性的限制-->
<script type="text/javascript" src="../js/prop-types.js"></script>

<script type="text/babel">  /*此处一定要写babel*/
//1.创建类组件
class Person extends React.Component {

  static propTypes = {
        name:PropTypes.string.isRequired, /*对Person类的属性进行限制*/
        sex:PropTypes.string,
        age:PropTypes.number,
        speak:PropTypes.func,
    }
  static defaultProps = {
        sex: '男', age: 18
    }
    //状态写在属性后面

    // state ={isHot:false,wind:'微风'}
    render() {
        //读取状态
        const {name, age, sex} = this.props //props是只读状态
        
        return (
            <ul>
                <li>姓名：{name}</li>
                <li>年龄：{age}</li>
                <li>性别：{sex}</li>
            </ul>
        )
    }

}




//2.渲染组件到test上
ReactDOM.render(<Person name="ncy" age={20} sex="男" speak="1"/>, document.getElementById('test'))
ReactDOM.render(<Person name="nanchengyu" age={20} sex="男"/>, document.getElementById('test1'))
ReactDOM.render(<Person name="wife" age={20} sex="女"/>, document.getElementById('test2'))

// function speak(){
//     console.log("全网同名：南城余")
// }
</script>


</body>
</html>

refs
refs类似于原生的id标签 用于表示<>



---
D2
生命周期

旧钩子
1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
*         1. constructor()
*         2. componentWillMount()
*         3.render()
*         4. componentDidMount() ======> 常用
*                  一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
*
* 2. 更新阶段: 由组件内部this.setSate()或父组件重新render触发
*         1. shouldComponentUpdate()
*          2. componentWillUpdate()
*          3. render() ====> 必须使用
*          4. componentDidUpdate()
* 3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
*          1. componentWillUnmount() =====> 常用
*                  一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息
新钩子
/*1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
*         1. constructor()
*         2. getDerivedStateFromProps()
*         3.render()
*         4. componentDidMount() ======> 常用
*                  一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
*
* 2. 更新阶段: 由组件内部this.setSate()或父组件重新render触发
*         1. getDerivedStateFromProps()
*         2. shouldComponentUpdate()
*          3. render() ====> 必须使用
*         4.getSnapshotBeforeUpdate()
*          4. componentDidUpdate()
* 3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
*          1. componentWillUnmount() =====> 常用
*                  一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息

* */

常用钩子总结
1. render:初始化渲染或更新渲染调用
2. componentDidMount（组件加载完毕钩子）:开启监听，发送ajax请求
3. compoentWillUnmount(组件即将卸载钩子):做收尾工作的钩子，如清理监听器


