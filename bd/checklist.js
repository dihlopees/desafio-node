module.exports = (sequelize, DataTypes) => {     //criamos um arquivo para cada tabela.
    const Checklist = sequelize.define('Checklist', {
        id: {
            type: DataTypes.INTEGER,
             allowNull: false,
             primaryKey: true,
             autoIncrement: true,
        },
        notaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{                   // referenciando a chave estrangeira
                model:'nota',
                key: "id",
            },
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        concluida: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        

    },

    {
        tableName:"checklist",  //nome da tabela do bd
        timestamps:false,     // tipo da data
    }
    );        

    return Checklist;  //comando para retornar nosso modelo criado acima.

};

    


