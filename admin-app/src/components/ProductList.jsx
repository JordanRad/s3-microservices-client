import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DescriptionIcon from '@material-ui/icons/Description';
const useStyles = makeStyles((theme) => ({
    root: {
        height: "550px",
        width: "38%",
        backgroundColor: theme.palette.background.paper,
        overflowY: "scroll",
        overflowX: "hidden",
        padding: 0,
        marginRight: "12%"
    },
    item: {
        backgroundColor: theme.palette.primary.light,
        marginTop: "5px",
        marginBottom: "5px",
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.light
        }
    },
    icon: {
        backgroundColor: theme.palette.primary.dark
    }

}));
const ProductList = (props) => {
    const classes = useStyles();
    //console.log(props.orders)
    const onClickHandler = (e, item) => {

        props.onClick(item)
    }

    if (props.items === null) {
        return (
            <h2>Loadiing....</h2>
        )
    } else {
        let items = props.items.map((item, index) => {
            return (
                <>
                    <ListItem className={classes.item} button key={index} onClick={(e) => onClickHandler(e, item)}>
                        <ListItemAvatar  >
                            <Avatar className={classes.icon}>
                                <DescriptionIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.name} secondary={item.description} />
                    </ListItem>
                </>)
        })

        return (
            <List className={classes.root}>
                {items}
            </List>
        );
    }
}


export default ProductList;