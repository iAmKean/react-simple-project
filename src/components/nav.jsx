import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<div className="min-h-[50px] flex items-center justify-between pt-4 pb-4 pl-4 pr-4 md:pl-6 md:pr-6">
			<div className="font-bold  text-[18px] cursor-pointer">
				<Link to={`/`} className="flex items-center">
					<img src="/assets/animal-care.png" alt="icon" width="30" height="30" className="mr-2" />
					Adopt FurrPal!
				</Link>
			</div>
			<div>
				<Link to={`/views/pet`}>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
						Adopt Now!
					</button>
				</Link>
			</div>
		</div>
	)
}