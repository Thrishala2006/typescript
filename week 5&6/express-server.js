const express = require('express');

// Create an Express application instance
const app = express();

// Define the port number
const PORT = 3000;

// Create a basic route
app.get('/', (req, res) => {
    res.send('<h1>Hello, Express World!</h1>');
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});