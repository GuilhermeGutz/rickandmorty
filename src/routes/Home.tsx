import { Button, TextField, Container, Grid, styled, Box } from '@mui/material'
import logo from '../image/background/rickandmortyt1.svg'
import background from '../image/background/backgroundt1.svg'
import './Home.css'

const StyledButton = styled(Button)(() =>({
  width: "84px",
  height: "42px",
  color: "#ffffff",
  textTransform: "none",
  borderRadius: "8px",
  border: "2px solid #ffffff",
  "&:hover":{
    backgroundColor: "#50B63F",
    border: "3px solid #1E9201",
  }
}))

const StyledTextField = styled(TextField)(() =>({
  width: "px",
  height: "42px",
  color: "#9F9F9F",
 //borderRadius: "8px",
 //border: "2px solid #ffffff",
  "&:hover":{
    backgroundColor: "grey",
   // border: "3px solid #1E9201",
    borderColor: "#1E9201",
  }
}))

const StyledContainer = styled(Container)(() =>({
  width: "100vw",
  height: "100vh",
  //backgroundPosition: "center",
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  position: "fixed",
  left: "0",
  top: "0",
  padding: 0,
}))

function Home() {
  return (
    <StyledContainer>
      <Grid container rowSpacing={6} columnSpacing={6}>
        <Grid item xs={12}>
          <img src={logo} alt="logo"/>
        </Grid>
        <Grid item xs={8}>
          <StyledTextField label="Search characters" variant="outlined"/>
        </Grid>
        <Grid item xs={0}>
          <StyledButton variant='outlined'>Search</StyledButton>
        </Grid>
      </Grid>
    </StyledContainer>
  )
}

export default Home
