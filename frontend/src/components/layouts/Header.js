import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles({
    root: {

    },
});

function Header({ }) {
    const classes = useStyles();
    return <header className={classes.root}>
        <Typography
            variant="h1"
            align="center"
            gutterBottom
        >Acme Address Book</Typography>
    </header>;
}

export default Header; 