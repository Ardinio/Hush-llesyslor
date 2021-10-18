import { AppThunk } from "../store";


export interface SetNameAction {
    type: "SET_NAME";
    payload: string;
}

export interface SetAvatarAction {
    type: "SET_AVATAR";
    payload: string;
}

export interface SetDarkModeAction {
    type: "SET_DARKMODE";
}

export interface SetIsLoadingAction {
    type: "SET_IS_LOADING";

}

export type ProfileAction =
    SetNameAction |
    SetAvatarAction |
    SetDarkModeAction |
    SetIsLoadingAction;


    export const setProfileName = (name: string): AppThunk =>
    async (dispatch, getState) => {
        // dispatch({ type: "SET_IS_LOADING" });
        dispatch({ type: "SET_NAME", payload: name });

        // try {
        //     await fetch('/api/user/setname', {
        //         body: name,
        //     });
        // } catch (error) {
        //     // save error to store
        //     // dispatch({ type: "SET_ERROR", payload: .... });
        // }
        
    }

    export const setProfileAvatar = (avatar: string): AppThunk =>
    async (dispatch, getState) => {
        // dispatch({ type: "SET_IS_LOADING" });
        dispatch({ type: "SET_AVATAR", payload: avatar });

        // try {
        //     await fetch('/api/user/setavatar', {
        //         body: avatar,
        //     });
        // } catch (error) {
        //     // save error to store
        //     // dispatch({ type: "SET_ERROR", payload: .... });
        // }
        
    }    