export class BasketBallGame {
    id: number;
    date: Date;
    venue: string;
    cost: number;
    shouter: string;
    booker: string;
    constructor(Id: number, Date: Date, Venue: string, Cost: number, Shouter:string, Booker: string){
        this.id = Id
        this.date = Date
        this.venue = Venue
        this.cost = Cost
        this.shouter = Shouter
        this.booker = Booker
    }
}
