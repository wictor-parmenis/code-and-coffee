import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IPostCard } from '../../../context/PostsContext'
import {
  ContentCardPost,
  HeaderCardPost,
  InfoPost,
  PostCardContainer,
  TitlePost,
} from './styles'

interface IPostCardProps {
  postCard: IPostCard
}

const PostCard: React.FC<IPostCardProps> = ({
  postCard: { body, title, postingTime, number },
}) => {
  const navigate = useNavigate()

  return (
    <PostCardContainer onClick={() => navigate(`/post/${number}`)}>
      <HeaderCardPost>
        <TitlePost>{title}</TitlePost>
        <InfoPost>{postingTime}</InfoPost>
      </HeaderCardPost>
      <ContentCardPost>{body.slice(0, 230)}...</ContentCardPost>
    </PostCardContainer>
  )
}

export default PostCard
