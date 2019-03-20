import React from "react";
import { BrowserRouter as ReactRouter, Route, Switch, Link } from "react-router-dom";
import AddressTable from "./AddressTable/AddressTable";

import * as Routes from "../routes/routes";
import CreateAddress from "./AddressEditForm/CreateAddress";
import { connect } from 'react-redux';

function Router() {
    return (<ReactRouter>
        <Switch>
            {/* nb. Order is important because switch statement */}
            <Route path={Routes.CREATE_ADDRESS} exact component={CreateAddress} />
            <Route path={Routes.ADDRESS_TABLE} exact component={AddressTable} />
            <Route path={Routes.HOME} exact component={AddressTable} />
        </Switch>
    </ReactRouter>)
}

const mapStateToProps = (
    state,
    ownProps
) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {

    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Router)