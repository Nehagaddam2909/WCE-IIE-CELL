import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import wce1 from '../../../public/assets/images/wce-1.png';
const Section1 = () => {
	return (
		<div className='  Home-container  md:h-[35rem] pt-[2rem]  space-y-10 font-bold flex flex-col md:flex-row '>
			<div className='text-sm md:text-base left h-full  flex flex-col justify-center items-start md:px-14 md:w-1/2'>
				<p className=' text-primary '>
					INNOVATION INCUBATION AND ENTREPRENEURSHIP CELL WCE
				</p>
				<p className=' text-xl md:text-3xl w-3/4 pt-2 pb-5'>
					Nurturing Innovations Creating Enterprises
				</p>
				<p className='font-normal'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
					ac nulla fermentum. In placerat eros a purus ornare Lorem ipsum dolor
					sit amet, consectetur adipiscing elit. Sed faucibus ac nulla vitae
					fermentum. In placerat eros a purus ornare
				</p>
				<div className='flex space-x-5 pt-5'>
					<Link
						href='/register'
						className='flex items-center text-white bg-primary whitespace-nowrap rounded-full py-2 px-7'>
						Reach us
					</Link>
					<Link
						href='/register'
						className='flex items-center  text-primary border-2 border-primary whitespace-nowrap rounded-full py-2 px-7'>
						Learn More
					</Link>
				</div>
			</div>
			<div className=' carousal md:w-1/2 md:px-12 '>
				<div className='img-container object-cover shadow-xl  rounded-2xl w-full h-full overflow-hidden  '>
					<Image className='w-full h-full rounded-2xl' src={wce1}></Image>
				</div>
			</div>
		</div>
	);
};

export default Section1;
