const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const comments = [
    {
        "id": 1,
        "name": "Fernando Ramos",
        "text": "Ótimo serviço, muito rápido!",
        "rating": 5,
        "photo": "/img/FernandoRamos.jpg"
    },
    {
        "id": 2,
        "name": "Maria Santos",
        "text": "Muito eficiente e prestativo.",
        "rating": 5,
        "photo": "/img/MariaSantos.jpg"
    },
    {
        "id": 3,
        "name": "Carlos Souza",
        "text": "Recomendo a todos!",
        "rating": 5,
        "photo": "/img/CarlosSouza.jpg"
    },
    {
        "id": 4,
        "name": "Leonardo Araujo",
        "text": "Muito Satisfeito!",
        "rating": 5,
        "photo": "/img/LeonardoAraujo.jpg"
    }
];

app.get('/comments', (req, res) => {
    res.json(comments);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
