import { Link } from 'react-router-dom';

import { Container } from '../components/container';
import { Title } from '../components/title';
import { Description } from '../components/description';
import { Button } from '../components/button';

const HomePage = () => {
  return (
    <Container className="flex flex-col justify-end">
      <main>
        <Title>Welcome to PopX</Title>
        <Description className="mt-2.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </Description>
        <div className="flex flex-col gap-y-2.5 mt-7">
          <Button variant="primary" className="w-full" asChild>
            <Link to="/login">Create Account</Link>
          </Button>
          <Button variant="secondary" className="w-full">
            <Link to="/register">Already Registered? Login</Link>
          </Button>
        </div>
      </main>
    </Container>
  );
};
export { HomePage };
