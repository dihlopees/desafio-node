const {Sequelize, DataTypes } = require("sequelize");
const inicializarUsuario = require("./usuario"); //chamando minhas tabelas criadas
const inicializarNota = require("./nota");
const inicializarChecklist = require("./checklist");
let bd= {};

const options = { //temos que usar esse nome por causa do sql, sao parametros pre definidos.
    username: "admin",
    password: "notes123",
    database:"notes",
    dialect:"mysql",
    host: "notes.cgssmrnlwpdu.us-east-2.rds.amazonaws.com",
};

const sequelize = new Sequelize(options);  //instanciando o sequelize
sequelize.authenticate().then(  () => {
    console.log("conectado ao banco" + options.database);
})
.catch(erro => {
    console.log("erro ao se conectar ao banco" + options.database);
    console.log(erro);
})

//autheticate é um metodo pre estabelecido e vai la no banco de dados autenticar sua inf. elas sao todas baseadas em promisses por isso temos que resolvelas
//.then é o cara responsavel por resolver a promisse.
//.catch é o cara que pega o erro, tipo if e else.

const Usuario = inicializarUsuario(sequelize, DataTypes);
const Nota = inicializarNota(sequelize, DataTypes);
const Checklist = inicializarChecklist(sequelize, DataTypes);

Nota.hasMany(Checklist, {as: "checklists", foreignKey: "notaId"});
//hasmany função de associação
//foreignkey = chave estrangeira. ou seja, no checklist a chave estrangeira é a notaId.

Nota.belongsTo(Usuario, {as: "usuario", foreignKey:"usuarioId"});
//nota pertece a usuario
//por usar o belongsto invertemos, a chave estrangeira agora é referente a tabela nota.

bd = {Usuario, Nota, Checklist}  //passando os parametros para o meu bd

bd.Sequelize = Sequelize;
bd.sequelize = sequelize;

module.exports = bd;