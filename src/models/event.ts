
export class Event {
    public name: string; 
    public description: string;
    public image: string; 
    public price: number;
    public details: string;


    constructor(name: string, description: string, image: string, price: number, details: string) { 
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price; 
        this.details = details; 
        
    }

}