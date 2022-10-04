import React from 'react'
import BioCard from '../../components/Cards/BioCard'
import { PostsContainer } from './styles'

// import { Container } from './styles';

const Posts: React.FC = () => {
  return (
    <PostsContainer>
      <BioCard />
    </PostsContainer>
  )
}

export default Posts
