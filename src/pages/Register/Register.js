import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form } from './Register.styled';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          autoComplete="off"
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          autoComplete="off"
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          autoComplete="off"
        />
      </label>
      <button type="submit">Register</button>
    </Form>
  );
};

export default Register;
