import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const SubMenu = Menu.SubMenu
const { Sider } = Layout

class PageNav extends Component {
  render() {
    return (
      <Sider
        className="page-menu"
      >
        <Menu
          mode="inline"
        >
          <Menu.Item key="1">
            <Link to="/home">首页</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/about">关于我</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default PageNav
