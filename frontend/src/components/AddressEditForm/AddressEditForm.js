import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { requestUpdateAddress } from '../../redux/actions';
import { TextField } from '@material-ui/core';
import Button from "../generic/Button";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { PRODUCT_TABLE } from '../../routes/routes';
import { isUpdateLoading } from '../../redux/selectors';
const useStyles = makeStyles({
    root: {
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "stretch",

        maxWidth: 600,
    },

    field: {
        paddingBottom: "1em",
    }
});

/***
 * Not especially happy with the way I've done this. 
 * 
 * Possibly would have been better to use something like Formik. 
 */
function ProductEditForm({ adderessData, submitForm, updateLoading }) {
    const classes = useStyles();
    const [name, updateName] = useState(adderessData.name);
    const [phone, updatePhone] = useState(adderessData.priceUsd);

    const [formSubmitted, updateFormSubmitted] = useState(false);

    return (
        (formSubmitted && !updateLoading) ? <Redirect to={PRODUCT_TABLE} /> : <form
            className={classes.root}
            onSubmit={(event) => {
                event.preventDefault();
                submitForm({
                    id: adderessData.id,
                    name,
                    phone,
                });

                updateFormSubmitted(true);
            }}
        >
            <TextField
                value={name}
                label="Name"
                onChange={(event) => updateName(event.target.value)}
                disabled={updateLoading}
                className={classes.field}

            />

            <TextField
                value={phone}
                label="Phone"
                onChange={(event) => updatePhone(event.target.value)}
                disabled={updateLoading}
                type="number"
                className={classes.field}

            />

            <Button
                type="submit"
                disabled={updateLoading}
                className={classes.field}
                color="primary"

            >Submit</Button>
        </form >
    )

}



const mapStateToProps = (
    state,
    ownProps
) => {
    return {
        updateLoading: isUpdateLoading(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submitForm: (addressData) => dispatch(requestUpdateAddress(addressData))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductEditForm);
