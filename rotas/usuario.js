const {Router} = require("express");
const {Usuario} = require("../bd");
const router = Router();

//get= recupera == find
//post = cria == create
//put = modifico == update
//delete = remoção == destroy

router.get("/:id?", async (req, res) => {
    let resultado;

    if (req.params.id) {
       // [resultado] = await Usuario.findAll({           //[resultado] dentro de [] para retornar somenten 1 item.
       //     where: {
       //         id: req.params.id,
       //     }
       // })

       resultado = await Usuario.findByPk(req.params.id);  // segunda opçaõ de busca de somente 1 item... "mais limpo" procura chave primaria
       
       //ou ainda:
       //usar o findOne.

    } else {
        resultado = await Usuario.findAll(); // busca completa no bd
    }
    res.send(resultado);
});

router.post("/", async (req, res) => {             //operação assincrona baseada em promessas
    //console.log(req.body);
const {nome, email, senha} = req.body;  // {} é um objeto

    const [usuario, novoRegistro] = await Usuario.findOrCreate({    //[] é sempre arrey
        defaults: {
            nome,
            email,
            senha,
        },
        where: {
            email,
        },   
    });    //criamos uma constante antes do await para ele receber e mostrar o usuario criado.
console.log(novoRegistro)  
        

        //com o metodo post inserimos esses dados no nosso banco de dados.
    

    res.send(usuario);
});


router.put("/:id",  async (req, res) => {
    const {nome, email, senha} = req.body;
    const {id} = req.params;


    await Usuario.update(
        {
          nome,
         email,
            senha,

    },
    {where: {
        id,
    }
    });
    const usuario = await Usuario.findByPk(id);  //id como argumento da funcao

    res.send(usuario)
});
router.delete("/:id", async (req, res) =>{
   const usuario = await Usuario.destroy({
       where: {
           id: req.params.id,
       }

   });

    res.send({usuario})  //entre {} é um objeto ja declarod acima
});

module.exports = router;