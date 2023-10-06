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
    return res.json(body);
});

//update
// routes.put('/update/:id', (req, res) => {
//     const id = req.params.id; // Obtém o ID da URL

//     // Verifique se o ID é válido (você pode adicionar validações adicionais aqui)
//     if (!id) {
//         return res.status(400).json({ mensagem: 'ID inválido' });
//     }

//     // Obtenha os dados que deseja atualizar da URL
//     const nome = req.query.nome; // Obtém o valor do parâmetro "nome" da URL
//     const idade = req.query.idade; // Obtém o valor do parâmetro "idade" da URL

//     // Atualize os dados do usuário
//     let i = 0;

//     db.forEach(element => {
//         if(element.hasOwnProperty(id)){
//             if(nome)
//                 element[id].nome = nome;
//             if(idade)
//                 element[id].idade = idade;
//             return res.json(element);
//         }
//         i++;
//     });

//     return res.status(204).end();
// });

//delete
routes.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    let i = 0;

    db.forEach(element => {
        if(element.hasOwnProperty(id)){
            db.splice(i, 1);
            return res.json(element);
        }
        i++;
    });

    return res.status(204).end();
});


module.exports = routes
