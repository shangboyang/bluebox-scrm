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
    this.state = {
      collapsed: false,
    }
    this.goHandler = this.goHandler.bind(this);
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  goHandler() {
    const router = this.props.router;
    router.push('/list')
  }

  render() {
    console.log(this.props);
    const self = this;
    const {
      navs
    } = this.props
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
          <Layout style={{ minHeight: '100vh' }}>
            <Sider 
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
              >
              <Menu
                mode="inline"
                theme="dark"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0}}
              >
                <SubMenu key="sub1" title={<span><Icon type="laptop" /><span>营销中心</span></span>}>
                  <Menu.Item key="1" onClick={this.goHandler}>推广活动</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>


            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0', fontSize: '12px' }}>
                {
                  navs && navs.length > 0 && navs.map((item, i) => {
                    return (<Breadcrumb.Item key={i}>{item}</Breadcrumb.Item>)
                  })
                }
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