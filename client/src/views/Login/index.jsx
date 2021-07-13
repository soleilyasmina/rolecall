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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
      <Form onSubmit={handleSubmit}>
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
        <Button pad="small" label="Submit"></Button>
      </Form>
    </>
  );
};

export default Login;
