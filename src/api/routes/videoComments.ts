import { Router, Request, Response, NextFunction } from 'express';
import * as videoCommentsService from '../../services/videoComments';
import { isTimestampWithin24Hours } from '../../services/videoComments/utils';
const route = Router();

export default (app: Router) => {
  app.use('/videoComments', route);

  route.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const commentsFromDb = await videoCommentsService.getVideoComments(id);
      console.info('!!!!!', id);
      if (
        commentsFromDb &&
        isTimestampWithin24Hours(commentsFromDb.timestamp)
      ) {
        return res.json({ ...commentsFromDb, isFromDb: true }).status(200);
      }
      const comments = await videoCommentsService.fetchVideoComments(id);
      await videoCommentsService.updateVideoComments(id, comments);
      const commentsFromDbNew = await videoCommentsService.getVideoComments(id);

      return res.json({ ...commentsFromDbNew, isFromDb: false }).status(200);
    } catch (error) {
      console.error(error);
      return next(error);
    }
  });
  route.post('/', (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body;
      console.log(body, 'ss');
      return res.json({ user: 'hoho' }).status(200);
    } catch (error) {
      console.error(error);
      return next(error);
    }
  });
};
