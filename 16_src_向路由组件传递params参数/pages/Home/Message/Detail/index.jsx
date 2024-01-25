import React, {Component} from 'react';

const DetailData = [
    {id:'01',content:'你好，南城余'},
    {id:'02',content:'你好，尚硅谷'},
    {id:'01',content:'你好，cn'},

]


export default class Detail extends Component {


    render() {
       const {id,title} = this.props.match.params
        const findResult = DetailData.find((detailObj)=>
            {
                return detailObj.id === id
            }
        )

        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>TITLE:{title}</li>
                    <li>CONTENT:{findResult.content}</li>
                </ul>


            </div>
        )
    }
}