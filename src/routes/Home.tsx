import { Button, styled } from '@mui/material'
import logo from '../image/background/rickandmortyt1.svg'
import './Home.css'

const StyledButton = styled(Button)(() =>({
  width: "84px",
  height: "42px",
  color: "#ffffff",
  borderRadius: "8px",
  border: "2px solid #ffffff",
  "&:hover":{
    backgroundColor: "#50B63F",
    border: "3px solid #1E9201",
  }
}))

function Home() {
  return (
    <div className='container'>
      <img src={logo} alt="logo"/>
      <StyledButton variant='outlined'>Search</StyledButton> 
    </div>
  )
}

export default Home
