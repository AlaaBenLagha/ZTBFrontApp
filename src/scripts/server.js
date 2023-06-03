const express = require('express');
const path = require('path');
const app = express();

// Path to serve cheque images
app.use('/images', express.static(path.join('C:/Users/alaw-/Desktop/stages/Stage PFE 2K23 (Zitouna Bank)/Files/Cheque images/Cheques/')));

// Path to serve signature images
app.use('/signature-images', express.static(path.join('C:/Users/alaw-/Desktop/stages/Stage PFE 2K23 (Zitouna Bank)/Files/signatures/')));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
