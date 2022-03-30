import { LoadStatus } from "./status.model";

export const LOAD_STATUS: LoadStatus[] = [
  {
    id: 0,
    icon: "mdi mdi-progress-wrench",
    label: "Pending",
    badge: "badge  badge-soft-pending-status  font-size-12",
  },
  {
    id: 1,
    icon: "mdi mdi-truck-outline",
    label: "On Route P/U",
    badge: "badge  badge-soft-info  font-size-12",
  },
  {
    id: 2,
    icon: "mdi mdi-truck-check-outline",
    label: "Arrived P/U",
    badge: "badge  badge-soft-primary   font-size-12",
  },
  {
    id: 3,
    icon: "mdi mdi-truck-fast-outline",
    label: "Dispatched",
    badge: "badge   badge-soft-info-2  font-size-12",
  },

  {
    id: 4,
    icon: "mdi mdi-transit-connection-horizontal",
    label: "In Transit",
    badge: "badge  badge-soft-warning  font-size-12",
  },

  {
    id: 5,
    icon: " mdi mdi-map-marker-check-outline",
    label: "Arrived D/O",
    badge: "badge badge-soft-status-2  font-size-12",
  },

  {
    id: 6,
    icon: "fas fa-ban",
    label: "Canceled",
    badge: "badge badge-soft-secondary  font-size-12",
  },

  {
    id: 7,
    icon: "mdi mdi-warehouse",
    label: "Warehouse",
    badge: "badge badge-soft-status-1  font-size-12",
  },
  {
    id: 8,
    icon: "mdi mdi-check-all",
    label: "Delivered",
    badge: "badge  badge-soft-success  font-size-12",
  },
];