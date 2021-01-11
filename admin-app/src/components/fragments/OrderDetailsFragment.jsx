import React from 'react';

const OrderDetailsFragment = (props) => {
    return (
        <>
            <Typography style={{ textAlign: "center" }} variant="h4">
                {order.orderNumber}
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="body1">
                {order.shippingAddress}
            </Typography>
            <ListItem >
                <ListItemAvatar >
                    <Avatar className={classes.icon}>
                        <DescriptionIcon />
                    </Avatar>
                </ListItemAvatar>
                <Typography variant="body2">
                    n
                        </Typography>
            </ListItem>
            <Divider />
            <ListItem >
                <ListItemAvatar >
                    <Avatar className={classes.icon}>
                        <EuroIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={""} />
            </ListItem>
            <Divider />
            <ListItem >
                <ListItemAvatar >
                    <Avatar className={classes.icon}>
                        <ListIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={""} />
            </ListItem>
            <Divider />
            <Divider />
            <ListItem className={classes.buttons} >
                <Button size="large" className={classes.editBtn}>Edit</Button>
                <Button onDoubleClick={(e) => onDeleteHandler(e, order.orderNumber)} size="large" className={classes.deleteBtn}>Delete</Button>
            </ListItem>
        </>
    );
}

export default OrderDetailsFragment;