import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { BASE_URL } from '../../config';
import { PlayerContext } from './Context/PlayerContext';

const MySwal = withReactContent(Swal);
const EditPlayer = ({ setIsModalEditPlayer, setIsUpdate }) => {
	const { playerId } = useContext(PlayerContext);
	const [playerData, setPlayerData] = useState({
		name: '',
		lastname: '',
		age: '',
		team: '',
	});
	const [fetching, setFetching] = useState(false);
	const handleChange = (e) => {
		setPlayerData({
			...playerData,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.put(
				`${BASE_URL}/api/players/${playerId}`,
				playerData,
			);
			const { status, msg, error } = response.data;
			if (status === 201) {
				MySwal.fire({
					icon: 'success',
					title: 'Success',
					text: msg,
				});
			}
			if (status === 400) {
				MySwal.fire({
					icon: 'error',
					title: 'Error',
					text: error,
				});
			}
			if (status === 404) {
				MySwal.fire({
					icon: 'error',
					title: 'Error',
					text: msg,
				});
			}
		} catch (error) {
			MySwal.fire({
				icon: 'error',
				title: 'Error',
				text: error,
			});
		} finally {
			setIsModalEditPlayer(false);
			setIsUpdate(true);
		}
	};
	const getPlayer = async () => {
		try {
			setFetching(true);
			// const response = await axios(`${BASE_URL}/api/players/${playerId}`);
			// const { status, data } = await response.json();
			const response = await axios(`${BASE_URL}/api/players/${playerId}`);
			const { status, data } = response.data;
			if (status === 200) {
				setPlayerData(data);
			} else throw new Error(error);
		} catch (error) {
			MySwal.fire({
				icon: 'error',
				title: 'Error',
				text: error,
			});
		} finally {
			setFetching(false);
		}
	};
	useEffect(() => {
		console.log(playerId, 'playerId');
		if (playerId !== null) getPlayer();
		// getPlayer();

		return () => {
			setPlayerData({
				name: '',
				lastname: '',
				age: '',
				team: '',
			});
		};
	}, [playerId]);

	return (
		<div>
			<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
				<div className='relative w-auto my-6 mx-auto max-w-3xl'>
					<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
						<div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t'>
							<h3 className='text-3xl font-semibold'>Edit Player</h3>
							<button
								className='p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
								onClick={() => setIsModalEditPlayer(false)}
							>
								<span className='bg-transparent text-black opacity- h-6 w-6 text-2xl block outline-none focus:outline-none'>
									x
								</span>
							</button>
						</div>
						<div className='relative p-6 flex-auto'>
							{fetching ? (
								<div className='flex justify-center items-center'>
									<div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900'></div>
								</div>
							) : (
								<form onSubmit={handleSubmit}>
									<div className='flex flex-wrap -mx-3 mb-6'>
										<div className='w-full px-3'>
											<label
												className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
												htmlFor='name'
											>
												Name
											</label>
											<input
												className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
												id='name'
												type='text'
												placeholder='Name'
												name='name'
												value={playerData.name}
												onChange={handleChange}
											/>
										</div>
									</div>
									<div className='flex flex-wrap -mx-3 mb-6'>
										<div className='w-full px-3'>
											<label
												className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
												htmlFor='lastname'
											>
												Lastname
											</label>
											<input
												className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
												id='lastname'
												type='text'
												placeholder='Lastname'
												name='lastname'
												value={playerData.lastname}
												onChange={handleChange}
											/>
										</div>
									</div>
									<div className='flex flex-wrap -mx-3 mb-6'>
										<div className='w-full px-3'>
											<label
												className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
												htmlFor='lastname'
											>
												Age
											</label>
											<input
												className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
												id='age'
												type='text'
												placeholder='Age'
												name='age'
												value={playerData.age}
												onChange={handleChange}
											/>
										</div>
									</div>
									<div className='flex flex-wrap -mx-3 mb-6'>
										<div className='w-full px-3'>
											<label
												className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
												htmlFor='lastname'
											>
												Team
											</label>
											<input
												className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
												id='team'
												type='text'
												placeholder='Team'
												name='team'
												value={playerData.team}
												onChange={handleChange}
											/>
										</div>
									</div>
									<div className='flex flex-wrap -mx-3 mb-6'>
										<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
											Submit
										</button>
									</div>
								</form>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditPlayer;
