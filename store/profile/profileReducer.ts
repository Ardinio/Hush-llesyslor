import { ProfileAction } from "./profileActions";
import { ProfileState, initialState } from "./profileState";

type KnownAction = ProfileAction;

function profileReducer(state: ProfileState = initialState, action: KnownAction): ProfileState {
    switch (action.type) {
        case "SET_NAME": {
            return {
                ...state,
                name: action.payload
            }
        }
        case "SET_AVATAR": {
            return {
                ...state,
                avatar: action.payload
            }
        }
        default: return state;
    }
}

export default profileReducer;