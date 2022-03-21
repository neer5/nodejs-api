import dotenv from 'dotenv';
import path from 'path';

import app from './app';

dotenv.config({ path: path.resolve(__dirname, './.env') });

// set port, listen for requests
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
