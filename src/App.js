import React, {  useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css';
import { Login,Profile } from './Login';
import { SignUp } from './SignUp';
import {  Questionlist } from './Homepage';
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import {  Fragment } from 'react'
import {Addquestion} from './Addquestion.js'
import {Companylist} from './company.js'
import {QuestionPage} from "./questionpage";





function App() {
  const history = useHistory(); // to update Tool bar/nav bar
  const array = [
   
    {
      name: <div className="drawer-name">Add Question</div>,
      onClick: '/addque',
      
    },
    {
      name: <div className="drawer-name">Company</div>,
      onClick: '/company',
     
    },
    {
      name: <div className="drawer-name">Home</div>,
      onClick: '/',
     
    },
  ]

  const [state, setState] = useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {array.map(({ name, onClick, icon }, index) => (
          <ListItem
            button
            key={index}
            onClick={() => {
              history.push(onClick)
            }}
          >
            <ListItemText color="success" primary={name} />
            {icon}
          </ListItem>
        ))}
      </List>
    </Box>
  )


  return (
    <div className="App">

          <div className="Appbar">
            <AppBar
           position="static" style={{ marginBottom: "30px" ,height:"60px",background:"#f5f5f5",color:"black"}} >
            <Toolbar variant="dense">
            {['left'].map((anchor) => (
                <Fragment key={anchor}>
                  <Button color="inherit" onClick={toggleDrawer(anchor, true)}>
                    <div className="drawer-icon">
                    <MenuIcon />
                    </div>
                  </Button>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </Fragment>
              ))}
            <img src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg" alt="logo" className="logo"  onClick={() => history.push('/')}  />

          <InputBase className="search-bar" placeholder="search..." inputProps={{ 'aria-lable':'search' }}/>
         
          
          
  
            <Button  className="signup"  color="inherit" 
                onClick={() => history.push('/signup')}
                >SignUp</Button>

                   <Button  className="login"  color="inherit" 
              onClick={() => history.push('/login')}
             >Login</Button>
          <Profile/>
            </Toolbar>
            </AppBar>

            <Switch>

              <Route exact path="/">
                < Questionlist/>
              
              </Route>

              <Route path="/useprofile">
                useprofile
              </Route>
              <Route path="/company">
                <Companylist/>
              </Route>

              <Route exact path="/questions/:id">
                <QuestionPage/>
              </Route>

              <Route path="/login">
                <Login/>
              </Route>

              <Route path="/signup">
                <SignUp/>
               
              </Route>
              <Route path="/addque">
                <Addquestion/>
               
              </Route>
              <Route path="**">
                <NotFound/></Route>

            </Switch>



          </div>

        
    </div>
  );
}
export default App;


function NotFound(){
  return(
    <div className="not-found-container">
      <h2>404 Not Found </h2>
      <img className="not-found-image" src="https://36bvmt283fg61unuud3h7qua-wpengine.netdna-ssl.com/wp-content/uploads/2013/03/airbnb-404.gif"
          alt="" />
    </div>
  );
}