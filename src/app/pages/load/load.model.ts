export interface Load {
  status: number;
  loadNumber: string;
  poNumber?: string;
  customer: {
    id: number;
    name: string;
  };
  carrier: {
    id: number;
    name: string;
  };
  origin: {
    id: number;
    name: string;
  };
  pickupDate: string;
  destination: {
    id: number;
    name: string;
  };
  delDate: string;
  office: string;
  dispatcher: number;
}

// Search Data
export interface SearchResult {
  loads: Load[];
  total: number;
}
export interface FilteredResult {
  loadsFiltered: Load[];
  total: number;
}
