import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CommunicationService from '../services/CommunicationService';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 900,
        margin: "auto",
        marginTop:"1%",
        paddingTop:"1%"
    },
    media: {
        height: 0,
        paddingTop: '44.25%', // 16:9
    },
    avatar: {
        backgroundColor: theme.palette.primary.dark,
    },
    fragmentButton: {
        borderColor: theme.palette.primary.light,
        backgroundColor: theme.palette.primary.dark,
        color: "white",
        '&:hover': {
            borderColor: theme.palette.primary.dark,
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.dark
        },
        marginBottom: "6px",

    },
}));
const ProductDetails = () => {
    let classes = useStyles();
    let history = useHistory();
    let id = useParams().id;
    const [item, setItem] = useState(null)

    useEffect(() => {
        CommunicationService.getItemById(id)
            .then((response) => setItem(response))
    }, [])

    const goBackHandler = (e) => {
        history.goBack();
    }
    console.log(item)

    if (item === null) {
        return (<>
            <Typography variant="h6" className={classes.title}>
                Loading...
            </Typography>
        </>)
    } else {
        return (
            <>
                <Card className={classes.root}>
                <CardActions disableSpacing>
                    <Button onClick={goBackHandler} disabled={!item.quantity > 0} className={classes.fragmentButton} id={item.id} variant="outlined">Back to products</Button>
                </CardActions>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                {item.category[0]}
                            </Avatar>
                        }
                        title={item.name}
                        subheader={"€ " + item.price}
                    />
                    <CardMedia
                        className={classes.media}
                        image="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                        title="Image"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.detailedDescription}
                        </Typography>
                    </CardContent>
                </Card>
            </>
        );
    }
}

export default ProductDetails;