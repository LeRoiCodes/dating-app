import express from "express";
import controller from "../controllers/CardController"

const router = express.Router();

router.post('/', controller.createCard);
router.get('/', controller.getCards);
export default router;