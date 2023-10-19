
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../api/auth/[...nextauth]/route";
import LoginButton from "@/app/_components/Auth/LoginButton";
import { Container, Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const SignIn = async () => {
  const session = await getServerSession(authOptions);
    // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } };
  }
  const providers = await getProviders(); 

  const getStyles =  {
    'padding': '2rem'
  }

  return (
    <Container maxWidth="sm">
      <Grid2 container>
        <Grid2 xs display="flex" justifyContent="center" alignItems="center">
          <Paper elevation={2} style={getStyles}>
            <h1>Welkom bij de Goed Gebekt Portal</h1>
            <p>Om in te kunnen loggen heb je het e-mailadres nodig waarmee je recht hebt op de google drive </p>
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <LoginButton>Inloggen</LoginButton>
              </div>
            ))}
          </Paper>
        </Grid2>


      </Grid2>
    </Container>
  )
}

export default SignIn;