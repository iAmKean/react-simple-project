import { Link } from "react-router-dom";

// todo: add warning function when there is changes on form fields data

import PetList from "../../components/petList";
import Card from "../../components/card";
export default function Pet() {

	const bgStyle = {
		"background": "url(/assets/animals/bg.jpg)",
		"backgroundRepeat": "repeat",
		"backgroundAttachment": "fixed",
		"backgroundPosition": "center top",
		"backgroundSize": "100% 100%",
	}

	const images = [
		'/assets/animals/dog.jpg',
		'/assets/animals/cat.jpg',
		'http://petsitterwp.dan-fisher.com/wp-content/uploads/2014/10/slide2.jpg',
		'http://petsitterwp.dan-fisher.com/wp-content/uploads/2014/10/slide3.jpg',
		'/assets/animals/dog.jpg',
		'/assets/animals/cat.jpg',
		'http://petsitterwp.dan-fisher.com/wp-content/uploads/2014/10/slide2.jpg',
		'http://petsitterwp.dan-fisher.com/wp-content/uploads/2014/10/slide3.jpg',
		'/assets/animals/dog.jpg',
		'/assets/animals/cat.jpg',
		'http://petsitterwp.dan-fisher.com/wp-content/uploads/2014/10/slide2.jpg',
		'http://petsitterwp.dan-fisher.com/wp-content/uploads/2014/10/slide3.jpg',
		'/assets/animals/dog.jpg',
		'/assets/animals/cat.jpg',
		'http://petsitterwp.dan-fisher.com/wp-content/uploads/2014/10/slide2.jpg',
		'http://petsitterwp.dan-fisher.com/wp-content/uploads/2014/10/slide3.jpg',
	];
	return (
		<div className="p-4 md:p-6 min-h-[calc(100vh-80px)]" style={bgStyle}>
			<div className="mb-4 block md:flex">
				<div>
					<form className="max-w-sm mx-auto md:w-[300px]">
						<div className="mb-2">
							<label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select species</label>
							<select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
								<option>Dog</option>
								<option>Cat</option>
							</select>
						</div>

						<div className="mb-4">
							<label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select location</label>
							<select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
								<option>United States</option>
								<option>Canada</option>
								<option>France</option>
								<option>Germany</option>
							</select>
						</div>

						<div className="w-full">
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
								Submit
							</button>
						</div>

					</form>
				</div>
				<div className="mt-4 md:mt-0 md:ml-4 w-full max-h-[calc(100vh-130px)] overflow-y-auto">
					<Card className={`bg-[#454545]`}>
						<div className="">
							{
								images.map((item, index) => {
									return <div key={index} className="rounded-[5px] block sm:flex [&:not(:last-child)]:mb-2 bg-white">
										<div>
											<img src={item} alt="animal" className="sm:h-[180px] sm:w-[180px] object-cover rounded-[5px]" />
										</div>
										<div className="p-2 flex-1">
											<div className="text-[18px]">Name: Browniee</div>
											<div className="text-[18px]">Species: Dog</div>
											<div className="text-[18px]">Location: Canada</div>
											<Link to={`/views/pet/1`} className="flex justify-center w-full mt-4">
												<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full md:w-60">
													Adopt
												</button>
											</Link>
										</div>
									</div>
								})
							}
						</div>
					</Card>
				</div>
			</div>

			<PetList />
		</div>
	)
}
