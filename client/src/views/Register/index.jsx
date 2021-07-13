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
      <Form
        value={form}
        onChange={(newValue) => setForm(newValue)}
        onSubmit={handleSubmit}
      >
        <FormField
          name="email-label"
          htmlFor="email"
          label={form.email && 'email'}
          required={!form.email}
        >
          <TextInput type="email" name="email" placeholder="email" />
        </FormField>
        <FormField
          name="username-label"
          htmlFor="username"
          label={form.username && 'username'}
          required={!form.username}
        >
          <TextInput type="text" name="username" placeholder="username" />
        </FormField>
        <FormField
          name="password-label"
          htmlFor="password"
          label={form.password && 'password'}
          required={!form.password}
        >
          <TextInput type="password" name="password" placeholder="password" />
        </FormField>
        <FormField
          name="confirm-password-label"
          htmlFor="confirm-password"
          label={form.confirmPassword && 'confirm password'}
          required={!form.confirmPassword}
        >
          <TextInput
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
          />
        </FormField>
        <Button
          type="submit"
          pad="small"
          label="Register"
          disabled={!validPassword}
        ></Button>
      </Form>
    </>
  );
};

export default Register;
