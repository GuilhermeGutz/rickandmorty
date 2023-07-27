import { ReactComponent as Logo } from '../image/background/rickandmortyt1.svg'
import background from '../image/background/backgroundt1.svg'
import { Container, Grid, styled } from '@mui/material'

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

function Loading() {
  return (
    <StyledContainer disableGutters maxWidth={false}>
      <Grid container justifyContent="center" alignItems="center" rowSpacing={6}>
        <Grid item alignItems="center" display="flex" justifyContent="center" xs={12}>
          <Logo alt="logo"/>
        </Grid>
      </Grid>
    </StyledContainer>
  )
}

export default Loading