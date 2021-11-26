const {Router} = require("express");
const {Nota, Usuario} = require("../bd");

const router = Router();

router.get("/:id?", async (req, res) => {
    const {id} = req.params;
    let resultado;


    if (id) {
        //res.send('Nota ID' + req.params.id);
        resultado = await Nota.findOne({
            where: {
                id,
            },
            include: [{
                model: Usuario,
                as: "usuario",
            },
        ],

        });

    } else {
        resultado = await Nota.findAll({
            include: [{
                model: Usuario,
                as: "usuario",
            },
        ],
        });

       
    } res.send(resultado);
});
router.post("/", (req, res) => {
    console.log(req.body);

    res.send("notas ok post ")
});

router.put("/:id", (req, res) => {
    console.log(req.body);

    res.send("notas ok put")
});
router.delete("/:id", (req, res) => {
    console.log(req.body);

    res.send("notas ok delete")
});

module.exports = router;