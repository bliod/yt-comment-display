import { Router, Request, Response } from 'express';
const route = Router();

export default (app: Router) => {
  app.use('/videoComments', route);

  route.get('/', (req: Request, res: Response) => {
    return res.json({ user: 'hihi' }).status(200);
  });
};
