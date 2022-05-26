import { EmployeeData } from "../../Api";
import { ActionTypes } from "../Actions/types"


export interface InitialStateTypes {
    isError: boolean,
    isLoading: boolean,
    isSuccess: boolean,
    data: EmployeeData[]
}

const initialState: InitialStateTypes = {
    data: [],
    isError: false,
    isLoading: false,
    isSuccess: false
}

export const employeeReducer = (state = initialState, action: ActionTypes) => {
    const resetState = {
        ...state,
        isError: false,
        isSuccess: false,
        isLoading: true
    }
    switch (action.type) {
        case "ADD_EMPLOYEE":
            return resetState
        case "UPDATE_EMPLOYEE":
            return resetState
        case "DELETE_EMPLOYEE":
            return {
                ...state,
                isError: false,
                isSuccess: false
            }
        case "GET_EMPLOYEES":
            return {
                ...state,
                data: action.payload
            }
        case 'IS_ERROR':
            return {
                ...state,
                isError: action.payload
            }
        case 'IS_LOADING':
            return {
                ...state,
                isLoading: action.payload
            }
        case 'IS_SUCCESS':
            return {
                ...state,
                isSuccess: action.payload
            }
        default:
            return state
    }
}