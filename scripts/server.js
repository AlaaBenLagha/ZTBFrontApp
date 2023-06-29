const express = require('express');
const path = require('path');
const app = express();

// Path to serve cheque images
app.use('/images', express.static(path.join('/app/images')));

// Path to serve signature images
app.use('/signature-images', express.static(path.join('/app/signature-images')));


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});