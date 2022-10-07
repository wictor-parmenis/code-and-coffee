import React, { useEffect, useState } from 'react'
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
import { api } from '../../../services/api'
import { endpoints } from '../../../services/endpoints'
import Link from '../../Link'

export interface IProfile {
  avatar_url: string
  name: string
  bio: string
  followers: number
  company: string
  login: string
}

const BioCard = () => {
  const [profile, setProfile] = useState({} as IProfile)

  useEffect(() => {
    const getInfoProfile = async () => {
      const profile = await api.get(endpoints.getUser())
      setProfile(profile.data)
    }

    getInfoProfile()
  }, [])

  return (
    <CardContainer>
      <ProfileContainer>
        <img src={profile.avatar_url} alt="profile author" />
      </ProfileContainer>
      <Content>
        <HeaderCard>
          <TitleCard>{profile.name}</TitleCard>
          <Link>GITHUB</Link>
        </HeaderCard>
        <DescriptionText>{profile.bio}</DescriptionText>
        <FooterCard>
          <Info>
            <img src={GitHubIcon} alt="" />
            <DescriptionText>{profile.login}</DescriptionText>
          </Info>
          <Info>
            <img src={BuildingIcon} alt="" />
            <DescriptionText>{profile.company}</DescriptionText>
          </Info>
          <Info>
            <img src={UserGroupIcon} alt="" />
            <DescriptionText>{profile.followers} seguidores</DescriptionText>
          </Info>
        </FooterCard>
      </Content>
    </CardContainer>
  )
}

export default BioCard
