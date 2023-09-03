import Contact from 'components/Contact/Contact';
import { Container } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(contacts);
  console.log(filter)

  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <Container>
      {filtredContacts.map(({ id, name, phone }) => {
        return (
          <Contact key={id} id={id} name={name} phone={phone} />
        );
      })}
    </Container>
  );
};

export default ContactsList;
