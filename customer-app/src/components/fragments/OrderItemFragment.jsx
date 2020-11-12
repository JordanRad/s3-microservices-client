import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import {cartFunctions as cf} from '../../helpers/cartFunctions';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    fragmentButton: {
        backgroundColor:theme.palette.primary.dark,
        color:theme.palette.primary.light,
        borderColor: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color:theme.palette.primary.dark,
        },
    },
}));

const OrderItem = (props) => {
    const classes = useStyles();
    const onClickHandler = (e) => {
        let deletedItemName = e.target.parentNode.getAttribute("item");
        console.log(deletedItemName)
        cf.deleteFromCart(deletedItemName)
        props.refreshCart()
    }
    return (
        <>
            <ListItem key={props.item.id}>
                <ListItemIcon>
                    <PlaylistAddCheckIcon style={{color:"#365866"}} />
                </ListItemIcon>
                <ListItemText primary={props.item.name} />
                <ListItemText primary={"€" + " " + props.item.price.toFixed(2)+" x "+props.item.quantity} />
                <Button 
                className={classes.fragmentButton}
                item={props.item.name} onClick={onClickHandler} variant="outlined">Delete</Button>
            </ListItem>
            <Divider />
        </>
    );
}
export default OrderItem;