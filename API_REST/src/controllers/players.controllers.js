const generateId = () => Math.random().toFixed(5).toString().slice(2);
let players = require('../mock.json');

const getById = (req, res) => {
	try {
		const { id } = req.params;
		let playerID = players.find((index) => index.id == id);
		res.json({ status: 200, data: playerID });
	} catch (error) {
		res.status(500).json({ status: 500, error: error.message });
	}
};
const getAll = (req, res) => {
	// res.json(players);
	res.status(200).json({ status: 200, data: players });
};
const addPlayer = (req, res) => {
	console.log(req.body, 'lo que se recibe en el backend');
	try {
		const { name, lastname, age, team } = req.body;
		if (name && lastname && age && team) {
			let id = generateId();
			const newPlayer = { id, ...req.body };
			players.push(newPlayer);
			res
				.status(201)
				.json({ status: 201, msg: `The player ${name} has been added` });
		} else {
			res
				.status(400)
				.json({ status: 400, error: 'Bad request, missing parameters' });
		}
	} catch (error) {
		res.status(500).json({ status: 500, error: error.message });
	}
};
const deletePlayer = (req, res) => {
	const { id } = req.params;
	let playerID = players.find((index) => index.id == id);
	if (!playerID) {
		res.status(400).json({
			status: 400,
			error: `The player with the id ${id} does not exist`,
		});
	} else {
		players = players.filter((index) => index.id !== id);
		res.status(201).json({
			status: 201,
			msg: `The player with the id ${id} was deleted correctly`,
		});
	}
};
const editPlayer = (req, res) => {
	try {
		const { id } = req.params;
		const { name, lastname, age, team } = req.body;
		if (name && lastname && age && team) {
			let founded = players.find((player) => player.id == id);
			if (founded) {
				founded.name = name;
				founded.lastname = lastname;
				founded.age = age;
				founded.team = team;
				res.status(201).json({
					status: 201,
					msg: `The player with the id ${id} has been changed`,
				});
			} else {
				res.status(404).json({
					status: 404,
					error: `The player with the id ${id} does not exist`,
				});
			}
		} else {
			res.status(200).json({
				status: 400,
				error: `Bad request, missing parameters`,
			});
		}
	} catch (error) {
		console.log('se rompio');
		res.status(500).json({ status: 500, error: error.message });
	}
};
module.exports = {
	addPlayer,
	deletePlayer,
	getAll,
	editPlayer,
	getById,
};
