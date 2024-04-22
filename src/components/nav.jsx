import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<div className="min-h-[50px] pt-4 pb-4 pl-4 pr-4 md:pl-6 md:pr-6">
			<div className="xl:w-[1200px] xl:m-auto flex items-center justify-between">
				<div className="navbar bg-base-100">
					<div className="flex-1">
						<a href="/" className="btn btn-ghost text-xl">

							<img src="/assets/animal-care.png" alt="icon" width="30" height="30" className="mr-2" />
							Adopt FurrPal!
						</a>
					</div>
					<div className="flex-none">
						<ul className="menu menu-horizontal px-1">
							<Link to={`/views/pet`}>
								<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
									Adopt Now!
								</button>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}