import React, { useEffect, useState } from 'react';
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
import NavBar from '../components/NavBar';
import CommunicationService from '../services/CommunicationService';
import { Alert, AlertTitle } from '@material-ui/lab';

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
        marginTop: theme.spacing(3),
        '& .MuiOutlinedInput-input': {
            padding: "27.7px 11px"
        }
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
    },
    inputFields: {
        paddingTop: '22px'
    },
    link: {
        color: theme.palette.primary.dark,
        textDecoration: "none",
        "&:hover": {
            color: theme.palette.primary.main
        }
    }
}));


const MyProfilePage = () => {
    const classes = useStyles();

    let user = JSON.parse(sessionStorage.getItem("user"));

    const [fname, setFname] = useState(user.firstName !== null)
    const [lname, setLname] = useState(user.lastName)
    const [email, setEmail] = useState(user.email)
    const [address, setAddress] = useState(user.address != null ? user.address.street : "")
    const [password, setPassword] = useState("")
    const [cpassword, setcPassword] = useState("")
    const [zip, setZip] = useState(user.address != null ? user.address.zipCode : "")
    const [country, setCountry] = useState(user.address != null ? user.address.countryCode : "")
    const [city, setCity] = useState(user.address != null ? user.address.city : "");

    const [error, setError] = useState("");

    let errorMessage = null;

    let content =
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error}
        </Alert>

    errorMessage = error !== "" ? content : null
    useEffect(() => {
        setPassword(document.getElementById("password").value);
        setcPassword(document.getElementById("cpassword").value);
    }, [])

    const fNameHandler = (e) => {
        setFname(e.target.value)
    }

    const LNameHandler = (e) => {
        setLname(e.target.value)
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const cpasswordHandler = (e) => {
        setcPassword(e.target.value)
    }
    const addressHandler = (e) => {
        setAddress(e.target.value)
    }

    const zipHandler = (e) => {
        setZip(e.target.value)
    }

    const countryHandler = (e) => {
        setCountry(e.target.value)
    }
    const cityHandler = (e) => {
        setCity(e.target.value)
    }
    const goBackHandler = (e) => {
        e.preventDefault()
        window.location.href = "./"
    }

    const onSaveHandler = (e) => {
        e.preventDefault()
        let newUser
        let a = password;
        let b = cpassword
        if (a === b) {
            let fname1;
            let lname1;
            let pass1;
            console.log("pass")
            fname === "" ? fname1 = user.firstName : fname1 = fname

            lname === "" ? lname1 = user.lastName : lname1 = lname

            password === "" ? pass1 = "Not changed" : pass1 = password


            newUser = {
                token: user.token,
                id: user.id,
                firstName: fname1,
                lastName: lname1,
                password: pass1,
                email: email,
                address: {
                    street: address,
                    city: city,
                    countryCode: country,
                    zipCode: zip
                }
            }
        } else {
            console.log("Passwords do not match")
        }

        console.log(newUser)
        console.log(sessionStorage.getItem("user"))

        CommunicationService.updateUser(newUser).then(r => {
            if (r.includes("Successfully")) {
                sessionStorage.clear();
                window.location.href = "./login";
            } else {
                setError(r);
            }
        });
    }
    console.log(fname)
    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Make changes to your profile
                </Typography>

                <Link className={classes.link} onClick={goBackHandler}>
                    In case you will not change anything click here to go back
                </Link>
                {errorMessage}
                <form className={classes.form} noValidate>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                defaultValue={user.firstName}
                                onChange={fNameHandler}
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                defaultValue={user.lastName}
                                onChange={LNameHandler}
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={emailHandler}
                                defaultValue={user.email}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={passwordHandler}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={cpasswordHandler}
                                variant="outlined"
                                required
                                fullWidth
                                name="cpassword"
                                label="Confirm Password"
                                type="password"
                                id="cpassword"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                onChange={addressHandler}
                                defaultValue={user.address != null ? user.address.street : ""}
                                className={classes.inputFields}
                                required
                                id="address"
                                name="address"
                                label="Address line"
                                fullWidth
                                autoComplete="shipping address-line1"

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={cityHandler}
                                defaultValue={user.address != null ? user.address.city : ""}
                                className={classes.inputFields}
                                required
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                autoComplete="shipping address-level2"

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                defaultValue={user.address != null ? user.address.zipCode : ""}
                                onChange={zipHandler}
                                className={classes.inputFields}
                                required
                                id="zip"
                                name="zip"
                                label="Zip / Postal code"
                                fullWidth
                                autoComplete="shipping postal-code"

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={countryHandler}
                                defaultValue={user.address != null ? user.address.countryCode : ""}
                                className={classes.inputFields}
                                required
                                id="country"
                                name="country"
                                label="Country"
                                fullWidth
                                autoComplete="shipping country"

                            />
                        </Grid>
                    </Grid>
                    <Button
                        onClick={onSaveHandler} fullWidth variant="contained" color="primary" className={classes.submit}>
                        Save Changes
                    </Button>
                </form>
            </div>
        </Container>

    );
}

export default MyProfilePage;