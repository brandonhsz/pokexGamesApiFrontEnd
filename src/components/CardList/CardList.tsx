import { data } from '../../static/data';
import Acard from './Card';
import { Container } from './Card.styles';


const CardList = () => {

  const { links } = data
  console.log(links)
  return (
    <Container>
      {
        links.map(d => (
          <Acard
            key={d.name + d.link}
            name={d.name}
            link={d.link}
            description={d.description}
            search={d.search}
          />
        ))
      }
    </Container>
  )
}

export default CardList
