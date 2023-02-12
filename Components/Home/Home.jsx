import React from 'react';
import Section1 from './Section1/Section1';
import Events from './events/Events';
import Impact from './Impact/Impact';
import Footer from '../Footer/Footer';

const Home = () => {
	return (
		<>
    <div className='px-6 md:p-0'>
			<Section1 />
			<Events />
			<Impact />
		</div>
		<Footer />
    </>
	);
};

export default Home;
