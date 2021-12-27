interface Idata{
  title: string,
  links: ILink[],
  
}

interface ILink{
  name: string,
  link: string,
  description: string,
  search?: boolean,
}

export const data:Idata = {
  title: 'Welcome To PXG API',
  links: [
    {
      name: 'All Pokemon',
      link: 'https://pokeapi.co/api/v2/pokemon',
      description: 'Lista de todos los pokemones de nuestra base de datos',
      search: false,
    },
    {
      name: 'Search Pokemon',
      link: 'https://pxg-api.herokuapp.com/api/pokemon/charizard',
      description: 'Busca pokemons en especifico',
      search: true,
    }
  ]
}