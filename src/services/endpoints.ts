const { VITE_REACT_APP_USERNAME, VITE_REACT_APP_REPO_BLOG } = import.meta.env

console.log(VITE_REACT_APP_USERNAME, 'USERNAME')

export const endpoints = {
  getPosts: (query: string) =>
    `/search/issues?q=${query}repo:wictor-parmenis/${VITE_REACT_APP_REPO_BLOG}`,
  getUser: () => `/users/${VITE_REACT_APP_USERNAME}`,
}

/*
Atenção: A API do GitHub possui um limite de 10 requisições por minuto caso você não 
configure uma chave privada.
Você pode ter gratuitamente até 30 requisições por minuto configurando uma chave privada, 
você pode ver pela documentação: https://docs.github.com/pt/rest/search#rate-limit
*/
