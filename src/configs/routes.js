import React from "react"
import { Route } from "react-router-dom"

import { Home, Messages, Friends } from '../pages'

// const Tacos = ({ routes }) => (
//     <div>
//         <h2>Tacos</h2>
//         <ul>
//             <li>
//                 <Link to="/tacos/bus">Bus</Link>
//             </li>
//             <li>
//                 <Link to="/tacos/cart">Cart</Link>
//             </li>
//         </ul>

//         {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
//     </div>
// );

const routes = [
    {
        exact: true,
        path: "/",
        component: Home
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/messages",
        component: Messages
    },
    {
        path: "/friends",
        component: Friends
    },
    // {
    //     path: "/tacos",
    //     component: Tacos,
    //     routes: [
    //         {
    //             path: "/tacos/bus",
    //             component: Bus
    //         },
    //         {
    //             path: "/tacos/cart",
    //             component: Cart
    //         }
    //     ]
    // }
];

const RouteWithSubRoutes = route => (
    <Route
        exact={route.exact}
        path={route.path}
        render={props => (
            <route.component {...props} routes={route.routes} />
        )}
    />
);

const Routes = () => routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />);

export default Routes;