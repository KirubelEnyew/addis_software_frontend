import React from 'react'
import { EmployeeData } from '../../Api'
import { CenteredContainer, Button, Table, TableRow } from '../StyledComponents/StyledComponents'
import '../Shared/style.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { DELETE_EMPLOYEE } from '../../Store/Actions/types'

interface EmployeeListProps {
    data: EmployeeData[]
}

const EmployeeCards: React.FC<EmployeeListProps> = ({ data }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <CenteredContainer>
            <Table>
                <tr>
                    <th>Name</th>
                    <th>Birth Date</th>
                    <th>Gender</th>
                    <th>Salary</th>
                    <th>Actions</th>
                </tr>
                {data.map((empData) => (
                    <TableRow key={empData._id}>
                        <td>
                            <CenteredContainer>
                                <p>{empData.name}</p>
                            </CenteredContainer>
                        </td>
                        <td>
                            <CenteredContainer>
                                <p>{empData.dateOfBirth}</p>
                            </CenteredContainer>
                        </td>
                        <td>
                            <CenteredContainer>
                                <p>{empData.gender}</p>
                            </CenteredContainer>
                        </td>
                        <td>
                            <CenteredContainer>
                                <p>{empData.salary}</p>
                            </CenteredContainer>
                        </td>
                        <td>
                            <CenteredContainer>
                                <Button
                                    variant='outlined'
                                    colorType='primary'
                                    height='30px'
                                    onClick={() => navigate(`/employee-form`, { state: empData })}
                                    fontWeight={400}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant='outlined'
                                    colorType='error'
                                    height='30px'
                                    onClick={() => dispatch({ type: DELETE_EMPLOYEE, payload: empData._id })}
                                    fontWeight={400}
                                >
                                    Delete
                                </Button>
                            </CenteredContainer>
                        </td>
                    </TableRow>
                ))}
            </Table>
        </CenteredContainer>
    )
}

export default EmployeeCards