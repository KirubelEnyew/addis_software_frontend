import React, { ChangeEvent, useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { ADD_EMPLOYEE, IS_ERROR, IS_LOADING, IS_SUCCESS } from '../../Store/Actions'
import { InitialStateTypes } from '../../Store/Reducer/reducer'
import { Alert, Button, CenteredContainer, Paper, TextField } from '../StyledComponents/StyledComponents'

const NewEmployeeForm = () => {
    const [formValues, setFormValues] = useState({ name: '', dateOfBirth: '', salary: 0, gender: 'other' })
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const appState = useSelector<InitialStateTypes, InitialStateTypes>((state: InitialStateTypes) => state)
    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({ type: ADD_EMPLOYEE, payload: formValues })
    }
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
            {appState.isSuccess && navigate('/')}
            {appState.isError &&
                <CenteredContainer>
                    <Alert alertType='error'>
                        Failed to {location.pathname === '/new-employee' ? 'Add New Employee' : 'Update Employee Data'}
                        <Button onClick={() => dispatch({ type: IS_ERROR, payload: false })}>X</Button>
                    </Alert>
                </CenteredContainer>
            }
            <CenteredContainer>
                <Paper>
                    <form onSubmit={handleSubmit}>
                        <h3>Register New Employee</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
                            <TextField
                                value={formValues.name}
                                required={true}
                                placeholder='Name'
                                onChange={(e) => { setFormValues({ ...formValues, name: e.target.value }) }}
                            />
                            <TextField
                                value={formValues.dateOfBirth}
                                required={true}
                                placeholder='Birth Date'
                                onChange={(e) => { setFormValues({ ...formValues, dateOfBirth: e.target.value }) }}
                            />
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
                            <TextField
                                value={formValues.salary}
                                required={true}
                                placeholder='Salary'
                                type='number'
                                onChange={(e) => { setFormValues({ ...formValues, salary: parseFloat(e.target.value) }) }}
                            />
                            <CenteredContainer>
                                <Button disabled={appState.isLoading} variant='filled' colorType='primary' width='200px' type='submit'>Submit</Button>
                            </CenteredContainer>
                        </div>
                    </form>
                </Paper>
            </CenteredContainer>
        </>
    )
}

export default NewEmployeeForm