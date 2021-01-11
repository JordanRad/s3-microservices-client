import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import ListAltIcon from '@material-ui/icons/ListAlt';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.dark,
        height: "100%"
    },
    icon: {
        color: theme.palette.secondary.dark,
        marginRight: "20px"
    },
    xColor: {
        color: theme.palette.secondary.dark
    },
    link: {
        display: "flex",
        textDecoration:"none",
        alignItems: "center",
        width: "100%",
        color: theme.palette.primary.dark,
        '&:hover': {
            color: theme.palette.secondary.dark,
            textDecoration: 'none',
        }
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));

export default function DrawerFragment(props) {
    const classes = useStyles();

    let userAuthLinks;
    if (props.isAuthenticated) {
        userAuthLinks =
            <ListItem key={1}>
                <Link to={'./logout'} className={classes.link}>
                    <ExitToAppRoundedIcon className={classes.icon} />
                    <ListItemText primary={"Logout"} />
                </Link>
            </ListItem>
    } else {
        userAuthLinks =
            <>
            <ListItem key={2}>
                <Link to={'./products'} className={classes.link}>
                    <FeaturedPlayListIcon className={classes.icon} />
                    <ListItemText primary={"Product management"} />
                </Link>
            </ListItem>
            <ListItem key={3}>
                <Link to={'./orders'} className={classes.link}>
                    <FiberManualRecordIcon className={classes.icon} />
                    <ListItemText primary={"See pending orders"} />
                </Link>
            </ListItem>
            
            </>
    }
    const list = (
        <div className={classes.main} onClick={props.toggleDrawer}>
            <List>
                <ListItem button key={1000} onClick={props.toggleDrawer}>
                    <ListItemIcon className={classes.xColor}> <CloseOutlinedIcon /></ListItemIcon>
                    <ListItemText primary={"Close"} />
                </ListItem>
                <Divider />
                {userAuthLinks}
                <Divider />
                <ListItem disabled button key={6} onClick={props.toggleDrawer}>
                    <ListItemText primary={"Webshop LTD."} />
                </ListItem>
            </List>
        </div>
    );

    return (
        <Drawer open={props.openProp} onClose={props.toggleDrawer}>
            {list}
        </Drawer>
    );
}