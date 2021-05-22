import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

export const SimplePage: React.FC<React.PropsWithChildren<any>> = (props: React.PropsWithChildren<any>) => {
    return (
        <>
            <CssBaseline />
            <AppBar position={'static'}>
                <Toolbar>
                    <Typography variant='h6'>Sudoku React</Typography>
                    <Button
                        href={'/play'}
                        variant={'text'}
                        color={'inherit'}
                    >
                        Start new game
                    </Button>
                </Toolbar>
            </AppBar>

            <Container>
                {props.children}
            </Container>
        </>
    );
}
