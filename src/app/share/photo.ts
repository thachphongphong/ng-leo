export interface IPhoto {
    id: number;
    category: string;
    title: string;
    image: string;
}

export class Photo {
    static create(p: IPhoto) {
        return { id: p.id, category: p.category, title: p.title, image: p.image };
    }
    constructor(
        public id: number, 
        public category: String, 
        public title: boolean, 
        public image: String) { }
}