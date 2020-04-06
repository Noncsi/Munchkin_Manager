import { Sex } from './sex.enum';

export class Player {
    _name: string;
    _sex: Sex;
    _level: number;
    _strength: number;

    constructor(name:string, sex: Sex) {
        this._name = name;
        this._sex = sex;
        this._level = 1;
        this._strength = 1;
    }
}