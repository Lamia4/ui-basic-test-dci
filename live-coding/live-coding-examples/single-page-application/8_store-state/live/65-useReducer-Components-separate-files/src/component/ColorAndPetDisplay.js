
function ColorAndPetDisplay({ state }) {
	return (
		<dl>
			<dt>Farbe:</dt><dd>{state.color}</dd>
			<dt>Tier:</dt><dd>{state.pet}</dd>
		</dl>
	);
}

export default ColorAndPetDisplay;
