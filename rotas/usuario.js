const {Router} = require("express");
const {Usuario} = require("../bd");
const router = Router();

//get= recupera
//post = cria
//put = modifico
//delete = remoção

router.get("/", (req, res) => {
    res.send("GET do usuario ok");
});

router.post("/", async (req, res) => {             //operação assincrona baseada em promessas
    //console.log(req.body);

    const usuario = await Usuario.create(req.body);    //criamos uma constante antes do await para ele receber e mostrar o usuario criado.
      
        

        //com o metodo post inserimos esses dados no nosso banco de dados.
    

    res.send(usuario);
});
router.put("/",  (req, res) => {
    console.log(req.body);

    res.send("usuario ok put")
});
router.delete("/", (req, res) =>{
    console.log(req.body);

    res.send("usuario ok delete")
});

module.exports = router;