import React from 'react';
import Image from 'next/image';
import UM from '../../../public/assets/images/UM.jpeg';
import UM2 from '../../../public/assets/images/UM2.jpeg';
import UM3 from '../../../public/assets/images/UM3.jpeg';
const Events = () => {
	return (
		<div className=' md:p-12 space-y-5 my-10'>
			<div className='heading text-3xl font-bold tracking-wide '>Events</div>
			<div className='all-events  rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gray-150 gap-5 shadow-xl p-4 '>
				{[UM,UM2,UM3].map((img) => {
					return (
						<div className='event cursor-pointer rounded-xl h-[12rem] sm:h-[15rem] bg-gray-300 overflow-hidden object-cover '>
							<Image src={img} className='object-cover  h-full'></Image>
							
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Events;
