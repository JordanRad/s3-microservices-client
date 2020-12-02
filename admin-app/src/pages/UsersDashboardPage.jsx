import React from 'react';
import Typography from '@material-ui/core/Typography';
import NavBar from '../components/NavBar';
import ContentTable from '../components/ContentTable';
import TableHeader from '../components/fragments/TableHeader';
import { Container } from '@material-ui/core';
const UsersDashBoardPage = () => {
    return (
        <>
            <NavBar>
                <Typography variant="h6">
                  Users Dashboard
                  </Typography>
              </NavBar>
              <Container fullwidth>
                <ContentTable>
                  <TableHeader type='users'/>
                </ContentTable>
              </Container>
        </>
    );
}

export default UsersDashBoardPage;