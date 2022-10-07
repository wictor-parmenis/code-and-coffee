import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { api } from '../../../../services/api'
import { endpoints } from '../../../../services/endpoints'
import {
  Info,
  InfoContainer,
  SearchInput,
  SearchPostsContainer,
  Subtitle,
} from './styles'
import * as zod from 'zod'

const searchPostSchema = zod.object({
  query: zod.string(),
})

type ISearchPostValidator = zod.infer<typeof searchPostSchema>

const SearchPosts: React.FC = () => {
  const { register, handleSubmit } = useForm()

  const handleSearchPost = async ({
    query,
  }: ISearchPostValidator | FieldValues) => {
    // const resultPost = await api.get(endpoints.getPosts(query))
    // console.log(resultPost)
  }

  return (
    <SearchPostsContainer>
      <InfoContainer>
        <Subtitle>Publicações</Subtitle>
        <Info>6 publicações</Info>
      </InfoContainer>
      <SearchInput
        placeholder="Buscar conteúdo"
        type="text"
        {...register('post')}
        onKeyDown={(e) =>
          e.code === 'Enter' &&
          handleSubmit((values) => handleSearchPost(values))
        }
      />
    </SearchPostsContainer>
  )
}

export default SearchPosts
