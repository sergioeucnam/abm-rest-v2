import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { BASE_URL } from '../../config';
import Actions from './Actions';
import AddPlayer from './AddPlayer';
import EditPlayer from './EditPlayer';

const PlayerTable = () => {
	const [players, setPlayers] = useState([]);
	const [isModalAddPlayerOpen, setIsModalAddPlayerOpen] = useState(false);
	const [isModalEditPlayer, setIsModalEditPlayer] = useState(false);
	const [isUpdate, setIsUpdate] = useState(false);
	const fetchPlayers = async () => {
		const response = await axios.get(`${BASE_URL}/api/players`);
		const data = response.data.data;
		setPlayers(data);
	};
	useEffect(() => {
		if (players.length === 0) {
			fetchPlayers();
		}
		if (isUpdate) {
			fetchPlayers();
			setIsUpdate(false);
		}
	}, [isUpdate]);
	return (
		<>
			{isModalAddPlayerOpen && (
				<AddPlayer
					setIsModalAddPlayerOpen={setIsModalAddPlayerOpen}
					setIsUpdate={setIsUpdate}
				/>
			)}
			{isModalEditPlayer && (
				<EditPlayer
					setIsModalEditPlayer={setIsModalEditPlayer}
					setIsUpdate={setIsUpdate}
				/>
			)}
			<div
				className={isModalAddPlayerOpen || isModalEditPlayer ? 'blur-md' : ''}
			>
				<div className='flex justify-center items-center mb-4 mt-4'>
					<button
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
						onClick={() => setIsModalAddPlayerOpen(true)}
					>
						Add Player
					</button>
				</div>
				<div
					id='player-table'
					className='overflow-y-auto h-[70vh] border-orange-800 border-2 w-11/12 mx-auto'
				>
					<table className='mx-auto w-11/12 table-auto mt-8 overflow-y-auto h-[70vh] '>
						<thead className='bg-slate-400'>
							<tr>
								<th>Name</th>
								<th>Lastname</th>
								<th>Age</th>
								<th>Team</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{players?.map((player) => (
								<tr key={player.id} className='text-center odd:bg-slate-200'>
									<td>{player.name}</td>
									<td>{player.lastname}</td>
									<td>{player.age}</td>
									<td>{player.team}</td>
									<td>
										{
											<Actions
												id={player.id}
												setIsUpdate={setIsUpdate}
												setIsModalEditPlayer={setIsModalEditPlayer}
											/>
										}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default PlayerTable;
