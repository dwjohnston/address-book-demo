import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import AddressEditForm from './AddressEditForm';
import { connect } from 'react-redux';
import { selectAddressByAddressId } from '../../redux/selectors';
import { requestUpdateAddress } from '../../redux/actions';
import AddressEditFormLayout from '../layouts/AddressEditFormLayout';

const useStyles = makeStyles({
    root: {

    },
});

function UpdateAddress({ addressData }) {
    const classes = useStyles();
    return <AddressEditFormLayout >
        <Typography variant="h2" gutterBottom>Update Address </Typography>
        {addressData && <AddressEditForm addressData={addressData} />}
    </AddressEditFormLayout >;
}

const mapStateToProps = (
    state,
    ownProps
) => {
    return {
        addressData: selectAddressByAddressId(state, ownProps.match.params.id)
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
)(UpdateAddress);