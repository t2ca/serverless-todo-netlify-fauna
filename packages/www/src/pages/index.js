import React, { useEffect } from 'react';
import { Container, Heading, Button, Flex } from 'theme-ui';
import netlifyIdentity from 'netlify-identity-widget';

export default (props) => {
  useEffect(() => {
    netlifyIdentity.init({});
  });
  return (
    <Container>
      <Flex sx={{ flexDirection: 'column', p: 3 }}>
        <Heading>hello world</Heading>
        <Button
          sx={{ mt: 3 }}
          onClick={() => {
            netlifyIdentity.open();
          }}
        >
          Login
        </Button>
      </Flex>
    </Container>
  );
};
