import React from 'react'
import { Tag, Typography } from 'antd';
let {Title} = Typography
export default function Tools(props) {
    let elements = Object.keys(props.data)
    let color=["red","lime","green","cyan","blue","purple"]
    return (
        <div >
            <Title underline>Tools</Title>
            {
                elements.map((ele, index1)=>{
                    let words = ele.split('_')
                    return (
                        <div style={{display:'flex', flexDirection:'row', margin:'1vh'}}>
                        <div>{words[0]}&nbsp;{words[1]} : &nbsp;&nbsp;</div>
                        {
                            props.data[ele].map((item, index2)=>{
                                let key = index1+'_'+index2
                                let rand = color[Math.floor(Math.random() * color.length)];
                                return (<Tag color={rand} key={key}>{item}</Tag>)
                            })
                        }
                        </div>
                    )
                })
            }
        </div>
    )
}
