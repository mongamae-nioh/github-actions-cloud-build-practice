import express, { Router } from 'express'

var router: Router = express.Router();

router.get('/', function(req, res) {
    res.send({text:"Express ready"});
});

export default router;