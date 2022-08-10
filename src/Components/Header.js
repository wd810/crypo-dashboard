import { AppBar, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

function Header(props) {
    return (
        <AppBar color='transparent' position='static'>
            <Container>
                <Toolbar>
                    <Typography>
                        Crypto Dashboard
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;