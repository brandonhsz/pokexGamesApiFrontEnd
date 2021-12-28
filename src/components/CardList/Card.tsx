import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import Input from './Input';
import { Img } from './Card.styles';
import Helpers from '../../helpers/helpers';

interface Iprops {
  name: string;
  link: string,
  description: string;
  search?: boolean;
}

const Acard = ({ link, name, description, search }: Iprops) => {



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
        onClick={() => !search? window.open(link, '_blank') : null}
      >
        <Img src={Helpers.getArandomNumber()} alt="All Pokemons" />

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
