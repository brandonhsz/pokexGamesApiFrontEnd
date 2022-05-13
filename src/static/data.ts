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
  title: 'Bienvenido A PXG API',
  links: [
    {
      name: 'All Pokemon',
      link: 'https://pxg-api.herokuapp.com/api/pokemon/',
      description: 'Lista de todos los pokemones de nuestra base de datos',
      search: false,
    },
    {
      name: 'Search Pokemon',
      link: '',
      description: 'Busca pokemons en especifico',
      search: true,
    }
  ]
}

export const paramList: string[] = ['Nombre', 'Numero de pokedex', 'Clan', 'Tipo']
