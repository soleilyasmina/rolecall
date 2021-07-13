import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from 'context';
import { Form, FormField, TextInput, Button } from 'grommet';
import { login } from 'services';

const Login = () => {
  const { setUser } = useContext(Context);
  const history = useHistory();

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(form);
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
        <Button type="submit" pad="small" label="Login"></Button>
      </Form>
    </>
  );
};

export default Login;
