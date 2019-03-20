import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, TextField, FormControlLabel, Switch } from '@material-ui/core';
import { connect } from 'react-redux';
import { requestUpdateFilter } from '../../redux/actions';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "flex-start",
        alignItems: "center",
    },

});

function FilterPanel({ updateFilter }) {
    const classes = useStyles();

    const [nRows, updateNRows] = useState(10);
    const [filterItems, updateFilterItems] = useState({});
    const [filterEnabled, updateFilterEnabled] = useState(false)

    useEffect(() => {
        const items = Object.values(filterItems).filter(v => v.length > 0);
        updateFilter(filterEnabled && items.length > 0, items);
    });

    return <div className={classes.root}>
        <Typography variant="h3"> Filter </Typography>
        <FormControlLabel
            labelPlacement="top"
            label="Filter Enabled"
            control={
                <Switch
                    checked={filterEnabled}
                    onChange={() => {
                        updateFilterEnabled(!filterEnabled);
                    }}
                    value="filterEnabled"
                    color="primary"
                />} />


        {Array(nRows).fill(true).map((v, i) =>
            <TextField
                value={filterItems[i]}
                label="Name"
                onChange={(event) => {
                    updateFilterItems({ ...filterItems, [i]: event.target.value });
                }}
                disabled={!filterEnabled}
                type="text"
                key={i}
            />

        )}
    </div>;
}




const mapStateToProps = (
    state,
    ownProps
) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        updateFilter: (enabled, items) => dispatch(requestUpdateFilter(enabled, items))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterPanel);