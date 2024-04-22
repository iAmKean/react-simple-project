import { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../../components/card";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
export default function Landing() {
	const tips = [
		'Research Breeds & Needs: Choose a pet that fits your lifestyle and home.',
		'Adopt, Don’t Shop: Visit local shelters or rescue centers to find your new friend.',
		'Prep Your Home: Get essentials like food bowls, beds, and toys ready.',
		'Health First: Schedule a vet visit to ensure your pet is healthy and vaccinated.',
		`Training & Love: Invest in training and give your furrpal plenty of affection.`,
		`Commit for Life: Embrace the lifelong commitment of caring for your pet.`,
	];

	const images = [
		'/assets/animals/dog.jpg',
		'/assets/animals/cat.jpg',
		'http://petsitterwp.dan-fisher.com/wp-content/uploads/2014/10/slide2.jpg',
		'http://petsitterwp.dan-fisher.com/wp-content/uploads/2014/10/slide3.jpg',
	];

	const [tipList, setTipList] = useState(tips)

	const bgStyle = {
		"background": "url(/assets/animals/bg.jpg)",
		"backgroundRepeat": "repeat",
		"backgroundAttachment": "fixed",
		"backgroundPosition": "center top",
		"backgroundSize": "100% 100%",
	}

	return (

		<div className="p-4 md:p-6 min-h-[calc(100vh-72px)] flex justify-center items-center" style={bgStyle}>
			<div className="xl:w-[1200px] xl:m-auto">
				<Card className={`md:min-h-[calc(100vh-140px)] block md:flex w-full md:p-6`}>
					<div className="hidden lg:flex lg:w-[500px] overflow-hidden">
						<Swiper pagination={true} modules={[Pagination]} className="mySwiper">
							{
								images.map((item, index) => {

									return <SwiperSlide key={index}><img src={item} alt="animal" /></SwiperSlide>
								})
							}

						</Swiper>
					</div>
					<div className="bg-[#454545] h-full p-4 rounded-[5px] m-auto text-white lg:w-[calc(100%-500px)] md:ml-6">
						<div className="mb-6 font-bold text-center text-[18px] mt-2">
							Get a Furrpal!
						</div>

						<div className="mb-4">
							Adopting a furry friend is a joyful journey filled with love and companionship. Here’s how you can welcome a new furrpal into your life:
						</div>

						<div className="mb-4">
							{
								tipList.length === 0 ? null :
									<ul className="pl-6">
										{
											tipList.map((item, index) => {
												return <li key={index} className="[&:not(:last-child)]:mb-2 text-left list-disc">{item}</li>;
											})
										}
									</ul>
							}
						</div>

						<div>
							<Link to={`/views/pet`} className="flex justify-center w-full">
								<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full md:w-80">
									Adopt Now!
								</button>
							</Link>
						</div>
					</div>

				</Card>

			</div>

		</div>
	)
}
