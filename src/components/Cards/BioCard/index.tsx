import React from 'react'
import {
  CardContainer,
  Content,
  DescriptionCard,
  FooterCard,
  HeaderCard,
  Info,
  ProfileContainer,
  TitleCard,
} from './styles'

const BioCard: React.FC = () => {
  return (
    <CardContainer>
      <ProfileContainer>
        <img src="" alt="profile author" />
      </ProfileContainer>
      <Content>
        <HeaderCard>
          <TitleCard>Nome</TitleCard>
          <a href="">link</a>
        </HeaderCard>
        <DescriptionCard>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          consequuntur nobis placeat aliquid sed sint error, tempore voluptate
          cupiditate impedit velit itaque asperiores nisi ratione voluptatibus
          labore debitis repudiandae vero?
        </DescriptionCard>
        <FooterCard>
          <Info></Info>
          <Info></Info>
          <Info></Info>
        </FooterCard>
      </Content>
    </CardContainer>
  )
}

export default BioCard
