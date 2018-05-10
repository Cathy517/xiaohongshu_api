const express = require('express');
const axiosRq = require('../util/util');
const router = express.Router();

router.get('/:id', function(req, res) {
    let noteID = req.path;
    console.log(req);
    let data = {
        type: req.query.type || '',
        page_size: req.query.page_size || 20
    }
    axiosRq('GET', '/v1/note' + noteID + '/comment', data)
        .then(result => {
            console.log(result);
            res.send(result)
        }).catch(error => {
            console.log(error);
            res.send(error)
        })
});
module.exports = router;