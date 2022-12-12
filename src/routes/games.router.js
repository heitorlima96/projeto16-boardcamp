import { Router } from "express"

import { getGames, postGames } from "../controllers/gamescontroller"

const gamesRouter = Router();

gamesRouter.get('/games', getGames);
gamesRouter.post('/games', postGames);

export default gamesRouter;