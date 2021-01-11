import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DescriptionIcon from '@material-ui/icons/Description';

import OrderItem from './fragments/OrderItem';
import { Button, Divider, Typography } from '@material-ui/core';
import OrderService from '../services/OrderService';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "550px",
        width: "40%",
        backgroundColor: theme.palette.background.paper,
        border: "3px solid",
        borderColor: theme.palette.primary.light,
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        overflowY: "scroll",
        overflowX: "hidden"
    },
    buttons: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "10%"
    },
    icon: {
        backgroundColor: theme.palette.primary.dark
    },

    Btn: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.light,
        borderColor: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.dark,
        },
    },
    deleteBtn: {
        backgroundColor: "#801515",
        color: "white",
        "&:hover": {
            backgroundColor: "#ffaaaa",
            color: "black",
        }
    },
    editBtn: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.light,
        borderColor: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.dark,
        },
    }

}));
const OrderDetails = (props) => {
    const classes = useStyles();
    const onCancelHandler = (orderNumber) => {
        
        console.log(orderNumber)
        OrderService.cancelOrder(orderNumber).then(r => console.log(r))
        window.location.reload();
    }

    if (props.item !== null) {
        let order = props.item
        let orderItems = props.item.products
            .map((item, index) => <OrderItem key={index} item={item} />)
        let button = order.status==="NEW"?<Button size="large" className={classes.editBtn}>Process</Button>:<Button size="large" className={classes.editBtn}>Complete</Button>
        return (
            <List className={classes.root}>
                <Typography style={{ textAlign: "center" }} variant="h5">
                    {order.orderNumber}
                </Typography>
                <Divider />
                <ListItem >
                    <ListItemAvatar >
                        <Avatar className={classes.icon}>
                            <DescriptionIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <Typography style={{ textAlign: "center" }} variant="body2">
                        to: <strong>{order.shippingAddress}</strong>
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem >
                    <ListItemAvatar >
                        <Avatar className={classes.icon}>
                            <DescriptionIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <Typography style={{ textAlign: "center" }} variant="body2">
                        Status: <strong>{order.status}</strong>
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem >
                    <ListItemAvatar >
                        <Avatar className={classes.icon}>
                            <DescriptionIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <Typography variant="body2">
                        Sent on: <strong>{order.createdTime}</strong>
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem>
                    <List>
                        {orderItems}
                    </List>
                </ListItem>
                <Divider />
                <Divider />
                <ListItem className={classes.buttons} >
                    {button}
                    <Button onClick={(e) => onCancelHandler(order.orderNumber)} size="large" className={classes.deleteBtn}>Cancel</Button>
                </ListItem>
            </List>
        );

    }
    else {
        return (
            <List className={classes.root}>
                <Typography style={{ textAlign: "center" }} variant="h5">
                    Select an item
                        </Typography>
            </List>
        )
    }
}


export default OrderDetails;