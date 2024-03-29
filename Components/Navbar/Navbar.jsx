import React, { useState , useEffect} from 'react';
import { GetServerSideProps } from 'next';
import Logo from '../../public/assets/images/iie_banner4.png';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from './Sidebar/Sidebar';
import NavbarLinks from '../../data/navbarLinks';
import { getCookie, deleteCookie } from 'cookies-next';

const Navbar = () => {
	const [sidebarOpen, setsidebarOpen] = useState(false);
	const [token,setCookie]=useState("");
	// const token="";
	const handleCookie=()=>{
		deleteCookie('token')
		window.location.href="/";
	}
	useEffect(()=>{
		const getCookieState=()=>{
			setCookie(getCookie('token'));
		}
		getCookieState();
	},[])
	// console.log("token:" + token)

	return (
		<div className='Navbar-container flex border border-b-gray-300  items-center h-24 justify-between px-5 lg:px-5 xl:px-10'>
			<div className='Navbar-logo mr-5'>
				<Link href='/'>
					<Image className='w-[22rem] cursor-pointer' src={Logo} alt='WCE Logo' />
				</Link>
			</div>
			{/* Hamburger menu */}
			<div className='Navbar-hamburger  lg:hidden'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					onClick={() => setsidebarOpen(!sidebarOpen)}
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-6 h-6 cursor-pointer'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
					/>
				</svg>
			</div>
			<Sidebar
				showSidebar={sidebarOpen}
				setshowSidebar={(e) => setsidebarOpen(e)}
			/>
			<div className='lg:flex hidden items-center h-full'>
				<div className='Navbar-links flex  whitespace-nowrap lg:space-x-8 font-semibold'>
					{NavbarLinks.map((link, index) => {
					
						if((token && link.name==='Login') || (!token && link.name==='Dashboard') || (!token && link.name=='Logout'))
						{
							
						}else{
							return (<Link
								key={index}
								href={link.link}
								className='Navbar-link text-black hover:text-primary'>
								{link.name}
							</Link>);
						}
							
						
						
})}
{
	token && token.length && (<button
		key={9}
		onClick={handleCookie}
	

		className='Navbar-link text-black hover:text-primary'>
		{/* {link.name}
		 */}
		 Logout
	</button>)
}
					
					
				</div>
				<Link
					href='/register'
					className='Reach-us hidden lg:block text-white bg-primary whitespace-nowrap rounded-2xl py-1 px-5 mx-10'>
					Enrollment
				</Link>
			</div>
			{/* aaaaaaaa */}
		</div>
	);
};

// export const getServerSideProps = async (context) =>{
// 	const token = "Oijdfinjsbdifsj"
// 	return {
// 		props:{
// 			token,
// 		}
// 	}
// }

export default Navbar;
