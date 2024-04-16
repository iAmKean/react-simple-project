import { Link } from "react-router-dom";

export default function Pet() {
	return (
		<div>
			pet
			<br />
			<Link to={`/pet/1`}>
				pet details
			</Link>
		</div>
	)
}
