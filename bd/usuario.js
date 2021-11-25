module.exports = (sequelize, DataTypes) => {
     const Usuario = sequelize.define('Usuario', {

     //.define = opção do sequelize para definir o modelo
     //{} abri e fechei {} para definir o "modelo" ali dentro.

         id: {
             type: DataTypes.INTEGER,
             allowNull: false,
             primaryKey: true,
             autoIncrement: true,
         },
         nome: {
             type: DataTypes.STRING,
             allowNull: false,
         },
         email: {
             type: DataTypes.STRING,
             allowNull: false,
         },
         senha: {
             type: DataTypes.STRING,
             allowNull: false,
         },

     },

     {
         tableName:"usuario",  //nome da tabela do bd
         timestamps:false,     // tipo da data
     }
     );        

     return Usuario;  //comando para retornar nosso modelo criado acima.

};