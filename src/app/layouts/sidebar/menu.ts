import { MenuItem } from './menu.model';


const SUPER_ADMI_NMENU: MenuItem[] =
    [
        {

            id: 1,
            label: 'MENUITEMS.DASHBOARDS.TEXT',
            icon: 'mdi mdi-speedometer',

            subItems: [
                {
                    id: 2,
                    label: 'Company Analytics',
                    link: '/analytics/admin',
                    parentId: 1
                },

                {
                    id: 4,
                    label: 'My Dashboard',
                    link: '/analytics/personal',
                    parentId: 1
                },
            ]
        },
        {
            id: 5,
            label: 'MENUITEMS.APPS.TEXT',
            isTitle: true
        },
        {
            id: 6,
            label: 'MENUITEMS.CALENDAR.TEXT',
            icon: 'bx-calendar',
            link: '/calendar',
        },
        {
            id: 7,
            label: 'MENUITEMS.CHAT.TEXT',
            icon: 'bx-chat',
            link: '/chat',

        },
        {
            id: 8,
            label: 'MODULES',
            isTitle: true
        },
        {
            id: 9,
            label: 'Loads',
            icon: 'mdi mdi-dolly',

            subItems: [
                {
                    id: 10,
                    label: 'Load Board',
                    link: '/loads/list',
                    parentId: 9
                },
                {
                    id: 11,
                    label: 'Build Load',
                    link: '/loads/create',
                    parentId: 9
                }
            ]
        },
        {
            id: 12,
            label: 'Carriers',
            icon: 'mdi mdi-truck-delivery-outline',

            subItems: [
                {
                    id: 13,
                    label: 'Carrier List',
                    link: '#',
                    parentId: 12
                },
                {
                    id: 14,
                    label: 'Add Carrier',
                    link: '#',
                    parentId: 12
                }
            ]
        },
        {
            id: 15,
            label: 'Shippers',
            icon: 'mdi mdi-truck-fast-outline',

            subItems: [
                {
                    id: 16,
                    label: 'Shipper List',
                    link: '#',
                    parentId: 15
                },
                {
                    id: 17,
                    label: 'Add Shipper',
                    link: '#',
                    parentId: 15
                }
            ]
        },
        {
            id: 18,
            label: 'Customers',
            icon: 'mdi mdi-account-multiple-check-outline',

            subItems: [
                {
                    id: 19,
                    label: 'Customer List',
                    link: '#',
                    parentId: 18
                },
                {
                    id: 20,
                    label: 'Add Customer',
                    link: '#',
                    parentId: 18
                }
            ]
        },
        {
            id: 21,
            label: 'Factoring Company',
            icon: 'mdi mdi-bank',

            subItems: [
                {
                    id: 22,
                    label: 'Company List',
                    link: '/factoring-company/list',
                    parentId: 21
                },
                {
                    id: 23,
                    label: 'Add Company',
                    link: '/factoring-company/add',
                    parentId: 21
                }
            ]
        },
        {
            id: 24,
            label: 'Settings',
            isTitle: true
        },
        {
            id: 25,
            label: 'Payments',
            icon: 'mdi mdi-cash-100',
            link: ""
        },
        {
            id: 26,
            label: 'Users',
            icon: 'dripicons-user-group',
            link: ""
        },
        {
            id: 27,
            label: 'Data Import',
            icon: 'dripicons-upload',
            link: ""
        },
        {
            id: 28,
            label: 'System Settings',
            icon: 'dripicons-toggles',
            link: ""
        },
        {
            id: 29,
            label: 'Documentations',
            isTitle: true
        },
    ];
