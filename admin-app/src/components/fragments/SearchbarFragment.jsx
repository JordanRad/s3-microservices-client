import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flex: 1,
        marginTop: '3%',
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.dark,
        },
        padding: "0px",
        marginBottom:'11px'

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
    }
}));

const SearchbarFragment = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField
            onChange={props.onChange}
                className={classes.textField}
                color="primary"
                id="cityInput"
                label="Search here...." variant="outlined"
                inputProps={{ className: classes.input }}
                InputLabelProps={{ className: classes.label }}
            />
        </div>
    );
}

export default SearchbarFragment;