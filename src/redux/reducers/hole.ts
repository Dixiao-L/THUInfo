import {Hole} from "../states/hole";
import {defaultHole} from "../defaults";
import {HoleAction} from "../actions/hole";
import {HOLE_SET_TOKEN} from "../constants";

export const hole = (state: Hole = defaultHole, action: HoleAction): Hole => {
	switch (action.type) {
		case HOLE_SET_TOKEN:
			return {
				...state,
				token: action.payload,
			};
		default:
			return state;
	}
};
