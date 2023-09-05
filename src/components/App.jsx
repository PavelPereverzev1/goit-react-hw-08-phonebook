import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import Loader from './Loader/Loader';
import { fetchContacts } from 'redux/contacts/operation';
import RestrictedRoute from './RestrictedRout';
import PrivateRoute from './PrivateRoute';


const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
    isLoggedIn && dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />
        <Route path="/contacts" element={<PrivateRoute component={ContactsPage} redirectTo="/login" />} />
      </Route>
    </Routes>
  );
};

export default App;
