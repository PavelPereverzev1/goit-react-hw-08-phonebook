import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import InputForm from 'components/InputForm/InputForm';

const Contacts = () => {
  return (
    <>
      <InputForm />
      <Filter />
      <ContactsList />
    </>
  );
};

export default Contacts;
