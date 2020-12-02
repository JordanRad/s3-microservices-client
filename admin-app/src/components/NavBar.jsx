import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerFragment from './fragments/DrawerFragment';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "85px",
    },
    menuButton: {
        marginRight: theme.spacing(4),
    },
    button: {
        marginLeft: "auto",
    },
    navColor:{
        backgroundColor:theme.palette.primary.dark,
        color:"white",
        textDecoration:"none"
    }

}));

const NavBar =(props)=> {

    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);


    const toggleDrawer = (event) => {
        setIsOpen(!isOpen);
    }
    
    
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.navColor}>
                <Toolbar>
                    <IconButton onClick={toggleDrawer} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    {props.children}
                </Toolbar>
                <DrawerFragment toggleDrawer={toggleDrawer} openProp={isOpen} />
            </AppBar>
        </div>
    );
}
export default NavBar;