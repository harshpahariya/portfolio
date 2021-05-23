import React, { Component } from 'react'
import { Divider, Image,Card } from 'antd'
import john from './../../assets/john.png'
import avatar from './../../assets/avatar.png'
import { GithubOutlined, LinkedinOutlined, TwitterOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons'
import { Tooltip, Typography } from 'antd';
const { Title,Text } = Typography;

class Info extends Component {
    render() {
        return (
            <>
                <Card>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Image width={200} height={200} src={john} fallback={avatar} />
                    <div style={{marginLeft: '10%'}}>
                        <Title style={{marginBottom:'5px'}}>Hi, I am John Doe</Title>
                        <Text style={{fontSize:'25px'}} type="secondary" underline>Full stack developer</Text><br /><br/>
                        <Text type="secondary" style={{fontSize:'20px'}}>Experienced full stack developer with demonstrated history of working in IT /ITeS Companies.</Text>
                    </div>
                </div> 
                </Card>
                <Divider />
                <div style={{display:'flex',flexDirection:'row'}}>
                    <div style={{marginTop:'10vh'}}><Text style={{fontSize:'30px'}} type="secondary" underline>Contact me</Text></div>
                    <div style={{ marginLeft: '14%',display:'flex',flexDirection:'column'}}>
                        <div>
                        <Tooltip title="github">
                            <GithubOutlined style={{ fontSize: '2.5em', margin: '10px', padding: '10px' }} />
                        </Tooltip>
                        <Tooltip title="LinkedIn">
                            <LinkedinOutlined style={{ fontSize: '2.5em', margin: '10px', padding: '10px' }} />
                        </Tooltip>
                        <Tooltip title="Facebook">
                            <FacebookOutlined style={{ fontSize: '2.5em', margin: '10px', padding: '10px' }} />
                        </Tooltip>
                        <Tooltip title="Instagram">
                            <InstagramOutlined style={{ fontSize: '2.5em', margin: '10px', padding: '10px' }} />
                        </Tooltip>
                        <Tooltip title="Twitter">
                            <TwitterOutlined style={{ fontSize: '2.5em', margin: '10px', padding: '10px' }} />
                        </Tooltip>
                        </div>
                   
                    <div>
                        contact
                    </div>
                    </div>
                </div>
                
            </>
        )
    }
}

export default Info
