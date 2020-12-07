import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Divider } from '@material-ui/core';
import CommunicationService from '../services/CommunicationService';
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        '& .MuiOutlinedInput-input': {
            padding: "27.7px 11px"
        }

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

}));

const Login = () => {
    const classes = useStyles();

    const [email, setEmail] = useState("x");
    const [password, setPassword] = useState("x");

    const [eV, setEv] = useState(false);
    const [pV, setPv] = useState(false);
    const emailHandler = (e) => {
        setEmail(e.target.value)
        // !email.includes("@") ? setEv(true) : setEv(false)

    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        // password.length >= 6 ? setPv(false) : setPv(true)
    }
    const signInHandler = (e) => {
        e.preventDefault()
        if (email !== "x" && password !== "x") {
            if (!eV && !pV) {
                CommunicationService.login(email, password).then(r => {
                    if(r!==""){
                    sessionStorage.setItem("user", JSON.stringify(r))
                    window.location.href="./"
                    }
                })
            }
        }
    }
    //console.log(password)
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
        </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        error={eV}
                        helperText="Please, enter valid email address"
                        onChange={emailHandler}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        error={pV}
                        helperText="Your password must contain at least 7 characters"
                        onChange={passwordHandler}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        onClick={signInHandler}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs={12}>
                            <Link to="./register" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                        <Divider className={classes.divider} />
                        <Grid item xs={12}>
                            <Link to="./" variant="body2">
                                {"Back to products"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
export default Login;