import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_EMPLOYEES } from '../../Store/Actions'
import { InitialStateTypes } from '../../Store/Reducer/reducer'
import EmployeeCards from './EmployeeCards'
const EmployeeList = () => {
    const dispatch = useDispatch()
    const appState = useSelector<InitialStateTypes, InitialStateTypes>((state: InitialStateTypes) => state)
    useEffect(() => {
        dispatch({ type: GET_EMPLOYEES })
    }, [dispatch])
    return (
        <>
            {appState.isError && dispatch({ type: GET_EMPLOYEES })}
            <div style={{ height: '100vh' }}>
                {appState.data ?
                    <EmployeeCards data={appState.data} />
                    :
                    <h3>Loading...</h3>
                }
            </div>
        </>
    )
}

export default EmployeeList