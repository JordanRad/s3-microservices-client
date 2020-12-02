import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import { cartFunctions as cf } from '../../helpers/cartFunctions';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles((theme) => ({
    fragmentButton: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.light,
        borderColor: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.dark,
        },
    },
    icon: {
        color: "#365866",
        [theme.breakpoints.only('xs')]: {
            display: 'none'
        },
    }
}));

const OrderItem = (props) => {
    const classes = useStyles();
    const onClickHandler = (e) => {
        let deletedItemName = e.target.parentNode.getAttribute("item");
        cf.deleteFromCart(deletedItemName)
        props.refreshCart()
    }
    return (
        <>
            <ListItem dense key={props.item.id}>
                <ListItemIcon className={classes.icon}>
                    <PlaylistAddCheckIcon />
                </ListItemIcon>
                <ListItemText primary={props.item.name} />
                <ListItemText primary={"€" + " " + props.item.price.toFixed(2) + " x " + props.item.quantity} />
                {/* <Button
                    size="small"
                    className={classes.fragmentButton}
                    item={props.item.name} onClick={onClickHandler} variant="outlined">X
                </Button> */}
                <IconButton aria-label="delete" size='small' className={classes.fragmentButton} onClick={onClickHandler}>
                    <DeleteIcon />
                </IconButton>
            </ListItem>

            <Divider />
        </>
    );
}
export default OrderItem;