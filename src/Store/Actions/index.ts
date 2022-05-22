import { EmployeeData, EmployeePostData } from "../../Api";

export const GET_EMPLOYEES = 'GET_EMPLOYEES'
export const SET_EMPLOYEES = 'SET_EMPLOYEES'
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE'
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE'
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE'
export const IS_ERROR = 'IS_ERROR'
export const IS_LOADING = 'IS_LOADING'
export const IS_SUCCESS = 'IS_SUCCESS'

export type ActionTypes =
    { type: typeof ADD_EMPLOYEE, payload: EmployeePostData } |
    { type: typeof GET_EMPLOYEES, payload: EmployeeData[] } |
    { type: typeof IS_ERROR, payload: boolean } |
    { type: typeof IS_LOADING, payload: boolean } |
    { type: typeof IS_SUCCESS, payload: boolean }

export const setEmployees = (employees: EmployeeData[]) => ({
    type: GET_EMPLOYEES,
    payload: employees
})

export const setError = (error: boolean) => ({
    type: IS_ERROR,
    payload: error
})

export const setLoading = (loading: boolean) => ({
    type: IS_LOADING,
    payload: loading
})

export const setSuccess = (success: boolean) => ({
    type: IS_SUCCESS,
    payload: success
})

export const addEmployee = (employee: EmployeePostData) => ({
    type: ADD_EMPLOYEE,
    employee
})

