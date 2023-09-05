import Contact from 'components/Contact/Contact';
import { Container } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <Container>
      {filtredContacts.map(({ id, name, number }) => {
        return (
          <Contact key={id} id={id} name={name} phone={number} />
        );
      })}
    </Container>
  );
};

export default ContactsList;
