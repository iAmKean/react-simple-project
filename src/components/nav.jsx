export default function Nav() {
	return (
		<div className="min-h-[50px] flex items-center justify-between p-4 md:p-6">
			<div className="font-bold">
				Adopt FurrPal!
			</div>
			<div>
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
					Adopt Now!
				</button>
			</div>
		</div>
	)
}