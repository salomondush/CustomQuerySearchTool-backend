const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

// todo: connect database



app.use(cors()); // for server to be acceible by other origin
app.use(express.json()); // for parsing json
app.use(express.urlencoded({ extended: true })); // for parsing url encoded data


app.get('/', (req, res) => {
    res.send('Hello World, this is Custom Search Query Tool');
    }
);


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});