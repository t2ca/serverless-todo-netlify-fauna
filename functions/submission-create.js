const fetch = require('node-fetch');

exports.handler = async (event) => {
  console.log(event);
  const body = JSON.parse(event.body);
  const { firstname, lastname, email } = body;

  const response = await fetch('https://graphql.fauna.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_API}`
    },
    body: JSON.stringify({
      query: `
        mutation($name: String!, $email: String!) {
          createRegistration(data: { name: $name, email: $email }) {
            _id
          }
        }
      `,
      variables: {
        name: `${firstname} ${lastname}`,
        email
      }
    })
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

  console.log(response);

  return {
    statusCode: 200,
    body: 'boop'
  };
};
