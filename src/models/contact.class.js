import { TYPES } from "./types.enum";

export class Contact {
    name = '';
    surname = '';
    number = '';
    conected = false;
    hidden = false;
    type = TYPES.PERSONAL;

    constructor(name, surname, number, conected, hidden, type){
        this.name = name;
        this.surname = surname;
        this.number = number;
        this.conected = conected;
        this.hidden = hidden;
        this.type = type;
    }
}