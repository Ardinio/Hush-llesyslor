export interface ProfileState {
    name: string;
    avatar: string;
    darkmode: boolean;
    isLoading: boolean;
}

export const initialState: ProfileState = {
    name: '',
    avatar: '',
    darkmode: false,
    isLoading: false
}