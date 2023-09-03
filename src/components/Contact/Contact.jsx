import PropTypes from 'prop-types';
import { Container } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operation';

const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <span className="name">{name} :</span>
      <span className="number">{phone}</span>
      <button
        id={id}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </Container>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
};
