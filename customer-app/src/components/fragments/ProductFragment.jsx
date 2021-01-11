import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { cartFunctions as cf } from '../../helpers/cartFunctions';
const useStyles = makeStyles((theme) => ({
    root: {
        borderColor: theme.palette.primary.dark,
        backgroundColor: theme.palette.primary.light,
        justifyContent:"center",
        textAlign: "center",
        
        [theme.breakpoints.only('xs')]: {
            height: "96%"
        },
        [theme.breakpoints.only('sm')]: {
            height: "93%",
        },
        [theme.breakpoints.up('md')]: {
            height: "385px"
        },
    },
    fragmentButton: {
        borderColor: theme.palette.primary.dark,
        '&:hover': {
            borderColor: theme.palette.primary.light,
            backgroundColor: theme.palette.primary.dark,
            color: "white"
        },
        marginBottom:"6px",
        
    },
    fragmentDivider: {
        borderColor: theme.palette.primary.main,
        height: "1px",
        marginTop: "7px",
        marginBottom: "7px"
    },
    notAvailable: {
        color: "red",
        fontWeight: 400
    },
    image: {
        width:"99%",
        margin:"auto",
        [theme.breakpoints.only('xs')]: {
            width:"99%",
        },
        [theme.breakpoints.only('sm')]: {
            width:"70%",
        },
        [theme.breakpoints.up('md')]: {
            width:"60%",
        },
        paddingTop: '50%',
        marginBottom: "10px"
    },
    link:{
        color:theme.palette.primary.dark,
        textDecoration:"none",
        '&:hover': {
            color: theme.palette.secondary.dark
        },

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
    const forwardToDetailsHandler = (e)=>{
        console.log(props.id)
        window.location.href=`./item/${props.id}`
    }
    let isAvailable = (
        <Typography className={props.available ? "" : classes.notAvailable} variant="body2" gutterBottom>
            {props.available ? "Available" : "Not Available"}
        </Typography>);

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                    {props.name.toUpperCase()}
                </Typography>
                <CardMedia
                    className={classes.image}
                    image="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                    title="Paella dish"
                />
                <Typography variant="body1" gutterBottom>
                    € {props.price.toFixed(2)}
                </Typography>
                <Link to="" className={classes.link} id={props.id} onClick={forwardToDetailsHandler} variant="outlined">See more</Link>
                <Divider className={classes.fragmentDivider} />
                {isAvailable}
                <Button disabled={!props.available} className={classes.fragmentButton} id={props.id} onClick={onClickHandler} variant="outlined">Add to cart</Button>
            </CardContent>
        </Card>
    );
}

export default ProductFragment;