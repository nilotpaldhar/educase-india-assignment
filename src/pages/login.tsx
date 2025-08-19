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

  const isInvalid = !form.email || !form.password;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isInvalid) return;
    navigate('/profile');
  };

  return (
    <Container>
      <section className="flex flex-col gap-y-2.5">
        <Title>Signin to your PopX account</Title>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Description>
      </section>
      <section className="mt-7">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-6">
            <Input
              type="email"
              id="email"
              name="email"
              label="Email Address"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email address"
              required
            />
            <Input
              type="password"
              id="password"
              name="password"
              label="Password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </div>
          <Button type="submit" variant="primary" className="w-full mt-3.5" disabled={isInvalid}>
            Login
          </Button>
        </form>
      </section>
    </Container>
  );
};

export { LoginPage };
