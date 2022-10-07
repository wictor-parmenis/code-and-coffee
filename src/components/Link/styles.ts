import styled from 'styled-components'

export const LinkContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-bottom: 0.5rem;

  border-bottom: 1px solid ${({ theme }) => theme.blue};
`

export const LinkText = styled.a`
  color: ${({ theme }) => theme.blue};
  font-weight: bold;
`

// export const LinkImage = styled.svg`
//   color: ${({ theme }) => theme.blue};
//   background: url(LinkIcon);
// `
