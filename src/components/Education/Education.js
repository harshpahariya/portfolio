import React, { Component } from 'react';
import { Timeline,Typography } from 'antd';
import './education.css';

const {Text} = Typography;

class Education extends Component {
    render() {
        return (
            <div style={{justifyContent:'center',alignItems:'center'}}>
               <Timeline mode='alternate'>
                    <Timeline.Item>
                        <Text type='primary' underline>Masters of Science (MS)</Text><br/>
                        <Text>University of Florida</Text><br/>
                        <Text>Computer Science</Text><br/>
                        <Text>CGPA : 7.5</Text>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Text type='primary' underline>Bachelor of Engineering (BE)</Text><br/>
                        <Text>BITS Pilani</Text><br/>
                        <Text>Computer Science</Text><br/>
                        <Text>CGPA : 7.3</Text>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Text type='primary' underline>Higher Secondary</Text><br/>
                        <Text>Shree Vaishnav Academy </Text><br/>
                        <Text>PCM</Text><br/>
                        <Text>Percentage: 88%</Text>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Text type='primary' underline>Senior Secondary</Text><br/>
                        <Text>Shree Vaishnav Academy </Text><br/>
                        <Text>PCM</Text><br/>
                        <Text>Percentage: 85%</Text>
                    </Timeline.Item>
                    
                </Timeline>
            </div>
        )
    }
}

export default Education
