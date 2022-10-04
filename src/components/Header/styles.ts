import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-image: linear-gradient(
    10deg,
    ${({ theme }) => theme.blue},
    ${({ theme }) => theme['base-profile']}
  );
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin: auto;
    margin-top: 2rem;
  }
`
