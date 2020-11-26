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
        this.startTime = moment(this.startTime)
        this.endTime = moment(this.endTime)

    }

    getId() {return this.id}
    setId(id: string) {this.id = id }

    getWeekDay() {return this.weekDay}
    setWeekDay(weekDay: ShowWeekDayType ) {this.weekDay = weekDay }

    getStartTime() {return this.startTime }
    setStartTime(startTime: Moment) {this.startTime = startTime}

    getEndTime() {return this.endTime}
    setEndTime(endTime: Moment) {this.endTime = endTime }

    getIdBand() {return this.idBand}
    setIdBand(idBand: string) {this.idBand = idBand }
}

export enum ShowWeekDayType {
    SEXTA = "Sexta",
    SABADO = "Sabado",
    DOMINGO = "Domingo",

}

export class CreateShowInputDTO{
    public weekDay: string;
    public startTime: string;
    public endTime: string;
    public idBand: string;

    constructor(
        weekDay: string,
        startTime: string = moment().format("hh:mm"),
        endTime: string = moment().format("hh:mm"),
        idBand: string,
    ){
      this.weekDay = weekDay;
      this.startTime = startTime;  
      this.endTime = endTime;
      this.idBand = idBand;
    }

}