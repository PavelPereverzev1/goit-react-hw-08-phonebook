import { useEffect } from 'react';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import InputForm from 'components/InputForm/InputForm';
import { useAuth } from 'hooks/useAuth';
import { fetchContacts } from 'redux/contacts/operation';
import { useDispatch } from 'react-redux';

const Contacts = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    isLoggedIn && dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);


  return (
    <>
      <InputForm />
      <Filter />
      <ContactsList />
    </>
  );
};

export default Contacts;
