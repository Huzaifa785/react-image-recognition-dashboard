import React from 'react'
import Dashboard from './components/SuperAdminDashboard/Dashboard'
import CondoApproval from './components/SuperAdminDashboard/CondoApproval'
import ApprovedCondos from './components/SuperAdminDashboard/ApprovedCondos'
import RejectedCondos from './components/SuperAdminDashboard/RejectedCondos'

import CondoOwnerDashboard from './components/CondoOwnerDashboard/CondoOwnerDashboard'
import AddUnit from './components/CondoOwnerDashboard/AddUnit'
import Units from './components/CondoOwnerDashboard/Units'

import Register from './components/Register'
import Login from './components/Login'
import SuperAdminRegister from './components/superAdminRegister'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" component={Login} exact={true} />
                </Switch>

                <Switch>
                    <Route path="/admin-dashboard" component={Dashboard} exact={true} />
                </Switch>

                <Switch>
                    <Route path="/condo-owner-dashboard" component={CondoOwnerDashboard} exact={true} />
                </Switch>

                <Switch>
                    <Route path="/condo-approval" component={CondoApproval} exact={true} />
                </Switch>

                <Switch>
                    <Route path="/approved-condos" component={ApprovedCondos} exact={true} />
                </Switch>

                <Switch>
                    <Route path="/rejected-condos" component={RejectedCondos} exact={true} />
                </Switch>

                <Switch>
                    <Route path="/add-unit" component={AddUnit} exact={true} />
                </Switch>

                <Switch>
                    <Route path="/units" component={Units} exact={true} />
                </Switch>

                <Switch>
                    <Route path="/register" component={Register} exact={true} />
                </Switch>

                <Switch>
                    <Route path="/super-admin-register" component={SuperAdminRegister} exact={true} />
                </Switch>
            </Router>
        </>
    )
}

export default App
