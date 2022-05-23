import React, { useEffect, ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { EmployeeData } from '../../Api'
import { ADD_EMPLOYEE, IS_ERROR, IS_LOADING, IS_SUCCESS, UPDATE_EMPLOYEE } from '../../Store/Actions'
import { InitialStateTypes } from '../../Store/Reducer/reducer'
import { Alert, Button, CenteredContainer, FormLabel, Paper, TextField } from '../StyledComponents/StyledComponents'

const NewEmployeeForm = () => {
    const [formValues, setFormValues] = useState({ name: '', dateOfBirth: '', salary: 0, gender: 'other' })

    // redux hooks
    const dispatch = useDispatch()
    const appState = useSelector<InitialStateTypes, InitialStateTypes>((state: InitialStateTypes) => state)

    // react router hooks
    const location = useLocation()
    const state = location.state as EmployeeData

    //handlers
    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (location.state) {
            dispatch({ type: UPDATE_EMPLOYEE, payload: { ...formValues, id: state._id } })
        }
        dispatch({ type: ADD_EMPLOYEE, payload: formValues })
    }

    // side effects
    useEffect(() => {
        const handleRouteData = () => {
            if (state) {
                setFormValues(state)
            }
        }
        handleRouteData()
    }, [location, state])

    useEffect(() => {
        const handleStateReset = () => {
            dispatch({ type: IS_ERROR, payload: false })
            dispatch({ type: IS_SUCCESS, payload: false })
            dispatch({ type: IS_LOADING, payload: false })
        }
        handleStateReset()
    }, [dispatch])
    return (
        <>
            {appState.isSuccess &&
                <CenteredContainer>
                    <Alert alertType='success'>
                        {location.pathname === '/new-employee' ? 'Registered New Employee' : 'Updated Employee Data'}
                        <Button onClick={() => dispatch({ type: IS_SUCCESS, payload: false })}>X</Button>
                    </Alert>
                </CenteredContainer>
            }
            {appState.isError &&
                <CenteredContainer>
                    <Alert alertType='error'>
                        Failed to {location.pathname === '/new-employee' ? 'Add New Employee' : 'Update Employee Data'}
                        <Button onClick={() => dispatch({ type: IS_ERROR, payload: false })}>X</Button>
                    </Alert>
                </CenteredContainer>
            }
            <CenteredContainer style={{minHeight: '80vh'}}>
                <Paper>
                    <form onSubmit={handleSubmit}>
                        <h3>Register New Employee</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
                            <div>
                            <FormLabel>Employee Name</FormLabel>
                            <TextField
                                value={formValues.name}
                                required={true}
                                onChange={(e) => { setFormValues({ ...formValues, name: e.target.value }) }}
                            />
                            </div>
                            <div>
                            <FormLabel>Birth Date</FormLabel>
                            <TextField
                                value={formValues.dateOfBirth}
                                required={true}
                                onChange={(e) => { setFormValues({ ...formValues, dateOfBirth: e.target.value }) }}
                            />
                            </div>
                            <div>
                            <FormLabel>Salary</FormLabel>
                            <TextField
                                value={formValues.salary}
                                required={true}
                                type='number'
                                onChange={(e) => { setFormValues({ ...formValues, salary: parseFloat(e.target.value) }) }}
                            />
                            </div>
                            <FormLabel>Gender</FormLabel>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px ' }}>
                                <div>
                                    <input
                                        type="radio"
                                        id="male"
                                        size={100}
                                        value="male"
                                        onChange={(e) => { setFormValues({ ...formValues, gender: e.target.value }) }} />
                                    <label htmlFor="male">Male</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="female"
                                        name="gender-group"
                                        value="female"
                                        onChange={(e) => { setFormValues({ ...formValues, gender: e.target.value }) }} />
                                    <label htmlFor="female">Female</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="other"
                                        name="gender-group"
                                        value="other"
                                        onChange={(e) => { setFormValues({ ...formValues, gender: e.target.value }) }} />
                                    <label htmlFor="other">Other</label>
                                </div>
                            </div>
                            <CenteredContainer margin='25px'>
                                <Button disabled={appState.isLoading} variant='filled' colorType='primary' width='200px' height='40px' type='submit'>Submit</Button>
                            </CenteredContainer>
                        </div>
                    </form>
                </Paper>
            </CenteredContainer>
        </>
    )
}

export default NewEmployeeForm