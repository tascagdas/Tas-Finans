import PageHeader from '@/components/page-header'
import React from 'react'

const Layout = ({children}) => {
  return (
      <>
          <PageHeader className={"my-8"} />
          <main>{children}</main>
          <footer>Footer</footer>
    </>
  )
}

export default Layout