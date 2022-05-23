import { EmployeeData, EmployeePostData } from "../../Api";
import { ADD_EMPLOYEE, GET_EMPLOYEES, IS_ERROR, IS_LOADING, IS_SUCCESS } from "./types";

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

