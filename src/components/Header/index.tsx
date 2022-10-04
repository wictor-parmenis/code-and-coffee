import React from 'react'
import { HeaderContainer, HeaderContent } from './styles'
import Logo from '../../assets/logo.svg'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
