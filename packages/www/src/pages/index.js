import React from 'react';
import { Container, Heading, Button, Flex } from 'theme-ui';

export default (props) => {
  return (
    <Container>
      <Flex sx={{ flexDirection: 'column', p: 3 }}>
        <Heading>hello world</Heading>
        <Button
          sx={{ mt: 3 }}
          onClick={() => {
            alert('clicked');
          }}
        >
          Login
        </Button>
      </Flex>
    </Container>
  );
};
