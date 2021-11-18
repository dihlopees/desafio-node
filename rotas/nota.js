const express = require("express");

const router = express.Router();

router.get("/", function(req, res){
    res.send("GET do notas ok");
});
router.post("/", function (req, res){
    console.log(req.body);

    res.send("notas ok post ")
});

router.put("/", function (req, res){
    console.log(req.body);

    res.send("notas ok put")
});
router.delete("/", function (req, res){
    console.log(req.body);

    res.send("notas ok delete")
});

module.exports = router;