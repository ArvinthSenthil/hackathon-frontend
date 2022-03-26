import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Avatar from '@mui/material/Avatar';
import swal from 'sweetalert';


export function Login() {
  const [username, setuser] = useState("");
  const [password, setPassword] = useState("");
  
  const history = useHistory();
  const paperStyle =  { borderRadius: "10px", padding:"20px", Height: "100vh", width:"300px", margin:"20px auto"}
  

 function login(){ swal({
    title: "Signup completed!",
    text: "You are signed in!",
    icon: "success",
    button: "ok",
  });
 }

  return (
<div>
                <Grid mt="50px" align="center">
                  <Paper elevation={10} style={ paperStyle}>
                    

                        <Typography variant="h4" marginTop="40px"> LOGIN </Typography>
                        
                        
                        <TextField value={username} type="text" onChange={(event) => setuser(event.target.value)}
                            label="Enter your email" variant="standard"  fullWidth/> <br />

                        <TextField value={password} type="password" onChange={(event) => setPassword(event.target.value)}
                             label="Enter your Password" variant="standard" marginTop="20px" fullWidth/><br />
                        
                        <FormControlLabel control={<Checkbox Checked color="primary"/>} label="Remember me"/>

                        <Button onClick={login}  variant="contained" marginTop="20px" fullWidth>Login</Button>

                        <Typography variant="h6" marginTop="20px">
                               New User ? <Link to="/signup" onClick={() => history.push('/signup')}>Sign Up</Link>
                        </Typography>

                     
                  </Paper>  
                </Grid>    
                    
                  </div>
    
  );
}
export function Profile(){
return(
  <div>
  <Avatar src="/broken-image.jpg"></Avatar>

  </div>
)
}