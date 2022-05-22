import axios from "axios"
import { ActionTypes } from "../Store/Actions"

const baseUrl = 'http://localhost:5000/api/employee/'

type GenderTypes = 'male' | 'female' | 'other'

export interface EmployeeData {
    _id: string,
    name: string,
    dateOfBirth: string,
    gender: GenderTypes,
    salary: number
}

export interface EmployeePostData {
    name: string,
    dateOfBirth: string,
    gender: GenderTypes,
    salary: number
}

export const fetchEmployees = async () => axios.get(`${baseUrl}getEmployees`)

export const registerEmployee = async (data: ActionTypes) => axios.post(`${baseUrl}registerEmployee`, data.payload)

export const deleteEmployee = async (data: ActionTypes) => axios.delete(`${baseUrl}removeEmployee?id=${data.payload}`)

export const updateEmployee = async (data: ActionTypes) => axios.patch(`${baseUrl}updateEmployee`, data.payload)