import React from 'react';
import { RoutePermittedRole } from 'shared/constants/AppConst';
const Order = React.lazy(() => import('./Orders/index'));
const Picker = React.lazy(() => import('./Pricker/index'));
const ViewOrder = React.lazy(() => import('./Orders/ViewOrder/index'));
const ViewInvoice = React.lazy(() => import('./Orders/ViewInvoice/index'));



const saleManagmentConifg = [
    {
            permittedRole: RoutePermittedRole.User,
            path: '/salesManagment/orders',
            element:<Order/>,
    },
    {
            permittedRole: RoutePermittedRole.User,
            path: '/salesManagment/pickers',
            element:<Picker/>,
    },
    {
        permittedRole: RoutePermittedRole.User,
        path: `/order/view/:id` ,
        element:<ViewOrder/>,
    },
    {
        permittedRole: RoutePermittedRole.User,
        path: `/invoice/view/:id` ,
        element:<ViewInvoice/>,
    },

]

export default saleManagmentConifg;