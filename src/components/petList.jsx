export default function PetList(props) {
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
		<div className={`${props.className}`}>
			<hr className="mb-4" />

			<div className="mb-4">
				<span className="font-bold">
					Recently adopted
				</span>
			</div>

			<div className="grid grid-cols-1 sm:md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-between">
				{
					images.map((item, index) => {
						return <div key={index} className="relative cursor-pointer hover:scale-[1.05] rounded-[5px] transform transition duration-500 overflow-hidden">
							<img src={item} alt="animal" className="h-[180px] w-full object-cover " />
							<div className="absolute bottom-0 left-0 right-0 p-2 h-[30%] text-white" style={{
								backgroundColor: 'rgba(69, 69, 69, 0.5)'
							}}>
								<span>Name: Doggie</span>
							</div>
						</div>
					})
				}
			</div>

			{/* todo: add details and view button to proceed on details page */}

		</div>
	)
}