import React from 'react'
import { Avatar, Button, Dropdown, Layout, Space, Typography, MenuProps } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import HeaderProps from '../../domain/props/HeaderProps'

const Header: React.FC<HeaderProps> = ({
  logo = '/assets/images/main-logo.png',
  avatar = '/assets/images/avatar.png',
}) => {
  const items: MenuProps['items'] = [
    {
      icon: <Avatar shape='square' src={avatar} size='large' />,
      key: 'profile',
      label: (
        <>
          <Typography.Title level={5}>johndoe</Typography.Title>
        </>
      ),
    },
    {
      type: 'divider',
    },
    {
      key: 'signout',
      label: 'Sign Out',
    },
  ]
  const menuProps = {
    items,
  }
  return (
    <Layout.Header>
      <div className='left-section'>
        <a href={'/'} className='main-logo' rel='nofollower'>
          <img src={logo} alt='main-logo' />
        </a>
        <Button icon={<MenuOutlined style={{ color: '#B5B5C3', fontSize: 14 }} rev={undefined} />} />
      </div>
      <div className='right-section'>
        <Space size='large'>
          <Dropdown menu={menuProps}>
            <Avatar src={avatar} size='large' />
          </Dropdown>
        </Space>
      </div>
    </Layout.Header>
  )
}

export default Header
