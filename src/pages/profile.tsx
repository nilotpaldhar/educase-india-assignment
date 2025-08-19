import { Container } from '../components/container';
import { ProfileAvatar } from '../components/profile-avatar';

const Profile = () => {
  return (
    <Container className="p-0">
      <header className="bg-white px-4 pt-6 pb-5 shadow-[0px_3px_6px_#00000007]">
        <h1 className="text-lg">Account Settings</h1>
      </header>
      <section className="flex flex-col gap-y-[30px] px-5 mt-[30px]">
        <div className="flex gap-5 items-center">
          <ProfileAvatar />
          <div className="">
            <h2 className="font-medium text-[15px]">Marry Doe</h2>
            <p className="text-sm">Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="text-sm">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor
          Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </section>
    </Container>
  );
};

export { Profile };
