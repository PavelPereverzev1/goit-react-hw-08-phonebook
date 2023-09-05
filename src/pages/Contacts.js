import { useEffect } from 'react';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import InputForm from 'components/InputForm/InputForm';
import { fetchContacts } from 'redux/contacts/operation';
import { useDispatch } from 'react-redux';

const Contacts = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
     dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <>
      <InputForm />
      <Filter />
      <ContactsList />
    </>
  );
};

export default Contacts;
