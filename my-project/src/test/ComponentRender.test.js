import { describe, expect, it, test } from 'vitest';
import About from '../components/About';
import Contact from '../components/Contact';
import PlayerTable from '../components/PlayerTable';
import Navbar from '../components/Navbar';
describe('About', () => {
	test('renders About component', () => {
		expect(About).toBeDefined();
	});
});

describe('Contact', () => {
	test('renders Contact component', () => {
		expect(Contact).toBeDefined();
	});
});

describe('PlayerTable', () => {
	test('renders PlayerTable component', () => {
		expect(PlayerTable).toBeDefined();
	});
});

describe('Navbar', () => {
	test('renders Navbar component', () => {
		expect(Navbar).toBeDefined();
	});
});
