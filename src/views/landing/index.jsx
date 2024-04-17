import { useState } from "react";
import { Link } from "react-router-dom";



export default function Landing() {
	const tips = [
		'Research: Take the time to research different breeds or species to find one that aligns with your lifestyle, living situation, and preferences. Consider factors such as size, temperament, energy level, and grooming needs.',
		'Visit Shelters or Rescue Centers: Instead of buying from a breeder, consider adopting from a local animal shelter or rescue center. Many wonderful pets are in need of loving homes, and adoption helps reduce pet overpopulation.'
	];
	const [tipList, setTipList] = useState(tips)

	return (

		<div className="p-4 md:p-6 min-h-[calc(100vh-72px)]">

			<div className="mb-6 font-bold">
				Adopt FurrPal!
			</div>

			<div className="mb-4">
				Bringing a furry friend into your life can be one of the most rewarding experiences. Not only do pets provide companionship, but they also offer unconditional love and countless moments of joy. If you're considering adopting a furry companion, here's a guide to help you navigate the process and ensure a smooth transition for both you and your new furrpal.
			</div>

			<div>
				<div className="mb-3">Adopting a Furr Animal:</div>
				{
					tipList.length == 0 ? null :
						<ul>
							{
								tipList.map((item, index) => {
									return <li key={index} className="[&:not(:last-child)]:mb-2 text-left">{item}</li>;
								})
							}
						</ul>
				}
			</div>

			<div>

				<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
					Adopt Now!
				</button>
			</div>

		</div>
	)
}
