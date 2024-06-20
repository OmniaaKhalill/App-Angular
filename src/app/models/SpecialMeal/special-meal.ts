export class SpecialMeal {
    constructor(
        public name:string,
        public describtion:string,
        public price_1: number,
        public price_2: number,
        public status:  Status      
    ){

    }
}

export enum Status { Reqested="Reqested", waited="waited", Done="Done"}
