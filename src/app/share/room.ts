export interface IRoom {
    id: number;
    title: string;
    desc: string;
    furniter: string[];
    quality: number;
    price: number;
    image: string;
}

export class Room {
    constructor(
        public id: number, 
        public title: String, 
        public desc: String,
        public furniter: String[],
        public quality: number,
        public price: number,
        public image: String) { }
}