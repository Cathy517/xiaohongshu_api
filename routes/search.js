const express = require('express');
const axiosRq = require('../util/util');
const router = express.Router();

router.get('/:type', function(req, res) {
    let type = req.path;
    let data = {
        keyword: req.query.keyword,
        page: req.query.page || 1,
        page_size: req.query.page_size || 20
    }
    axiosRq('GET', '/v2/search' + type, data)
        .then(result => {
            res.send(result);
        }).catch(error => {
            res.send(error);
        })
});
module.exports = router;