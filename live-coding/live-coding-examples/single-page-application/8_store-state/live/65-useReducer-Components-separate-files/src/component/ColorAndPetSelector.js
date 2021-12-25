import React from 'react';

function ColorAndPetSelector({ state, dispatch, ACTION_TYPE }) {
	const COLOR = {
		BLACK: 'Schwarz',
		BLUE: 'Blau',
		PINK: 'Pink'
	};

	const PET = {
		CAT: 'Katze',
		DOG: 'Hund',
		MOUSE: 'Maus'
	};

	return (
		<React.Fragment>
			<select
				value={state.color}
				onChange={(event) => dispatch({ type: ACTION_TYPE.COLOR_CHANGE, value: event.target.value })}
			>
				<option value={COLOR.BLACK}>{COLOR.BLACK}</option>
				<option value={COLOR.BLUE}>{COLOR.BLUE}</option>
				<option value={COLOR.PINK}>{COLOR.PINK}</option>
			</select>
			<select
				value={state.pet}
				onChange={(event) => dispatch({ type: ACTION_TYPE.PET_CHANGE, value: event.target.value })}
			>
				<option value={PET.CAT}>{PET.CAT}</option>
				<option value={PET.DOG}>{PET.DOG}</option>
				<option value={PET.MOUSE}>{PET.MOUSE}</option>
			</select>
		</React.Fragment>
	);
}

export default ColorAndPetSelector;
