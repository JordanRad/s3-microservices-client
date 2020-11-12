import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { cartFunctions as cf } from '../../helpers/cartFunctions';
const useStyles = makeStyles((theme) => ({
    fragment: {
        borderColor: theme.palette.primary.dark,
        backgroundColor: theme.palette.primary.light,
        textAlign: "center"
    },
    fragmentButton: {
        borderColor: theme.palette.primary.dark,
        '&:hover': {
            borderColor: theme.palette.primary.light,
            backgroundColor: theme.palette.primary.dark,
            color: "white"
        },
    },
    fragmentDivider: {
        borderColor: theme.palette.primary.main,
        height: "1px",
        marginTop: "7px",
        marginBottom: "7px"
    },
    notAvailable: {
        color: "red",
        fontWeight: 600
    },
    image: {
        height: 0, paddingTop: '56%',
        marginBottom:"10px"
    }

}));

const ProductFragment = (props) => {

    const classes = useStyles();

    const onClickHandler = (e) => {
        //console.log(e.target.parentNode.id)
        let item = {
            id: props.id,
            name: props.name,
            price: props.price
        }
        cf.addToCart(item);
        props.refreshCart();
    }
    let isAvailable = (
        <Typography className={props.available ? "" : classes.notAvailable} variant="body2" gutterBottom>
            {props.available ? "Available" : "Not Available"}
        </Typography>);

    return (
        <Card className={classes.fragment} variant="outlined">
            <CardContent>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                    {props.name.toUpperCase()}
                </Typography>
                <Typography variant="body2" color="textPrimary" gutterBottom>
                    {props.description}
                </Typography>
                <CardMedia
                    className={classes.image}
                    image="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                    title="Paella dish"
                />
                <Typography variant="body1" gutterBottom>
                    € {props.price.toFixed(2)}
                </Typography>
                <Divider className={classes.fragmentDivider} />
                {isAvailable}
                <Button disabled={!props.available} className={classes.fragmentButton} id={props.id} onClick={onClickHandler} variant="outlined">Add to cart</Button>
            </CardContent>
        </Card>
    );
}

export default ProductFragment;