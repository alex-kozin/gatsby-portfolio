import React from "react"
import { Link } from "gatsby"
import {StyledHeader, StyledHome} from "./Header.styles"

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/" aria-label="home">
        <StyledHome>Home</StyledHome>
      </Link>
    </StyledHeader>
  )
}

export default Header