import { Card, CardContent, Typography } from '@mui/material';
import { paramList } from '../../static/data';
import { InfoDiv } from './Info.styled';
const Info = () => {
  return (
    <InfoDiv>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h6" component="p">
            En el componente de busqueda es posible introducir los siguientes parametros:
          </Typography>
          <ul>
            {
              paramList.map(param => (
                <li key={param}>
                  {param}
                </li>
              ))
            }
          </ul>
        </CardContent>
      </Card>
    </InfoDiv>
  )
}

export default Info
