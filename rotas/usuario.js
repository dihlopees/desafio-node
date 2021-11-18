const express = require("express");

const router = express.Router();

router.get("/", function(req, res){
    res.send("GET do usuario ok");
});
router.post("/", function (req, res){
    console.log(req.body);

    res.send("usuario ok post")
});
router.put("/", function (req, res){
    console.log(req.body);

    res.send("usuario ok put")
});
router.delete("/", function (req, res){
    console.log(req.body);

    res.send("usuario ok delete")
});

module.exports = router;