const axios = require('axios');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const apiEndpoint = 'https://rmiyyswdd2zk3bi2lzzkmerfvm0opoum.lambda-url.us-east-2.on.aws/'; 


app.get('/say', async (req, res) => {
  try {
   
    const { keyword } = req.query;

   
    const response = await axios.get(`${apiEndpoint}?keyword=${keyword}`);

    // Sending back the response from the Lambda function
    res.send(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
