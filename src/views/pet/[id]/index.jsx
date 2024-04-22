import { Link } from "react-router-dom";

export default function Details() {

	const bgStyle = {
		"background": "url(/assets/animals/bg.jpg)",
		"backgroundRepeat": "repeat",
		"backgroundAttachment": "fixed",
		"backgroundPosition": "center top",
		"backgroundSize": "100% 100%",
	}

	return (
		<div className="p-4 md:p-6 min-h-[calc(100vh-80px)]" style={bgStyle}>
			<div className="xl:w-[1200px] xl:m-auto">
				<div className="mb-8">
					<div className="text-sm breadcrumbs">
						<ul>
							<li><a href="/views/pet">Pets</a></li>
							<li>Details</li>
						</ul>
					</div>
				</div>

				<div className="details-wrapper">

					<div className="mb-8 md:flex">
						<div>
							<div className="avatar">
								<div className="w-[200px] rounded">
									<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
								</div>
							</div>
						</div>
						<div className="md:ml-4">
							<div className="text-[18px]">Linsey Horton</div>
							<div className="text-[16px]">Looking for a dog walker</div>
							<div className="text-[14px]">Aliquam dictum nulla eu varius porta</div>
							<div className="text-[16px]">Dog Walker</div>
							<div className="flex items-center">
								<div>
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24">
										<path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"></path>
									</svg>
								</div>
								<div className="ml-2">
									USA
								</div>
							</div>
						</div>
					</div>

					<div className="mb-8">
						<h2 className="font-bold text-[22px]">Description</h2>
						<div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu nisi ac mi malesuada vestibulum. Phasellus tempor nunc eleifend cursus molestie. Mauris lectus arcu, pellentesque at sodales sit amet, condimentum id nunc.

								Donec ornare mattis suscipit. Praesent fermentum accumsan vulputate. Sed velit nulla, sagittis non erat id, dictum vestibulum ligula. Maecenas sed enim sem. Etiam scelerisque gravida purus nec interdum. Phasellus venenatis ligula in faucibus consequat. Aliquam dictum nulla eu varius porta. Maecenas congue dui id posuere fermentum. Morbi at iaculis nibh, at semper augue.</p>
						</div>
					</div>

					<div className="md:flex md:justify-center">
						<button className="w-full btn btn-success md:w-[150px]">
							<span className="text-white text-[16px]">Adopt</span>
						</button>
					</div>
				</div>
			</div>

		</div>
	)
}
