import { Button, TextField, Container, Grid, styled } from '@mui/material'
import { ReactComponent as Logo } from '../image/background/rickandmortyt1.svg'
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
  left: "0",
  top: "0",
  padding: 0,
  position: "fixed",
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center", 
}))

const SearchSectionGrid = styled(Grid)(() =>({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
}))


function Home() {
  return (
    <StyledContainer disableGutters maxWidth={false}>
      <Grid container justifyContent="center" alignItems="center" rowSpacing={6}>
        <Grid item alignItems="center" display="flex" justifyContent="center" xs={12}>
          <Logo alt="logo"/>
        </Grid>
        <Grid item xs={12}>
            <SearchSectionGrid container columnSpacing={1}>
              <Grid item md={6} alignItems="center" display="flex" justifyContent="center">
                <StyledTextField label="Search characters" variant="outlined"/>
              </Grid>
              <Grid item md={6} alignItems="center" display="flex" justifyContent="center">
                <StyledButton variant='outlined'>Search</StyledButton>
              </Grid>
          </SearchSectionGrid>
        </Grid>
      </Grid>
    </StyledContainer>
  )
}

export default Home
