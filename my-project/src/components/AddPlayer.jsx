import React, { useState } from 'react';
import { BASE_URL } from '../../config';

const AddPlayer = ({ setIsModalAddPlayerOpen }) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [playerData, setPlayerData] = useState({
		name: '',
		lastname: '',
		age: '',
		team: '',
	});
	const handleChange = (e) => {
		setPlayerData({
			...playerData,
			[e.target.name]: e.target.value,
		});
	};
	const handleCloseModal = () => {
		setIsModalAddPlayerOpen(false);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`${BASE_URL}/api/players`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(playerData),
			});
			const data = await response.json();
			console.log(data);
		} catch (error) {}
	};
	return (
		<div className='fixed z-10 inset-0 overflow-y-auto'>
			<div>
				<h1>Add Player</h1>
			</div>
			<div>
				{/* close svg */}
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					onClick={handleCloseModal}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			</div>

			<form
				onChange={handleChange}
				onSubmit={handleSubmit}
				className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
			>
				<label htmlFor='name'>Name</label>
				<input type='text' name='name' id='name' />
				<label htmlFor='lastname'>Lastname</label>
				<input type='text' name='lastname' id='lastname' />
				<label htmlFor='age'>Age</label>
				<input type='text' name='age' id='age' />
				<label htmlFor='team'>Team</label>
				<input type='text' name='team' id='team' />
			</form>
		</div>
	);
};

export default AddPlayer;
