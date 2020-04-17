import React, { useContext } from 'react';

import { IdentityContext } from '../../identity-context';

export default () => {
  const { user } = useContext(IdentityContext);

  return <div>Dash hasUser: {user && user.user_metadata.full_name}</div>;
};
