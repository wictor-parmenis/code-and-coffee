import React from 'react'
import BioCard from '../../components/Cards/BioCard'
import { PostsContainer, Space } from './styles'
import Feed from './_components/Feed'
import SearchPosts from './_components/SearchPosts'

// import { Container } from './styles';

const Posts: React.FC = () => {
  return (
    <PostsContainer>
      <BioCard />
      <Space heigth="5rem" />
      <SearchPosts />
      <Feed />
    </PostsContainer>
  )
}

export default Posts
