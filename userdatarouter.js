const express = require('express');
const router = express.Router();

const {
    userData,
    getUser
} = require("../controller/usreCtrl"); // Corrected import statement

router.post("/send", userData);
router.get("/getuUser", getUser);


module.exports = router;
