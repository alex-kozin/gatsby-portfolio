import React from "react"

import Header from "components/Header"
import { StyledLayout } from "./Layout.styles"

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <main id="main-content">{children}</main>
    </StyledLayout>
  )
}

export default Layout