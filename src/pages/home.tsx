import { Link } from 'react-router-dom';

import { Container } from '../components/container';
import { Title } from '../components/title';
import { Description } from '../components/description';
import { Button } from '../components/button';

const HomePage = () => {
  return (
    <Container className="flex flex-col justify-end">
      <main>
        <section className="flex flex-col space-y-2.5">
          <Title>Welcome to PopX</Title>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Description>
        </section>
        <section className="flex flex-col gap-y-2.5 mt-7">
          <Button variant="primary" className="w-full" asChild>
            <Link to="/register">Create Account</Link>
          </Button>
          <Button variant="secondary" className="w-full">
            <Link to="/login">Already Registered? Login</Link>
          </Button>
        </section>
      </main>
    </Container>
  );
};
export { HomePage };
