import React from 'react'
import { EmployeeData } from '../../Api'
import { CenteredContainer, Button, EmployeeActionButtons, EmployeeCard, SpacedContainer } from '../StyledComponents/StyledComponents'
import '../Shared/style.css'
import { employeeCardContainer } from './style'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { DELETE_EMPLOYEE } from '../../Store/Actions'

interface EmpCardProps {
    data: EmployeeData[]
}

const EmployeeCards: React.FC<EmpCardProps> = ({ data }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <CenteredContainer style={employeeCardContainer}>
            {data.map((empData) => (
                <EmployeeCard key={empData._id}>
                    <SpacedContainer>
                        <div>
                            <h3>Name</h3>
                            <p>{empData.name}</p>
                        </div>
                        <div>
                            <h3>Birth Date</h3>
                            <p>{empData.dateOfBirth}</p>
                        </div>
                        <div>
                            <h3>Gender</h3>
                            <p>{empData.gender}</p>
                        </div>
                        <div>
                            <h3>Salary</h3>
                            <p>{empData.salary}</p>
                        </div>
                        <EmployeeActionButtons>
                            <Button variant='outlined' colorType='primary' height='35px' onClick={() => navigate(`/edit-employe?id=${empData._id}`)}>Edit</Button>
                            <Button variant='outlined' colorType='error' height='35px' onClick={() => dispatch({ type: DELETE_EMPLOYEE, payload: empData._id })}>Delete</Button>
                        </EmployeeActionButtons>
                    </SpacedContainer>
                </EmployeeCard>
            ))}
        </CenteredContainer>
    )
}

export default EmployeeCards