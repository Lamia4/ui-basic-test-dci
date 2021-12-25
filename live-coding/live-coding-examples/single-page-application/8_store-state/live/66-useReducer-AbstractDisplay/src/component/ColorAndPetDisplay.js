import React from 'react';

function ColorAndPetDisplay({ state }) {
	return (
		<dl>
			<AbstractDisplay label="Farbe" value={state.color} />
			<AbstractDisplay label="Tier" value={state.pet} />
		</dl>
	);
}

function AbstractDisplay({ label, value }) {
	return (
		<React.Fragment>
			<dt>{label}:</dt>
			<dd>
				<em>{value}</em>
			</dd>
		</React.Fragment>
	);
}

export default ColorAndPetDisplay;
