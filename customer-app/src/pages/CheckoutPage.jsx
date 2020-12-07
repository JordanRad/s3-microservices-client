import React from 'react';
import Container from '@material-ui/core/Container';
import Checkout from '../components/Checkout';
const CheckoutPage = () => {
    return ( 
        <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Checkout />
      </Container>
     );
}
 
export default CheckoutPage;