import React from 'react';
import Typography from '@material-ui/core/Typography';
import NavBar from '../components/NavBar';
import ContentTable from '../components/ContentTable';
import TableHeader from '../components/fragments/TableHeader';
import { Container } from '@material-ui/core';
const ProductDashBoardPage = () => {
    return (
        <>
            <NavBar>
                <Typography variant="h6">
                    Products Dashboard
                  </Typography>
            </NavBar>
            <Container fullwidth='true'>
                <ContentTable>
                    <TableHeader type='products' />
                </ContentTable>
            </Container>
        </>
    );
}

export default ProductDashBoardPage;