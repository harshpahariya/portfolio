import React from 'react'
import {Progress, Typography } from 'antd';
let {Title} = Typography

export default function Languages(props) {
    let elements = Object.keys(props.data)
    return (
        <div>
            <Title underline>Languages</Title>
            {
                elements.map((ele, index1)=>{
                    let words = ele.split('_')
                    return (
                        <div style={{display:'flex', flexDirection:'row', margin:'1vh'}}>
                            {words[0]}&nbsp;{words[1]} : &nbsp;&nbsp;
                            <Progress steps={10} type="line" percent={props.data[ele]['rating']} showInfo={false} />
                        </div>
                    )
                })
            }
        </div>
    )
}
