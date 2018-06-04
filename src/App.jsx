import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Provider } from 'react-redux';
import i18n from './i18n'
import 'antd/dist/antd.css'
import './style/App.scss'
import store from './redux/store'
import { getUserInfo } from './redux/action'

const { Header, Sider, Content } = Layout

class App extends Component {
  state = {
    collapsed: false,
    userInfo: {}
  }

  componentWillMount() {
    const vm = this
    const { store } = vm.context
    console.log(store)

    // store.dispatch(getUserInfo()).then(() => {
    //     const resData = store.getState().resData
    //     console.log(resData)
    //     if (resData.json) {
    //         vm.setState({
    //             userInfo: resData.json
    //         })
    //     }
    // })
  }

  toggle = () => {
    const vm = this
    vm.setState({
      collapsed: !vm.state.collapsed
    })
  }

  render() {
    const vm = this
    const { userInfo } = vm.state
    return (
      <Provider store={store}>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              Content
          </Content>
          </Layout>
        </Layout>
      </Provider>
    )
  }
}

export default App
