import React from 'react'
import { LinkContainer, LinkText } from './styles'
import LinkIcon from '../../assets/link.svg'
// import { Container } from './styles';

interface ILink {
  children: React.ReactNode
}

const Link: React.FC<ILink> = ({ children }) => {
  return (
    <LinkContainer>
      <LinkText>{children}</LinkText>
      <img src={LinkIcon} alt="" width="14rem" />
    </LinkContainer>
  )
}

export default Link
