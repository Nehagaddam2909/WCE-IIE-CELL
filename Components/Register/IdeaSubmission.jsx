import React, { useState } from 'react';

const IdeaSubmission = () => {
	// const handleClick = () => {
	// 	setVisible(!visible);
	// 	console.log(visible);
	// };
	const [data, setData] = useState({
		title: '',
		leader: '',
		type: '',
		phone: '',
		email:'',
		department: '',
		year: '',
		team: '',
		report: undefined,
		viability: '',
		impact: '',
		innovation: '',
		applicability: '',
		relevance: '',
	});
	const handleSubmit = async () => {
		// fetch call , dont use axios

		// bool flag to check validity
		let flag = 1;
		// check if all fields are filled
		for(const key in data){
			if(data[key]==undefined || data[key].length==0){
				alert("Please fill required fileds !")
				flag = 0;
				return;
			}
		}

		if(flag)
		{const formData = new FormData();
		formData.append('title', data.title);
		formData.append('leader', data.leader);
		formData.append('type', data.type);
		formData.append('phone', data.phone);
		formData.append('email', data.email);
		formData.append('department', data.department);
		formData.append('year', data.year);
		formData.append('team', data.team);
		formData.append('report', data.report);
		formData.append('viability', data.viability);
		formData.append('impact', data.impact);
		formData.append('innovation', data.innovation);
		formData.append('applicability', data.applicability);
		formData.append('relevance', data.relevance);
		console.table(formData);
		try {
			await fetch('http://localhost:5000/api/idea/submit', {
				method: 'POST',
				body: formData,
			})
				.then(async (res) => {
					const data = await res.json();
					console.log(data);
				})
				.catch((err) => {
					console.log(err);
				});

			// console.log(json);
		} catch (error) {
			alert('Something went wrong!');
			console.log(error);
		}}
	};
	return (
		<form className='p-6 md:p-10'>
			<h1 className='mb-12 text-center text-2xl font-extrabold md:text-5xl lg:text-4xl'>
				Idea Submission
			</h1>

			<div className='grid md:grid-cols-2 md:gap-6'>
				<div className='relative z-0 w-full mb-8 group'>
					<input
						type='text'
						name='title'
						className='block py-2.5 px-0 w-full pl-3   bg-transparent  border border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer '
						placeholder=' '
						maxLength={255} 
						value={data.title}
						onChange={(e) => setData({ ...data, title: e.target.value })}
						required
					/>
					<label
						htmlFor='title'
						className='peer-focus:font-medium absolute text-sm md:text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-9 md:peer-focus:-translate-y-10 pl-2 md:pl-3'>
						Title
						
					</label>
				</div>
				<div className='relative z-0 w-full mb-8 group'>
					<input
						type='text'
						name='Name of the leader'
						className='block py-2.5 px-0 w-full pl-3  text-gray-900 bg-transparent  border border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
						placeholder=' '
						maxLength={255}
						value={data.leader}
						onChange={(e) => setData({ ...data, leader: e.target.value })}
						required
					/>
					<label
						htmlFor='Name of the leader'
						className='peer-focus:font-medium absolute text-sm md:text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-9 md:peer-focus:-translate-y-10 pl-2 md:pl-3'>
						Name of the leader
					</label>
				</div>
			</div>
			<div className='grid md:grid-cols-2 md:gap-6'>
				<div className='relative z-0 w-full mb-8 group'>
					<select
						required
						value={data.type}
						onChange={(e) => {
							console.log(e.target.value);
							setData({ ...data, type: e.target.value });
						}}
						className='bg-white border h-12 focus:outline-none border-black text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500'>
						<option value='student'>Student</option>
						<option value='teacher'>Teacher</option>
					</select>

					<label
						htmlFor='floating_phone'
						className='peer-focus:font-medium absolute text-sm md:text-base duration-300 transform  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 text-blue-500 -translate-y-9 md: -translate-y-10 pl-1'>
						Select type
					</label>
				</div>
				<div className='relative z-0 w-full mb-8 group'>
					<input
						type='tel'
						pattern='^[6-9]\d{9}$'
						name='floating_phone'
						className='block py-2.5 px-0 w-full pl-3  text-gray-900 bg-transparent  border border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:invalid:border-red-600  focus:border-blue-600 peer'
						placeholder=' '
						maxLength={10}
						value={data.phone}
						onChange={(e) => setData({ ...data, phone: e.target.value })}
						required
					/>
					<label
						htmlFor='floating_phone'
						className='peer-focus:font-medium absolute text-sm md:text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-9 md:peer-focus:-translate-y-10 pl-2 md:pl-3'>
						Phone number (987654321)
					</label>
				</div>
			</div>
			<div className='grid md:grid-cols-2 md:gap-6'>
				<div className='relative z-0 w-full mb-8 group'>
					<select
						required
						value={data.department}
						onChange={(e) => {
							setData({ ...data, department: e.target.value });
						}}
						className='bg-white border h-12 focus:outline-none border-black text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500'>
						<option value='CSE'>Computer Science and Engineering</option>
						<option value='IT'>Information Technology</option>
						<option value='ELT'>Electrical Engineering</option>
						<option value='ELN'>Electronics Engineering</option>
						<option value='ME'>Mechanical Engineering</option>
						<option value='CE'>Civil Engineering</option>
					</select>

					<label
						htmlFor='floating_phone'
						className='peer-focus:font-medium absolute text-sm md:text-base duration-300 transform  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 text-blue-500 -translate-y-9 md: -translate-y-10 pl-1'>
						Department
					</label>
				</div>
				<div className='relative z-0 w-full mb-8 group'>
					<select
						required
						value={data.year}
						onChange={(e) => setData({ ...data, year: e.target.value })}
						className='bg-white border h-12 focus:outline-none border-black text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500'>
						<option value='FY'>First Year</option>
						<option value='SY'>Second Year</option>
						<option value='TY'>Third Year</option>
						<option value='Btech'>Final Year</option>
					</select>

					<label
						htmlFor='floating_phone'
						className='peer-focus:font-medium absolute text-sm md:text-base duration-300 transform  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 text-blue-500 -translate-y-9 md: -translate-y-10 pl-1'>
						Year of study
					</label>
				</div>
			</div>
			<div className='grid md:grid-cols-2 md:gap-6'>
				<div className='relative z-0 w-full mb-8 group'>
					<input
						type='text'
						name='floating_phone'
						className='block py-2.5 px-0 w-full pl-3  text-gray-900 bg-transparent  border border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
						placeholder=' '
						maxLength={255}
						value={data.team}
						onChange={(e) => setData({ ...data, team: e.target.value })}
						required
					/>
					<label
						htmlFor='floating_phone'
						className='peer-focus:font-medium absolute text-sm md:text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-9 md:peer-focus:-translate-y-10 pl-2 md:pl-3'>
						Name of other team members
					</label>
				</div>
				<div className='relative z-0 w-full mb-8 group'>
					<input
						type='file'
						accept='application/pdf,application/msword'
						name='floating_company'
						className='block py-2.5 px-0 w-full pl-3  text-gray-900 bg-transparent  border border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
						placeholder=' '
						maxLength={255}
						onChange={(e) => setData({ ...data, report: e.target.files[0] })}
						required
					/>
					<label
						htmlFor='floating_phone'
						className='peer-focus:font-medium absolute text-sm md:text-base duration-300 transform  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 text-blue-500 -translate-y-9 md: -translate-y-10 pl-1 '>
						Abstract/Report
					</label>
				</div>
			</div>
			<div className='grid md:grid-cols-2 md:gap-6'>
			<div className='relative z-0 w-full mb-8 group'>
					<input
						type='email'
						name='floating_phone'
						pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
						className='block py-2.5 px-0 w-full pl-3  text-gray-900 bg-transparent  border border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:invalid:border-red-600  focus:ring-0 focus:border-blue-600 peer'
						placeholder=' '
						maxLength={255}
						value={data.email}
						onChange={(e) => setData({ ...data, email: e.target.value })}
						required
					/>
					<label
						htmlFor='floating_phone'
						className='peer-focus:font-medium absolute text-sm md:text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-9 md:peer-focus:-translate-y-10 pl-2 md:pl-3 '>
						Email
					</label>
					
				</div>
				<div className='relative z-0 w-full mb-8 group'>
					<input
						type='text'
						name='floating_phone'
						className='block py-2.5 px-0 w-full pl-3  text-gray-900 bg-transparent  border border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
						placeholder=' '
						maxLength={255}
						value={data.relevance}
						onChange={(e) => setData({ ...data, relevance: e.target.value })}
						required
					/>
					<label
						htmlFor='floating_phone'
						className='peer-focus:font-medium absolute text-sm md:text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-9 md:peer-focus:-translate-y-10 pl-2 md:pl-3'>
						Relavance
					</label>
					<p className='text-sm text-gray-500 italic'>
						* Whether the identified problem really exists in Society/Market/
						Industry ? How big is the problem ? (Low, Moderate, High)
					</p>
				</div>
				
			</div>
			<div className='grid md:grid-cols-2 md:gap-6'>
				<div className='relative z-0 w-full mb-8 group'>
					<input
						type='text'
						name='title'
						className='block py-2.5 px-0 w-full pl-3  text-gray-900 bg-transparent  border border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
						placeholder=' '
						maxLength={255}
						value={data.viability}
						onChange={(e) => setData({ ...data, viability: e.target.value })}
						required
					/>
					<label
						htmlFor='title'
						className='peer-focus:font-medium absolute text-sm md:text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-9 md:peer-focus:-translate-y-10 pl-2 md:pl-3'>
						Viability
					</label>
					<p className='text-sm text-gray-500 italic'>
						* The proposal is viable and the team has credibility to implement
						it. The entry includes sufficient evidence of team members’
						expertise, training, skills, and the team has thought through the
						partnerships and resources necessary to achieve their expressed
						goals and objectives.
					</p>
				</div>
				<div className='relative z-0 w-full mb-8 group'>
					<input
						type='text'
						name='Name of the leader'
						className='block py-2.5 px-0 w-full pl-3  text-gray-900 bg-transparent  border border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
						placeholder=' '
						maxLength={255}
						value={data.innovation}
						onChange={(e) => setData({ ...data, innovation: e.target.value })}
						required
					/>
					<label
						htmlFor='Name of the leader'
						className='peer-focus:font-medium absolute text-sm md:text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-9 md:peer-focus:-translate-y-10 pl-2 md:pl-3'>
						Innovation
					</label>
					<p className='text-sm text-gray-500 italic'>
						*The idea presented is a “novel, innovative or creative” solution to
						the proposed problem. “Novel, innovative or creative” solutions
						means either: (a) a new idea, method, invention or product, or (b)
						the creation of a better or more effective product, process,
						service, technology or idea.
					</p>
				</div>
			</div>
			<div className='grid md:grid-cols-2 md:gap-6'>
				<div className='relative z-0 w-full mb-8 group'>
					<input
						type='text'
						name='floating_phone'
						className='block py-2.5 px-0 w-full pl-3  text-gray-900 bg-transparent  border border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
						placeholder=' '
						maxLength={255}
						value={data.impact}
						onChange={(e) => setData({ ...data, impact: e.target.value })}
						required
					/>
					<label
						htmlFor='floating_phone'
						className='peer-focus:font-medium absolute text-sm md:text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-9 md:peer-focus:-translate-y-10 pl-2 md:pl-3'>
						Potential for Impact
					</label>
					<p className='text-sm text-gray-500 italic'>
						*The proposed project addresses a pressing and important problem.
						The team provides the sufficient data/research to understand the
						problem and specific need(s) of the target audience, and makes a
						case that their idea addresses this need. The social cause this idea
						serve by providing the solution. In other words, which
						social/sociatal problem/challenges overcome by implmenting this
						solution.
					</p>
				</div>
				<div className='relative z-0 w-full mb-8 group'>
					<input
						type='text'
						name='floating_company'
						className='block py-2.5 px-0 w-full pl-3  text-gray-900 bg-transparent  border border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
						placeholder=' '
						maxLength={255}
						value={data.applicability}
						onChange={(e) =>
							setData({ ...data, applicability: e.target.value })
						}
						required
					/>
					<label
						htmlFor='floating_company'
						className='peer-focus:font-medium absolute text-sm md:text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-9 md:peer-focus:-translate-y-10 pl-2 md:pl-3'>
						Applicability
					</label>
					<p className='text-sm text-gray-500 italic'>
						* (a) Usability: Level of acceptance of Solution/Features among
						target group (b) Scalability: Adoption Potential of Solution as
						Business Model/Startup (c) Economic Sustainability: Potential of
						solution to Become profitable or financially viable(d) Environment
						Sustainability: Potential of solution to become environment friendly
						or address environment problems (e) Existence of Intellectual
						Property Component, if any?
					</p>
				</div>
			</div>
			
			
			<div className='flex justify-center '><button
				type='button'
				onClick={handleSubmit}
				className='text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
				Submit
			</button></div>
		</form>
	);
};
export default IdeaSubmission;
