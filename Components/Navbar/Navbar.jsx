import React from 'react';
import Logo from '../../public/assets/images/logo.png';
import Link from 'next/link';
import Image from 'next/image';
const NavbarLinks = [
	{
		name: 'About Us',
		link: '/',
	},
	{
		name: 'Partners',
		link: '/',
	},

	{
		name: 'Our Team',

		link: '/',
	},
	{
		name: 'Incubatees',
		link: '/',
	},
	{
		name: 'Events',
		link: '/',
	},
	{
		name: 'E-CELL club',
		link: '/',
	},
];

const Navbar = () => {
	return (
		<div className='Navbar-container flex border border-gray-500  items-center h-24 justify-between px-10'>
			<div className='Navbar-logo'>
				<Link href='/'>
					<Image
						className='w-full h-full cursor-pointer'
						src={Logo}
						alt='WCE Logo'
					/>
				</Link>
			</div>
			<div className='flex items-center h-full'>
				<div className='Navbar-links flex space-x-8 font-semibold'>
					{NavbarLinks.map((link, index) => (
						<Link
							key={index}
							href={link.link}
							className='Navbar-link text-gray-500 hover:text-primary'>
							{link.name}
						</Link>
					))}
				</div>
				<Link
					href='/'
					className='Reach-us text-white bg-primary rounded-2xl py-1 px-5 mx-10'>
					Reach us
				</Link>
			</div>
			{/* aaaaaaaa */}
		</div>
	);
};
export default Navbar;
