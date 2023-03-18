import { Link } from 'react-router-dom'

export default function Card({id, title, cover}) {

	return (
		<Link to={`/accomodation/${id}`} className="gallery_card">
			<img src={cover} alt={title} />
			<h3 className="card-text" >{title}</h3>	
		</Link>
	)
}
