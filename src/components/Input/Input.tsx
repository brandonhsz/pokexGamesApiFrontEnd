import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

interface Iprops {
  pokemon: string;
  setPokemon: (pokemon: string) => void;
}

const Input = ({setPokemon, pokemon}: Iprops) => {
  return (
    <>
      <TextField
        id="filled-basic" 
        label="Search" 
        variant="filled"
        onChange={e => setPokemon(e.target.value)}
      />
      <Button
        sx={{
          margin: '0.5rem',
        }}
        variant="contained" 
        color="primary"
        onClick={() => window.open(`https://pxg-api.herokuapp.com/api/pokemon/${pokemon}`, '_blank')}
      >Search</Button>
    </>
  )
}

export default Input
