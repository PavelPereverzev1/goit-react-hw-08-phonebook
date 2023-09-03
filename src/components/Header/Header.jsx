import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { Container } from './Header.styled';
import { useAuth } from 'hooks/useAuth';


const Header = () => {
    const { isLoggedIn } = useAuth();

  return (
    <Container>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Container>
  );
};

export default Header;
