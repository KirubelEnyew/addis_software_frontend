import { EmployeeData, EmployeePostData } from "../../Api"

export const GET_EMPLOYEES = 'GET_EMPLOYEES'
export const SET_EMPLOYEES = 'SET_EMPLOYEES'
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE'
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE'
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE'
export const IS_ERROR = 'IS_ERROR'
export const IS_LOADING = 'IS_LOADING'
export const IS_SUCCESS = 'IS_SUCCESS'

interface EmployeeAddActionTypes {
    type: typeof ADD_EMPLOYEE,
    payload: EmployeePostData
}

interface EmployeeGetActionTypes {
    type: typeof GET_EMPLOYEES,
    payload: EmployeeData[]
}

interface ErrorActionTypes {
    type: typeof IS_ERROR,
    payload: boolean
}

interface LoadingActionTypes {
    type: typeof IS_LOADING,
    payload: boolean
}

interface SuccessActionTypes {
    type: typeof IS_SUCCESS,
    payload: boolean
}

interface DeleteEmployeeActionTypes {
    type: typeof DELETE_EMPLOYEE,
    payload: string
}

interface UpdateEmployeeActionTypes {
    type: typeof UPDATE_EMPLOYEE,
    payload: EmployeeData
}

export type ActionTypes = EmployeeAddActionTypes |
    EmployeeGetActionTypes |
    ErrorActionTypes |
    LoadingActionTypes |
    SuccessActionTypes |
    DeleteEmployeeActionTypes |
    UpdateEmployeeActionTypes