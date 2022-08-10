import { AppBar, MenuItem, Select, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/system';
import React from 'react';

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    }
}))

function Header(props) {
    

    const classes = useStyles()

    return (
        <AppBar color='transparent' position='static'>
            <Container>
                <Toolbar>
                    <Typography className={classes.title}>Crypto Dashboard</Typography>

                    <Select 
                        variant='outlined'
                        style={{
                            width: 100,
                            height: 40,
                            marginLeft: 15,
                        }}
                    >
                        <MenuItem value={"USD"}>USD</MenuItem>
                        <MenuItem value={"CAD"}>CAD</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;