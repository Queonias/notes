const app = require('./src/app');
require('./src/database')
const port = process.env.PORT || 5000;

// Initialize server
app.listen(port, () => {
    console.log("Running on port 5000.");
  });