import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import {cartFunctions as cf} from '../../helpers/cartFunctions';
const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
        marginLeft:'auto'
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

const ReviewFragment = () => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem("user"));
    const address = user.address.country.toUpperCase()+ ": "+user.address.zip.toUpperCase()+"- "+user.address.address
    let cartItems =cf.itemQuantityCart()

    console.log(user);
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
      </Typography>
            <List disablePadding>
                {cartItems.map((product) => (
                    <ListItem key={product.id} className={classes.listItem}>
                        <ListItemText primary={product.name} />
                        <Typography variant="body2">{"€ "+product.price+" x "+product.quantity}</Typography>
                    </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                    <Typography variant="body1" className={classes.total}>
                        {"Total: € "+cartItems.reduce(((acc,cv)=>acc+cv.price*cv.quantity),0)}
                     </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Shipping
                    </Typography>
                    <Typography variant="body2" gutterBottom>{address}</Typography>
                    <Typography variant="body2" gutterBottom>{user.address.city.toUpperCase()}</Typography>
                </Grid>

            </Grid>
        </React.Fragment>
    );
}

export default ReviewFragment;