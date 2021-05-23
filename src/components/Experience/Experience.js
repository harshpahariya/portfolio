import React, { Component } from 'react';
import { Timeline,Typography } from 'antd';
import {SendOutlined} from '@ant-design/icons';
const {Text} = Typography;


class Experience extends Component {

    render() {
        return (
            <>
                <Timeline>
                    <Timeline.Item>
                        <Text style={{fontSize:'25px'}}>Tata Consultancy Sevices</Text><br/>
                        <Text style={{fontSize:'18px'}} underline>Full Stack developer</Text><br/>
                        <Text>Indore &nbsp;&nbsp; July 2019 - Present</Text><br/>
                        <div style={{display:'flex',marginTop:'9px'}}>
                            <SendOutlined style={{marginTop:'5px',marginRight:'5px'}}/><Text>Responsible for development of web application using MERN stack.</Text>
                        </div>
                        <div style={{display:'flex'}}>
                            <SendOutlined style={{marginTop:'5px',marginRight:'5px'}}/><Text>Worked in complete Agile environment .</Text>
                        </div>
                        <div style={{display:'flex'}}>
                            <SendOutlined style={{marginTop:'5px',marginRight:'5px'}}/><Text>Developed RESTful API's using express.js.</Text>
                        </div>
                        <div style={{display:'flex'}}>
                            <SendOutlined style={{marginTop:'5px',marginRight:'5px'}}/><Text>Implemented Unit testing using jest and enzyme frameworks.</Text>
                        </div>
                        <div style={{display:'flex'}}>
                            <SendOutlined style={{marginTop:'5px',marginRight:'5px'}}/><Text>Handled deployment of application in Azure cloud.</Text>
                        </div>
                    </Timeline.Item>

                    <Timeline.Item>
                        <Text style={{fontSize:'25px'}}>Accenture</Text><br/>
                        <Text style={{fontSize:'18px'}} underline>Full Stack developer</Text><br/>
                        <Text>Indore &nbsp;&nbsp; July 2019 - Present</Text><br/>
                        <div style={{display:'flex',marginTop:'9px'}}>
                            <SendOutlined style={{marginTop:'5px',marginRight:'5px'}}/><Text>Responsible for development of web application using MERN stack.</Text>
                        </div>
                        <div style={{display:'flex'}}>
                            <SendOutlined style={{marginTop:'5px',marginRight:'5px'}}/><Text>Worked in complete Agile environment .</Text>
                        </div>
                        <div style={{display:'flex'}}>
                            <SendOutlined style={{marginTop:'5px',marginRight:'5px'}}/><Text>Developed RESTful API's using express.js.</Text>
                        </div>
                        <div style={{display:'flex'}}>
                            <SendOutlined style={{marginTop:'5px',marginRight:'5px'}}/><Text>Implemented Unit testing using jest and enzyme frameworks.</Text>
                        </div>
                        <div style={{display:'flex'}}>
                            <SendOutlined style={{marginTop:'5px',marginRight:'5px'}}/><Text>Handled deployment of application in Azure cloud.</Text>
                        </div>
                    </Timeline.Item>
                    
                    
                </Timeline>
            </>
        )
    }
}

export default Experience
