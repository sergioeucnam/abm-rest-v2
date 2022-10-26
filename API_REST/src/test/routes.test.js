const request = require('supertest');
const express = require('express');
const router = require('../routes/players.js');
const app = new express();
app.use('/', router);

const newPlayerMock = {
	name: 'Sergio',
	lastname: 'Mancuello',
	age: 23,
	team: 'Barcelona',
};

xdescribe('GET /api/players', () => {
	test('GET / should respond', async () => {
		const res = await request(app).get('/');
		expect(res.statusCode).toEqual(200);
	});
	test('should be a array', async () => {
		const res = await request(app).get('/');
		expect(res.body.data).toBeInstanceOf(Array);
	});
	test('should have the data and status properties', async () => {
		const res = await request(app).get('/');
		expect(res.body).toHaveProperty('status');
		expect(res.body).toHaveProperty('data');
	});
});

xdescribe('GET /api/players/:id', () => {
	test('GET /:id should respond', async () => {
		const res = await request(app).get('/1');
		expect(res.statusCode).toEqual(200);
	});
	test('should be an object', async () => {
		const res = await request(app).get('/1');
		expect(res.body.data).toBeInstanceOf(Object);
	});
	test('should have the data and status properties', async () => {
		const res = await request(app).get('/1');
		expect(res.body).toHaveProperty('status');
		expect(res.body).toHaveProperty('data');
	});
});

describe('POST /api/players', () => {
	test('POST / should create a new player', async () => {
		const res = await request(app).post('/').send(request.body(newPlayerMock));
		// console.log(res.req, 'response');
		expect(res.statusCode).toBe(201);
	});
});
