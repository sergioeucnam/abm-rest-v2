import React from 'react';
import Navbar from './Navbar';

const About = () => {
	return (
		<>
			<Navbar />
			<div className='bg-white w-4/5 h-[80vh] mx-auto m-4 flex'>
				<div className='bg-slate-100 w-full px-8 font-bold rounded-lg h-full flex-wrap overflow-auto'>
					<h1 className='text-4xl text-center'>About</h1>
					<p className='text-2xl text-justify p-3 mt-8'>
						This is a simple CRUD app made with React and NodeJS - Express
						Please follow the instructions in the README.md file to run the
						application.
					</p>
					<div className='flex p-5'>
						<small className='italic'>
							There are a postman collection file in the root directory of the
							project. You can import them to your postman application to test
							the API endpoints.
						</small>
					</div>
					<div className='flex p-5'>
						<small>
							Also this application have unit tests. You can run them with the
							command 'npm run test' in the root directory of the project.
						</small>
					</div>
					<div className='flex p-5'>
						<h1>
							This aplicattion was made using the following technologies:
							<br />
							React-NodeJS-Express
						</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
