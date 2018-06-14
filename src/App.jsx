import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { addLocaleData, IntlProvider } from 'react-intl'
import { Provider } from 'react-redux';
import store from './redux/store'
import i18n from './i18n'
import { Router, Route } from 'react-router-dom'
import createHistory from 'history/createHashHistory'
import 'antd/dist/antd.css'
import './style/App.scss'

import PageNav from './components/part/nav'
import PageRouter from './router'

const history = createHistory()
addLocaleData(i18n.getData().data)

class App extends Component {
  state = {
    collapsed: false
  }

  componentWillMount() {
    const vm = this
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
        <Router history={history}>
          {
            Object.keys(PageRouter).map(item => {
              const Page = PageRouter[item]
              const Current = () => (
                <Layout className="App ant-layout-has-sider">
                  <PageNav />
                  <Layout>
                    <div className="page-content">
                      <Page />
                    </div>
                  </Layout>
                </Layout>
              )
              return (
                <Route key={item} path={item} component={Current} />
              )
            })
          }
        </Router>
      </Provider>
    )
  }
}

export default App
