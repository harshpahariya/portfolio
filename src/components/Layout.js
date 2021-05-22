import { Layout, Menu, Avatar } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import './layout.css';
import Skills from './Skills';
import Info from './Info';
import Experience from './Experience';
import { Switch, Link, Route } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

class MyLayout extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout style={{ height: '657px' }}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo">{this.state.collapsed ? "John" : "John Doe"}</div>
                    <div className="avatar"><Avatar size={this.state.collapsed ? 50 : 90} icon={<UserOutlined />} />J</div>

                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to='/'>
                                My Info
                        </Link>
                        </Menu.Item>


                        <Menu.Item key="2" icon={<UserOutlined />}>
                            <Link to='/skills'>
                                Skills
                        </Link>
                        </Menu.Item>

                        <Menu.Item key="3" icon={<VideoCameraOutlined />}>
                            <Link to='/experience'>
                                Experience
                    </Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<UploadOutlined />}>
                            <Link to='/education'>
                                Education
                    </Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<UploadOutlined />}>
                            Projects
                    </Menu.Item>

                    </Menu>

                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            <Route path='/' exact component={Info} />
                            <Route path='/skills' component={Skills} />
                            <Route path='/experience' component={Experience} />
                        </Switch>

                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default MyLayout;
