import React from 'react'
import { Menu, MenuProps } from 'antd'
import Icon from '../icon'

// eslint-disable-next-line no-empty-pattern
const Sidebar: React.FC<any | undefined> = ({}) => {
  const siderOpen: boolean = false
  const items: MenuProps['items'] = [
    {
      key: 'home',
      label: 'Home',
      icon: <Icon name='/assets/icons/icon-home-3' iconColor='#5E6278' iconSize='18px' marginRight={10} />,
    },
  ]
  return (
    <div className={`custom-sider${siderOpen ? ' custom-sider-open' : ''}`}>
      <div className='sider-left'>
        <Menu
          mode='inline'
          items={items}
          selectedKeys={[]}
          openKeys={[]}
          // onClick={(params) => this.handleMenuClick(params)}
          // onOpenChange={(keys) => this.handleOpenMenu(keys)}
        />
      </div>
    </div>
  )
}

export default Sidebar
