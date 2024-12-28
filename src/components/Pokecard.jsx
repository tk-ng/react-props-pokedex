import PropTypes from "prop-types";
import "../css/Pokecard.css";

export function Pokecard({ id, name, type, base_experience }) {
	const imgLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
	return (
		<div className="Pokecard">
			<h4 className="Pokecard-Name">{name}</h4>
			<img src={imgLink} alt="" />
			<p>Type: {type}</p>
			<p>EXP: {base_experience}</p>
		</div>
	);
}

Pokecard.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	type: PropTypes.string,
	base_experience: PropTypes.number,
};
