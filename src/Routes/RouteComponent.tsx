import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EmployeeList from '../Components/Employee/EmployeeList'
import NewEmployeeForm from '../Components/Employee/NewEmployeeForm'
import NavBar from '../Components/NavigationBar/NavBar'

const RouteComponent = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<EmployeeList />} />
                <Route path='/new-employee' element={<NewEmployeeForm />} />
            </Routes>
        </>
    )
}

export default RouteComponent