const express = require('express')
const routes = express.Router()

let db = [
    {'1':{nome: 'Joabe', idade: '20'}},
    {'2':{nome: 'Veni', idade: '30'}},
    {'3':{nome: 'Nao é o Gurgel', idade: '40'}}
];

routes.get('/', (req, res) => {
    return res.json(db);
});

//insert
routes.post('/add', (req, res) => {   
    const body = req.body;

    if(!body)
        return res.status(400).end();

    db.push(body);
    return res.send("Usuário adicionado com sucesso!");
});

routes.patch('/edit/:id', (req, res) => {
    const id = req.params.id
    const updateData = req.body

    if(!id)
        return res.status(400).end();
    if(!updateData)
        return res.status(400).end();

    db.splice(id-1, 1, updateData)

    res.redirect('/')
})

routes.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    let i = 0;

    db.forEach(element => {
        if(element.hasOwnProperty(id)){
            db.splice(i, 1);
            return res.send("Usuário deletado com sucesso!");
        }
        i++;
    });

    return res.send("Usuário não encontrado!")
});


module.exports = routes
