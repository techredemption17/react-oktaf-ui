import { Layout } from 'antd'
import { Header } from '../../components'
import Sidebar from '../../components/sidebar'
import React, { ReactNode } from 'react'

interface LayoutSingleProps {
  children?: ReactNode
}

class LayoutSingle extends React.Component<LayoutSingleProps> {
  render() {
    return (
      <Layout>
        <Header />
        <Layout className='layout-wrapper'>
          <Sidebar />
          <Layout.Content className='layout-crud-page'>{this.props.children}</Layout.Content>
        </Layout>
      </Layout>
    )
  }
}

export default LayoutSingle
