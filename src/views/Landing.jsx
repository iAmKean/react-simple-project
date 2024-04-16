import { Link } from "react-router-dom";

export default function Landing() {
	return (
		<div>
			landing
			<Link to={`/`}>
				home
			</Link>
		</div>
	)
}
