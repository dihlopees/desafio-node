const {Router} = require("express");

const router = Router();

router.get("/:id?", (req, res) => {
    const {id} = req.params;

    if (id) {
        res.send('Nota ID' + req.params.id);
    } else {
        res.send("Todas as notas");
    }
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