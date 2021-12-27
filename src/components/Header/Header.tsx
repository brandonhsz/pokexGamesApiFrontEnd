import { data } from '../../static/data';
import { Container, Title } from './Header.styled';

const Header = () => {
	const { title } = data;

	return (
		<Container>
			<Title>{title}</Title>
		</Container>
	);
};

export default Header;
