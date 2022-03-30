export interface Load {
    status:number;
    loadNumber: string;
    customer: string;
    carrier:string;
    pickup: string;
    pickupDate: string;
    delivery: string;
    delDate: string;
}

// Search Data
export interface SearchResult {
    loads: Load[];
    total: number;
}