const OFFICE_ADMIN_MENU: MenuItem[] = [

    {
        id: 1,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'mdi mdi-speedometer',

        subItems: [

            {
                id: 3,
                label: 'Office Ananlytics',
                link: '/analytics/admin',
                parentId: 1
            },
            {
                id: 4,
                label: 'My Dashboard',
                link: '/analytics/personal',
                parentId: 1
            },
        ]
    },
    {
        id: 5,
        label: 'MENUITEMS.APPS.TEXT',
        isTitle: true
    },
    {
        id: 6,
        label: 'MENUITEMS.CALENDAR.TEXT',
        icon: 'bx-calendar',
        link: '/calendar',
    },
    {
        id: 7,
        label: 'MENUITEMS.CHAT.TEXT',
        icon: 'bx-chat',
        link: '/chat',

    },
    {
        id: 8,
        label: 'MODULES',
        isTitle: true
    },
    {
        id: 9,
        label: 'Loads',
        icon: 'mdi mdi-dolly',

        subItems: [
            {
                id: 10,
                label: 'Load Board',
                link: '/loads/list',
                parentId: 9
            },
            {
                id: 11,
                label: 'Build Load',
                link: '/loads/create',
                parentId: 9
            }

        ]
    },
    {
        id: 12,
        label: 'Carriers',
        icon: 'mdi mdi-truck-delivery-outline',

        subItems: [
            {
                id: 13,
                label: 'Carrier List',
                link: '#',
                parentId: 12
            },
            {
                id: 14,
                label: 'Add Carrier',
                link: '#',
                parentId: 12
            }
        ]
    },
    {
        id: 15,
        label: 'Shippers',
        icon: 'mdi mdi-truck-fast-outline',

        subItems: [
            {
                id: 16,
                label: 'Shipper List',
                link: '#',
                parentId: 15
            },
            {
                id: 17,
                label: 'Add Shipper',
                link: '#',
                parentId: 15
            }
        ]
    },
    {
        id: 18,
        label: 'Customers',
        icon: 'mdi mdi-account-multiple-check-outline',

        subItems: [
            {
                id: 19,
                label: 'Customer List',
                link: '#',
                parentId: 18
            },
            {
                id: 20,
                label: 'Add Customer',
                link: '#',
                parentId: 18
            }
        ]
    },
    {
        id: 21,
        label: 'Factoring Company',
        icon: 'mdi mdi-bank',

        subItems: [
            {
                id: 22,
                label: 'Company List',
                link: '/factoring-company/list',
                parentId: 21
            },
            {
                id: 23,
                label: 'Add Company',
                link: '/factoring-company/add',
                parentId: 21
            }
        ]
    },
    {
        id: 24,
        label: 'Settings',
        isTitle: true
    },


    {
        id: 27,
        label: 'Data Import',
        icon: 'dripicons-upload',
        link: ""
    },
    {
        id: 28,
        label: 'System Settings',
        icon: 'dripicons-toggles',
        link: ""
    },
    {
        id: 29,
        label: 'Documentations',
        isTitle: true
    },

];
const ACCOUNTING_MENU: MenuItem[] = [];
const DISPATCHER_MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'mdi mdi-speedometer',

        subItems: [

            {
                id: 4,
                label: 'My Dashboard',
                link: '/analytics/personal',
                parentId: 1
            },
        ]
    },
    {
        id: 5,
        label: 'MENUITEMS.APPS.TEXT',
        isTitle: true
    },
    {
        id: 6,
        label: 'MENUITEMS.CALENDAR.TEXT',
        icon: 'bx-calendar',
        link: '/calendar',
    },
    {
        id: 7,
        label: 'MENUITEMS.CHAT.TEXT',
        icon: 'bx-chat',
        link: '/chat',

    },
    {
        id: 8,
        label: 'MODULES',
        isTitle: true
    },
    {
        id: 9,
        label: 'Loads',
        icon: 'mdi mdi-dolly',

        subItems: [
            {
                id: 10,
                label: 'Load Board',
                link: '/loads/list',
                parentId: 9
            },
            {
                id: 11,
                label: 'Build Load',
                link: '/loads/create',
                parentId: 9
            }
        ]
    },
    {
        id: 12,
        label: 'Carriers',
        icon: 'mdi mdi-truck-delivery-outline',

        subItems: [
            {
                id: 13,
                label: 'Carrier List',
                link: '',
                parentId: 12
            },
            {
                id: 14,
                label: 'Add Carrier',
                link: '',
                parentId: 12
            }
        ]
    },
    {
        id: 15,
        label: 'Shippers',
        icon: 'mdi mdi-truck-fast-outline',

        subItems: [
            {
                id: 16,
                label: 'Shipper List',
                link: '',
                parentId: 15
            },
            {
                id: 17,
                label: 'Add Shipper',
                link: '',
                parentId: 15
            }
        ]
    },
    {
        id: 18,
        label: 'Customers',
        icon: 'mdi mdi-account-multiple-check-outline',

        subItems: [
            {
                id: 19,
                label: 'Customer List',
                link: '',
                parentId: 18
            },
            {
                id: 20,
                label: 'Add Customer',
                link: '',
                parentId: 18
            }
        ]
    },
    {
        id: 21,
        label: 'Factoring Company',
        icon: 'mdi mdi-bank',

        subItems: [
            {
                id: 22,
                label: 'Company List',
                link: '/factoring-company/list',
                parentId: 21
            },
            {
                id: 23,
                label: 'Add Company',
                link: '/factoring-company/add',
                parentId: 21
            }
        ]
    },


    {
        id: 29,
        label: 'Documentations',
        isTitle: true
    },
];



export { SUPER_ADMI_NMENU, OFFICE_ADMIN_MENU, DISPATCHER_MENU, ACCOUNTING_MENU }

