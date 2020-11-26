import { BandInputDTO } from "../model/Band";
import { BandDatabase } from "../data/BandDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";


export class BandBusiness {

    constructor(
        private idGenerator: IdGenerator,
       private authenticator: Authenticator, 
       private bandDatabase: BandDatabase,
    ){}
    async createBand(band: BandInputDTO) {


        
        const id = this.idGenerator.generate();
        
        const token = this.authenticator.getData(band.token);
        if(token.role !== "ADMIN"){
            throw new Error('Invalid authentication')
        }
        

        const bandDatabase = new BandDatabase();
        await this.bandDatabase.createBand(id, band.name, band.music_genre, band.responsible);

        

        
    }}