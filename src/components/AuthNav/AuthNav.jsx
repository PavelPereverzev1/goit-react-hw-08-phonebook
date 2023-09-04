import { StyledLink } from './AuthNav.styled';
import { Nav } from './AuthNav.styled';

const AuthNav = () => { return (
    <Nav>
      <StyledLink  to="/register">
        Register
      </StyledLink>
      <StyledLink to="/login">
        Log In
      </StyledLink>
    </Nav>
  );}

export default AuthNav;