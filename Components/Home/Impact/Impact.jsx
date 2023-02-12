import React from 'react';

const Impact = () => {
	return (
		<div className=' md:p-12 space-y-5 py-10'>
			<div className='heading text-3xl text-center font-bold tracking-wide pb-5'>Impacts so far</div>
			<div className='all-impacts px-10 md:px-20 xl:px-40 min-w-[3rem] grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  md:gap-12'>
              {[1,2,3,4,5,6,6,7,8,9,1,1,1,1,1,1].map(ele=>{
                return   <div className='impact font-bold min-w-[5rem] shadow-md border border-gray-150 rounded-xl p-5 flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:shadow-xl '>
                <span className=' pb-3 border-b-4 border-black w-1/2 text-center text-2xl'>295+</span>
                <span className='pt-3 whitespace-nowrap'>Personal connect</span>
            </div>
            
              })}  
            </div>
		</div>
	);
};

export default Impact;
