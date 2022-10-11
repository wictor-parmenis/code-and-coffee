import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostTitleCard from '../../components/Cards/PostTitleCard'
import { api } from '../../services/api'
import { endpoints } from '../../services/endpoints'
import { PostContainer } from './styles'
import { getTimePosting } from '../../utils/getTimePosting'
import Article from './_components/Article'
interface IPost {
  number: number
  title: string
  htmlUrl: string
  body: string
  comments: number
  createdAt: string
}

const Post: React.FC = () => {
  const { numberPost } = useParams()
  const [post, setPost] = useState<IPost>()

  useEffect(() => {
    const getPost = async () => {
      const { data: resultPost } = await api.get(
        endpoints.getPost(`${numberPost}`),
      )
      const {
        body,
        comments,
        created_at: createdAt,
        html_url: htmlUrl,
        number,
        title,
      } = resultPost

      setPost({ body, comments, createdAt, htmlUrl, number, title })
    }
    getPost()
  }, [numberPost])

  const timePosting = post?.createdAt ? getTimePosting(post?.createdAt) : ''
  const numberComments =
    post?.comments === 1 ? '1 comentário' : `${post?.comments} comentários`

  return (
    <PostContainer>
      {!post && <></>}
      {post && post.body && (
        <>
          <PostTitleCard
            comments={post.comments ? numberComments : '0 comentários'}
            htmlUrl={post.htmlUrl}
            timePosting={timePosting}
            title={post.title}
          />
          <Article article={post.body} />
        </>
      )}
    </PostContainer>
  )
}

export default Post
