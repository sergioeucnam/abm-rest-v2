import React, { useState } from 'react';
import { useEffect } from 'react';
import { BASE_URL } from '../../config';
import AddPlayer from './AddPlayer';

const PlayerTable = () => {
	const [players, setPlayers] = useState([]);
	const [isModalAddPlayerOpen, setIsModalAddPlayerOpen] = useState(false);
	const fetchPlayers = async () => {
		const response = await fetch(`${BASE_URL}/api/players`);
		const data = await response.json();
		console.log(data, 'data del fetch');
		setPlayers(data);
	};
	useEffect(() => {
		fetchPlayers();
	}, []);
	return (
		<>
			{isModalAddPlayerOpen && (
				<AddPlayer setIsModalAddPlayerOpen={setIsModalAddPlayerOpen} />
			)}
			<div className={isModalAddPlayerOpen ? 'blur-md' : ''}>
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					onClick={() => setIsModalAddPlayerOpen(true)}
				>
					Add Player
				</button>
				<table className='mx-auto w-4/5 table-auto mt-8'>
					<thead className='bg-slate-400'>
						<tr>
							<th>Name</th>
							<th>Lastname</th>
							<th>Age</th>
							<th>Team</th>
						</tr>
					</thead>
					<tbody>
						{players.map((player) => (
							<tr key={player.id} className='text-center odd:bg-slate-200'>
								<td>{player.name}</td>
								<td>{player.lastname}</td>
								<td>{player.age}</td>
								<td>{player.team}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default PlayerTable;
