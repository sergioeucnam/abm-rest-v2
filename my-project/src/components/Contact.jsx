import React from 'react';
import Navbar from './Navbar';

const Contact = () => {
	return (
		<>
			<Navbar />
			<div className='bg-white w-4/5 h-[80vh] mx-auto m-4 flex'>
				<div className='bg-slate-200 w-2/5 font-bold rounded-lg h-full flex-wrap overflow-auto'>
					<h1 className='text-4xl text-center'>Contact</h1>
					<p className='text-2xl text-justify p-3 mt-8'>
						Feel free to contact me if you have any questions or suggestions.
					</p>
					<div className='flex p-5'>
						<small className='italic'>
							You can find my contact information in the README.md file in the
							root directory of the project or in the footer of this page.
						</small>
					</div>
				</div>

				<div className='w-3/5 flex flex-wrap'>
					<div className='flex justify-around w-full'>
						<div className='w-1/5 mx-4'>
							<h1 className='text-4xl text-center'>LinkedIn</h1>
							<a
								href='https://www.linkedin.com/in/sergio-mancuello/'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png'
									alt='LinkedIn'
									className='w-1/2 mx-auto'
								/>
							</a>
						</div>
						<div className='w-1/5 mx-4'>
							<h1 className='text-4xl text-center'>GitHub</h1>
							<a
								href='https://github.com/sergioeucnam/abm-rest-v2'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png'
									alt='GitHub'
									className='w-1/2 mx-auto'
								/>
							</a>
						</div>
					</div>
					<div className='flex justify-around w-full'>
						<div className='w-1/5 mx-4'>
							<h1 className='text-4xl text-center'>Email</h1>
							<a href='mailto:sergioeucnam@gmail.com'>
								<img
									src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1200px-Gmail_icon_%282020%29.svg.png'
									alt='Email'
									className='w-1/2 mx-auto'
								/>
							</a>
						</div>
						<div className='w-1/5 mx-4'>
							<h1 className='text-4xl text-center'>WhatsApp</h1>
							<a href='https://wa.me/595976485264' target='_blank'>
								<img
									src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png'
									alt='Phone'
									className='w-1/2 mx-auto'
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
