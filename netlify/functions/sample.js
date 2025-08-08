exports.handler = async (event) => {
  const functionCode = `function task(x) { return x * Math.pow(this, 2); }`;
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
    body: functionCode,
  };
};
