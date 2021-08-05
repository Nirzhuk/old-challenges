export interface House {
    id: string;
    name: string;
    image: string;
    bookable: boolean;
    booked: number;
}

export interface Coordinates {
    latitude: string;
    longtitude: string;
}


export enum BookableStatusType {
    UNAVAILABLE ='UNAVAILABLE',
    BOOKED = 'BOOKED',
    AVAILABLE= 'AVAILABLE'
};
