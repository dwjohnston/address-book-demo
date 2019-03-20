import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Table, TableHead, TableBody, TableRow, TableCell, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import ButtonGroup from '../generic/ButtonGroup';
import { Link } from "react-router-dom";
import * as Routes from "../../routes/routes";
import { selectAllAddresses } from '../../redux/selectors';
import { requestDeleteAddress } from "../../redux/actions";
import Button from "../generic/Button";
import ControlPanel from './ControlPanel';
import { globName } from '../../util/globName';
import FilterPanel from "./FilterPanel";
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


            <Grid container>

                <Grid item
                    xs={12}
                    sm={8}
                >

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
                                    key={address.name + i}
                                >
                                    <TableCell>{address.name}</TableCell>
                                    <TableCell >{address.phone}</TableCell>
                                    <TableCell>
                                        <ButtonGroup>
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
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FilterPanel />
                </Grid>
            </Grid >
        </section >);

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