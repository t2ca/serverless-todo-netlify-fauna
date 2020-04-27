exports.handler = async (event) => {
  console.log(event);
  const body = JSON.parse(event.body);
  const { firstname, lastname, email } = body;

  return {
    statusCode: 200,
    body: 'test'
  };
};
