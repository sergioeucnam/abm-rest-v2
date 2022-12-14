const { Router } = require('express');
const {
	addPlayer,
	deletePlayer,
	getAll,
	editPlayer,
	getById,
} = require('../controllers/players.controllers');
const router = Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', addPlayer);
router.delete('/:id', deletePlayer);
router.put('/:id', editPlayer);

module.exports = router;
