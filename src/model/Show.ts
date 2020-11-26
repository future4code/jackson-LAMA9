import moment, { Moment } from "moment"

export class EventShow{

    constructor(
        private id: string,
        private weekDay: ShowWeekDayType ,
        private startTime: Moment,
        private endTime: Moment,
        private idBand: string,
    ){
        switch(this.weekDay){
            case "Sexta":
                this.weekDay = ShowWeekDayType.SEXTA
                break;
            case "Sabado":
                this.weekDay = ShowWeekDayType.SABADO
                break;
            default:
                this.weekDay = ShowWeekDayType.DOMINGO

        }

    }

    getId() {return this.id}
    setId(id:string) {this.id = id }

    getWeekDay() {return this.weekDay}
    setWeekDay(weekDay:string) {this.weekDay = weekDay }

    getStartTime() {return this.__}
    set__(__:__) {this.___ = ___}

    get__() {return this.__}
    set__(__:__) {this.___ = ___}

    get__() {return this.__}
    set__(__:__) {this.___ = ___}
}

export enum ShowWeekDayType {
    SEXTA = "Sexta",
    SABADO = "Sabado"
    DOMINGO = "Domingo"

}

export class CreateShowInputDTO{
    public weekDay: string;
    public startTime: string;
    public endTime: string;
    public idBand: string;

    constructor(
        weekDay: string,

    )

}