import React from 'react'
import PostCard from '../../../../components/Cards/PostCard'
import { FeedContainer } from './styles'

// import { Container } from './styles';

const Feed: React.FC = () => {
  return (
    <FeedContainer>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </FeedContainer>
  )
}

export default Feed
