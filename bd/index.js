const {Sequelize } = require("sequelize");
const bd= {};

const options = { //temos que usar esse nome por causa do sql, sao parametros pre definidos.
    username: "admin",
    passoword: "notes123",
    database:"notes",
    dialect:"mysql",
    host: "notes.cgssmrnlwpdu.us-east-2.rds.amazonaws.com",
}

const sequelize = new Sequelize(options);
sequelize.authenticate().then(  () => {
    console.log("conectado ao banco" + options.database);
}).catch(erro => {
    console.log("erro ao se conectar ao banco" + options.database);
    console.log(erro);
})

//autheticate é um metodo pre estabelecido e vai la no banco de dados autenticar sua inf. elas sao todas baseadas em promisses por isso temos que resolvelas
//.then é o cara responsavel por resolver a promisse.
//.catch é o cara que pega o erro, tipo if e else.