export const handler = async (event) => {
  try {
    const keyword = event.queryStringParameters.keyword;
    const name = 'Rishitha';
    const response = `${name} says ${keyword}`;

    return {
      statusCode: 200,
      body: JSON.stringify(response)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' })
    };
  }
};
