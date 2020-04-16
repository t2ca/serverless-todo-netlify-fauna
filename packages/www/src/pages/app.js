import React, { useContext } from 'react';
import { Heading, Button, Flex } from 'theme-ui';
import { Router } from '@reach/router';
// import { IdentityContext } from '../../identity-context';

let Dash = () => {
  const { user } = useContext(IdentityContext);

  return <div>Dash hasUser: {user && user.user_metadata.full_name}</div>;
};

// let DashLoggedOut = (props) => {
//   const { netlifyIdentity } = useContext(IdentityContext);
//   return (
//     <Flex sx={{ flexDirection: 'column', p: 3 }}>
//       <Heading as="h1">Get Stuff Done</Heading>
//       <Button
//         sx={{ mt: 2 }}
//         onClick={() => {
//           netlifyIdentity.open();
//         }}
//       >
//         Button
//       </Button>
//     </Flex>
//   );
// };

export default (props) => {
  return (
    <Router>
      <Dash path="/app" />
    </Router>
  );
};
