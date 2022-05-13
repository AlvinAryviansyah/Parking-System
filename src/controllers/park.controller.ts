import { Request, Response } from "express";
import { modelPark, modelLeave} from "../models/park.model";

export async function park(req: Request, res: Response) {
    const car = {
        plate : req.params.plate
    }

    const result = await modelPark(car);

    if (result.level === '' && result.slot === 0) {
        res.status(404).json({message : "parking lot is full"});
    }else{
        res.status(200).json(result)
    }
}

export async function leave(req: Request, res: Response) {
    const car = {
        plate : req.params.plate
    }
    const result = await modelLeave(car);

    if (result.status === 'accepted') {
        res.status(200).json({message : `Car with plate number ${car.plate} is accepted to leave`});
    }else{
        res.status(404).json({message : `Car with plate number ${car.plate} is not found`});
    }
}