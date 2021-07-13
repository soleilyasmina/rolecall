import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from 'context';
import { Form, FormField, TextInput, Button } from 'grommet';
import { register } from 'services';

const Register = () => {
  const { setUser } = useContext(Context);
  const history = useHistory();
  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [validPassword, setValidPassword] = useState(false);

  useEffect(() => {
    if (!form.password || !form.confirmPassword) {
      setValidPassword(false);
    } else if (form.password !== form.confirmPassword) {
      setValidPassword(false);
    } else {
      setValidPassword(true);
    }
  }, [form.password, form.confirmPassword]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(form);
    if (user) {
      setUser(user);
      history.push('/dashboard');
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormField
          name="email-label"
          htmlFor="email"
          label={form.email && 'email'}
        >
          <TextInput
            type="email"
            name="email"
            placeholder="email"
            value={form.email}
            onChange={handleChange}
          />
        </FormField>
        <FormField
          name="username-label"
          htmlFor="username"
          label={form.username && 'username'}
        >
          <TextInput
            type="text"
            name="username"
            placeholder="username"
            value={form.username}
            onChange={handleChange}
          />
        </FormField>
        <FormField
          name="password-label"
          htmlFor="password"
          label={form.password && 'password'}
        >
          <TextInput
            type="password"
            name="password"
            placeholder="password"
            value={form.password}
            onChange={handleChange}
          />
        </FormField>
        <FormField
          name="confirm-password-label"
          htmlFor="confirm-password"
          label={form.confirmPassword && 'confirm password'}
        >
          <TextInput
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </FormField>
        <Button pad="small" label="Submit" disabled={!validPassword}></Button>
      </Form>
    </>
  );
};

export default Register;
