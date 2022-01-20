const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

//todo: connecto database later


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send("Hellow World, this is Custom Search Query Tool");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});