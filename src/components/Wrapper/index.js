import React, { Component } from 'react'
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import './style.less'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Wrapper extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props);

    return (
      <div id="wrapper">
        <Layout>
          <Header className="header">
            <div className="logo">BLUEBOX</div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="sub1" title={<span><Icon type="laptop" />营销中心</span>}>
                  <Menu.Item key="1">会议活动</Menu.Item>
                  <Menu.Item key="2">推广活动</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>营销中心</Breadcrumb.Item>
                <Breadcrumb.Item>会议活动</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{
                background: '#fff', padding: 24, margin: 0, minHeight: 280,
              }}
              >
                { this.props.children }
              </Content>
            </Layout>
          </Layout>
        </Layout>
        
      </div>

    )
  }

}