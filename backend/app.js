const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const profileRoutes = require('./routes/profileRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/profiles', profileRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});