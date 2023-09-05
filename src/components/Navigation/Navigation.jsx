import { StyledLink } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';
import { Nav } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </Nav>
  );
};

export default Navigation;
