import React, { ChangeEvent, useState } from 'react'
import { Button, CenteredContainer, Paper, TextField } from '../StyledComponents/StyledComponents'

const NewEmployeeForm = () => {
    const [formValues, setFormValues] = useState({ name: '', dateOfBirth: '', salary: 0, gender: '' })
    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('object');
    }
    return (
        <CenteredContainer>
            <Paper>
                <form onSubmit={handleSubmit}>
                    <h3>Register New Employee</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
                        <TextField
                            value={formValues.name}
                            placeholder='Name'
                            onChange={(e) => { setFormValues({ ...formValues, name: e.target.value }) }}
                        />
                        <TextField
                            value={formValues.dateOfBirth}
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
                            placeholder='Salary'
                            type='number'
                            onChange={(e) => { setFormValues({ ...formValues, salary: parseFloat(e.target.value) }) }}
                        />
                        <CenteredContainer>
                            <Button type='submit'>Submit</Button>
                        </CenteredContainer>
                    </div>
                </form>
            </Paper>
        </CenteredContainer>
    )
}

export default NewEmployeeForm