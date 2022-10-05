import React from 'react'
import {
  CardContainer,
  Content,
  DescriptionText,
  FooterCard,
  HeaderCard,
  Info,
  ProfileContainer,
  TitleCard,
} from './styles'
import GitHubIcon from '../../../assets/github.svg'
import BuildingIcon from '../../../assets/building.svg'
import UserGroupIcon from '../../../assets/user-group.svg'

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
        <DescriptionText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          consequuntur nobis placeat aliquid sed sint error, tempore voluptate
          cupiditate impedit velit itaque asperiores nisi ratione voluptatibus
          labore debitis repudiandae vero?
        </DescriptionText>
        <FooterCard>
          <Info>
            <img src={GitHubIcon} alt="" />
            <DescriptionText>Profile</DescriptionText>
          </Info>
          <Info>
            <img src={BuildingIcon} alt="" />
            <DescriptionText>Repository</DescriptionText>
          </Info>
          <Info>
            <img src={UserGroupIcon} alt="" />
            <DescriptionText>Profile</DescriptionText>
          </Info>
        </FooterCard>
      </Content>
    </CardContainer>
  )
}

export default BioCard
