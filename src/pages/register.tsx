import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../components/button';
import { Container } from '../components/container';
import { Input } from '../components/input';
import { RadioGroup } from '../components/radio-group';
import { Title } from '../components/title';

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  password: string;
  company?: string;
  isAgency: boolean;
};

const RegisterPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: true,
  });

  const isInvalid = !form.fullName || !form.phone || !form.email || !form.password;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (val: string) => {
    setForm(prev => ({ ...prev, isAgency: val === 'yes' }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isInvalid) return;
    navigate('/profile');
  };

  return (
    <Container className="flex flex-col gap-y-7">
      <section>
        <Title>Create your PopX account</Title>
      </section>
      <section className="flex grow">
        <form onSubmit={handleSubmit} className="grow flex flex-col">
          <div className="flex flex-col gap-y-6 grow">
            <Input
              type="text"
              id="fullName"
              name="fullName"
              label="Full Name"
              value={form.fullName}
              onChange={handleInputChange}
              placeholder="Enter full name"
              required
            />
            <Input
              type="text"
              id="phone"
              name="phone"
              label="Phone Number"
              value={form.phone}
              onChange={handleInputChange}
              placeholder="Enter phone number"
              required
            />
            <Input
              type="email"
              id="email"
              name="email"
              label="Email Address"
              value={form.email}
              onChange={handleInputChange}
              placeholder="Enter email address"
              required
            />
            <Input
              type="password"
              id="password"
              name="password"
              label="Password"
              value={form.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              required
            />
            <Input
              type="text"
              id="company"
              name="company"
              label="Company Name"
              value={form.company}
              onChange={handleInputChange}
              placeholder="Enter company name"
              required
            />
            <div className="flex flex-col gap-y-3.5">
              <p className="text-sm leading-none">Are you an Agency?</p>
              <RadioGroup
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' },
                ]}
                value={form.isAgency ? 'yes' : 'no'}
                onChange={handleRadioChange}
              />
            </div>
          </div>
          <Button type="submit" variant="primary" className="w-full mt-3.5" disabled={isInvalid}>
            Create Account
          </Button>
        </form>
      </section>
    </Container>
  );
};

export { RegisterPage };
