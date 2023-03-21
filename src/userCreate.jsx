import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Grid, TextField, Typography } from '@mui/material';

export default function UserCreate() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{p:2}}>
        
        <Typography variant='h6' gutterBottom component='div'>
            Create User
        </Typography>
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12}> 
                <TextField id="fname" label="First Name" variant="outlined" 
                fullWidth required />
                </Grid>
                {/* <hr/> */}
                <Grid item xs={12}> 
                <TextField id="lname" label="Last Name" variant="outlined" 
                fullWidth required />
                </Grid>
                {/* <hr/> */}
                <Grid item xs={12} sm={6}> 
                <TextField id="username" label="Username" variant="outlined" 
                fullWidth required />
                </Grid>
                {/* <hr/> */}
                <Grid item xs={12} sm={6}> 
                <TextField id="email" label="Email" variant="outlined" 
                fullWidth required />
                </Grid>
                {/* <hr/> */}
                <Grid item xs={12}> 
                <TextField id="avatar" label="Avatar" variant="outlined" 
                fullWidth required />
                </Grid>
                <Grid item xs={12}>
                <Button variant="contained" fullWidth>Create</Button>
                </Grid>
            </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}