
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../../api/auth/[...nextauth]/route";
import LoginButton from "@/app/_components/Auth/LoginButton";
import { Button, ButtonGroup, Container, Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Welcome from "@/app/_components/Auth/Welcome";

const SignIn = async () => {
  const session = await getServerSession(authOptions);
    // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } };
  }

  return (
    <Container maxWidth="sm">
      <Grid2 container>
        <Grid2 xs display="flex" justifyContent="center" alignItems="center">
          <Welcome>
            <ButtonGroup size="large" disableElevation={true}>
              <LoginButton>Inloggen</LoginButton>
              <Button variant="outlined">Preview MidiSpeler</Button>
            </ButtonGroup>
          </Welcome>
        </Grid2>
      </Grid2>
    </Container>
  )
}

export default SignIn;