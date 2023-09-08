import { Router } from "express";
import * as controller from "../controllers/index.controllers";

export const index = Router();

index.get("/", controller.index);
