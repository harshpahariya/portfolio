import React, { Component } from 'react'
import { Image } from 'antd'
import john from './../../assets/john.png'
import avatar from './../../assets/avatar.png'
import { GithubOutlined, LinkedinOutlined, TwitterOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd';

class Info extends Component {
    render() {
        return (
            <>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Image width={200} height={200} src={john} fallback={avatar} />
                    <div style={{ textAlign: 'center' }}>
                        <h1>Hi, I am John Doe</h1>  <br />
                        <h3>Full stack developer</h3>
                    </div>
                </div>
                <div style={{left:'40%', position:'absolute', bottom:'0', marginBottom:'10vh'}}>
                    <h4 style={{textAlign:'center'}}>Contact me</h4>
                    <div style={{ marginTop: '8vh' }}>
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
                </div>
            </>
        )
    }
}

export default Info
