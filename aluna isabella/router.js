const express = require('express');
const router = express.Router();

router.get('/contacto', (req, res)=>{
    res.send('CONTATO');
})

module.exports = router;