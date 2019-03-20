import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { connect } from 'react-redux';
import ButtonGroup from '../generic/ButtonGroup';
import { Link } from "react-router-dom";
import * as Routes from "../../routes/routes";
import { selectAllAddresses } from '../../redux/selectors';
import { requestDeleteAddress } from "../../redux/actions";
import Button from "../generic/Button";
import ControlPanel from './ControlPanel';
const useStyles = makeStyles({
    root: {

    },

});

function AddressTable({ addresses, deleteAddress }) {
    const classes = useStyles();
    return (
        <section>
            <ControlPanel
            />
            <Table className={classes.root}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>
                            Phone Number
                        </TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {addresses && addresses.map((address, i) => {
                        return (<TableRow
                            key={address.id}
                        >
                            <TableCell>{address.name}</TableCell>
                            <TableCell >{address.phone}</TableCell>
                            <TableCell>
                                <ButtonGroup>
                                    <Button
                                        component={Link}
                                        to={`${Routes.UPDATE_ADDRESS}/${address.id}`}
                                        color="primary"
                                    >Update</Button>
                                    <Button
                                        onClick={() => deleteAddress(address)}
                                        color="secondary"
                                    >Delete</Button>
                                </ButtonGroup>
                            </TableCell>
                        </TableRow>)
                    })}
                </TableBody>


            </Table>
        </section>);

}




const mapStateToProps = (
    state,
    ownProps
) => {
    return {
        addresses: selectAllAddresses(state),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteAddress: (address) => dispatch(requestDeleteAddress(address))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddressTable); 