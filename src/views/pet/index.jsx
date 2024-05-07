import { Link } from "react-router-dom";

// todo: add warning function when there is changes on form fields data

import PetList from "../../components/petList";
import Card from "../../components/card";
import { getBreeds, byBreeds } from "../../api/index"
import { useEffect, useState } from "react";
export default function Pet() {

	const [breeds, setBreeds] = useState([]);
	const [currentBreed, setCurrentBreed] = useState("DEFAULT")

	const [dogs, setDogs] = useState([]);

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

	const handleBreed = (e) => {
		setCurrentBreed(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		reqByBreeds(currentBreed)
	}

	const reqByBreeds = async (breed) => {
		const res = await byBreeds(breed);
		setDogs(res)
	}

	useEffect(() => {
		const reqBreeds = async () => {
			const res = await getBreeds();
			let breedsArr = [];
			for (let breed in res) {
				breedsArr.push(breed)
			}
			setBreeds(breedsArr)
		}

		reqBreeds();
	}, [])

	useEffect(() => {
		// console.log("breeds", breeds)
	}, [breeds])

	const EmptyDogs = () => {
		return (<div className="min-h-[500px] flex items-center justify-center">
			<span className="text-white">Please select breed</span>
		</div>)
	}

	return (
		<div className="p-4 md:p-6 min-h-[calc(100vh-80px)]" style={bgStyle}>
			<div className="mb-4 block md:flex">
				<div>
					<form onSubmit={(e) => {
						handleSubmit(e)
					}} className="mx-auto w-full md:w-[300px]">
						<div className="mb-2">
							<label htmlFor="breed" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select breed</label>
							<select
								value={currentBreed}
								onChange={handleBreed}
								id="breed" className="capitalize bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
								{
									breeds.length === 0 ? <option value={`DEFAULT`} disabled>Empty</option> :
										breeds.map((item, index) => {
											return <option value={item} key={index} className="capitalize">{item}</option>
										})
								}
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
								dogs.length === 0 ? <EmptyDogs /> :
									dogs.map((item, index) => {
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
