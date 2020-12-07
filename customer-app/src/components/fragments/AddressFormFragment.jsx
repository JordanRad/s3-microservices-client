import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
  inputFields: {
    paddingTop: '22px'
  }
}));

const AddressFormFragment = (props) => {
  const classes = useStyles();
  let emptyCounter = 4;
  let fullAddress = {};

  let userAddress = JSON.parse(sessionStorage.getItem("user")).address;


  const validateInputs = (e) => {
    let city = document.getElementById('city').value;
    let address = document.getElementById('address').value;
    let zip = document.getElementById('zip').value;
    let country = document.getElementById('country').value;
    emptyCounter = 4
    if (city !== "") emptyCounter--;
    if (address !== "") emptyCounter--;
    if (zip !== "") emptyCounter--;
    if (country !== "") emptyCounter--;

    if (emptyCounter === 0) {
      fullAddress = { city: city, countryCode: country, zipCode: zip, street: address }
      props.validationHandler(fullAddress)
    }
  }
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Shipping address
      </Typography>

      <Typography variant="h5" gutterBottom>
        {props.user.firstName + " " + props.user.lastName}
      </Typography>
      <Typography variant="body2" gutterBottom>
        *please fill every field of the address form to proceed
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            className={classes.inputFields}
            defaultValue={userAddress!==null?userAddress.street:null}
            required
            id="address"
            name="address"
            label="Address line"
            fullWidth
            autoComplete="shipping address-line1"
            onChange={validateInputs}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.inputFields}
            defaultValue={userAddress!==null?userAddress.city:null}
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            onChange={validateInputs}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.inputFields}
            defaultValue={userAddress!==null?userAddress.zipCode:null}
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            onChange={validateInputs}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.inputFields}
            defaultValue={userAddress!==null?userAddress.countryCode:null}
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            onChange={validateInputs}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default AddressFormFragment;