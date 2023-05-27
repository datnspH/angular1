export interface IProduct {
    id?: number;
    name: string;
    price: number;
    address: {
    city:String;
    zip: string;
    }
}