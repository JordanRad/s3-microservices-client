import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import ProductDialog from '../fragments/ProductDialog';
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flex: 1,
        justifyContent: "space-between",
        marginLeft: "2.5%",
        marginRight: "2.5%",
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.dark,
        },
        padding: "0px",
        marginBottom: '12px'

    },
    input: {
        color: "black",
    },
    label: {
        color: theme.palette.primary.dark,
        opacity: 0.7
    },
    textField: {
        flex: 0.40,
    },
    button: {
        flex: 0.20,
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.light,
        borderColor: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.dark,
        },
    }

}));

const SearchbarFragment = (props) => {
    const classes = useStyles();

    const [isOpen, setIsOpen] = useState(false)
    const [type, setType] = useState("");

    const openDialog = (menuId) => {
        setIsOpen(true)
       
    }

    const closeDialog = () => {
        setIsOpen(!isOpen)
        setType("")
    }

    const onChangeHandler = (e) => {
        props.onChange(e.target.value)
    }
    return (
        <div className={classes.root}>
            <TextField
                onChange={onChangeHandler}
                className={classes.textField}
                color="primary"
                id="cityInput"
                label="Search here...." variant="outlined"
                inputProps={{ className: classes.input }}
                InputLabelProps={{ className: classes.label }}
            />
            { !window.location.href.includes("orders") ?
            <>
            <ProductDialog product={{}} type = {type} closeDialog={closeDialog} isOpen={isOpen}/>
                <Button onClick={(e) => {
                    setIsOpen(!isOpen)
                    setType("CREATE")
                }} className={classes.button}>Add new product</Button></> : null}

        </div>
    );
}

export default SearchbarFragment;