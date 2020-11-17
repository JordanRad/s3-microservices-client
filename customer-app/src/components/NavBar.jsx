import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerFragment from './fragments/DrawerFragment';
import CartIconFragment from './fragments/CartIconFragment';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "90px",
    },
    menuButton: {
        marginRight: theme.spacing(4),
    },
    button: {
        marginLeft: "auto",
    },
    navColor:{
        backgroundColor:theme.palette.primary.dark,
        color:"white"
    }

}));

const NavBar =(props)=> {

    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);


    const toggleDrawer = (event) => {
        setIsOpen(!isOpen);
    }
    
    let user = JSON.parse(localStorage.getItem("user"));
    let content = user===null?"Welcome to Webshop":`Hello, ${user.name}`;
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.navColor}>
                <Toolbar>
                    <IconButton onClick={toggleDrawer} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="body1" className={classes.title}>
                       {content}
                    </Typography>
                    <CartIconFragment cart={props.cart}/>
                </Toolbar>
                <DrawerFragment isAuthenticated={false} toggleDrawer={toggleDrawer} openProp={isOpen} />
            </AppBar>
        </div>
    );
}
export default NavBar;