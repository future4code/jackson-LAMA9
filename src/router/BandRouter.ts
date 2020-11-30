import express from "express";
import bandBusiness from "../business/BandBusiness"
import { BandController } from "../controller/BandController";


export const bandRouter = express.Router();

const bandController = new BandController(bandBusiness)

bandRouter.post("/createBand", bandController.createBand);