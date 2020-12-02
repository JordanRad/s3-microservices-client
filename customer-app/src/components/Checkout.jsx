import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressFormFragment from './fragments/AddressFormFragment';
import ReviewFragment from './fragments/ReviewFragment';
import { Link } from 'react-router-dom';
import BackspaceIcon from '@material-ui/icons/Backspace';
import { cartFunctions as cf } from '../helpers/cartFunctions';
import CommunicationService from '../services/CommunicationService';
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    zIndex: 0,
    color: "white",
    backgroundColor: theme.palette.primary.dark
  },
  link: {
    marginLeft: "auto",
    color: theme.palette.secondary.main,
    "&:hover":{
      color: theme.palette.primary.main,
    }
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
    '& .MuiStepIcon-root.MuiStepIcon-active': {
      color: theme.palette.primary.dark
    },
    '& .MuiStepIcon-root.MuiStepIcon-completed': {
      color: theme.palette.primary.dark
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Shipping address', 'Order review'];


const Checkout = () => {

  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);

  const [addressValidation, setAddressValidation] = useState(false)

  const [orderNumber, setOrderNumber] = useState("000000000")
  let user = JSON.parse(sessionStorage.getItem('user'))

  const addressValidationHandler = (address) => {
    setAddressValidation(true)

    user.address = address
    sessionStorage.setItem('user', JSON.stringify(user));
  }
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressFormFragment user={user} validationHandler={addressValidationHandler} />;
      case 1:
        return <ReviewFragment />;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === 1) {
      let orderRequest = {
        user: {
          id: 1,
          email: user.email,
          address: user.address.country + ", " + user.address.city + " - " + user.address.address + ", " + user.address.zip
        },
        orderNumber: user.firstName.substring(0, 1).toUpperCase() + user.lastName.substring(0, 1).toUpperCase() + Date.now().toString() + "XTX" + user.address.zip.substring(0, 2),
        products: cf.itemQuantityCart()
      };

      console.log(JSON.stringify(orderRequest))
      CommunicationService.sendOrder(orderRequest).then(r => setOrderNumber(r))


    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  //console.log(user)
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Webshop LTD.
          </Typography>
          <Link className={classes.link} to={'./'}><BackspaceIcon fontSize="large"/></Link>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  {`Your order has been succesfully sent.\nYour order number is:\n ${orderNumber}`}
                </Typography>
              </React.Fragment>
            ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                      disabled={!addressValidation}
                    >
                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
export default Checkout;