import React from 'react'
import {
  ContentCardPost,
  HeaderCardPost,
  InfoPost,
  PostCardContainer,
  TitlePost,
} from './styles'

// import { Container } from './styles';

const PostCard: React.FC = () => {
  return (
    <PostCardContainer>
      <HeaderCardPost>
        <TitlePost>oi</TitlePost>
        <InfoPost>olá</InfoPost>
      </HeaderCardPost>
      <ContentCardPost>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
        possimus, consequuntur fuga ipsa, rerum eaque laudantium atque accusamus
        soluta ex distinctio id neque beatae, nisi magnam repudiandae eius iste
        reiciendis.
      </ContentCardPost>
    </PostCardContainer>
  )
}

export default PostCard
