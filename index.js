const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

app.post('/api/validate-json', (req, res) => {
  try {
    // Check if the request body is a valid JSON
    JSON.parse(JSON.stringify(req.body));

    // If successful, send the request body and success status
    res.status(200).json({ status: 'success', data: req.body });
  } catch (error) {
    // If JSON parsing fails, send failure status
    res.status(400).json({ status: 'failed', error: 'Invalid JSON format' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
