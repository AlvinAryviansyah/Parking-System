import { Router, Request, Response } from "express";
import { park, leave } from "./controllers/park.controller";
import swaggerUI from "swagger-ui-express"
import * as swaggerDocument from "./swagger.json"

const router = Router()

router.post("/park/:plate", park);
router.delete("/leave/:plate", leave);
router.get("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument))

export default router