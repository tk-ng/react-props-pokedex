import defaultList from "../assets/defaultList";
import { Pokecard } from "./Pokecard";
import PropTypes from "prop-types";

export function Pokedex({ list = defaultList }) {
	return (
		<>
			{list.map((p) => (
				<Pokecard
					key={p.id}
					id={p.id}
					name={p.name}
					type={p.type}
					base_experience={p.base_experience}
				/>
			))}
		</>
	);
}

Pokedex.propTypes = { list: PropTypes.array };
