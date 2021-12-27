import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import Input from '../Input/Input';
import { Img } from '../CardList/Card.styles';


interface Iprops {
  name: string;
  link: string,
  description: string;
  search?: boolean;
}

const Acard = ({ link, name, description, search }: Iprops) => {

  const getARandomNumber = (min = 1, max = 898):string => {
    const id = Math.floor(Math.random() * (max - min + 1)) + min;
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  }

  const [pokemon, setPokemon] = useState('');

  return (
    <>
      <Card 
        sx={{ 
          maxWidth: 345,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
          margin: '1rem',
        }}
        onClick={() => !search? window.open('https://pxg-api.herokuapp.com/api/pokemon', '_blank') : null}
      >
        <Img src={getARandomNumber()} alt="All Pokemons" />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center'}}>
            {name}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center'}}>
            {description}
          </Typography>

        </CardContent>
        {
          search? <Input pokemon={pokemon} setPokemon={setPokemon}/> : null
        }
      </Card>
    </>
  )
}

export default Acard
