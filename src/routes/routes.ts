import { Router } from "express";
import * as playersController from "../controllers/playersController";
import { getClubs } from "../controllers/clubsController";

export const router = Router()

// get
router.get("/players", playersController.getPlayer)
router.get("/players/:id", playersController.getPlayerByid)
router.get("/clubs", getClubs)

// post
router.post("/players", playersController.postPlayer)

// delete
router.delete("/players/:id", playersController.deletePlayer)

// update
router.patch("/players/:id", playersController.updatePlayer)
