export default function Card(props) {
	return (
		<div className={`border-[white] border-[1px] p-2 rounded-[5px] ${props.className}`}>
			{props.children}
		</div>
	)
}