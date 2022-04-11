import { Load } from "./load.model";

const Loads:Load[] = [
  {
    loadNumber: "CTMS-2001",
    customer: {
        id:2,
        name:"Sample Customer"
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:8, 
        name:"Origin Sample"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 0,
    office: "Los Angeles",
    poNumber: "77881",
    dispatcher: 2,
  },
  {
    loadNumber: "CTMS-2002",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 1,
    office: "Los Angeles",
    poNumber: "50001",
    dispatcher: 2,
  },
  {
    loadNumber: "CTMS-2003",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 2,
    office: "Los Angeles",
    poNumber: "--",
    dispatcher: 2,
  },
  {
    loadNumber: "CTMS-2004",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 3,
    office: "Denver",
    poNumber: "--",
    dispatcher: 3,
  },
  {
    loadNumber: "CTMS-2005",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 4,
    office: "Denver",
    poNumber: "--",
    dispatcher: 3,
  },
  {
    loadNumber: "CTMS-2006",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 5,
    office: "Denver",
    poNumber: "--",
    dispatcher: 4,
  },
  {
    loadNumber: "CTMS-2007",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 0,
    office: "San Diego",
    poNumber: "--",
    dispatcher: 1,
  },
  {
    loadNumber: "CTMS-2008",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 6,
    office: "San Diego",
    poNumber: "30002",
    dispatcher: 1,
  },

  {
    loadNumber: "CTMS-2009",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 7,
    office: "San Diego",
    poNumber: "12057",
    dispatcher: 1,
  },
  {
    loadNumber: "CTMS-2010",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 8,
    office: "San Diego",
    poNumber: "85754",
    dispatcher: 4,
  },
  {
    loadNumber: "CTMS-2011",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 8,
    office: "San Diego",
    poNumber: "00454",
    dispatcher: 3,
  },
  {
    loadNumber: "CTMS-2012",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 8,
    office: "San Diego",
    poNumber: "00004",
    dispatcher: 2,
  },
  {
    loadNumber: "CTMS-2013",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 8,
    office: "Denver",
    poNumber: "00003",
    dispatcher: 4,
  },
  {
    loadNumber: "CTMS-2014",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 8,
    office: "San Diego",
    poNumber: "",
    dispatcher: 3,
  },
  {
    loadNumber: "CTMS-2015",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 3,
    office: "Loas Angeles",
    poNumber: "00002",
    dispatcher: 2,
  },
  {
    loadNumber: "CTMS-2016",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 2,
    office: "Los Angeles",
    poNumber: "00001",
    dispatcher: 1,
  },
  {
    loadNumber: "CTMS-2001",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 0,
    office: "Los Angeles",
    poNumber: "77881",
    dispatcher: 3,
  },
  {
    loadNumber: "CTMS-2002",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 1,
    office: "Los Angeles",
    poNumber: "50001",
    dispatcher: 1,
  },
  {
    loadNumber: "CTMS-2003",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 2,
    office: "Los Angeles",
    poNumber: "--",
    dispatcher: 3,
  },
  {
    loadNumber: "CTMS-2004",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 3,
    office: "Denver",
    poNumber: "--",
    dispatcher: 4,
  },
  {
    loadNumber: "CTMS-2005",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 4,
    office: "Denver",
    poNumber: "--",
    dispatcher: 1,
  },
  {
    loadNumber: "CTMS-2006",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 5,
    office: "Denver",
    poNumber: "--",
    dispatcher: 2,
  },
  {
    loadNumber: "CTMS-2007",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 0,
    office: "San Diego",
    poNumber: "--",
    dispatcher: 1,
  },
  {
    loadNumber: "CTMS-2008",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:5,
        name:"Origin Test"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 6,
    office: "San Diego",
    poNumber: "30002",
    dispatcher: 2,
  },
  {
    loadNumber: "CTMS-2009",
    customer: {
        id:6,
        name:"RADIANT LOGISTIC INC."
    },
    carrier: {
        id:3,
        name:"DOK FREIGHT SYSTEM LLC."
    },
    pickupDate: "Mar 03, 2022",
    delDate: "Mar 08, 2022",
    origin: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    destination: {
        id:4,
        name:"United plastic Warehouse 3/Leominster,MA"
    },
    status: 7,
    office: "San Diego",
    poNumber: "12057",
    dispatcher: 3,
  },
];

export { Loads };
