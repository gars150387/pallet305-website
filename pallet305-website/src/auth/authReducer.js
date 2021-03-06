import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.english:
            return {
                language: true
            }
            break;
        case types.spanish:
            return {
                language: false
            }
            break;
        default:
            return state;
    }
}