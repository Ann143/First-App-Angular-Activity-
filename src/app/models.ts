export interface Device {
    id?: number;
    name: string;
    brand: string;
    model: string;
    year: number;
    serial: any;
}

export interface User{
    show:boolean;
    id?: number;
    name: string;
    username: any;
    email: string;
    address: {
        street: string;
        suite: any;
        city: string;
        zipcode: number;
    },
    geo: {
        lat: number;
        lng: number;
    },
    phone: number;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}