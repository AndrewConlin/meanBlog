var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/blogCtrl');

router.get('/posts', ctrl.index);
router.get('/posts/:id', ctrl.show);
router.post('/posts', ctrl.create);
router.put('/posts/:id', ctrl.update);
router.delete('/posts/:id', ctrl.delete);

router.post('/posts/:id/comments', ctrl.addComment);

module.exports = router;
