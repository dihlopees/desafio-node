const {Router} = require("express");
const router = Router();

router.get("/", (req, res) => {
    res.send("GET do usuario ok");
});
router.post("/", (req, res) => {
    console.log(req.body);

    res.send("usuario ok post")
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