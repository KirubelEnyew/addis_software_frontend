import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Appbar, AppBarText, Button } from '../StyledComponents/StyledComponents'

const NavBar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const isOnAddRoute = () => {
    if (location.pathname === '/') return false

    return true
  }
  return (
    <Appbar >
      <AppBarText onClick={() => { navigate('/') }}>Addis Software: Test Project</AppBarText>
      <Button
        variant='filled'
        colorType='success'
        onClick={() => { isOnAddRoute() ? navigate('/') : navigate('/employee-form') }}
        width='150px'>
        {isOnAddRoute() ? '< Go back' : '+ Add Employee'}
      </Button>
    </Appbar>
  )
}

export default NavBar