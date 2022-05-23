import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Appbar, AppBarText } from '../StyledComponents/StyledComponents'

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <Appbar >
      <AppBarText onClick={() => { navigate('/') }}>Addis Software: Test Project</AppBarText>
    </Appbar>
  )
}

export default NavBar