import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
	const links = ['home', 'about', 'contact'];
	return (
		<div className='flex w-full bg-orange-400'>
			<nav className='flex flex-row justify-between items-center w-full px-4 py-2'>
				<ul className='flex flex-row justify-around items-center w-full'>
					{links.map((link) => {
						return (
							<li key={link}>
								<Link to={`/${link}`}>{link.toLocaleUpperCase()}</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
