import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GET_EMPLOYEES } from '../../Store/Actions/types'
import { InitialStateTypes } from '../../Store/Reducer/reducer'
import Loading from '../Shared/Loading'
import { Button, CenteredContainer } from '../StyledComponents/StyledComponents'
import EmployeeCards from './EmployeeCards'
import { employeeListHeader } from './style'

const EmployeeList = () => {
    const dispatch = useDispatch()
    const appState = useSelector<InitialStateTypes, InitialStateTypes>((state: InitialStateTypes) => state)
    const navigate = useNavigate()
    useEffect(() => {
        dispatch({ type: GET_EMPLOYEES })
    }, [dispatch])
    return (
        <>
            {appState.isError && dispatch({ type: GET_EMPLOYEES })}
            <div style={employeeListHeader}>
                <h3>Employees</h3>
                <Button
                    variant='filled'
                    colorType='primary'
                    onClick={() => { navigate('/employee-form') }}
                    width='150px'
                    height='35px'
                >
                    {'+ Add Employee'}
                </Button>
            </div>
            <div style={{ height: '100vh' }}>
                {appState.data ?
                    <EmployeeCards data={appState.data} />
                    :
                    <CenteredContainer>
                        <Loading />
                    </CenteredContainer>
                }
            </div>
        </>
    )
}

export default EmployeeList