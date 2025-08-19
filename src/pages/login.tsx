import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from '../components/container';
import { Title } from '../components/title';
import { Description } from '../components/description';
import { Button } from '../components/button';
import { Input } from '../components/input';

type FormState = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<FormState>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    navigate('/profile');
  };

  return (
    <Container>
      <section className="flex flex-col space-y-2.5">
        <Title>Signin to your PopX account</Title>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Description>
      </section>
      <section className="mt-7">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-6">
            <Input
              type="email"
              label="Email Address"
              placeholder="Enter email address"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              label="Password"
              placeholder="Enter password"
              required
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <Button
            type="submit"
            variant="primary"
            className="w-full mt-3.5"
            disabled={!form.email || !form.password}
          >
            Login
          </Button>
        </form>
      </section>
    </Container>
  );
};

export { LoginPage };
