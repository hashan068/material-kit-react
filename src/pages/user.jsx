import { Helmet } from 'react-helmet-async';
import UserView from 'src/sections/user/view';

const UserPage = () => (
  <>
    <Helmet>
      <title>User | Minimal UI</title>
    </Helmet>
    <UserView />
  </>
);

export default UserPage;

