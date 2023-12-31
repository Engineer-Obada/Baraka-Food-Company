// import {FiMap} from 'react-icons/fi';
// import {
//   // RiCustomerService2Line,
// //  RiShieldUserLine,
//   // RiTodoLine,
// } from 'react-icons/ri';
import { /*BiCartAlt*/BiUser, /*BiErrorAlt*/BiArchive,BiDollar,BiStore,BiBuilding} from 'react-icons/bi';
/*import {
  BsCart4,
} from 'react-icons/bs';
import {
  // MdOutlineContactPhone,
  MdOutlineContactSupport,
  MdOutlineDns,
  MdOutlineManageAccounts,
} from 'react-icons/md';*/
import { /*AiOutlineUnorderedList,*/
  AiOutlineUsergroupAdd
  ,AiOutlineUserSwitch,AiOutlineTags,AiOutlineShopping,AiOutlineOrderedList,
  AiOutlineUser
} from 'react-icons/ai';
/*import { useJWTAuth } from '@crema/services/auth/jwt-auth/JWTAuthProvider';*/

/*const role=useJWTAuth().user.role;*/

const routesConfig = [


        {
          id: 'User Managment',
          title: 'User Managment',
          messageId: 'User Managment',
          type: 'collapse',
          icon: <BiUser />,
          children: [
            {
              id: 'customer',
              title: 'Customer',
              messageId: 'Customer',
              type: 'item',
              icon: <AiOutlineUsergroupAdd />,
              url: '/userManagment/customer',
            },
            {
              id: 'employees',
              title: 'Employees',
              messageId: 'Employees',
              type: 'item',
              icon: <AiOutlineUserSwitch />,
              url: '/userManagment/employees',
            },
        
          ]
        },
        {
          id: 'Product Managment',
          title: 'Product Managmen',
          messageId: 'Product Managmen',
          type: 'collapse',
          icon: <BiArchive />,
          children: [
            {
              id: 'category',
              title: 'Category',
              messageId: 'Category',
              type: 'item',
              icon:<AiOutlineTags />,
              url: '/productManagment/category',
            },
            {
              id: 'product',
              title: 'Product',
              messageId: 'Product',
              type: 'item',
              icon:<AiOutlineShopping />,
              url: '/productManagment/product',
            },
          ]
        },
        {
          id: 'Sales Managment',
          title: 'Sales Managment',
          messageId: 'Sales Managment',
          type: 'collapse',
          icon: <BiDollar />,
          children: [
            {
              id: 'orders',
              title: 'Orders',
              messageId: 'Orders',
              type: 'item',
              icon:<AiOutlineOrderedList/>,
              url: '/salesManagment/orders',
            },
            {
              id: 'pickers',
              title: 'Pickers',
              messageId: 'Pickers',
              type: 'item',
              icon:<AiOutlineUser/>,
              url: '/salesManagment/pickers',
            },
          
          
          ]
        },
        {
          id: 'Warehouse Managment',
          title: 'Warehouse Managment',
          messageId: 'Warehouse Managment',
          type: 'collapse',
          icon: <BiStore />,
          children: [
            {
              id: 'warehouse',
              title: 'Warehouse',
              messageId: 'Warehouse',
              type: 'item',
              icon:<BiBuilding/>,
              url: '/dashboards/warehouse',
            },
          
          
          ]
        },
    /************************************************************/

  // {
  //   id: 'app',
  //   title: 'Application',
  //   messageId: 'sidebar.application',
  //   type: 'group',
  //   children: [
  //     {
  //       id: 'warehouse',
  //       title: 'Warehouse',
  //       messageId: 'Warehouse',
  //       type: 'item',
  //       icon: <BsCart4 />,
  //       url: '/dashboards/warehouse',
  //     },
  //     // {
  //     //   id: 'crm',
  //     //   title: 'CRM',
  //     //   messageId: 'sidebar.app.dashboard.crm',
  //     //   type: 'item',
  //     //   icon: <RiCustomerService2Line />,
  //     //   url: '/dashboards/crm',
  //     // },
     
  //     {
  //       id: 'e-commerce',
  //       title: 'E-Commerce',
  //       messageId: 'sidebar.app.dashboard.eCommerce',
  //       type: 'item',
  //       icon: <BsCart4 />,
  //       url: '/dashboards/e-commerce',
  //     }
  //   ],
  // },
  // {
  //   id: 'apps',
  //   title: 'Apps',
  //   messageId: 'sidebar.apps',
  //   type: 'group',
  //   children: [
  //     {
  //       id: 'mail',
  //       title: 'Mail',
  //       messageId: 'sidebar.apps.mail',
  //       type: 'item',
  //       count: 4,
  //       icon: 'mail_outline',
  //       url: '/apps/mail',
  //     },
  
  //     {
  //       id: 'todo',
  //       title: 'ToDo',
  //       messageId: 'sidebar.apps.todo',
  //       type: 'item',
  //       count: 6,
  //       icon: <RiTodoLine />,
  //       color: '#48bb78',
  //       url: '/apps/todo',
  //     },
  //     // {
  //     //   id: 'contact',
  //     //   title: 'Contact',
  //     //   messageId: 'sidebar.apps.contact',
  //     //   type: 'item',
  //     //   icon: <MdOutlineContactPhone />,
  //     //   url: '/apps/contact',
  //     // },
  //     {
  //       id: 'scrum-board',
  //       title: 'Scrum Board',
  //       messageId: 'sidebar.apps.scrumboard',
  //       type: 'item',
  //       icon: <MdOutlineDns />,
  //       url: '/apps/scrum-board',
  //     },
  //     {
  //       id: 'ecommerce',
  //       title: 'Ecommerce',
  //       messageId: 'sidebar.ecommerce',
  //       type: 'collapse',
  //       icon: <BiCartAlt />,
  //       children: [
  //         {
  //           id: 'products',
  //           title: 'Products',
  //           messageId: 'sidebar.ecommerce.products',
  //           type: 'item',
  //           url: '/ecommerce/products',
  //         },
  //         {
  //           id: 'product_detail',
  //           title: 'Product Detail',
  //           messageId: 'sidebar.ecommerce.productDetail',
  //           type: 'item',
  //           url: '/ecommerce/product_detail',
  //         },
  //         {
  //           id: 'orders',
  //           title: 'Orders',
  //           messageId: 'sidebar.ecommerce.orders',
  //           type: 'item',
  //           url: '/ecommerce/orders',
  //         },
  //         {
  //           id: 'customers',
  //           title: 'Customers',
  //           messageId: 'sidebar.ecommerce.customers',
  //           type: 'item',
  //           url: '/ecommerce/customers',
  //         },
  //         {
  //           id: 'cart',
  //           title: 'Cart',
  //           messageId: 'sidebar.ecommerce.cart',
  //           type: 'item',
  //           url: '/ecommerce/cart',
  //         },
  //         {
  //           id: 'checkout',
  //           title: 'Checkout',
  //           messageId: 'sidebar.ecommerce.checkout',
  //           type: 'item',
  //           url: '/ecommerce/checkout',
  //         },
  //         {
  //           id: 'confirmation',
  //           title: 'Confirmation',
  //           messageId: 'sidebar.ecommerce.confirmation',
  //           type: 'item',
  //           url: '/ecommerce/confirmation',
  //         },
  //         {
  //           id: 'invoice-1',
  //           title: 'Invoice 1',
  //           messageId: 'sidebar.ecommerce.invoice1',
  //           type: 'item',
  //           url: '/ecommerce/invoice-1',
  //         },
  //         {
  //           id: 'invoice-2',
  //           title: 'Invoice 2',
  //           messageId: 'sidebar.ecommerce.invoice2',
  //           type: 'item',
  //           url: '/ecommerce/invoice-2',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 'third-party',
  //   title: 'Libs',
  //   messageId: 'sidebar.libs',
  //   type: 'group',
  //   children: [
  //     {
  //       id: 'google-map',
  //       title: 'Google Map',
  //       messageId: 'sidebar.googleMap',
  //       type: 'item',
  //       icon: <FiMap />,
  //       url: '/third-party/google-map',
  //     },
  //     {
  //       id: 'recharts',
  //       title: 'Recharts',
  //       messageId: 'sidebar.recharts',
  //       type: 'collapse',
  //       icon: 'bar_chart',
  //       children: [
  //         {
  //           id: 'area',
  //           title: 'Area Chart',
  //           messageId: 'sidebar.recharts.areaChart',
  //           type: 'item',
  //           url: '/recharts/area',
  //         },
  //         {
  //           id: 'bar',
  //           title: 'Bar Chart',
  //           messageId: 'sidebar.recharts.barChart',
  //           type: 'item',
  //           url: '/recharts/bar',
  //         },
  //         {
  //           id: 'composed',
  //           title: 'Composed Chart',
  //           messageId: 'sidebar.recharts.composedChart',
  //           type: 'item',
  //           url: '/recharts/composed',
  //         },
  //         {
  //           id: 'line',
  //           title: 'Line Chart',
  //           messageId: 'sidebar.recharts.lineChart',
  //           type: 'item',
  //           url: '/recharts/line',
  //         },
  //         {
  //           id: 'pie',
  //           title: 'Pie Chart',
  //           messageId: 'sidebar.recharts.pieChart',
  //           type: 'item',
  //           url: '/recharts/pie',
  //         },
  //         {
  //           id: 'radar',
  //           title: 'Radar Chart',
  //           messageId: 'sidebar.recharts.radarChart',
  //           type: 'item',
  //           url: '/recharts/radar',
  //         },
  //         {
  //           id: 'radial',
  //           title: 'Radial Chart',
  //           messageId: 'sidebar.recharts.radialChart',
  //           type: 'item',
  //           url: '/recharts/radial',
  //         },
  //         {
  //           id: 'scatter',
  //           title: 'Scatter Chart',
  //           messageId: 'sidebar.recharts.scatterChart',
  //           type: 'item',
  //           url: '/recharts/scatter',
  //         },
  //         {
  //           id: 'funnel',
  //           title: 'Funnel Chart',
  //           messageId: 'sidebar.recharts.funnelChart',
  //           type: 'item',
  //           url: '/recharts/funnel',
  //         },
  //         {
  //           id: 'treemap',
  //           title: 'Treemap Chart',
  //           messageId: 'sidebar.recharts.treeChart',
  //           type: 'item',
  //           url: '/recharts/treemap',
  //         },
  //       ],
  //     }
    
  //   ],
  // },
  // {
  //   id: 'extra-pages',
  //   title: 'Extra Pages',
  //   messageId: 'sidebar.pages.extraPages',
  //   type: 'group',
  //   children: [
  //     {
  //       id: 'account',
  //       title: 'Account',
  //       messageId: 'sidebar.pages.extraPages.account',
  //       type: 'item',
  //       icon: <MdOutlineManageAccounts />,
  //       url: '/my-profile',
  //     },
  //     {
  //       id: 'contact-us',
  //       title: 'Contact Us',
  //       messageId: 'sidebar.pages.extraPages.contactUs',
  //       type: 'item',
  //       icon: <MdOutlineContactSupport />,
  //       url: '/extra-pages/contact-us',
  //     },
  //     {
  //       id: 'user',
  //       title: 'User Pages',
  //       messageId: 'sidebar.pages.userPages',
  //       type: 'collapse',
  //       icon: <RiShieldUserLine />,
  //       children: [
  //         {
  //           id: 'sign-in-1',
  //           title: 'SignIn-1',
  //           messageId: 'sidebar.pages.userPages.signIn1',
  //           type: 'item',
  //           url: '/user/sign-in-1',
  //         },
  //         {
  //           id: 'sign-in-2',
  //           title: 'SignIn-2',
  //           messageId: 'sidebar.pages.userPages.signIn2',
  //           type: 'item',
  //           url: '/user/sign-in-2',
  //         },
  //         {
  //           id: 'sign-up-1',
  //           title: 'SignUp-1',
  //           messageId: 'sidebar.pages.userPages.signUp1',
  //           type: 'item',
  //           url: '/user/sign-up-1',
  //         },
  //         {
  //           id: 'sign-up-2',
  //           title: 'SignUp-2',
  //           messageId: 'sidebar.pages.userPages.signUp2',
  //           type: 'item',
  //           url: '/user/sign-up-2',
  //         },
  //         {
  //           id: 'forgot-password-1',
  //           title: 'Forgot Password-1',
  //           messageId: 'sidebar.pages.userPages.forgetPassword1',
  //           type: 'item',
  //           url: '/user/forgot-password-1',
  //         },
  //         {
  //           id: 'forgot-password-2',
  //           title: 'Forgot Password-2',
  //           messageId: 'sidebar.pages.userPages.forgetPassword2',
  //           type: 'item',
  //           url: '/user/forgot-password-2',
  //         },
  //         {
  //           id: 'reset-password-1',
  //           title: 'Reset Password-1',
  //           messageId: 'sidebar.pages.userPages.resetPassword1',
  //           type: 'item',
  //           url: '/user/reset-password-1',
  //         },
  //         {
  //           id: 'reset-password-2',
  //           title: 'Reset Password-2',
  //           messageId: 'sidebar.pages.userPages.resetPassword2',
  //           type: 'item',
  //           url: '/user/reset-password-2',
  //         },
  //         {
  //           id: 'lock-1',
  //           title: 'Lock Screen-1',
  //           messageId: 'sidebar.pages.userPages.lockScreen1',
  //           type: 'item',
  //           url: '/user/lock-1',
  //         },
  //         {
  //           id: 'lock-2',
  //           title: 'Lock Screen-2',
  //           messageId: 'sidebar.pages.userPages.lockScreen2',
  //           type: 'item',
  //           url: '/user/lock-2',
  //         },
  //       ],
  //     },
  //     {
  //       id: 'list-type',
  //       title: 'User List',
  //       messageId: 'sidebar.pages.userList',
  //       type: 'collapse',
  //       icon: <AiOutlineUnorderedList />,
  //       children: [
  //         {
  //           id: 'morden',
  //           title: 'Modern',
  //           messageId: 'sidebar.pages.userList.modern',
  //           type: 'item',
  //           url: '/list-type/morden',
  //         },
  //         {
  //           id: 'standard',
  //           title: 'Standard',
  //           messageId: 'sidebar.pages.userList.standard',
  //           type: 'item',
  //           url: '/list-type/standard',
  //         },
  //         {
  //           id: 'flat',
  //           title: 'Flat',
  //           messageId: 'sidebar.pages.userList.flat',
  //           type: 'item',
  //           url: '/list-type/flat',
  //         },
  //       ],
  //     },
  //     {
  //       id: 'error-pages',
  //       title: 'Error Pages',
  //       messageId: 'sidebar.pages.errorPages',
  //       type: 'collapse',
  //       icon: <BiErrorAlt />,
  //       children: [
  //         {
  //           id: 'error-401',
  //           title: '402',
  //           messageId: 'sidebar.pages.errorPages.401',
  //           type: 'item',
  //           url: '/error-pages/error-401',
  //         },
  //         {
  //           id: 'error-403',
  //           title: '403',
  //           messageId: 'sidebar.pages.errorPages.403',
  //           type: 'item',
  //           url: '/error-pages/error-403',
  //         },
  //         {
  //           id: 'error-404',
  //           title: '404',
  //           messageId: 'sidebar.pages.errorPages.404',
  //           type: 'item',
  //           url: '/error-pages/error-404',
  //         },
  //         {
  //           id: 'error-500',
  //           title: '500',
  //           messageId: 'sidebar.pages.errorPages.500',
  //           type: 'item',
  //           url: '/error-pages/error-500',
  //         },
  //         {
  //           id: 'error-503',
  //           title: '503',
  //           messageId: 'sidebar.pages.errorPages.503',
  //           type: 'item',
  //           url: '/error-pages/error-503',
  //         },
  //         {
  //           id: 'maintenance',
  //           title: 'Maintenance',
  //           messageId: 'sidebar.pages.errorPages.maintenance',
  //           type: 'item',
  //           url: '/error-pages/maintenance',
  //         },
  //         {
  //           id: 'coming-soon',
  //           title: 'Coming Soon',
  //           messageId: 'sidebar.pages.errorPages.comingSoon',
  //           type: 'item',
  //           url: '/error-pages/coming-soon',
  //         },
  //       ],
  //     },
  //   ],
  // },
];
export default routesConfig;
