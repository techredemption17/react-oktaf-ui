import { Layout } from 'antd'
import { Header } from '../../components'
import Sidebar from '../../components/sidebar'
import React, { ReactNode } from 'react'

interface LayoutAdminProps {
  children?: ReactNode
}

class LayoutAdmin extends React.Component<LayoutAdminProps> {
  render(): ReactNode {
    return (
      <Layout>
        <Header />
        <Layout className='layout-wrapper'>
          <Sidebar />
          <Layout.Content>{this.props.children}</Layout.Content>
        </Layout>
      </Layout>
    )
  }
}

export default LayoutAdmin
