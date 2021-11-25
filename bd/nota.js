module.exports = (sequelize, DataTypes) => {     //criamos um arquivo para cada tabela.
    const Nota = sequelize.define('Nota', {
        id: {
            type: DataTypes.INTEGER,
             allowNull: false,
             primaryKey: true,
             autoIncrement: true,
            
        },
        usuarioId: {        //chave estrangeira
            type: DataTypes.INTEGER,
             allowNull: false,
             references:{                   // referenciando a chave estrangeira
                 model:'usuario',
                 key: "id",
             },

        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        

    },

    {
        tableName:"nota",  //nome da tabela do bd
        timestamps:false,     // tipo da data
    }
    );        

    return Nota;  //comando para retornar nosso modelo criado acima.

};

    


